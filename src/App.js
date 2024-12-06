import logo from './logo.svg';
import './App.css';
import AppRoutes from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
    <AppRoutes/>
    </div>
  );
}

export default App;
