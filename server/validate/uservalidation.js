import joi from 'joi';

const validation = {
        validate(addUser) {
            const newItem = {
                Allnames: joi.string().trim().required(),
                Email: joi.string().trim().required(),
                Username: joi.string().trim().required(),
                Password: joi.string().trim().required(),

            };
            return joi.validate(addUser, newItem);
        },
    }
    // const validatesignin = {
    //     validate(signin) {
    //         const login = {
    //             Email: joi.string().trim().required(),
    //             Password: joi.string().trim().required(),
    //         };
    //         return joi.validate(signin, login);
    //     }
    // };

export default validation;
// validateString(req, res, next) {
//     const testString = /^[a-zA-z]+$/.test(req.body.title.toString());
//     console.log(testString)
//     if (!testString) return res.status(400).send('error!! you are allowed to use string only');
//     return next();
// },