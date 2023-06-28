import './App.css';
import FeaturedEventCarousel from './components/FeaturedEventCarousel';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import events from './events';

// TODO : Remove the later div box 
function App() {
  return (
    <div className="App">
      <MainMenu></MainMenu>
      <div className='remove-later'></div>
      <FeaturedEventCarousel eventsArray={events} ></FeaturedEventCarousel>
      <div className='remove-later-2'></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
