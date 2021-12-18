import "./mainScreen.css"
import { Container, Row } from 'react-bootstrap'

const MainScreen = ({title, children}) => {
    return (
        <div className="mainPage">
        <Container>
            <Row>
                <div className="page" >
                    {title && <h1>{title}</h1>}
                    {children}
                </div>
            </Row>
        </Container>
        </div>
    )
}

export default MainScreen
