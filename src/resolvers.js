import User from "./models/User.js" 
import Task from "./models/Task.js"

export const resolvers = {
    Query: {
        hello : () => {
            return "Hello World con GraphQL"
        },
        greet(root, {name}, ctx) {
            console.log(ctx)
            return `Helloo! ${name}`
        },
        async tasks(){
            return await Task.find()
        },
        async users(){
            return await User.find()
        }
    },
    Mutation: {
        async createTask(_, { input }){
            const newTask = new Task(input)
            await newTask.save()
            return newTask;
        },
        async createUser(_, {input}){
            const newUser = new User(input)
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, {_id}){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}){
            return await User.findByIdAndUpdate(_id, input, {new: true})
        }
    }
}