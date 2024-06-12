import { Author } from "next/dist/lib/metadata/types/metadata-types"

export type Book={
    id: string,
    volumeInfo:VolumeInfo,
    publisher:string,
}
export type VolumeInfo={
    title:string,
    description:string,
    subtitle:string,
    authors:string,
    imageLinks:imageLinks,
    previewLink:string,
    categories:[],
    publishedDate:string
}
export type imageLinks={
    smallThumbnail:string,
    thumbnail:string
}