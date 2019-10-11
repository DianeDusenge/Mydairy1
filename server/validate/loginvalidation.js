import joi from 'joi';
const validatesignin = {
    validate(signin) {
        const login = {
            Email: joi.string().trim().required(),
            Password: joi.string().trim().required(),
        };
        return joi.validate(signin, login);
    }
};

export default validatesignin;