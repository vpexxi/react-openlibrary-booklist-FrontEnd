import React from 'react';

const BookCard = ({ title, authors, selected, onClick }) => {
  return (
    <div
      className={`book-card${selected ? ' selected' : ''}`}
      onClick={onClick}
    >
      <h2>{title}</h2>
      <p>{authors}</p>
    </div>
  );
};

export default BookCard;
