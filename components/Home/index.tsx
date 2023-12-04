import { collection, addDoc } from "firebase/firestore"; 
import { Firestore } from "firebase/firestore/lite";
import React, { useState } from "react";
import { db } from "../Firebase";




export default function HomeComponent () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const addEntryToDatabase = async (userObject: {}) => {

        try {
            console.log("the user object", userObject)
            console.log("the db", db)

            const docRef = await addDoc(collection(db, "users"), userObject);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }

    const formSubmitHandler = (event: React.FormEvent) => {

        event.preventDefault()

        const userObject = {
            name,
            email,
            password
        }

        addEntryToDatabase(userObject)

    }

    const nameHandler = (event: any) => {

        setName(event.target.value)

    }

    const emailHandler = (event: any) => {

        setEmail(event.target.value)

    }

    const passwordHandler = (event: any) => {

        setPassword(event.target.value)

    }

    return <div>
        <h2> Add data to firestore </h2>

        <form onSubmit={formSubmitHandler} >

            <div>
                <label htmlFor="name"> Name:- </label>
                <input id="name" type="text" name="name" value={name} onChange={nameHandler} /> 
            </div>

            <div>
                <label htmlFor="email"> Email:- </label>
                <input id="email" type="text" name="email" value={email} onChange={emailHandler}  /> 
            </div>

            <div>
                <label htmlFor="password"> Password:- </label>
                <input id="password" type="text" name="password" value={password} onChange={passwordHandler}  /> 
            </div>

            <button type="submit" > Submit </button>
            

        </form>

    </div>
}