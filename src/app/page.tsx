/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import Uploader from "./_components/Uploader";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 ">
      {images.map((image, i) => (
        <a
          key={image.id + " " + i}
          className="flex  w-48 flex-col items-center justify-center border border-white/20 p-2"
          href={image.url}
          target="_blank"
        >
          <img
            src={image.url}
            alt="image"
            className="h-20 w-full object-contain"
          />
          <div className="py-2 text-center text-xs truncate w-full" title={image.name}>
            <span>{image.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-fuill h-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Uploader />
        <Images />
      </SignedIn>
    </main>
  );
}
