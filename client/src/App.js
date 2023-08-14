import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const handleClick = () => {
    const url = 'https://cors-anywhere.herokuapp.com/corsdemo';
    window.open(url, '_blank');
  };

  return (
    <div>
      <br />
      To use this application, request temporary access to the demo Server!
      <button onClick={handleClick}>REQUEST ACCESS</button>
      <SearchBar />
    </div>
  );
}

export default App;
