import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

// Local product images from the public/images folder
const NESWAY_FOOD_IMAGES = [
  "/images/hummus2.jpeg",
  "/images/jack2.png",
  "/images/tofu2.png",
  "/images/pinacolada.png",
  "/images/bloody.png",
  "/images/guac1.png",
  "/images/hummus2.jpeg", // Duplicate for seamless loop
  "/images/jack2.png",
  "/images/tofu2.png",
  "/images/pinacolada.png",
  "/images/bloody.png",
  "/images/guac1.png",
];

const NeswayHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      tagline=""
      title={
        <>
          Feeding the
          <br />
          Future
        </>
      }
      description=""
      ctaText="Explore Our Products"
      images={NESWAY_FOOD_IMAGES}
      className="pt-24 h-[calc(100vh-6rem)]"
    />
  );
};

export default NeswayHeroDemo;
