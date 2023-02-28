const button = document.querySelector('button');

button.addEventListener('click', async () => {
    const res = await fetch('http://localhost/test-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            payload: {
                test1: 'test data',
                test2: 284
            }
        })
    });

    const data = await res.json();

    console.log(data);
});