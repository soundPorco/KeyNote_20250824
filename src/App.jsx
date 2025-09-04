import { useState, useEffect } from "react";
import Title from "./Title";
import Menu from "./Menu";
import AddNoteBtn from "./AddNoteBtn";
import Notes from "./Notes";
import { DeleteContext } from "./DeleteContext";

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
    // ノート削除用関数
    const deleteNote = (id) => {
        setNotes((notes) => notes.filter((note) => note.id !== id));
        // idの異なるノートだけを残す、つまり該当するノートを削除するという意味
        // console.log(id);
    };

    return (
        <div className="text-center mx-auto">
            <DeleteContext.Provider value={{ deleteNote }}>
                <Title />
                <Menu />
                <Notes notes={notes} updateNote={updateNote} />
                <AddNoteBtn notes={notes} setNotes={setNotes} />
            </DeleteContext.Provider>
        </div>
    );
}

export default App;
