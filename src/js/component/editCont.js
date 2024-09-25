import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import getState from "../store/flux.js";

import rigoImage from "../../img/rigo-baby.jpg";
import { Link, useLocation} from "react-router-dom";
import "../../styles/home.css";

export const EditCont = () => {
	const { store, actions } = useContext(Context);
	
	const [name, setName] = useState("");
	const [email, setEmail] = useState('');
  	const [phone, setPhone] = useState('');
  	const [address, setAddress] = useState('');

	console.log( store.editId)

	const postForm = ()=>{
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
		"name": name,
		"phone": phone,
		"email": email,
		"address": address
		});

		const requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
		};

		fetch("https://playground.4geeks.com/contact/agendas/Agenda/contacts/"+store.editId, requestOptions)
		.then((response) => response.text())
		
		};
		

	return(
	<>

		<div className=" p-5" >
			<h1 className="d-flex justify-content-center">Add a new contact</h1>
			<div className="mb-3">
				<label htmlfor="name" className="form-label"> Full Name</label>
				<input type="text" className="form-control" id="name" placeholder=" Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
			</div>
			<div className="mb-3">
				<label htmlfor="email" className="form-label">Email</label>
				<input type="text" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlfor="phone" className="form-label">Phone</label>
				<input type="text" className="form-control" id="phone" placeholder="Enter phone" alue={phone} onChange={(e) => setPhone(e.target.value)}  />
			</div>
			<div className="mb-3">
				<label htmlfor="address" className="form-label">Address</label>
				<input type="text" className="form-control" id="address" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}/>
			</div>
				
			<button className="btn btn-primary" onClick={postForm}>Save</button>

			
			
		</div>
			<Link to="/">
					<button className="btn btn-link">or get back to contacts</button>
			</Link>
			
	</>
	);

};
