const booksContainer = document.getElementById("books-container");
const clearCartContainer = document.getElementById("clear-cart-container");

function getBooksFromLocalStorage() {
  const booksFromStorage = window.localStorage.getItem("books");
  return JSON.parse(booksFromStorage) || [];
}

function showCartContent() {
  const books =  getBooksFromLocalStorage();
  if(books.length) {

    clearCartContainer.classList.add("clear-cart-container");
    clearCartContainer.classList.remove("clear-cart-container-hidden");

    let totalPrice = 0;

    for(let i = 0 ; i < books.length ; i++) {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book-card")
      
      const bookImage = document.createElement("img");
      bookImage.src = books[i].image_url;
      bookImage.classList.add("book-img");
      bookDiv.appendChild(bookImage);
    
      const bookInfo =  document.createElement("div");
      bookInfo.classList.add("book-content");
    
      const bookHeader = document.createElement("div");
      bookHeader.classList.add("book-header");
    
      const bookTitle = document.createElement("p");
      bookTitle.textContent = books[i].name;
      bookTitle.classList.add("book-title");
      bookInfo.appendChild(bookTitle);
    
      const bookPrice = document.createElement("p");
      bookPrice.textContent = "Rs " + books[i].price 
      bookPrice.classList.add("book-price");
      bookInfo.appendChild(bookPrice);
    
      bookHeader.appendChild(bookTitle);
      bookHeader.appendChild(bookPrice);
      bookInfo.appendChild(bookHeader);
    
      const bookAuthor = document.createElement("p");
      bookAuthor.textContent = books[i].author;
      bookAuthor.classList.add("book-author");
      bookInfo.appendChild(bookAuthor);
      
      const bookSummary = document.createElement("p");
      bookSummary.textContent = books[i].summary;
      bookSummary.classList.add("book-summary");
      bookInfo.appendChild(bookSummary);
    
      bookDiv.appendChild(bookInfo);
      booksContainer.appendChild(bookDiv);

      totalPrice = totalPrice + books[i].price
    }
  
    const priceButton =  document.createElement("button");
    priceButton.textContent = "Rs " + totalPrice;;
    priceButton.classList.add("price-button");

    const clearCartButton =  document.createElement("button");
    clearCartButton.textContent = "Clear cart";
    clearCartButton.classList.add("clear-cart-button");

    clearCartButton.addEventListener("click", function() {
      window.localStorage.removeItem("books");
      window.location.reload();
    })

    clearCartContainer.appendChild(priceButton)
    clearCartContainer.appendChild(clearCartButton)

  } else {
    clearCartContainer.classList.add("clear-cart-container-hidden")
    clearCartContainer.classList.remove("clear-cart-container");

    booksContainer.classList.remove("grid-container");
    booksContainer.classList.add("empty-container");

    const cartEmptyDiv = document.createElement("div");
    cartEmptyDiv.classList.add("cart-empty-container");

    const cartEmptyContent = document.createElement("p");
    const shopNowButton = document.createElement("button");

    shopNowButton.addEventListener("click", () => {
      window.location.href = "/store/store.html";
    })

    cartEmptyContent.textContent = "Oops your cart is empty!";
    shopNowButton.textContent = "Shop now";

    cartEmptyContent.classList.add("cart-empty-text");
    shopNowButton.classList.add("shop-now-btn");

    cartEmptyDiv.appendChild(cartEmptyContent);
    cartEmptyDiv.appendChild(shopNowButton);
    booksContainer.appendChild(cartEmptyDiv)
  }


}


showCartContent()