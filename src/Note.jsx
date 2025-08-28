import { useState } from "react";

const Note = ({ note, updateNote }) => {
    const [toggleEdit, setToggleEdit] = useState(false);

    // noteの内容を編集用にstateで保持
    const [editData, setEditData] = useState({
        content: note.content,
        loginId: note.loginId,
        password: note.password,
        memo: note.memo,
    });

    // 編集ボタンを押した時の処理
    const editNote = () => {
        setToggleEdit(true);
        setShowPassword(true);
    };

    // 入力内容をstateで管理
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 編集確定時に親へ反映
    const saveEdit = () => {
        updateNote(note.id, editData);
        setToggleEdit(false);
        setShowPassword(false);
    };
    // パスワード表示用state
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="defaultNote relative divide-y divide-gray-300 bg-white border-1 rounded-xl w-lg p-2 my-2">
                {/* 編集ボタン */}
                {toggleEdit ? (
                    <div
                        className="absolute top-5 right-5 hover:text-blue-500 transition hover:cursor-pointer"
                        onClick={saveEdit}
                    >
                        <span className="font-bold text-red-700">保存</span>
                    </div>
                ) : (
                    <div
                        className="absolute top-5 right-5 hover:text-blue-500 transition hover:cursor-pointer"
                        onClick={editNote}
                    >
                        <span className="material-symbols-outlined !no-underline">
                            edit
                        </span>
                    </div>
                )}

                {/* ノートのタイトル */}
                <h2 className="text-center font-bold text-xl p-5 min-h-20">
                    {toggleEdit ? (
                        <input
                            type="text"
                            name="content"
                            value={editData.content}
                            onChange={handleChange}
                            className="text-center outline-none cursor-pointer"
                        />
                    ) : (
                        <span className="truncate">{editData.content}</span>
                    )}
                </h2>
                {/* ログインID */}
                <div className="loginId-part flex items-center p-3">
                    <span className="font-semibold">ログインID</span>

                    <div className="ml-auto w-70 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 hover:text-blue-500 transition">
                        {/* ID部分 */}
                        {/* truncate で長い文字列を省略 */}
                        <span className="truncate">
                            {toggleEdit ? (
                                <input
                                    type="text"
                                    name="loginId"
                                    value={editData.loginId}
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            ) : (
                                <span className="truncate   px-3 py-2 ">
                                    {editData.loginId}
                                </span>
                            )}
                        </span>
                    </div>
                </div>
                {/* パスワード */}
                <div className="password-part flex items-center p-3">
                    <span
                        className="font-semibold flex items-center hover:text-blue-500 transition"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        パスワード
                        {/* 目のアイコン */}
                        <span className="material-symbols-outlined ms-0.5">
                            {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </span>

                    <div className="ml-auto flex items-center w-70 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 hover:text-blue-500 transition">
                        {/* パスワード部分 */}
                        <span className="truncate ">
                            {toggleEdit ? (
                                <input
                                    // 表示/非表示切替
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={editData.password}
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            ) : (
                                <span className="truncate px-3 py-2 ">
                                    {!showPassword && editData.password
                                        ? "●●●●●●●"
                                        : editData.password}
                                </span>
                            )}
                        </span>
                    </div>
                </div>
                {/* メモ */}
                <div className="memo-part flex items-center p-3">
                    <span className="font-semibold ">メモ</span>
                    <div className="ml-auto w-70 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50">
                        {/* メモ部分 */}
                        {toggleEdit ? (
                            <textarea
                                rows="4"
                                name="memo"
                                value={editData.memo}
                                onChange={handleChange}
                                className="w-full p-2 outline-none"
                            />
                        ) : (
                            <div>{editData.memo}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Note;
