import React, { useState, useEffect } from "react";
import Title from "./Title";
import AddNoteBtn from "./AddNoteBtn";
import Notes from "./Notes";

import "./App.css";

function App() {
    // localStorageから初期値を取得
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("note");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    // notesが変わるたびlocalStorageに保存
    useEffect(() => {
        localStorage.setItem("note", JSON.stringify(notes));
    });

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
