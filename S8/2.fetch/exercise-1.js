let url = 'https://api.agify.io?name=michael';
fetch(url)
    .then(function (response) {
        response.json()
            .then(function (data) {
                console.log(data);
            });
    })
    .catch(function (error) {
        console.log(error);
    });