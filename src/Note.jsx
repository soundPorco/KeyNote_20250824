import { useState, useEffect, useRef } from "react";
// コピー機能をimport
import CopyIcon from "./CopyIcon";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

import autosize from "autosize";

const Note = ({ note, updateNote }) => {
    const [toggleEdit, setToggleEdit] = useState(false);

    // noteの内容を編集用にstateで保持
    const [editData, setEditData] = useState({
        content: note.content,
        loginId: note.loginId,
        password: note.password,
        memo: note.memo,
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
                    </div>
                    {/* タイトル */}
                    <h2 className="flex items-center font-bold text-xl p-5 min-h-20 h-full">
                        {toggleEdit ? (
                            <input
                                type="text"
                                name="content"
                                value={editData.content}
                                onChange={handleChange}
                                className="w-full h-full outline-none cursor-pointer bg-transparent p-0"
                            />
                        ) : (
                            <span className="truncate">{editData.content}</span>
                        )}
                    </h2>
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

            {/* 念の為に保存 */}
            {/* <div className="defaultNote relative divide-y divide-gray-300 bg-white border-1 rounded-xl w-lg p-2 my-2 mx-auto">
                <EditBtn
                    toggleEdit={toggleEdit}
                    startEdit={startEdit}
                    saveEdit={saveEdit}
                />

                ノートの削除ボタン
                <DeleteBtn id={note.id} />

                ノートのタイトル
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
                ログインID
                <div className="loginId-part flex items-center p-3">
                    <span className="font-semibold">ログインID</span>
                    表示欄の大枠
                    <div className="flex items-center relative ml-auto w-72 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50">
                        ID部分
                        truncate で長い文字列を省略
                        <span className="truncate flex-1 pr-8">
                            {toggleEdit ? (
                                <input
                                    type="text"
                                    name="loginId"
                                    value={editData.loginId}
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            ) : (
                                <span className="">{editData.loginId}</span>
                            )}
                        </span>
                        コピーアイコン
                        データが空の時は非表示にする
                        {editData.loginId ? (
                            <CopyIcon copyText={editData.loginId} />
                        ) : null}
                    </div>
                </div>
                パスワード
                <div className="password-part flex items-center p-3">
                    <span
                        className="font-semibold flex items-center hover:text-blue-500 transition"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        パスワード
                        目のアイコン
                        <span className="material-symbols-outlined ms-0.5">
                            {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </span>

                    <div className="ml-auto relative flex items-center w-72 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-700">
                        パスワード部分
                        <span className="truncate flex-1 pr-8">
                            {toggleEdit ? (
                                <input
                                    表示/非表示切替
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={editData.password}
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            ) : (
                                <span className="truncate">
                                    {!showPassword && editData.password
                                        ? "•".repeat(editData.password.length)
                                        : editData.password}
                                </span>
                            )}
                            コピーアイコン
                            データが空の時は非表示にする
                            {editData.password ? (
                                <CopyIcon copyText={editData.password} />
                            ) : null}
                        </span>
                    </div>
                </div>
                メモ
                <div className="memo-part flex items-center p-3">
                    <span className="font-semibold ">メモ</span>
                    <div className="ml-auto w-72 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50">
                        メモ部分
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
            </div> */}
        </>
    );
};

export default Note;
