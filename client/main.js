import React, { Component } from 'react';
import axios from 'axios';
import { Meteor } from 'meteor/meteor';
import App from './collections/App.js'
import ReactDOM from 'react-dom';
import $ from 'jquery';



Meteor.startup(() => {
  // Render this component to the screen
ReactDOM.render(<App />, document.querySelector(".container"));

});
