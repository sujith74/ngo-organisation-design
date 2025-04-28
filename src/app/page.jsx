// AboutUs.jsx
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Divider, 
  Button,
  Paper
} from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SchoolIcon from '@mui/icons-material/School';
import ChildCareIcon from '@mui/icons-material/ChildCare';

export default function AboutUs() {
  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <Box className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600">
        <Container maxWidth="lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white z-10">
              <Typography variant="overline" className="font-medium text-amber-100">
                MISSION & VALUES • COMMUNITY FIRST
              </Typography>
              <Typography variant="h2" component="h1" className="font-bold mb-4 text-4xl md:text-5xl">
                Empowering Every <br />Child's Potential
              </Typography>
              <Typography variant="body1" className="mb-6 text-amber-50">
                At Joyful Minds, we believe in the unique potential of every child. Our mission is to help them shine through personalized support, education, and compassionate care.
              </Typography>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="contained" 
                  className="bg-white text-amber-700 hover:bg-amber-100 font-medium"
                >
                  GET INVOLVED
                </Button>
                <Button 
                  variant="outlined" 
                  className="border-white text-white hover:bg-amber-700"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Box className="relative h-64 md:h-80">
                <Image 
                  src="https://cdn.pixabay.com/photo/2018/07/31/14/09/young-people-3575167_1280.jpg" 
                  alt="Children learning" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </Box>
            </div>
          </div>
        </Container>
      </Box>

      {/* About Us Content */}
      <Container maxWidth="lg" className="py-16">
        <Typography variant="h3" component="h2" className="text-center font-bold mb-2 text-amber-800">
          About Us
        </Typography>
        <Box className="flex justify-center mb-8">
          <Divider className="w-24 border-t-4 border-amber-500" />
        </Box>
        
        <Paper elevation={0} className="bg-white p-8 rounded-lg shadow-sm mb-16">
          <Typography variant="body1" className="mb-4 text-gray-700">
            At Joyful Minds, we understand that every child is unique with their own strengths and challenges. It is our mission to fulfill these needs, helping them thrive and flourish. Our organization is wholeheartedly dedicated to brightening the lives of children from diverse backgrounds across society. We are driven by an unwavering determination to empower these young minds, creating a safe, joyful, and nurturing environment for their growth and development.
          </Typography>
          
          <Typography variant="h5" component="h3" className="font-bold mt-8 mb-4 text-amber-700">
            Our Mission:
          </Typography>
          <Typography variant="body1" className="mb-6 text-gray-700">
            Our mission at Joyful Minds is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support. We are dedicated to creating a nurturing environment where each child feels safe, cherished, and empowered to explore and develop their unique talents, personality, and skills. Our ultimate goal is to enable every child to blossom into a joyful, well-rounded individual, ready to contribute to a better and happier society.
          </Typography>
          
          <Typography variant="h5" component="h3" className="font-bold mt-8 mb-4 text-amber-700">
            Our Values:
          </Typography>
          <Grid container spacing={3} className="mb-8">
            <Grid item xs={12} md={6}>
              <Box className="p-4">
                <Typography variant="h6" className="font-bold mb-2 text-amber-600">
                  Empathy
                </Typography>
                <Typography variant="body2" className="text-gray-700">
                  We approach each child cautiously and with an understanding of their unique circumstances.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="p-4">
                <Typography variant="h6" className="font-bold mb-2 text-amber-600">
                  Transparency
                </Typography>
                <Typography variant="body2" className="text-gray-700">
                  We believe in Integrity and Accountability, and, hence, we ensure that our donors, supporters and our beneficiaries are all well aware of our work and its impact.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="p-4">
                <Typography variant="h6" className="font-bold mb-2 text-amber-600">
                  Inclusivity
                </Typography>
                <Typography variant="body2" className="text-gray-700">
                  We ensure that children from all walks of life, ethnicity or ability are welcomed and given the support and love that they deserve.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="p-4">
                <Typography variant="h6" className="font-bold mb-2 text-amber-600">
                  Empowerment
                </Typography>
                <Typography variant="body2" className="text-gray-700">
                  We believe in empowering children so that they can become independent citizens and are able to stand up for themselves.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Typography variant="h5" component="h3" className="font-bold mt-8 mb-4 text-amber-700">
            Join Us:
          </Typography>
          <Typography variant="body1" className="mb-6 text-gray-700">
            We are currently situated in 20 states and 3 Union Territories of India and have impacted the lives of over 48,000 children positively with the collective efforts of our skilled team, volunteers and donors.
          </Typography>
          <Typography variant="body1" className="mb-6 text-gray-700">
            At Joyful Minds, we firmly believe that positive change requires collective efforts. We sincerely invite you to join hands with us in nurturing young minds and shaping the future of our world. Your support, in any capacity, will make a significant difference. Whether you choose to volunteer your time, raise awareness about our initiatives, or contribute to our projects, your involvement will impact the lives of countless children. Together, we create a world where every child has the opportunity to live, learn, pursue their dreams, and above all, find happiness!
          </Typography>
          <Typography variant="body1" className="mb-6 text-gray-700">
            Get in Touch: If you have any questions or suggestions for our cause, then please feel free to get in touch with us. Visit the "Contact Us" page on our website to find the necessary information.
          </Typography>
        </Paper>
        
        {/* Services Section */}
        <Box className="my-16">
          <Typography variant="h4" component="h2" className="text-center font-bold mb-12 text-amber-800">
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center p-6">
                  <Box className="mb-4 flex justify-center">
                    <div className="bg-amber-100 p-4 rounded-full">
                      <ChildCareIcon fontSize="large" className="text-amber-600" />
                    </div>
                  </Box>
                  <Typography variant="h5" component="h3" className="font-bold mb-2">
                    Healthy Food
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="mb-4">
                    Ensuring that children get nutritious food for their growth and development
                  </Typography>
                  <Button 
                    endIcon={<ArrowForwardIcon />} 
                    color="primary"
                    className="text-amber-600 hover:text-amber-800"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center p-6">
                  <Box className="mb-4 flex justify-center">
                    <div className="bg-green-100 p-4 rounded-full">
                      <SchoolIcon fontSize="large" className="text-green-600" />
                    </div>
                  </Box>
                  <Typography variant="h5" component="h3" className="font-bold mb-2">
                    Education
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="mb-4">
                    Personalized learning programs to develop academic skills and foster creativity
                  </Typography>
                  <Button 
                    endIcon={<ArrowForwardIcon />} 
                    color="primary"
                    className="text-green-600 hover:text-green-800"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center p-6">
                  <Box className="mb-4 flex justify-center">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <VolunteerActivismIcon fontSize="large" className="text-blue-600" />
                    </div>
                  </Box>
                  <Typography variant="h5" component="h3" className="font-bold mb-2">
                    Emotional Support
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="mb-4">
                    Comprehensive support systems to help children thrive emotionally and socially
                  </Typography>
                  <Button 
                    endIcon={<ArrowForwardIcon />} 
                    color="primary" 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      
        {/* Featured Section */}
        <Box className="mt-16 mb-12 bg-amber-100 rounded-lg p-8">
          <Typography variant="h4" component="h2" className="text-center font-bold mb-8 text-amber-800">
            As Featured In
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={3} md={2} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2015/02/04/11/29/tissue-623649_1280.jpg" alt="Channel NewsAsia" width={120} height={60} />
            </Grid>
            <Grid item xs={6} sm={3} md={2} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2018/04/23/21/26/auto-3345601_1280.jpg" alt="The Straits Times" width={120} height={60} />
            </Grid>
            <Grid item xs={6} sm={3} md={2} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2012/10/10/04/46/oldtimer-60521_1280.jpg" alt="Asia One" width={120} height={60} />
            </Grid>
            <Grid item xs={6} sm={3} md={2} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198_1280.jpg" alt="Today" width={120} height={60} />
            </Grid>
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box className="my-16 bg-blue-50 rounded-lg p-8">
          <Typography variant="h4" component="h2" className="text-center font-bold mb-8 text-blue-800">
            What the world thinks about us
          </Typography>
          <Card className="mb-4">
            <CardContent className="p-6">
              <Typography variant="body1" className="italic mb-4">
                "Joyful Minds is doing a fantastic job in the field of education, our school children get to know so many things during this program."
              </Typography>
              <Box className="flex items-center">
                <Box className="mr-3">
                  <Image 
                    src="/api/placeholder/40/40" 
                    alt="Aditya Birla" 
                    width={40} 
                    height={40} 
                    className="rounded-full"
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle2" className="font-bold">
                    Aditya Birla
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Principal, Sun Harmony School
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Partners Section */}
        <Box className="my-16">
          <Typography variant="h4" component="h2" className="text-center font-bold mb-8 text-amber-800">
            Our Partners
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={3} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_1280.jpg" alt="Stonehill" width={140} height={80} />
            </Grid>
            <Grid item xs={6} sm={3} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_1280.jpg" alt="Partner 2" width={140} height={80} />
            </Grid>
            <Grid item xs={6} sm={3} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2015/07/21/06/59/nikon-853641_1280.jpg" alt="Shriram" width={140} height={80} />
            </Grid>
            <Grid item xs={6} sm={3} className="flex justify-center">
              <Image src="https://cdn.pixabay.com/photo/2020/09/05/16/01/butterfly-5546907_1280.jpg" alt="Partner 4" width={140} height={80} />
            </Grid>
          </Grid>
        </Box>

        {/* Call To Action */}
        <Box className="my-16 bg-gray-900 text-white rounded-lg p-8 text-center">
          <Typography variant="h4" component="h2" className="font-bold mb-4">
            Want to be a changemaker?
          </Typography>
          <Typography variant="body1" className="mb-6">
            You can become a changemaker by making a fundraiser for this organization.
          </Typography>
          <Button 
            variant="contained" 
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-6 py-2"
          >
            START A CAMPAIGN
          </Button>
          
          <Grid container spacing={4} className="mt-8">
            <Grid item xs={12} md={4}>
              <Box className="mb-3 flex justify-center">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Image src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg" alt="Create icon" width={24} height={24} />
                </div>
              </Box>
              <Typography variant="h6" className="font-medium mb-2">
                Create your campaign
              </Typography>
              <Typography variant="body2" className="text-gray-300">
                In three simple steps, start your campaign
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="mb-3 flex justify-center">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Image src="https://cdn.pixabay.com/photo/2020/07/03/06/12/people-5365324_1280.jpg" alt="Approve icon" width={24} height={24} />
                </div>
              </Box>
              <Typography variant="h6" className="font-medium mb-2">
                Approval by the admins
              </Typography>
              <Typography variant="body2" className="text-gray-300">
                Get notified by Joyful Minds once they approve, you will get notified.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="mb-3 flex justify-center">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Image src="https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg" alt="Share icon" width={24} height={24} />
                </div>
              </Box>
              <Typography variant="h6" className="font-medium mb-2">
                Share in your networks
              </Typography>
              <Typography variant="body2" className="text-gray-300">
                Share your campaign to your network for better reach.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}