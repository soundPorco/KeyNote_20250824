const AddNoteBtn = ({ notes, setNotes }) => {
    const addNote = () => {
        const newNote = {
            id: Date.now() /*現在の時刻秒が一意な値として入る*/,
            content: "New Note",
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
                    className="bg-gray-300 font-bold text-lg fixed bottom-8 right-8 "
                >
                    noteを追加する
                </button>
            </div>
        </>
    );
};

export default AddNoteBtn;
