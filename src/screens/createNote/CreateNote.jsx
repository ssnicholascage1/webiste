import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button  } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { createNoteAction } from '../../actions/notesAction'
import MainScreen from '../../components/mainScreen/MainScreen'

const CreateNote = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')

    // const user = JSON.parse(localStorage.getItem("userInfo"))
    // const token = user.accessToken
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // try {
        //     const config ={
        //         headers:{
        //             "Content-type":"application/json",
        //             Authorization:`Bearer ${token}`
        //         }
        //     }
        //     const {data} = await axios.post("/notes/createNote", {title, content, category}, config)
        //     navigate("/notes")
        // } catch (error) {
        //     console.log(error);
        // }
        dispatch(createNoteAction(title,content,category))
        navigate("/notes")
    }
    
    return (
        <div>
            <MainScreen title="Create Note">
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Title" 
                            value={title}
                            onChange={e=>setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Content</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Contents"
                            value={content}
                            onChange={e=>setContent(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Category</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Category"
                            value={category}
                            onChange={e=>setCategory(e.target.value)}/>
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Create Note
                        </Button>
                    
                    </Form>
                </div>
            </MainScreen>
        </div>
    )
}

export default CreateNote
