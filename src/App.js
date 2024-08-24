import React from "react";
import ReactDOM from "react-dom/client";


const App = () =>{

    return(
        <div > 
          <p>This is a react dashboard assignment</p>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

export default App;