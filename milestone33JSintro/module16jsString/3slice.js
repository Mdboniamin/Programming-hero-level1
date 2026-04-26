const address = 'andorkilla';
const part = address.slice(2,5);
console.log(part);
//substring , substr

const sentence = 'I am a good and hardworking person';
// console.log(sentence.split(' ')); //
console.log(sentence.split('a'))

const frndstr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const frnds = frndstr.split((','));
console.log(frnds);
const realfrnd = ['Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim'];
console.log(realfrnd.join());
console.log(realfrnd.join('|'));
console.log(realfrnd.join('-'));