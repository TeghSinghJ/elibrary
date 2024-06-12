'use client'

import { env } from "process"

export default async function Home() {
    try{
        const response = await fetch(`${process.env.BACKEND_URL}`)
        if(!response.ok){
            throw new Error("An error occured whilefetching the books!");
        }
        const books=await response.json();
        console.log(books);
    }
    catch{

    }
    return(
        <>
        </>
    )
}