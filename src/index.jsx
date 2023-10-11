// import * as $ from "jquery";

// import "./styles/style.css"
// import json from './assets/json.json'
// import logo from './assets/icons8-google-48.png'
// import { first } from "./first";

// import "@/styles/style.css";
// import json from "@/assets/json.json";
// import logo from "@/assets/icons8-google-48.png";
// import { first } from "@/first";
// import { test } from "@models/test";

import React from "react";
import { render } from "react-dom";

// first();
// console.log(json);
// console.log(logo);
// test();

// $("h1").text("Hello from JQ");

function App() {
  return (
    <div>
      <div className='logo'></div>
      <h1>Hello</h1>
      <p>React test</p>
      <span>ss</span>
    </div>
  );
}

render(<App />, document.getElementById("app"));
