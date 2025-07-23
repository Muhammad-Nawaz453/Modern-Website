/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */


import logoImage from '@/assets/images/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return <section className='py-16'>
        <div className="conatiner">
            <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
                <div>
                    <Image src={logoImage} alt='' />
                </div>
                <div>
                    <nav className='flex gap-6'>
                        {footerLinks.map(link =>(
                             <Link  href={link.href} className='text-white/50 text-sm'>{link.label}</Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>;
}
