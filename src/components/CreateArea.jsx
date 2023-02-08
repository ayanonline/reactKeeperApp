import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  //prevent refresh onsubmit
  function prevent(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={prevent}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <p>{props.errMessage}</p>
        <button
          onClick={() => {
            props.onClick(newNote);
            setNewNote({
              title: "",
              content: "",
            });
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
