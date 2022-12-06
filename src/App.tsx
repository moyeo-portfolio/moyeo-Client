import React, { createContext, useContext, useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import { PageContext } from './store/pageNum';

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <PageContext.Provider value={{ page: page, setPage: (num: number)=>setPage(num) }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </PageContext.Provider>
  );
}
