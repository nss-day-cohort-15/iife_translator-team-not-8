var theMover = (function() {
  var translated = [];

  document.getElementById('button').addEventListener('click', start);
  var text = '';
  var choice = '';

  function start() {
    var radios = document.getElementsByName('selectedLanguage');
    text = document.getElementById('originalText').value.toLowerCase().split(' ');
    console.log('inside start():', text);

    for (i=0; i < radios.length; i++) {
      if (radios[i].checked) {
        choice = radios[i].value;
      }
    }
  }

  return {
    getChoice: function() {
      return choice;
    },
    getText: function() {
      return text;
    },
    outputTranslatedText: function () {
      console.log(text);
    }
  }
})()




var theMover = (function germanModule(theMover){
  var german = {
    'happy': 'glucklich',
    'grandparents': 'grosseltern',
    'day': 'tag',
    'hope': 'hoffnung',
    'assisted': 'unterstutzt',
    'living': 'leben',
    'is': 'ist',
    'awesome': 'genial'
  }

  theMover.translateToGerman = function() {
    // do things...
  }

  return theMover;
})(theMover);


