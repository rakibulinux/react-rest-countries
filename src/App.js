import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// To create react components 
// npx generate-react-cli component Person

function App() {
  return (
    <div className="App">
      <h1>Visiting Every country of the world!!!</h1>
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return(
    <div>
      {
      countries.map(countrie => <DisplayCountries name={countrie.name.common}></DisplayCountries>)
    }
    </div>
  )
}

function DisplayCountries(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  )
}

export default App;
