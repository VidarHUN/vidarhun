// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero-img.png';
import StunnerImage from '../src/assets/img/stunner.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
    {
        name: 'STUNner',
        href: '#stunner',
    },
    {
        name: 'Testimonials',
        href: '#testimonials',
    },
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Members',
        href: '#members',
    },
]

// TODO: Change these to something specific for us!
export const heroData = {
    title: `Migrate WebRTC backend services to Kubernetes`,
    subtitle:
        'Deploy a containerized WebRTC infrastructure into Kubernetes and benefit from the unmatched lifecycle management features',
    btnText: 'Learn more',
    image: HeroImage,
};

export const stunnerData = {
  title: 'STUNner: A Kubernetes media gateway for WebRTC',
  subtitle: 'STUNner aims to change the typical Kubernetes HTTP/TCP Web workload design to handle WebRTC media by exposing a single public STUN/TURN server port for ingesting all media traffic into a Kubernetes cluster in a controlled and standards-compliant way.',
  image: StunnerImage,
};

export const featuresData = {
    title: 'Features',
    subtitle:
      'STUNner exposes a standards-compliant STUN/TURN gateway for clients to access your virtualized WebRTC infrastructure running in Kubernetes, maintaining full browser compatibility and requiring minimal or no modification to your existing WebRTC codebase.',
    list: [
      {
        image: Feature1Img,
        bgImage: Feature1BgImg,
        title: 'Payment Done',
        description:
          'Pay with a Visa or PayPal card and without much ado',
        linkText: 'Learn more',
        delay: '400',
      },
      {
        image: Feature2Img,
        bgImage: Feature2BgImg,
        title: 'Find Your Product',
        description:
          'We offer sale of products through the Internet..',
        linkText: 'Learn more',
        delay: '700',
      },
      {
        image: Feature3Img,
        bgImage: Feature3BgImg,
        title: 'Print Out',
        description:
          'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
        linkText: 'Learn more',
        delay: '1000',
      },
      {
        image: Feature4Img,
        bgImage: Feature4BgImg,
        title: 'Product Received',
        description:
          'In our app you can see the delay time of your order...',
        linkText: 'Learn more',
        delay: '1300',
      },
    ],
};

export const testimonialsData = [
    {
      image: Avatar1Img,
      name: 'Serena',
      web: 'rena.com',
      message:
        'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
      delay: '300',
    },
    {
      image: Avatar2Img,
      name: 'Natalia',
      web: 'nataliya.com',
      message:
        'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
      delay: '600',
    },
    {
      image: Avatar3Img,
      name: 'Vebin',
      web: 'vebin.com',
      message:
        'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
      delay: '900',
    },
];

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
      'We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.',
};

export const membersData = {

};

export const ctaData = {
    title: 'Contact Us From Here',
    subtitle: 'Get limited 1 week free try our features!',
    btnText1: 'Learn more',
    btnText2: 'Request Demo',
};

export const footerData = {
    logo: LogoV2,
    address: 'Product Texas, 234 Bokki Avenue Street BMW 99388',
    email: 'info@producttexas.project',
    phone: '1-232-7788 (Main)',
    list1: [
      {
        name: 'Profile',
        href: '#',
      },
      {
        name: 'Features',
        href: '#',
      },
      {
        name: 'Careers',
        href: '#',
      },
      {
        name: 'DW News',
        href: '#',
      },
    ],
    list2: [
      {
        name: 'Support',
        href: '#',
      },
      {
        name: 'Sign Up',
        href: '#',
      },
      {
        name: 'Guide',
        href: '#',
      },
      {
        name: 'Reports',
        href: '#',
      },
      {
        name: 'Q & A',
        href: '#',
      },
    ],
    socialList: [
      {
        icon: <FaYoutube />,
        href: '#',
      },
      {
        icon: <FaInstagram />,
        href: '#',
      },
      {
        icon: <FaGithub />,
        href: '#',
      },
    ],
  };

export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};