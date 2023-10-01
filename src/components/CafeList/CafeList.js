import { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { FormattedDate, FormattedMessage } from 'react-intl';
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
            <Row className="cs-tb-row">
                <Col xs={12} md={12} xl={7} xxl={7}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="cs-tr-titles">
                                    #
                                </th>
                                <th className="cs-tr-titles">
                                    <FormattedMessage id="Name"></FormattedMessage>
                                </th>
                                <th className="cs-tr-titles">
                                    <FormattedMessage id="Type"></FormattedMessage>
                                </th>
                                <th className="cs-tr-titles">
                                    <FormattedMessage id="Region"></FormattedMessage>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cafes.map((cafe) => (
                                <tr key={cafe.id} onClick={() => handleCafeClick(cafe)} className="cafe-list">
                                    <td className='cs-id'>{cafe.id}</td>
                                    <td>{cafe.nombre}</td>
                                    <td>{cafe.tipo}</td>
                                    <td>{cafe.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
                {selectedCafe &&
                    <Col xs={12} md={12} xl={5} xxl={5} className="cs-col d-flex justify-content-center">
                        <Card className="cs-card">
                            <Card.Body className="cs-body">
                                <Card.Title className='cs-cardTitle'>{selectedCafe.nombre}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted cs-fecha">
                                    {selectedCafe.fecha_cultivo === undefined ? <FormattedMessage id="No date"></FormattedMessage> :
                                    <FormattedDate
                                        value={new Date(selectedCafe.fecha_cultivo)}
                                        year='numeric'
                                        month='long'
                                        day='numeric'
                                        weekday='long'
                                        timeZone='UTC'
                                    />
                                    }
                                </Card.Subtitle>

                                <div className="custom-img">
                                    <Card.Img variant="top" src={selectedCafe.imagen} className='cs-img' />
                                </div>

                                <div className="mb-3">
                                    <Row>
                                        <Card.Text>
                                            <FormattedMessage id="Notes"></FormattedMessage>
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            {selectedCafe.notas}
                                        </Card.Text>
                                    </Row>
                                </div>
                                <div className="mb-2 custom-text">
                                    <Row>
                                        <Card.Text>
                                            <FormattedMessage id="Cultivated at an altitude of"></FormattedMessage>
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            {selectedCafe.altura} <FormattedMessage id="masl"></FormattedMessage>
                                        </Card.Text>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </>
    )
}

export default CafeList;