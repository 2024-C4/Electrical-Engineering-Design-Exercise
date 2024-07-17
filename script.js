document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('menu-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

        const religion = document.getElementById('religion').value;
        const allergy = document.getElementById('allergy').value;
        const ingredients = document.getElementById('ingredients').value;
        const age = document.getElementById('age').value;
        const number = document.getElementById('number').value;
        const gender = document.getElementById('gender').value;
        const genre = document.getElementById('genre').value;
        const time = document.getElementById('time').value;
        const forbidden = document.getElementById('forbidden').value;

        const menuText = `次の要素をふまえて料理の献立と調理方法を教えてください。宗教: ${religion}, アレルギー: ${allergy}, 使いたい食材: ${ingredients}, 年齢: ${age}, 人数: ${number}, 性別: ${gender}, ジャンル: ${genre}, 時間: ${time}, 禁止食材: ${forbidden}`;

        // クリップボードにコピー
        navigator.clipboard.writeText(menuText).then(() => {
            // ChatGPTのURLへ遷移
            window.location.href = 'https://chat.openai.com/';
        }).catch(err => {
            console.error('クリップボードにコピーできませんでした: ', err);
        });
    });
});

function generateMenu() {
    const religion = document.getElementById('religion').value;
    const allergy = document.getElementById('allergy').value;
    const ingredients = document.getElementById('ingredients').value;
    const age = document.getElementById('age').value;
    const number = document.getElementById('number').value;
    const gender = document.getElementById('gender').value;
    const genre = document.getElementById('genre').value;
    const time = document.getElementById('time').value;
    const forbidden = document.getElementById('forbidden').value;

    const menuText = `次の要素をふまえて料理の献立と調理方法を教えてください。宗教: ${religion}, アレルギー: ${allergy}, 使いたい食材: ${ingredients}, 年齢: ${age}, 人数: ${number}, 性別: ${gender}, ジャンル: ${genre}, 時間: ${time}, 禁止食材: ${forbidden}`;

    // クリップボードにコピー
    navigator.clipboard.writeText(menuText).then(() => {
        // ChatGPTのURLへ遷移
        window.location.href = 'https://chat.openai.com/';
    }).catch(err => {
        console.error('クリップボードにコピーできませんでした: ', err);
    });
}
