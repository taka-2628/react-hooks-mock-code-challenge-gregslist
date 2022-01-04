import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [filterBy, setFilterVy] = useState("")

  function updateListings(response){
    setListings(response)
  }

  function handleDeleteItem(deletedItem){
    const updatedListings = listings.filter((item) => item.id !== deletedItem.id);
    setListings(updatedListings);
  }

  function handleSearch(search){
    setFilterVy(search)
  }

  const itemsToDisplay = listings.filter((item) => {
    return (item.description.toLowerCase().includes(filterBy.toLowerCase()))
  })

  return (
    <div className="app">
      <Header onSeachSubmit={handleSearch}/>
      <ListingsContainer onInitialFetch={updateListings} items={itemsToDisplay} onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
