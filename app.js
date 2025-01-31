let friends = [];


// Function to add friend
function addFriend() {
    // Get element to HTML index
    let inputFriend = document.getElementById("amigo").value;
    
    // Compare content
    // if content isn't empty
    if (inputFriend != "") {
        inputFriend = normalizeName(inputFriend);

    // Verify if the name alredy exist
        if(alreadyExist(inputFriend)){
            // Add name to array
            friends.push(inputFriend);
            document.getElementById("amigo").value = "";
            updateListFriends();
        }
        
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
    clean("listaAmigos");
    
    // Add elements to list
    friends.forEach(element => {
        listOfIndex.innerHTML += '<li>' + element + '</li>';
    });
    
    clean("resultado");
}

// Function to sort friend
function sortFriend() {
    // Get element for show friend
    let listOfSortFrnd = document.getElementById("resultado");

    // Verify if array is empty
    if (friends.length > 0) {
        let indexSort = Math.floor(Math.random() * friends.length);
        listOfSortFrnd.innerHTML = "¡Tu amigo secreto es: " + friends[indexSort] + "!";

        clean("listaAmigos");
    }
}

// Function to clean the element 
function clean(idElement){
    document.getElementById(idElement).innerHTML = "";
}

// Function to normalize all names
function normalizeName(name){
    let nameCorrect = "";
    for (let i = 0; i < name.length; i++) {
        if(i == 0) {
            nameCorrect = "" + name.charAt(i).toUpperCase();
        } else nameCorrect += "" + name.charAt(i).toLowerCase();
    }
    return nameCorrect;
}

// Function to verify if the name is al ready exist
function alreadyExist(name) {
    friends.forEach(element => {
        if (element == name) {
            alert("El nombre ya existe, intenta de nuevo");
            return false;
        }else{
            return true;
        }
    });
}