function getSpringBootData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8080/api/v1/movies', true);

  // Set headers if required
  // xhr.setRequestHeader('Authorization', 'Bearer <token>');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var responseData = JSON.parse(xhr.responseText);
        var responseContainer = document.getElementById('responseContainer');
        responseContainer.innerHTML = JSON.stringify(responseData);
      } else {
        console.log('Error:', xhr.status);
      }
    }
  };

  xhr.send();
}