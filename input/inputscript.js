document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Getting form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var subscribe = document.getElementById('subscribe').checked;
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;
  
    // Displaying results
    var result = 'Username: ' + username +
                 '\nPassword: ' + (password ? 'Provided' : 'Not Provided') +
                 '\nSubscribe: ' + (subscribe ? 'Yes' : 'No') +
                 '\nGender: ' + (gender ? gender : 'Not Provided');
  
    document.getElementById('result').textContent = result;
  
    // Here you can also handle the form submission, e.g., send data to server
  });
  