

// In deinem JavaScript, um das Cursor-Bild zu positionieren und zu wechseln
document.addEventListener('mousemove', function(event) {
    const cursor = document.getElementById('custom-cursor');
    const screenWidth = window.innerWidth;
    const cursorImageLeft = 'assets/cursor1.png'; // Bild für linke Bildschirmhälfte
    const cursorImageRight = 'assets/cursor2.png'; // Bild für rechte Bildschirmhälfte

    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';

    if (event.clientX < screenWidth / 2) {
        cursor.src = cursorImageLeft;
    } else {
        cursor.src = cursorImageRight;
    }
});

// JavaScript für Cursor-Vergrößerung und Wechsel der Bilder
document.addEventListener('mousemove', function(event) {
    const cursor = document.getElementById('custom-cursor');
    const screenWidth = window.innerWidth;
    const cursorImageLeft = 'assets/cursor1.png'; // Bild für linke Bildschirmhälfte
    const cursorImageRight = 'assets/cursor2.png'; // Bild für rechte Bildschirmhälfte

    // Positioniere das Bild an der Cursor-Position
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';

    // Wechsle das Bild je nach Position des Cursors
    if (event.clientX < screenWidth / 2) {
        cursor.src = cursorImageLeft;
    } else {
        cursor.src = cursorImageRight;
    }

    // Überprüfe, ob der Cursor über ein klickbares Element (z.B. Link) bewegt wird
    const target = event.target;
    if (target.tagName.toLowerCase() === 'a' || target.closest('a')) {
        cursor.classList.add('large'); // Füge die CSS-Klasse 'large' hinzu für vergrößerten Cursor
    } else {
        cursor.classList.remove('large'); // Entferne die CSS-Klasse 'large', wenn der Cursor nicht über einem Link ist
    }
});
