import mongoose, {Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    avatar:{
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: {
        type: Schema.Types.ObjectID,
        ref: "video"
    },
    password: {
        type: String,
        required: [true, "password is require"],
    },
    refreshToken: {
        type: String,
    },
}, {timestamps: true})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})
userSchema.methods.isPasswordCOrrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({id: this._id}, process.env.ACCESS_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRY});
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({id: this._id}, process.env.REFRESH_SECRET, {expiresIn: process.env.REFRESH_TOKEN_EXPIRY});
}

export const User = mongoose.model('User', userSchema);