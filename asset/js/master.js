
const nameInput = document.getElementById('name');

const lastNameInput = document.getElementById('lastname');

const ageInput = document.getElementById('age');

const descInput = document.getElementById('desc');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    if (nameInput.value && lastNameInput.value && ageInput.value && descInput.value) {

        const myTask = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            age: ageInput.value,
            desc: descInput.value
        };

        fetch('https://6740a095d0b59228b7f0c373.mockapi.io/SignUpForm', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(myTask)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(task => {
            console.log(task);
            alert('User was created');
        }).catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please fill all the fields');
    }
})
