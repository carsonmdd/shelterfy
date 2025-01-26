import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Link href="/">
            <img src="logo.png" className="logo"></img>
          </Link>

          <nav className="flex justify-end m-5 space-x-4">
            <Link href="/saved-locations">My Saved Locations</Link>
            <Link href="/find-shelter">Find Shelter</Link>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}