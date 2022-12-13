import Search from "./components/search/search.js"
import './App.css';

function App() {

const handleOnSearchChange=(searchData)=>{
  console.log(searchData);
}

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  )
}

export default App;
