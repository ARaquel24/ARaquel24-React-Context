import React, { useState } from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {

	
	const [name, setName] = useState("");
	const [email, setEmail] = useState('');
  	const [phone, setPhone] = useState('');
  	const [address, setAddress] = useState('');

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
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
		};

		fetch("https://playground.4geeks.com/contact/agendas/Agenda/contacts", requestOptions)
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
