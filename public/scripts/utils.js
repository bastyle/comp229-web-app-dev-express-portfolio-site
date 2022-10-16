/**
 * @file utils.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date October 14th 2022.
 * @since  1.1.0
 * @comment the base of this file is a copy from comp229 week6 resources on e.centennial, but this file has been modified to achieve the assigment.
 */
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