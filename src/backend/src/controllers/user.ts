import { User } from "../database";

async function getUsers(): Promise<User[]> {
    return await User.findAll();
}

export default {
    getUsers
}