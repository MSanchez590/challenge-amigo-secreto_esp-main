let friends = [];


// Function to add friend
function addFriend() {
    // Get element to HTML index
    let inputFriend = document.getElementById("amigo").value;
    
    // Compare content
    // if content isn't empty
    if (inputFriend != "") {
        friends.push(inputFriend);
        document.getElementById("amigo").value = "";
        updateListFriends();
    //if content is empty    
    }else{
        alert("Por favor, inserte un nombre");
    }
}

// Function to update element in HTML index
function updateListFriends() {
    // Get element <ul>
    let listOfIndex = document.getElementById("listaAmigos");

    // Clean list
    listOfIndex.innerHTML = "";
    
    // Add elements to list
    friends.forEach(element => {
        listOfIndex.innerHTML += '<li>' + element + '</li>';
    });
}

// Function to sort friend
function sortFriend() {
    // Get element for show friend
    let listOfSortFrnd = document.getElementById("resultado");

    // Verify if array is empty
    if (friends.length > 0) {
        let indexSort = Math.floor(Math.random() * friends.length);
        listOfSortFrnd.innerHTML = "¡Tu amigo secreto es: " + friends[indexSort] + "!";
    }
}

