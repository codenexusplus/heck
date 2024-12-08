import React from 'react';

const Home = () => {
  return (
    <div className="space-y-10">
      {/* Container 1 */}
      <div className="container mx-auto h-[876px] max-w-[1320px] flex items-center justify-center">
        <img src="/menu.svg" alt="Menu Section" className="w-full h-auto" />
      </div>

      {/* Container 2 */}
      <div className="container mx-auto h-[550px] max-w-[1320px] flex items-center justify-center">
        <img src="/chefs.svg" alt="Chefs Section" className="w-full h-auto" />
      </div>

      {/* Container 3 */}
      <div className="container mx-auto h-[622px] max-w-[1320px] flex items-center justify-center">
        <img src="/testim.svg" alt="Testimonials Section" className="w-full h-auto" />
      </div>

      {/* Container 4 */}
      <div className="container mx-auto h-[742px] max-w-[1320px] flex items-center justify-center">
        <img src="/blog2.svg" alt="Blog Section" className="w-full h-auto" />
      </div>

      {/* Container 5 */}
      <div className="container mx-auto h-[299px] max-w-[1320px] flex items-center justify-center">
        <img src="/clients.svg" alt="Clients Section" className="w-full h-auto" />
      </div>

      {/* Footer (Container 6) */}
      <div className="container mx-auto h-[700px] max-w-[2006px] flex items-center justify-center">
        <img src="/f3.svg" alt="Footer Section" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;
