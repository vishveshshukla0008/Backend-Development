import React, { useState } from "react";
import "./NoteCard.scss";
import { deleteNotes, getNotes } from "../api/axiosInstance";
import UpdateNote from "./UpdateNote";

const NoteCard = ({ notesData, setData, setSelectNote }) => {
  async function updateData() {
    await deleteNotes(notesData?._id);
    const res2 = await getNotes();
    setData(res2.data.allNotes);
  }

  function sendDataForUpdate() {
    setSelectNote(notesData);
  }

  return (
    <div className="notecard">
      <span className="id">{notesData?._id}</span>
      <div className="title">{notesData?.title}</div>
      <div className="description">{notesData?.description}</div>

      <div className="controls">
        <button
          onClick={() => {
            updateData();
          }}>
          Delete
        </button>
        <div className="update" onClick={sendDataForUpdate}>
          <img src="edit-line.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
