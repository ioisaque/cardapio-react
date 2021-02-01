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

export default function Dashboard() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const [selecionada, setSelecionada] = useState({ id: 1, nome: 'Pizzas' });
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    async function UpdateCategorias() {
      const { data } = await api.get('getCategorias.php');

      setCategorias(data);
    }
    UpdateCategorias();
  }, []);

  useEffect(() => {
    async function UpdateProdutos() {
      const { data } = await api.post('getProdutosByCatID.php', {
        id: selecionada.id,
      });

      setProdutos(data);
    }
    UpdateProdutos();
  }, [selecionada]);

  return (
    <>
      <CatStyles />
      <Navbar dark expand="md">
        <NavbarBrand className="ml-1 d-xl-none">
          <img
            src={GlobalVars.img.logo_w}
            alt="Cardápio Online - IdeYou"
            className="hidden-lg-down"
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
              <NavItem key={item.id} onClick={() => setSelecionada(item)}>
                <img
                  src={
                    'http://192.168.0.200/rochasdelivery.com.br/_sistema/' +
                    item.foto
                  }
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
                <Col xl={2} xs={6} key={item.id}>
                  <Card className="produto">
                    <CardImg
                      top
                      width="100%"
                      src={
                        'http://192.168.0.200/rochasdelivery.com.br/_sistema/' +
                        item.foto
                      }
                      alt={item.descricao}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{item.descricao}</CardTitle>
                      <CardText>{item.ingredientes}</CardText>
                      <CardSubtitle tag="h6" className="mb-2">
                        {'R$ ' + item.valor_venda.replace('.', ',') + '0'}
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