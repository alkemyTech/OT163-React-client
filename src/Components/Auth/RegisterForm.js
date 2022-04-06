/* eslint-disable multiline-ternary */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, Container, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { AiFillEyeInvisible } from 'react-icons/ai';
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
    errors.email = 'Dirección de correo electrónico no válida';
  }

  if (!values.password) {
    errors.password = 'Campo requerido';
  } else if (
    !/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Za-z])\S{6,16}$/i.test(
      // eslint-disable-next-line comma-dangle
      values.password
    )
  ) {
    errors.password =
      'La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%).';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'La contraseña no coincide';
  }

  return errors;
};

const RegisterForm = () => {
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
      formik.resetForm();
    },
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="border-radius-25 bg-container">
        <Col
          md="4"
          id="left"
          className="d-none d-sm-none d-md-block border-top-left-radius-25 border-bottom-left-radius-25"
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
                  className={
                    formik.errors.name
                      ? 'rounded-pill border-danger'
                      : 'rounded-pill border-success'
                  }
                  placeholder="Nombre"
                />

                {formik.errors.name ? (
                  <span className="text-primary">{formik.errors.name}</span>
                ) : null}
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
                  className={
                    formik.errors.lastName
                      ? 'rounded-pill border-danger'
                      : 'rounded-pill border-success'
                  }
                  placeholder="Apellidos"
                />
                {formik.errors.lastName ? (
                  <span className="text-primary">
                    {formik.errors.lastName}{' '}
                  </span>
                ) : null}
              </Form.Group>
            </Row>
            <Form.Group controlId="email" className="mb-3 input-group-lg">
              <Form.Label className="fw-bold fs-5">Email</Form.Label>
              <Form.Control
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.errors.email
                    ? 'rounded-pill border-danger'
                    : 'rounded-pill border-success'
                }
                placeholder="Email"
              />
              {formik.errors.email ? (
                <span className="text-primary">{formik.errors.email} </span>
              ) : null}
            </Form.Group>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="password">
                <Form.Label className="fw-bold fs-5">Password</Form.Label>
                <InputGroup className="input-group-lg">
                  <Form.Control
                    type={showPass ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={
                      formik.errors.password
                        ? 'rounded-end rounded-pill border-danger'
                        : 'rounded-end rounded-pill border-success'
                    }
                    placeholder="Password"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon1"
                    className={
                      formik.errors.password
                        ? 'rounded-start rounded-pill border-danger'
                        : 'rounded-start rounded-pill border-success'
                    }
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  >
                    {showPass ? (
                      <AiFillEyeInvisible className="fs-3" />
                    ) : (
                      <FaEye className="fs-3" />
                    )}
                  </Button>
                </InputGroup>
                {formik.errors.password ? (
                  <span className="text-primary">
                    {formik.errors.password}{' '}
                  </span>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="confirmPassword">
                <Form.Label className="fw-bold fs-5">
                  Confirmar password
                </Form.Label>
                <InputGroup className="input-group-lg">
                  <Form.Control
                    type={showConfirmPass ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={
                      formik.errors.confirmPassword
                        ? 'rounded-end rounded-pill border-danger'
                        : 'rounded-end rounded-pill border-success'
                    }
                    placeholder="Confirmar password"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    className={
                      formik.errors.confirmPassword
                        ? 'rounded-start rounded-pill border-danger'
                        : 'rounded-start rounded-pill border-success'
                    }
                    onClick={() => {
                      setShowConfirmPass(!showConfirmPass);
                    }}
                  >
                    {showConfirmPass ? (
                      <AiFillEyeInvisible className="fs-3" />
                    ) : (
                      <FaEye className="fs-3" />
                    )}
                  </Button>
                </InputGroup>
                {formik.errors.confirmPassword ? (
                  <span className="text-primary">
                    {formik.errors.confirmPassword}{' '}
                  </span>
                ) : null}
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="btn-lg bg-gradient text-white me-5"
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
