import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ customClass }) {
  const { data: session, status } = useSession();

  return (
    <div className={`link ${customClass}`}>
      {session ? (
        <div
          className="inline-flex items-center px-1 py-1 text-xs text-gray-600 bg-transparent rounded-full hover:bg-gray-200 "
          onClick={signOut}
        >
          {" "}
          <img
            className="inline-block rounded-full w-7 h-7"
            src={session.user?.image}
            alt=""
          />
        </div>
      ) : (
        <button
          className="px-2 py-1 text-xs text-gray-600 bg-gray-200 rounded-full"
          // redirect to signIn page (signIn: "/auth/signin")
          onClick={signIn}
        >
          Sign in
        </button>
      )}
    </div>
  );
}
