import React, { Component } from 'react';

class Subject extends Component{
  // function render() {} 함수지만 class 안에 들어가는 함수는 function 생략(최신js)
  render() {
    return (
      <header> 
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header> 
    );
  }
}

export default Subject;