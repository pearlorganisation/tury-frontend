import React from 'react';
import Service from "../../assets/home/services.png"
import {
  FaShuttleVan,
  FaWifi,
  FaUtensils,
  FaBroom,
  FaTshirt,
  FaParking
} from 'react-icons/fa';

const services = [
  { icon: <FaShuttleVan className="text-[#c69c6d] text-2xl" />, title: ' Personalized attention:' },
  { icon: <FaBroom className="text-[#c69c6d] text-2xl" />, title: 'Maximum profitability: ' },
  { icon: <FaWifi className="text-[#c69c6d] text-2xl" />, title: ' Flexible and stress-free check-ins:' },
  { icon: <FaTshirt className="text-[#c69c6d] text-2xl" />, title: 'Dynamic real-time pricing: ' },
  { icon: <FaUtensils className="text-[#c69c6d] text-2xl" />, title: 'Comprehensive or service-based management:' },
  { icon: <FaParking className="text-[#c69c6d] text-2xl" />, title: 'Housekeeper Services' },
];

const Services = () => {
  return (
    <section className="bg-[#ffffff] ml-6 py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="uppercase text-xl tracking-widest text-gray-800 mb-4">
          We increase your income and simplify your life
          </p>
          <h2 className="text-4xl font-serif text-gray-900 leading-snug mb-10">
          We offer a personalized service that maximizes your income without complications. Here's what sets us apart:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                {service.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum proin gravida velit auctor sde re sit amet space.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div>
          <img
            src={Service}
            alt="Breakfast in Bed"
            className="rounded-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
