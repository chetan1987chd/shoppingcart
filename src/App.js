import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Cart from './components/cart';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart' exact element={<Cart/>}/>         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
