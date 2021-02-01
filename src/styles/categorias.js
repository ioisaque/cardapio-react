import { createGlobalStyle } from 'styled-components';
import { GlobalVars } from '~/styles/global';

export const CatStyles = createGlobalStyle`
  .title {
    width: 100%;
    float: left;
    text-align: center;
  }
  .title h2 {
    color: #000000;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  .special-offers-sec .title {
    margin-bottom: 30px;
  }

  .title p.top-h {
    margin: 0;
    font-size: 2.3rem;
    font-family: 'Arizonia', cursive;
    color: ${GlobalVars.color.danger};
  }

  .navbar, .navbar-nav {
    width: 100%;
    color: ${GlobalVars.color.white};
    background-color: ${GlobalVars.color.danger};
  }

  .navbar-brand {
    display: block;
    margin: 0 auto;
    color: ${GlobalVars.color.white};
  }

  .navbar-brand img {
    max-width: 100px;
    max-height: 100px;
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }

  .nav-item {
    min-width: 10%;
    max-height: 150px;
    cursor: pointer;
  }

  .nav-item img {
    max-width: 180px;
    height: 100px;
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
  
  .nav-item p {
    width: 100%;
    margin: 0.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
  }

  .produto {
    min-height: calc(100% - 1rem);
    margin-bottom: 1rem !important;
  }

  .produto img {
    width: 100%;
    min-height: 190px;
    max-height: 250px;
    display: block;
    padding: .5rem;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .produto h5 {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: .5rem !important;
    color: ${GlobalVars.color.danger}
  }
  .produto h6 {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: right;
    margin-bottom: 0rem !important;
    font-family: 'Poppins', monospace;
    color: ${GlobalVars.color.success}
  }
  
  .produto p {
    font-size: 80%;
    font-weight: 500;
    text-align: justify;
    color: ${GlobalVars.color.black}
  }

  .custom-toggler.navbar-toggler {
    border-width: 2px;
    border-color: rgba(255,255,255, 1);
  }

  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
`;
