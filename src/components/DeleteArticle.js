import axios from "axios";
import React from "react";

const DeleteArticle = ({ id }) => {
  const handleDelete = () => {
    const urlId = `http://localhost:3003/articles/${id}`;
    axios.delete(urlId);
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={() => {
          if (window.confirm("Voulez-vous vraiment supprimer?")) {
            handleDelete();
          }
        }}
      >
        Supprimer
      </button>
    </div>
  );
};

export default DeleteArticle;
