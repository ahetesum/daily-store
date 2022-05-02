import logo from './logo.svg';
import './App.css';
import { Regstration } from './Pages/Regtration';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from './Pages/Login';
import { DailyStoreHeader } from './Components/Func/DailyStoreHeader';
import { DailyStoreFooter } from './Components/Func/DailyStoreFooter';
import { Products } from './Pages/Products';
import { Orders } from './Pages/Orders';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';
import { Dashboard } from './Pages/Dashboard';
import { SideMenu } from './Components/Func/SideMenu';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import userReducer from './Store/Reducers/userReducer';
import productReducer from './Store/Reducers/productReducer';
import { AddProduct } from './Pages/AddProduct';
import { ProductMngr } from './Pages/ProductMngr';


const rootReducer= combineReducers({
  user:userReducer,
  products:productReducer
});
const dailyStore = createStore(rootReducer,applyMiddleware(ReduxThunk));

function App() {
  return (
    <div className='appContainer'>
      <Provider store={dailyStore} >
      <BrowserRouter>
        <DailyStoreHeader />
        <div className='bodyContainer'>
          <SideMenu />
          <div className='mainContainer'>
            <Routes>
              <Route path='/' element={<Dashboard />} ></Route>
              <Route path='/register' element={<Regstration />} ></Route>
              <Route path='/products' element={<Products />} ></Route>
              <Route path='/product-mngr' element={<ProductMngr />} ></Route>
              <Route path='/add-product' element={<AddProduct />} ></Route>
              <Route path='/order-mngr' element={<Orders />} ></Route>
              <Route path='/contact-us' element={<Contact />} ></Route>
              <Route path='/about-us' element={<About />} ></Route>
              <Route path='/login' element={<Login />} ></Route>
              <Route path='/register' element={<Regstration />} ></Route>
            </Routes>
          </div>
          <div className='menuContainer'>
          </div>
        </div>

        <DailyStoreFooter />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
