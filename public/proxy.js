function searchAndLoad() {
  var input = document.getElementById('searchbar').value;
  if (input) {
    // Run the go() function with the input value
    go();

    // Create a new iframe element and set its attributes
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', '/main/' + input);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    // Replace the current page with the iframe
    document.body.innerHTML = '';
    document.body.appendChild(iframe);
  } else {
    alert('Please provide a link. It does not require https://.');
  }
}
