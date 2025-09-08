import Note from "./Note";

const Notes = ({ notes, updateNote }) => {
    return (
        <>
            {/* <div className="grid grid-cols-2 gap-6"> */}
            {
                /* ここにNoteコンポーネントを追加していく */
                notes.map((note) => (
                    <Note key={note.id} note={note} updateNote={updateNote} />
                ))
            }
            {/* </div> */}
        </>
    );
};

export default Notes;
