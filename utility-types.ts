// ! utility types exist to help manipulate existing types.

type Book = {
    title: string,
    author: string,
    genres: string[],
    eBook: boolean,
    readingAge?: number
}


// ! the partial type has been added to allow using the book type without all the properties.
const book1: Partial<Book>= {
    title: "Atleus Shrugged",
    author: "Ayan Rand"
}

// ! The required utility type makes sure the object has all the properties of the base type.
const book2: Required<Book> = {
    title: "1984",
    author: "George Orwell",
    genres: ["sci-fi", "dystopian future"],
    eBook: false,
    readingAge: 18
}