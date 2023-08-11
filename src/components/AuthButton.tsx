"use client"
import {signIn,signOut} from "next-auth/react"

export const LogIn = () => {
    return <button className="btn btn-info" onClick={() => signIn()}>SignIn</button>
}

export const LogOut = () => {
    return <button className="btn btn-error" onClick={() => signOut()}>SignOut</button>
}