'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Container,
  Typography,
  Grid,
  CardContent,
  Button,
  Card as MuiCard
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {  usePalette } from '../context/PaletteContext.jsx';


// Motion components
const MotionCard = motion(MuiCard);
const MotionImage = motion(Image);

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

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 }
};

const progressVariants = {
  initial: { width: 0 },
  animate: (progress) => ({
    width: `${progress}%`,
    transition: { duration: 1, delay: 0.3 }
  })
};

export function InitiativesSection() {
  const pathname = usePathname();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const causesData = [
    { image: "https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg", title: "Sun Harmony School Supports", goal: 65000, raised: 37000, category: "Education" },
    { image: "https://cdn.pixabay.com/photo/2016/11/29/13/08/skateboard-1869727_1280.jpg", title: "Joyful Minds Medical Volunteers", goal: 32000, raised: 25000, category: "Healthcare" },
    { image: "https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330_1280.jpg", title: "Educating Minds, Empowering Lives", goal: 46000, raised: 20000, category: "Education" },
    { image: "https://cdn.pixabay.com/photo/2016/02/13/04/28/new-steps-in-peru-1197329_1280.jpg", title: "Empowering Children's Learning", goal: 55000, raised: 18000, category: "Children" },
    { image: "https://cdn.pixabay.com/photo/2023/01/27/01/40/brothers-7747561_1280.jpg", title: "Clean Water for Rural Communities", goal: 42000, raised: 32000, category: "Environment" },
    { image: "https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg", title: "Adult Literacy Program", goal: 38000, raised: 15000, category: "Education" },
    { image: "https://cdn.pixabay.com/photo/2021/10/10/20/33/mehtab-bagh-6698669_1280.jpg", title: "Women Entrepreneurship Initiative", goal: 50000, raised: 28000, category: "Women" },
    { image: "https://cdn.pixabay.com/photo/2020/01/20/17/25/india-4780853_1280.jpg", title: "Disaster Relief Fund", goal: 75000, raised: 45000, category: "Emergency" }
  ];

  const displayedCauses = showAll || pathname === '/initiatives' ? causesData : causesData.slice(0, 4);

  const handleSeeMore = () => {
    if (pathname === '/initiatives') {
      setShowAll(true);
    } else {
      window.location.href = '/initiatives';
    }
  };
    const { palettes } = usePalette();
  

  return (
    <section className="py-16 bg-white">
      <Container>
        <Typography variant="h4" component="h2" className="text-center font-bold !mb-2 text-amber-600" 
           sx={{ fontFamily: palettes.text.headingFont, fontWeight: palettes.text.headingWeight, mb:2 }}

        >
          {pathname === '/initiatives' ? 'All Initiatives' : 'Featured Causes'}
        </Typography>
        <Typography variant="body1" className="text-center text-gray-600 !mb-8"
            sx={{ fontFamily: palettes.text.subheadingFont, fontWeight: palettes.text.subheadingFont }}
>
          Support these charitable initiatives
        </Typography>

        <Grid container spacing={4}>
          {displayedCauses.map((cause, index) => {
            const progressPercent = (cause.raised / cause.goal) * 100;
            
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionCard 
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="h-full overflow-hidden"
                  sx={{ 
                    borderRadius: 2, 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 12px 24px rgba(0,0,0,0.12)'
                    },
                    transition: 'box-shadow 0.3s ease-in-out'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <MotionImage 
                      src={cause.image} 
                      alt={cause.title} 
                      layout="fill" 
                      width={1280}
                      height={853}
                      objectFit="cover"
                      variants={imageVariants}
                      initial="initial"
                      animate={hoveredCard === index ? "hover" : "initial"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <motion.div 
                      className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {cause.category}
                    </motion.div>
                  </div>
                  
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      component={motion.h3}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="font-bold mb-4 line-clamp-2"
                    >
                      {cause.title}
                    </Typography>
                    
                    <div className="mb-2 w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="bg-amber-600 h-2.5 rounded-full"
                        variants={progressVariants}
                        initial="initial"
                        animate="animate"
                        custom={progressPercent}
                      />
                    </div>
                    
                    <div className="flex justify-between text-sm mt-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <Typography variant="caption" color="text.secondary">Raised</Typography>
                        <Typography variant="body2" className="font-semibold text-amber-600">₹{cause.raised.toLocaleString()}</Typography>
                      </motion.div>
                      
                      <motion.div 
                        className="text-right"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <Typography variant="caption" color="text.secondary">Goal</Typography>
                        <Typography variant="body2" className="font-semibold">₹{cause.goal.toLocaleString()}</Typography>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="mt-4"
                    >
                     <Button  
  fullWidth
  variant="contained"
  component={motion.button}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => window.location.href = 'https://campaign-template-2.vercel.app/'}
  sx={{ 
    borderRadius: 6,
    textTransform: 'none',
    color: palettes.secondary.contrastText,
    background: ` ${palettes.secondary.main}`,
    '&:hover': {
      background: ` ${palettes.secondary.dark}`,
    },
  }}
>
  Donate Now
</Button>

                    </motion.div>
                  </CardContent>
                </MotionCard>
              </Grid>
            );
          })}
        </Grid>

        {(!showAll && pathname !== '/initiatives') && (
          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            <Button
  variant="contained"
  component={motion.button}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleSeeMore}
  sx={{
    px: 5,
    py: 1.5,
    borderRadius: 6,
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    color: palettes.secondary.contrastText,
    background: ` ${palettes.secondary.main} `,
    '&:hover': {
      background: ` ${palettes.secondary.dark} `,
    }
  }}
>
  See More Causes
</Button>

            </motion.div>
          </div>
        )}
      </Container>
    </section>
  );
}