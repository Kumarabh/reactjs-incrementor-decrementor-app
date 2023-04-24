import './App.css';
import Test from './components/Test';
import { Provider } from 'react-redux'
import incDecStore from './stores/store';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import User from './scenes/users';
import Products from './scenes/products';
import Dashboard from './scenes/dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/inc-dec" element={
            <Provider store={incDecStore}>
              <Test />
            </Provider>
          } 
          />

        </Routes>
    </BrowserRouter>
    {/* <Provider store={incDecStore}>
    <Test />
    </Provider> */}
    </>
  );
}

export default App;
