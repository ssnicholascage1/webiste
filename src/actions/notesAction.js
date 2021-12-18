import axios from "axios"

export const deleteNoteAction = (id) => async(dispatch, getState) =>{
    try {
        dispatch({type:"DELETE_NOTE_REQUEST"})
        const {userLogin:{userInfo}} = getState()

        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${userInfo.accessToken}`
            }
        }
        const {data} = await axios.delete(`/notes/${id}`, config)
        dispatch({type:"DELETE_NOTE_SUCCESS", payload:data})
    } catch (error) {
        dispatch({type:"DELETE_NOTE_FAILURE", payload:error})
        console.log(error);
    }
}

//get Notes
export const getNotesAction = () => async(dispatch, getState) =>{
    try {
        dispatch({type:"GET_NOTES_REQUEST"})
        const {userLogin:{userInfo}} = getState()

        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${userInfo.accessToken}`
            }
        }
        const {data} = await axios.get('/notes', config)
        dispatch({type:"GET_NOTES_SUCCESS", payload:data})
    } catch (error) {
        dispatch({type:"GET_NOTES_FAILURE", payload:error.message})
        console.log(error);
    }
}

//update Note
export const updateNoteAction = (id, title,content,category) => async(dispatch, getState) =>{
    
    try {
        dispatch({type:"UPDATE_NOTE_REQUEST"})
        const {userLogin:{userInfo}} = getState()

        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${userInfo.accessToken}`
            }
        }
        const {data} = await axios.put(`/notes/${id}`, {title,content,category},config)
        dispatch({type:"UPDATE_NOTE_SUCCESS", payload:data})
    } catch (error) {
        dispatch({type:"UPDATE_NOTE_FAILURE", payload:error.message})
        console.log(error);
    }
}
//create Note
export const createNoteAction = (title,content,category) => async(dispatch, getState) =>{
    
    try {
        dispatch({type:"CREATE_NOTE_REQUEST"})
        const {userLogin:{userInfo}} = getState()

        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${userInfo.accessToken}`
            }
        }
        const {data} = await axios.post('/notes/createNote', {title,content,category},config)
        dispatch({type:"CREATE_NOTE_SUCCESS", payload:data})
    } catch (error) {
        dispatch({type:"CREATE_NOTE_FAILURE", payload:error.message})
        console.log(error);
    }
}
