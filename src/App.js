/* Class Type */
import React, { Component } from 'react';
import Subject from './components/Subject'
import Nav from './components/Nav';
import Article from './components/Article'
import './App.css';

//컴포넌트 만들기
class App extends Component{
  // 먼저 State 값 초기화
  constructor(props){
    super(props);
    this.state = {
      mode: 'read', //우리가 보는 페이지가 welcome 페이지 or read 페이지 인지 구분
      subject: {title:'WEB', sub:'World wide web!'},
      welcome: {title:'Welcome', sub:'Hello, React!'}, //mode가 welcome이면 이걸로 렌더링
      nav: [
        {id:1, title:'HTML', desc:'HTML is for information.'},
        {id:2, title:'CSS', desc:'CSS is for design.'},
        {id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT is for interaction.'}
      ],
      article: {title:'HTML', desc:'HTML is ~~~~.'}
    }
  }

  render() {
    console.log("App render.")
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.nav[0].title;
      _desc = this.state.nav[0].desc;
    }
    return(
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header> 
        <h1><a href="/" onClick={function(e){ //이 함수 안에서는 this가 컴포넌트 자기자신을 가리키지 않고, 아무값도 세팅되어있지 않다!
          //이벤트 설치
          console.log(e)
          e.preventDefault();
          this.state.mode = 'welcome'; //bind(this) 해주면 컴포넌트를 가리킨다.
          this.setState({  //state가 바뀌었을때 mode의 값을 변경해주고 싶다고 설정.
            mode:'welcome'
          });
          // debugger;
          }.bind(this)}>
          {this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> 

        <Nav data={this.state.nav}></Nav>
        {/* <Article title={this.state.article.title} desc={this.state.article.desc}></Article> */}
        <Article title={_title} desc={_desc}></Article>
      </div>  
    )
  }
}
export default App;