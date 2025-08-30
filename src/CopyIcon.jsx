import { useState } from "react";
const CopyIcon = ({ copyText }) => {
    const [toggleCopy, setToggleCopy] = useState(false);

    const copyFunction = () => {
        if (!copyText) {
            return;
        }

        navigator.clipboard
            .writeText(copyText)
            .then(() => {
                // 確認用。実際はトースト表示などがおすすめ
                alert("コピーしました！");
                setToggleCopy(true);
                setTimeout(() => setToggleCopy(false), 3000); // 3秒後にfalse
            })
            .catch((err) => {
                console.error("コピーに失敗しました: ", err);
            })
            .catch((err) => {
                console.error("コピーに失敗しました: ", err);
            });
    };

    return (
        <>
            {toggleCopy ? (
                <span class="material-symbols-outlined absolute right-2  text-gray-500 hover:text-blue-500 transition cursor-pointer">
                    check
                </span>
            ) : (
                <span
                    // コピー機能
                    onClick={copyFunction}
                    className="material-symbols-outlined absolute right-2 text-gray-500 hover:text-blue-500 transition cursor-pointer"
                >
                    content_copy
                </span>
            )}
        </>
    );
};

export default CopyIcon;
