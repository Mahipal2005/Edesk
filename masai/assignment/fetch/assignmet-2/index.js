const fetchUsersButton = document.getElementById('fetch_user');
const userDataDisplay = document.querySelector('.user_detail');

function displayUsers(users) {
    userDataDisplay.innerHTML = '';
    users.data.forEach(user => {
        let userCard = document.createElement('div');

        let avatar = document.createElement('img');
        avatar.src = user.avatar;

        const name = document.createElement('h3');
        name.textContent = `Name: ${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        userCard.appendChild(avatar);
        userCard.appendChild(name);
        userCard.appendChild(email);

        userDataDisplay.appendChild(userCard);
    });
}
fetchUsersButton.addEventListener("click", () => {
  fetch("https://reqres.in/api/users")
    .then((res) => {
      return res.json();
    })
    .then((Data) => {
        displayUsers(Data);
    //   console.log(Data.data);
    })
        .catch((error) => {
    console.error("Error fetching users:", error);
  });
});
