import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";
import HERO_IMAGE from '@/public/assets/images/Hero.jpg';
import PropertyCard from "@/components/common/PropertyCard";

const Home: React.FC = ()=>{
  return(
    
    <div>
      {/* <Hero Section/> */}
      <section className="relative h-96 bg-gray-200 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
          src={HERO_IMAGE}
          alt="House Image"
          fill
          className="object-cover"
          loading="eager"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-bold text-5xl">Find your favorite place here!</h1>
          <p className="font-bold">The best prices for over 2 million properties worldwide</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto my-8 px-4 flex flex-wrap gap-3">
  {["Top Villa", "Self Checkin", "Luxury", "Beachfront", "Mountain"].map(
    (filter) => (
      <span
        key={filter}
        className="px-4 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 transition"
      >
        {filter}
      </span>
    )
  )}
</section>


      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property)=>(
          <PropertyCard key={property.name} property={property}/>
        ))}
      </section>
      
    </div>
  )
};

export default Home;