import Image from "next/image";
import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "@/components/home-section";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative">
      {/* navbar */}
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">SpecialOffers</section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
