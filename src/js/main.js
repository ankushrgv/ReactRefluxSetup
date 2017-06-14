import React from "react";
import ReactDOM from "react-dom";

import Login from "../components/Login.jsx"
// import Body from "../components/Body.jsx"
// import Footer from "../components/Footer.jsx"

// class World extends React.Component {
let World = React.createClass({
  render() {
    return (
        <div>React FTW
            <Login/>
        </div>
    )
  }
});

ReactDOM.render(<World/>, document.getElementById('app'));
