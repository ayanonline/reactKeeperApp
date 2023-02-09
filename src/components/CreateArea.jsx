import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const [isClick, setIsClick] = useState(false);
  function clickHandle() {
    setIsClick(!isClick);
  }

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
      <form onSubmit={prevent} className="create-note">
        <input
          onClick={clickHandle}
          onChange={handleChange}
          name="title"
          placeholder="Title..."
          value={newNote.title}
        />
        {isClick && (
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={newNote.content}
          />
        )}

        <p>{props.errMessage}</p>
        <Zoom in={isClick && true}>
          <Fab
            onClick={() => {
              props.onClick(newNote);
              setNewNote({
                title: "",
                content: "",
              });
            }}
            type="submit"
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
