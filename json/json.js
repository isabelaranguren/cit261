let books = [];
const addBook = (event)=>{
    event.preventDefault();  //to stop the form submitting
    let book = {
        author: document.getElementById('author').value,
        title: document.getElementById('title').value,
        year: document.getElementById('yr').value
    }

    books.push(book);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    console.warn('added' , {books} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(books, '\t', 2);
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBook);

});

