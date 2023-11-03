import React , {useState} from "react";
import './App.css';
// import newpage from './Pages/newpage';
// import homepage from "./Pages/homepage";

function App() {
    const [likes, setLikes] = useState(0)

    function Increment() {
        setLikes(likes + 1)

        console.log(likes);
    }

    function Decrement() {
        setLikes(likes - 1)
        console.log(likes);
    }

    return (<div className="App">

            <h1>{likes}</h1>
            <h2>Test</h2>
            <div style={{
                backgroundColor: 'red',
                margin: '20px',
                padding: '50px',
                textAlign: 'center',
                bottom: 0,
                flexDirection: 'column',
                flex: 1
            }}>

                <button onClick={Increment}
                        style={{
                            color: 'black',
                            borderRadius: '5px', height: '50px', width: '300px'
                        }}>Increment
                </button>
                <button onClick={Decrement}
                        style={{color: 'black', borderRadius: '5px', height: '50px', width: '300px'}}>Decrement
                </button>

                <newpage />
                <homepage />
                {/* More Information about our Site */}
            </div>
        </div>


    );
}

export default App;
