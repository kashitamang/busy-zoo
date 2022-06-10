import { useState } from 'react';
import './App.css';
//import components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import AnimalList from './Components/AnimalList/AnimalList.js';

function App() {
  //declare hooks
  const [animals, setAnimals] = useState(['giraffe', 'dolphin', 'bison', 'monkey']);

  //click handlers
  function handleGiraffeClick(){
    animals.push('giraffe');
    const copy = animals.slice();
    setAnimals(copy);
  }

  function handleDolphinClick(){
    animals.push('dolphin');
    const copy = animals.slice();
    setAnimals(copy);
  }

  function handleBisonClick(){
    animals.push('bison');
    const copy = animals.slice();
    setAnimals(copy);
  }

  function handleMonkeyClick(){
    animals.push('monkey');
    const copy = animals.slice();
    setAnimals(copy);
  }

  //returns
  return (
    <div className="App">
      <Header/>
      <h1>Pride Parade</h1>
      <h3>add animals to the parade:</h3>
      <div className='buttons'>
        <button onClick={handleGiraffeClick}>giraffe</button>
        <button onClick={handleDolphinClick}>bison</button>
        <button onClick={handleBisonClick}>bison</button>
        <button onClick={handleMonkeyClick}>monkey</button>
      </div>
      <AnimalList animals={animals}/>
      <Footer year="2022"/>
    </div>
  );
}

export default App;