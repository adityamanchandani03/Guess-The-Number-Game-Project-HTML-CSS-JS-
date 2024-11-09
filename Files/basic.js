
function play() {
    document.getElementById('play-btn').style.display = 'none'
    document.getElementById('game-box').style.display = 'block'

}



const ran = Math.floor(Math.random() * 100);

console.log(ran);

var num;
let count = 1;

function submit() {
    if (count === 11) {
        document.getElementById('cons').style.display = 'none';
        document.getElementById('smaller').style.display = 'none';
        document.getElementById('greater').style.display = 'none';
        document.getElementById('Game-Over').style.display = 'inline-block';
        document.getElementById('Answer').style.display = 'none';
        document.getElementById('submit').style.display = 'none';
        return;
    }
    num = document.getElementById('Answer').value;
    Ramdom(num);
    document.getElementById('Answer').value = '';
}

function clear() {
    num = undefined;
    document.getElementById('Answer').value = '';

}
function Ramdom(val) {





    while (val != ran) {

        if (val > ran) {
            console.log('Please Enter The Smaller value' + count);
            document.getElementById('cons').style.display = 'none';
            document.getElementById('smaller').style.display = 'none';
            document.getElementById('win').style.display = 'none';
            document.getElementById('greater').style.display = 'inline-block';
            document.getElementById('count').innerHTML = count;

            count++;
        }
        else {
            console.log('Please Enter the Greater value' + count);
            document.getElementById('cons').style.display = 'none';
            document.getElementById('win').style.display = 'none';
            document.getElementById('greater').style.display = 'none';
            document.getElementById('smaller').style.display = 'inline-block';
            document.getElementById('count').innerHTML = count;

            count++;
        }

        clear();

        break;
    }
    if (val == ran) {
        console.log('Congrats You Guess the correct the number in ' + count + ' Guesses ');
        document.getElementById('cons').style.display = 'none';
        document.getElementById('smaller').style.display = 'none';
        document.getElementById('greater').style.display = 'none';
        document.getElementById('win').style.display = 'inline-block';
        document.getElementById('count').innerHTML = count;

        document.getElementById('Answer').style.display = 'none';
        document.getElementById('submit').style.display = 'none';
    }
}