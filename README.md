This page helps you to create a simple login in NextJS using next-auth lib


install next-auth: <br>
Docs: https://next-auth.js.org/<br>
The example on home page does not work with new NEXTJS 13.4 App folder, follow this tutorial bellow to know the new way to use-it

```
npm install next-auth

```

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
create your .env file 

```
GOOGLE_ID = "PUT YOUR GOOGLE ID"
GOOGLE_SECRET ="PUT YOUR GOOGLE SECRET HERE"

```

Create a provider for your login component:

/app/components/Provider.tsx
```
"use client";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}

```
Login component 

```
/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession, signOut, signIn } from "next-auth/react";

export default function SignIn() {
  const { data: session }: any = useSession();
  return (
    <>
      {session ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <p className="text-white p-2 bg-gray">{session.user?.name}</p>
            <img
              className="rounded-full"
              src={session.user?.image}
              alt="user"
            />
          </div>
          <button
            onClick={() => signOut()}
            className="text-black bg-white p-2 rounded-md font-bold"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <button
            onClick={() => signIn("google")}
            className="text-gray-700 bg-white p-2 px-4 rounded-md font-bold"
          >
            Login with Google
          </button>
        </div>
      )}
    </>
  );
}
```
This is the final code on your page.tsx

```
import SignIn from "../components/SignIn";
import Provider from "../components/Provider";

export default function Home() {
  return (
    <>
      <div className="bg-zinc-700 w-screen h-screen flex items-center justify-center ">
        <div className="text-center w-full flex justify-center ">
          <Provider>
            <SignIn />
          </Provider>
        </div>
      </div>
    </>
  );
}

```

