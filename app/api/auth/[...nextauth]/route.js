import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// --- DEBUGGING BLOCK ---
// console.log("--- DEBUGGING .env variables ---");
// console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID ? "Loaded" : "NOT LOADED or undefined");
// console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "Loaded" : "NOT LOADED or undefined");
// console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET ? "Loaded" : "NOT LOADED or undefined");
// console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
// console.log("-----------------------------------");
// ---------------------------------

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };