import React from 'react';
// import { subscribe, unsubscribe } from "./events";

export default function Posts({userPosts}){

    // useEffect(() => {
    //     subscribe("showList", () => setIsOpen(true));
    // })

    
    function render(){ // аналогічна ситуація як і в юзері
        let posts = document.getElementById(`posts`);
        posts.innerHTML = ""
        userPosts.forEach(item => {
            posts.appendChild(item)
        });
    }
    
    return(
        <div>
            <div id='posts'></div>
        </div>
        
    )
    
    
}
