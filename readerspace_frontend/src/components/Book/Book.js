import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, type, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:4000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  const [disable, setDisable] = useState(false)
  const changeText = (text) => {

    this.setState({ text }); 
  }

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{type}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} disabled={disable}>
        Update
      </Button>
      <Button sx={{ mt: "auto" }} onClick={()=>setDisable(true)}>
        Get This Book
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }} disabled={disable}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
