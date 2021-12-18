import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router'
import { getSingleNotesAction, updateNoteAction } from '../../actions/notesAction'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import MainScreen from '../../components/mainScreen/MainScreen'

const UpdatePage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const updateNote = useSelector(state => state.updateNote)
    const {loading, error} = updateNote;
    // const user = JSON.parse(localStorage.getItem("userInfo"))
    // const token = user.accessToken
    const {id} = useParams()
    const navigate = useNavigate()
    
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        // try {
        //     const config = {
        //         headers:{
        //             "Content-type":"application/json",
        //             Authorization:`Bearer ${token}`
        //         }
        //     }
        //     const {data} = await axios.put(`notes/${params.id}`,{title, content, category},config)
        //     navigate("/notes")
        // } catch (error) {
        //     console.log(error);
        // }

        dispatch(updateNoteAction(id, title,content,category))
        navigate("/notes")
    }

    useEffect(() => {
        const fetchNote = async()=>{
        try {
            const config = {
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${userInfo.accessToken}`
            }
        }
            const {data} = await axios.get(`/notes/${id}`,config)
            setTitle(data.title)
            setContent(data.content)
            setCategory(data.category)
        } catch (error) {
            console.log(error);
        }
    }
        fetchNote()
    }, [id,userInfo])
    return (
        <div>
            <MainScreen title="Update Note">
                <div>
                    <Form onSubmit={handleSubmit}>
                    
                    {error && <Error variant="danger">{error}</Error>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            type="text"  
                            placeholder="Enter Title"
                            value={title}
                            onChange={e=>setTitle(e.target.value)}/>
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
                            <Form.Control type="text" placeholder="Category"
                            value={category}
                            onChange={e=>setCategory(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Update Note
                        </Button>
                        <Button variant="danger" type="submit">
                            Delete
                        </Button>
                    </Form>
                </div>
            </MainScreen>
        </div>
    )
}

export default UpdatePage
