// App.js 는 자바스크립트가 아니다. 유사 자바스크립트.
/* Class Type */
import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
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
        <h2>HTML</h2>
        HTML is ~~~~.
      </article>
    );
  }
}

//컴포넌트 만들기
class App extends Component{
  render() {
    return(
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
        <Article></Article>
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