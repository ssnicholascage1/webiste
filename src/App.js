import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import CreateNote from './screens/createNote/CreateNote'
import Login from './screens/login/Login'
import MyNotes from './screens/mynotes/MyNotes'
import SignUp from './screens/signup/SignUp'
import UpdatePage from './screens/updatePage/UpdatePage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './screens/landingPage/LandingPage'
import { useSelector } from 'react-redux'

const App = () => {
    // const userInfo = localStorage.getItem("userInfo")
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    return (
        <Router>
            
            <Header/>
                <main>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="notes" element={userInfo? <MyNotes/> : <Login/>}/>
                    <Route path="login" element={ <Login/>}/>
                    <Route path="signUp" element={<SignUp/>}/>
                    <Route path="createNote" element={<CreateNote/>}/>
                    <Route path="/:id" element={<UpdatePage/>}/>
                </Routes>
                </main>
            <Footer/>
            
        </Router>
    )
}

export default App
