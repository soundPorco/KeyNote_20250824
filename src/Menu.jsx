import Title from "./Title";
import { useState } from "react";

const Menu = ({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
    const [openSort, setOpenSort] = useState(false);
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

                <div className="flex justify-end gap-2 pe-6">
                    <p className="bg-gray-300 rounded-2xl px-4 py-1.5 hover:bg-blue-400 hover:text-white  transition flex items-center h-[36px]">
                        <span className="material-symbols-outlined">
                            border_all
                        </span>
                        <span className="material-symbols-outlined">
                            data_table
                        </span>
                        表示切り替え
                    </p>
                    {/* 並べ替えアコーディオン */}
                    <div>
                        <button
                            className="bg-gray-300 rounded-2xl ps-2 pe-4 py-1.5 hover:bg-blue-400 hover:text-white transition flex items-center h-[36px] relative"
                            onClick={() => setOpenSort(!openSort)}
                        >
                            <span className="material-symbols-outlined">
                                arrow_drop_down
                            </span>
                            {sortOrder === "newest" ? "新しい順" : "古い順"}
                        </button>
                        {openSort && (
                            <div className="bg-white border rounded shadow-md z-10 w-36 absolute right-2 mt-1">
                                <button
                                    className={`block w-full text-left px-4 py-2 hover:bg-blue-100 ${
                                        sortOrder === "newest"
                                            ? "font-bold text-blue-500"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setSortOrder("newest");
                                        setOpenSort(false);
                                    }}
                                >
                                    新しい順
                                </button>
                                <button
                                    className={`block w-full text-left px-4 py-2 hover:bg-blue-100 ${
                                        sortOrder === "oldest"
                                            ? "font-bold text-blue-500"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setSortOrder("oldest");
                                        setOpenSort(false);
                                    }}
                                >
                                    古い順
                                </button>
                            </div>
                        )}
                    </div>
                    {/* <p className="bg-gray-300 rounded-2xl ps-2 pe-4 py-1.5 hover:bg-blue-400 hover:text-white  transition flex items-center h-[36px]">
                        <span className="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                        絞り込み
                    </p> */}
                </div>
            </div>
        </>
    );
};

export default Menu;
