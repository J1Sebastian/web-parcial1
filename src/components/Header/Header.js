import Row from "react-bootstrap/Row";
import "./Header.css";

function Header() {
    return (
        <>
            <Row>
                <h3 className="cs-h3-header">El aroma magico</h3>
            </Row>
            <Row className="hr-row">
                <hr className="cs-hr" />
            </Row>
            <Row>
                <img src="/header.png" alt="header" />
            </Row>
            <Row className="hr-row">
                <hr className="cs-hr" />
            </Row>
        </>
    )
}

export default Header;
