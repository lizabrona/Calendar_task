window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cancelButton').addEventListener('click', function(e) {
        e.preventDefault();
        location.href = 'index.html';
    });
});