import React, { Component } from 'react';
import $ from 'jquery';
import {Route ,Redirect} from 'react-router';




export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      sid: "",
      aux: "",
      link: "",

    };
  }

  handleButtonClick(){
    window.location=this.state.link
  }

  componentDidMount(){

//Under body change to raw and JSON
    var LOGIN = {
      "async": true,
      "crossDomain": true,
      "url": "https://www.islonline.net/webapi2?method=utils%2Flogin%2F1&he=JSON1&heo=JSON1",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "2f5d16b6-e371-bd1a-a63a-3fac89e79639"
      },
      "processData": false,
      "data": " {\"user\": \"wlrisigo@gmail.com\", \"pwd\": \"Idexx2018\" }"
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Under body change to raw and JSON
    var START = {
    "async": true,
    "crossDomain": true,
    //Add SID into url
    "url": "",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "617b1c6a-a784-a421-8444-1dbb946c2c16"
    },
    "processData": false,
    //Add SID
    "data": ""
    }
//Change to fat arrow function

//Call Login api
    $.ajax(LOGIN).done(response => {
      this.setState({ sid: response.data.sid });
      console.log("This is session ID \n" + response.data.sid )
      //then initialize params of START API
  }).then(
    () => {
      START.data = "{\"hs\" : \" + this.state.sid + \"}";

      START.url = "https://www.islonline.net/webapi2?method=isllight/session/start/1&hs="+ this.state.sid +"&he=JSON1&heo=JSON1"

    console.log("This is Start data/body \n" + START.data);

//Then Call Start session API
  $.ajax(START).done(response => {
      console.log("This is start URL PARAM \n" + START.url);
      console.log("This is Start data/body \n" + START.data);
    console.log(response.data);
    this.setState({ aux: response.data.auxId });
    this.setState({ link: response.data.startLink });
    console.log("Start Link:" + response.data.startLink);

  })
});
}

  render(){
    return(

        <div>
        <button onClick={this.handleButtonClick.bind(this)}
        type="button" className = "btn btn-primary" > Remote Desktop</button>
        </div>
    )
  }
}
