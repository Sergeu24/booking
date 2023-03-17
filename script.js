function showModal(modalId) {
    // Находим форму по переданному id
    var modal = document.getElementById(modalId); 
     // Добавляем класс для отображения
    modal.classList.add("show");
     // Отменяем действие по умолчанию, для того что бы не перейти по ссылки или не отправить форму
    return false;
}

function hideModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove("show");
    return false;
}

// Ожидаем загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
    // Находим все кнопки для закрытия формы
    var closeButtons = document.querySelectorAll(".close-button");

    closeButtons.forEach(function (button) {
        // Для каждой кнопки добавляем обработку клика по ней
        button.addEventListener("click", function () {
            // Находим родительскую форму
            var modal = this.closest(".modal");
            modal.classList.remove("show");
        });
    });

    // Находим все модальные формы
    var modalForms = document.querySelectorAll(".modal");

    modalForms.forEach(function (modalForm) {
        modalForm.addEventListener("click", function (event) {
            //Проверяем что нажали на задний фон у формы
            if (event.target === this) {
                this.classList.remove("show");
            }
        });
    });
});
