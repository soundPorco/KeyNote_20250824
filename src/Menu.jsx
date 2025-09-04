const Menu = () => {
    return (
        <>
            <div className="bg-white w-screen flex justify-between">
                {/* 検索欄 */}
                <input
                    type="text"
                    placeholder="タイトルで検索しよう"
                    className="border border-gray-500 rounded-2xl w-70 px-4 py-2"
                />

                <div className="flex">
                    <p>並べ替え</p>
                    <p>絞り込み</p>
                    <p>表示切り替え</p>
                </div>
            </div>
        </>
    );
};

export default Menu;
