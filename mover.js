var theMover = (function() {
var translated = []

document.getElementById('button').addEventListener('click', start)
var text = ''
var choice = ''

function start() {
  var radios = document.getElementsByName('selectedLanguage')
  text = document.getElementById('originalText').value.split(' ')

  for (i=0; i <selectedLanguage.length; i++) {
    if (radios[i].checked) {
      choice = radios[i].value
    }
  }


}

// function go(choice) {
//   if (choice === 'chinese') {
//     translateToChinese()
//   }
//   if (choice === 'german') {
//     translateToGerman()
//   }
//   if (choice === 'spanish') {
//     translateToSpanish()
//   }
//   }

  return {
    getChoice: function() {
      return choice
    },
    getText: function() {
      return text
    }
  }
})()
