import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Functional Component/Home';
import Dashboard from './components/Functional Component/Dashboard';
import LoginForm from './components/Functional Component/LoginForm';


function App() {
  const [text, setText] = useState<string>('');

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
