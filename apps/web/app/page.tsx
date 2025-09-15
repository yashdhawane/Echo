"use client"
import { useMutation, useQuery ,Authenticated, Unauthenticated} from "convex/react";
import { api } from "@workspace/backend/_generated/api"
import { SignInButton, UserButton } from "@clerk/clerk-react";


export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
    <Authenticated>
      <UserButton  />
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
            <p>apps/web</p>
            {JSON.stringify(users)}
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => {
              addUser();
            }}>
              Add User
            </button>
      </div>
    </div>
    </Authenticated>
    <Unauthenticated>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Please Sign In</h1>
          <SignInButton>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Sign In
            </button>
          </SignInButton>
        </div>
      </div>
    </Unauthenticated>
  </>
  )
}
