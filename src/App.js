import { useState } from 'react';
import './App.css';
//import components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import AnimalList from './Components/AnimalList/AnimalList.js';
import OpenClosedSign from './Components/OpenClosedSign/OpenClosedSign.js';
import useSound from 'use-sound';
import themeSong from './themesong.mp3';
import CustomButton from './Components/CustomButton.js';

function App() {
  //declare hooks
  const [animals, setAnimals] = useState(['giraffe', 'dolphin', 'bison', 'monkey']);
  const [swanSize, setSwanSize] = useState(10);
  const [walrusSize, setWalrusSize] = useState(10);
  const [zooIsOpen, setZooIsOpen] = useState(true);
  const [play] = useSound(
    themeSong,
    { volume: 0.1 },
    { interrupt: true });

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
  
  // 🦭 a little walrus for the road 

  //returns
  return (
    <div className="App">
      <Header/>
      <div className="sign-container">
        <CustomButton onClick={play}>🎶</CustomButton>
        <OpenClosedSign zooIsOpen={zooIsOpen}/>
        <CustomButton onClick={() => setZooIsOpen(!zooIsOpen)}>Toggle Zoo</CustomButton>
      </div>
      <div className="petting-zoo-container">
        <h1>Petting Zoo</h1>
        <h3>pet animals to make their hearts bigger</h3>
        <div className="gay-animals">
          <div className="gay-animal">
            <CustomButton onClick={() => setSwanSize(swanSize + 1)}>pet</CustomButton>
            <CustomButton onClick={() => setWalrusSize(walrusSize - 1)}>oh no, you are making the other animals jealous...</CustomButton>
            <img src="swan.png" width={swanSize * 15}/>
          </div>
          <div className="gay-animal">
            <CustomButton onClick={() => setWalrusSize(walrusSize + 1)}>pet</CustomButton>
            <CustomButton onClick={() => setSwanSize(swanSize - 1)}>oh no, you are making the other animals jealous</CustomButton>
            <img src="walrus.png" width={walrusSize * 15}/>
          </div>
        </div>
      </div>
      <div className="parade-container">
        <h1>add animals to the pride parade:</h1>
        <div className='buttons'>
          <CustomButton onClick={handleGiraffeClick}>giraffe</CustomButton>
          <CustomButton onClick={handleDolphinClick}>dolphin</CustomButton>
          <CustomButton onClick={handleBisonClick}>bison</CustomButton>
          <CustomButton onClick={handleMonkeyClick}>monkey</CustomButton>
        </div>
        <AnimalList animals={animals}/>
      </div>
      <Footer year="2022"/>
    </div>
  );
}

export default App;