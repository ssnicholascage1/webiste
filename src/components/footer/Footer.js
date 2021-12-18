import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="footer">
            <footer style={{width:"100%", position:"display", justifyContent:"center", alignItems:"center"}}>
                <Container >
                <Row>
                    <Col className="text-center py-3">
                        copyright 2021
                    </Col>
                </Row>
            </Container>            
            </footer>
            
        </div>
    )
}

export default Footer
