const AddNoteBtn = ({ notes, setNotes }) => {
    const addNote = () => {
        const newNote = {
            id: Date.now() /*現在の時刻秒が一意な値として入る*/,
            title: "New Note",
            loginId: "",
            password: "",
            memo: "",
        };
        setNotes([...notes, newNote]);
    };

    return (
        <>
            <div>
                <button
                    onClick={addNote}
                    className="bg-gray-300 fixed bottom-8 right-8 hover:bg-blue-400 hover:text-white w-16 h-16 rounded-full transition"
                >
                    <span className="material-symbols-outlined">add_notes</span>
                </button>
            </div>
        </>
    );
};

export default AddNoteBtn;
