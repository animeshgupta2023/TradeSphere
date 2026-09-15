const {Schema} = require("mongoose")
const bcrypt = require("bcryptjs")

const UsersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
    }
)

UsersSchema.pre("save", async function(){
    if(!this.isModified("password")){
        return next()
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
        throw new Error("Error hashing password");
    }
})

module.exports = {UsersSchema}
