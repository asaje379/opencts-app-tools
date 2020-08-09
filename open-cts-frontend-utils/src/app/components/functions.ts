export function flash(type: string, msg: string, seconds: number) {
    let flashBox = document.createElement('app-flash');
    flashBox.setAttribute('type', type);
    flashBox.setAttribute('msg', msg);
    document.appendChild(flashBox);

    setTimeout(() => {
        document.removeChild(flashBox);
    }, seconds * 1000);
}