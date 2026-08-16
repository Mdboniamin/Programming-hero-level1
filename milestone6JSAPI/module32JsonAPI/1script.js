// console.log("Explore API");

// const person = {
//     name: "selim",
//     fruit: "dalim",
//     dish: "halim",
//     friends: ["alim", "kolim", "lamim" ],
//     isRich: false,
//     money: 34000,
// };
// console.log(person);
// //json -> js object with notation
// //json stringify

// const personJSON = JSON.stringify(person);//will convert to string
// console.log(personJSON, typeof personJSON);

// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);// will convert to object

const loadData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
};
const loadPost = () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      fetch(url)
            .then((res) => res.json())
            .then((json) => {
                  displayPost(json);
            })
};
const displayPost = (posts) => {
      const postContainer = document.getElementById('post-container');
      postContainer.innerHTML = '';

      posts.forEach((post) => {
            const postCard = document.createElement('div');
            postCard.innerHTML = `
            <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;

        postContainer.append(postCard)
      });
};

const unloadPost = () => {
      const postContainer = document.getElementById('post-container');
      postContainer.innerText = '';
}
loadPost();
