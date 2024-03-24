import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Watchlist from "./components/Watchlist";

function App() {
 

  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Watchlist/>}/>
      </Routes>
    </Router>
       

  )
}

export default App
