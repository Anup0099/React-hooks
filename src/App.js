import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <BookList />
    </ThemeContextProvider>
  );
}

export default App;
