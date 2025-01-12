import passport from "passport";
import { Strategy as Google } from "passport-google-oauth20";

passport.use(new Google({


},async(accessToken,refreshToken,profile,done){
  return done(null,profile)
}))

passport.serializeUser((user,done)=>done(null,user))

passport.deserializeUser((user,done)=>done(null.user))
