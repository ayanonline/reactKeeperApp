import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import uuid from "react-uuid";
function App() {
  const [notes, setNotes] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  //Add note
  function addNote(newNote) {
    if (newNote.title === "") {
      setErrMessage("Please Enter Title");
    } else {
      setNotes((prevValue) => {
        return [...prevValue, newNote];
      });
      setErrMessage("");
    }
  }

  //Delete note
  function deleteNote(id) {
    setNotes((prevValue) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} errMessage={errMessage} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={uuid()}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
