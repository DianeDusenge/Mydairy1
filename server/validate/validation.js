import joi from 'joi';
const validation = {
    validate(addentry) {
        const newItem = {

            title: joi.string().required(),
            description: joi.string().required(),
            // CreatedOn: joi.string().required(),
        };
        return joi.validate(addentry, newItem);
    },
};
export default validation;