function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if(Client.checkUrl(formText)) {
        fetch(
            'http://localhost:3000/analyze', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({url: formText}),
            }
        )
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = `This article's polarity is ${res.polarity} and its subjectivity is ${res.subjectivity}`;
        });
    }
}

export { handleSubmit };
