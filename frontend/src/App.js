import './App.css';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';

// TODO : Remove the later div box 
function App() {
  return (
    <div className="App">
      <MainMenu></MainMenu>
      <div className='remove-later'></div>
      <div className='remove-later-2'></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
