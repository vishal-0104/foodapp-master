// import logo from './logo.svg';
import './App.css';
import Hero from './components/hero'
import Cards from './components/cards'
import ContactUsForm from './components/contactUs';
import Footer from './components/footer';
import Phone from './components/phone';

function App() {
  return (
    <div className="App">
      <Hero />
      <Phone/>
      <Cards/>
      <ContactUsForm/>
      <Footer/>
    </div>
  );
}

export default App;
