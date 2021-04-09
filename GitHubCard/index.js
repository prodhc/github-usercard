/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';

const URL = "https://api.github.com/users/";

const cards = document.querySelector(".cards")

const followersArray = [ 
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(e => {

  axios.get(URL + e)
  .then(futureData => {
    console.log(futureData);

    const card = cardMaker(futureData.data);
    console.log(card);
    cards.appendChild(card);
  })
  .catch(error => {
    debugger;
  });

})



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:

  function cardMaker ({avatar_url, name, login, location, html_url, followers, following, bio }) {
    const card = document.createElement("div");
    const pictureV = document.createElement("img");
    const cardInfo = document.createElement("div");
    const nameV = document.createElement("h3");
    const username = document.createElement("p");
    const locationV = document.createElement("p");
    const profileV = document.createElement("p");
    const link = document.createElement("a");
    const followersV = document.createElement("p");
    const followingV = document.createElement("p");
    const bioV = document.createElement("p");

    card.classList.add("card");
    pictureV.src = avatar_url;
    cardInfo.classList.add("card-info");
    nameV.classList.add("card-info");
    nameV.textContent = name;
    username.classList.add("username")
    username.textContent = login;
    locationV.textContent = location;
    link.href = html_url;
    link.textContent = html_url;
    followersV.textContent = followers;
    followingV.textContent = following;
    bioV.textContent = bio;

    card.appendChild(pictureV);
    card.appendChild(cardInfo);
    cardInfo.appendChild(nameV)
    cardInfo.appendChild(username)
    cardInfo.appendChild(locationV)
    cardInfo.appendChild(profileV)
    profileV.appendChild(link)
    cardInfo.appendChild(followersV)
    cardInfo.appendChild(followingV)
    cardInfo.appendChild(bioV)


    return card
  }


    // <div class="card">
    //   <img src={image url of user} />
    //   <div class="card-info">
    //     <h3 class="name">{users name}</h3>
    //     <p class="username">{users user name}</p>
    //     <p>Location: {users location}</p>
    //     <p>Profile:
    //       <a href={address to users github page}>{address to users github page}</a>
    //     </p>
    //     <p>Followers: {users followers count}</p>
    //     <p>Following: {users following count}</p>
    //     <p>Bio: {users bio}</p>
    //   </div>
    // </div>


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
