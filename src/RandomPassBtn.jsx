import { useState } from "react";

const RandomPassBtn = () => {
    const [Modal, setModal] = useState(false);

    // ランダムパスワード生成関数
    const generateRandomPassword = () => {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}<>?,.";
        const all = upper + lower + numbers + symbols;

        let password = "";
        password += upper[Math.floor(Math.random() * upper.length)];
        password += lower[Math.floor(Math.random() * lower.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        // 残りの文字をランダムに追加
        for (let i = password.length; i < length; i++) {
            password += all[Math.floor(Math.random() * all.length)];
        }

        // ランダムに並び替え（シャッフル）
        return password
            .split("")
            .sort(() => Math.random() - 0.5)
            .join("");
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
                        <div className="bg-white rounded-lg p-6 w-120">
                            <h2 className="text-lg font-semibold mb-4 text-center">
                                ランダムパスワード生成
                            </h2>
                            <p className="mb-4">生成されたパスワード</p>
                            <div className="grid grid-cols-2 gap-2 mb-4 px-3">
                                <div>
                                    <input type="checkbox" /> 特殊文字を含める
                                </div>
                                <div>
                                    <input type="checkbox" /> 大文字を含める
                                </div>

                                <div>
                                    <input type="checkbox" /> 数字を含める
                                </div>
                                <div>
                                    <input type="checkbox" /> 小文字を含める
                                </div>
                            </div>
                            <button
                                onClick={generateRandomPassword}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mr-2"
                            >
                                生成
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mx-auto"
                                onClick={closeModal}
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default RandomPassBtn;
