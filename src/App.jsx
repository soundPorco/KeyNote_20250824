import React from "react";
import { useState } from "react";
import Title from "./Title";
import AddNoteBtn from "./AddNoteBtn";
import Notes from "./Notes";

import "./App.css";

function App() {
    const [notes, setNotes] = useState([]);

    // ノート編集用関数
    const updateNote = (id, newData) => {
        setNotes((notes) =>
            notes.map((note) =>
                note.id === id ? { ...note, ...newData } : note
            )
        );
    };
    return (
        <>
            <div>
                <Title />
                <Notes notes={notes} updateNote={updateNote} />
                <AddNoteBtn notes={notes} setNotes={setNotes} />
            </div>
        </>
    );
}

export default App;
