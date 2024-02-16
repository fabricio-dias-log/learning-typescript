import React from 'react';
// import component
import  FirstComponent  from "./components/FirstComponent";
// destructuring props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

// Using hooks
import State from './components/State';

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
      <SecondComponent name='Second'/>
      <Destructuring 
        title='First Post' 
        content='Some content' 
        commentsQty={12} 
        tags={['Cool','Nice','Bad']}
        category={Category.JS}
      />
      <Destructuring 
        title='Second Post' 
        content='Some content' 
        commentsQty={122} 
        tags={['JS','TS','Python']}
        category={Category.TS}
      />
      <Destructuring 
        title='Third Post' 
        content='Some content' 
        commentsQty={122} 
        tags={['Python']}
        category={Category.P}
      />

      <State/>
    </div>
  );
}

export default App;
