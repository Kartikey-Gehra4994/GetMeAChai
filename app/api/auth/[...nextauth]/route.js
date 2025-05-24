import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github'; // ✅ Import the GitHub provider
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        // Connect to the database
        // const client = await mongoose.connect("mongodb://localhost:27017/chai")
        await connectDB()
        // check if the user already exists in the database
        const currentUser = await User.findOne({ email: email })
        if (!currentUser) {
          // Create a new user
           await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })
        }
        
        return true
      }
    },
    async session({ session, user, token }){
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username
      return session
    }
  }});

export { authoptions as GET, authoptions as POST }; // ✅ Match case-sensitive export names
