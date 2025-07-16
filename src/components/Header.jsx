import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
    <h1 className="text-xl font-bold">📚 Smart Flashcards</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/create">Create Deck</Link>
    </nav>
  </header>
);

export default Header;
