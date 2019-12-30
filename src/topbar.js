export default function(target, text) {
    target.innerText = text;
    let translateX = 0;
    const topWidth = target.clientWidth;
    const length = Math.ceil(document.body.clientWidth / topWidth) + 2;
    target.innerText = Array(length)
        .fill(text)
        .join('');
    setInterval(() => {
        translateX += 1;
        if (translateX >= topWidth) {
            translateX = 0;
            target.style.transform = `translate(0, 0)`;
        } else {
            target.style.transform = `translate(-${translateX}px, 0)`;
        }
    }, 1000 / 24);
}
