                function go() {
                    var input = document.getElementById('searchbar');
                    if (input.value) {
                        window.location.href = '/main/' + input.value;
                    } else {
                        alert('Please provide a link. It does not require https://.');
                    }
                }