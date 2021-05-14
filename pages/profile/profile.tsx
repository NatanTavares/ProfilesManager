import { signOut, useSession } from "next-auth/client";

export default function Profile() {
  const [session, loading] = useSession();

  return (
    <>
      <p>Signed in as {session.user.email}</p>
      <button onClick={(): Promise<void> => signOut()}>Sign out</button>
    </>
  );
}
