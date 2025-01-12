import express from "express";
import userrouter from "./routes/user.router.js";
import passport from "passport";
import "./config/passport.js";
const app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(userrouter);
app.listen(5000, () => console.log("hi rajan"));
