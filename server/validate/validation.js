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

            title: joi.string().trim().required(),
            description: joi.string().trim().required(),
            // CreatedOn: joi.string().required(),
        };
        return joi.validate(addentry, newItem);
    },
};
export default validation;