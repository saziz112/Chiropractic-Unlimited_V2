import React from 'react';
import { Activity, Heart, Brain, Zap, UserCheck, Stethoscope, ShieldCheck, Smile, Users } from 'lucide-react';
import { BusinessHours, NavItem, ServiceItem, ConditionItem } from './types';

export const BUSINESS_INFO = {
  name: "Chiropractic Unlimited",
  doctor: "Dr. Jason Bang DC FNP",
  phone: "(334) 219-0150",
  address: "3731 20th Ave, Valley, AL 36854",
  locationNote: "Located INSIDE the Workout Anytime gym, in the same plaza as Ace Hardware.",
  email: "hello@chiropracticunlimited.com", // Placeholder
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.867566120892!2d-85.17935492358896!3d32.816698673646985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cb3764835687b%3A0x63351368560064f7!2s3731%2020th%20Ave%2C%20Valley%2C%20AL%2036854!5e0!3m2!1sen!2sus!4v1714589000000!5m2!1sen!2sus"
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/chiropracticunlimited/",
  google: "https://www.google.com/search?q=chiropractic+unlimited+valley+al",
  facebook: "#"
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Conditions',
    children: [
      { label: 'Low Back Pain', href: '/conditions/low-back-pain' },
      { label: 'Neck Pain', href: '/conditions/neck-pain' },
      { label: 'Headaches & Migraines', href: '/conditions/headaches' },
      { label: 'Sciatica', href: '/conditions/sciatica' },
      { label: 'Auto Injuries', href: '/conditions/auto-injuries' },
      { label: 'Poor Posture', href: '/conditions/poor-posture' },
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Shockwave Therapy', href: '/services/shockwave-therapy' },
      { label: 'Holistic Wellness', href: '/services/holistic-wellness' },
      { label: 'Spinal Correction', href: '/services/spinal-correction' },
      { label: 'Integrated Care', href: '/services/integrated-care' },
      { label: 'Performance', href: '/services/performance' },
    ]
  },
  {
    label: 'Patients',
    children: [
      { label: 'Athletes', href: '/patients/athletes' },
      { label: 'Pregnancy', href: '/patients/pregnancy' },
      { label: 'Pediatrics', href: '/patients/pediatrics' },
      { label: 'Testimonials', href: '/#testimonials' },
      { label: 'New Patient Offer', href: '/#offers' },
      { label: 'The Process', href: '/#how-it-works' },
    ]
  },
  { label: 'Doctors', href: '/#about' },
  { label: 'Offers', href: '/#offers' },
  {
    label: 'Other',
    children: [
      { label: 'Location', href: '/#location' },
      { label: 'Book Online', href: '/#booking' },
    ]
  }
];

export const HOURS: BusinessHours[] = [
  { day: 'Monday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Wednesday', hours: 'Closed' },
  { day: 'Thursday', hours: 'Closed' },
  { day: 'Friday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const PATIENTS: import('./types').PatientItem[] = [
  {
    slug: "athletes",
    title: "Athletes",
    description: "Peak performance and faster recovery.",
    fullDescription: "Whether you're a CrossFit competitor, runner, or weekend warrior, your body takes a beating. We specialize in optimizing biomechanics, treating sports injuries, and helping you recover faster so you can get back to doing what you love.",
    benefits: [
      "Enhanced range of motion",
      "Faster injury recovery",
      "Performance optimization",
      "Injury prevention strategies"
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Sports Chiropractor for Athletes in Valley, AL | Dr. Jason Bang",
    metaDescription: "Boost athletic performance and recover faster with sports chiropractic care in Valley, AL. Dr. Bang treats sports injuries, improves biomechanics, and prevents future pain."
  },
  {
    slug: "pregnancy",
    title: "Pregnancy",
    description: "Safe, gentle care for expectant mothers.",
    fullDescription: "Pregnancy brings significant changes to a woman's body. Our gentle, specific chiropractic care helps manage pelvic balance, reduce back pain, and prepare the body for a smoother labor and delivery.",
    benefits: [
      "Relief from back and pelvic pain",
      "Webster Technique certified care",
      "Better pelvic alignment",
      "Reduced labor times"
    ],
    image: "https://images.unsplash.com/photo-1555252333-9f8e9cdcd78e?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Prenatal Chiropractor in Valley, AL | Pregnancy Pain Relief",
    metaDescription: "Experiencing back or pelvic pain during pregnancy? Dr. Jason Bang offers safe, gentle prenatal chiropractic care to help you feel your best and prepare for labor."
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    description: "Gentle chiropractic for growing bodies.",
    fullDescription: "From birth trauma to heavy backpacks and tech-neck, children experience stress on their spines too. We provide extremely gentle, safe adjustments to help children grow straight and healthy.",
    benefits: [
      "Support for ear infections & colic",
      "Better sleep quality",
      "Improved immune system",
      "Healthy spinal development"
    ],
    image: "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Pediatric Chiropractor in Valley, AL | Gentle Care for Kids",
    metaDescription: "Safe, gentle chiropractic care for children in Valley, AL. From colic and ear infections to growing pains, Dr. Bang helps kids grow up healthy and strong."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "shockwave-therapy",
    title: "Shockwave Therapy",
    description: "Advanced non-invasive treatment for chronic pain and musculoskeletal conditions.",
    fullDescription: "Shockwave therapy is a non-invasive treatment that uses high-energy acoustic waves to stimulate healing in injured tissues. It is particularly effective for chronic conditions that haven't responded to traditional therapies — including plantar fasciitis, tennis elbow, shoulder tendinitis, and chronic low back pain. At Chiropractic Unlimited, we use this technology to accelerate your recovery and get you back to the activities you love.",
    benefits: [
      "Accelerated tissue repair and cell growth",
      "Analgesic effect for pain reduction",
      "Restoration of mobility",
      "Non-surgical and drug-free",
      "Effective for chronic conditions that resist other treatments",
      "Quick treatment sessions (15-20 minutes)"
    ],
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Shockwave Therapy in Valley, AL | Dr. Jason Bang",
    metaDescription: "Advanced shockwave therapy for chronic pain in Valley, AL. Dr. Jason Bang uses acoustic wave technology to heal injuries without surgery or drugs. Book today.",
    approach: "We combine shockwave therapy with precise spinal correction for a comprehensive approach. During each session, targeted acoustic waves are delivered to the injured area, stimulating blood flow and triggering the body's natural healing response. Most patients experience noticeable improvement within 3-5 sessions, and we pair every treatment with corrective care to address the structural issues that caused the injury in the first place.",
    faqs: [
      {
        question: "What does shockwave therapy feel like?",
        answer: "Most patients describe it as a rapid tapping sensation. There may be some mild discomfort in the treatment area, but sessions are quick (15-20 minutes) and well-tolerated. Many patients feel relief immediately after."
      },
      {
        question: "What conditions does shockwave therapy treat?",
        answer: "It's highly effective for plantar fasciitis, tennis/golfer's elbow, shoulder tendinitis, chronic low back pain, knee pain, and soft tissue injuries that haven't responded to other treatments."
      },
      {
        question: "How many sessions will I need?",
        answer: "Most conditions respond well within 3-6 sessions, typically scheduled once per week. We'll evaluate your progress and adjust the treatment plan as needed."
      },
      {
        question: "Is shockwave therapy covered by insurance?",
        answer: "We are a cash-based practice, which means we can offer this advanced therapy without insurance restrictions. We provide affordable care plans to make treatment accessible."
      }
    ]
  },
  {
    slug: "holistic-wellness",
    title: "Holistic Wellness",
    description: "Focusing on the whole person to improve quality of life beyond just symptom relief.",
    fullDescription: "Our holistic wellness approach looks at your health from the inside out. We don't just treat symptoms; we identify and address the root causes of dysfunction to help you achieve optimal vitality. From nutritional guidance to stress management and spinal wellness, we create a personalized plan that supports your body's ability to heal and thrive long-term.",
    benefits: [
      "Improved energy levels",
      "Better stress management",
      "Enhanced immune function",
      "Long-term health resilience",
      "Nutritional and lifestyle guidance",
      "Proactive disease prevention"
    ],
    icon: <Heart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Holistic Wellness Care in Valley, AL | Dr. Jason Bang",
    metaDescription: "Experience holistic chiropractic wellness in Valley, AL. Dr. Jason Bang addresses the root cause of dysfunction to help you achieve optimal health and vitality.",
    approach: "True wellness goes beyond the absence of pain. We assess your overall health — spinal alignment, nervous system function, lifestyle habits, and stress levels — to build a comprehensive wellness strategy. Regular chiropractic adjustments keep your nervous system functioning optimally, while personalized guidance on nutrition, movement, and recovery helps you sustain your results between visits.",
    faqs: [
      {
        question: "What makes holistic wellness different from regular chiropractic?",
        answer: "While standard chiropractic focuses on pain relief, our holistic approach considers your entire health picture — nutrition, stress, sleep, posture, and nervous system function — to help you thrive, not just survive."
      },
      {
        question: "Do I need to be in pain to benefit from wellness care?",
        answer: "Not at all. Many of our wellness patients come in feeling fine but want to optimize their health, prevent future problems, and maintain peak performance. Think of it as proactive health maintenance."
      },
      {
        question: "What does a wellness plan include?",
        answer: "Your personalized plan may include regular spinal adjustments, nutritional recommendations, exercise guidance, stress management strategies, and periodic progress evaluations to keep you on track."
      }
    ]
  },
  {
    slug: "spinal-correction",
    title: "Spinal Correction",
    description: "Gentle and effective spinal adjustments to restore proper alignment and function.",
    fullDescription: "Precise spinal adjustments are the foundation of chiropractic care. By restoring proper alignment, we remove interference from your nervous system, allowing your body to heal and function at its best. At Chiropractic Unlimited, we go beyond quick fixes — our corrective care plans are designed to produce lasting structural changes that hold over time.",
    benefits: [
      "Improved nervous system function",
      "Reduced joint inflammation",
      "Better posture",
      "Enhanced mobility",
      "Long-term structural correction",
      "Reduced dependency on pain medication"
    ],
    icon: <Activity className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Spinal Correction & Chiropractic Adjustments in Valley, AL | Dr. Jason Bang",
    metaDescription: "Gentle, precise spinal correction in Valley, AL. Dr. Jason Bang restores proper alignment to relieve pain and optimize nervous system function. Book now.",
    approach: "We start with a thorough spinal evaluation to identify misalignments (subluxations) and their impact on your nervous system. Using gentle, specific adjustment techniques, we progressively restore proper spinal curves and alignment. Unlike quick-fix approaches, our corrective care plans include follow-up assessments to track structural improvement and ensure your spine holds its correction long-term.",
    faqs: [
      {
        question: "Does a chiropractic adjustment hurt?",
        answer: "Most patients feel immediate relief after an adjustment. You may hear a popping sound, which is simply gas releasing from the joint — it's completely normal. Dr. Bang uses gentle, controlled techniques suited to your comfort level."
      },
      {
        question: "How is corrective care different from regular adjustments?",
        answer: "Regular adjustments provide temporary relief. Corrective care follows a structured plan to progressively restore proper spinal alignment, much like braces straighten teeth over time. The goal is lasting structural change."
      },
      {
        question: "How long does a corrective care plan take?",
        answer: "Plans typically span several weeks to a few months depending on the severity of misalignment and how long it's been present. We'll outline your specific timeline after your initial evaluation."
      },
      {
        question: "Can spinal correction help conditions besides back pain?",
        answer: "Absolutely. Because the spine houses and protects the nervous system, correcting misalignments can improve headaches, digestive issues, sleep quality, immune function, and overall energy levels."
      }
    ]
  },
  {
    slug: "integrated-care",
    title: "Integrated Care",
    description: "Combining chiropractic expertise with nursing knowledge for a comprehensive health approach.",
    fullDescription: "With Dr. Bang's unique background as both a Doctor of Chiropractic and a Family Nurse Practitioner, we offer a truly integrated clinical experience that bridges the gap between traditional and alternative medicine. This dual expertise means we can evaluate your health from multiple perspectives and provide care that considers the full clinical picture.",
    benefits: [
      "Comprehensive clinical assessments",
      "Expertise in both wellness and medical care",
      "Evidence-based treatment protocols",
      "Personalized wellness coaching",
      "Holistic understanding of your health",
      "Bridging chiropractic and medical perspectives"
    ],
    icon: <Stethoscope className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Integrated Chiropractic & Medical Care in Valley, AL | Dr. Jason Bang DC FNP",
    metaDescription: "Dr. Jason Bang is both a Doctor of Chiropractic and Family Nurse Practitioner in Valley, AL. Get comprehensive integrated care that bridges wellness and medicine.",
    approach: "Dr. Bang's dual credentials as a DC and FNP allow him to approach your health from both a structural and clinical perspective. Whether you need a spinal adjustment, a clinical assessment, or guidance navigating a complex health concern, you get a provider who understands both sides. This integrated model means fewer referrals, better communication, and a more complete picture of your health — all under one roof.",
    faqs: [
      {
        question: "What does it mean that Dr. Bang is both a DC and FNP?",
        answer: "Dr. Bang holds a Doctor of Chiropractic (DC) degree and a Family Nurse Practitioner (FNP) certification. This means he's trained in both spinal/musculoskeletal care and clinical medicine, giving him a uniquely comprehensive perspective on patient health."
      },
      {
        question: "How does integrated care benefit me as a patient?",
        answer: "You get a provider who can evaluate musculoskeletal issues alongside broader health concerns. This means more accurate diagnoses, better-coordinated care, and a treatment approach that considers your whole health — not just one system."
      },
      {
        question: "Can Dr. Bang handle both my chiropractic and medical needs?",
        answer: "For many patients, yes. His integrated approach covers spinal correction, wellness care, clinical assessments, and health coaching. For conditions outside his scope, he'll coordinate with the appropriate specialist."
      }
    ]
  },
  {
    slug: "performance",
    title: "Performance",
    description: "Helping you move better, recover faster, and perform at your peak.",
    fullDescription: "Optimize your body's potential with care designed for athletes and active individuals. Whether you're a competitive athlete, a weekend warrior, or someone who wants to move without limitations, we focus on biomechanics, neural efficiency, and recovery to help you push your limits safely and sustainably.",
    benefits: [
      "Faster recovery times",
      "Increased athletic performance",
      "Injury prevention",
      "Neural pathway optimization",
      "Improved range of motion and flexibility",
      "Biomechanical assessment and correction"
    ],
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Sports Performance & Recovery in Valley, AL | Dr. Jason Bang",
    metaDescription: "Optimize athletic performance and recovery in Valley, AL. Dr. Jason Bang provides chiropractic care for athletes — biomechanics, injury prevention, and faster recovery.",
    approach: "We assess your movement patterns, joint mobility, and spinal alignment to identify limitations that hold back performance. Through targeted spinal adjustments, we optimize neural communication between your brain and muscles for faster reaction times and better coordination. Combined with shockwave therapy for recovery and specific mobility work, our performance care helps you train harder, recover faster, and compete at your best.",
    faqs: [
      {
        question: "Do I need to be a professional athlete to benefit from performance care?",
        answer: "Not at all. Whether you're a CrossFitter, runner, gym-goer, or just want to stay active without pain, performance care helps you move better and recover faster at any level."
      },
      {
        question: "How does chiropractic improve athletic performance?",
        answer: "Proper spinal alignment optimizes nervous system function, which controls every muscle contraction, reflex, and movement pattern. Athletes under regular chiropractic care often report improved reaction time, power output, and reduced injury rates."
      },
      {
        question: "Can you help with sports injury recovery?",
        answer: "Yes. We combine spinal correction with shockwave therapy to treat sports injuries like sprains, strains, tendinitis, and overuse injuries. Our goal is to get you back to your sport as quickly and safely as possible."
      },
      {
        question: "How often should athletes get adjusted?",
        answer: "Many of our athletes come in weekly or bi-weekly during training and competition seasons. The frequency depends on your activity level, goals, and how your body responds to care."
      }
    ]
  }
];

export const CONDITIONS: ConditionItem[] = [
  {
    slug: "low-back-pain",
    title: "Low Back Pain",
    description: "The most common reason for missed work and restricted movement.",
    details: "Low back pain can range from a dull ache to sharp, debilitating stabs. In Valley, AL, we see many patients suffering from work-related injuries, sciatica, and herniated discs. We identify the specific spinal misalignments causing this pain and provide long-term corrective solutions.",
    symptoms: ["Stiffness", "Muscle spasms", "Numbness in legs (Sciatica)", "Sharp localized pain", "Difficulty standing or sitting"],
    image: "https://plus.unsplash.com/premium_photo-1723924974091-859223dad2fd?q=80&w=800&auto=format&fit=crop",
    // SEO Content
    metaTitle: "Low Back Pain Relief in Valley, AL | Dr. Jason Bang",
    metaDescription: "Suffering from low back pain or sciatica in Valley, AL? Dr. Jason Bang offers non-invasive spinal correction and shockwave therapy for lasting relief. Book today.",
    approach: "At Chiropractic Unlimited, we go beyond temporary relief. Our approach combines precise **spinal correction** to realign vertebrae with advanced **shockwave therapy** to heal damaged tissue. Whether it's a herniated disc, sciatica, or chronic stiffness, we identify the root cause to restore your mobility without drugs or surgery.",
    faqs: [
      {
        question: "When should I see a chiropractor for back pain?",
        answer: "If your pain persists for more than a few days, radiates down your leg, or limits your movement, it's time to see a professional. Early intervention can prevent chronic issues."
      },
      {
        question: "Can you help with sciatica?",
        answer: "Yes! Sciatica is often caused by nerve compression in the lower back. Our spinal decompression and adjustment techniques relieve this pressure, stopping the pain at its source."
      },
      {
        question: "Do you accept insurance?",
        answer: "We are a cash-based practice, which allows us to provide the highest quality of care without insurance limitations. We offer affordable care plans to make treatment accessible for everyone in the Valley area."
      },
      {
        question: "How long does treatment take?",
        answer: "Every patient is different. Some find relief in just a few visits, while correcting long-standing spinal issues may take a comprehensive plan. We will outline your specific timeline during your consultation."
      }
    ]
  },
  {
    slug: "neck-pain",
    title: "Neck Pain",
    description: "Often caused by poor posture, stress, or minor injuries like whiplash.",
    details: "Chronic neck pain is frequently a result of cervical spinal misalignments from hours at a desk, sleeping in awkward positions, or underlying injuries like whiplash. In Valley, AL, we see patients every day whose neck pain limits their ability to drive, work, and enjoy life. We pinpoint the exact vertebral dysfunction and provide targeted care to restore your full range of motion.",
    symptoms: ["Tightness", "Reduced range of motion", "Dizziness", "Pain radiating to shoulders", "Difficulty sleeping", "Tension headaches"],
    image: "https://plus.unsplash.com/premium_photo-1661517603309-e9d451e395b0?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Neck Pain Relief in Valley, AL | Dr. Jason Bang",
    metaDescription: "Struggling with chronic neck pain or stiffness in Valley, AL? Dr. Jason Bang provides gentle spinal correction and integrated care for lasting neck pain relief.",
    approach: "We start with a thorough evaluation of your cervical spine to identify misalignments and muscle imbalances. Using gentle **spinal correction** techniques, we restore proper alignment to take pressure off compressed nerves. For stubborn cases, **shockwave therapy** accelerates healing in the surrounding soft tissue, giving you relief without medication.",
    faqs: [
      {
        question: "What causes neck pain that won't go away?",
        answer: "Persistent neck pain is often caused by cervical misalignment, degenerative disc issues, or chronic muscle tension from poor posture. Without correcting the underlying structural problem, the pain cycle continues."
      },
      {
        question: "Is chiropractic safe for neck adjustments?",
        answer: "Absolutely. Dr. Bang uses precise, gentle techniques tailored to each patient. Our approach focuses on low-force corrections that are safe and effective for all ages."
      },
      {
        question: "How many visits will I need for neck pain?",
        answer: "Most patients notice improvement within the first few visits. A full corrective plan depends on the severity and duration of your condition, which we'll outline during your initial consultation."
      },
      {
        question: "Can neck problems cause headaches?",
        answer: "Yes — cervicogenic headaches are one of the most common types we treat. Misalignments in the upper cervical spine can refer pain into the head, temples, and behind the eyes."
      }
    ]
  },
  {
    slug: "headaches",
    title: "Headaches & Migraines",
    description: "Relief from tension headaches and chronic migraines through spinal health.",
    details: "If you're relying on painkillers just to get through the day, there's a better way. Many headaches and migraines originate from tension, misalignment, and nerve irritation in the cervical spine — not just stress. At Chiropractic Unlimited, we address the structural root cause so you can break free from the cycle of recurring headaches.",
    symptoms: ["Pulsing or throbbing pain", "Sensitivity to light and sound", "Neck stiffness before onset", "Temporal or behind-the-eye pressure", "Nausea during episodes", "Pain worsening with activity"],
    image: "https://plus.unsplash.com/premium_photo-1661775923999-698b5481e8b5?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Headache & Migraine Relief in Valley, AL | Dr. Jason Bang",
    metaDescription: "Tired of chronic headaches and migraines in Valley, AL? Dr. Jason Bang treats the spinal root cause of headaches with gentle, drug-free chiropractic care.",
    approach: "Our approach targets the upper cervical spine, where misalignments commonly trigger tension headaches and migraines. Through precise **spinal correction**, we relieve nerve compression and restore proper blood flow. Combined with postural guidance and lifestyle modifications, most patients experience a significant reduction in headache frequency and severity.",
    faqs: [
      {
        question: "Can a chiropractor really help with migraines?",
        answer: "Yes. Research shows that spinal manipulation — especially in the cervical region — can reduce migraine frequency and intensity. Many of our patients report dramatic improvement after just a few weeks of care."
      },
      {
        question: "What type of headaches does chiropractic treat?",
        answer: "We treat tension headaches, cervicogenic headaches (originating from the neck), and migraines. If your headaches come with neck stiffness or worsen with posture, chiropractic care is especially effective."
      },
      {
        question: "Will I need to keep coming back?",
        answer: "Our goal is to correct the underlying problem, not create dependency. Many patients transition to periodic wellness visits after their initial corrective phase to maintain results."
      }
    ]
  },
  {
    slug: "sciatica",
    title: "Sciatica",
    description: "Shooting pain that travels down the leg from the lower back.",
    details: "Sciatica is more than just back pain — it's a nerve compression problem that sends shooting, burning pain down through the buttock and leg. Whether it's caused by a herniated disc, spinal stenosis, or piriformis syndrome, the result is the same: it stops you in your tracks. We specialize in identifying exactly where the sciatic nerve is being pinched and relieving that pressure without surgery.",
    symptoms: ["Shooting pain down the leg", "Burning or tingling sensation", "Numbness in the foot or toes", "Lower back tightness", "Leg weakness", "Pain worsening when sitting"],
    image: "https://plus.unsplash.com/premium_photo-1664303718610-b6bcb2c6758e?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Sciatica Treatment in Valley, AL | Dr. Jason Bang",
    metaDescription: "Suffering from sciatica or leg pain in Valley, AL? Dr. Jason Bang provides non-surgical spinal decompression and correction for lasting sciatic nerve relief.",
    approach: "We use a combination of **spinal correction** and decompression techniques to relieve pressure on the sciatic nerve at its source. For patients with chronic or stubborn sciatica, **shockwave therapy** helps break down scar tissue and inflammation around the nerve root. Our integrated approach addresses the disc, joint, and muscle components simultaneously for faster, more complete recovery.",
    faqs: [
      {
        question: "How do I know if it's sciatica or just back pain?",
        answer: "Sciatica is characterized by pain that radiates from the lower back down through the buttock and into the leg. If your pain follows this pattern — especially with numbness, tingling, or weakness — it's likely sciatic nerve involvement."
      },
      {
        question: "Can sciatica go away on its own?",
        answer: "Mild cases sometimes resolve, but the underlying structural issue (disc herniation, misalignment) often remains and can flare up again. Corrective chiropractic care addresses the root cause to prevent recurrence."
      },
      {
        question: "Is chiropractic better than surgery for sciatica?",
        answer: "For most cases, conservative chiropractic care is the recommended first line of treatment. Surgery is typically only needed for severe cases that don't respond to non-invasive approaches. We help many patients avoid surgery entirely."
      },
      {
        question: "How quickly will I feel relief?",
        answer: "Many patients notice improvement within the first 2-3 visits as we begin decompressing the nerve. A full corrective plan typically takes several weeks, depending on severity."
      }
    ]
  },
  {
    slug: "auto-injuries",
    title: "Auto Injuries",
    description: "Specialized care for car accident recovery and whiplash treatment.",
    details: "Car accidents — even minor fender benders — can cause serious spinal injuries that don't show symptoms for days or even weeks. Whiplash, disc injuries, and soft tissue damage are often invisible on standard X-rays but can lead to chronic pain if left untreated. At Chiropractic Unlimited, we provide thorough post-accident evaluations and create recovery plans that get you back to normal as quickly as possible.",
    symptoms: ["Whiplash and neck stiffness", "Delayed onset pain (days after accident)", "Soft tissue soreness and swelling", "Headaches and dizziness", "Reduced range of motion", "Numbness or tingling in arms"],
    image: "https://plus.unsplash.com/premium_photo-1661370337354-558d7120eb54?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Auto Injury & Whiplash Treatment in Valley, AL | Dr. Jason Bang",
    metaDescription: "Been in a car accident in Valley, AL? Dr. Jason Bang provides specialized chiropractic care for whiplash, auto injuries, and post-accident recovery. Book today.",
    approach: "After an accident, time matters. We perform a comprehensive spinal evaluation to identify injuries that may not yet be causing symptoms. Our treatment combines **spinal correction** to restore alignment disrupted by the impact with **shockwave therapy** to accelerate soft tissue healing. As both a Doctor of Chiropractic and a Family Nurse Practitioner, Dr. Bang provides an integrated clinical perspective that ensures nothing is missed.",
    faqs: [
      {
        question: "How soon after an accident should I see a chiropractor?",
        answer: "As soon as possible — ideally within the first 72 hours. Early intervention prevents acute injuries from becoming chronic conditions. Even if you feel fine, hidden injuries can develop into serious problems weeks later."
      },
      {
        question: "I feel fine after my accident. Do I still need care?",
        answer: "Many auto injuries have delayed symptoms. Whiplash, disc injuries, and soft tissue damage can take days or weeks to manifest. A thorough evaluation can catch these issues before they become chronic."
      },
      {
        question: "Do you work with auto insurance or personal injury cases?",
        answer: "We are a cash-based practice that provides documentation and records that can support your personal injury claim. We focus on getting you healthy while providing the clinical records your case may require."
      },
      {
        question: "What is whiplash and how do you treat it?",
        answer: "Whiplash is a neck injury caused by the rapid back-and-forth motion during a collision. We treat it with gentle cervical adjustments, soft tissue therapy, and rehabilitative exercises to restore stability and range of motion."
      }
    ]
  },
  {
    slug: "poor-posture",
    title: "Poor Posture",
    description: "Correcting 'tech neck' and structural imbalances from modern lifestyles.",
    details: "Hours at a desk, constant phone use, and sedentary lifestyles are reshaping our spines — and not for the better. Forward head posture, rounded shoulders, and loss of the natural cervical curve are epidemic. These aren't just cosmetic issues; they compress nerves, restrict breathing, and accelerate spinal degeneration. We help you reverse these structural shifts and rebuild proper alignment.",
    symptoms: ["Rounded shoulders", "Forward head posture (tech neck)", "Chronic fatigue and low energy", "Upper and mid-back pain", "Difficulty standing straight", "Jaw tension and TMJ issues"],
    image: "https://plus.unsplash.com/premium_photo-1682126239728-43b4e30792d6?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Posture Correction in Valley, AL | Dr. Jason Bang",
    metaDescription: "Struggling with tech neck or poor posture in Valley, AL? Dr. Jason Bang provides corrective chiropractic care to restore spinal alignment and relieve pain.",
    approach: "We begin with a postural analysis and spinal assessment to measure the extent of structural shift. Our corrective care plan uses targeted **spinal correction** to restore proper curves and alignment, combined with specific exercises to retrain supporting muscles. Over time, your body learns to hold the correct posture naturally — reducing pain, improving breathing, and boosting energy levels.",
    faqs: [
      {
        question: "Can poor posture really cause that much pain?",
        answer: "Yes. For every inch your head shifts forward, it adds roughly 10 pounds of stress to your cervical spine. Over time, this leads to disc degeneration, nerve compression, chronic headaches, and upper back pain."
      },
      {
        question: "How long does it take to correct posture?",
        answer: "Postural correction is a gradual process that depends on how long the problem has existed. Most patients see measurable structural improvement within 8-12 weeks of consistent care and at-home exercises."
      },
      {
        question: "Will I need to do exercises at home?",
        answer: "Yes — and that's a good thing. We'll give you specific, simple exercises that retrain your postural muscles. The combination of in-office adjustments and at-home rehab is what produces lasting results."
      },
      {
        question: "Is posture correction just for people with pain?",
        answer: "Not at all. Proactive posture correction prevents future spinal degeneration, improves athletic performance, enhances breathing capacity, and boosts overall energy and well-being."
      }
    ]
  },
];

export const TESTIMONIALS = [
  {
    text: "My experience was wonderful. They were helpful, caring and friendly. Dr. Jason was a gift. He helped me straighten my spine and gave me many tips and exercises that helped me get rid of my bad habits. I regained flexibility and gained more energy.",
    author: "Karrar A.",
    type: "Patient"
  },
  {
    text: "I found this practice while I was 6 months pregnant. I had horrible hip pain and needed help. Dr. Bang and his wonderful staff are so attentive. As a mom, I highly recommend them for your family.",
    author: "Britton Grace K.",
    type: "Patient"
  },
  {
    text: "I’ve been a patient here for over a month due to being involved in a car accident. The staff is amazing, very clean and friendly place. Most importantly they are focused on getting your health better and breaking bad habits.",
    author: "L. Lopez",
    type: "Patient"
  }
];

export const HOW_IT_WORKS = [
  {
    title: "Better",
    description: "Our immediate focus is to stop the damage and stabilize the problem to allow you to start healing and feel better fast.",
    step: "01"
  },
  {
    title: "Stronger",
    description: "We’ll help you retrain your body and your spine so you can be the person you want to be and do the things you love.",
    step: "02"
  },
  {
    title: "Healthier",
    description: "We’ll help you reach the optimal level of health and protect the gains you’ve made so you can set and reach even higher goals!",
    step: "03"
  }
];

export const DIFFERENCE_POINTS = [
  {
    title: "Get To The Root Cause",
    description: "We believe true healing begins with uncovering the root cause of your problem—not just masking them. Our approach focuses on correcting underlying issues.",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "True Health Partnership",
    description: "We’re more than just a clinic—we’re your partners in health. Together, we’ll create a personalized plan tailored to your specific goals.",
    icon: <Users className="w-10 h-10" />
  },
  {
    title: "Lifestyle Success Strategy",
    description: "Chiropractic care is a lifestyle success strategy. We help you optimize your body’s natural function to thrive physically, mentally, and emotionally.",
    icon: <Smile className="w-10 h-10" />
  }
];

export const BIO_TEXT = [
  `Dr. Jason Bang DC FNP is a proud graduate of Life University in Marietta, GA, with a deep passion for improving the quality of life in others through wellness-based care. My journey in chiropractic has taken me across the globe, mentoring and learning alongside professionals in countries like Canada, Germany, and China.`,
  `Driven by a desire to expand his ability to serve, Dr. Bang pursued a degree in nursing and recently graduated as a Family Nurse Practitioner (FNP). Having worked as a registered nurse during the COVID-19 pandemic and at the VA Hospital in Birmingham, Alabama, these experiences have deepened his compassion and reinforced his commitment to integrated care.`
];