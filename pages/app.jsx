import React, { useState } from 'react';


function App(){
    const [inputList, setInputList]=useState("");
    const itemEvent= (event) =>{
        setInputList(event.target.value)
    }
    return(
         <>
             <div className="first-div">
                <div className="second-div">
                    <br/>
                    <h1>To Do List</h1>
                    <br/>
                    <input type="text" placeholder="Add a item" onChange={itemEvent}/>
                    <button>+</button>
                    <ol> 
                        <li>{inputList}</li>
                    </ol>
                </div>
             </div>
         </>
    )
}


export default App;