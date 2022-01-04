import React, {useState} from "react";

function ListingCard({ item, onDeleteItem }) {
  const { description, image, location} = item;

  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavoriteButtonClick(){
    setIsFavorite(!isFavorite)
  }

  function handleDeleteButtonClick(){
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => onDeleteItem(item)) 
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteButtonClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteButtonClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteButtonClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
