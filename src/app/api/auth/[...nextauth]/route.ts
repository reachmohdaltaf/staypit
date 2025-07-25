import { loginWithGoogle } from "@/services/auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account", 
          access_type: "offline",   
          response_type: "code",    
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
 callbacks: {
  async signIn({ user }: { user: { email?: string | null; name?: string | null } }) {
    console.log(user);
    try {
      await loginWithGoogle({
        email: user?.email!,
        name: user?.name!,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
},


};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
