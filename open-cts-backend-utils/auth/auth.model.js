import generateModel from '../db/model.generator';

const User = generateModel('User', {
    name: String,
    username: String,
    email: String,
    password: String,
    photo: String,
    role: String
});

export default User;