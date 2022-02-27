opt1 = document.getElementById('5Rounds');
opt2 = document.getElementById('10Rounds');
opt3 = document.getElementById('15Rounds');
opt4 = document.getElementById('20Rounds');
stone = document.getElementById('stone');
paper = document.getElementById('paper');
scissors = document.getElementById('scissors');
outPoints = document.getElementById('outPoints');
outBeats = document.getElementById('outBeats');
target = document.getElementById('inRounds');
reload = document.getElementById('reload');


let cases = [
    'Stone beats Scissors',
    'Paper beats Stone',
    'Scissor beats Paper',
]

stone.addEventListener('click', () => {
    console.log('testStone');

    let compCases = (Math.random() * cases.length);
    let comp = (Math.floor(compCases));

    for (let x = 1; x <= 5; x++) {
        let rounds = document.createElement('h4');

        if (opt1.checked) {

            rounds.textContent = `${x++}/5`
            rounds.style.fontSize = '4rem'
            rounds.style.fontFamily = 'sans-serif'
            target.replaceWith(rounds)
        } else if (opt2.checked) {
            rounds.textContent = `${x}/10`
            rounds.style.fontSize = '4rem'
            rounds.style.fontFamily = 'sans-serif'
            target.replaceWith(rounds)
        } else if (opt3.checked) {
            rounds.textContent = `${x}/15`
            rounds.style.fontSize = '4rem'
            rounds.style.fontFamily = 'sans-serif'
            target.replaceWith(rounds)
        } else if (opt4.checked) {
            let rounds = document.createElement('h4');
            rounds.textContent = `${x}/20`
            rounds.style.fontSize = '4rem'
            rounds.style.fontFamily = 'sans-serif'
            target.replaceWith(rounds)
        } else {
        }
    }
})





reload.addEventListener('click', () => {
    location.reload();
})