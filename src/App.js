import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from './components/Contents/Contents';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Contents />
      <ContactForm />
    </div>
  );
}

export default App;
