
// import { useState, useEffect } from "react"
// import { useTranslation } from "react-i18next"
// import { RiArrowDropDownLine } from "react-icons/ri"
// import { motion } from "framer-motion"
// import "../../css/banner.css"

// function Banner() {
//   const { t } = useTranslation()
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

//   useEffect(() => {
//     // Trigger animations after component mounts
//     setIsVisible(true)
//   }, [])

//   const navLinks = (
//     <>
//       {["reserve", "us", "services", "rates"].map((item) => (
//         <div key={item} className="group relative flex cursor-pointer">
//           <span className="uppercase font-light tracking-wider">{t(item)}</span>
//           <span className="ml-1 pt-1">
//             <RiArrowDropDownLine />
//           </span>
//         </div>
//       ))}
//       <div className="cursor-pointer uppercase font-light tracking-wider">{t("experiences")}</div>
//       <div className="group relative flex cursor-pointer">
//         <span className="uppercase font-light tracking-wider">{t("blog")}</span>
//         <span className="ml-1 pt-1">
//           <RiArrowDropDownLine />
//         </span>
//       </div>
//     </>
//   )

//   return (
//     <div className="relative min-h-screen font-serif text-white">
//       {/* Background Video */}
//       <div className="absolute inset-0 min-h-screen z-0">
//         <video
//           src="https://collectionist.s3.eu-west-1.amazonaws.com/production/assets/homepage/2025/video-summer-2025-desktop-3.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//         />
//         {/* Centered from bottom */}
//         <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] bg-black/75 w-[80%] h-[70%]" />
//       </div>


//       {/* Center Logo */}
//       <div className="relative z-10 flex pt-36 flex-col items-center text-center px-4 banner-content">
//         <motion.img
//           src="assets/logo/logo.png"
//           alt="Logo"
//           className="banner-logo mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{
//             opacity: isVisible ? 1 : 0,
//             y: isVisible ? 0 : -20,
//             filter: "drop-shadow(0 0 15px rgba(0, 224, 187, 0.3))",
//           }}
//           transition={{
//             duration: 1.2,
//             ease: "easeOut",
//           }}
//         />

//         {/* Luxury Buttons Container */}
//         <motion.div
//           className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-12 banner-buttons-container"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isVisible ? 1 : 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           {/* Property Owners Button */}
//           <motion.div
//             className="luxury-button-container"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <div className="luxury-button luxury-button-left">
//               <div className="luxury-button-gradient">
//                 <span className="luxury-button-text">Property Owners</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Rent an Apartment Button */}
//           <motion.div
//             className="luxury-button-container"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <div className="luxury-button luxury-button-right">
//               <div className="luxury-button-gradient">
//                 <span className="luxury-button-text">Rent an Apartment</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Tagline */}
//         <motion.div
//           className="mt-12 text-xl md:text-2xl font-light tracking-widest banner-tagline"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           {/* <span className="italic">Discover Luxury in Barcelona</span> */}
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default Banner


import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "../../css/banner.css"

function Banner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen font-serif text-white">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 min-h-screen z-0">
        <video
          src="https://collectionist.s3.eu-west-1.amazonaws.com/production/assets/homepage/2025/video-summer-2025-desktop-3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[0%] bg-black/53 w-[64%] h-[88%]" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex pt-56 flex-col items-center text-center px-4 banner-content">

        <div className="text-amber-600 flex flex-row justify-center items-center gap-3 text-xs">
          <div className="h-[2px] w-16 bg-white "></div>
          <div className="text-amber-600">TURY HOST — For the Homes You Own and the Places You Roam.</div>
        </div>
        {/* Logo */}
        <motion.div
          className="w-full h-52 mb-6 mask-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -20,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <video
            src="https://collectionist.s3.eu-west-1.amazonaws.com/production/assets/homepage/2025/video-summer-2025-desktop-3.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
          {/* <motion.img
          src="assets/logo/logo.png"
          alt="Logo"
          className="banner-logo mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -20,
            filter: "drop-shadow(0 0 15px rgba(0, 224, 187, 0.3))",
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />
 */}

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-12 banner-buttons-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {["Property Owners", "Rent an Apartment"].map((label, index) => (
            <motion.div
              key={label}
              className="luxury-button-container"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`luxury-button ${index === 0 ? "luxury-button-left" : "luxury-button-right"}`}>
                <div className="luxury-button-gradient">
                  <span className="luxury-button-text">{label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Tagline */}
        {/* <motion.div
          className="mt-12 text-xl md:text-2xl font-light tracking-widest banner-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="italic">Discover Luxury in Barcelona</span>
        </motion.div> */}


       
      </div>

     
    </div>
  )
}

export default Banner

