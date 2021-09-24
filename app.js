const board = document.querySelector('#board')
const colors = ['#ff00ff','#00d600', '#ff94c9', '#52ffff', '#a024ff', '#0000d1', '#52ff52']
const SQUARES_NUMBER = 650

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color =getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = 'transparent'
    element.style.boxShadow = ` 0 0 2px #111`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}