import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import SocialMedia from '../../Components/Contact/SocialMedia';
import Logo from '../../assets/img/somos-mas-public.png';
import Newsletter from '../Newsletter/Newsletter';

const PublicFooter = () => {
  const navigation = [
    { to: '/', title: 'Inicio' },
    { to: '/nosotros', title: 'Nosotros' },
    { to: '/novedades', title: 'Novedades' },
    { to: '/actividades', title: 'Actividades' },
    { to: '/contacto', title: 'Contacto' },
  ];

  return (
    <footer className="bg-dark navbar-dark">
      <Container className="d-flex flex-wrap justify-content-center">
        <Container className="d-flex flex-column flex-wrap align-items-center">
          <Newsletter />
          <Navbar.Brand>
            <img src={Logo} width="100" className="mt-3" alt="Logo SOMOS MÁS" />
          </Navbar.Brand>
        </Container>
        <Navbar className="w-100 d-none d-lg-flex justify-content-center">
          <Nav>
            {navigation.map((item) => (
              <NavLink key={item.title} to={item.to} className="nav-link">
                {item.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar>
        <div className="w-100 text-center d-flex justify-content-center align-items-center">
          <SocialMedia layoutVertical={false} showTitle={false} clsBorder='border-0' p0={true} sizeIcon={25} showLinkedin={false} />
        </div>
        <hr className="bg-primary w-100 my-0 d-inline-block" />
        <p className="my-2 text-muted">
          <small>By Reactors © Copyright 2022 | All Rights Reserved.</small>
        </p>
      </Container>
    </footer>
  );
};

export default PublicFooter;
