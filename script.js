const challenges = [
    "Fight against 3 opponents blindfolded.",
    "Win a match without getting hit once.",
    "Defeat an opponent twice your size.",
    "Use only kicks to defeat your opponent.",
    "Win a match using only one hand.",
    "Defeat an opponent without using any special moves.",
    "Take down 5 opponents consecutively.",
    "Defeat an opponent using only grappling techniques.",
    "Win a match in under 30 seconds.",
    "Use a weapon provided in the arena to win a match."
];

document.addEventListener("DOMContentLoaded", () => {
    const challengeContainer = document.getElementById("challenge");
    const generateBtn = document.getElementById("generate-challenge-btn");

    generateBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * challenges.length);
        const randomChallenge = challenges[randomIndex];
        challengeContainer.textContent = randomChallenge;
    });
});
