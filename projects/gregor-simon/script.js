// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.section');

//     sections.forEach(section => {
//         section.addEventListener('click', function() {
//             const text = this.querySelector('.hover-text').textContent;
//             const url = text.toLowerCase() + '.html';
//             window.location.href = url;
//         });
//     });
// });

// Szene, Kamera und Renderer einrichten
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Licht zur Szene hinzufügen
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(100, 100, 100).normalize();
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040); // Weiches weißes Licht
scene.add(ambientLight);

// Fahnen-Geometrie erstellen
const geometry = new THREE.PlaneGeometry(20, 12, 170, 170);
const loader = new THREE.TextureLoader();

// Bilddatei der Fahne laden
loader.load('fahne.png', function(texture) {
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const flag = new THREE.Mesh(geometry, material);
    scene.add(flag);

    flag.position.set(0, 0, 0);
    camera.position.set(0, 0, 10);

    // Welleneffekt mit Vertex-Displacement erstellen
    const clock = new THREE.Clock();
    function animate() {
        const time = clock.getElapsedTime();

        // Vertices verschieben, um einen Welleneffekt zu erzeugen
        const positions = geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i]; // x-Koordinate der Vertices
            const y = positions[i + 1]; // y-Koordinate der Vertices

            // // Windrichtung basierend auf der Mausposition
            // const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            // const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            // const windX = mouseX * 0.5 || 0; // Windrichtung in X-Richtung (wenn undefiniert, dann 0)
            // const windY = mouseY * 0.5 || 0; // Windrichtung in Y-Richtung (wenn undefiniert, dann 0)

            // Wellenbewegung von der Seite
            const waveX1 = 0.1 * Math.sin((x) * 2 + time * 2);
            const waveX2 = 0.05 * Math.sin((x) * 3 + time * 1);

            // Wellenbewegung von unten
            const waveY1 = 0.1 * Math.sin((y) * 2 + time * 2);
            const waveY2 = 0.05 * Math.sin((y) * 3 + time * 1);

            // Kombination der Wellenbewegungen
            positions[i + 2] = waveX1 + waveX2 + waveY1 + waveY2; // Verschiebung in Z-Richtung
        }
        geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();

    // Windrichtung basierend auf Mausbewegungen aktualisieren
    document.addEventListener('mousemove', (event) => {
        animate(); // Animation bei jeder Mausbewegung aktualisieren
    });
});
