import './style.css';
import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import tasksData from "./tasksData"
import TaskComponent from './TaskComponent';

class Tasks extends Component{
    constructor() {
        super()
        this.state = {
            tasks: tasksData
        }
    }
    render() {
        const tasksItems = this.state.tasks.map(item => <TaskComponent key={item.id} item={item}/>)
        return(
            <Container fluid id="rightContent">
                <Row className="justify-content-center"><h5>Bussiness</h5></Row>
                <Row className="justify-content-center"><h6>Manage assignments, responsibilities and dates</h6></Row>
                <Row>
                    <Col className="colsAlign" md={6}><h6>ASSIGNMENTS</h6></Col>
                    <Col className="colsAlign" md={6}><h6>EXECUTIONS</h6></Col>
                </Row>
                <Row id="rowContainer">
                    <Col>
                        {tasksItems}
                        {/* <Part id="1" title="Research" iconUrl="./images/globe-svg.svg"/>
                        <Part id="2" title="Writing" iconUrl="./images/feather-svg.svg"/>
                        <Part id="3" title="Editing" iconUrl="./images/pen.png"/>
                        <Part id="4" title="Proofreading" iconUrl="./images/search.png"/>
                        <Part id="5" title="Enhancement" iconUrl="./images/checkmark-svg.svg"/> */}
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default Tasks