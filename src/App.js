import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/screens/Login';
import Todo from './app/screens/Todo';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} /> 
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
