import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  console.log("WHEN AM I?");

  const query = (await searchParams).query;

  const posts = [{
    id: 1,
    createdAt: new Date().toISOString(),
    views: 55,
    author: { id: 1, name: "Elon Musk" },
    description: 'This is a description',
    image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80w=2940&aut0=format&fit=crop&ixlib=rb-4.03&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA% 3D%3D",
    category: "Robots",
    title: "We Robots",
  }];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br /> Connect With Enterpreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="card_grid">
          {posts?.length ? (
            posts.map(post => <StartupCard key={post.id} post={post} />)
          ) : (
            <li className="no-results">No startups found</li>
          )}
        </ul>
      </section>
    </>
  );
}
