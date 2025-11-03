import { useContext } from "react";
import { DeleteContext } from "./DeleteContext";

const DeleteBtn = ({ id }) => {
    const { deleteNote } = useContext(DeleteContext);

    const confirmDelete = () => {
        if (window.confirm("本当にこのノートを削除しますか？")) {
            deleteNote(id);
        }
    };

    return (
        <>
            <button
                className=" hover:text-red-500 transition hover:cursor-pointer"
                onClick={confirmDelete}
            >
                <span className="material-symbols-outlined">delete</span>
            </button>
        </>
    );
};

export default DeleteBtn;
