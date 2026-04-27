import { Badge } from "@/components/ui/badge";
import { CardAction, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="bg-gray-200 h-screen h-full flex justify-between">
      <div className="w-1/2 bg-red-300">
        <Badge variant="secondary">Secondary</Badge>
        <h1>Login</h1>
        <p>
          Bem-vindo ao sistema de gestão de ponto!
          faça login para continuar 
        </p>
        <div>
          
        </div>
      </div>
      <div className="w-1/2 bg-blue-300">
        <CardAction>
          <CardContent>
            <CardTitle>Login</CardTitle>
            <CardDescription>Bem-vindo ao sistema de gestão de ponto!</CardDescription>
            

          </CardContent>
        </CardAction>

      </div>
    </div>
  )
}
