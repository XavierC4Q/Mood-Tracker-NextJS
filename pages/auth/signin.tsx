import React from "react";
import { providers, signIn } from "next-auth/client";
import styles from "../../styles/Signin.module.scss"

import {useRouter} from 'next/router';

interface IProviders {
  providers: { [key: string]: { name: string; id: string } };
}

export default function SignIn({ providers }: IProviders) {
  const googleProvider = providers.google;
  const router = useRouter()
  return (
    <div className={styles['signin-container']}>
      <h2 className={styles['signin-header']}>Welcome Back!</h2>
      <div className={styles['form-container']}>
        <button className={styles['signin-button']} onClick={() => signIn(googleProvider.id)}>
          Sign in with {googleProvider.name}
        </button>
          <button className={styles['back-btn']} onClick={() => router.push('/')}>
            Back
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
