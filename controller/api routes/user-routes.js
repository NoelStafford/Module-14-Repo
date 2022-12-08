const router = require('express').Router();
const { User } = require('../../models');

// creates a new user
router.post('/', async (req, res) => {
    try {
        const createUserData = await User.create(req.body, {        
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        // finds the user
        const userData = await User.findOne({                      
            where: { username: req.body.username }
        });
        // response of the new user
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(createUserData);                   
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
// logs the user in
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: `Something went wrong please check your email or password and try again.` });
            return;
        }
        // makes sure the user has entered the correct password
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: `Something went wrong please check your email or password and try again.` });
            return;
        }
        // 
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged in' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// directs the user to the logout page
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
