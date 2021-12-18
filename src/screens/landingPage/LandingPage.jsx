import './landingPage.css'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        
        <div className="landingPage">
            <Container>
                <Row>
                    <div className="landing">
                        <div className="left">
                            <Link to="/login">
                                <Button variant="info">LOGIN</Button>
                            </Link>
                        </div>
                        <div className="right">
                            <Link to="/signUp">
                                <Button variant="outline-primary">SIGN UP</Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
