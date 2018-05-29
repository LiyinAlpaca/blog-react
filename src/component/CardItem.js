import React from 'react';

//检测子标签是否为空
export default class CardItem extends React.Component {
   render(){
       if (this.props.children) {
           return <div><i className={this.props.icon}></i>{this.props.children}</div>;
       }else{
           return false;
       }
   }
}
