'use client';
import dynamic from 'next/dynamic';


const ClientMotion = dynamic(() => import('@/components/animation/animation'), { ssr: false });

export { ClientMotion };