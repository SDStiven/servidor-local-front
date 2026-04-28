
import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const RightSection = () => {
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
                        <Input type="text" placeholder="write your email" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>password</Label>
                        <Input type="password" placeholder="write your password" />
                        </div>

                        <Button className="bg-[#13a4ec] w-full font-bold  py-3 drop-shadow-lg drop-shadow-gray-200">Login</Button>

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