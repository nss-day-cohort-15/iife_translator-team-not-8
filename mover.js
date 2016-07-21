var theMover = (function mainModule() {

  var text = undefined;
  var choice = '';

  document.getElementById('button').addEventListener('click', start);

  document.getElementById('wookMode').addEventListener('click', function doWookThings(e) {
    theMover.setTranslatedText(`huurh raaaaaahhgh uughguughhhghghghhhgh uugggh huurh uuh wrrhw aarrragghuuhw huuguughghg wrrhwrwwhw
      <img src='http://static.fjcdn.com/pictures/Wookie+goldberg+wookie+goldberg_8097af_3162787.jpg'>`);
  });

  function start() {
    var radios = document.getElementsByName('selectedLanguage');
    text = document.getElementById('originalText').value.split(' ');
    console.log('Here be text: ', text);

    for (i=0; i < radios.length; i++) {
      if (radios[i].checked) {
        choice = radios[i].value;
      }
    }

    theMover.setText(text);
    if (choice === 'german') {theMover.translateToGerman();}
    if (choice === 'chinese') {theMover.translateToChinese();}
    if (choice === 'spanish') {theMover.translateToSpanish();}
  }

  return {
    getChoice: function() {
      return choice
    },
    setText: function(newText) {
      text = newText;
    },
    getText: function() {
      return text
    },
    setTranslatedText: function(text) {
      document.getElementById('newText').innerHTML = text;
    }
  }
})()
