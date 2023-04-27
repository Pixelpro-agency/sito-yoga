// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

// import images
import CourseImage1 from '../src/assets/img/courses/course-1.png';
import CourseImage2 from '../src/assets/img/courses/course-2.png';
import CourseImage3 from '../src/assets/img/courses/course-3.png';

export const navigation = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Classes',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export const facts = [
  {
    startNumber: '1',
    endNumber: '5',
    unit: '',
    title: 'Anni di esperienza',
    desc: 'Abbiamo 5 anni di esperienza in questo campo e diamo i migliori insegnamenti',
  },
  {
    startNumber: '1',
    endNumber: '5',
    unit: 'K',
    title: 'Clienti soddisfatti',
    desc: 'Abbiamo oltre cinquemila clienti in tutto il mondo. Sono tutti molto soddisfatti',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Formatori esperti',
    desc: 'Abbiamo oltre quindici istruttori professionali ed esperti di yoga e meditazione.',
  },
  {
    startNumber: '1',
    endNumber: '24',
    unit: '',
    title: 'Classi mensili',
    desc: 'Lo yoga è una disciplina fisica, mentale e spirituale. Offriamo più di 24 lezioni mensili',
  },
];

export const courses = [
  {
    image: CourseImage1,
    title: 'Formazione e immersione nello yoga rilassante',
    desc: 'Ecco alcuni suggerimenti per i cercatori di impiego che vogliono ottenere un lavoro da sogno e brillare nella loro carriera',
    link: 'Iniziamo',
    delay: '600',
  },
  {
    image: CourseImage2,
    title: 'Formazione e immersione nello yoga rilassante',
    desc: 'Ecco alcuni suggerimenti per i cercatori di impiego che vogliono ottenere un lavoro da sogno e brillare nella loro carriera',
    link: 'Iniziamo',
    delay: '800',
  },
  {
    image: CourseImage3,
    title: 'Formazione e immersione nello yoga rilassante',
    desc: 'Ecco alcuni suggerimenti per i cercatori di impiego che vogliono ottenere un lavoro da sogno e brillare nella loro carriera',
    link: 'Iniziamo',
    delay: '900',
  },
];

export const pricing = [
  {
    title: 'Unica lezione di yoga',
    price: '€15.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Paga quando inizi',
      },
      {
        icon: <BsCheck />,
        name: 'Perfetto per non residenti',
      },
      {
        icon: <BsCheck />,
        name: 'Accesso a tutte le classi',
      },
    ],
    buttonText: 'Prenota ora',
    buttonIcon: <BsChevronRight />,
    delay: '600',
  },
  {
    title: 'Unica lezione di yoga',
    price: '€60.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Paga quando inizi',
      },
      {
        icon: <BsCheck />,
        name: 'Perfetto per non residenti',
      },
      {
        icon: <BsCheck />,
        name: 'Accesso a tutte le classi',
      },
      {
        icon: <BsCheck />,
        name: 'Accesso a tutti i mentori',
      },
    ],
    buttonText: 'Prenota ora',
    buttonIcon: <BsChevronRight />,
    delay: '800',
  },
  {
    title: 'Unica lezione di yoga',
    price: '€150.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Paga quando inizi',
      },
      {
        icon: <BsCheck />,
        name: 'Perfetto per non residenti',
      },
      {
        icon: <BsCheck />,
        name: 'Accesso a tutte le classi',
      },
      {
        icon: <BsCheck />,
        name: 'Accesso a tutti i mentori',
      },
    ],
    buttonText: 'Prenota ora',
    buttonIcon: <BsChevronRight />,
    delay: '900',
  },
];