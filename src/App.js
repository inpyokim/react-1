/* Class Type */
import React, { Component } from 'react';
import Nav from './components/Nav';
import Article from './components/Article'
import Subject from './components/Subject'
import './App.css';

//컴포넌트 만들기
class App extends Component{
  // 먼저 State 값 초기화
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
        <Nav data={this.state.nav}></Nav>
        <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
      </div>  
    );
  }
}
export default App;