import React, { useState } from "react";
import "./UpdateNote.scss";
import { getNotes, updateNotes } from "../api/axiosInstance";

const UpdateNote = ({ selectNote, setSelectNote, setData }) => {
  const [formData, setFormData] = useState({
    title: selectNote?.title,
    description: selectNote?.description,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCancel() {
    setSelectNote(null);
  }

  async function handleUpdate() {
    let res = await updateNotes({
      id: selectNote._id,
      title: formData.title,
      description: formData.description,
    });
    setSelectNote(null);
    const res2 = await getNotes();
    setData(res2.data.allNotes);
  }

  return (
    <div className="updateParent">
      <div className="modal" role="dialog" aria-label="Update note">
        <div className="modal-header">
          <div>
            <h2>Update Note</h2>
            {selectNote && <span className="note-id">{selectNote._id}</span>}
          </div>
          <button type="button" className="close-btn" onClick={handleCancel}>
            ✕
          </button>
        </div>

        <form className="update-form">
          <div className="form-group">
            <label>Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter note title"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Enter note description"
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}>
              Cancel
            </button>

            <button
              onClick={handleUpdate}
              type="button"
              className="btn btn-primary">
              Update Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
