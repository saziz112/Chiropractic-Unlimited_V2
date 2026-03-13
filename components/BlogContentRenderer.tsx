import React from 'react';
import { BlogSection } from '../types';
import { BLOG_CHARTS } from './BlogCharts';

function renderRichText(text: string) {
    const regex = /(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/g;
    const parts = text.split(regex);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-brand-primary font-semibold">{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
            return <a key={i} href={linkMatch[2]} className="text-brand-accent hover:text-brand-secondary underline underline-offset-2 transition-colors">{linkMatch[1]}</a>;
        }
        return part;
    });
}

function slugify(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

interface BlogContentRendererProps {
    sections: BlogSection[];
}

export const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({ sections }) => {
    return (
        <div className="blog-content">
            {sections.map((section, idx) => {
                switch (section.type) {
                    case 'paragraph':
                        return (
                            <p key={idx} className="text-brand-muted text-lg leading-relaxed mb-6">
                                {renderRichText(section.content)}
                            </p>
                        );
                    case 'heading':
                        return (
                            <h2
                                key={idx}
                                id={slugify(section.content)}
                                className="text-2xl md:text-3xl font-display text-brand-primary mt-12 mb-4"
                            >
                                {section.content}
                            </h2>
                        );
                    case 'subheading':
                        return (
                            <h3
                                key={idx}
                                id={slugify(section.content)}
                                className="text-xl md:text-2xl font-display text-brand-primary mt-8 mb-3"
                            >
                                {section.content}
                            </h3>
                        );
                    case 'list':
                        return (
                            <ul key={idx} className="space-y-3 mb-6 ml-1">
                                {section.items?.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-brand-muted text-lg leading-relaxed">
                                        <span className="text-brand-accent mt-1.5 shrink-0">&#8226;</span>
                                        <span>{renderRichText(item)}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    case 'blockquote':
                        return (
                            <blockquote key={idx} className="blog-blockquote my-8 pl-6 py-4 border-l-4 border-brand-accent bg-brand-accent/5 rounded-r-xl">
                                <p className="text-brand-primary text-lg italic leading-relaxed">
                                    {renderRichText(section.content)}
                                </p>
                            </blockquote>
                        );
                    case 'image':
                        return (
                            <figure key={idx} className="my-8">
                                <img
                                    src={section.src}
                                    alt={section.alt || ''}
                                    className="w-full rounded-2xl shadow-lg"
                                    loading="lazy"
                                />
                                {section.caption && (
                                    <figcaption className="text-center text-brand-muted text-sm mt-3 italic">
                                        {section.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    case 'chart': {
                        const ChartComponent = section.chartId ? BLOG_CHARTS[section.chartId] : null;
                        return ChartComponent ? <ChartComponent key={idx} /> : null;
                    }
                    default:
                        return null;
                }
            })}
        </div>
    );
};
