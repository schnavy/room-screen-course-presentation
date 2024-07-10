document.addEventListener('DOMContentLoaded', () => {
    const fishes = document.querySelectorAll('.fish');
    fishes.forEach(fish => {
        moveFish(fish);
    });
});

function moveFish(fish) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    fish.style.transform = `translate(${x}px, ${y}px)`;

    setTimeout(() => moveFish(fish), 3000 + Math.random() * 2000);
}

function startDance() {
    const fishes = document.querySelectorAll('.fish');
    fishes.forEach(fish => {
        fish.classList.add('dance');
        // Position the fish around the button
        const x = 50 + (Math.random() * 100 - 50);
        const y = 50 + (Math.random() * 100 - 50);
        fish.style.transform = `translate(${x}%, ${y}%)`;
    });

    const music = document.getElementById('music');
    music.play();

    const partyText = document.getElementById('party-text');
    partyText.style.display = 'block';
}

const css = `
@keyframes dance {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-50px) rotate(15deg); }
    50% { transform: translateY(0) rotate(0deg); }
    75% { transform: translateY(50px) rotate(-15deg); }
    100% { transform: translateY(0) rotate(0deg); }
}

.dance {
    animation: dance 1s infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);
