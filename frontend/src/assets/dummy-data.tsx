import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag and drop your assets.We auto-optimize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form, social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard quality',
            'No watermark',
            'Slower generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creators & small teams.',
        credits: 80,
        features: [
            '80 Credits',
            'HD quality',
            'No watermark',
            'Video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and projects.',
        credits: 300,
        features: [
            '300 Credits',
            'FHD quality',
            'No watermark',
            'Fast generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'We leverage state-of-the-art AI models trained on diverse datasets to generate high-quality outputs.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes, all generated images are yours to use and distribute as you see fit.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes - you can cancel from your dashboard at any time.You will retain access to your credits until the end of your billing cycle.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We support common image formats like JPG, PNG, and WebP.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url:"https://www.bing.com/th/id/OIP.IOlJ2wJrAUpUh6T1la8kxAHaEK?w=528&h=424&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
            { name: "LinkedIn", url:"https://www.bing.com/th/id/OIP.Cn9SAHCmTy8MEaixr8bqpAHaHa?w=152&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
            { name: "GitHub", url:"https://www.bing.com/th/id/OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK?w=528&h=424&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" }
        ]
    }
];