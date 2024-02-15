import React from 'react';
// import component
import  FirstComponent  from "./components/FirstComponent";

function App() {
  // Variables
  const name: string = "Fabricio";
  const age: number = 24;
  const isWorking: boolean = true;

  // functions
  const userGreeting = (name: string): string => {
    return `Hello, ${name}`
  }

  return (
    <div className="App">
      <h1>TypeScript with React</h1>
      <h2>Name: { name }</h2>
      <p>Age: { age }</p>
      {isWorking && (
        <p>Working</p>
      )}

      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
    </div>
  );
}

export default App;
