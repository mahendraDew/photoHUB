"use client";

import { Upload } from "lucide-react";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useResources } from "@/app/hooks/use-resources";
import { CloudinaryResource } from "@/types/Cloudinary";

const UploadButton =() =>{
    const { addResources } = useResources({
        disableFetch: true
    });
    function handleOnSuccess(results: CloudinaryUploadWidgetResults ){
        addResources([results.info as CloudinaryResource])
    }
    return (
        <CldUploadButton
         signatureEndpoint={"/api/sign-cloudinary-params"}
         options={{
            autoMinimize: true,
            tags: [String(process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG)]
         }}
         onSuccess={handleOnSuccess}
         > 
            <span className="flex gap-2 items-center bg-blue-500 hover:bg-blue-600 transition-colors px-2 text-gray-100 py-1 rounded-lg" >
                <Upload className="w-4 h-4"/> Upload
            </span>
        </CldUploadButton>
    );
}

export default UploadButton;