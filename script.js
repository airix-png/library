function openLibrary(evt, tabName) {
    // Declare all variables
    let i, tabContent, tabLinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
    
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
  }



document.getElementById('defaultOpen').click();









let myLibrary = [{titles: "Crime & Punishment", author: "Fyodor Dostoyevsky", pages: "671", read: true}
, {titles: "The Design of Everyday Things", author: "Don Norman", pages: "368", read: false}];
let tableBody = document.querySelector('tbody');


function Book(titles, author, pages, read) {
    this.titles = titles;
    this.author = author; 
    this.pages = pages; 
    this.read = read;
}

function addBookToLibrary (titles, author, pages, read) {
    myLibrary.push(new Book(titles, author, pages, read))
}


function appendCheckbox(tableCell, checked) {
    let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = checked;
        tableCell.appendChild(checkbox);
    }

    function deleteBook(event) {
        let bookIndex = event.target.getAttribute('data');
        if (bookIndex == null) {
            bookIndex = event.target.parentNode.getAttribute('data');
            if (bookIndex == null) {
                bookIndex = event.target.parentNode.parentNode.getAttribute('data');
            }
        }
        library.splice(bookIndex, 1);
    
        render();
    }

    function addDeleteBtn(bookIndex) {
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = 'DEL';
        deleteBtn.setAttribute('data', bookIndex);
        deleteBtn.addEventListener('click', deleteBook);
        return deleteBtn;
    }
    
    function deleteBook(event) {
        let bookIndex = event.target.getAttribute('data');
        if (bookIndex == null) {
            bookIndex = event.target.parentNode.getAttribute('data');
            if (bookIndex == null) {
                bookIndex = event.target.parentNode.parentNode.getAttribute('data');
            }
        }
        myLibrary.splice(bookIndex, 1);
    
        render();
    }

function render () {
    tableBody.innerHTML = "";
    for (let index in myLibrary) {
        let tableRow = document.createElement('tr');
        for (let key in myLibrary[index]) {
            let tableCell = document.createElement('td');
            if (key == "read") {
                appendCheckbox(tableCell, myLibrary[index][key]);
            } else {
                tableCell.innerText = myLibrary[index][key];
            }
            tableRow.appendChild(tableCell);
        }
        let deleteBtn = addDeleteBtn(index);
        tableRow.appendChild(deleteBtn);
        tableBody.appendChild(tableRow);
    }
    }

    let bTitle = document.getElementById("title")
    let bAuthor = document.getElementById("author")
    let bPages = document.getElementById("pages")




function addBook() {
    let titles = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    if (titles == '' || author == '' || pages == '' || isNaN(pages)) {
        if (titles == ''){
            bTitle.style.backgroundColor = "#cc6666"
        }
        if (author == ''){
            bAuthor.style.backgroundColor = "#cc6666"
        }
        if (pages == '' || isNaN(pages)){
            bPages.style.backgroundColor = "#cc6666"
            document.getElementById("pages").value = " Enter #'s only"
        }
        return};

    
    addBookToLibrary (titles, author, pages, read);
    render()
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = "";
    bTitle.style.backgroundColor = "";
    bAuthor.style.backgroundColor = "";
    bPages.style.backgroundColor = "";
}


render()