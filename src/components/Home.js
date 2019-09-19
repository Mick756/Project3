import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Friend from './Friend';
import '../styles/home.css';

import SignUp from './SignUp';

function Home() {

    const users = [
        {
            name: "Mick Arias",
            age: 18,
            description: "Easy going but most the time super emotional and not easy going."
        },
        {
            name: "James McCormick",
            age: 22,
            description: "Too many words, not too much space.."
        },
        {
            name: "Heather Arias",
            age: 42,
            description: "She don't need no man."
        },
        {
            name: "Lorelai Arias",
            age: 15,
            description: "No description needed for this demon."
        }
    ];

    // States
    const [number, setNumber] = useState(5);


    useEffect(() => {
        console.log("Mounted.");
    });

    return (
        <div className="App">
            <div className="Shadow App-header">Friend Finder</div>
            <div className="Button-Container">

                {/*<Router>*/}
                {/*    <Link to="/signup">*/}
                        <button className="btn Shadow Home-Page-Button" id="signUp" onClick={() => {  }}>Sign Up</button>
                    {/*</Link>*/}
                    {/*<Link to="/login">*/}
                        <button className="btn Shadow Home-Page-Button" id="login">Login</button>
                    {/*</Link>*/}
                    {/*<Link to="/search">*/}
                        <button className="btn Shadow Home-Page-Button" id="Search">Search</button>
                    {/*</Link>*/}
                    {/*<Link to="/friends">*/}
                        <button className="btn Shadow Home-Page-Button" id="Friends">Friends</button>
                {/*    </Link>*/}
                {/*</Router>*/}
            </div>

            <div className="Shadow App-header-2">
                Friends
                <span className="Query-Amount">
                    <button className="btn Shadow Search-Amount-Button" onClick={event => setNumber((number - 1) < 5 ? 5 : (number - 1))}>-</button>
                    {number}
                    <button className="btn Shadow Search-Amount-Button" onClick={event => setNumber((number + 1) > 20 ? 20 : (number + 1))}>+</button>
                </span>
            </div>
                {
                    users.map(user =>
                    <div className="Shadow Friend-Container">
                        <Friend name={user.name} age={user.age} description={user.description}/>
                    </div>)
                }

        </div>
    );
}

export default Home;
