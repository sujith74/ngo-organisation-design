
'use client'

import React from 'react';
import { useState, useRef,useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import StarIcon from '@mui/icons-material/Star'
import { 
  Avatar, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Typography,
  Box,
  IconButton
} from '@mui/material';
import { 
  School, 
  Fastfood, 
  VolunteerActivism, 
  Balance, 
  MedicalServices,
  EmojiPeople 
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { 
  UtensilsCrossed, 
  GraduationCap, 
  Stethoscope, 
  Droplets, 
  Scale, 
  Users,
  ArrowRight,
  ChevronRight, Heart, BookOpen, Activity, 
  Rocket,
  Handshake

} from 'lucide-react';
import { motion } from 'framer-motion';
import { InitiativesSection } from './components/InitiativesSection';
import { PaletteProvider, usePalette } from './context/PaletteContext.jsx';

const MotionCard = motion(Card);
const MotionImage = motion(Image);


const CharityWebsite = () => {
  
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { palettes } = usePalette();


  // const causesData = [
  //   { image: "https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg", title: "Sun Harmony School Supports", goal: 65000, raised: 37000, category: "Education" },
  //   { image: "https://cdn.pixabay.com/photo/2016/11/29/13/08/skateboard-1869727_1280.jpg", title: "Joyful Minds Medical Volunteers", goal: 32000, raised: 25000, category: "Healthcare" },
  //   { image: "https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330_1280.jpg", title: "Educating Minds, Empowering Lives", goal: 46000, raised: 20000, category: "Education" },
  //   { image: "https://cdn.pixabay.com/photo/2016/02/13/04/28/new-steps-in-peru-1197329_1280.jpg", title: "Empowering Children's Learning", goal: 55000, raised: 18000, category: "Children" },
  //   { image: "https://cdn.pixabay.com/photo/2017/01/10/03/06/water-1968805_1280.jpg", title: "Clean Water for Rural Communities", goal: 42000, raised: 32000, category: "Environment" },
  //   { image: "https://cdn.pixabay.com/photo/2015/07/02/10/23/writing-828911_1280.jpg", title: "Adult Literacy Program", goal: 38000, raised: 15000, category: "Education" },
  //   { image: "https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg", title: "Women Entrepreneurship Initiative", goal: 50000, raised: 28000, category: "Women" },
  //   { image: "https://cdn.pixabay.com/photo/2016/11/22/19/25/hands-1850120_1280.jpg", title: "Disaster Relief Fund", goal: 75000, raised: 45000, category: "Emergency" }
  // ];

  // const displayedCauses = showAll || pathname === '/initiatives' ? causesData : causesData.slice(0, 4);

  function ServiceCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const { palettes } = usePalette();
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="h-full"
      >
        <div
          className="relative bg-white p-8 h-full flex flex-col border border-gray-100 overflow-hidden transition-shadow duration-300"
          style={{
            borderRadius: palettes.card.radius,
            boxShadow: palettes.card.shadow,
            fontSize: palettes.card.textSize,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background shape */}
          <div
            className={`absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-10 ${service.color}`}
          ></div>
  
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center bg-amber-600 justify-center text-white mb-6 `}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {service.icon}
          </motion.div>
  
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            {service.title}
          </h3>
  
          {/* Description */}
          <p className="text-gray-600 mb-6 flex-grow">
            {service.desc}
          </p>
  
          {/* Learn More Button */}
          <motion.button
            className="flex items-center mt-auto text-amber-600 font-medium group"
            animate={{ x: isHovered ? 5 : 0 }}
            onClick={() => window.location.href = "https://program-page-pearl.vercel.app/"}
          >
            Learn More
            <motion.span
              className="ml-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16}  />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    );
  }

  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "https://next-app-about-us.vercel.app/" },
    { name: "Projects", href: "/projects" },
    { name: "Custom-Ui", href: "/custom-ui" },
    { name: "Contact", href: "/contact" },
    { name: "LogIn", href: "/LogIn" }
  ];



  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: (percent) => ({
      width: `${percent}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.4 }
    }
  };

  const services = [
    { 
      icon: <UtensilsCrossed size={24} />, 
      title: "Healthy Food", 
      desc: "Providing nutritional food support to underprivileged families for their everyday needs.",
      color: "bg-amber-500" 
    },
    { 
      icon: <GraduationCap size={24} />, 
      title: "Education", 
      desc: "Providing quality education to needy children to empower their future.",
      color: "bg-emerald-500" 
    },
    { 
      icon: <Stethoscope size={24} />, 
      title: "Health Care", 
      desc: "Creating a healthier life for the young members of our communities with regular checkups.",
      color: "bg-blue-500" 
    },
    { 
      icon: <Droplets size={24} />, 
      title: "Pure Water", 
      desc: "Ensuring clean water access for communities facing water scarcity.",
      color: "bg-cyan-500" 
    },
    { 
      icon: <Scale size={24} />, 
      title: "Legal Aid", 
      desc: "Providing legal assistance to those who cannot afford representation.",
      color: "bg-purple-500" 
    },
    { 
      icon: <Users size={24} />, 
      title: "Social Activities", 
      desc: "Creating inclusive community events that foster connection and support.",
      color: "bg-rose-500" 
    }
  ];

  // const palettes = {
  //   primary: {
  //     light: "#4C9F38",
  //     main: "#4C9F38",
  //     dark: "#4C9F38",
  //     contrastText: "#fff"
  //   },
  //   secondary: {
  //     light: "#eecd5e",
  //     main: "#E9BD29",
  //     dark: "#d5a916",
  //     contrastText: "#000"
  //   }
  // };

//   const srcDoc = `
//   <html>
//     <head>
//       <style>${cssCode}</style>
//     </head>
//     <body>
//       ${htmlCode}
//       <script>${jsCode}<\/script>
//     </body>
//   </html>
// `;
// const [srcDoc, setSrcDoc] = useState('');
// useEffect(() => {
//   if (!srcDoc) return;

//   const container = document.getElementById('custom-content-container');
//   if (!container) return;

//   // Clear old content
//   container.innerHTML = '';

//   // Create a style element for CSS
//   const style = document.createElement('style');
//   style.innerHTML = cssCode || '';

//   // Create a div for HTML content
//   const htmlWrapper = document.createElement('div');
//   htmlWrapper.innerHTML = htmlCode || '';

//   // Create a script tag for JS (optional)
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.innerHTML = jsCode || '';

//   // Append to container
//   container.appendChild(style);
//   container.appendChild(htmlWrapper);
//   container.appendChild(script);
// }, [srcDoc, htmlCode, cssCode, jsCode]);


  
  return (
    
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-gradient-to-r from-amber-800 to-amber-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo with animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-amber-200">Joyful</span>
              <span className="text-white">Minds</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
  {navLinks.map((link, index) => {
    const isExternal = link.href.startsWith("http");
    return (
      <motion.div
        key={link.name}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {isExternal ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-white hover:bg-amber-600/50 hover:text-amber-100 transition-all duration-300 font-medium text-sm"
          >
            {link.name}
          </a>
        ) : (
          <Link
            href={link.href}
            className="px-4 py-2 rounded-lg text-white hover:bg-amber-600/50 hover:text-amber-100 transition-all duration-300 font-medium text-sm"
          >
            {link.name}
          </Link>
        )}
      </motion.div>
    );
  })}
</nav>


          {/* CTA Button with pulse animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
           <Button 
  variant="contained" 
  style={{
    backgroundColor: palettes.secondary.main,
    color: palettes.secondary.contrastText,
    borderRadius:palettes.secondary.radius,
    fontSize: palettes.secondary.size,
  }}
  // className="font-bold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"

>
  Donate Now
</Button>

          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-amber-700 px-4 pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-white hover:bg-amber-600/50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="contained" 
                className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold mt-2 py-3 rounded-lg"
              >
                Contact Now
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen min-h-[600px] bg-gradient-to-br from-amber-900 to-amber-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 bg-[url('/images/dots-pattern.png')] opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-600/20"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography 
                variant="h6" 
                className="font-light mb-2  tracking-widest uppercase text-sm"
              >
                Uniting Hearts, Changing Lives
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typography 
                variant="h1" 
                className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
                sx={{ fontFamily: palettes.text.headingFont, fontWeight: palettes.text.headingWeight }}
              >
                <span className="text-amber-200">Empowering</span> Every Child's Potential
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Typography 
                variant="body1" 
                className="!mb-8 max-w-lg text-lg leading-relaxed"
              sx={{ fontFamily: palettes.text.subheadingFont, fontWeight: palettes.text.subheadingFont, color:'#E6EDE7' }}

              >
                At Joyful Minds, we believe in the unique potential of every child. Our mission is to help them thrive through personalized support and community-driven programs.
              </Typography>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               <Button 
  variant="contained" 
  style={{
    backgroundColor: palettes.secondary.main,
    color: palettes.secondary.contrastText,
    borderRadius:palettes.secondary.radius,
    fontSize: palettes.secondary.size,
  }}
  className="font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
>
  Donate Now
</Button>

              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outlined" 
                  className="border-2   hover:bg-amber-300/10 font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all"
                  sx={{color: 'white', borderColor:'#fff'}}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image - Right Side */}
          <motion.div 
            className="hidden lg:block absolute right-0 top-0 h-full w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative h-full w-full">
              <Image 
                src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Happy children learning"
                layout="fill"
                objectFit="cover"
                className="object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-amber-900/70 to-amber-900/20" />
            </div>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-amber-300 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-white">
  {/* Shared container for consistent alignment */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <Typography
        variant="h4"
        component="h2"
        className="text-3xl font-bold mb-4 text-gray-800"
        sx={{
          fontFamily: palettes.text.headingFont,
          fontWeight: palettes.text.headingWeight,
        }}
      >
        Our Services
      </Typography>
      <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
      <Typography
        className="text-gray-600 mx-auto text-center"
        sx={{
          fontFamily: palettes.text.subheadingFont,
          fontWeight: palettes.text.subheadingFont,
          textAlign: 'center',
        }}
      >
        We're dedicated to making a positive impact through these essential services
      </Typography>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  </div>
</section>

{/* Featured Causes / Initiatives Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    {/* The InitiativesSection should also follow the same padding structure */}
    <InitiativesSection />
  </div>
</section>


      {/* Impact Section */}
      <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Gallery Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-6 gap-4 relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main image */}
              <motion.div 
                className="col-span-4 row-span-2 relative h-64 md:h-80 shadow-xl rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_1280.jpg" 
                  alt="Community support" 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-white font-medium text-sm bg-amber-600 px-3 py-1 rounded-full">Community</span>
              </motion.div>
              
              {/* Smaller images */}
              <motion.div 
                className="col-span-2 relative h-40 shadow-lg rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="https://cdn.pixabay.com/photo/2015/10/18/14/10/smoke-994491_1280.jpg" 
                  alt="Children getting support" 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute bottom-2 right-2 text-white font-medium text-xs bg-amber-600/80 px-2 py-0.5 rounded-full">Support</span>
              </motion.div>
              
              <motion.div 
                className="col-span-2 relative h-40 shadow-lg rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="https://cdn.pixabay.com/photo/2019/08/10/22/34/table-4397860_1280.jpg" 
                  alt="Volunteers helping" 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute bottom-2 right-2 text-white font-medium text-xs bg-amber-600/80 px-2 py-0.5 rounded-full">Volunteers</span>
              </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-amber-200 opacity-20 blur-3xl z-0"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber-400 opacity-10 blur-xl z-0"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-block mb-2 px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Making A Difference</div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              How you're <span className="text-amber-600">changing</span> children's lives
            </h2>
            
            <p className="text-gray-600 mb-8">
              Through your generous contributions, we're creating lasting impact in communities worldwide.
            </p>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-amber-500"
              >
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <Activity size={20} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">Health & Wellbeing</h3>
                  <p className="text-gray-600 text-sm">
                    Through regular medical checkups and nutritional support, we're helping children stay healthy and thrive.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-amber-500"
              >
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <BookOpen size={20} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-800">Education</h3>
                  <p className="text-gray-600 text-sm">
                    Our programs provide quality education and learning materials to children in underprivileged communities.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  style={{
    backgroundColor: palettes.secondary.main,
    color: palettes.secondary.contrastText,
    borderRadius:palettes.secondary.radius,
    fontSize: palettes.secondary.size,
  }}
  className="px-6 py-3 font-medium rounded-lg shadow-lg flex items-center justify-center transition-all"
>
  <Heart size={18} className="mr-2" />
  Donate Now
</motion.button>


              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border-2 border-amber-500 text-amber-600 font-medium rounded-lg flex items-center justify-center"
              >
                Learn More
                <ChevronRight size={18} className="ml-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Volunteers Section */}
      <section className="py-20 bg-white relative overflow-hidden ">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-300 blur-xl"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-amber-200 blur-xl"></div>
  </div>

  <Container>
    {/* Section header with animation */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <Typography 
        variant="h3" 
        component="h2" 
        className="text-center font-bold mb-4 text-transparent container mx-auto px-4 sm:px-6 lg:px-8 "
        sx={{ fontFamily: palettes.text.headingFont, fontWeight: palettes.text.headingWeight, color : ' #363636' }}

      >
        Our Dream Team
      </Typography>
      <Typography 
        variant="body1" 
        className="text-center text-gray-600  mx-auto text-lg"
    sx={{ fontFamily: palettes.text.subheadingFont, fontWeight: palettes.text.subheadingFont }}

      >
        The passionate individuals who make our mission possible every day
      </Typography>
    </motion.div>
    
    {/* Volunteer cards */}
    <Grid container spacing={6}>
      {[
        { 
          name: "Nick Peterson", 
          role: "Program Lead", 
          image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
          social: ["twitter", "linkedin"]
        },
        { 
          name: "Emma Anderson", 
          role: "Education Lead", 
          image: "https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_1280.jpg",
          social: ["instagram", "linkedin"]
        },
        { 
          name: "Michael Clark", 
          role: "Support Lead", 
          image: "https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg",
          social: ["twitter", "github"]
        },
        { 
          name: "Casey Henderson", 
          role: "Regional Lead", 
          image: "https://cdn.pixabay.com/photo/2021/10/14/11/04/castle-6708761_1280.jpg",
          social: ["facebook", "linkedin"]
        }
      ].map((volunteer, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative pt-8 px-8">
                <div className="relative w-40 h-40 mx-auto">
                  <Avatar 
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-full h-full object-cover border-4 border-white shadow-lg group-hover:border-amber-200 transition-all duration-300"
                    sx={{ 
                      width: 160, 
                      height: 160,
                      '&:hover': {
                        transform: 'scale(1.03)'
                      }
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-amber-300/30 transition-all duration-500"></div>
                </div>
              </div>
              
              <CardContent className="text-center px-6 pb-8">
                <Typography variant="h5" className="font-bold text-gray-900 mb-1">
                  {volunteer.name}
                </Typography>
                <Typography variant="body2" className="text-amber-600 font-medium mb-4">
                  {volunteer.role}
                </Typography>
                
                <div className="flex justify-center space-x-3">
                  {volunteer.social.map((platform, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3 }}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                    >
                      {/* <span className="text-sm">{platform === 'twitter' ? '🐦' : 
                        platform === 'linkedin' ? '🔗' : 
                        platform === 'instagram' ? '📷' : 
                        platform === 'github' ? '💻' : '👍'}</span> */}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>

    {/* CTA at bottom */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
<Button
  variant="contained"
  style={{
    backgroundColor: palettes.secondary.main,
    color: palettes.secondary.contrastText,
    borderRadius:palettes.secondary.radius,
    fontSize: palettes.secondary.size,
  }}
  className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundImage = ` ${palettes.secondary.dark})`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundImage = `${palettes.secondary.main})`;
  }}
  endIcon={<span>→</span>}
>
  Join Our Team
</Button>
    </motion.div>
  </Container>
</section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <Container>
          <Box className="relative rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <Image 
                src="https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_1280.jpg" 
                alt="Charity work video thumbnail" 
                layout="fill" 
                objectFit="cover" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <IconButton className="bg-white/80 hover:bg-white p-4">
                  <Box className="text-amber-500">
                    {/* Play icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                    </svg>
                  </Box>
                </IconButton>
              </div>
            </div>
          </Box>
        </Container>
      </section>

      {/* Testimonials */}
      <Box className="py-20 "  sx={{ backgroundColor:'#F4F7F5' }}>
  <Container>
  <div className="text-center mb-16 w-full flex flex-col items-center">
  <Typography 
    variant="h3" 
    component="h2" 
    className="font-bold mb-4 text-transparent"
    sx={{ fontFamily: palettes.text.headingFont, fontWeight: palettes.text.headingWeight,color:'#D97706' }}

  >
    Voices of Impact
  </Typography>
  
  <Typography 
    variant="body1" 
    className="text-gray-600 text-lg max-w-2xl" 
    style={{ textAlign: 'center' }}
    sx={{fontFamily: palettes.text.subheadingFont, fontWeight: palettes.text.subheadingWeight }}
  >
    Hear from those who've experienced our work firsthand
  </Typography>
</div>

    
    <Grid container spacing={6}>
      {[
        { 
          name: "Sarah Robertson", 
          role: "School Principal",
          text: "Joyful Minds is doing a fantastic job in the field of education, our school children get to know so many things during this program.",
          img: "/images/avatar1.jpg" 
        },
        { 
          name: "David Wilson", 
          role: "Community Leader",
          text: "The support provided by Joyful Minds has transformed our community. The children are thriving like never before.",
          img: "/images/avatar2.jpg"
        },
        { 
          name: "Peter Olson", 
          role: "Donor & Supporter",
          text: "As a donor, I can see the real impact my contributions are making. The transparency and dedication of this organization is impressive.",
          img: "/images/avatar3.jpg"
        }
      ].map((testimonial, index) => (
        <Grid item xs={12} md={4} key={index}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="flex flex-col h-full p-8">
                <div className="mb-6">
                  <div className="flex gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed relative">
                    <span className="absolute -left-1 -top-4 text-5xl text-violet-100 font-serif">"</span>
                    {testimonial.text}
                  </Typography>
                </div>
                
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <Avatar className="mr-4 w-14 h-14 border-2 border-white shadow-sm" src={testimonial.img}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <div>
                    <Typography variant="body2" className="font-bold text-gray-900">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" className="text-gray-500">
                      {testimonial.role}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
    
    <div className="text-center mt-16">
      <Button 
        variant="contained" 
        style={{
          backgroundColor: palettes.secondary.main,
          color: palettes.secondary.contrastText,
          borderRadius:palettes.secondary.radius,
          fontSize: palettes.secondary.size,
        }}
        className="  px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        Share Your Story
      </Button>
    </div>
  </Container>
</Box>

      {/* Stats */}
      <Box className="py-16 bg-gray-200"
      sx={{ backgroundColor:'#F4F7F5' }}>
  <Container>
    <Grid container spacing={4} className="justify-center">
      {[
  {
    value: "580",
    label: "Volunteers",
    icon: (
      <div className="bg-amber-100 p-2 rounded-lg mr-4">
        <Users size={20} className="text-amber-600" />
      </div>
    ),
  },
  {
    value: "980",
    label: "Donations",
    icon: (
      <div className="bg-amber-100 p-2 rounded-lg mr-4">
        <Heart size={20} className="text-amber-600" />
      </div>
    ),
  },
  {
    value: "887",
    label: "Projects",
    icon: (
      <div className="bg-amber-100 p-2 rounded-lg mr-4">
        <Rocket size={20} className="text-amber-600" />
      </div>
    ),
  },
  {
    value: "320",
    label: "Partners",
    icon: (
      <div className="bg-amber-100 p-2 rounded-lg mr-4">
        <Handshake size={20} className="text-amber-600" />
      </div>
    ),
  },
].map((stat, index) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          key={index} 
          className="group transition-all duration-300 hover:scale-105"
        >
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white flex flex-col items-center h-full">
            <span className="text-4xl mb-3 opacity-80 group-hover:opacity-100 transition-opacity text-amber-600">
              {stat.icon}
            </span>
            <Typography 
              variant="h3" 
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-2"
            >
              {stat.value}+
            </Typography>
            <Typography 
              variant="subtitle1" 
              className="text-gray-600 font-medium uppercase tracking-wider text-sm"
            >
              {stat.label}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

{/* {srcDoc && (
  <iframe
    srcDoc={srcDoc}
    title="Custom Content"
    sandbox="allow-scripts"
    className="w-full h-[600px] border rounded-xl"
  />
)} */}


      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl animate-float"></div>
    <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-400/10 rounded-full filter blur-2xl animate-float-delay"></div>
  </div>

  <Container>
    <Grid container spacing={8} className="relative z-10 mb-12">
      {/* Brand Column */}
      <Grid item xs={12} md={4} className="group">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h6" 
            className="font-bold mb-6 flex items-center text-2xl hover:text-yellow-400 transition-colors"
          >
            <span className="text-yellow-400 animate-pulse">✦</span>
            <span className="ml-2">
              <span className="text-yellow-400">Joyful</span> Minds
            </span>
          </Typography>
          <Typography variant="body2" className="mb-6 text-gray-300/90 leading-relaxed">
            Our mission is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support.
          </Typography>
          
          <div className="mb-6 space-y-3">
            {[
              { icon: '📍', text: '25 Charity Square, Helping Street, City' },
              { icon: '📞', text: '+91 98765 43210' },
              { icon: '✉️', text: 'info@joyfulminds.org' }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-3 text-yellow-400/80 mt-0.5">{item.icon}</span>
                <Typography variant="body2" className="text-gray-300/90">
                  {item.text}
                </Typography>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-3">
            {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton 
                  size="small" 
                  className="bg-gray-700/50 hover:bg-yellow-400/20 text-white hover:text-yellow-400 transition-all"
                >
                  <Box className="w-5 h-5">
                    {/* Replace with actual icons */}
                    {social.charAt(0).toUpperCase()}
                  </Box>
                </IconButton>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Grid>
      
      {/* Navigation Columns */}
      {[
        {
          title: "Company",
          items: ['About Us', 'Our Team', 'Blog', 'Contact Us']
        },
        {
          title: "Get Involved",
          items: ['Donate', 'Volunteer', 'Programs', 'Events', 'FAQ']
        },
        {
          title: "Campaigns",
          items: [
            'Empowering Children Through Education',
            'Community Food Banks',
            'Support Underprivileged Students',
            'Youth Projects'
          ]
        }
      ].map((column, colIndex) => (
        <Grid item xs={12} sm={6} md={2} key={colIndex} className={colIndex === 2 ? "md:ml-auto" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: colIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Typography variant="h6" className="font-bold mb-6 text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-yellow-400">
              {column.title}
            </Typography>
            <ul className="space-y-3">
              {column.items.map((item, itemIndex) => (
                <motion.li 
                  key={itemIndex}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href="#" 
                    className="text-gray-300/90 hover:text-yellow-400 flex items-center transition-colors group"
                  >
                    <span className="mr-2 text-yellow-400/0 group-hover:text-yellow-400 transition-all">→</span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Grid>
      ))}
    </Grid>
    
    {/* Copyright Section */}
    <motion.div 
      className="border-t border-gray-800 pt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Typography variant="body2" className="text-gray-400/80 text-center md:text-left">
          © 2025 Joyful Minds. All Rights Reserved. | 
          <Link href="#" className="hover:text-yellow-400 mx-1 transition-colors">Privacy Policy</Link> | 
          <Link href="#" className="hover:text-yellow-400 ml-1 transition-colors">Terms of Use</Link>
        </Typography>
        <Typography variant="body2" className="text-gray-400/80 text-center md:text-right">
          Powered by <span className="text-yellow-400/80 hover:text-yellow-400 transition-colors cursor-pointer">CharityWave</span> | v1.0.3.4
        </Typography>
      </div>
    </motion.div>
  </Container>

  <style jsx global>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-float { animation: float 8s ease-in-out infinite; }
    .animate-float-delay { animation: float 8s ease-in-out infinite 2s; }
  `}</style>
</footer>
    </div>
  );
};

const PageWithProvider = () => {
  return (
    <PaletteProvider>
      <CharityWebsite />
    </PaletteProvider>
  );
};


export default PageWithProvider;
