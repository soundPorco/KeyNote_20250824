import { useState, useEffect, useRef } from "react";
// コピー機能をimport
import CopyIcon from "./CopyIcon";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import RandomPassBtn from "./RandomPassBtn";
import autosize from "autosize";

const Note = ({ note, updateNote }) => {
    const [toggleEdit, setToggleEdit] = useState(false);

    // noteの内容を編集用にstateで保持
    const [editData, setEditData] = useState({
        id: note.id,
        title: note.title,
        loginId: note.loginId,
        password: note.password,
        memo: note.memo,
        createdAt: note.createdAt, // 追加（初期は作成時刻と同じ）
        updatedAt: note.updatedAt,
    });

    // パスワード表示用state
    const [showPassword, setShowPassword] = useState(false);

    // 編集ボタンを押した時の処理
    const startEdit = () => {
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

    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            autosize(textareaRef.current);
        }
    }, []);

    // 作成日時と更新日時の取得
    const createdAt = note.createdAt ?? note.id;
    const updatedAt = note.updatedAt ?? note.createdAt ?? note.id;
    const formatDate = (ts) => {
        //tsはtimestamp意味//
        if (!ts) return "";
        // 以下で日付として見やすいように変換//
        return new Date(ts).toLocaleString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <>
            <div className="defaultNote bg-white border-1 rounded-xl w-3xl p-2 my-2 mx-auto grid [grid-template-columns:3fr_7fr] gap-3 justify-between min-h-[150px]">
                {/* 左側 */}
                <div className="relative h-full">
                    {/* 編集・削除ボタン */}
                    <div className="flex items-center gap-2 absolute top-2 left-2">
                        <DeleteBtn id={note.id} />
                        <EditBtn
                            toggleEdit={toggleEdit}
                            startEdit={startEdit}
                            saveEdit={saveEdit}
                        />
                        <RandomPassBtn
                            noteTitle={editData.title}
                            notePassword={editData.password}
                            editDataPassword={editData.password}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center h-full p-5 mt-5">
                        {/* 作成日・更新日 */}
                        <div className="text-sm text-gray-500 mb-1">
                            <p>作成日:{formatDate(createdAt)}</p>
                            <p>更新日:{formatDate(updatedAt)}</p>
                        </div>
                        {/* タイトル（titleって名前やけどtitleやで、変更しようとしたらバグったのでそのままにしてます。） */}
                        <h2 className="font-bold text-xl min-h-20">
                            {toggleEdit ? (
                                <input
                                    type="text"
                                    name="title"
                                    value={editData.title}
                                    onChange={handleChange}
                                    className="w-full outline-none cursor-pointer bg-transparent p-0"
                                />
                            ) : (
                                <span className="truncate">
                                    {editData.title}
                                </span>
                            )}
                        </h2>
                    </div>
                </div>

                {/* 右側 */}
                <div className="divide-y divide-gray-300 h-full">
                    {/* ログインID */}
                    <div className="flex items-center p-3 gap-3 w-full">
                        <span className="font-semibold w-36">ログインID</span>
                        <div className="flex items-center relative w-full ml-auto px-3 py-2 border border-gray-300 rounded-xl bg-gray-50">
                            <span className="truncate flex-1 pr-8">
                                {toggleEdit ? (
                                    <input
                                        type="text"
                                        name="loginId"
                                        value={editData.loginId}
                                        onChange={handleChange}
                                        className="w-full h-full outline-none bg-transparent p-0"
                                    />
                                ) : (
                                    <span className="truncate">
                                        {editData.loginId}
                                    </span>
                                )}
                            </span>
                            {editData.loginId ? (
                                <CopyIcon copyText={editData.loginId} />
                            ) : null}
                        </div>
                    </div>
                    {/* パスワード */}
                    <div className="password-part flex items-center p-3 gap-3">
                        <span
                            className="font-semibold w-36 flex items-center hover:text-blue-500 transition"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            パスワード
                            <span className="material-symbols-outlined">
                                {showPassword ? "visibility_off" : "visibility"}
                            </span>
                        </span>
                        <div className="ml-auto w-full relative flex items-center px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-700">
                            <span className="truncate flex-1 pr-8">
                                {toggleEdit ? (
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        value={editData.password}
                                        onChange={handleChange}
                                        className="w-full h-full outline-none bg-transparent p-0"
                                    />
                                ) : (
                                    <span className="truncate">
                                        {!showPassword && editData.password
                                            ? "•".repeat(
                                                  editData.password.length
                                              )
                                            : editData.password}
                                    </span>
                                )}
                                {editData.password ? (
                                    <CopyIcon copyText={editData.password} />
                                ) : null}
                            </span>
                        </div>
                    </div>

                    {/* メモ */}
                    <div className="flex items-center p-3">
                        <div className="w-full">
                            {toggleEdit ? (
                                <textarea
                                    rows="1"
                                    ref={textareaRef}
                                    name="memo"
                                    value={editData.memo}
                                    onChange={handleChange}
                                    className="w-full h-full p-2  border border-gray-300 rounded-xl bg-gray-50"
                                    placeholder="メモを入力"
                                />
                            ) : (
                                <textarea
                                    rows="1"
                                    ref={textareaRef}
                                    name="memo"
                                    value={editData.memo}
                                    onChange={handleChange}
                                    className="w-full h-full  p-2 border border-gray-300 rounded-xl bg-gray-50"
                                    placeholder="メモを入力"
                                    readOnly
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Note;
