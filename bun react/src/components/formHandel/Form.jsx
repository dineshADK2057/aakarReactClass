import React, { useState } from 'react'

export default function Form() {
    // old way
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");

    // const arr1 = ["dinesh", "sagar", "sushant"];
    // const arr2 = ["namuna", "apana"];

    // const main = [...arr1, ...arr2];
    // console.log(main);

    // const homeTasks = datas.filter((data)=> data.category=="home")

    // new way
    const [data, setData] = useState({});
    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        // alert(`your username is ${userName} and email is ${email}`);
        // const data = {
        //     name: userName,
        //     email: email,
        // }
        console.log(data);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <br />
            <br />
            <input type="text" name="username" id="username" placeholder='Enter your username' onChange={ handleChange
                // (e) => {
                // setUserName(e.target.value)
                // }
            } />
            <br />
            <br />
            <input type="email" name="email" id="email" placeholder='Enter your email' onChange={ handleChange
                // (e) => {
                // setEmail(e.target.value)
                // }
                }/>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
        </form>
    )
}
