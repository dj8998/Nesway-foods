import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function Feature() {
  const products = [
    {
      name: "Silken Tofu",
      image: "/images/tofu2.png",
      href: "/products/silken-tofu"
    },
    {
      name: "Hummus",
      image: "/images/hummus.png",
      href: "/products/hummus"
    },
    {
      name: "Guacamole",
      image: "/images/guacamole.png",
      href: "/products/guacamole"
    },
    {
      name: "Mocktails",
      image: "/images/bloody.png",
      href: "/products/mocktails"
    },
    {
      name: "Jackfruit",
      image: "/images/jackfruit.png",
      href: "/products/jackfruit"
    },
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Nourishing Innovation
              </h2>
              <p className="text-body-large max-w-2xl lg:max-w-3xl text-muted-foreground text-left italic">
                Discover our range of healthy, sustainable food products crafted for the conscious consumer.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link key={index} href={product.href} className="group">
                <div className="flex flex-col gap-2 cursor-pointer transition-transform group-hover:scale-105">
                  <div 
                    className="bg-muted rounded-md aspect-video mb-2 bg-cover bg-center transition-all group-hover:shadow-lg"
                    style={{
                      backgroundImage: `url(${product.image})`
                    }}
                  ></div>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
