document.getElementById('btn').addEventListener('click', () => {
    fetch('/api/message')
        .then(res => res.json())
        .then(data => {
            document.getElementById('output').innerText = data.message;
        });
});