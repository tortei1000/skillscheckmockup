import React, { Component } from 'react';
import { HashRouter as Route } from "react-router-dom"
import routes from "./routes"
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <Route>
        <div >
          <Navbar />
          {routes}
        </div>
      </Route>
    );
  }
}

export default App;
