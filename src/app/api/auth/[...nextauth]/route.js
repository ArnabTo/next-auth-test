import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { CredentialsProvider } from 'next-auth/providers/credentials'
import { connectDB } from '@/utils/connect'
export const authOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET}

export async function POST(req){
    try{
          await connectDB();
          const {username, email, password} = await req.json()
          console.log({username, email, password})
    }catch(error){

    }
}