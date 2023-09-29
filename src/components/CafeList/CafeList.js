import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./CafeList.css";

function CafeList() {

    const [cafes, setCafes] = useState([]);

    const [selectedCafe, setSelectedCafe] = useState(null);

    const handleCafeClick = (cafe) => {
        fetch(`http://localhost:3001/cafes/${cafe.id}`)
            .then(response => response.json())
            .then(data => setSelectedCafe(data))
    }

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => response.json())
            .then(data => setCafes(data))
    }
        , [])

    return (
        <>
            <Container>
                <Row>
                    <Col xs={7} md={7}>
                        <table className="table">
                            <thead className="table-dark" >
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Región</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cafes.map((cafe) => (
                                    <tr key={cafe.id} onClick={() => handleCafeClick(cafe)} className="cafe-list">
                                        <td>{cafe.id}</td>
                                        <td>{cafe.nombre}</td>
                                        <td>{cafe.tipo}</td>
                                        <td>{cafe.region}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                    {selectedCafe &&
                        <Col xs={5} md={5} className="cs-col">
                            <Card className="cs-card">
                                <Card.Body className="cs-body">
                                    <Card.Title>{selectedCafe.nombre}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{selectedCafe.fecha_cultivo}</Card.Subtitle>
                                    <div className="custom-img">
                                        <Card.Img variant="top" src={selectedCafe.imagen} />
                                    </div>
                                    <div className="custom-text m-0">
                                        <Card.Text>
                                                Notas: {selectedCafe.notas}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Cultivado a una altura de {selectedCafe.altura} msnm </strong>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    }
                </Row>
            </Container>
        </>
    )
}

export default CafeList;