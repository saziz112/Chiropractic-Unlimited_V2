import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, CalendarCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const SESSION_KEY = 'exit_popup_shown';

export const ExitIntentPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const armed = useRef(false);
    const mobileTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const mobileIdleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showPopup = useCallback(() => {
        if (sessionStorage.getItem(SESSION_KEY)) return;
        sessionStorage.setItem(SESSION_KEY, 'true');
        setIsVisible(true);
    }, []);

    const closePopup = useCallback(() => {
        setIsVisible(false);
    }, []);

    // ESC key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isVisible) closePopup();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isVisible, closePopup]);

    // Desktop: exit-intent (mouse leaves viewport toward top)
    useEffect(() => {
        const armTimeout = setTimeout(() => {
            armed.current = true;
        }, 3000);

        const handleMouseLeave = (e: MouseEvent) => {
            if (!armed.current) return;
            if (e.clientY <= 0) {
                showPopup();
            }
        };

        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            clearTimeout(armTimeout);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [showPopup]);

    // Mobile: show after 15s timed delay
    useEffect(() => {
        const isMobile = window.matchMedia('(pointer: coarse)').matches;
        if (!isMobile) return;

        // Arm after 3s, then show after 15s
        mobileTimer.current = setTimeout(() => {
            armed.current = true;
            mobileIdleTimer.current = setTimeout(showPopup, 15000);
        }, 3000);

        return () => {
            if (mobileTimer.current) clearTimeout(mobileTimer.current);
            if (mobileIdleTimer.current) clearTimeout(mobileIdleTimer.current);
        };
    }, [showPopup]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-label="New patient special offer"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={closePopup}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-up">
                {/* Close button */}
                <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                    aria-label="Close popup"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Top accent bar */}
                <div className="bg-brand-primary px-6 py-8 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-accent text-white text-xs font-bold tracking-wider uppercase mb-4">
                        Limited Time Offer
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                        Wait — Don't Miss This!
                    </h2>
                    <p className="text-white/80 text-sm">
                        New Patient Special
                    </p>
                </div>

                {/* Content */}
                <div className="px-6 py-8 text-center">
                    <p className="text-brand-muted text-sm mb-2">Consultation, Exam & Report of Findings</p>
                    <div className="mb-2">
                        <span className="text-5xl font-display font-bold text-brand-primary">$20</span>
                    </div>
                    <p className="text-brand-muted text-xs mb-8">A $350 Value</p>

                    <div className="flex flex-col gap-3">
                        <Link
                            to="/#booking"
                            onClick={closePopup}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            Book Now
                        </Link>
                        <a
                            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-brand-primary/20 text-brand-primary font-semibold rounded-full hover:bg-brand-bg transition-all duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            Call {BUSINESS_INFO.phone}
                        </a>
                    </div>

                    <button
                        onClick={closePopup}
                        className="mt-4 text-brand-muted text-xs hover:text-brand-text transition-colors cursor-pointer"
                    >
                        No thanks, I'll pass
                    </button>
                </div>
            </div>
        </div>
    );
};
