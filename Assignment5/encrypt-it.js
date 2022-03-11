console.log("Window Loaded");

(function() {
    "use strict";
  
    window.addEventListener("load", init);
  
    function init() {
      let encryptBtn = document.getElementById("encrypt-it");
      encryptBtn.addEventListener("click", encryptText);
      let resetBtn = document.getElementById("reset");
      resetBtn.addEventListener("click" , resetText);
      
      let radBtn12 = document.getElementById("radBtn12");
      radBtn12.addEventListener("click", fontChangeSmall);
      let randBtn24 = document.getElementById("radBtn24");
      randBtn24.addEventListener("click", fontChangeBig);
      
      let allCapsCheck = document.getElementById("all-caps");
      allCapsCheck.addEventListener("click", toUpper);

    }
  
    function encryptText(){
        console.log("Encryption Button Clicked");
        let textField = document.getElementById("input-text");
        let results = shiftCipher(textField);
        document.getElementById("result").textContent = results;
    }

    function resetText(){
        console.log("Reset Button Clicked");
        let textField = document.getElementById("input-text");
        textField.value = null;
    }

    function fontChangeSmall(){
        let textField = document.getElementById("input-text");
        if(document.getElementById("radBtn12").checked){
            textField.style.fontSize = "12pt";
        }
    }

    function fontChangeBig(){
        let textField = document.getElementById("input-text");
        if(document.getElementById("radBtn24").checked){
            textField.style.fontSize = "24pt"
        }
    }

    function toUpper(){
        let textField = document.getElementById("input-text");
        
        if(document.getElementById("all-caps").checked){
            textField.style.textTransform = "uppercase";
        }

        else{
            textField.style.textTransform = "lowercase";
        }
    }

    function shiftCipher(text) {
        text = text.value.toLowerCase();
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] < 'a' || text[i] > 'z') {
            result += text[i];
          } else if (text[i] == 'z') {
            result += 'a';
          } else { // letter is between 'a' and 'y'
            let letter = text.charCodeAt(i);
            let resultLetter = String.fromCharCode(letter + 1);
            result += resultLetter;
          }
        }
        return result;
      }

  })();
  