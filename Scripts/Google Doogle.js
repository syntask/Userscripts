// ==UserScript==
// @name Google Doogle
// @version 1.0.0
// @description Changes the Google logo to a random misspelling like "Doogle."
// @author Isaac Neumann
// @include https://www.google.com/*
// @grant none
// ==/UserScript==

document.querySelectorAll('img[alt]').forEach(img => {
    if (img.alt === 'Google') {
        const misspellings = [
            "Boogle", "Doogle", "Goofle", "Tooble", 
            "Gogole", "Gloogle", "Goggle", "Foogle",
            "Yooble", "Booble", "Froogle", "Goolge",
            "Gooble", "Zooble", "Poodle", "Noodle"
        ];
        const randomText = misspellings[Math.floor(Math.random() * misspellings.length)];

        const googleColors = [
            "#4285F4", "#EA4335", "#FBBC05", "#4285F4", 
            "#34A853", "#EA4335", "#FBBC05"
        ];

        const customDiv = document.createElement('div');
        customDiv.style.width = img.width + 'px';
        customDiv.style.backgroundColor = 'transparent';
        customDiv.style.display = 'flex';
        customDiv.style.justifyContent = 'center';
        customDiv.style.alignItems = 'center';
        customDiv.style.fontFamily = 'Futura';
        customDiv.style.fontSize = img.width * 0.3 + 'px';
        customDiv.style.letterSpacing = '-.05em';

        for (let i = 0; i < randomText.length; i++) {
            const span = document.createElement('span');
            span.textContent = randomText[i];
            span.style.color = googleColors[i % googleColors.length];
            customDiv.appendChild(span);
        }

        img.replaceWith(customDiv);
        document.title = document.title.replace(/Google/g, randomText);
    }
});
