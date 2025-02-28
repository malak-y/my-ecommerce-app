
const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-5">Home / About</div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-gray-600">
            Launched in 2021, Exclusive is South Asia’s premier online shopping
            site providing an easy and reliable shopping experience. We connect
            thousands of brands with millions of customers worldwide.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="your-about-image.png"
            alt="Our Story"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-bold">10.5k</h2>
          <p className="text-gray-500">Sales on our site</p>
        </div>
        <div className="p-6 border rounded-lg bg-red-500 text-white">
          <h2 className="text-2xl font-bold">33k</h2>
          <p>Monthly Product Sales</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-bold">45.5k</h2>
          <p className="text-gray-500">Customer sales on our site</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-bold">25k</h2>
          <p className="text-gray-500">Award gifts on our site</p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 shadow-lg rounded-lg">
            <img
              src="tom-cruise.jpg"
              alt="Tom Cruise"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-4">Tom Cruise</h3>
            <p className="text-gray-500">Founder & Chairman</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg">
            <img
              src="emma-watson.jpg"
              alt="Emma Watson"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-4">Emma Watson</h3>
            <p className="text-gray-500">Managing Director</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg">
            <img
              src="will-smith.jpg"
              alt="Will Smith"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-4">Will Smith</h3>
            <p className="text-gray-500">Product Designer</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center mt-16">
        <div className="p-4">
          <h3 className="text-lg font-bold">🚀 Free and Fast Delivery</h3>
          <p className="text-gray-500">Fast delivery service across all areas</p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">📞 24/7 Customer Service</h3>
          <p className="text-gray-500">Always available for your support</p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">💰 Money Back Guarantee</h3>
          <p className="text-gray-500">100% secure payments</p>
        </div>
      </div>

     
    </div>
  );
};

export default AboutPage;
