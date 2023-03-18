import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar /> 
                {/* navbar will always show because it's not in the switch statement */}
                <div className="content">
                    <Switch>
                        <Route path="/"> {/* the / automatically goes to home */}
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );

}

// to install router in terminal: "npm install react-router-dom@5" used @5 to specify the version used in this tutorial specifically
export default App;
