// import icons
import { FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
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
import RGaborImg from '../src/assets/img/members/rgabor.png';
import MPeterImg from '../src/assets/img/members/mpeter.png';
import LTamasImg from '../src/assets/img/members/ltamas.png';
import NMateImg from '../src/assets/img/members/nmate.png';
import VRichardImg from '../src/assets/img/members/vrichard.png';
import DKornelImg from '../src/assets/img/members/dkornel.png';
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
        title: 'Integration with Kubernetes',
        description:
          'Deploy STUNner in Kubernetes alongside any service mesh at any cloud provider.',
        linkText: 'Learn more',
        delay: '400',
      },
      {
        image: Feature2Img,
        bgImage: Feature2BgImg,
        title: 'Expose a WebRTC media server',
        description:
          'Forget the Kubernetes anti-patterns and expose your WebRTC service through only two ports with STUNner!',
        linkText: 'Learn more',
        delay: '700',
      },
      {
        image: Feature3Img,
        bgImage: Feature3BgImg,
        title: 'NAT traversal without external services',
        description:
          'Forget the use of external STUN/TURN services.',
        linkText: 'Learn more',
        delay: '1000',
      },
      {
        image: Feature4Img,
        bgImage: Feature4BgImg,
        title: 'Scale WebRTC',
        description:
          'Scale your media plane with a single command.',
        linkText: 'Learn more',
        delay: '1300',
      },
      {
        image: Feature4Img,
        bgImage: Feature4BgImg,
        title: 'Secure',
        description:
          'With STUNner all media is received through a single ingress port that you can monitor.',
        linkText: 'Learn more',
        delay: '1600',
      },
      {
        image: Feature4Img,
        bgImage: Feature4BgImg,
        title: 'Simple',
        description:
          'Written in Go using the well-known pion/webrtc framework.',
        linkText: 'Learn more',
        delay: '1900',
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
  title: 'About us',
  subtitle:
    'L7mp Technologies is a small team of researchers and practitioners working on projects related to integrating real-time communications workloads, especially WebRTC and cloud-gaming, into the cloud native ecosystem.'
};

export const membersData = [
  {
    image: RGaborImg,
    name: 'Gábor Rétvári, Dsc',
    title: 'CTO'
  },
  {
    image: MPeterImg,
    name: 'Péter Megyesi, PhD',
    title: 'CEO'
  },
  {
    image: LTamasImg,
    name: 'Tamás Lévai, PhD',
    title: 'Developer'
  },
  {
    image: NMateImg,
    name: 'Máté Nagy, PhD',
    title: 'Developer'
  },
  {
    image: VRichardImg,
    name: 'Richárd Váradi, BSc',
    title: 'Developer'
  },
  {
    image: DKornelImg,
    name: 'Kornél Dávid, BSc',
    title: 'Developer'
  }
];

export const ctaData = {
    title: 'Contact Us From Here',
    subtitle: 'Do you have questions? Great! Contact us and we will choose a date for a call.',
    btnText1: 'Learn more',
    btnText2: 'Request Demo',
};

export const footerData = {
    logo: LogoV2,
    address: 'L7mp Technologies, Address',
    email: 'info@l7mp.io',
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
        icon: <FaLinkedin />,
        href: '#',
      },
      {
        icon: <FaGithub />,
        href: '#',
      },
    ],
  };

export const copyrightData = {
  text: '© L7mp Technologies, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};