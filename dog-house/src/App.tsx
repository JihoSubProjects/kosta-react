import './assets/css/style.scss';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Section from './components/Section';

function App() {
  return (
    <div id='wrap'>
      <Header />
      <Navigator />
      <div className='content cf'>
        <Section />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
