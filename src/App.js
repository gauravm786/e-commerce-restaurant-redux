// import './App.css';
// {/* The following line can be included in your src/index.js or App.js file*/}
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails'
import Cards from './components/Cards';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
    {/* Hello World */}
    {/* <Home /> */}
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/menu' element={<Cards />}></Route>
         {/* by clicking on image we will redirect to item details page and id will let us know about item of the object */}
      <Route path='/cart/:id' element={<CardsDetails />}></Route>
    </Routes>
    </div>
  );
}

export default App;
