import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { EditCont } from "../component/editCont";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.contact.map((item, index) => {
					return (
						<>
						<li
							key={index}
							className="list-group-item d-flex justify-content-start"
							style={{ background: item.background }}>
							<div>
								<h3>{item.name}</h3>
								<p>{item.phone}</p>
								<p>{item.email}</p>
								<p>{item.address}</p>
								<p>{item.id}</p>
								
							</div>
						
							<div className=" h-2">
								<Link to={{
									pathname: '/edit', state: {item: item}
								}}>
									<button onClick={()=> actions.pasarId(item.id)}>Editar</button>
								</Link>
								<button onClick={()=> actions.deleteContact(item.id)}>Delete</button>

							</div>
							
							
						</li>
						
						</>
						
					);
				})}
			</ul>
			
		</div>
	);
};
