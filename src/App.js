import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './components/pages/About';


function App(){
    return(
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path ='/' exact component={Home} />
                    <NavLink path='/about' component={About}/>

                </Switch>


                


            </Router>
        </>
    );
}
export default App; 