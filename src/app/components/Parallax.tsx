"use client";
import { ParallaxScrollSecond } from "../components/ui/parallax-scroll";
import port1 from '../../../public/port1.png'
import port2 from '../../../public/port2.png'
import port3 from '../../../public/port3.png'
import port4 from '../../../public/port4.png'
import port5 from '../../../public/port5.png'
import port6 from '../../../public/port6.png'
import port7 from '../../../public/port7.png'
import port8 from '../../../public/port8.png'
import port9 from '../../../public/port9.png'
import port10 from '../../../public/port10.png'
import port11 from '../../../public/port11.png'
import auto1 from '../../../public/auto1.png'
import auto2 from '../../../public/auto2.png'
import auto3 from '../../../public/auto3.png'
import auto4 from '../../../public/auto4.png'
import auto5 from '../../../public/auto5.png'

const beautyImages = [port1, port2, port3];
const servicesImages = [auto1, auto2, auto3];
const playgroundImages = [port4, port5, auto1];
const contentImages = [port2, auto3, port4];
const randomImages = [port3, port5, auto2];

const images: any = [
    port1,
    port2,
    port3,
    port4,
    port5,
    port6,
    port7,
    port8,
    port9,
    port10,
    port11,
];

export function ParallaxScrollSecondDemo({ images }: { images: any[] }) {
    return <ParallaxScrollSecond images={images} />;
}


