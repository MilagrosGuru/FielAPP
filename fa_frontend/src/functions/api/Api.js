import React from 'react';

export const create = (url, datos, accion) =>{
    return new Promise((resolve, reject) => {
        console.log("Inicio de " + accion)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        };
        
        const baseURL = process.env.REACT_APP_BACKEND_URL + url;
        console.log("URL de la API: " + baseURL); 
        console.log("Request:");
        console.log(requestOptions);
        
        /*fetch('http://127.0.0.1:8000/user/create', requestOptions)*/
        fetch(baseURL, requestOptions)
            .then(response =>{ 
                if (!response.ok) {
                    if (response.status === 400) {
                        throw new Error('Error 400: Petición incorrecta');
                    } else if (response.status === 401) {
                        throw new Error('Error 401: No autorizado');
                    } else if (response.status === 500) {
                        throw new Error('Error 500: Error interno del servidor');
                    } else if(response.status === 201){
                        throw new Error('Error 201: Error al analizar la respuesta del servidor como JSON');
                    } else{
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                    }
                }
                return response.json();
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    })
}


export const update = (url, datos, accion) =>{
    return new Promise((resolve, reject) => {
        console.log("Inicio de " + accion)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        };
        //const baseURL = process.env.REACT_APP_BACKEND_URL+ `user/${UserId}`+'/';
        const baseURL = process.env.REACT_APP_BACKEND_URL+ url ;
        console.log("URL de la API: "+ baseURL); 
        console.log("request");
        console.log(requestOptions);
        fetch(baseURL, requestOptions)
            .then(response =>{ 
                if (!response.ok) {
                    if (response.status === 400) {
                        throw new Error('Error 400: Petición incorrecta');
                    } else if (response.status === 401) {
                        throw new Error('Error 401: No autorizado');
                    } else if (response.status === 500) {
                        throw new Error('Error 500: Error interno del servidor');
                    } else if(response.status === 201){
                        throw new Error('Error 201: Error al analizar la respuesta del servidor como JSON');
                    } else{
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                    }
                }
                return response.json();
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    })
}
