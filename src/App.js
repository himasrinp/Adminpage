
import './App.css';
import React from 'react';
import styled  from 'styled-components';


import NavBar from "./Components/NavBar.js";
import EmployeeView from"./Components/EmployeeView";
import LeaveManager from './Components/LeaveManager';
function App() {
  
  return (
     <>
<NavBar/>
<EmployeeView/>
<LeaveManager/>
</>
  );
}

 
export default App;
