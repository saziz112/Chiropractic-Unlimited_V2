import React from 'react';

const OverdoseDeathsChart: React.FC = () => {
    const data = [
        { year: '2019', deaths: 70630 },
        { year: '2020', deaths: 93331 },
        { year: '2021', deaths: 106699 },
        { year: '2022', deaths: 109680 },
        { year: '2023', deaths: 110037 },
        { year: '2024', deaths: 80391 },
    ];
    const minY = 60000;
    const maxY = 120000;
    const chartLeft = 68;
    const chartRight = 570;
    const chartTop = 55;
    const chartBottom = 290;
    const chartW = chartRight - chartLeft;
    const chartH = chartBottom - chartTop;

    const getX = (i: number) => chartLeft + (i / (data.length - 1)) * chartW;
    const getY = (val: number) => chartBottom - ((val - minY) / (maxY - minY)) * chartH;

    const points = data.map((d, i) => `${getX(i)},${getY(d.deaths)}`).join(' ');
    const areaPath = `M${getX(0)},${getY(data[0].deaths)} ${data.map((d, i) => `L${getX(i)},${getY(d.deaths)}`).join(' ')} L${getX(data.length - 1)},${chartBottom} L${getX(0)},${chartBottom} Z`;

    const gridLines = [60000, 80000, 100000, 120000];

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 350" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Line chart showing U.S. drug overdose deaths from 2019 to 2024">
                <text x="300" y="30" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>U.S. Drug Overdose Deaths (2019–2024)</text>

                {gridLines.map(val => (
                    <g key={val}>
                        <line x1={chartLeft} y1={getY(val)} x2={chartRight} y2={getY(val)} stroke="#e5e7eb" strokeWidth="1" />
                        <text x={chartLeft - 8} y={getY(val) + 4} textAnchor="end" className="fill-[#6b7280]" style={{ fontSize: 11 }}>{(val / 1000).toFixed(0)}K</text>
                    </g>
                ))}

                <line x1={chartLeft} y1={chartBottom} x2={chartRight} y2={chartBottom} stroke="#d1d5db" strokeWidth="1" />

                <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.02" />
                    </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#areaGrad)" />

                <polyline points={points} fill="none" stroke="#059669" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

                {data.map((d, i) => (
                    <g key={d.year}>
                        <circle cx={getX(i)} cy={getY(d.deaths)} r="5" fill="#059669" stroke="white" strokeWidth="2" />
                        <text x={getX(i)} y={getY(d.deaths) - 12} textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 11, fontWeight: 600 }}>
                            {(d.deaths / 1000).toFixed(1)}K
                        </text>
                        <text x={getX(i)} y={chartBottom + 20} textAnchor="middle" className="fill-[#6b7280]" style={{ fontSize: 12 }}>{d.year}</text>
                    </g>
                ))}

                <text x="300" y="338" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Source: CDC National Center for Health Statistics, 2025</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">U.S. drug overdose deaths peaked at 110,037 in 2023 before declining to 80,391 in 2024</figcaption>
        </figure>
    );
};

const OpioidReductionChart: React.FC = () => {
    const data = [
        { label: 'Pain Reports Meta-Analysis', sublabel: '6.8M patients', value: 64, color: '#059669' },
        { label: 'UH Hospitals OUD Study', sublabel: '49K patients', value: 84, color: '#0891B2' },
        { label: 'Veterans JGIM Study', sublabel: '128K veterans', value: 90, color: '#164E63' },
    ];
    const barStart = 220;
    const barEnd = 555;
    const barW = barEnd - barStart;
    const barH = 42;
    const barGap = 72;
    const startY = 70;

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 310" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Horizontal bar chart showing opioid use reduction percentages across three 2025 studies">
                <text x="300" y="32" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>Opioid Use Reduction with Chiropractic Care</text>

                {data.map((d, i) => {
                    const y = startY + i * barGap;
                    const w = (d.value / 100) * barW;
                    return (
                        <g key={d.label}>
                            <text x={barStart - 10} y={y + barH / 2 - 6} textAnchor="end" className="fill-[#164E63]" style={{ fontSize: 12, fontWeight: 600 }}>{d.label}</text>
                            <text x={barStart - 10} y={y + barH / 2 + 10} textAnchor="end" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>{d.sublabel}</text>
                            <rect x={barStart} y={y} width={barW} height={barH} rx="6" fill="#f3f4f6" />
                            <rect x={barStart} y={y} width={w} height={barH} rx="6" fill={d.color} />
                            <text x={barStart + w - 10} y={y + barH / 2 + 5} textAnchor="end" fill="white" style={{ fontSize: 16, fontWeight: 700 }}>{d.value}%</text>
                        </g>
                    );
                })}

                <text x={barStart} y={startY + 3 * barGap - 6} className="fill-[#9ca3af]" style={{ fontSize: 10 }}>0%</text>
                <text x={barEnd} y={startY + 3 * barGap - 6} textAnchor="end" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>100%</text>

                <text x="300" y="298" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Sources: Pain Reports 2025, Health Science Reports 2025, JGIM 2025</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Three 2025 studies show chiropractic care reduces opioid use by 64–90%</figcaption>
        </figure>
    );
};

const HealthcareCostsChart: React.FC = () => {
    const data = [
        { label: 'Chiropractor', cost: 5093, color: '#059669' },
        { label: 'Primary Care', cost: 5660, color: '#0891B2' },
        { label: 'Orthopedist', cost: 9434, color: '#164E63' },
    ];
    const maxCost = 10000;
    const chartLeft = 80;
    const chartBottom = 280;
    const chartTop = 60;
    const chartH = chartBottom - chartTop;
    const barW = 110;
    const barGap = 50;
    const totalW = data.length * barW + (data.length - 1) * barGap;
    const startX = chartLeft + (490 - totalW) / 2;

    const gridLines = [0, 2000, 4000, 6000, 8000, 10000];

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 355" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Bar chart comparing annual healthcare costs by first provider type">
                <text x="300" y="32" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>Annual Healthcare Costs by First Provider</text>

                {gridLines.map(val => {
                    const y = chartBottom - (val / maxCost) * chartH;
                    return (
                        <g key={val}>
                            <line x1={chartLeft} y1={y} x2={570} y2={y} stroke="#e5e7eb" strokeWidth="1" />
                            <text x={chartLeft - 8} y={y + 4} textAnchor="end" className="fill-[#6b7280]" style={{ fontSize: 10 }}>
                                ${(val / 1000).toFixed(0)}K
                            </text>
                        </g>
                    );
                })}

                {data.map((d, i) => {
                    const x = startX + i * (barW + barGap);
                    const h = (d.cost / maxCost) * chartH;
                    const y = chartBottom - h;
                    return (
                        <g key={d.label}>
                            <rect x={x} y={y} width={barW} height={h} rx="6" fill={d.color} />
                            <text x={x + barW / 2} y={y - 8} textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 13, fontWeight: 700 }}>
                                ${d.cost.toLocaleString()}
                            </text>
                            <text x={x + barW / 2} y={chartBottom + 20} textAnchor="middle" className="fill-[#6b7280]" style={{ fontSize: 12 }}>{d.label}</text>
                        </g>
                    );
                })}

                <text x="300" y="343" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Source: Chiropractic &amp; Manual Therapies, 2024</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Patients who see a chiropractor first spend 46% less on total healthcare costs than those who see an orthopedist first</figcaption>
        </figure>
    );
};

const BackPainSurgeryRatesChart: React.FC = () => {
    const data = [
        { label: 'Chiropractor First', value: 1.5, color: '#059669' },
        { label: 'Surgeon First', value: 42.7, color: '#dc2626' },
    ];
    const maxVal = 50;
    const chartBottom = 270;
    const chartTop = 60;
    const chartH = chartBottom - chartTop;
    const barW = 140;
    const gap = 100;
    const totalW = data.length * barW + (data.length - 1) * gap;
    const startX = (600 - totalW) / 2;
    const gridLines = [0, 10, 20, 30, 40, 50];

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 340" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Bar chart comparing surgery rates when seeing a chiropractor first versus a surgeon first">
                <text x="300" y="30" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>Back Pain Surgery Rates by First Provider</text>
                {gridLines.map(val => {
                    const y = chartBottom - (val / maxVal) * chartH;
                    return (
                        <g key={val}>
                            <line x1={80} y1={y} x2={520} y2={y} stroke="#e5e7eb" strokeWidth="1" />
                            <text x={72} y={y + 4} textAnchor="end" className="fill-[#6b7280]" style={{ fontSize: 11 }}>{val}%</text>
                        </g>
                    );
                })}
                {data.map((d, i) => {
                    const x = startX + i * (barW + gap);
                    const h = (d.value / maxVal) * chartH;
                    const y = chartBottom - h;
                    return (
                        <g key={d.label}>
                            <rect x={x} y={y} width={barW} height={h} rx="6" fill={d.color} />
                            <text x={x + barW / 2} y={y - 10} textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 18, fontWeight: 700 }}>{d.value}%</text>
                            <text x={x + barW / 2} y={chartBottom + 20} textAnchor="middle" className="fill-[#6b7280]" style={{ fontSize: 12 }}>{d.label}</text>
                        </g>
                    );
                })}
                <text x="300" y="328" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Source: Keeney et al., Spine, 2013</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Patients who see a chiropractor first have a 1.5% surgery rate vs. 42.7% for those who see a surgeon first</figcaption>
        </figure>
    );
};

const BackPainSatisfactionChart: React.FC = () => {
    const data = [
        { label: 'Chiropractic Care', value: 86.4, color: '#059669' },
        { label: 'Medical Care', value: 71, color: '#0891B2' },
    ];
    const maxVal = 100;
    const chartBottom = 270;
    const chartTop = 60;
    const chartH = chartBottom - chartTop;
    const barW = 140;
    const gap = 100;
    const totalW = data.length * barW + (data.length - 1) * gap;
    const startX = (600 - totalW) / 2;
    const gridLines = [0, 25, 50, 75, 100];

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 340" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Bar chart comparing patient satisfaction between chiropractic and medical care">
                <text x="300" y="30" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>Patient Satisfaction for Chronic Low Back Pain</text>
                {gridLines.map(val => {
                    const y = chartBottom - (val / maxVal) * chartH;
                    return (
                        <g key={val}>
                            <line x1={80} y1={y} x2={520} y2={y} stroke="#e5e7eb" strokeWidth="1" />
                            <text x={72} y={y + 4} textAnchor="end" className="fill-[#6b7280]" style={{ fontSize: 11 }}>{val}%</text>
                        </g>
                    );
                })}
                {data.map((d, i) => {
                    const x = startX + i * (barW + gap);
                    const h = (d.value / maxVal) * chartH;
                    const y = chartBottom - h;
                    return (
                        <g key={d.label}>
                            <rect x={x} y={y} width={barW} height={h} rx="6" fill={d.color} />
                            <text x={x + barW / 2} y={y - 10} textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 18, fontWeight: 700 }}>{d.value}%</text>
                            <text x={x + barW / 2} y={chartBottom + 20} textAnchor="middle" className="fill-[#6b7280]" style={{ fontSize: 12 }}>{d.label}</text>
                        </g>
                    );
                })}
                <text x="300" y="328" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Source: PMC, 2024</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Patients report significantly higher satisfaction with chiropractic care for chronic low back pain</figcaption>
        </figure>
    );
};

const CarePhasesChart: React.FC = () => {
    const phases = [
        { label: 'Relief Phase', freq: '2–3 visits/week', duration: '2–4 weeks', color: '#059669', desc: 'Reduce acute pain' },
        { label: 'Corrective Phase', freq: '1–2 visits/week', duration: '4–12 weeks', color: '#0891B2', desc: 'Fix root cause' },
        { label: 'Maintenance Phase', freq: '1–2 visits/month', duration: 'Ongoing', color: '#164E63', desc: 'Prevent recurrence' },
    ];
    const blockW = 170;
    const gap = 14;
    const totalW = phases.length * blockW + (phases.length - 1) * gap;
    const startX = (600 - totalW) / 2;
    const blockY = 60;
    const blockH = 140;

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 260" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Diagram showing the three phases of chiropractic care: relief, corrective, and maintenance">
                <text x="300" y="32" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>The Three Phases of Chiropractic Care</text>
                {phases.map((p, i) => {
                    const x = startX + i * (blockW + gap);
                    return (
                        <g key={p.label}>
                            <rect x={x} y={blockY} width={blockW} height={blockH} rx="12" fill={p.color} />
                            <text x={x + blockW / 2} y={blockY + 28} textAnchor="middle" fill="white" style={{ fontSize: 13, fontWeight: 700 }}>{p.label}</text>
                            <text x={x + blockW / 2} y={blockY + 56} textAnchor="middle" fill="white" style={{ fontSize: 20, fontWeight: 700 }}>{p.freq}</text>
                            <text x={x + blockW / 2} y={blockY + 82} textAnchor="middle" fill="white" fillOpacity="0.8" style={{ fontSize: 12 }}>{p.duration}</text>
                            <line x1={x + 20} y1={blockY + 96} x2={x + blockW - 20} y2={blockY + 96} stroke="white" strokeOpacity="0.3" strokeWidth="1" />
                            <text x={x + blockW / 2} y={blockY + 118} textAnchor="middle" fill="white" fillOpacity="0.9" style={{ fontSize: 12 }}>{p.desc}</text>
                            {i < phases.length - 1 && (
                                <polygon points={`${x + blockW + 2},${blockY + blockH / 2 - 6} ${x + blockW + gap - 2},${blockY + blockH / 2} ${x + blockW + 2},${blockY + blockH / 2 + 6}`} fill="#9ca3af" />
                            )}
                        </g>
                    );
                })}
                <text x="300" y="240" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Typical treatment timeline — individual plans vary based on condition severity</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Most patients progress through three phases, with visit frequency decreasing as their condition improves</figcaption>
        </figure>
    );
};

const VisitFrequencyChart: React.FC = () => {
    const data = [
        { label: 'Acute Back Pain', sessions: 10, color: '#059669' },
        { label: 'Auto Injury', sessions: 10, color: '#059669' },
        { label: 'Chronic Pain', sessions: 6, color: '#0891B2' },
        { label: 'Headaches', sessions: 6, color: '#0891B2' },
        { label: 'Wellness Care', sessions: 2, color: '#164E63' },
    ];
    const maxSessions = 12;
    const barStart = 155;
    const barEnd = 555;
    const barW = barEnd - barStart;
    const barH = 36;
    const barGap = 52;
    const startY = 60;

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 340" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Horizontal bar chart showing typical monthly visit frequency by condition type">
                <text x="300" y="32" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>Typical Sessions in First Month by Condition</text>
                {data.map((d, i) => {
                    const y = startY + i * barGap;
                    const w = (d.sessions / maxSessions) * barW;
                    return (
                        <g key={d.label}>
                            <text x={barStart - 10} y={y + barH / 2 + 5} textAnchor="end" className="fill-[#164E63]" style={{ fontSize: 12, fontWeight: 600 }}>{d.label}</text>
                            <rect x={barStart} y={y} width={barW} height={barH} rx="6" fill="#f3f4f6" />
                            <rect x={barStart} y={y} width={w} height={barH} rx="6" fill={d.color} />
                            <text x={barStart + w + 8} y={y + barH / 2 + 5} className="fill-[#164E63]" style={{ fontSize: 14, fontWeight: 700 }}>{d.sessions}</text>
                        </g>
                    );
                })}
                <text x="300" y="328" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Based on typical clinical protocols — individual treatment plans vary</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Acute conditions typically require more frequent visits initially, tapering as symptoms improve</figcaption>
        </figure>
    );
};

const SciaticaOutcomesChart: React.FC = () => {
    const data = [
        { label: 'Achieve 30%+ Pain Reduction', sublabel: 'Schneider et al., Spine', value: 94, color: '#059669' },
        { label: 'Lower Opioid Prescription Rate', sublabel: 'Pain Reports Meta-Analysis', value: 64, color: '#0891B2' },
        { label: 'Fewer Reoperations Needed', sublabel: 'MedicalXpress 2024', value: 45, color: '#164E63' },
    ];
    const barStart = 225;
    const barEnd = 555;
    const barW = barEnd - barStart;
    const barH = 42;
    const barGap = 72;
    const startY = 70;

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 310" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Horizontal bar chart showing key chiropractic outcomes for sciatica patients">
                <text x="300" y="32" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>Chiropractic Outcomes for Sciatica Patients</text>
                {data.map((d, i) => {
                    const y = startY + i * barGap;
                    const w = (d.value / 100) * barW;
                    return (
                        <g key={d.label}>
                            <text x={barStart - 10} y={y + barH / 2 - 6} textAnchor="end" className="fill-[#164E63]" style={{ fontSize: 11, fontWeight: 600 }}>{d.label}</text>
                            <text x={barStart - 10} y={y + barH / 2 + 10} textAnchor="end" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>{d.sublabel}</text>
                            <rect x={barStart} y={y} width={barW} height={barH} rx="6" fill="#f3f4f6" />
                            <rect x={barStart} y={y} width={w} height={barH} rx="6" fill={d.color} />
                            <text x={barStart + w - 10} y={y + barH / 2 + 5} textAnchor="end" fill="white" style={{ fontSize: 16, fontWeight: 700 }}>{d.value}%</text>
                        </g>
                    );
                })}
                <text x="300" y="298" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Sources: Spine 2015, Pain Reports 2025, MedicalXpress 2024</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Research shows strong outcomes for chiropractic treatment of sciatica across multiple measures</figcaption>
        </figure>
    );
};

const SciaticaRecoveryChart: React.FC = () => {
    const milestones = [
        { week: 'Week 1–2', label: 'Assessment &\nFirst Adjustments', color: '#059669', pct: 20 },
        { week: 'Week 3–4', label: 'Noticeable\nPain Reduction', color: '#0891B2', pct: 50 },
        { week: 'Week 5–8', label: 'Significant\nImprovement', color: '#0891B2', pct: 80 },
        { week: 'Week 9–12', label: 'Corrective\nCare', color: '#164E63', pct: 95 },
    ];
    const lineY = 130;
    const startX = 80;
    const endX = 530;
    const segW = (endX - startX) / (milestones.length - 1);

    return (
        <figure className="my-8">
            <svg viewBox="0 0 600 260" className="w-full rounded-2xl bg-white shadow-lg" role="img" aria-label="Timeline showing typical sciatica recovery milestones with chiropractic care">
                <text x="300" y="30" textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 16, fontWeight: 700 }}>Typical Sciatica Recovery Timeline</text>
                <text x="300" y="52" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 11 }}>Improvement percentage over time with chiropractic care</text>
                <line x1={startX} y1={lineY} x2={endX} y2={lineY} stroke="#d1d5db" strokeWidth="3" strokeLinecap="round" />
                <defs>
                    <linearGradient id="progressLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#164E63" />
                    </linearGradient>
                </defs>
                <line x1={startX} y1={lineY} x2={endX} y2={lineY} stroke="url(#progressLine)" strokeWidth="3" strokeLinecap="round" />
                {milestones.map((m, i) => {
                    const x = startX + i * segW;
                    return (
                        <g key={m.week}>
                            <circle cx={x} cy={lineY} r="14" fill={m.color} stroke="white" strokeWidth="3" />
                            <text x={x} y={lineY + 5} textAnchor="middle" fill="white" style={{ fontSize: 10, fontWeight: 700 }}>{m.pct}%</text>
                            <text x={x} y={lineY - 28} textAnchor="middle" className="fill-[#164E63]" style={{ fontSize: 12, fontWeight: 700 }}>{m.week}</text>
                            {m.label.split('\n').map((line, j) => (
                                <text key={j} x={x} y={lineY + 38 + j * 16} textAnchor="middle" className="fill-[#6b7280]" style={{ fontSize: 11 }}>{line}</text>
                            ))}
                        </g>
                    );
                })}
                <text x="300" y="245" textAnchor="middle" className="fill-[#9ca3af]" style={{ fontSize: 10 }}>Individual recovery timelines vary based on severity and cause of sciatica</text>
            </svg>
            <figcaption className="text-center text-brand-muted text-sm mt-3 italic">Most sciatica patients experience meaningful improvement within the first 3–4 weeks of chiropractic care</figcaption>
        </figure>
    );
};

export const BLOG_CHARTS: Record<string, React.FC> = {
    'overdose-deaths-2019-2024': OverdoseDeathsChart,
    'opioid-reduction-by-study': OpioidReductionChart,
    'healthcare-costs-by-provider': HealthcareCostsChart,
    'back-pain-surgery-rates': BackPainSurgeryRatesChart,
    'back-pain-satisfaction': BackPainSatisfactionChart,
    'chiropractic-care-phases': CarePhasesChart,
    'visit-frequency-by-condition': VisitFrequencyChart,
    'sciatica-outcomes': SciaticaOutcomesChart,
    'sciatica-recovery-timeline': SciaticaRecoveryChart,
};
