$(document).ready(function() {
    $('#upload-form').submit(function(e) {
      e.preventDefault(); // prevent form submission
  
      // Get the values of the input fields
      var cdkey = $('#cdkey').val().trim();
      var file = $('#file').val().trim();
  
      // Define regular expressions to match allowed characters in CD Key and file name
      var cdkey_regex = /^[A-Za-z0-9]+$/;
      var file_regex = /^[\w,\s-]+\.(txt)$/;
  
      // Check if CD Key is valid
      if (!cdkey_regex.test(cdkey)) {
        alert('CD Key can only contain letters and numbers.');
        return false;
      }
  
      // Check if file name is valid
      if (!file_regex.test(file)) {
        alert('File must be a TXT file.');
        return false;
      }
  
      // If data is valid, submit the form
      this.submit();
    });
  });
  
  