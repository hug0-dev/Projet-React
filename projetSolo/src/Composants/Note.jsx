import React from 'react';

const Note = ({ note }) => {
  switch (note) {
    case '1':
      return <span>⭐️</span>;
    case '2':
      return <span>⭐️⭐️</span>;
    case '3':
      return <span>⭐️⭐️⭐️</span>;
    case '4':
      return <span>⭐️⭐️⭐️⭐️</span>;
    case '5':
      return <span>⭐️⭐️⭐️⭐️⭐️</span>;
    default:
      return <span>Non noté</span>;
  }
};

export default Note;
