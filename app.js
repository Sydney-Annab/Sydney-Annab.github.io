document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#login_form");
    const CreateAccountForm = document.querySelector("#create_account_form");

    document.querySelector("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.add("form_hidden");
        CreateAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("linkLogin").addEventListener("click", e => {
        e.preventDefault();
        CreateAccountForm.classList.add("form_hidden");
        LoginForm.classList.remove("form_hidden");
    });
});