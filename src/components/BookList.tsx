import React from 'react'
import { Book } from '@/app/types'
import BookCards from './BookCards'

async function BookList() {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting`)
    if (!response.ok) {
        throw new Error("An error occured whilefetching the books!");
    }
    const data = await response.json();
    const books = data.items;
    console.log(books);
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the books</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {books.map((book: Book) => (
                        <BookCards key={book.id} book={book} />
                    ))
                    }
                </div>
            </div>
        </div>

    )
}

export default BookList
