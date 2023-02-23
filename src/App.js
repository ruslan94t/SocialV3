import {Switch,
    Route,
    Link,
    useRouteMatch} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";



const App= ()=> {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Switch>
                <Route  path="/dialogs" >
                    <Dialogs />
                </Route>
            </Switch>
            <Switch>
                <Route path="/profile" >
                    <Profile />
                </Route>
            </Switch>



        </div>

    </div>
  );
}

export default App;
