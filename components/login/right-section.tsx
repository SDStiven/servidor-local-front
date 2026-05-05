"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { toast } from "sonner"

export const RightSection = () => {

    //hooks
    // useState
    // useEffect

    //useState    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value)
        } else {
            setEmail("")
        }

    }
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value)
        } else {
            setPassword("")
        }

    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        //fect api
        const response = await fetch('http://localhost:8080/user/login',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

        if (response.status === 200) {
            toast.success("Login feito com sucesso!");

            const responsedata = await response.json();

            console.log("data", responsedata)

            if (typeof window !== "undefined") {
                window.location.href = "/home"
            }
        } else {
            toast.error("email ou senha incorretos")
        }

    }

    console.log("Email:", email, "Password:", password)

    return (
        <div className="w-1/2">

            <Card className="h-full flex flex-col justify-center px-14">
                <CardHeader >
                    <span className="text-5xl font-bold">Login</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input
                                type="text"
                                placeholder="write your email"
                                value={email}
                                onChange={changeEmail}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>password</Label>
                            <Input
                                type="password"
                                placeholder="write your password"
                                value={password}
                                onChange={changePassword}
                            />
                        </div>
                        <Button
                            onClick={handleLogin}
                            className="bg-[#13a4ec] w-full font-bold  py-3 drop-shadow-lg drop-shadow-gray-200">Login</Button>

                    </div>
                    <div>
                        <span>Don't have an account? </span>
                        <Link href="/registo" className="text-[#13a4ec]">Create an account</Link>
                    </div>

                </CardContent>

            </Card>


        </div>
    )
}
