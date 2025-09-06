import Title from "./Title";

const Menu = ({ searchQuery, setSearchQuery }) => {
    return (
        <>
            <div className="bg-white w-screen grid grid-cols-3 h-20 items-center border-b border-gray-300">
                <Title />
                {/* 検索欄 */}
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        // 入力値を更新
                        placeholder="タイトルで検索しよう"
                        className="border border-gray-300 rounded-2xl w-70 px-3 py-1 m-2"
                    />
                </div>

                <div className="flex justify-end gap-2 pe-5">
                    <p className="bg-gray-300 rounded-2xl ps-2 pe-4 py-1.5 hover:bg-blue-400 hover:text-white transition flex items-center">
                        <span className="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                        並べ替え
                    </p>
                    <p className="bg-gray-300 rounded-2xl ps-2 pe-4 py-1.5 hover:bg-blue-400 hover:text-white  transition flex items-center">
                        <span className="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                        絞り込み
                    </p>
                    <p className="bg-gray-300 rounded-2xl px-4 py-1.5 hover:bg-blue-400 hover:text-white  transition flex items-center">
                        表示切り替え
                    </p>
                </div>
            </div>
        </>
    );
};

export default Menu;
