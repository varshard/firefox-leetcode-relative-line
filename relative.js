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

const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            setRelativeLineNumber()
        }
    }
})

observer.observe(document.getElementById('editor'), {
    childList: true,
    subtree: true
})
