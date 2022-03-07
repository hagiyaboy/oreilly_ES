"use strict";

// m以上n以下のランダムな整数を返す
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// 「サイコロ」の目を表す文字列をランダムに返す
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)];
}

let funds = 50; //開始前の資金
let round = 0; //ラウンド（何回目の賭けか）

while (funds > 0 && funds < 100) {
    round++;
    console.log(`第${round}ラウンド：`);
    console.log(` 手持ち資金： ${funds}`);

    //賭ける
    let bets = {
        "crown": 0,
        "anchor": 0,
        "heart": 0,
        "spade": 0,
        "club": 0,
        "diamond": 0,
    }
    let totalBet = rand(1, funds);
    if (totalBet === 7) { //ハートに全部かける
        totalBet = funds;
        bets.heart = totalBet;
    } else { //賭け金を振り分ける
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] += bet;
            remaining -= bet;
        } while (remaining > 0)
    }
    funds -= totalBet;
    console.log(` 賭け金： ${totalBet}(` + Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(", ") + ")");

    //サイコロを振る
    const hand = [];
    for (let i = 0; i < 3; i++) {
        hand.push(randFace());
    }
    console.log(` 出目: ${hand.join(", ")}`);

    //払戻金をもらう
    let winnings = 0;
    for (let i = 0; i < hand.length; i++) {
        let face = hand[i];
        if (bets[face] > 0) winnings += bets[face];
    }
    funds += winnings;
    console.log(` 払戻金: ${winnings}`);
}

console.log( ` 残金: ${funds}`);
if(100<funds) console.log("意気揚々と船に戻る。\n");
else console.log("トボトボと船に帰る。\n");