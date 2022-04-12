import React from "react";
import './App.css';
import { CustomDateInput } from './components/CustomComponent/CustomDateInput';
// import { CustomAutoComplete } from './commonComponents/CustomAutoComplete';
import { Dashboard } from './components/dashboard/dashboard';

function App() {
console.log("on master branch");
  return (
    <Dashboard/>
    // <CustomAutoComplete/>
    // <CustomDateInput/>
  );
}

export default App;
