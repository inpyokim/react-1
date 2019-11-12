// App.js 는 자바스크립트가 아니다. 유사 자바스크립트.
/* Class Type */
import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
      <h1>{this.props.title}</h1>
      {this.props.sub}
      </header> 
    );
  }
}

class Nav extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JAVASCRIPT</a></li>
        </ul>  
      </nav> 
    );
  }
}

class Article extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

//컴포넌트 만들기
class App extends Component{
  render() {
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For Ui!"></Subject> {/* 여러개 복사도 가능*/}
        <Nav></Nav>
        <Article title="HTML" desc="HTML is ~~~."></Article>
      </div>  
    );
  }
}
export default App;

/* Function Type
import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      hello@!!
    </div>
  );
}
export default App;
*/