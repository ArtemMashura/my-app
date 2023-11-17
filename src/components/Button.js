import React from 'react';

export default function Button({getJSON}){

    

    const handleClick=() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => getJSON(data));
        // .then(data => {
        //     let users = document.getElementById(`users`);
        //     users.innerHTML = '';
        //     data.forEach(item =>{
        //         let template = document.createElement('user-card');
        //         template.innerHTML = `
        //             <span slot="user-name">${item.name}</span>
        //             <span slot="user-userName">${item.username}</span>
        //             <span slot="user-phone">${item.phone}</span>
        //             <span slot="user-email">${item.email}</span>
        //         `;
        //         users.appendChild(template)

        //         template.btnClick( () => {
        //             renderUserTasks(parseInt(item.id))
        //         })
        //     });
        // })
    }
    
    return(
        <button className="button" onClick={handleClick}>Click me!</button>    
    )
    
    // const data = {}
    // return (
    //     <div>
    //         <label>123123123</label>
    //         <button primary onClick={() => childToParent(data)}>Click Child</button>
    //     </div>
    // )

}

