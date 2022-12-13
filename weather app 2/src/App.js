import './App.css';
import Weatherapp from './components/Weatherapp';
function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Montserrat",
    display: "flex",
    justifycontent: "center",
    alignitems: "center"
  };

  return (   
    <div>
      <h1 className='mystyle'> Weather App</h1>
      <Weatherapp/>
    </div>
  );
}

export default App;
