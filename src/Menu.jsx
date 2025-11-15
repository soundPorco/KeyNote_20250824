import Title from "./Title";
import { useState } from "react";

const Menu = ({ searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
    const [openSort, setOpenSort] = useState(false);
    return (
        <>
            <div className="bg-white w-screen md:grid md:grid-cols-3 md:h-20 h-24 border-b border-gray-300 relative">
                <Title />
                {/* 検索欄 */}
                <div className="flex justify-center flex-col items-center">
                    <h1 className="mt-1 text-3xl font-bold md:hidden block">
                        <span className="material-symbols-outlined text-3xl">
                            sticky_note_2
                        </span>
                        KEYNOTE
                    </h1>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        // 入力値を更新
                        placeholder="タイトルで検索しよう"
                        className="border border-gray-300 rounded-2xl md:w-70 w-55 px-3 py-1 m-1"
                    />
                </div>

                <div className="flex justify-end gap-2 pe-6">
                    {/* <p className="bg-gray-300 rounded-2xl px-4 py-1.5 hover:bg-blue-400 hover:text-white  transition flex items-center h-[36px]">
                        <span className="material-symbols-outlined">
                            border_all
                        </span>
                        <span className="material-symbols-outlined">
                            data_table
                        </span>
                        表示切り替え
                    </p> */}
                    {/* 並べ替えアコーディオン */}
                    <div className="absolute right-2 top-10 mt-1">
                        <button
                            className="bg-gray-300 rounded-2xl ps-2 pe-4 py-1.5 hover:bg-blue-400 hover:text-white transition flex items-center h-[36px] relative"
                            onClick={() => setOpenSort(!openSort)}
                        >
                            <span className="material-symbols-outlined">
                                arrow_drop_down
                            </span>
                            <span className="hidden md:block">
                                {sortOrder === "newest" ? "新しい順" : "古い順"}
                            </span>
                            <span className="material-symbols-outlined block md:hidden">
                                segment
                            </span>
                        </button>
                        {openSort && (
                            <div className="bg-white border rounded shadow-md z-10 w-48 absolute right-2 mt-1">
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
                                    作成日が新しい順
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
                                    作成日が古い順
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
