import { HeaderDemo } from '@/components/header-demo'
import NeswayFooter from '@/components/nesway-footer'

export default function Mocktails() {
  return (
    <div className="relative min-h-screen">
      <HeaderDemo />
      

      {/* Main Content Container */}
      <div className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-display text-foreground">
              Non-alcoholic Cocktails
            </h1>
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
            <p className="text-h4 text-muted-foreground leading-relaxed max-w-4xl">
              We create premium non-alcoholic cocktails including Bloody Mary, Pina Colada, and Mango Margarita using only real fruit pulp and natural ingredients. No artificial additives, preservatives, or synthetic flavors — just pure, authentic taste that delivers the perfect cocktail experience without the alcohol.
            </p>
          </div>

        </div>
      </div>

      <NeswayFooter />
    </div>
  )
}
