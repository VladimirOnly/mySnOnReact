import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import NewMsg from "./components/Dialogs/Message/NewMessage/newMsg";
import DialogsContainer from "./components/Dialogs/DIalogsContainer";
import MyOwn from "./components/MyOwn/MyOwn";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    {/*<Route path='/profile' render={() => <Profile profilePage={props.state.profileReducer.profilePage} dispatch={props.dispatch}/>}/>*/}

                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path={'/setting'} component={Setting}/>
                    <Route path='/dialogs' component={NewMsg}/>

                    <Route path='/myOwn' component={MyOwn}/>

                    <Route path='/users' component={UsersContainer}/>

                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>
    )
}
export default App;




