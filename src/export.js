import {
  FaCalculator,
  FaProjectDiagram,
  FaTools,
  FaLifeRing,
} from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

import { PiSecurityCamera } from "react-icons/pi";
import { PiSpeakerHigh } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { LuConciergeBell } from "react-icons/lu";
import { TfiPanel } from "react-icons/tfi";
import { LuPackageCheck } from "react-icons/lu";

import cameraImg from "./assets/camera.jpg";
import audioImg from "./assets/audio.jpg";
import lightsImg from "./assets/lights.jpg";
import doorbellImg from "./assets/doorbell.jpg";
import electricalImg from "./assets/electrical.jpg";
import customImg from "./assets/custom.jpg";

export const allservices = [
  {
    title: "Security Camera Installation",
    about: "High-definition surveillance for peace of mind.",
    details:
      "We install, configure, and maintain smart surveillance systems for residential and commercial properties. Our solutions include motion detection, remote viewing, night vision, and integration with mobile apps. With cloud or local storage options and full HD recording, your property is always protected.",
    icon: PiSecurityCamera,
    bg: cameraImg,
  },
  {
    title: "Audio System Integration",
    about: "Professional sound for homes and businesses.",
    details:
      "Our audio system services include surround sound installation, multi-room audio zones, and public announcement systems. We design custom setups for both entertainment and operational needs, ensuring clarity, balance, and smart control via mobile or tablet.",
    icon: PiSpeakerHigh,
    bg: audioImg,
  },
  {
    title: "Indoor & Outdoor Lighting",
    about: "Custom LED solutions for every space.",
    details:
      "We design and install indoor and outdoor lighting systems tailored to your needs—whether it’s ambiance, functionality, or security. Our solutions include smart switches, motion-triggered lights, pathway lighting, and energy-efficient LED conversions.",
    icon: GoLightBulb,
    bg: lightsImg,
  },
  {
    title: "Smart Doorbells & Intercoms",
    about: "Modern access control made easy.",
    details:
      "Upgrade your entry points with smart video doorbells and audio/video intercoms. Enjoy features like real-time mobile alerts, 2-way communication, visitor logs, and remote door unlock from your phone.",
    icon: LuConciergeBell,
    bg: doorbellImg,
  },
  {
    title: "Electrical Panels & Wiring",
    about: "Safe and certified electrical setups.",
    details:
      "We handle new panel installations, upgrades, and full wiring services for residential and commercial properties. All work meets current codes and safety standards. We also offer troubleshooting, circuit mapping, and breaker replacement.",
    icon: TfiPanel,
    bg: electricalImg,
  },
  {
    title: "Custom Surveillance Packages",
    about: "Tailored systems for any property.",
    details:
      "Our surveillance packages are fully customizable to your layout, risk level, and budget. Options include indoor/outdoor cameras, dome or bullet cams, NVR/DVR systems, license plate capture, and mobile access. We offer complete consultation and maintenance plans.",
    icon: LuPackageCheck,
    bg: customImg,
  },
];


export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "LyD Electrix transformed our entire home security system. The installation was smooth, and the results exceeded expectations.",
    post: "Contractor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "I was impressed with the attention to detail and professionalism. They handled everything from wiring to lighting flawlessly.",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Great team! Reliable, fast, and knowledgeable. I recommend them to anyone looking for quality electrical work.",
    post: "Project Manager",
  },
];


export const planning = [
  {
    title: "Estimate",
    about:
      "We start with a free on-site or virtual consultation to understand your needs. Our team evaluates the scope, recommends ideal solutions, and provides a clear, competitive quote with no hidden fees.",
    icon: FaCalculator,
  },
  {
    title: "Plan",
    about:
      "Once approved, we design a custom installation plan tailored to your space, goals, and budget. We coordinate all technical requirements and scheduling to ensure a smooth process.",
    icon: FaProjectDiagram,
  },
  {
    title: "Install",
    about:
      "Our certified technicians handle the full installation of electrical systems, cameras, lighting, and smart components—always respecting safety codes and your property.",
    icon: FaTools,
  },
  {
    title: "Maintain",
    about:
      "We offer ongoing maintenance and support packages to keep your systems running at peak performance, including updates, inspections, and troubleshooting services.",
    icon: FaLifeRing,
  },
];
