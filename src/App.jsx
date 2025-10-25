import { useState, useEffect } from "react";
// import Title from "./Title";
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
    }, [notes]);

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

    // 並び替え用のstate
    const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest（とりあえず２パターン）"
    // ノートの検索用関数
    const [searchQuery, setSearchQuery] = useState("");

    // 並び替え＋検索をまとめて処理
    const filteredSortedNotes = [...notes]
        .filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "newest") {
                return b.id - a.id; // idがDate.now()ならこれでOK
            } else {
                return a.id - b.id;
            }
        });

    return (
        <div className="mx-auto p-0">
            <DeleteContext.Provider value={{ deleteNote }}>
                <div className="fixed top-0 z-50">
                    <Menu
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                    />
                </div>
                <div className="mt-24">
                    <Notes
                        notes={filteredSortedNotes}
                        updateNote={updateNote}
                    />
                    <AddNoteBtn notes={notes} setNotes={setNotes} />
                </div>
            </DeleteContext.Provider>
        </div>
    );
}

export default App;
