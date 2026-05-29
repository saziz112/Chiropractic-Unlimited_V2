import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
    /** Optional override text. If absent, falls back to first ~60 words of `source`. */
    text?: string;
    /** Long-form text to summarize when `text` is not provided. */
    source?: string;
    /** Section label above the box (default: "Quick Answer"). */
    label?: string;
}

/**
 * AI-citation-friendly TL;DR block. Renders an answer-first summary at the top
 * of conversion pages so AI Overviews (Google, ChatGPT, Perplexity) can pull a
 * concise passage rather than guessing from prose. The label + visual treatment
 * also signals to humans that this is the short version.
 */
function renderBold(text: string) {
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**')
            ? <strong key={i} className="font-semibold text-brand-primary">{part.slice(2, -2)}</strong>
            : part
    );
}

export const QuickAnswer: React.FC<Props> = ({ text, source, label = 'Quick Answer' }) => {
    const summary = text || extractSummary(source || '');
    if (!summary) return null;

    return (
        <aside
            className="my-6 rounded-2xl border-l-4 border-brand-accent bg-emerald-50/60 p-6 md:p-7 shadow-sm"
            aria-labelledby="quick-answer-label"
        >
            <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                    <h2
                        id="quick-answer-label"
                        className="text-sm font-semibold tracking-widest uppercase text-brand-accent mb-2"
                    >
                        {label}
                    </h2>
                    <p className="text-brand-text text-base md:text-lg leading-relaxed m-0">
                        {renderBold(summary)}
                    </p>
                </div>
            </div>
        </aside>
    );
};

// Extract the first sentence-bounded chunk of ~60 words from arbitrary prose.
function extractSummary(source: string): string {
    const cleaned = source.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\s+/g, ' ').trim();
    const words = cleaned.split(' ');
    if (words.length <= 60) return cleaned;
    // Take first 60 words then trim back to the last sentence boundary.
    const chunk = words.slice(0, 60).join(' ');
    const lastPeriod = Math.max(chunk.lastIndexOf('. '), chunk.lastIndexOf('! '), chunk.lastIndexOf('? '));
    return lastPeriod > 0 ? chunk.slice(0, lastPeriod + 1) : chunk + '…';
}
