document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const successForm = document.querySelector("#success");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });

    document.querySelector("#linkSuccess").addEventListener("click", e => {
        e.preventDefault();
        successForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
        loginForm.classList.add("form_hidden");
    });

    document.querySelector("#linkContinueLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });

    document.querySelector("#linkContinueCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });

});