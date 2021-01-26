import './style.css';
import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form, Row, Col, Media} from "react-bootstrap"

class TaskComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            completed: false,
            teamMember: "",
            dateTodo: new Date().toISOString().slice(0,10),
            title: props.item.title,
            iconUrl: props.item.iconUrl
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    componentDidMount() {
        const timeselect = document.getElementById("calendar"+ this.props.item.id)
        timeselect.classList.add('hide');
        document.getElementById("datepickericon" + this.props.item.id).onclick = function(e){
            timeselect.classList.remove('hide');
            timeselect.classList.add('showCalendar');
        }
    }
    render(){
        return(
            <form>
                <Container fluid className="partContainer">
                    <Row > 
                        <Col className="assignments" md={6}>
                            <Media>
                                <img
                                    width={22}
                                    height={22}
                                    className="align-self-center mr-3"
                                    src="./images/edit-regular.svg"
                                    alt="Problem"
                                />
                                <Media.Body>
                                    <p>{this.state.title}</p>
                                </Media.Body>
                            </Media>
                            <div className="icon">
                                <img
                                width={24}
                                height={24} 
                                src={this.state.iconUrl}
                                alt="Icon-center"
                                />
                            </div>
                        </Col>
                        <Col md={6}></Col>
                        
                    </Row>
                    <Row >
                        <Col className="assignments" md={6}>
                            <textarea></textarea>
                        </Col>
                        <Col className="executions" md={6}>
                        <label>
                            <input 
                                type="checkbox" 
                                name="completed"
                                checked={this.state.completed}
                                onChange={this.handleChange}
                            /> Completed
                        </label>
                        <div className="dateContainer">
                            <img 
                            width={22}
                            height={22}
                            src="./images/calendar.svg" 
                            alt="Date Picker" 
                            className="datepickericonAll"
                            id={"datepickericon"+this.props.item.id}
                            />
                            <label>Due:</label>
                            <input name="dateTodo" className="timeselect" type="date" id={"calendar"+this.props.item.id}
                            value={this.state.dateTodo}
                            onChange={event => this.setState({dateTodo: event.target.value})}
                            />           
                        </div>
                        <div className="access">
                            <div className="selectDiv">
                                <Form.Control as="select" 
                                value={this.state.teamMember}
                                onChange={this.handleChange}
                                name="teamMember"
                                >
                                    <option value="" disabled defaultValue>Assign team member</option>
                                    <option value="Alina">Alina</option>
                                    <option value="Andrei">Andrei</option>
                                    <option value="Vlad">Vlad</option>
                                </Form.Control>
                            </div>
                            <div>
                                <img
                                width={22}
                                height={22}
                                src="./images/access.svg" 
                                alt="Access icon" 
                                id="accessId"
                                />
                                <label>Access</label>
                            </div>
                        </div>
                        {/* <p>{this.state.dateTodo}</p> */}
                        </Col>
                    </Row>
                </Container>
            </form>
        )
    }
}
export default TaskComponent