import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    let { name, img, nickname, status, portrayed, birthday } = this.props;
    return (
      <>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src={img} alt={name} className='card-img' />
            </div>
            <div className='flip-card-back'>
              <h3>{name}</h3>
              <hr />
              <p>Actor Name: {portrayed}</p>
              <p>Nickname: {nickname}</p>
              <p>Birthday: {birthday}</p>
              <p>Status: {status}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
