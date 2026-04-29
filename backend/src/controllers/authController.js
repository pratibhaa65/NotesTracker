import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register user
export const registerUser = async(req, res) =>{
    try{
        const {name, email, password} = req.body;
        console.log(req.body);
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"});
        }
        const existingUser = await User.findOne({email});
        
        if(existingUser){
            return res.status(400).json(
                {message:"User already exists with this email"}
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({message:"User registered successfully"});
    }catch(error){
        console.error("Error registering user:", error.message);
        res.status(500).json({message:"Server error"});
    }
};


// Login user
export const loginUser = async(req, res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"Please fill all the fields"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );
        res.json({
            token,
            user:{
                userId: user._id,
                name: user.name,
                email: user.email
            }
        });
    }catch(error){
        console.error("Error logging in user:", error.message);
        res.status(500).json({message:"Server error"});
    }
}