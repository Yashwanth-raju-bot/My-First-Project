document.addEventListener("DOMContentLoaded", function() {
        // Get all list items
        var items = document.querySelectorAll('.item');
    
        // Loop through each item and add click event listener
        items.forEach(function(item) {
            item.addEventListener('click', function() {
                // Remove 'active' class from all items
                items.forEach(function(item) {
                    item.classList.remove('active');
                });
                // Add 'active' class to the clicked item
                this.classList.add('active');
                
                // Redirect to another page (Example: page1.html, page2.html, page3.html)
                var index = Array.from(items).indexOf(this) + 1;
                window.location.href = 'page' + index + '.html';
            });
        });
    });