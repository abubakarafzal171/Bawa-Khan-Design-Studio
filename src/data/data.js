
import { DraftingCompass, Construction, PaintBucket, HardHat } from 'lucide-react';
import rev1 from '../data/images/majid.png'
import rev2 from '../data/images/abuzar.png'
import rev3 from '../data/images/akhtar.png'
import rev4 from '../data/images/alimalik.png'
import rev5 from '../data/images/mahnoor.png'

export const servicesData = [
  {
    id: 1,
    title: "Architectural Design",
    desc: "Modern and sustainable blueprints tailored to your vision. We create spaces that inspire.",
    icon: DraftingCompass,
    bg: "bg-white",
    textColor: "text-slate-900"
  },
  {
    id: 2,
    title: "Civil Construction",
    desc: "From foundation to finishing with precision engineering and high-quality materials.",
    icon: Construction,
    bg: "bg-orange-600",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Interior Design",
    desc: "Luxury interiors that reflect your lifestyle. Aesthetics meets functionality.",
    icon: PaintBucket,
    bg: "bg-white",
    textColor: "text-slate-900"
  },
  {
    id: 4,
    title: "Project Management",
    desc: "Timely delivery and strict quality control for large scale residential projects.",
    icon: HardHat,
    bg: "bg-orange-100",
    textColor: "text-slate-900"
  }
];


export const faqData = [
  {
    id: 1,
    question: "What types of construction projects do you specialize in?",
    answer: "We specialize in a wide range of projects, including luxury residential homes, commercial office spaces, industrial warehouses, and large-scale renovations. Our team is equipped to handle everything from initial breaking ground to final finishing."
  },
  {
    id: 2,
    question: "How do you ensure the quality of materials used?",
    answer: "We source materials only from certified and reputable suppliers. Every batch of concrete, steel, and timber undergoes a quality check on-site to ensure it meets international safety and durability standards."
  },
  {
    id: 3,
    question: "What is the typical timeline for building a custom home?",
    answer: "A standard custom home usually takes between 8 to 14 months, depending on the complexity of the design and weather conditions. We provide a detailed project schedule during the planning phase to keep you informed."
  },
  {
    id: 4,
    question: "Are you fully licensed and insured?",
    answer: "Yes, we are a fully licensed construction firm. We carry comprehensive general liability insurance and worker’s compensation to ensure that our clients and our team are protected throughout the project."
  },
  {
    id: 5,
    question: "Can I make changes to the design after construction has started?",
    answer: "While we recommend finalizing designs early, we understand that needs change. We have a 'Change Order' process in place to evaluate the cost and timeline impact of any modifications you wish to make mid-construction."
  },
  {
    id: 6,
    question: "Do you offer post-construction maintenance or warranties?",
    answer: "Absolutely. We provide a standard structural warranty on all our builds. Additionally, we offer a maintenance period where we address any settling issues or minor adjustments required after you move in."
  },
  {
    id: 7,
    question: "How do you manage safety on the construction site?",
    answer: "Safety is our top priority. Our sites follow strict safety protocols, including mandatory PPE for all workers, regular safety audits, and dedicated site supervisors to prevent accidents and ensure a secure environment."
  }
];

export const reviewsData = [
  {
    id: 1,
    name: "Majid Khan",
    stars: 5,
    comment: "The team transformed our vision into a reality. Their attention to structural detail and finish quality is unmatched in the industry.",
    image: rev1
  },
  {
    id: 2,
    name: "Abuzar Ali",
    stars: 5,
    comment: "Professional, punctual, and transparent. They completed our office renovation two weeks ahead of schedule without compromising quality.",
    image: rev2
  },
  {
    id: 3,
    name: "Akhtar Hussain",
    stars: 5,
    comment: "I've worked with many contractors, but their project management and safety protocols are on a completely different level. Highly recommended.",
    image: rev3
  },
  {
    id: 4,
    name: "Ali Malik",
    stars: 4,
    comment: "As a designer, I'm picky about finishes. Their masonry and woodwork teams are true craftsmen who respect the design intent.",
    image: rev4
  },
  {
    id: 5,
    name: "Mahnoor",
    stars: 5,
    comment: "From the initial estimation to the final walkthrough, the communication was seamless. No hidden costs, just honest, hard work.",
    image: rev5
  },
];