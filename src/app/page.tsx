/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 ">
      {[...images, ...images, ...images].map((image, i) => (
        <div key={image.id + " " + i} className="w-48 border border-white/20 ">
          <img src={image.url} alt="image" />
          <div className="py-2 text-center ">
            <span>{image.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
 
  return (
    <main className="">
      <SignedOut>
        <div className="w-fuill h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
