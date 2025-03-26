function rollDice() {
    const diceCount = parseInt(document.getElementById('dice-count').value);
    const diceType = parseInt(document.getElementById('dice-type').value);
    let results = [];
    let total = 0;

    for (let i = 0; i < diceCount; i++) {
        let roll = Math.floor(Math.random() * diceType) + 1;
        results.push(roll);
        total += roll;
    }

    document.getElementById('result').innerText =
        `You rolled: [${results.join(', ')}] (Total: ${total})`;
}
