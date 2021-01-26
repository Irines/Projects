import './style.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import TabsContent from "./TabsContent.js"
import Tasks from "./Tasks.js"
function MainContent() {
    return(
        <Container fluid id="mainContent">
            <Row>
                <Col xs={6} sm={4} md={4} id="tabsColumn"><TabsContent/></Col>
                <Col xs={12} sm={8} md={8} id="businessColumn"><Tasks /></Col>
            </Row>
        </Container>
    )
}
export default MainContent