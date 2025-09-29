import { HeaderDemo } from '@/components/header-demo'
import NeswayFooter from '@/components/nesway-footer'

export default function Mocktails() {
  return (
    <div className="relative min-h-screen">
      <HeaderDemo />
      
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-30 will-change-transform [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              Non-alcoholic Cocktails
            </h1>
          </div>

          {/* First Text Block - Right aligned */}
          <div className="mb-16">
            <p className="text-2xl md:text-3xl italic text-muted-foreground max-w-3xl ml-auto text-right">
              We create non-alcoholic cocktail blends crafted with the cleanest ingredients — pure, refreshing, and free from unnecessary additives
            </p>
          </div>

          {/* Two Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Product Image - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/image1.png" 
                  alt="Non-alcoholic Cocktails Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Product Shot - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/pinacolada.png" 
                  alt="Pina Colada Mocktail Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Text Block - Full width */}
          <div className="mb-16">
            <p className="text-2xl md:text-3xl italic text-muted-foreground leading-relaxed max-w-4xl">
              We create premium non-alcoholic cocktails including Bloody Mary, Pina Colada, and Mango Margarita using only real fruit pulp and natural ingredients. No artificial additives, preservatives, or synthetic flavors — just pure, authentic taste that delivers the perfect cocktail experience without the alcohol.
            </p>
          </div>

        </div>
      </div>

      <NeswayFooter />
    </div>
  )
}
