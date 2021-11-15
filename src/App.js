import './App.css';
import Booster from './Booster';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Shorturl from './Shorturl';
import Stats from './Stats';
import 'bootstrap/dist/css/bootstrap.css'; 


const App = () => {

  return (
    <div className="App">
      <Header />
      <Container />
      <Shorturl />
      <Stats />
      <Booster />
      <Footer />
    </div>
  );
}

export default App;
