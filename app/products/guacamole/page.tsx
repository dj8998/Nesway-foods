import { HeaderDemo } from '@/components/header-demo'
import NeswayFooter from '@/components/nesway-footer'

export default function Guacamole() {
  return (
    <div className="relative min-h-screen">
      <HeaderDemo />
      

      {/* Main Content Container */}
      <div className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-display text-foreground">
              Guacamole
            </h1>
          </div>

          {/* First Text Block - Right aligned */}
          <div className="mb-16">
            <p className="text-h4 italic text-muted-foreground max-w-3xl ml-auto text-right">
              Fresh, flavorful guacamole made from premium avocados. Perfect for dips, spreads, and healthy snacking with authentic Mexican taste.
            </p>
          </div>

          {/* Two Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Product Image - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/guac1.png" 
                  alt="Guacamole Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Product Shot - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/guaca2.png" 
                  alt="Guacamole Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Text Block - Full width */}
          <div className="mb-16">
            <p className="text-h4 text-muted-foreground leading-relaxed max-w-4xl">
              We create premium guacamole varieties including Classic, Spicy Jalapeño, and Chunky Style using traditional Mexican recipes and the finest Hass avocados. Our natural ingredients deliver creamy, flavorful texture perfect for dips, spreads, and healthy snacking with an impressive shelf life of up to 1 year at ambient temperature — authentic taste, zero compromise on traditional preparation methods.
            </p>
          </div>

        </div>
      </div>

      <NeswayFooter />
    </div>
  )
}