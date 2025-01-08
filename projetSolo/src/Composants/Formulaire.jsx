import React, { useState, useEffect } from 'react';
import ListeFilms from './ListeFilm';
import '../assets/formulaire.css';

const Formulaire = () => {
  const [titre, setTitre] = useState('');
  const [note, setNote] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const storedFilms = JSON.parse(localStorage.getItem("films")) || [];
    setFilms(storedFilms);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFilm = {
      titre,
      note,
      commentaire,
    };

    const updatedFilms = [...films, newFilm];
    setFilms(updatedFilms);

    localStorage.setItem("films", JSON.stringify(updatedFilms));

    setTitre('');
    setNote('');
    setCommentaire('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Titre Film :</label>
          <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
        </div>

        <div>
          <label>Note Film :</label>
          <select value={note} onChange={(e) => setNote(e.target.value)}>
            <option value="">Choisir une note ⭐️</option>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          </select>
        </div>

        <div>
          <label>Commentaire :</label>
          <input type="text" value={commentaire} onChange={(e) => setCommentaire(e.target.value)} />
        </div>

        <button type="submit">Ajouter</button>
      </form>
      <div className="liste-films">
        <ListeFilms films={films} />
      </div>
    </div>
  );
};

export default Formulaire;