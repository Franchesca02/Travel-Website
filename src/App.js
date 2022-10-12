import React from 'react'
import Destinations from './Components/Destinations';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Search from './Components/Search';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Destinations />
     <Search />
    </div>
  );
}

export default App;
