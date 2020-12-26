function checkIfNotEmpty(str) {
    return str !== '';
}

function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let form = document.forms[1];
    let button = form["submit"];


    button.addEventListener("click", (event) => {
        let formData = new FormData(form)
        event.preventDefault()

        for (var value of formData.values()) {
            console.log(value);
        }

        if (!checkIfNotEmpty(formData.get('articleEmail'))) return showMessage('error', 'Ошибка. Заполните поле Email.');

        Swal.fire({
            title: 'Loading',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
        })
        showMessage('success', 'Поздравляем! Заказ успешно размещен.');
    })
})