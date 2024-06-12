

import { env } from "process"
import Banner from "./(home)/components/Banner";
import BookList from "@/components/BookList";
import { Suspense } from "react";

export default async function Home() {
  

  return (
    <>
      <Banner />
      <Suspense fallback={'Loading....'}>
        <BookList />
      </Suspense>
    </>
  )
}