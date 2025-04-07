import { useState } from "react";
import { addMovies } from "../../services/moviesService";
import { v4 as uuidv4 } from "uuid";
import { moviesType } from "../../types/moviesType";

const AddMovieForm = ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) => {
  const [formNome, setFormNome] = useState("");
  const [formSrc, setFormSrc] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMovie: moviesType = {
      nome: formNome,
      src: formSrc,
      id: uuidv4(),
    };
    addMovies(newMovie);
    setFormNome("");
    setFormSrc("");
    onSubmitSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Filme"
        value={formNome}
        onChange={(e) => setFormNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Imagem de referência"
        value={formSrc}
        onChange={(e) => setFormSrc(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddMovieForm;
