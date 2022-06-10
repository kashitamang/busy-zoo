import { useState } from 'react';
import './App.css';
//import components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import AnimalList from './Components/AnimalList/AnimalList.js';
import OpenClosedSign from './Components/OpenClosedSign/OpenClosedSign.js';

function App() {
  //declare hooks
  const [animals, setAnimals] = useState(['giraffe', 'dolphin', 'bison', 'monkey']);
  const [swanSize, setSwanSize] = useState(10);
  const [walrusSize, setWalrusSize] = useState(10);
  const [zooIsOpen, setZooIsOpen] = useState(true);

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
  // 🦭
  //returns
  return (
    <div className="App">
      <Header/>
      <OpenClosedSign zooIsOpen={zooIsOpen}/>
      <button onClick={() => setZooIsOpen(!zooIsOpen)}>Toggle Zoo</button>
      <div className="petting-zoo">
        <h1>Petting Zoo</h1>
        <h3>pet animals to make their hearts bigger</h3>
        <div className="gay-animal">
          <button onClick={() => setSwanSize(swanSize + 1)}>pet</button>
          <button onClick={() => setWalrusSize(walrusSize - 1)}>oh no, you are making the other animals jealous...</button>
          <img src="swan.png" width={swanSize * 15}/>
        </div>
        <div className="gay-animal">
          <button onClick={() => setWalrusSize(walrusSize + 1)}>pet</button>
          <button onClick={() => setSwanSize(swanSize - 1)}>oh no, <br/>you are making the other animals jealous</button>
          <img src="walrus.png" width={walrusSize * 15}/>
        </div>
      </div>
      <p>🌈   🌈   🌈  🌈  🌈  🌈  🌈  🌈  🌈  🌈  🌈  🌈  🌈  🌈  🌈</p>
      <h1>add animals to the pride parade:</h1>
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