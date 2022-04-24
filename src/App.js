import logo from './logo.svg';
import './App.css';
import { Regstration } from './Pages/Regtration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/register' element={<Regstration />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
