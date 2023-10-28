import React from 'react';

export default function Button(){

    const renderUserTasks=(id) => {
        let posts = document.getElementById(`posts`);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            posts.innerHTML = ``;            
            data.forEach(item =>{
                let template = document.createElement('user-post');
                template.innerHTML = `
                    <span slot="postID">${item.id}</span>
                    <span slot="title">${item.title}</span>
                    <span slot="attributes">${item.body}</span>
                `;
                posts.appendChild(template)
            })
        });
        return posts;
    }

    const handleClick=() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            let users = document.getElementById(`users`);
            users.innerHTML = '';
            data.forEach(item =>{
                let template = document.createElement('user-card');
                template.innerHTML = `
                    <span slot="user-name">${item.name}</span>
                    <span slot="user-userName">${item.username}</span>
                    <span slot="user-phone">${item.phone}</span>
                    <span slot="user-email">${item.email}</span>
                `;
                users.appendChild(template)

                template.btnClick( () => {
                    renderUserTasks(parseInt(item.id))
                })
            });
        })
    }
    
    return(
        <div className='container'>
            <button className="button" onClick={handleClick}>Click me!</button>
            <div id='users'></div>
            <div id='posts'></div>
        </div>
    )
}

// export default Button; // Don’t forget to use export default!