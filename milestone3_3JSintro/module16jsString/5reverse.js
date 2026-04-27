const sentence = 'I am learning web dev';

let reverse = ''
for( const letter of sentence){
    console.log(letter);
    reverse = letter + reverse;
}
//another way
for(let i = 0; i<sentence.length; i++){
    console.log(sentence[i])
}

//shortcut
 const reversed = sentence.split('').reverse().join('');
 console.log(reversed)