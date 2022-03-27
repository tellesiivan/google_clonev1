import { useSession, signIn, signOut } from "next-auth/react";

export default function User() {
  const { data: session, status } = useSession();

  return (
    <div className="link">
      {session ? (
        <div
          className=" bg-blue-500 text-white px-1 py-1 rounded-full text-xs inline-flex items-center"
          onClick={() => signOut()}
        >
          {" "}
          <img
            className="inline-block h-6 w-6 rounded-full"
            src={session.user?.image}
            alt=""
          />
          <span className="ml-2 pr-1">{session.user?.name}</span>
        </div>
      ) : (
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs"
          // redirect to signIn page (signIn: "/auth/signin")
          onClick={() => signIn()}
        >
          Sign in
        </button>
      )}
    </div>
  );
}
