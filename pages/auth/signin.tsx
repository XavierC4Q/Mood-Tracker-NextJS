import React from "react";
import { providers, signIn } from "next-auth/client";

interface IProviders {
  providers: { [key: string]: { name: string; id: string } };
}

export default function SignIn({ providers }: IProviders) {
  const googleProvider = providers.google;
  return (
    <div>
      <h2>Welcome Back!</h2>
      <div>
        <button onClick={() => signIn(googleProvider.id)}>
          Sign in with {googleProvider.name}
        </button>
      </div>
    </div>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};
