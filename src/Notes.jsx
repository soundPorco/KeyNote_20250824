import Note from "./Note";

const Notes = ({ notes, updateNote }) => {
    return (
        <>
            {
                /* ここにNoteコンポーネントを追加していく */
                notes.map((note) => (
                    <Note key={note.id} note={note} updateNote={updateNote} />
                ))
            }
        </>
    );
};

export default Notes;
