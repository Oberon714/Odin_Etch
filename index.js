const cdiv = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const n = Number(window.prompt("Type a number", 256));

    // Clear previous divs
    cdiv.innerHTML = '';
    cdiv.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    cdiv.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    // Create new divs
    const totalSquares = n * n;
    for (let i = 1; i <= totalSquares; i++) {
        const div = document.createElement('div');
        cdiv.appendChild(div);
    }

    // Add event listeners for all divs
    const divs = cdiv.querySelectorAll('div');
    divs.forEach(div => {
        div.addEventListener('mouseover', function () {
            this.style.backgroundColor = "gray";
        });
    });
});