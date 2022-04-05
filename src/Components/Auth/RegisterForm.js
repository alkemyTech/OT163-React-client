import React from 'react';
import { useFormik } from 'formik';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './registerForm.css';
import './shapes.css';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Campo requerido';
  }

  if (!values.lastName) {
    errors.lastName = 'Campo requerido';
  }

  if (!values.email) {
    errors.email = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Campo requerido';
  } else if (values.password.length < 6) {
    errors.password =
      'La contraseña debe tener una longitud mínima de 6 caractees';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'La contraseña no coincide';
  }

  return errors;
};

const RegisterForm = () => {
  // const [initialValues, setInitialValues] = useState({
  //   name: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const handleChange = (e) => {
  //   if (e.target.name === 'name') {
  //     setInitialValues({ ...initialValues, name: e.target.value });
  //   }
  //   if (e.target.name === 'lastName') {
  //     setInitialValues({ ...initialValues, lastName: e.target.value });
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(initialValues);
  //   localStorage.setItem('token', 'tokenValueExample');
  // };

  return (
    <Container>
      <Row className="border-radius-25 bg-container">
        <Col
          md="4"
          className="d-none d-sm-none d-md-block bg-primary bg-gradient-primary border-top-left-radius-25 border-bottom-left-radius-25"
        >
          <div className="h-100">
            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
              <div id="contentCircle" className="rounded-pill bg-secondary">
                <img
                  className="rounded-pill"
                  src="https://img.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg"
                  alt="register"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="triangle me-2"></div>
              <div className="quadrate me-2"></div>
              <div className="circle"></div>
            </div>
          </div>
        </Col>
        <Col md="8">
          <h1 className="text-secondary text-center text-uppercase m-4">
            Formulario de registro
          </h1>
          <Form onSubmit={formik.handleSubmit} className="m-3">
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="name"
                className="mb-3 input-group-lg"
              >
                <Form.Label className="fw-bold fs-5">Nombre</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="rounded-pill"
                  placeholder="Nombre"
                />
                {formik.errors.name
                  ? <></> && <div>{formik.errors.name}</div>
                  : null}
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="lastName"
                className="mb-3 input-group-lg"
              >
                <Form.Label className="fw-bold fs-5">Apellidos</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="rounded-pill"
                  placeholder="Apellidos"
                />
                {formik.errors.lastName
                  ? <></> && <div>{formik.errors.lastName} </div>
                  : null}
              </Form.Group>
            </Row>
            <Form.Group controlId="email" className="mb-3 input-group-lg">
              <Form.Label className="fw-bold fs-5">Email</Form.Label>
              <Form.Control
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="rounded-pill"
                placeholder="Email"
              />
              {formik.errors.email
                ? <></> && <div>{formik.errors.email} </div>
                : null}
            </Form.Group>
            <Row className="mb-4">
              <Form.Group
                as={Col}
                md="6"
                controlId="password"
                className="mb-3 input-group-lg"
              >
                <Form.Label className="fw-bold fs-5">Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="rounded-pill"
                  placeholder="Password"
                />
                {formik.errors.password
                  ? <></> && <div>{formik.errors.password} </div>
                  : null}
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="confirmPassword"
                className="mb-3 input-group-lg"
              >
                <Form.Label className="fw-bold fs-5">
                  Confirmar password
                </Form.Label>
                <Form.Control
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className="rounded-pill"
                  placeholder="Confirmar password"
                />
                {formik.errors.confirmPassword
                  ? <></> && <div>{formik.errors.confirmPassword} </div>
                  : null}
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="bg-gradient text-white me-5"
            >
              Regístrarme
            </Button>
            {'    '}
            <Link to="/login" className="fw-bold fs-5">
              ¿Ya estas registrado?, inicia sesión aquí
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
