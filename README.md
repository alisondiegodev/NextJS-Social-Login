This page helps you to create a simple login in NextJS using next-auth lib


create a js file in this path /app/api/auth/[...nextauth]/route.js
```
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
}

```
