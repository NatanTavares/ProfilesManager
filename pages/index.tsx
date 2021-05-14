import { useSession } from "next-auth/client";
import SignIn from "./auth/sing-in";

import Profile from "./profile";

export default function Home() {
  const [session, loading] = useSession();

  return !session ? <SignIn /> : <Profile />;
}
