import { getProviders, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function signInPage({ providers }) {
  function signInHandler(id) {
    // pass two values into SignIn, id of the provider & a callback url to which we go to after logging in
    signIn(id, { callbackUrl: "/" });
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button onClick={() => signInHandler(provider.id)}>
            <div
              id="toast-simple"
              className="flex items-center w-full max-w-xs p-4 space-x-4 bg-slate-300 divide-x divide-gray-400 rounded-lg"
              role="alert"
            >
              <FcGoogle />
              <div className="pl-4 text-sm text-white">
                Sign in with {provider.name}
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // get all providers from next-auth
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
