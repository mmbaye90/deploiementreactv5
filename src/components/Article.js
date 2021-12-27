import axios from "axios";
import React, { useState } from "react";
import "../styles/article.css";
import DeleteArticle from "./DeleteArticle";

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  function formatDate(date) {
    let newDate = new Date();
    return newDate.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }

  const handleEdit = () => {
    setIsEditing(false);
    const id = article.id;
    const data = {
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: Date.now(),
    };
    const urlId = `http://localhost:3003/articles/${id}`;

    axios.put(urlId, data);
  };

  return (
    <div
      className="article-container"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="container-auth-post">
        <h3>{article.author}</h3>
        <em>{`Posté le  ${formatDate(article.date)}`}</em>
      </div>
      {isEditing ? (
        <textarea
          autoFocus
          defaultValue={editedContent ? editedContent : article.content}
          style={{ width: "100%" }}
          onChange={(e) => setEditedContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editedContent ? editedContent : article.content}</p>
      )}

      <div className="container-btns">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <DeleteArticle id={article.id} />
      </div>
    </div>
  );
};

export default Article;
