window.addEventListener('DOMContentLoaded', () => {
  const shiftingText = document.getElementById('shifting-text');
  const link = 'cryptosynapse.ru'; // Replace with your desired link

  // Function to generate a random alphanumeric character
  function generateRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  // Function to generate the shifting text
  function generateShiftingText() {
    const textLength = 50; // Adjust the length of the shifting text as needed
    let shiftingTextContent = '';

    for (let i = 0; i < textLength; i++) {
      shiftingTextContent += generateRandomChar();
    }

    // Replace a random position in the shifting text with the link
    const randomPosition = Math.floor(Math.random() * textLength);
    shiftingTextContent = shiftingTextContent.slice(0, randomPosition) + link + shiftingTextContent.slice(randomPosition + link.length);

    shiftingText.textContent = shiftingTextContent;
  }

  // Generate the initial shifting text
  generateShiftingText();

  // Set interval to generate a new shifting text every 1 second (adjust as needed)
  setInterval(() => {
    generateShiftingText();
  }, 1000);
});
                                                    
