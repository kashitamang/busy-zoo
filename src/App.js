import logo from './logo.svg';
import './App.css';
import backgroundImgDay from '../src/backgroundday.png';
//import components
import Header from './Components/Header/Header.js';
//import data 

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImgDay})` }}>
      <Header/>
    </div>
  );
}

export default App;
