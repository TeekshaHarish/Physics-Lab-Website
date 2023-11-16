import {React} from 'react';
import {Header} from "./components/Navbar/Header"
import './App.css'
import {News} from "./News/News";
import Home from './components/Home/Home';
import Publications from './components/Publications/Publications';
// import {News} from "./News/News";
// import { Home } from './components/Home/Home';
import { Research } from './components/Research/Research';

function App() {
  return (
    <>
    <Header/>
    {/* <Home /> */}
    {/* <News/> */}
    {/* <News/> */}
    {/* <Research/> */}
    {/* <Header/> */}
    
    <Publications/>
    </>
  )
}


export default App
