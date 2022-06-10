import logo from './logo.svg';
import './App.css';
import backgroundImgDay from '../src/backgroundday.png';
//import components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
//import data 

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImgDay})` }}>
      <Header/>
      <Footer year="2022"/>
    </div>
  );
}

export default App;
