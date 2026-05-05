import { LeftSection } from "@/components/login/left-section";
import { RightSection } from "@/components/registro/right-section";



export default function LayoutRegisto(){
    return(
        <div className="bg-gray-200 h-screen flex"> 
            <LeftSection/>
            <RightSection/>
        </div>
    )
}