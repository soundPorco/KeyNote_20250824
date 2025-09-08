const EditBtn = ({ toggleEdit, startEdit, saveEdit }) => {
    return (
        <>
            {/* 編集ボタン */}
            {toggleEdit ? (
                <button
                    className=" hover:text-blue-500 transition hover:cursor-pointer"
                    onClick={saveEdit}
                >
                    <span className="font-bold text-red-700">保存</span>
                </button>
            ) : (
                <button
                    className=" hover:text-blue-500 transition hover:cursor-pointer"
                    onClick={startEdit}
                >
                    <span className="material-symbols-outlined">edit</span>
                </button>
            )}
        </>
    );
};

export default EditBtn;
