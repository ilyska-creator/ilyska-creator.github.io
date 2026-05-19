const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('userName');
        const phone = document.getElementById('userPhone');
        const successMsg = document.getElementById('formSuccess');

        name.style.borderColor = '';
        phone.style.borderColor = '';
        successMsg.style.display = 'none';

        let isValid = true;

        if (name.value.trim() === '') {
            name.style.borderColor = 'red';
            isValid = false;
        }

        if (phone.value.trim().length < 5) {
            phone.style.borderColor = 'red';
            isValid = false;
        }

        if (isValid) {
            successMsg.style.display = 'block';
            form.reset();
        }
    });
}