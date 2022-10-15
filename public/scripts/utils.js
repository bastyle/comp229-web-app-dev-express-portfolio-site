// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure to?\nDo you really want to delete this contact?")) {
                    event.preventDefault();
                    window.location.assign('/contacts');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();