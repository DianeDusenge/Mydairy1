import joi from 'joi';
const validation = {
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