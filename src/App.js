import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Users from './components/Users';
import Posts from './components/Posts';
// import { publish } from "./components/event"

customElements.define(
  "user-card",
  class extends HTMLElement {
      constructor() {
          super();
          const template = document.getElementById(
          "user-template",
          ).content;
          const shadowRoot = this.attachShadow({ mode: "open" });
          shadowRoot.appendChild(template.cloneNode(true));
      }
      
      btnClick(callback) {
          this.shadowRoot.querySelector('.btn-toPosts').addEventListener('click', callback);
      }
  },
)

customElements.define(
  "user-post",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "post-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  },
);


function App() {

  // const RenderUsers = new Event("RenderUsers", {bubbles: true})
  
  const [data, setData] = useState('');

  // const showList = () => {
  //   publish('showList');
  // }

  const getJSON = (childdata) => {
    let users = []
    childdata.forEach(item => {
      let template = document.createElement('user-card');
      template.innerHTML = `
          <span slot="user-name">${item.name}</span>
          <span slot="user-userName">${item.username}</span>
          <span slot="user-phone">${item.phone}</span>
          <span slot="user-email">${item.email}</span>
      `;    
      template.btnClick( () => {
          getUserPosts(parseInt(item.id))
      })
      users.push(template)
    });
    setData(users); // в 2023 році не мати самий базовий івент емітер вбудований у фреймворк це просто шок, дані передати у дитячий компонент легко, а як його зарендерити
                    // не через вставку по айдішнику у батьківському компаненту я абсолютно не розумію 
                    // я спробував і onchange і той жах що ви можете побачити у Users.js і вбудовані кастомні івенти жс, нічого не працює по людськи
                    // якщо ви знаете як це зробити по івентам щоб воно саме працювало а не працювало в теорії то напишіть мені
                    // Єдине що я виніс з цієї домашки це те що вуе в 100 разів краще реакта
    renderUsers(users)
  }

  function renderUsers(usersArr){
    let usersDiv = document.getElementById(`users`);
    usersDiv.innerHTML = "";
    usersArr.forEach(item => {
      usersDiv.appendChild(item)
    });
  }

  const [posts, setPosts] = useState('');

  async function getUserPosts(id) { // воно тут бо інакше видає що setPosts undefined
    let postsArr = []
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(item =>{
        let template = document.createElement('user-post');
        template.innerHTML = `
          <span slot="postID">${item.id}</span>
          <span slot="title">${item.title}</span>
          <span slot="attributes">${item.body}</span>
        `;
        postsArr.push(template)
      })
    });
    setPosts(postsArr)
    renderUserPosts(postsArr)
  }

  function renderUserPosts(tasksArr) {
    let posts = document.getElementById(`posts`);
    posts.innerHTML = "";
    console.log(tasksArr[0])
    tasksArr.forEach(item => {
      posts.appendChild(item)
    });
  }
  
  return (
    <div className="App">
      <div className='container'>
        <Button getJSON={getJSON}/>
        <Users usersObject={data}></Users>
        <Posts userPosts={posts}></Posts>
      </div>
      
    </div>
  );
}

export default App;
