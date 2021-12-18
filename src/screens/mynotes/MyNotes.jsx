
import "./myNotes.css"
import { Button } from "react-bootstrap"
import MainScreen from "../../components/mainScreen/MainScreen"
import { Link } from "react-router-dom"
// import axios from "axios"
import { useEffect} from "react"
import {useNavigate} from "react-router-dom"
import Loading from "../../components/Loading"
import Error from "../../components/Error"
import { useDispatch, useSelector } from "react-redux"
import { deleteNoteAction, getNotesAction } from "../../actions/notesAction"

const MyNotes = () => {
    // const user = JSON.parse(localStorage.getItem("userInfo"))
    // const token = user.accessToken
    const userLogin = useSelector(state => state.userLogin)
    
    const {userInfo} = userLogin;
    
    const deleteNote = useSelector(state => state.deleteNote)
    const {success:deleteSuccess} = deleteNote;
    const getAllNotes = useSelector(state => state.getAllNotes)
    const updateNote = useSelector(state => state.updateNote)
    const{notes, loading:noteLoading, error:notesError} = getAllNotes;
    const{success:updateSuccess} = updateNote;

    const dispatch = useDispatch()
    // const [notes, setNotes] = useState([])
    const navigate = useNavigate()
    // const [loading, setLoading] = useState(false)
    // const [message, setMessage] = useState()

    useEffect(() => {
        // const fetchNotes = async()=>{
        //     const config = {
        //         headers:{
        //             "Content-type":"application/json",
        //             Authorization:`Bearer ${userInfo.accessToken}`
                    
        //         }
        //     }
        //     try {
        //         let {data} = await axios.get("/notes", config)
        //         setNotes(data)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        //     fetchNotes()
        dispatch(getNotesAction())

        }, [userInfo,deleteSuccess,updateSuccess,dispatch])

        const handleDelete = async(id)=>{
            // try {
            //     const config = {
            //     headers:{
            //         "Content-type":"application/json",
            //         // Authorization:`Bearer ${token}`
                    
            //     }
            // }
            // const {data} = await axios.delete(`notes/${id}`,config)
            // setLoading(true)
            // navigate("/login")
            // } catch (error) {
            //     console.log(error);
            //     setMessage("Server error")
            // }
            dispatch(deleteNoteAction(id))
            navigate("/notes")
        }
        
    return (
        <MainScreen title={"Notes"}>
        <div className="myNotes">
            <Link to="/createNote">
            <Button variant="info" style={{marginBottom:"10px"}}>Create Note</Button>
            </Link>
            {noteLoading && <Loading/>}
            {notesError && <Error variant="danger">{notesError}</Error>}
            {/* {message && <Error variant="danger">{message}</Error>} */}
            {notes && notes.map(note => (
                <div key={note._id} className="note">
                <ul >
                    <li>{note.title}</li>
                </ul>
                <div className="buttons">
                <Link to={`/${note._id}`}>
                <Button className="btn">Edit</Button>
                </Link>
                <Button onClick={()=> handleDelete(note._id)} variant="danger">Delete</Button>
                </div>
                </div>
            ))}
                

            
            </div>
            
        
        </MainScreen>
    )
}

export default MyNotes
