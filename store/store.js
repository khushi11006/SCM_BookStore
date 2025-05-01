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
    "name": "You have Change",
    "author": "Dr. Mark W.Baker",
    "price": 1800.00,
    "summary": "He gives us his scientific research and insight but then he tells us stories—gripping stories of people who truly made lasting change against all odds. ",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREUz1TaCnRPWMOG6yOkUvqGJWbrycurdW6JXu3rOSP_JbBW09hSMkDR7jEXyNoLm9nMZqiuOQAvrFZgUGttyqDSrxryJWwltf-9sly5I7kuW5Hw93OzweR"
  },
  {
    "id": "4",
    "name": "all that we never were",
    "author": "Alice Kellen",
    "price": 1499.00,
    "summary": "All That We Never Were is an intimate, moving tale that sweeps you away to small-town Australia and into the life of Leah Jones, a nineteen-year-old girl who, after suddenly losing her parents in a tragic car accident.",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOj645pl5odT-K2r-D4eC7d5Tp3Kt8DES2YnZopZelfa__b0gSPd_y3shMzDKnvRSXsqvJ_N4lL7s1kShH1nOwu-EkOCHLTw"
  },
  {
    "id": "5",
    "name": "When I am with you",
    "author": "Durjoy Datta",
    "price": 880.00,
    "summary": "Aishwarya, at twenty-eight years, would rather be a single mother than trust the 'normal' family structure. In her new start-up, she wants to revolutionize childcare for young woman professionals-this is her ultimate goal. Plus, she's in a hurry to do it all.",
    "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCYRp9OPKTZ-rbOc5H60MjqMGm-N8CpkzVHjZbVTuBKntboCwflMruH7OPK7NVBJxkqaGM96-AOrL9BDxpP1v1GkU7tgUW6YPce55QqbtSMZjU3vzVByoc"
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
    "price": 350.00,
    "summary": "He portrays two strangers, Elizabeth and Pedro, who are unaware that they have been lovers throughout the long centuries -- until fate brings them together again.  ",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8UbE8oZaczdO2U2KpT7JfLGGnyQt15daLE5DU47hK8upxyTQLQzD0NDqv4GWOF09S_BdnlWJWSgs6ObgD_pmNHaNF1a29ErTSqwxBeLnMLklgLk9GiSvLsA&usqp=CAE"
  },
  {
    "id": "8",
    "name": "I to hade a Love Story",
    "author": "Ravinder singh",
    "price": 400.00,
    "summary": "The story revolves around the protagonist, Ravin, who is working in IT and is looking for a life partner. He signs up on a matrimonial website and meets a girl named Khushi. They start chatting and soon fall deeply in love, despite never having met in person.",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUXHJIJMxx3_Sb7yp5eV3TVZw7mwPeNX0lpYuwW4KNbtngfYwov0S9QY6s_GN3QwGBWIBfZJG7Jg29CKisdyYOQgI0cncuwMlPHmsWtP_LjttJ4iAUYTpEpw"
  },
  {
    "id": "9",
    "name": "The Power of Subconsious Mind",
    "author": "Dr Joseph Murphy",
    "price": 599.0,
    "summary":"The Power of Your Subconscious Mind, by Joseph Murphy, is a self-help book that explores how the subconscious mind influences our lives and how we can harness its power for positive change ",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSC32YWYfpvEMGJeLYoE61-wJYzVQy6AAx0JVERYjoLf79D-bvg0lCH-3Aq4JOjwD7vsjmdn-KyhvuqiaOgWBlqsYWOCDN4Eg"
  },
  {
    "id": "10",
    "name": "To good to be True",
    "author": "Prajakta Koli",
    "price": 569.00,
    "summary": "Too Good to Be True by Prajakta Koli tells the story of Avani, a bookstore employee who lives in a world of romance novels.",
    "image_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtIiRqOzGeb7HYeO-JMnoSvBcxaaKP-bNucYzx95vC6k5SdBgn62wgbVqmhM57sPqk0tnaUXDtH-cLX8CIHiz1_v1qrkturYnIQm764oPeI7vr2bYjDrv4ZQ"
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
    "name": "Being a Journey",
    "author": "Pankaj Gupta",
    "price": 799.00,
    "summary": " Being: A Journey by Pankaj Gupta is a self-help book that guides readers on a path of self-discovery and personal growth. ",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQdDTHiWbIll1TXeL6DcN-ahVguz9T7z-86JvTFvDXMHLrc2IzVAWHmCOfQ_Qb1O3HdqZrS98nJhYMNf5gZKt0EWYdacLSr"
  },
  {
    "id": "20",
    "name": "Five Survive",
    "author": "Jackson, Holly",
    "price": 999.00,
    "summary": "Red Kenny sets off on a road trip for spring break with five friends. But someone in her group has a secret.",
    "image_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTajNvaaIpXrxvmThurPueImB1fncgwXA4pMVu9Cyu-LCVDZIMMm_d-1jzsLPi8WqxTU7DfuTvlF82c8VQemqX1tzrlrIdz4wAFaahSjLA&usqp=CAE"
  },
  {
    "id": "21",
    "name": "I like you like this",
    "author": "Heather Cumisky",
    "price": 899.00,
    "summary": "The online book I Like You Like This by Heather Cumiskey is a young adult novel about a teenage girl named Hannah who falls for a mysterious boy, Deacon, who is a drug dealer. ",
    "image_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRH83MANFAHwa3cNrXjV1BIV5QnhHypMtHSa4YEYnpesP4dNrn9rhQ_j_4RzclnhrTfJKtT8tJ5GsLYDf1UqMTQnrJyVXs3tje2Zld-m_5r6xZsVezpDLZarg"
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