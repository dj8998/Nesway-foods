import { Badge } from "@/components/ui/badge";

function NeswayFeatureWithImage() {
  return (
    <div className="w-full pt-12 pb-8 lg:pt-16 lg:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div 
            className="bg-muted rounded-md w-full aspect-video h-full flex-1 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/subhero.png')"
            }}
          ></div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Sustainable Food Innovation
              </h2>
              <p className="text-body-large max-w-4xl lg:max-w-5xl text-muted-foreground text-left italic">
                We&apos;re revolutionizing the food industry with smarter, cleaner, and better solutions that transform how we think about sustainable nutrition. Our mission is to create innovative products that nourish both people and the planet while delivering exceptional taste, quality, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NeswayFeatureWithImage };
