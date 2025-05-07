export default function PartnersMarquee() {
    const logos = [
      "logo1.jpg",
      "logo2.jpg",
      "logo3.jpg",
      "logo4.jpg",
      "logo5.jpg",
      "logo6.jpg",
      "logo7.jpg",
      "logo8.jpg",
      "logo9.jpg",
      "logo10.jpg",
    ];
  
    return (
      <div className="bg-[#fdf3e3] py-12 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">Partners</h2>
        <p className="text-center text-gray-700 mb-8">
          At Turyhost, we partner with industry leaders to offer you excellent service:
        </p>
  
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap space-x-12">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={`/images/${logo}`}
                alt={`Partner logo ${index}`}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
  
        {/* Tailwind + custom keyframe animation */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}
        </style>
      </div>
    );
  }
  