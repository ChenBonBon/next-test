import TeamCard from "@/components/card";
import { TeamListItemModel } from "@/types/team";

async function getData() {
  const res = await fetch(
    "http://35.86.112.93:8100/v1/team/list?keyword=&tag=All&page=1"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  return json.data;
}

export default async function Home() {
  const data = await getData();

  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data &&
        (data.list ?? []).map((item: TeamListItemModel) => (
          <TeamCard key={item.id} {...item} />
        ))}
    </section>
  );
}
