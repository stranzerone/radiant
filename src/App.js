
import './App.scss';
import NewComponent from './components/Box';
import Footer from './components/Footer';
import WebsiteBuildersHeading from './components/TopBox';
import DownnBox from './components/downnBox';
import Header from './components/header';

function App() {
  return (
    <div className="App">
  <Header />
  <div className='appBox'>
  <WebsiteBuildersHeading />
  <NewComponent />
  <DownnBox />

  </div>
  
  <Footer />
    </div>



  );
}

export default App;
