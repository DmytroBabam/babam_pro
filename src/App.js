import React, {useState} from "react";

function App() {
    const [likes, setLikes] = useState(0)

    function Increment() {
        setLikes(likes + 1)
        const numberX = Number(1)
        const numberY = Number(1)


//......


        let whoLikes = numberX === numberY ? 'Likes' : 'not likes'
        console.log("Dima " + (whoLikes || "hiiiii") + ' Kenan')

    }

    function Decrement() {

        setLikes(likes - 1)
        console.log(likes);
    }

    return (
        <div className="App">

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
                        style={{color: 'green', borderRadius: '5px', height: '50px', width: '300px'}}>Increment
                </button>
                <button onClick={Decrement} style={{color: 'red', borderRadius: '5px'}}>Decrement</button>

            </div>


        </div>
    );
}

export default App;
