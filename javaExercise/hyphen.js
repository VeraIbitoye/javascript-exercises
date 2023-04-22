function replaceSpacesWithHyphens(str) {
    return str.replace(/\s+/g, "-");
  }
  
  let inputString = "i am a girl";
  let outputString = replaceSpacesWithHyphens(inputString);
  
  console.log(outputString); 
  