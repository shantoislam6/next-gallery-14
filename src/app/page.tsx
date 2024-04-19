import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/dec78ec7-5703-49b2-a038-3be6d5f51990-jlo1ag.png",
  "https://utfs.io/f/e9d367d3-6bda-4348-bf71-cfae8cc960ef-8pmusd.png",
  "https://utfs.io/f/8de114d0-5776-46ac-b81c-aeeb03ad8e9c-c2r32g.png",
  "https://utfs.io/f/3ffdf171-88b1-4a6b-a361-dd31293a4891-upuxt1.png",
  "https://utfs.io/f/5ade913d-d044-4202-a985-4e8bb4ca65fe-dk6j3t.jpg",
  "https://utfs.io/f/937b0d43-149c-413a-9c98-b27b01f282b1-q95413.png",
  "https://utfs.io/f/aa6ffe4c-3e8c-4b15-94f4-cbf8a7e8e1f7-i38z0k.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, i) => (
          <div key={image.id + " " + i} className="w-48 ">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
