
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { createNoteReducer, deleteNoteReducer, getNotesReducer, updateNoteReducer } from "./reducers/notesReducers"
import { userLoginReducer, userSignUpReducer } from "./reducers/userReducer"

const reducers = combineReducers({
    userLogin:userLoginReducer,
    userSignUp:userSignUpReducer,
    deleteNote:deleteNoteReducer,
    getAllNotes:getNotesReducer,
    updateNote:updateNoteReducer,
    createNote:createNoteReducer
    
})
const middleWare = [thunk]

const keepLoggedIn = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null
const initialState = {userLogin:{userInfo:keepLoggedIn}}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;