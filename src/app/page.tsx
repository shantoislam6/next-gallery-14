/* eslint-disable @next/next/no-img-element */
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-5 justify-center items-center ">
        {[...images, ...images, ...images].map((image, i) => (
          <div
            key={image.id + " " + i}
            className="w-48 border border-white/20 "
          >
            <img src={image.url} alt="image" />
            <div className="py-2 text-center ">
              <span>{image.name}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
