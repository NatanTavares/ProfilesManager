import { useSession } from "next-auth/client";
import { FormModalProvider } from "../hooks/FormModalContext";
import SignIn from "./auth/sign-in";

import Profile from "./profile";

export default function Home() {
  const [session, loading] = useSession();

  return !session ? (
    <SignIn />
  ) : (
    <FormModalProvider>
      <Profile />
    </FormModalProvider>
  );
}
