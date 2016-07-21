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

  var germanText = [];
  var textInput = theMover.getText();

  theMover.translateToGerman = function() {
    germanText = []
    if (theMover.getChoice() === 'german') {
      console.log('choice: ', theMover.getChoice());
      console.log(theMover.getText());
      for (var i = 0; i < theMover.getText().length; i++) {
       // console.log('checking: ', textInput[i]);
        if (german[theMover.getText()[i]] || germanText.push(" ")){
            console.log('pushing: ', german[theMover.getText()[i]]);
            germanText.push(german[theMover.getText()[i]]);
          }
        }
      }

      console.log('german array: ', germanText)
      germanText = germanText.join(' ');
      console.log(germanText);
      theMover.setTranslatedText(germanText);
  }

  return theMover;
})(theMover);


