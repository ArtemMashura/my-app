import React from 'react';
// import { subscribe} from "../components/event";

export default function Users({usersObject}){
    
    // subscribe("showList", () => render());
    // const awaitData = new Promise(resolve => {
    //     while (usersObject === null){
    //         console.log(1)
    //     }
    //     Promise.resolve(usersObject)
    // })

    // function delay(time){
    //     return new Promise(resolve => setTimeout(resolve, time));
    // }

    function render(){ // якщо в цьому ж класі створити кнопку, підв'язати на неї цю функцію та натиснути її після витягання юзерів з апі то все працює норм

        let users = document.getElementById(`users`);
        // console.log(usersObject)
        // while (true){
        //     if (usersObject !== ""){
        //         usersObject.forEach(item => {
        //             users.appendChild(item)
        //         });
        //         break
        //     }
        //     else {
        //         console.log(1)
        //         await new Promise(r => setTimeout(r, 2000));
        //     }
        // }
        // awaitData.then((data) => {
            
        // })
        users.innerHTML = "";
        usersObject.forEach(item => {
            users.appendChild(item)
        });
        
    }
    
    // document.addEventListener("RenderUsers", e =>{
    //     console.log(1)
    //     render();
    // })

    return(
        <div>
            <div id='users'></div>
        </div>
    )
    

}
