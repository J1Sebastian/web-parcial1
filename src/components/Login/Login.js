import { useState } from 'react';
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./Login.css";

function Login() {

    const [formValues, setFormValues] = useState({ login: "", password: "" });

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then(response => {
                if (response.status === 200) {
                    setError(false);
                    window.location.href = "/cafes";
                } else {
                    setError(true);
                }
            })
            .catch(error => {
                console.log(error);
            }
            );
    }

    const handleCancel = (e) => {
    }

    return (
        <>
            <div className="centered-card">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col xs={12} md={9} xl={6} xxl={6}>
                            <div className='cs-row-sesion'>Inicio de sesion</div>
                            <Card className="cs-row">
                                <Card.Body className="cs-card-body">
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <Card.Subtitle className="mb-2"><strong>Nombre de usuario</strong></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <input type="text" className={`form-control mb-2 ${error ? 'error-input' : 'cs-input'}`} onChange={(e) => setFormValues({ ...formValues, login: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <Card.Subtitle className="mb-2"><strong>Contraseña</strong></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <input type="password" className={`form-control mb-2x ${error ? 'error-input' : 'cs-input'}`} onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row className="cs-row-buttons">
                                        <Col xs={6} md={6}>
                                            <button className="btn btn-primary mb-2 cs-sign-button w-100" onClick={handleSubmit}>Ingresar</button>
                                        </Col>
                                        <Col xs={6} md={6} className="text-end">
                                            <button className="btn btn-danger mb-2 cs-logout-button w-100" onClick={handleCancel}>Cancelar</button>
                                        </Col>
                                    </Row>
                                    {error &&
                                        <Row>
                                            <Col xs={12} md={12} xl={12} xxl={12}>
                                                <p className="error-cs">Error de autenticación. Revise sus credenciales</p>
                                            </Col>
                                        </Row>
                                    }

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );

}

export default Login;