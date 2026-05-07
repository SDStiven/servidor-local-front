import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"

//  src="https://picsum.photos/300/400"
//  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"

interface categoriaType {
    id: string;
    name: string;
    icon: string;
}

interface PedidoCardProps {
    title: string;
    description: string;
    image: string;
    category: categoriaType;
    price: number | string;
}

export const PedidoCard = (pedidoCardeProp: PedidoCardProps) => {
    return (
        <Card className="p-0 flex ">
            <CardHeader className="relative p-0">
                <Image
                    src={pedidoCardeProp.image}
                    alt="Imagem do pedido"
                    width={300}
                    height={400}
                    className="w-full h-[200px] object-cover"
                />
                <div className=" absolute inset-0 flex items-center justify-center ">
                    <div className="bg-white rounded-full w-15 h-15 flex items-center justify-center ">
                        <span>{pedidoCardeProp.category.icon}</span>
                    </div>
                </div>

            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="font-semibold">{pedidoCardeProp.title}</p>
                        <p>{pedidoCardeProp.description}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-2 ">
                <div className="">
                    <p>{pedidoCardeProp.category.name}</p>
                    <p>$ {pedidoCardeProp.price}</p>
                </div>
                <Button className="bg-[#13a4ec]">Adicionar ao carrinho</Button>
            </CardFooter>
        </Card>
    )
}

