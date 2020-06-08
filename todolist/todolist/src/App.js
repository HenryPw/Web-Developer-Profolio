import React, { Component} from 'react';
import StateDemo from "./components/statedemo.js";
import ClickClickGame from "./components/clickclickgame.js";
import TodoPage from "./components/todopage";

class App extends Component {
  render() {
    return(
        <div className="App">
            <p>Hello World! appapp</p>
            <StateDemo/>
            <br/>
            <ClickClickGame/>            
            <br/>
            <TodoPage/>
          
        </div>
    )
  }
}
  

export default App;
