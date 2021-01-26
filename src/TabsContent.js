import './style.css';
import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav} from "react-bootstrap"
class TabsContent extends Component {
    constructor() {
        super()
        this.state = {
            tabsParent: null,
            tabs: [],
            tabsContent: []
        }
        this.hideTabsContent = this.hideTabsContent.bind(this)
        this.showTabsContent = this.showTabsContent.bind(this)
    }
    
    componentDidMount() {
        // this.setState({
        //     tabsParent : document.querySelector('#tabs')
        // })
        this.state.tabsParent = document.querySelector('#tabs');
        this.state.tabs = document.querySelectorAll('.nav-link');
        this.state.tabsContent = document.querySelectorAll('.tabcontent');

        this.state.tabsParent.addEventListener('click', (event) =>{
            const target = event.target;
            if (target && target.classList.contains('nav-link')) {
                this.state.tabs.forEach((item,i) => {
                    if (item === target) {
                        this.hideTabsContent();
                        this.showTabsContent(i);
                    }
                })
            }
        })
        this.hideTabsContent();
        this.showTabsContent();
        console.log(this.state.tabsParent);
        console.log(this.state.tabs);
        console.log(this.state.tabsContent);
    }

    hideTabsContent() {
        this.state.tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show','fade');
        })
        this.state.tabs.forEach(item => {
            item.classList.remove('active_tab');
        })
    } 
    

    showTabsContent(i = 0) {
        this.state.tabsContent[i].classList.add('show','fade');
        this.state.tabsContent[i].classList.remove('hide');
        this.state.tabs[i].classList.add('active_tab');
    }

    render() {
        return(
            <div className="leftPart">
                <Nav className="justify-content-center" activeKey="/workflow" id="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey="outline">Outline</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="workflow">Workflow</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Container>
                    <div className = "tabcontent">
                        {/* <Button>Edit</Button> */}
                        <button className = "btn">Edit</button>
                    </div>
                    <div className = "tabcontent">
                        <p>Other tab's content</p>
                    </div>  
                </Container>
            </div>
        )
    }

}
export default TabsContent