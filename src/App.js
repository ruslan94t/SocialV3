import {Switch,
    Route,
  } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {updateNewPostText} from "./redux/state";



const App= (props)=> {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Switch>
                <Route  path="/dialogs" >
                    <Dialogs
                    state={props.state.messagesPage}

                    />
                </Route>
            </Switch>
            <Switch>
                <Route path="/profile" >
                    <Profile
                        updateNewPostText={props.updateNewPostText}
                        addPost={props.addPost}
                        profilePage={props.state.profilePage}
                    />
                </Route>
            </Switch>
        </div>

    </div>
  );
}

export default App;
