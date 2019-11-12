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
  // 컴포넌트가 실행될때 constructor가 있으면 제일 먼저 실행되서, 초기화를 담당한다.
  constructor(props){
    super(props);
    this.state = {
      subject: {title:'WEB', sub:'World wide web!'},
      nav: [
        {id:1, title:'HTML', desc:'HTML is for information.'},
        {id:2, title:'CSS', desc:'CSS is for design.'},
        {id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT is for interaction.'}
      ],
      article: {title:'HTML', desc:'HTML is ~~~~.'}
    }
  }

  render() {
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Nav></Nav>
        <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
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