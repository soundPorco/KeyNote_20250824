const Notes = ({ notes }) => {
    return (
        <>
            <div className="defaultNote divide-y divide-gray-300 bg-white border-1 rounded-xl w-lg p-2 my-2">
                {/* ノートのタイトル */}
                <h2 className="text-center font-bold text-xl p-5">
                    Googleアカウント
                </h2>
                {/* ログインID */}
                <div className="loginId-part flex items-center p-3">
                    <span className="font-semibold">ログインID</span>

                    <div className="ml-auto w-70 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 hover:text-blue-500 transition">
                        {/* ID部分 */}
                        <span className="truncate">
                            sample_id@gmail.com@gmail.com
                        </span>
                    </div>
                </div>
                {/* パスワード */}
                <div className="password-part flex items-center p-3">
                    <span className="font-semibold flex items-center hover:text-blue-500 transition">
                        パスワード
                        {/* 目のアイコン */}
                        <span className="material-symbols-outlined ms-0.5">
                            visibility
                        </span>
                    </span>

                    <div className="ml-auto flex items-center w-70 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 hover:text-blue-500 transition">
                        {/* パスワード部分 */}
                        <span className="truncate flex-1">
                            sample_id@gmail.com@gmail.com
                        </span>
                    </div>
                </div>
                {/* メモ */}
                <div className="memo-part flex items-center p-3">
                    <span className="font-semibold">メモ</span>
                    <div className="ml-auto w-70 px-3 py-2 border border-gray-300 rounded-xl bg-gray-50">
                        {/* メモ部分 */}
                        <textarea
                            rows="4"
                            placeholder="何でもメモしてね"
                            className="w-full p-2 outline-none "
                        ></textarea>
                    </div>
                </div>
            </div>
            {
                /* ここにNoteコンポーネントを追加していく */
                notes.map((note) => (
                    <div
                        key={note.id}
                        className="bg-white border-1 rounded p-2 my-2"
                    >
                        <input
                            type="text"
                            content="{note.content}"
                            placeholder="ここに入力してください"
                        />
                    </div>
                ))
            }
        </>
    );
};

export default Notes;
