import React, { useState, useEffect } from 'react';
import Note from './Note';
import Supprimer from './Supprimer';
import '../assets/listeFilm.css';

const ListeFilms = ({films}) => {
  // const [films, setFilms] = useState([]);

  // useEffect(() => {
  //   const storedFilms = JSON.parse(localStorage.getItem("films")) || [];
  //   setFilms(storedFilms);
  // }, []);

  // const supprimerFilm = (index) => {
  //   const updatedFilms = films.filter((film, i) => i !== index);
  //   setFilms(updatedFilms);
  //   localStorage.setItem("films", JSON.stringify(updatedFilms));
  // };

  return (
    <div>
      <h2>Liste des Films</h2>
      <ul>
        {films.length > 0 ? (
          films.map((film, index) => (
            <li key={index}>
              Titre : {film.titre}<br />
              {film.note ? <>Note: <Note note={film.note} /><br/></> : null}        
              {film.commentaire ? `Commentaire: ${film.commentaire}` : null}
              {/* <Supprimer onDelete={() => supprimerFilm(index)} /> */}
            </li>
          ))
        ) : (
          <p>Aucun film trouvé !</p>
        )}
      </ul>
    </div>
  );
};

export default ListeFilms;
