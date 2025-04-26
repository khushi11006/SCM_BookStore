const books = [
  {
    "id": "1",
    "name": "The Girl who know to much ",
    "author": "Vikrant Khanna",
    "price": 1250.00,
    "summary": "The girl who knew too much is the story of Akshara, a 13 year old girl, who is devastated with her mother's death and leads a life of solitude ",
    "image_url": "https://m.media-amazon.com/images/I/71fHcsKPnXL._SY522_.jpg"
  },
  {
    "id": "2",
    "name": "The Story of tata",
    "author": "Peter Casey",
    "price": 1560.00,
    "summary": "In 1868, Jamsetji Tata, a visionary of his time, lit the flame that went on to become Tata and its group of companies.",
    "image_url": "https://m.media-amazon.com/images/I/71nzPNcotWL._SY522_.jpg"
  },
  {
    "id": "3",
    "name": "I May Be Wrong",
    "author": "Björn Natthiko Lindeblad",
    "price": 1800.00,
    "summary": "I’ve often wondered what it’s like to get 'the call’ - the desire to drop everything and take up a spiritual vocation.",
    "image_url": "https://m.media-amazon.com/images/I/71ATQkTtUrL._SY522_.jpg"
  },
  {
    "id": "4",
    "name": "It Ends With Us ",
    "author": "Colleen Hoover",
    "price": 1499.00,
    "summary": "It Ends with Us is a book that follows a girl named Lily who has just moved and is ready to start her life after college",
    "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-K1dxwe7fTOnowuIpcN-FkuryIsPXeAwmTws7WeZtqID8jcCK7LqNR65AhfBMgtSwZL1hWwrpsKG9tMuX8ETMZ7KynT4sODp_8QunmUw&usqp=CAE"
  },
  {
    "id": "5",
    "name": "Twisted Lies",
    "author": "Ana Huang",
    "price": 850.00,
    "summary": "A dark high school RH bully romance that contains triggers for sensitive readers.",
    "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSBMvf8URiv0b38L-63pQPMwzi7WX74CBVcSTjpy2iGIh5pX6AQSieoNQnSX8iThLGFDy7px1B9Ysaiej7WwvfUL0ksRna0TFa-kpwEADD7B48JB82xACo&usqp=CAE"
  },
  {
    "id": "6",
    "name": "All that we hide",
    "author": "Karen Busemi",
    "price": 299.00,
    "summary": "a female illusionist tasked with devising techniques for the Allies to evade Nazi capture in World War II.",
    "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVotIAZ5ShNVPu2ZGagJErKqKlGP8hwofpUbhLgj8NguUQbTefV2OpCXEAeMKyPNlscJtlbuy-Gge4ipdZWb9ZguZfspEPTSHv_b2kHMSM&usqp=CAE"
  },
  {
    "id": "7",
    "name": "Only love is real",
    "author": "Brian L.",
    "price": 349.00,
    "summary": "He portrays two strangers, Elizabeth and Pedro, who are unaware that they have been lovers throughout the long centuries -- until fate brings them together again.  ",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8UbE8oZaczdO2U2KpT7JfLGGnyQt15daLE5DU47hK8upxyTQLQzD0NDqv4GWOF09S_BdnlWJWSgs6ObgD_pmNHaNF1a29ErTSqwxBeLnMLklgLk9GiSvLsA&usqp=CAE"
  },
  {
    "id": "8",
    "name": "A deadly education",
    "author": " Naomi Novik's",
    "price": 399.00,
    "summary": "A Deadly Education is set at Scholomance, a school for the magically gifted where failure means certain death (for real)—until one girl, El, begins to unlock its many secrets.",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTo_7lw706lPuG3J_OL0aihtskEpl2nDHG2W6JAA3FyoBuoWZbpdxmBB4GxHAEUKvx2w-oovZOBqrQRjh_G8yT_nccKhDvF8X9do6762gxdGcYBlSTaCd0Ig&usqp=CAE"
  },
  {
    "id": "9",
    "name": "Your Fault",
    "author": "Mercedes Ron",
    "price": 499.0,
    "summary":"This suspenseful YA series untangles the threads of love, trauma, and secrets, perfect for fans of Ugly Love and After. ",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUx_qYVH1tk31_tjaYZkSoSj2DVfBoz2BjhRewr06GurXd8ctUIll5Ph7j_XZFbAMUHhvnBW_Wa2D0DNe3V9KGIcddGKvwFBqmCWLbZrI&usqp=CAE"
  },
  {
    "id": "10",
    "name": "Love or Obsession",
    "author": "Hiah Mehta",
    "price": 599.00,
    "summary": "Damon Stanton, an angel in a devils body, young, flirty, bachelor, shining in his prime time of his company, yet lonely having no one to share his love and thoughts with.",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCA3leNhDs-N12cI-wdPu-r6WlF3kXIEXhl3UyDg57ftl7rpEJr6MrSk2SqNbtKpaGngJxpVKIxfINz3iMhczszGTdd0LcB1vln6Gqoyw&usqp=CAE"
  },
  {
    "id": "11",
    "name": "All The Lies",
    "author": "Rina Kent",
    "price": 1599.00,
    "summary": "This story follows Reina who is such an interesting character. She is suffering from amnesia after a horrible attack and is trying to figure out what in her life feels right and what doesn't.",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMGafaWEB-dSd9L7-Kcf6mg0g_Qgo80zl0N2VI6Rcs3-0TrMKR88Ri3RCOVA3bGO5BMIbD-sUG-ixpDTl93kTUmykwN1hWkSmbQ7OeksU&usqp=CAE"
  },
  {
    "id": "12",
    "name": "Anatomy",
    "author": "Henry Gray",
    "price": 799.00,
    "summary": "Anatomy tells the story of a headstrong young girl set on becoming a surgeon, even if it means practicing on the bodies of the recently buried.",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS5ROp_N264nZhkqYKI4EJVYI-ydU4Mi70X1Yn9zJR6sdTA9EgiMTejZkgP1TBMBqUtED-qCvPYZbGQgXXt8LXzDkiUEA3PE3dNybpDxl-Y&usqp=CAE"
  },
  {
    "id": "13",
    "name": "How To End A Love Story",
    "author": "Yulin Kuang",
    "price": 799.00,
    "summary": "13 years ago, helen's sister committed suicide by throwing herself in front of grant's car. now, the two have to work together to bring helen's popular book series to life",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7E1DCMGQEVsevmiTPoIhoX_RCTyoSrSxRxdyv1LmQetTfEtOSwgvosoDNxd05J5kRoyRrxEGPDotMTs_MK1lrYnHVYzjntjk-LdbLIdGJbjchzS93Ytbq&usqp=CAE"
  },
  {
    "id": "14",
    "name": "One Day In December",
    "author": "Josie Silver",
    "price": 799.00,
    "summary": "One day, Laurie spots a man from inside her city bus. Their eyes meet, and they have an instant connection—love at first sight. ",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzO-CIx-IoFWV_iONaSKZpaohrIDMwppIvbJpyLgaX-aYO0aB8rPA7drHhsUMpo-mCOnWId40tV3VA1xt1TFZaOb6jzrNjNPz9v1BEgfKa&usqp=CAE"
  },
  {
    "id": "15",
    "name": "More Than Words",
    "author": "Jill Santopolo",
    "price": 799.00,
    "summary": "More Than Words is a heartbreaking and romantic novel about grief, loss, love, and self-discovery, and how we choose which life we are meant to live.",
    "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-6fVTm9lunLbMOn_PFyUB2QwTM8gUGGU2UwTf85aX65vngG0kfXtsd3zbTk-LUgv6iLMoXxSHcR6UxjetAEBzvzf7aYsdTpvW75Efz34XkyuvXCbrqbl4_g&usqp=CAE"
  },
  {
    "id": "16",
    "name": "Do It Today",
    "author": "Darius Foroux",
    "price": 799.00,
    "summary": "n Do It Today, you'll learn: Why we procrastinate and how we can overcome it.",
    "image_url": "https://m.media-amazon.com/images/I/61jCkOVf1oL._SY522_.jpg"
  },
  {
    "id": "17",
    "name": "Forgot What You Know",
    "author": "Cristina Dodd",
    "price": 799.00,
    "summary": "Only flower-breeder Zoey Phoenix stands in their way… Zoey remembers nothing about her early childhood; her mother's desire to leave those years behind never worried her… until she's almost killed in a hit and run and, days later, her mother disappears. ",
    "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAPQC846aShlRbFCCh_eznGMQPbpV2l_llbrE6G8ke7Iix25IKNijpbT8gLu8ziU3X7EJiw-SqQHquyrOHDH6jIwU_8p6fmwJc_Ey16v7wb9XBOHhCy0RS&usqp=CAE"
  },
  {
    "id": "18",
    "name": "Sherlock Homes",
    "author": "Arthur Conan Doyle ",
    "price": 799.00,
    "summary": "The Adventures of Sherlock Holmes is a collection of 12 short stories by Arthur Conan Doyle about the detective Sherlock Holmes and his friend Dr. Watson:",
    "image_url": "https://m.media-amazon.com/images/I/71bhR8QDlPL._SY522_.jpg"
  },
  {
    "id": "19",
    "name": "A Murderous Plot",
    "author": "Sue Mixin",
    "price": 799.00,
    "summary": "When an amnesiac man covered in blood mysteriously appears in the woods during her morning run, retired amateur sleuth, Jen, promises to stay away from the case. ",
    "image_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPUuZWrfJ7kfC5srgDuff3gYS2yVodKKCLrbyZRhUkXaiQoFc56SyWwZIQovOV-AF1AL66muOkmMR6HMc_SwpXB7K6Vi1HNr7Ylm0uq2I&usqp=CAE"
  },
  {
    "id": "20",
    "name": "Five Survive",
    "author": "Jackson, Holly",
    "price": 799.00,
    "summary": "Red Kenny sets off on a road trip for spring break with five friends. But someone in her group has a secret.",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTajNvaaIpXrxvmThurPueImB1fncgwXA4pMVu9Cyu-LCVDZIMMm_d-1jzsLPi8WqxTU7DfuTvlF82c8VQemqX1tzrlrIdz4wAFaahSjLA&usqp=CAE"
  },
  {
    "id": "21",
    "name": "One By One",
    "author": "Ruth Ware's",
    "price": 799.00,
    "summary": "One by One by Freida McFadden is the nineth book I've read by her. While I enjoyed One by One, it wasn't my favorite read by Freida. The twist at the end wasn't as spectacular as some of the others have been. ",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTUfYKf4dxjjSHGYfHQ4klpdo5gFMjRqKDv2yUHqs7okABQX2q6GJzn6hJCW_llWvrCOfgrwkoMwVKp3-CYem31h13lT15j_Vi4ECsC9qkzP-r2r4Yguug&usqp=CAE"
  }
];


const booksContainer = document.getElementById("books-container");
const booksAddedToCart = document.getElementById("books-added-to-cart");

function getBooksFromLocalStorage() {
  const booksFromStorage = window.localStorage.getItem("books");
  return JSON.parse(booksFromStorage) || [];
}

function setBookToLocalStorage(books) {
  window.localStorage.setItem("books", JSON.stringify(books));
}

function getTotalBooksAddedToCart () {
  return getBooksFromLocalStorage().length;
}

function cartButtonFunction () {
  const totalBooksAddedToCart =  getTotalBooksAddedToCart();
  if(totalBooksAddedToCart > 0)   {
    booksAddedToCart.classList.add("cart-length");
    booksAddedToCart.classList.remove("cart-length-hidden");
    booksAddedToCart.textContent = totalBooksAddedToCart
  } else {
    booksAddedToCart.classList.add("cart-length-hidden")
    booksAddedToCart.classList.remove("cart-length")
  }
}

for(let i = 0 ; i < books.length ; i++) {
  const booksFromStorage =  getBooksFromLocalStorage();
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

  const isBookAddedToCart = booksFromStorage.find((book) => book.id === books[i].id)
  
  const addToCart = document.createElement("button");
  addToCart.textContent = "Add to cart";
  addToCart.classList.add("add-to-cart-button");

  const removeFromCart = document.createElement("button");
  removeFromCart.textContent = "Remove from cart";
  removeFromCart.classList.add("remove-from-cart-button");

  if(isBookAddedToCart) {
    bookDiv.appendChild(removeFromCart);
  } else {
    bookDiv.appendChild(addToCart);
  }

  addToCart.addEventListener("click", function() {
    booksFromStorage.push(books[i]);
    setBookToLocalStorage(booksFromStorage);
    cartButtonFunction();
    window.location.reload()
  })

  removeFromCart.addEventListener("click", function() {
    const updatedBooks = booksFromStorage.filter((book) => book.id !== books[i].id);
    setBookToLocalStorage(updatedBooks);
    cartButtonFunction();
    window.location.reload()
  })

  booksContainer.appendChild(bookDiv);
}

cartButtonFunction();