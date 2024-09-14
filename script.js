const noBtn = document.getElementById('noBtn');

// Fonction pour déplacer le bouton "Non"
noBtn.addEventListener('mouseover', function() {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Si on clique sur le bouton "Oui"
document.getElementById('yesBtn').addEventListener('click', function() {
    alert("Vous avez accepté !");
});
