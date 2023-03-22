import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Phones from './component/Phones/Phones';

function App() {
  const [searchQuery, setSearchQuery] = useState([]); // State for search query
  const handleSearch = (query) => {
    setSearchQuery(query); // Update search query state
  };
  return (
    <div className="App">
     <Header onSearch={handleSearch}></Header>
      <Phones searchQuery={searchQuery}></Phones>
    </div>
  );
}

export default App;
