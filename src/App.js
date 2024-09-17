import React, { useState } from 'react';
// import person2 from './components/testfunction.js';
import Pers from './components/testfunction.js';
import Test from './components/classtest.js';
import Propstest from './components/props.js';
import Message from './components/statetest.js';
import Desturcture from './components/desturcture.js';
import Click from './components/eventhandle/click.js';
import Conditional from './components/ConditionRender.js';
import Listrender from './components/listrender.js';
import Cssjs from './components/css&js/cssjs.js';
function App() {
  return (<div className="App ">
    <Pers/>
    <Test/>
    <Propstest name="testing sucessful"></Propstest>
    <Message/>
    <Desturcture test1="krishna1" test2="krishna"/>
    <Click/>
    <Conditional/>
    <Listrender/>
    <Cssjs/>
  </div>);
}
export default App;
