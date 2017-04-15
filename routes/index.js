exports.index = function (req, res) {
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['elsayed', 'alaraby', 'mohamed', 'hassan']
    });
}

exports.about = function (req, res) {
    res.render('default', {
        title: 'About Us',
        classname: 'about'
    });
}