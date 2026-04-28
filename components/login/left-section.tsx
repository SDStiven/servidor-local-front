import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheckIcon } from "@/assests/icons/badge-check";
import { SecurityIcon } from "@/assests/icons/security-icon";

export const LeftSection = () => {
    return (
        <div className="w-1/2  flex flex-col justify-center p-10 ">
            <Badge variant="secondary" className="t">Precision concierge services</Badge>

            <h1 className="text-5xl font-bold">Elevate your standard of service</h1>
            <p className="text-lg font-semibold text-gray-600 mt-2">
                experiência, flexibilidade e qualidade, garantindo que suas necessidades sejam atendidas com precisão e profissionalismo.
                experiência, flexibilidade e qualidade, garantindo que suas necessidades sejam atendidas com precisão e profissionalismo.
            </p>
 
            <div className="flex gap-4 ">
                <Card className="px-3 py-7 w-full">
                    <CardHeader>
                        <BadgeCheckIcon />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="font-semibold">Login</CardTitle>
                        <CardDescription>Bem-vindo ao sistema de gestão de ponto!</CardDescription>
                    </CardContent>
                </Card>

                <Card className="px-3 py-7 w-full">
                    <CardContent className="mt-1">
                        <CardHeader className="p-0 pb-3">
                            <SecurityIcon />
                        </CardHeader>
                        <CardTitle className="font-semibold">Login</CardTitle>
                        <CardDescription>Bem-vindo ao sistema de gestão de ponto!</CardDescription>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}