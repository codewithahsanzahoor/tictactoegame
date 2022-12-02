console.log('welcome to tic tac toe game.');

// let music = new Audio('../Resources/tic tac toe/music.mp3');
// let audioTurn = new Audio('../Resources/tic tac toe/ting.mp3');
// let gameOver = new Audio('../Resources/tic tac toe/gameover.mp3');
isGameOver = false;

//* change turn function:
let turn = `X`;
const changeTurn = () => {
	if (turn === 'X') {
		turn = `0`;
		return turn;
	} else if (turn === '0') {
		turn = `X`;
		return turn;
	}
	// console.log(turn);
};

const checkWin = () => {
	let boxtext = document.getElementsByClassName('boxTxt');
	let wins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	wins.forEach((e) => {
		if (
			boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
			boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
			boxtext[e[0]].innerText !== ''
		) {
			document.getElementsByClassName('info')[0].innerHTML = `${
				boxtext[e[0]].innerHTML
			} Won!`;
			isGameOver = true;
			document
				.getElementsByClassName('imgbox')[0]
				.getElementsByTagName('img')[0].style.display = 'block';
		}
	});
};

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function () {
	let boxTxt = document.getElementsByClassName('boxTxt');
	Array.from(boxTxt).forEach((element) => {
		element.innerText = '';
	});
	turn = 'X';
	isGameOver = false;
	document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
	document.getElementsByTagName('img')[0].style.display = 'none';
});

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
	// console.log(element);
	let boxText = element.querySelector('.boxTxt');
	element.addEventListener('click', function () {
		if (boxText.innerHTML === '') {
			boxText.innerHTML = turn;
			turn = changeTurn();
			// audioTurn.play();
			checkWin();
			if (!isGameOver) {
				document.getElementsByClassName(
					'info'
				)[0].innerHTML = `Turn for ${turn}`;
			}
		}
	});
});
