import React from "react";
import "./AddNotesForm.scss";
import { addNotes, getNotes } from "../api/axiosInstance";

const AddNotesForm = ({ setData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { title, description } = e.target.elements;
    let res = await addNotes({
      title: title.value,
      description: description.value,
    });
    const res2 = await getNotes();
    setData(res2.data.allNotes);
    e.target.reset();
  };
  return (
    <div className="formWrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputdDiv formItem">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" id="title" />
        </div>
        <div className="descriptionDiv formItem">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNotesForm;
