import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';


function App(props){
    return(
        <div>
            
            
         <Switch>
            <Route exact={true} path = '/' component = {Home}/>
            <Route path = '/about' component = {About}/>
            <Route path='*' component={Error404}/>
        </Switch>
            

            
        
        </div>
    );
}
export default App;