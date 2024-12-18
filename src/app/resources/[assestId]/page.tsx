import MediaViewer from '@/components/MediaViewer';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key:process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

async function Resource( { params }: { params: {assestId: string}}) {
  const {resources} = await cloudinary.api.resources_by_asset_ids(params.assestId ,{tags: true});
  return (
    <MediaViewer
      resource={resources[0]}
    />
  );
}

export default Resource;