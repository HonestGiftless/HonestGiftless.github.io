document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('burger-checkbox');
    const navigation = document.querySelector('nav');
    // const container = document.querySelector('CLASS');

    toggleBtn.addEventListener('click', () => {
        navigation.classList.toggle('open');
        // container.classList.toggle('hidden');
    });
});
