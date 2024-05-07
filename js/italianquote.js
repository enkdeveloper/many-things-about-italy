const italianPhilosopherQuotes = [
    "The greatest deception men suffer is from their own opinions. - Leonardo da Vinci",
    "He who wishes to be rich in a day will be hanged in a year. - Leonardo da Vinci",
    "It is easier to resist at the beginning than at the end. - Leonardo da Vinci",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "Art is never finished, only abandoned. - Leonardo da Vinci",
    "The function of muscle is to pull and not to push, except in the case of the genitals and the tongue. - Leonardo da Vinci",
    "Experience never errs; it is only your judgments that err by promising themselves effects such as are not caused by your experiments. - Leonardo da Vinci",
    "Learning never exhausts the mind. - Leonardo da Vinci",
    "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigor of the mind. - Leonardo da Vinci",
    "Water is the driving force of all nature. - Leonardo da Vinci",
    "As a well-spent day brings happy sleep, so life well used brings happy death. - Leonardo da Vinci",
    "The noblest pleasure is the joy of understanding. - Leonardo da Vinci",
    "Nothing strengthens authority so much as silence. - Leonardo da Vinci",
    "Time abides long enough for those who make use of it. - Leonardo da Vinci",
    "I love those who can smile in trouble. - Leonardo da Vinci",
    "Nature never breaks her own laws. - Leonardo da Vinci",
    "Art is the queen of all sciences communicating knowledge to all the generations of the world. - Leonardo da Vinci",
    "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time. - Leonardo da Vinci",
    "Patience serves as a protection against wrongs as clothes do against cold. For if you put on more clothes as the cold increases, it will have no power to hurt you. So in like manner you must grow in patience when you meet with great wrongs, and they will then be powerless to vex your mind. - Leonardo da Vinci",
    "The painter has the Universe in his mind and hands. - Leonardo da Vinci",
    "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. - Leonardo da Vinci",
    "While I thought that I was learning how to live, I have been learning how to die. - Leonardo da Vinci",
    "The truth of things is the chief nutriment of superior intellects. - Leonardo da Vinci",
    "The knowledge of all things is possible. - Leonardo da Vinci",
    "He who possesses most must be most afraid of loss. - Leonardo da Vinci",
    "The painter who draws merely by practice and by eye, without any reason, is like a mirror which copies every thing placed in front of it without being conscious of their existence. - Leonardo da Vinci",
    "Men of lofty genius when they are doing the least work are most active. - Leonardo da Vinci",
    "You can have no dominion greater or less than that over yourself. - Leonardo da Vinci",
    "Just as courage imperils life, fear protects it. - Leonardo da Vinci",
    "The spirit desires to remain with its body, because, without the organic instruments of that body, it can neither act, nor feel anything. - Leonardo da Vinci",
    "Wisdom is the daughter of experience. - Leonardo da Vinci",
    "Every action needs to be prompted by a motive. - Leonardo da Vinci",
    "Poor is the pupil who does not surpass his master. - Leonardo da Vinci",
    "The poet ranks far below the painter in the representation of visible things, and far below the musician in that of invisible things. - Leonardo da Vinci",
    "Nothing can be loved or hated unless it is first understood. - Leonardo da Vinci",
    "He who is fixed to a star does not change his mind. - Leonardo da Vinci",
    "A good painter is to paint two main things, namely, man and the intention of his soul. - Leonardo da Vinci",
    "The natural desire of good men is knowledge. - Leonardo da Vinci",
    "I have offended God and mankind because my work didn't reach the quality it should have. - Leonardo da Vinci",
    "The poet ranks far below the painter in the representation of visible things, and far below the musician in that of invisible things. - Leonardo da Vinci",
    "There are three classes of people: those who see, those who see when they are shown, those who do not see. - Leonardo da Vinci",
    "He who loves practice without theory is like the sailor who boards ship without a rudder and compass and never knows where he may cast. - Leonardo da Vinci",
    "Art is never finished, only abandoned. - Leonardo da Vinci",
    "The human foot is a masterpiece of engineering and a work of art. - Leonardo da Vinci",
    "It is easier to resist at the beginning than at the end. - Leonardo da Vinci",
    "There are three classes of people: those who see, those who see when they are shown, those who do not see. - Leonardo da Vinci",
    "The painter has the Universe in his mind and hands. - Leonardo da Vinci",
    "Study without desire spoils the memory, and it retains nothing that it takes in. - Leonardo da Vinci",
    "He who is fixed to a star does not change his mind. - Leonardo da Vinci",
    "A man of knowledge lives by acting, not by thinking about acting. - Leonardo da Vinci"
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * italianPhilosopherQuotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = italianPhilosopherQuotes[randomIndex];
}

window.onload = showRandomQuote;

setInterval(showRandomQuote, 24 * 60 * 60 * 1000); 