import React, { Component } from 'react';
//'react' 라는 라이브러리에서 Component라는 클래스를 로딩한 것.
//react import 하지 않으면 react 구문으로 인식하지 못함

class Nav extends Component{
  render() {
    console.log("Nav render.")
    var lists = [];
    var data = this.props.data;
    var i = 0; 
    while(i < data.length){
      lists.push(<li key={data[i].id}><a href={"/nav/"+data[i].id}>{data[i].title}</a></li>);
      i = i + 1;
    }

    return (
      <nav>
        <ul>      
          {/* <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JAVASCRIPT</a></li> */}
          {lists}
        </ul>  
      </nav>  
    )
  }
}

export default Nav; 


