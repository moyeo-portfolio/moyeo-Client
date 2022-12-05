import React, { createContext, useContext, useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <Router>
      <Header page={page} setPage={setPage} />
      <Routes>
        <Route path="/" element={<Main page={page} setPage={setPage} />} />
      </Routes>
    </Router>
  );
}
