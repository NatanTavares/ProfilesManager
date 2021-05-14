import { useSession } from "next-auth/client";
import SignIn from "./auth/sign-in";

import Profile from "./profile/profile";

import { Container } from "../styles/pages";

export default function Home() {
  const [session, loading] = useSession();

  return <Container>{!session ? <SignIn /> : <Profile />}</Container>;
}
