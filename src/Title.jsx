const Title = () => {
    return (
        <>
            <div className="text-center py-8">
                {/* 検索欄 */}
                <input
                    type="text"
                    placeholder="タイトルで検索しよう"
                    className="border border-gray-500 rounded-2xl w-70 px-4 py-2"
                />
                {/* タイトル */}
                <h1 className="text-3xl font-bold flex items-center justify-center">
                    <span className="material-symbols-outlined !text-5xl">
                        sticky_note_2
                    </span>
                    KEYNOTE
                </h1>
                <p>ローカル環境でパスワードを管理しよう</p>
            </div>
        </>
    );
};
export default Title;
