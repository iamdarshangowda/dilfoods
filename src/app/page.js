import Link from 'next/link';
import Filter from '../Components/Filter';
import ItemCard from '../Components/itemCard';

export default function Home() {
  return (
    <main className="h-full items-center justify-between p-6">
      <Filter />
      <div className="mt-10">
        <Link href="/product/1">
          <ItemCard />
        </Link>
      </div>
    </main>
  );
}
