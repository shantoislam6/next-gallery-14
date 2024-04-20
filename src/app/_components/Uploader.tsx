"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function Uploader() {
  const router = useRouter();
  return (
    <div className="my-4">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => {
          router.refresh();
        }}
      />
    </div>
  );
}
