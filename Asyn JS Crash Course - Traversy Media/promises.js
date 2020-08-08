const posts = [
  { title: "Post 1", body: "post 1 body" },
  { title: "Post 2", body: "post 2 body" },
  { title: "Post 3", body: "post 3 body" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;

      if (!err) {
        resolve();
      } else {
        reject("Error Something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post 4", body: "post 4 body" })
  .then(getPosts)
  .catch((err) => console.log(err));
