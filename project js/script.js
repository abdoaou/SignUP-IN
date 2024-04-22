 // Array to store accounts
   

    function addAccount() {
        // Get form inputs and store them in variables
        var username = document.getElementById('usernameInput').value;
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;
        console.log("test");
        // Create an object for the new account using the input values
        var newAccount = {
            Username: username,
            Email: email,
            Password: password
        };
        var users=JSON.parse(localStorage.getItem('accounts')) || [];
        users.push(newAccount);
        console.table(users, ['Username']);
        localStorage.setItem('accounts', JSON.stringify(users));

        

        alert("Account added successfully");

        // Optionally, you can display a message or perform any other actions here
        console.log(newAccount.Username);
    
    }


     // Function to check if provided credentials match any existing account
     function checkCredentials( Email, Password) {
        var users=JSON.parse(localStorage.getItem('accounts')) || [];
        console.table(users);

        console.table(users, ['Username']);
        alert("entered the function ");
        
        for (var i = 0; i < users.length; i++) {
            if (users[i].Email === Email && users[i].Password === Password) {
                return  alert("loged in succecfully");
                    
            }
        }
        return alert("the account are not found !!");;
    }
    
    




