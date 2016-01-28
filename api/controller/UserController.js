/**
 * Create a article
 */
exports.create = function(req, res) {
    var email = req.body.user.email;
    var password = req.body.user.passowrd;

    var user = new User(req.body);

    user.save(function(err) {
        if (err) {
            res.jsonp("error");
        } else {
            res.jsonp({sucess: "success"});
        }
    });
};