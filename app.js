document.addEventListener("DOMContentLoaded", () => {
    const login_form = document.querySelector("#login_form");
    const create_account_form = document.querySelector("#create_account_form");

    document.querySelector("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        login_form.classList.add("form-hidden");
        create_account_form.classList.remove("form_hidden");
    });

    document.querySelector("linkLogin").addEventListener("click", e => {
        e.preventDefault();
        create_account_form.classList.add("form-hidden");
        login_form.classList.remove("form_hidden");
    });