var theMover = (function spanishModule(theMover){
  var spanish = {
  'happy':'contento',
  "grandparent's" : 'abuelos',
  'day' : 'dia',
  'hope' : 'esperanza',
  'assisted' :'asistida',
  'living' : 'vivo',
  'is' : 'es',
  'awesome' : 'increible'
}

   var spanishText = [];
  var textInput = theMover.getText();

  theMover.translateToSpanish = function() {
    spanishText = []
    if (theMover.getChoice() === 'spanish') {
      console.log('choice: ', theMover.getChoice());
      console.log(theMover.getText());
      for (var i = 0; i < theMover.getText().length; i++) {
       // console.log('checking: ', textInput[i]);
        if (spanish[theMover.getText()[i]]){
            console.log('pushing: ', spanish[theMover.getText()[i]]);
            spanishText.push(spanish[theMover.getText()[i]]);
          }
        }
      }

      console.log('spanish array: ', spanishText)
      spanishText = spanishText.join(' ');
      console.log(spanishText);
      theMover.setTranslatedText(spanishText);
  }

  return theMover;
})(theMover);
