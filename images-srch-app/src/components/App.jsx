import React from "react";
import ImagesSrchApp from "./images-srch-app";
import Menu from "./Menu";
import Helloworld from "./Helloworld";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Covid19 from "./Covid19";

const App = () => {
    return (
        <Router>
            <div>
                <Menu/>
                <Route path='/pics' component={ImagesSrchApp}/>
                <Route path='/hello' component={Helloworld}/>
                <Route path='/covid19' component={Covid19}/>
            </div>
        </Router>
    )
}
export default App;
