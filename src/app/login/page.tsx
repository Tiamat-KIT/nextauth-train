import { getServerSession } from "next-auth";
import { options } from "../option";
import { LogIn, LogOut } from "@/AuthButton";

export default async function Home(){
    const session = await getServerSession(options)
    const user = session?.user

    return (
        <div>
            <div>{`${JSON.stringify(user)}`}</div>
            {user ? <LogIn /> : <LogOut />}
        </div>
    )
}