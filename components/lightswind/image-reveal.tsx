// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { MoveUpRight as ArrowIcon } from "lucide-react";
// import Image from "next/image";

// interface VisualItem {
//   id: number;
//   title: string;
//   description: string;
//   stack: string;
//   image: string;
//   link: string;
// }

// const visualData: VisualItem[] = [
//   {
//     id: 1,
//     title: "Astrel",
//     description:
//       "A performant spreadsheet-like web application inspired by Excel, focused on keyboard navigation and large data handling.",
//     stack: "Next.js / Tailwind CSS / Node.js / MongoDB",
//     image: "/projects/astrel.jpg",
//     link: "https://github.com/hkumar1403/Workbook",
//   },
//   {
//     id: 2,
//     title: "Codexa",
//     description:
//       "A browser-based IDE for HTML, CSS, and JavaScript, built to explore how online code editors work under the hood.",
//     stack: "Next.js / Tailwind CSS / Monaco Editor",
//     image: "/projects/codexa.jpg",
//     link: "https://codexa-lemon.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Nitrolube",
//     description:
//       "Built a clean, responsive website for an automotive lubricants brand using Next.js and Tailwind CSS.",
//     stack: "Next.js / Tailwind CSS",
//     image: "/projects/nitrolube.jpg",
//     link: "https://www.nitrolube.co.in/",
//   },
// ];

// const ImageReveal: React.FC = () => {
//   const [focusedItem, setFocusedItem] = useState<VisualItem | null>(null);
//   const [isLargeScreen, setIsLargeScreen] = useState(true);

//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);
//   const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
//   const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

//   useEffect(() => {
//     const updateScreen = () => {
//       setIsLargeScreen(window.innerWidth >= 768);
//     };
//     updateScreen();
//     window.addEventListener("resize", updateScreen);
//     return () => window.removeEventListener("resize", updateScreen);
//   }, []);

//   const onMouseTrack = (e: React.MouseEvent) => {
//     cursorX.set(e.clientX);
//     cursorY.set(e.clientY);
//   };

//   const onHoverActivate = (item: VisualItem) => {
//     setFocusedItem(item);
//   };

//   const onHoverDeactivate = () => {
//     setFocusedItem(null);
//   };

//   return (
//     <div
//       className="relative mx-auto w-full min-h-fit bg-background rounded-md border overflow-hidden"
//       onMouseMove={onMouseTrack}
//       onMouseLeave={onHoverDeactivate}
//     >
//       {visualData.map((item) => (
//         <div
//           key={item.id}
//           className="p-4 cursor-pointer relative sm:flex items-center justify-between"
//           onMouseEnter={() => onHoverActivate(item)}
//         >
//           {!isLargeScreen && (
//             <img
//               src={item.image}
//               className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
//               alt={item.title}
//             />
//           )}
//           <h2
//             className={`newFont uppercase md:text-5xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative transition-colors duration-300 ${
//               focusedItem?.id === item.id
//                 ? "mix-blend-difference z-20 text-gray-300"
//                 : "text-foreground"
//             }`}
//           >
//             {item.title}
//           </h2>
//           <button
//             className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
//               focusedItem?.id === item.id
//                 ? "mix-blend-difference z-20 bg-white text-black"
//                 : ""
//             }`}
//           >
//             <ArrowIcon className="w-8 h-8" />
//           </button>
//           <div
//             className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
//               focusedItem?.id === item.id ? "w-full" : "w-0"
//             }`}
//           />
//         </div>
//       ))}

//       {isLargeScreen && focusedItem && (
//         <motion.img
//           src={focusedItem.link}
//           alt={focusedItem.title}
//           className="fixed z-30 object-cover w-[300px] h-[400px] rounded-lg pointer-events-none shadow-2xl dark:bg-gray-950 bg-white"
//           style={{
//             left: smoothX,
//             top: smoothY,
//             x: "-50%",
//             y: "-50%",
//           }}
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageReveal;
