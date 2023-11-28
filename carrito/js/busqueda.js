document.addEventListener('DOMContentLoaded', function () {
    createCardsFromArray(products);

    const target = Array.from(document.querySelectorAll('.card'));
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        target.forEach(tarjeta => {
            const title = tarjeta.querySelector('.text-title').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    });
});