fetch('pessoas.js')
    .then(response => response.json())
    .then(data => fazerOqueQuisercomJson(data));