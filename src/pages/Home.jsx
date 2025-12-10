import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import SectionTitle from '../components/SectionTitle';
import { bicycles, categories } from '../data/bicycles';
import ownerImage from '../images/2022-10-09.webp';

const Home = () => {
  const featuredBicycles = bicycles.filter((bike) => bike.isFeatured).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-stone-900 to-stone-700 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Home Intro-transcode.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide">
              Pedal Zone Bicycles
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 font-light">
              Crafted for the Road. Inspired by Tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20 mt-8">
              <Button to="/bicycles" variant="primary" className="text-lg px-8 py-3 !bg-amber-700 !text-white hover:!bg-amber-800 !shadow-xl !opacity-100">
                Shop Bicycles
              </Button>
              <Button to="/gallery" variant="secondary" className="text-lg px-8 py-3 !bg-white !border-white !text-stone-900 hover:!bg-stone-100 !shadow-xl !opacity-100">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bicycles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Bicycles"
            subtitle="Handpicked classics from our premium collection"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBicycles.map((bicycle) => (
              <ProductCard key={bicycle.id} item={bicycle} type="bicycle" />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/bicycles" variant="dark" className="text-lg px-8 py-3">
              View All Bicycles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Our Collection"
            subtitle="Discover the perfect bicycle for your journey"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Owner Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Meet the Owner"
            subtitle="Sandeep Cycle Traders | Pedal Zone Cycle Shop & EMOTORAD Electric E-Cycles Store"
          />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={ownerImage} 
                    alt="Owner - Sandeep Cycle Traders"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                    Owner of Pedal Zone Cycle Shop
                  </h3>
                  <div className="h-1 w-24 bg-amber-700 rounded mb-4"></div>
                  <p className="text-lg text-slate-600">
                    Sandeep Cycle Traders | EMOTORAD Electric E-Cycles Store
                  </p>
                </div>
                
                <div className="prose prose-lg text-slate-700 space-y-4">
                  <p className="text-lg leading-relaxed">
                    The owner of Pedal Zone Cycle Shop (Sandeep Cycle Traders) and EMOTORAD Electric 
                    E-Cycles Store is a highly accomplished cyclist with a proven track record of excellence 
                    in long-distance rides and competitive racing. With a deep passion for cycling and a 
                    commitment to promoting a healthy lifestyle, he has earned recognition across multiple 
                    cycling events.
                  </p>
                  <p className="text-lg leading-relaxed">
                    His dedication to cycling extends beyond personal achievements, inspiring many new riders 
                    in the community and actively contributing to the growth of cycling culture through both 
                    traditional and modern electric cycling solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Major Achievements */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in">
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-4xl">🏆</span>
                Major Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🚴</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      200 km Endurance Ride
                    </h4>
                    <p className="text-slate-600">
                      Completed 200 km endurance ride, demonstrating exceptional stamina, discipline, 
                      and determination.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🥇</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      1st Place Winner
                    </h4>
                    <p className="text-slate-600">
                      Secured 1st Place in several local and regional cycle races, showcasing competitive 
                      spirit and top-level performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">💪</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Multiple Endurance Challenges
                    </h4>
                    <p className="text-slate-600">
                      Successfully completed multiple long-distance and endurance cycling challenges, 
                      inspiring many new riders in the community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🏔️</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Versatile Competitor
                    </h4>
                    <p className="text-slate-600">
                      Recognized for consistent performance in both road cycling and off-road biking 
                      competitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards and Honors */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in">
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-4xl">🎖️</span>
                Awards & Honors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🏁</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Road Racing & Time Trial Excellence
                    </h4>
                    <p className="text-slate-600">
                      Awarded for outstanding results in Road Racing and Time Trial events.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🏃</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Cycling Marathon Recognition
                    </h4>
                    <p className="text-slate-600">
                      Honored in Cycling Marathons for exceptional speed, endurance, and consistency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Community Sports Excellence
                    </h4>
                    <p className="text-slate-600">
                      Received Community Sports Excellence Awards for promoting cycling culture and 
                      encouraging young riders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">
                      Cycling Associations Recognition
                    </h4>
                    <p className="text-slate-600">
                      Appreciated by various Cycling Clubs and Associations for active participation 
                      and contribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stores Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Pedal Zone Cycle Shop */}
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">🚴</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      Pedal Zone Cycle Shop
                    </h3>
                    <p className="text-amber-700 font-medium">Sandeep Cycle Traders</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">
                  A trusted name in premium bicycles, accessories, and maintenance services. 
                  The shop is known for:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>High-quality cycles for beginners to professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>Expert servicing & repairs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>Personalized guidance for riders of all levels</span>
                  </li>
                </ul>
              </div>

              {/* EMOTORAD Electric E-Cycles Store */}
              <div className="bg-gradient-to-br from-stone-900 to-stone-700 rounded-2xl shadow-xl p-8 text-white animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">⚡</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      EMOTORAD Electric E-Cycles Store
                    </h3>
                    <p className="text-amber-400 font-medium">Modern & Eco-Friendly</p>
                  </div>
                </div>
                <p className="text-stone-200 mb-6">
                  Your destination for modern, eco-friendly electric cycles offering:
                </p>
                <ul className="space-y-3 text-stone-100">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">✓</span>
                    <span>Advanced e-bikes with powerful performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">✓</span>
                    <span>Test rides, maintenance, and expert support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">✓</span>
                    <span>Perfect options for commuting, fitness, and long rides</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Our Story"
              subtitle="A legacy of craftsmanship spanning generations"
            />
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Founded in 1947 in the heart of London, Pedal Zone Bicycles began as a small
                  workshop where master craftsman Edward Morrison pursued his passion for creating
                  the perfect bicycle. What started with a single handmade frame has grown into
                  a renowned manufacturer of premium classic bicycles, beloved by cyclists worldwide.
                </p>
              <p className="text-lg leading-relaxed">
                Our philosophy has remained unchanged for over seven decades: every bicycle we
                create should be a perfect blend of timeless design, superior craftsmanship, and
                modern performance. We believe that a bicycle is more than just a means of
                transportation—it's a companion for life's adventures, a statement of style,
                and a joy to ride.
              </p>
                <p className="text-lg leading-relaxed">
                  Today, Pedal Zone bicycles are handcrafted by skilled artisans using traditional
                  techniques passed down through generations, combined with carefully selected modern
                  components. Each frame is built with meticulous attention to detail, ensuring that
                  every bicycle that leaves our workshop meets our exacting standards of quality and
                  beauty.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                Quality
              </h3>
              <p className="text-slate-600">
                We never compromise on quality. Every component is carefully selected, and every
                frame is built to last a lifetime.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                Craftsmanship
              </h3>
              <p className="text-slate-600">
                Traditional techniques meet modern precision. Our artisans take pride in every
                weld, every joint, every detail.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                Sustainability
              </h3>
              <p className="text-slate-600">
                We build bicycles that last generations, not seasons. Sustainable materials and
                timeless design reduce waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Visit our showroom or browse our collection online to find your perfect classic bicycle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/bicycles" variant="primary" className="text-lg px-8 py-3">
              Shop Now
            </Button>
            <Button to="/contact" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-stone-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

