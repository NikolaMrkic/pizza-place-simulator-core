const User = require('../../models/user');

const bcrypt = require('bcrypt');

exports.signUp = (req, res, next) => {
    const reqEmail = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.checkEmail({ email: reqEmail })
        .then(userDoc => {
            if (userDoc) {
                return res.status(400).json({ message: "Exist" })
            } else {
                return bcrypt.hash(password, 12)
                    .then(hashedPassword => {
                        let password = hashedPassword
                        let email = reqEmail
                        const user = new User(
                            email,
                            password
                        );
                        return user.save()
                            .then(result => {
                                console.log('result then create user', result);
                                res.status(201).json({
                                    massage: "User created"
                                });
                            })

                    })
            }
        })

        .catch(err => {
            console.log(err);
        })

}




exports.logIn = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.checkEmail({ email: email })
        .then(user => {
            console.log("usao u then"); console.log('user', user);
            if (!user) {
                return res.status(404).json({
                    message: "User not found."
                });
            } else {
                let userPas = user.password

                if (password === userPas) {
                    console.log('password === userPas', password === userPas);
                    const users = new User(email, password);
                    users
                        .fetchAll()
                        .then(result => {
                            console.log('result then create user', result);
                            res.status(201).json({
                                massage: "User created",
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err
                            });
                        });
                }
                res.status(404).json({
                    message: "Invalid password"
                })

            }

        }).catch(err => {
            console.log(err);
        })
};