import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./Login.css";

function Login() {

    const [formValues, setFormValues] = useState({ email: "", password: "" });

    const [error, setError] = useState(false);

    const correctEmail = "admin"
    const correctPassword = "pass"

    const handleSubmit = (e) => {
        if (formValues.email === correctEmail && formValues.password === correctPassword) {
            window.location.href = "/cafes"
        }
        else {
            setError(true);
        }
    }

    const handleCancel = (e) => {
    }

    return (
        <>
            <div className="centered-card">
                <Container>
                    <Row className="cs-row-sesion">
                        <strong>Inicio de Sesion</strong>
                    </Row>
                    <Row className="justify-content-center cs-big-row">
                        <Card className="cs-row">
                            <Card.Body>
                                <Card.Subtitle className="mb-2"><strong>Nombre de Usuario</strong></Card.Subtitle>
                                <input type="text" className="form-control mb-2 cs-input" onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
                                <Card.Subtitle className="mb-2"><strong>Contraseña</strong></Card.Subtitle>
                                <input type="password" className="form-control mb-2 cs-input" onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
                                <Row>
                                    {/* botton de cancelar verde, cancela los valores registrados */}

                                    <Col xs={6} md={6}>
                                        <button className="btn btn-primary mb-2" onClick={handleSubmit}>Ingresar</button>
                                    </Col>
                                    <Col xs={6} md={6} className="text-end">
                                        <button className="btn btn-danger mb-2" onClick={handleCancel}>Cancelar</button>
                                    </Col>
                                </Row>
                                {error && <p className="error error-cs">Error de autenticación. Revise sus credenciales</p>}

                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div >
        </>
    );

}

export default Login;