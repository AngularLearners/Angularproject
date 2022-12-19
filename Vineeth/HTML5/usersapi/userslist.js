async function userslist() {
  // alert("The browser has finished loading the page");
  let url = "https://reqres.in/api/users?page=2";
  let response = await fetch(url);
  let userlist = await response.json();
  console.log(userlist);
  let usercards = "";
  users = userlist.data;
  // console.log(users);
  for (let x in users) {
    console.log(users[x]);
    let usercard = `<div class="user">
                            <img class="photo" src="${users[x].avatar}">
                            <div class="infobox">
                                <h4 class="name">${users[x].first_name} ${users[x].last_name}</h4>
                                <p class="email">${users[x].email}</p>
                            </div>
                        </div>`;
    usercards += usercard;
  }
  let card = document.getElementById("cards");
  card.innerHTML = usercards;
}
