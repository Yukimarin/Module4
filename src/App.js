import React, { Component } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CharactersContainer from "./components/CharactersContainer";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <CharactersContainer />
      </>
    );
  }
}

export default App;
