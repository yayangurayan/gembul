document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    if (loginContainer) {
        loginContainer.style.animation = 'fade-in-up 0.8s forwards ease-out';
        loginContainer.style.opacity = '1'; 
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            loginContainer.classList.remove('animate-shake');
            errorMessage.classList.add('hidden');

            const isUsernameValid = username.toUpperCase() === 'ADEKGEMBUL' || username.toUpperCase() === 'MAMIADEK';
            const isPasswordValid = password === 'SETIAPMALAMDIBOBOIN';

            if (isUsernameValid && isPasswordValid) {
                document.body.style.animation = 'fade-out 0.5s forwards ease-in';
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 500);

            } else {
                errorMessage.textContent = 'Ups, coba lagi ya sayang ♡';
                errorMessage.classList.remove('hidden');
                loginContainer.classList.add('animate-shake');
                
                setTimeout(() => {
                    loginContainer.classList.remove('animate-shake');
                }, 820);
            }
        });
    }
});
