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
