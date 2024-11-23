import Banner from "@/components/layout/banner";
import FeaturedList from "@/components/home/featured-list";
import Stats from "@/components/home/stats";
import FAQ from "@/components/home/faq";

export default function Home() {

  return (
    <>
        <Banner />
        <FeaturedList />
        <Stats />
        <FAQ />
    </>
  );
}
