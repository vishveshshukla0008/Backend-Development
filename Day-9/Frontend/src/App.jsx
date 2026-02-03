import React, { useEffect, useState } from "react";
import "./App.scss";
import NoteCard from "./components/NoteCard";
import { getNotes } from "./api/axiosInstance";
import AddNotesForm from "./components/AddNotesForm";
import UpdateNote from "./components/UpdateNote.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectNote, setSelectNote] = useState();

  async function getNotesData() {
    try {
      setLoading(true);
      const res = await getNotes();
      setData(res.data.allNotes);
    } catch (error) {
      console.log(error.response.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNotesData();
  }, []);
  return (
    <>
      <AddNotesForm setData={setData} />
      <div className="allNotes">
        {loading ? <div className="loader">Loading Notes...</div> : ""}
        {data.map((note) => {
          return (
            <NoteCard
              notesData={note}
              key={note._id}
              setData={setData}
              setSelectNote={setSelectNote}
            />
          );
        })}
      </div>
      {selectNote && (
        <UpdateNote
          selectNote={selectNote}
          setSelectNote={setSelectNote}
          setData={setData}
        />
      )}
    </>
  );
};

export default App;
