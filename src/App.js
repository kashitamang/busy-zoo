import { useState } from 'react';
import './App.css';
// import backgroundImgDay from '../src/backgroundday.png';
//import components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import AnimalList from './Components/AnimalList/AnimalList.js';

function App() {
  //declare hooks
  const [animals, setAnimals] = useState(['giraffe', 'dolphin', 'bison', 'monkey']);

  //click handlers
  function handleGiraffeClick(){

  }

  //returns
  return (
    <div className="App">
      <Header/>
      <AnimalList animals={animals}/>
      <div className='buttons'>
        <button onClick={handleGiraffeClick}>giraffe</button>
      </div>

      <Footer year="2022"/>
    </div>
  );
}

export default App;

// style={{ backgroundImage: `url(${backgroundImgDay})` }}