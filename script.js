// 名言データを配列に格納
const quotes = [
    {
        text: "成功とは、失敗から失敗へと情熱を失わずに移っていくことである",
        author: "ウィンストン・チャーチル"
    },
    {
        text: "天才とは1%のひらめきと99%の努力である",
        author: "トーマス・エジソン"
    },
    {
        text: "夢を見ることができれば、それを実現することもできる",
        author: "ウォルト・ディズニー"
    },
    {
        text: "成功の反対は失敗ではなく、何もしないことだ",
        author: "佐々木常夫"
    },
    {
        text: "できると思えばできる、できないと思えばできない。これは揺るぎない絶対的な法則である",
        author: "パブロ・ピカソ"
    },
    {
        text: "小さな一歩の積み重ねが、やがて大きな飛躍につながる",
        author: "未知"
    },
    {
        text: "人生は10%があなたに起こることで、90%があなたの反応である",
        author: "ルー・ホルツ"
    },
    {
        text: "幸せとは香水のようなものだ。他人に振りかけると、必ず自分にも数滴はかかる",
        author: "ラルフ・ワルド・エマーソン"
    },
    {
        text: "今日という日は、残りの人生の最初の日である",
        author: "ダレル・ロイヤル"
    },
    {
        text: "明日死ぬかのように生きろ。永遠に生きるかのように学べ",
        author: "マハトマ・ガンジー"
    },
    {
        text: "幸せは自分の心が決める",
        author: "ブッダ"
    },
    {
        text: "自分の足で立ち、自分の足で歩け。人の背中で一生を送るな",
        author: "宮本武蔵"
    },
    {
        text: "快適ゾーンの外側に人生がある",
        author: "ニール・ドナルド・ウォルシュ"
    },
    {
        text: "あなたの限界は、あなた自身が設定したものにすぎない",
        author: "未知"
    },
    {
        text: "失敗は成功のもと。成功するまで、あきらめないことが大切だ",
        author: "松下幸之助"
    },
    {
        text: "人は失敗するから偉くなるのであって、初めから偉い人間などいない",
        author: "本田宗一郎"
    },
    {
        text: "挑戦することで、人は成長する。安定を求めれば、人は衰える",
        author: "Y・N・ハラリ"
    },
    {
        text: "未来を予測する最良の方法は、それを創造することだ",
        author: "アラン・ケイ"
    },
    {
        text: "仕事とは、自分の情熱を注げるものでなければならない",
        author: "スティーブ・ジョブズ"
    },
    {
        text: "情熱を持って取り組めば、才能がなくても成功できる",
        author: "稲盛和夫"
    },
    {
        text: "賢者は機会を作り、凡人は機会を待つ",
        author: "フランシス・ベーコン"
    },
    {
        text: "成功の秘訣は、決して諦めないことだ",
        author: "アルバート・アインシュタイン"
    },
    {
        text: "仕事は楽しむものではなく、真剣にやるものだ。その真剣さの先に、楽しさがある",
        author: "松下幸之助"
    },
    {
        text: "成功者とは、朝起きて身支度をして、やるべきことをやる人のことだ",
        author: "マーガレット・サッチャー"
    },
    {
        text: "家族を愛することから、世界への愛が始まる",
        author: "マザー・テレサ"
    },
    {
        text: "愛は与えるほど増える唯一のものだ",
        author: "アン・マロー・リンドバーグ"
    },
    {
        text: "子どもは親の言うことを聞くのではなく、親のすることを見て学ぶ",
        author: "カール・ユング"
    },
    {
        text: "最も重要なのは、子どもたちに愛されていると感じさせること",
        author: "スティーブン・R・コヴィー"
    },
    {
        text: "家族は人生最大の宝物である",
        author: "未知"
    },
    {
        text: "子どもたちには、批判ではなく励ましを",
        author: "ルドルフ・ドライカース"
    },
    {
        text: "どんな困難も、それを乗り越えるための力と共にやってくる",
        author: "エマーソン"
    },
    {
        text: "雨の日があるから、太陽の日がありがたい",
        author: "未知"
    },
    {
        text: "逆境は人を強くする。避けるべきものではない",
        author: "ヘレン・ケラー"
    },
    {
        text: "危機は危険と機会の両方を含んでいる",
        author: "ジョン・F・ケネディ"
    },
    {
        text: "人生で最も困難な時期が、最も成長できる時期である",
        author: "ダライ・ラマ14世"
    },
    {
        text: "嵐の後には必ず晴れる",
        author: "日本のことわざ"
    },
    {
        text: "努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない",
        author: "王貞治"
    },
    {
        text: "七転び八起き",
        author: "日本のことわざ"
    },
    {
        text: "継続は力なり",
        author: "日本のことわざ"
    },
    {
        text: "意志あるところに道は開ける",
        author: "伊能忠敬"
    },
    {
        text: "夢なき者に成功なし",
        author: "吉田松陰"
    },
    {
        text: "一期一会",
        author: "千利休"
    },
    {
        text: "人間万事塞翁が馬",
        author: "故事成語"
    },
    {
        text: "私が恐れるのは失敗することではなく、挑戦しないことだ",
        author: "マイケル・ジョーダン"
    },
    {
        text: "できない理由を探すのではなく、できる方法を見つけなさい",
        author: "ヘンリー・フォード"
    },
    {
        text: "私は失敗したことがない。ただ、うまくいかない方法を10,000回見つけただけだ",
        author: "トーマス・エジソン"
    },
    {
        text: "20年後、あなたは行動しなかったことよりも、行動したことの方を後悔するだろう",
        author: "マーク・トウェイン"
    },
    {
        text: "思考は現実化する",
        author: "ナポレオン・ヒル"
    },
    {
        text: "最高の復讐は、大きな成功を収めることだ",
        author: "フランク・シナトラ"
    }
];

// DOM要素の取得
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote-btn');

// 使用済みインデックスを記録する配列
let usedIndices = [];

// ランダムな名言を表示する関数
function displayRandomQuote() {
    let randomIndex;
    
    // すべての名言を表示し終えたら履歴をリセット
    if (usedIndices.length >= quotes.length) {
        usedIndices = [];
    }
    
    // まだ表示していない名言からランダムに選ぶ
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedIndices.includes(randomIndex));
    
    // 使用済みインデックスに追加
    usedIndices.push(randomIndex);
    
    // 選ばれた名言を取得
    const randomQuote = quotes[randomIndex];
    
    // フェードアウト効果
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;
    
    // 少し待ってから新しい名言を表示
    setTimeout(() => {
        // 名言と著者をHTMLに反映
        quoteElement.textContent = randomQuote.text;
        authorElement.textContent = `― ${randomQuote.author}`;
        
        // フェードイン効果
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 500);
}

// ページ読み込み時に名言を表示
window.addEventListener('DOMContentLoaded', displayRandomQuote);

// ボタンクリック時に名言を更新
newQuoteButton.addEventListener('click', () => {
    // ボタンを一時的に無効化（連打防止）
    newQuoteButton.disabled = true;
    
    // 名言を更新
    displayRandomQuote();
    
    // 1秒後にボタンを再有効化
    setTimeout(() => {
        newQuoteButton.disabled = false;
    }, 1000);
});
