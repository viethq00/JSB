document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault();
  
    // Extracting values from inputs
    var name = document.getElementById('name').value;
    var bio = document.getElementById('bio').value;
    var job = document.getElementById('job').value;
  
    // Do something with the values, for example, log them to the console
    console.log('Name:', name);
    console.log('Bio:', bio);
    console.log('Job:', job);
  
    // You can also add more JavaScript code here to handle form submission,
    // such as validating the input or sending it to a server.
  };
  