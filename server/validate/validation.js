import joi from 'joi';
const validation = {
    // validateString(req, res, next) {
    //     const testString = /^[a-zA-z]+$/.test(req.body.title.toString());
    //     console.log(testString)
    //     if (!testString) return res.status(400).send('error!! you are allowed to use string only');
    //     return next();
    // },
    validate(addentry) {
        const newItem = {
            // id: joi.string().trim().required(),
            title: joi.string().trim().required(),
            description: joi.string().trim().required(),
            // CreateOn: joi.string().trim().required(),
            // Allnames: joi.string().trim().required(),
            // Email: joi.string().trim().required(),
            // Username: joi.string().trim().required(),
            // Password: joi.string().trim().required(),

        };
        return joi.validate(addentry, newItem);
    },
};
export default validation;