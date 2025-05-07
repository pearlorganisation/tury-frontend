import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  {
    title: "360 Reservation Management",
    title2:"Comprehensive Service for your Tourist Properties",
    description:
      "We offer a comprehensive service that includes listing creation and optimization on platforms like Airbnb and Booking.com, 24/7 customer service, dynamic rate management, availability control to avoid double bookings, and regular reporting on your property's performance.",
    image: "https://turyhost.com/wp-content/uploads/2025/02/Diseno-sin-titulo-5.png",
  },
  {
    title: "Dynamic Pricing",
    title2:"Maximize Your Revenue with Pricing Strategies",
    description:
      "We implement dynamic pricing strategies that adjust your property's rates in real time, optimizing prices based on market demand, seasonality, and local events to maximize your revenue and ensure optimal occupancy.",
    image: "https://turyhost.com/wp-content/uploads/2024/11/Diseno-sin-titulo-13.png",
  },
  {
    title: "Digital Tourism Marketing",
    title2:"Boost Your Visibility and Attract More Guests",
    description:
      "We develop customized digital marketing strategies that include social media management, online advertising, and search engine optimization (SEO) to increase your property's visibility and attract more guests, ensuring a strong presence in the competitive tourism market.",
    image: "https://turyhost.com/wp-content/uploads/2024/11/Diseno-sin-titulo-12.png",
  },
  {
    title: "Personalized Communication",
    title2:"Connect with your guests in a unique way",
    description:
      "We offer a personalized communication approach that ensures every guest feels valued and cared for. From reservation confirmation to post-stay follow-up, we ensure every interaction is warm and effective, enhancing the guest experience and fostering loyalty.",
    image: "https://turyhost.com/wp-content/uploads/2024/11/Diseno-sin-titulo-11.png",
  },
  {
    title: "Creators of Premium Experiences",
    title2:"We transform stays into unforgettable memories",
    description:
      "We design unique and memorable experiences for your guests, personalizing every detail to their preferences. From exclusive activities to local recommendations, our goal is to exceed expectations and offer a level of service that makes every stay an exceptional experience.",
    image: "https://turyhost.com/wp-content/uploads/2024/11/Diseno-sin-titulo-10.png",
  },
  {
    title: "Check-in/Out 24/7",
    title2:"Flexibility and Comfort for your Guests",
    description:
      "We offer 24/7 check-in and check-out. This allows your guests to arrive and depart at their convenience, enhancing the overall experience and ensuring their needs are met at all times, regardless of the time.",
    image: "https://turyhost.com/wp-content/uploads/2024/11/Diseno-sin-titulo-9.png",
  },
  {
    title: "Premium Cleaning and Laundry",
    title2:"Impeccable Rooms for a Superior Experience",
    description:
      "Our premium cleaning and laundry service ensures that every corner of your property is in optimal condition to welcome guests. We use high-quality products and efficient techniques to ensure a thorough cleaning, along with a laundry service that includes fresh linens and towels, providing a welcoming and comfortable environment for every stay.",
    image: "https://turyhost.com/wp-content/uploads/2024/11/Diseno-sin-titulo-8.png",
  },
  {
    title: "Comprehensive Maintenance",
    title2:"Take care of your property with quality services",
    description:
      "We offer a comprehensive maintenance service that covers all your property needs, from minor repairs to preventative maintenance. Our team of professionals ensures every aspect of your property runs smoothly, maintaining a safe and comfortable environment for your guests and preserving the value of your investment.",
    image: "https://turyhost.com/wp-content/uploads/2024/11/Diseno-sin-titulo-15.png",
  },
];

export default function Benifits() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % rooms.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-[#dcdee0] p-6 rounded-lg shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={rooms[index].image}
              alt={rooms[index].title}
              className="w-full md:w-1/2 h-72 object-cover rounded-lg"
            />
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">{rooms[index].title2}</h3>
              <h2 className="text-2xl font-semibold">{rooms[index].title}</h2>
              
              <p className="text-gray-600">{rooms[index].description}</p>
              <a href="#" className="text-sm text-black underline hover:text-gray-700">
                Discover More →
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={prev} className="p-2 bg-white shadow rounded-full hover:bg-gray-100">
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={next} className="p-2 bg-white shadow rounded-full hover:bg-gray-100">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
