module.exports.test_get = (req, res) => {
    res.render('test');
}

module.exports.test_post = (req, res) => {
    const { payload } = req.body;

    if (payload) {
        console.log(payload);

        res.status(200).send(payload);
    } else {
        res.status(400).send({
            error: 'error fetching payload'
        });
    }
}