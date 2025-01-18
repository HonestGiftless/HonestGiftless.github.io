document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('burger-checkbox');
    const navigation = document.querySelector('nav');
    const container = document.querySelector('main');
    const footer = document.querySelector('footer');

    toggleBtn.addEventListener('click', () => {
        navigation.classList.toggle('open');
        container.classList.toggle('hidden');
        footer.classList.toggle('hidden');
    });
});
