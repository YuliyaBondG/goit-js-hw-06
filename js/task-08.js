const loginFormE1 = document.querySelector ("form.login-form");
loginFormE1.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formE1ements = event.currentTarget.elements;


    const mail = formE1ements.email.value;
    const password = formE1ements.password.value;


    if (mail === "" || password === "") {
        return alert(`Заповніть всі поля`);
    } 

    const onFormResult = {};
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    formData.forEach((value, name) => {
        onFormResult[name] = value;
    });


    console.log(onFormResult);
    loginFormE1.reset();
}
