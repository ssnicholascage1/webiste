import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Error from '../../components/Error'
import MainScreen from '../../components/mainScreen/MainScreen'
import { useNavigate } from 'react-router'
import { useDispatch } from "react-redux"
import { login } from '../../actions/userActions'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    const userInfo = localStorage.getItem("userInfo")

    const dispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // try {
        //     const {data} = await axios.post("user/login", {email, password})
        //     localStorage.setItem("userInfo", JSON.stringify(data))
        //     navigate("/notes")
        // } catch (error) {
        //     setMessage("Invalid Credentials!")
        //     console.log(error);
        // }

        dispatch(login(email, password))
        navigate("/notes")
    }
    useEffect(() => {
        if(userInfo){
            navigate("/notes")
        }
    }, [navigate,userInfo])
    return (
        <MainScreen title="Login">
            <div>
            <Form onSubmit={handleSubmit}>
            {message && <Error variant="danger">{message}</Error>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
        </MainScreen>
    )
}

export default Login
