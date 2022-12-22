submit.addEventListener("click", (e) => {
    e.preventDefault();
    showGithub(searchbar3.value);
})

const showGithub = (username) => {

    username = username.split(' ').join('');

    fetch("https://api.github.com/users/" + username)
        .then(response => response.json())
        .then(response => {
            if (username === "") {
                window.alert("Please Enter your UserName to search in Github")
            } else {

                if (response.name === undefined) {
                    window.alert("Username Not found. Please create your Github account.")
                }
                else {
                    img.innerHTML = `<a target="_blank" href="https://github.com/${username}"> <img src="${response.avatar_url}" style="height: 10rem; width="10rem"; class="rounded-circle" /></a>`
                    uname.innerHTML = "Name : " + response.name
                    bio.innerHTML = "Bio : " + response.bio
                    followers.innerHTML = "Followers : " + response.followers
                    following.innerHTML = "Following : " + response.following
                    lastActive.innerHTML = "Lasy activity at " + response.updated_at
                    joined.innerHTML = "Joined on " + response.created_at
                }

            }
        })
        .catch(err => console.error(err));
}
