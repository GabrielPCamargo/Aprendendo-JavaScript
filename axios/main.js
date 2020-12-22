axios('dados.json')
    .then(response => fazeroQueQuiserComJson(response.data))