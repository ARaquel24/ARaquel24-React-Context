import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{
					name: "FIRST",
					phone: "1",
					
				}
			],
			editId:[''],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			pasarId: (useId) => {
				console.log(useId)
				const store = getStore();
				setStore({ editId: useId });
			},
			loadSomeData: () => {
				console.log('se cargo la pagina')
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				fetch("https://playground.4geeks.com/contact/agendas/Agenda/contacts", requestOptions)
				.then((response) => response.json())
				.then((result) =>setStore({contact: result.contacts}))
			},
			
			deleteContact: (idToDele) => {
				console.log('delete desde flux'+ idToDele)
				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/Agenda/contacts/"+idToDele, requestOptions)
					.then((response) => response.text())
					.then((result) => console.log(result))
				const store = getStore();
				setStore ({contact: store.contact.filter((contacto,index) => contacto.id !== idToDele)})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
