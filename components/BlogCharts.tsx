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

export const BLOG_CHARTS: Record<string, React.FC> = {
    'overdose-deaths-2019-2024': OverdoseDeathsChart,
    'opioid-reduction-by-study': OpioidReductionChart,
    'healthcare-costs-by-provider': HealthcareCostsChart,
};
