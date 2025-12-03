import React, { useState } from 'react';
import Header from './src/components/header/Header';
import Body from './src/components/body/body';
import Footer from './src/components/footer/footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Body searchQuery={searchQuery} />
      <Footer />
    </>
  );
};

export default App;