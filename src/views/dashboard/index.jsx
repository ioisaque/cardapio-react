import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import { GlobalVars } from '~/styles/global';
import { CatStyles } from '~/styles/categorias';

import api from '~/services/api';
import { BRL } from '~/services/functions';

export default function Dashboard() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const [selecionada, setSelecionada] = useState({
    id: 1,
    nome: 'Pizzas',
  });
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    async function UpdateCategorias() {
      const { data } = await api.get('/categorias/');

      console.debug('Categorias => ', data.data);
      setCategorias(data.data);

      setSelecionada(data.data.find((e) => e.id === '1'));
    }
    UpdateCategorias();
  }, []);

  useEffect(() => {
    async function UpdateProdutos() {
      const { data } = await api.get(
        `/produtos/?id_categoria=${selecionada.id}`
      );

      console.debug('Produtos => ', data);
      setProdutos(data.data);
    }
    UpdateProdutos();
  }, [selecionada]);

  return (
    <>
      <CatStyles />
      <Navbar dark expand="lg">
        <NavbarBrand className="d-none d-lg-block">
          <img
            src={GlobalVars.img.client_logo}
            alt="Cardápio Online - IdeYou"
          />
        </NavbarBrand>
        <NavbarBrand className="d-block d-lg-none">
          <img
            src={GlobalVars.img.logo_w}
            alt="Cardápio Online - IdeYou"
            style={{maxWidth: '100px', maxHeight: '100px'}}
          />
        </NavbarBrand>
        <NavbarToggler
          color="white"
          onClick={toggleNavbar}
          className="custom-toggler mr-2"
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {categorias.map((item) => (
              <NavItem
                key={item.id}
                onClick={() => {
                  setSelecionada(item);
                  !collapsed && toggleNavbar();
                }}
              >
                <img
                  src={'https://rochasdelivery.com.br/_sistema/' + item.foto}
                  alt={item.nome}
                  className="d-none d-sm-block"
                />
                <p>{item.nome}</p>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
      <Row className="m-0">
        <Col>
          <Row className="mt-5">
            <div className="title">
              <p className="top-h">Rocha's Delivery</p>
              <h2>{selecionada.nome}</h2>
              <div className="btm-style">
                <span>
                  <img
                    src={GlobalVars.img.btm}
                    alt=""
                    className="img-responsive"
                  />
                </span>
              </div>
            </div>
          </Row>
          <Row className="mt-5">
            {produtos &&
              produtos.map((item) => (
                <Col xl={2} md={4} xs={12} key={item.id}>
                  <Card className="produto">
                    <CardImg
                      className={
                        item.foto === 'uploads/imgs/placeholder_0.png'
                          ? 'opacity'
                          : ''
                      }
                      src={
                        'https://rochasdelivery.com.br/_sistema/' +
                        (item.foto !== 'uploads/imgs/placeholder_0.png'
                          ? item.foto
                          : selecionada.foto)
                      }
                      alt={item.descricao}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{item.descricao}</CardTitle>
                      <CardText>{item.ingredientes}</CardText>
                      <CardSubtitle tag="h6" className="mb-2">
                        {BRL(item.valor_venda)}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}
