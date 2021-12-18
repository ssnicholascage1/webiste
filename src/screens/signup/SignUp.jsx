import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Error from '../../components/Error'
import MainScreen from '../../components/mainScreen/MainScreen'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { register } from '../../actions/userActions'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()


    const dispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(name,email, password);
        // if(password !== confirmPassword){
        //     return setMessage("Your Password does not much!")
        // }
        // const {data} = await axios.post("/user", {name, email, password})
        // navigate("/login")

        if(password !== confirmPassword){return setMessage("Your Password does not much!")}
        dispatch(register(name, email, password))
        navigate("/login")
    }
    return (
        <div>
            <MainScreen title="Register">
                <Form onSubmit={handleSubmit}>
                {message && <Error variant="danger">{message}</Error>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Your Name"
                    value={name} 
                    onChange={e=> setName(e.target.value)}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email} 
                    onChange={e=> setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password} 
                    onChange={e=> setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                    type="password"
                    placeholder="Password"
                    value={confirmPassword} 
                    onChange={e=> setConfirmPassword(e.target.value)}  />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>


            </MainScreen>
        </div>
    )
}

export default SignUp
