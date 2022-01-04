import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ onInitialFetch, items, onDeleteItem}) {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((response) => onInitialFetch(response))
  }, [])

  return (
    <main>
      <ul className="cards">
        {items.map((item) => {
          return <ListingCard key={item.id} item={item} onDeleteItem={onDeleteItem}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
