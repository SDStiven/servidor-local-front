import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4 relative ">
         
          <Button className="absolute top-4 right-4"><Link href="/login">Login</Link></Button>


      <div className="flex flex-col items-center gap-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <h1 className="text-5xl font-bold py-4">Hello world </h1>
     </div>
    </div>
  );
}
