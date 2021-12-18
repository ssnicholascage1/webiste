export const deleteNoteReducer = (state={}, action)=>{
    switch (action.type) {
        case "DELETE_NOTE_REQUEST":
            return{loading:true}
        case "DELETE_NOTE_SUCCESS":
            return{loading:false, success:true}
        case "DELETE_NOTE_FAILURE":
            return{loading:false, error:action.payload}
        default:
            return state;
    }
}

//get all notes
export const getNotesReducer = (state={}, action)=>{
    switch (action.type) {
        case "GET_NOTES_REQUEST":
            return{loading:true}
        case "GET_NOTES_SUCCESS":
            return{loading:false, notes:action.payload}
        case "GET_NOTES_FAILURE":
            return{loading:false, error:action.payload}
        default:
            return state;
    }
}


//update Note 
export const updateNoteReducer = (state={}, action)=>{
    switch (action.type) {
        case "UPDATE_NOTE_REQUEST":
            return{loading:true}
        case "UPDATE_NOTE_SUCCESS":
            return{loading:false, success:true}
        case "UPDATE_NOTE_FAILURE":
            return{loading:false, error:action.payload}
        default:
            return state;
    }
}

//create note
export const createNoteReducer = (state={}, action)=>{
    switch (action.type) {
        case "CREATE_NOTE_REQUEST":
            return{loading:true}
        case "CREATE_NOTE_SUCCESS":
            return{loading:false, note:action.payload}
        case "CREATE_NOTE_FAILURE":
            return{loading:false, error:action.payload}
        default:
            return state;
    }
}
