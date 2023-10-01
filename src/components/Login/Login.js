import { useState } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./Login.css";
import { FormattedMessage } from 'react-intl';

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
        window.location.href = "/";
    }

    return (
        <>
            <div className="centered-card">
                    <Row className="justify-content-center align-items-center">
                        <Col xs={11} md={9} xl={6} xxl={6}>
                            <div className='cs-row-sesion'>
                                <FormattedMessage id="Log-in"></FormattedMessage>
                            </div>
                            <Card className="cs-row">
                                <Card.Body className="cs-card-body">
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <Card.Subtitle className="mb-2">
                                                <strong>
                                                    <FormattedMessage id="Username"></FormattedMessage>
                                                </strong>
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <input type="text" className={`form-control mb-2 ${error ? 'error-input' : 'cs-input'}`} onChange={(e) => setFormValues({ ...formValues, login: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <Card.Subtitle className="mb-2">
                                                <strong>
                                                    <FormattedMessage id="Password"></FormattedMessage>
                                                </strong>
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <input type="password" className={`form-control mb-2x ${error ? 'error-input' : 'cs-input'}`} onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row className="cs-row-buttons">
                                        <Col xs={6} md={6}>
                                            <button className="btn btn-success mb-2 cs-sign-button w-100" onClick={handleSubmit}>
                                                <FormattedMessage id="Sign-in"></FormattedMessage>
                                            </button>
                                        </Col>
                                        <Col xs={6} md={6} className="text-end">
                                            <button className="btn btn-danger mb-2 cs-logout-button w-100" onClick={handleCancel}>
                                                <FormattedMessage id="Cancel"></FormattedMessage>    
                                            </button>
                                        </Col>
                                    </Row>
                                    {error &&
                                        <Row>
                                            <Col xs={12} md={12} xl={12} xxl={12}>
                                                <p className="error-cs">
                                                    <FormattedMessage id="Authentication error. Check your credentials"></FormattedMessage>
                                                </p>
                                            </Col>
                                        </Row>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </div >
        </>
    );

}

export default Login;