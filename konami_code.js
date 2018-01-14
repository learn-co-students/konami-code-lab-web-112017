const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let i = 0
  document.addEventListener('keydown', function(e) {
    if (code[i] === parseInt(e.which || e.detail)) {
      console.log(`good job! you've gotten ${i+1} out of ${code.length} correct!`)
      i++
      if (i === code.length) {

        window.alert("Hurray!")
        i = 0
      }
    } else {
      i = 0
    }
  })
}
