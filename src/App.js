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
import productReducer from './Stote/Reducers/productReducer';
import { CreateProduct } from './Pages/CreateProduct';


const rootReducer= combineReducers({
  products:productReducer
});
const store = createStore(rootReducer,applyMiddleware(ReduxThunk));


function App() {
  return (
    <Provider store={store} >
      <div className='appContainer'>
        <DailyStoreHeader />
        <div className='bodyContainer'>
          <BrowserRouter>
            <SideMenu />
            <div className='mainContainer'>
              <Routes>
                <Route path='/' element={<Dashboard />} ></Route>
                <Route path='/register' element={<Regstration />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/product-mngr' element={<Products />} ></Route>
                <Route path='/product-create' element={<CreateProduct />} ></Route>
                <Route path='/order-mngr' element={<Orders />} ></Route>
                <Route path='/contact-us' element={<Contact />} ></Route>
                <Route path='/about-us' element={<About />} ></Route>
              </Routes>
            </div>
            <div className='menuContainer'>
            </div>
          </BrowserRouter>
        </div>

        <DailyStoreFooter />
      </div>
    </Provider>
  );
}

export default App;
