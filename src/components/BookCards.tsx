import { Book } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCards = ({ book }: { book: Book }) => {
    return (
        <article key={book.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={book.volumeInfo.publishedDate} className="text-gray-500">
                    {book.volumeInfo.publishedDate}
                </time>
                <Link
                    href={`/book/${book.id}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                    {book.volumeInfo.categories}
                </Link>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/book/${book.id}`}>
                        <span className="absolute inset-0" />
                        {book.volumeInfo.title}
                    </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{book.volumeInfo.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="" />
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <Link href={`/book/${book.id}`}>
                            <span className="absolute inset-0" />
                            {book.volumeInfo.authors}
                        </Link>
                    </p>
                    {/* <p className="text-gray-600">Doctor</p> */}
                </div>
            </div>
        </article>

    )
}

export default BookCards
