function translateText(sourceLang, targetLang) {
    const sourceText = document.getElementById('source-text').value;
    
    const apiKey = '###';

    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const data = {
      q: sourceText,
      source: sourceLang,
      target: targetLang
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const translatedText = data.data.translations[0].translatedText;
      document.getElementById('translated-text').value = translatedText;
    })
    .catch(error => console.error('Error:', error));
  }