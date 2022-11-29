import {Schema, model} from "mongoose"

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    number: Number
})

export default model('Task', taskSchema)