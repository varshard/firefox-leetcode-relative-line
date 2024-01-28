const ACTIVE_LINE = 'active-line-number'
const LINE_NUMBER = 'div.line-numbers'
function setRelativeLineNumber() {
    let allLines = Array.from(document.querySelectorAll(LINE_NUMBER))
    let activeLineIndex = allLines.findIndex(line => line.classList.contains(ACTIVE_LINE))
    if (allLines[activeLineIndex].innerHTML == ' ') {
        return;
    }
    for (let i = 0; i < allLines.length; i++) {
        let line = allLines[i];
        if (i == activeLineIndex) {
            line.innerHTML = " "
        } else {
            line.innerHTML = Math.abs(i - activeLineIndex).toString()
        }
    }
}

document.addEventListener('click', setRelativeLineNumber)
document.addEventListener('keyup', (e) => {
    const key = e.key
    if (key === 'j' || key == 'k' || key == 'd' || key == 'o' || key == 'O' || key == 'g' || key == 'G') {
        setRelativeLineNumber()
    }
})