document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('menu-form');
    const allergyToggle = document.getElementById('allergy-toggle');
    const allergyOptions = document.getElementById('allergy-options');
    const numberInput = document.getElementById('number');

    allergyToggle.addEventListener('click', function() {
        if (allergyOptions.style.display === 'none' || allergyOptions.style.display === '') {
            allergyOptions.style.display = 'block';
            allergyToggle.textContent = 'アレルギー項目を隠す';
        } else {
            allergyOptions.style.display = 'none';
            allergyToggle.textContent = 'アレルギー項目を表示';
        }
    });

    numberInput.addEventListener('input', function() {
        if (numberInput.value < 1) {
            numberInput.value = 1;
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

        const religion = document.getElementById('religion').value;
        const allergy = Array.from(document.querySelectorAll('input[name="allergy"]:checked')).map(e => e.value);
        const ingredients = document.getElementById('ingredients').value;
        const age = document.getElementById('age').value;
        const number = document.getElementById('number').value;
        const gender = document.getElementById('gender').value;
        const genre = document.getElementById('genre').value;
        const time = document.getElementById('time').value;
        const forbidden = document.getElementById('forbidden').value;

        const menuText = `次の要素をふまえて料理の献立と調理方法を教えてください。\n\n宗教: ${religion}\nアレルギー: ${allergy.join(', ')}\n使いたい食材: ${ingredients}\n年齢: ${age}\n人数: ${number}\n性別: ${gender}\n料理のジャンル: ${genre}\n食事の時間帯: ${time}\n禁止食材: ${forbidden}`;

        // クリップボードにコピー
        navigator.clipboard.writeText(menuText).then(() => {
            // 新しいタブでChatGPTのURLを開く
            window.open('https://chat.openai.com/', '_blank');
        }).catch(err => {
            console.error('クリップボードにコピーできませんでした: ', err);
        });
    });
});

function generateMenu() {
    const religion = document.getElementById('religion').value;
    const allergy = Array.from(document.querySelectorAll('input[name="allergy"]:checked')).map(e => e.value);
    const ingredients = document.getElementById('ingredients').value;
    const age = document.getElementById('age').value;
    const number = document.getElementById('number').value;
    const gender = document.getElementById('gender').value;
    const genre = document.getElementById('genre').value;
    const time = document.getElementById('time').value;
    const forbidden = document.getElementById('forbidden').value;

    const menuText = `次の要素をふまえて料理の献立と調理方法を教えてください。\n\n宗教: ${religion}\nアレルギー: ${allergy.join(', ')}\n使いたい食材: ${ingredients}\n年齢: ${age}\n人数: ${number}\n性別: ${gender}\n料理のジャンル: ${genre}\n食事の時間帯: ${time}\n禁止食材: ${forbidden}`;

    // クリップボードにコピー
    navigator.clipboard.writeText(menuText).then(() => {
        // 新しいタブでChatGPTのURLを開く
        window.open('https://chat.openai.com/', '_blank');
    }).catch(err => {
        console.error('クリップボードにコピーできませんでした: ', err);
    });
}
