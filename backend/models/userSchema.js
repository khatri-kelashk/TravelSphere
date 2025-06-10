import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    user_name: {
        type: "string",
        required: [true, "Please input user_name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    email: {
        type: "string",
        required: [true, "Please input email address"],
        validate: [validator.isEmail, "Please enter valid email address"]
    },
    phone_no: {
        type: "string",
        required: [false, "Please input phone number"]
    },
    password: {
        type: "string",
        required: [true, "Please input password"],
        minLength: [6, "Min 8 chars password"],
        maxLength: [32, "Max 30 chars password"],
    },
    role: {
        type: "string",
        required: [false, "Please provide your role"],
        enum: ["User", "Admin"],
        default: "User"
    },
    isDeleted: { 
        type: Boolean, 
        default: false 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

//Hashing the password
userSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
      next();   
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

//JWT token generate
userSchema.methods.getJWTToken = async function(){
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

export const User = mongoose.model("User", userSchema);

// Soft delete method
User.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};