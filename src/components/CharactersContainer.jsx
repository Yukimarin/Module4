import React, { Component } from "react";
import Result from "./Result";
import SearchBox from "./SearchBox";
class CharactersContainer extends Component {
  state = {
    films: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.search.value);
    fetch(`https://breakingbadapi.com/api/`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`${data.characters}`)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ films: data });
            console.log(this.state.films);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    let result = this.state.films;
    console.log(result);
    return (
      <>
        <SearchBox
          handleSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <div className='container'>
          {result.map((e, i) => (
            <Result
              name={e.name}
              key={i}
              category={e.category}
              birthday={e.birthday}
              portrayed={e.portrayed}
              nickname={e.nickname}
              status={e.status}
              img={e.img}
            />
          ))}
        </div>
      </>
    );
  }
}

export default CharactersContainer;
