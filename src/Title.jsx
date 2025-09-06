const Title = () => {
    return (
        <>
            <div className="p-2">
                {/* 検索欄
                <input
                    type="text"
                    placeholder="タイトルで検索しよう"
                    className="border border-gray-500 rounded-2xl w-70 px-4 py-2"
                /> */}
                {/* タイトル */}
                <div className="">
                    <h1 className="text-3xl font-bold flex items-center">
                        <span className="material-symbols-outlined text-3xl">
                            sticky_note_2
                        </span>
                        KEYNOTE
                    </h1>
                    <p className="text-sm">
                        ローカル環境でパスワードを管理しよう
                    </p>
                </div>
            </div>
        </>
    );
};
export default Title;
