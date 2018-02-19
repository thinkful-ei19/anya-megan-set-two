function decode(sentence){
  let codeCracker = [];
  let words = sentence.split(' ');
  for (let i =0; i<words.length; i++){
    if (words[i][0]==='a'){
      codeCracker.push(words[i][1]);
    }
    if (words[i][0]==='b'){
      codeCracker.push(words[i][2]);
    }
    if (words[i][0]==='c'){
      codeCracker.push(words[i][3]);
    }
    if (words[i][0]==='d'){
      codeCracker.push(words[i][4]);
    }
    if (words[i][0] !== "a" && words[i][0] !== "b" && words[i][0] !== "c" && words[i][0] !== "d"){
        console.log(words[i][0]);
      codeCracker.push(' ');
    }
  }

  console.log(codeCracker.join(''));
}

decode('craft block argon meter bells brown croon droop');
