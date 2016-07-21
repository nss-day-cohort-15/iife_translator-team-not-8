var theMover = (function chineseModule(theMover) {
  var chinese = {
    "happy": "快乐",
    "grandparents": "祖父",
    "day": "母节",
    "i": "我",
    "hope": "希望",
    "assisted": "养",
    "living": "老院",
    "is": "是",
    "awesome": "好"
  }

  // On this day, July 21, a big ass bug was killed on this line.

  var chineseText = [];
  var textInput = theMover.getText();

  theMover.translateToChinese = function() {
    chineseText = []
    if (theMover.getChoice() === 'chinese') {
      console.log('choice: ', theMover.getChoice());
      console.log(theMover.getText());
      for (var i = 0; i < theMover.getText().length; i++) {
       // console.log('checking: ', textInput[i]);
        if (chinese[theMover.getText()[i]]){
            console.log('pushing: ', chinese[theMover.getText()[i]]);
            chineseText.push(chinese[theMover.getText()[i]]);
          }
        }
      }

      console.log('chinese array: ', chineseText)
      chineseText = chineseText.join(' ');
      console.log(chineseText);
      theMover.setTranslatedText(chineseText);
  }

  return theMover;
})(theMover);
