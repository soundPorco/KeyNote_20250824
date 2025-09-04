import { useContext } from "react";
import { DeleteContext } from "./DeleteContext";

const DeleteBtn = ({ id }) => {
    const { deleteNote } = useContext(DeleteContext);

    return (
        <>
            <button
                className="absolute top-4 left-4 hover:text-red-500 transition hover:cursor-pointer"
                onClick={() => deleteNote(id)}
            >
                <span className="material-symbols-outlined">delete</span>
            </button>
        </>
    );
};

export default DeleteBtn;
