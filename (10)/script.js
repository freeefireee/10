let userButton = document.getElementById('user-button');
let modal = document.getElementById('modal');

userButton.onclick = () => {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
