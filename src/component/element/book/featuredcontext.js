"use client";
import React, { createContext, useContext, useState } from 'react';

const FeaturedBookContext = createContext(null);

export function useFeaturedBook() {
  const context = useContext(FeaturedBookContext);
  if (!context) {
    throw new Error('useFeaturedBook must be used within a FeaturedBookProvider');
  }
  return context;
}

export function FeaturedBookProvider({ initialBook, children }) {
  const [featuredBook, setFeaturedBook] = useState(initialBook);
  const setBookAsFeatured = (book) => {
    setFeaturedBook(book);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <FeaturedBookContext.Provider value={{ featuredBook, setBookAsFeatured }}>
      {children}
    </FeaturedBookContext.Provider>
  );
}