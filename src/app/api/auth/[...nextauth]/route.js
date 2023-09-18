import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const Options = {
    providers: [
 
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
        
      ],
      pages: {
        signIn: '/signin'
      }

}

const handler = NextAuth(Options)

export {handler as GET, handler as POST}