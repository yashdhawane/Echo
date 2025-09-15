"use client"
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
            <p>apps/widget</p>
            {JSON.stringify(users)}
             <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => {
              addUser();
            }}>
              Add User
            </button>
      </div>
    </div>
  )
}
