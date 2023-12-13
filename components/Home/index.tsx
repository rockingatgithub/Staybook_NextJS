import { collection, addDoc } from "firebase/firestore";
import { Firestore } from "firebase/firestore/lite";
import React, { useState } from "react";
import { db } from "../Firebase";




export default function HomeComponent() {

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
                <input id="email" type="text" name="email" value={email} onChange={emailHandler} />
            </div>

            <div>
                <label htmlFor="password"> Password:- </label>
                <input id="password" type="text" name="password" value={password} onChange={passwordHandler} />
            </div>

            <button type="submit" > Submit </button>


        </form>

        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><a href="#section1">Section 1</a></li>
                            <li><a href="#section2">Section 2</a></li>
                            <li><a href="#section3">Section 3</a></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Section 4 <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#section41">Section 4-1</a></li>
                                    <li><a href="#section42">Section 4-2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div id="section1" className="container-fluid">


            <h2>Deluxe Room</h2>
            <form>
                <div className="row">
                    <div className="col-25">
                        <div className="photo">
                            <img src="Windows_10_Default_Profile_Picture.svg.png" width="40%" />
                        </div>
                    </div>
                    <div className="col-75">
                        <div className="data">
                            <input type="text" placeholder="Image logo url" />
                            <input type="text" placeholder="Image logo url" />
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="country">Country</label>
                    </div>
                    <div className="col-75">
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>

        </div>

        <hr />


    </div>




}