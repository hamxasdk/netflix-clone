import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismdb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    throw new Error("Not Signed In");
  }
  const currentUser = await prismdb.user.findUnique({
    where: { email: session.user.email },
  });
  if (!currentUser) {
    throw new Error("Not Signed In");
  }
  return {currentUser}
};
export default serverAuth
