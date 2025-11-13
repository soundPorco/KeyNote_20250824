import { useState } from "react";
import CopyIcon from "./CopyIcon";

const RandomPassBtn = ({ noteTitle, handleChange, editDataPassword }) => {
    const [Modal, setModal] = useState(false);
    const [length, setLength] = useState(12);
    const [generatedPassword, setGeneratedPassword] = useState(
        editDataPassword || ""
    );

    // 各文字を含めるかどうかを管理するstate
    const [excludeUpper, setExcludeUpper] = useState(false);
    const [excludeLower, setExcludeLower] = useState(false);
    const [excludeNumbers, setExcludeNumbers] = useState(false);
    const [excludeSymbols, setExcludeSymbols] = useState(false);

    // ランダムパスワード生成関数
    const generateRandomPassword = (length) => {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}<>?,.";

        let all = "";
        if (!excludeUpper) all += upper;
        if (!excludeLower) all += lower;
        if (!excludeNumbers) all += numbers;
        if (!excludeSymbols) all += symbols;

        if (all.length === 0) {
            // 何も選択されていない場合の処理
            alert("少なくとも1つの文字種を選択してください");
            return;
        }

        let password = "";
        if (!excludeUpper)
            password += upper[Math.floor(Math.random() * upper.length)];
        if (!excludeLower)
            password += lower[Math.floor(Math.random() * lower.length)];
        if (!excludeNumbers)
            password += numbers[Math.floor(Math.random() * numbers.length)];
        if (!excludeSymbols)
            password += symbols[Math.floor(Math.random() * symbols.length)];

        // 残りの文字をランダムに追加
        for (let i = password.length; i < length; i++) {
            password += all[Math.floor(Math.random() * all.length)];
        }

        // ランダムに並び替え（シャッフル）
        password = password
            .split("")
            .sort(() => Math.random() - 0.5)
            .join("");

        return setGeneratedPassword(password);
    };

    // パスワード確定関数
    const confirmPassword = () => {
        handleChange({
            target: {
                name: "password",
                value: generatedPassword,
            },
        });
        closeModal();
    };

    // モーダルを開閉する関数
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            <button
                className=" hover:text-blue-500 transition hover:cursor-pointer"
                onClick={openModal}
            >
                <span className="material-symbols-outlined">shuffle</span>
            </button>
            {Modal && (
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                        <div className="bg-white rounded-lg p-6 pb-10 w-120 relative">
                            <div
                                onClick={closeModal}
                                className=" hover:cursor-pointer"
                            >
                                <p className="text-md absolute right-4 top-3 rounded-2xl px-2 py-1  text-gray-500 hover:bg-gray-200 transition">
                                    ✖️
                                </p>
                            </div>
                            <h2 className="text-4xl font-bold text-center">
                                {/* 該当ノートのタイトル */}
                                {noteTitle}
                            </h2>
                            <h3 className="text-sm mb-10 text-center">
                                ランダムパスワード生成
                            </h3>

                            <div className="flex items-center w-full ml-auto px-3 py-2 border border-gray-300 rounded-xl bg-gray-50 mb-6 text-2xl tracking-wider text-center relative">
                                <span className="truncate flex-1 pr-8">
                                    <input
                                        type="text"
                                        readOnly
                                        value={generatedPassword}
                                        className="w-full h-full outline-none bg-transparent p-0"
                                    />
                                </span>

                                <CopyIcon
                                    text={generatedPassword}
                                    className="absolute right-4"
                                />
                            </div>

                            <div className="flex items-center mb-4 px-3">
                                <input
                                    type="number"
                                    onChange={(e) =>
                                        setLength(Number(e.target.value))
                                    }
                                    value={length}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <p>：パスワードの桁数を指定</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mb-6 px-5">
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={excludeSymbols}
                                        onChange={() => {
                                            setExcludeSymbols(!excludeSymbols);
                                            console.log(excludeSymbols);
                                        }}
                                    />{" "}
                                    特殊文字を含めない
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={excludeUpper}
                                        onChange={() =>
                                            setExcludeUpper(!excludeUpper)
                                        }
                                    />{" "}
                                    大文字を含めない
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        checked={excludeNumbers}
                                        onChange={() =>
                                            setExcludeNumbers(!excludeNumbers)
                                        }
                                    />{" "}
                                    数字を含めない
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={excludeLower}
                                        onChange={() =>
                                            setExcludeLower(!excludeLower)
                                        }
                                    />{" "}
                                    小文字を含めない
                                </div>
                            </div>

                            <div className="flex gap-1 mt-6 px-5">
                                <button
                                    onClick={() =>
                                        generateRandomPassword(length)
                                    }
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mx-auto"
                                >
                                    生成
                                </button>
                                <button
                                    onClick={() => confirmPassword()}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mx-auto"
                                >
                                    確定
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default RandomPassBtn;
