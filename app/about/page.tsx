import { HeaderDemo } from '@/components/header-demo'
import NeswayFooter from '@/components/nesway-footer'

export default function About() {
  return (
    <div className="relative min-h-screen">
      <HeaderDemo />
      

      {/* Main Content Container */}
      <div className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          
          {/* About Us Title */}
          <div className="mb-8">
            <h1 className="text-display text-foreground">
              About Us
            </h1>
          </div>

          {/* First Text Block - Right aligned */}
          <div className="mb-12">
            <p className="text-h4 italic text-muted-foreground max-w-4xl ml-auto text-right">
              Our journey began with a simple idea — to create everyday food and beverage solutions that are as authentic in taste as they are reliable in quality
            </p>
          </div>

          {/* Second Text Block - Full width */}
          <div className="mb-16">
            <p className="text-h3 text-foreground">
              <span className="font-bold">Our Purpose</span> is to make food that is better for people, for partners, and for the planet. We create clean-label, convenient, and great-tasting products that fit modern lifestyles without compromising on quality, nutrition, or safety.
            </p>
          </div>

          {/* Three Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="w-full h-80 md:h-96">
              <img 
                src="/images/about1.png" 
                alt="About Nesway Foods 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full h-80 md:h-96">
              <img 
                src="/images/about2.png" 
                alt="About Nesway Foods 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full h-80 md:h-96">
              <img 
                src="/images/about3.png" 
                alt="About Nesway Foods 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Third Text Block - Full width */}
          <div className="mb-16">
            <p className="text-h3 italic text-muted-foreground">
              We aim to be at the forefront of food innovation — continuously building capacity, expanding product categories, and scaling responsibly. By collaborating with global partners and adopting state-of-the-art technology, we will deliver food solutions that are not only convenient and shelf-stable, but also true to taste, nutrition, and the values of clean eating.
            </p>
          </div>

        </div>
      </div>

      <NeswayFooter />
    </div>
  )
}