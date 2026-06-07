import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQ } from '../types';

interface StructuredDataProps {
    data: Record<string, any> | Record<string, any>[];
}

// FAQPage JSON-LD from a page's visible FAQ content. Returns an array so
// callers can spread it into their schema list: [...schemas, ...faqPageSchema(faqs)]
export const faqPageSchema = (faqs: FAQ[] | undefined): Record<string, any>[] =>
    faqs && faqs.length > 0
        ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer },
            })),
        }]
        : [];

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Helmet>
    );
};
