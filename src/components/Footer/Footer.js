import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";


function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center cs-footer">
                        <footer>
                            <p className="footer-text">Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;