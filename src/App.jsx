import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateDeck from './pages/CreateDeck';
import ReviewDeck from './pages/ReviewDeck';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateDeck />} />
        <Route path="/review/:deckId" element={<ReviewDeck />} />
      </Routes>
    </Router>
  );
}

export default App;
