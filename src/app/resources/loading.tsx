import { Images, Loader2 } from "lucide-react";

export default function loading(){
    return <div className="flex justify-center items-center h-full w-full">
        <div className="w-32 h-32 ">
            <Images className="animate-pulse text-gray-700" size={"lg"}/>
        </div>
    </div>
}