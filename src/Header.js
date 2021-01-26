import './style.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Media} from "react-bootstrap"

function Header(){
    return(
        <Container fluid id="headerContent">
            <Media>
            <img
                width={22}
                height={22}
                className="align-self-center mr-3"
                src="./images/back-curved-arrow.svg"
                alt="Problem"
            />
            <Media.Body>
                <p>What is cloud-native? The modern way to develop applications </p>
            </Media.Body>
            </Media>
        </Container>  
    )
}

export default Header