// for (let i = 1; i < 1011; i++) {
// 	const pokemon = document.createElement('img');
// 	pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

// 	const div = document.querySelector('.pokes');

// 	div.append(pokemon);
// }

const button = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const getColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
};

button.addEventListener('click', () => {
	body.style.backgroundColor = getColor();
	h1.innerText = getColor();
});
