
function apriLightbox(card) {
    const img = card.querySelector('img');
    const titolo = card.querySelector('.opera-titolo').textContent;
    const autore = card.querySelector('.opera-autore').textContent;

    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-img').alt = img.alt;
    document.getElementById('lightbox-titolo').textContent = titolo;
    document.getElementById('lightbox-autore').textContent = autore;
    document.getElementById('lightbox').classList.add('attivo');
    document.body.style.overflow = 'hidden';
}

function chiudiLightbox(event) {
    if (!event || event.target === document.getElementById('lightbox') || event.target.classList.contains('lightbox-chiudi')) {
        document.getElementById('lightbox').classList.remove('attivo');
        document.body.style.overflow = '';
    }
}
