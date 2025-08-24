import React from "react";
import { useState } from "react";
import Title from "./Title";
import AddNoteBtn from "./AddNoteBtn";
import Notes from "./Notes";

import "./App.css";

function App() {
    const [notes, setNotes] = useState([]);
    return (
        <>
            <div>
                <Title />
                <Notes notes={notes} />
                <AddNoteBtn notes={notes} setNotes={setNotes} />
            </div>
        </>
    );
}

export default App;
