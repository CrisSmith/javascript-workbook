let arrayOfPosts;
let arrayOfComments;
let arrayOfUsers;
let arrayPostFive;

window.onload = function() {
  getPosts()
  getPost5()
  getComments()
  getUsers()

}

let getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

let getPost5 = () => {
    fetch('http://jsonplaceholder.typicode.com/posts/5')
      .then(res => res.json())
      .then(posts => arrayPostFive = posts)
  }
  

let getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(comment => arrayOfComments = comment)
  }

let getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => arrayOfUsers = user)
  }

let consolePosts = () => {
    console.log(arrayOfPosts)
}

let displayPost = () => {
  let allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    let li = document.createElement('li')
    let text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

let displayPostFive = () => {
    let post5 = document.getElementById('post5')
    arrayPostFive.map((post, index) => {
      let li = document.createElement('li')
      let text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
      li.appendChild(text)
      post5.append(li)
    })
  }


let displayComments =() => {
    let allComments = document.getElementById('all-comments')
    arrayOfComments.map((comment, index) => {
        let li = document.createElement('li')
        let text= document.createTextNode(`#${index}, Name: ${comment.name}; Comment: ${comment.body}`)
        li.appendChild(text)
        allComments.append(li)
    })  
}

let displayUsers =() => {
    let allUsers = document.getElementById('all-users')
    arrayOfUsers.map((user, index) => {
        let li = document.createElement('li')
        let text= document.createTextNode(`#${index}, Name: ${user.name}; Email: ${user.email}`)
        li.appendChild(text)
        allUsers.append(li)
    })  
}