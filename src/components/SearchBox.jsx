import React, { Component } from "react";
import logo from "../assets/logo.png";
class SearchBox extends Component {
  state = {};
  render() {
    let { handleSubmit, handleChange } = this.props;
    return (
      <div className='searchBox'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='main-form'>
          <form action='' onSubmit={handleSubmit}>
            <input
              type='text'
              className='input'
              placeholder='Search characters...'
              name='search'
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBox;
