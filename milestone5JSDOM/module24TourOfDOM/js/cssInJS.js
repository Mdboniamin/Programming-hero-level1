const sections = document.getElementsByTagName('section');
console.log(sections);

const section1 = document.querySelectorAll('section');
// for(const section of section1){
//     console.log(section);
//     section.style.backgroundColor = 'lightblue';
//     section.style.border= '2px solid red';
//     section.style.marginBottom = '10px';
// }

//dynamic css
for(const section of sections){
    section.classList.add('section-card');
}