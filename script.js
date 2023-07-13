let myLibrary = ["The Hobbit", "Diary of a Wimpy Kid", "Harry Potter"];

function Book() {
  // the constructor...
}

function addBookToLibrary(library) {
  for (const book of library){
    console.log(book);
  }
}

addBookToLibrary(myLibrary);