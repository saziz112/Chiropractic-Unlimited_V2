import React from 'react';
import { Activity, Heart, Brain, Zap, UserCheck, Stethoscope, ShieldCheck, Smile, Users } from 'lucide-react';
import { BusinessHours, NavItem, ServiceItem, ConditionItem, ServiceAreaItem } from './types';

export const BUSINESS_INFO = {
  name: "Chiropractic Unlimited",
  doctor: "Dr. Jason Bang DC FNP",
  phone: "(334) 219-0150",
  address: "3731 20th Ave, Valley, AL 36854",
  locationNote: "Located INSIDE the Workout Anytime gym, in the same plaza as Ace Hardware.",
  email: "info@chirounlimitedwellness.com",
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
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Locations',
    children: [
      { label: 'Lanett, AL', href: '/locations/lanett-al' },
      { label: 'West Point, GA', href: '/locations/west-point-ga' },
      { label: 'LaFayette, AL', href: '/locations/lafayette-al' },
      { label: 'Opelika, AL', href: '/locations/opelika-al' },
      { label: 'Our Location', href: '/#location' },
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
    metaDescription: "Boost athletic performance and recover faster with sports chiropractic care in Valley, AL. Dr. Bang treats sports injuries, improves biomechanics, and prevents future pain.",
    approach: "We start with a full biomechanical assessment to identify movement restrictions, spinal misalignments, and muscle imbalances that limit your performance. From there, we build a corrective care plan using **targeted spinal adjustments** to restore proper alignment and optimize nervous system function. Whether you're recovering from a sports injury or looking to gain a competitive edge, our approach addresses the structural foundation your body relies on to move, recover, and perform at its best.",
    faqs: [
      {
        question: "Do I need to be a professional athlete to benefit?",
        answer: "Not at all. Whether you're a competitive athlete, weekend warrior, or just someone who wants to stay active without pain, our sports chiropractic care helps you move better and recover faster at any level."
      },
      {
        question: "Can chiropractic care actually improve performance?",
        answer: "Yes. Proper spinal alignment optimizes nervous system function, which controls every muscle contraction, reflex, and movement pattern. Athletes under regular chiropractic care often report improved reaction time, power output, and reduced injury rates."
      },
      {
        question: "What sports injuries do you treat?",
        answer: "We treat a wide range of sports injuries including sprains, strains, tendinitis, overuse injuries, and joint dysfunction. Our goal is to get you back to your sport as quickly and safely as possible."
      },
      {
        question: "How often should athletes get adjusted?",
        answer: "Many of our athletes come in weekly or bi-weekly during training and competition seasons. The frequency depends on your activity level, goals, and how your body responds to care."
      }
    ]
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
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Prenatal Chiropractor in Valley, AL | Pregnancy Pain Relief",
    metaDescription: "Experiencing back or pelvic pain during pregnancy? Dr. Jason Bang offers safe, gentle prenatal chiropractic care to help you feel your best and prepare for labor.",
    approach: "Our prenatal care begins with a thorough evaluation of your spinal and pelvic alignment. Using the **Webster Technique**, we gently correct sacral misalignments that can contribute to pelvic imbalance, back pain, and even breech positioning. Each adjustment is tailored to your stage of pregnancy, using specialized positioning and low-force techniques that are completely safe for both mom and baby. Our goal is to keep you comfortable, mobile, and prepared for a smoother labor and delivery.",
    faqs: [
      {
        question: "Is chiropractic care safe during pregnancy?",
        answer: "Absolutely. Our techniques are specifically adapted for pregnant patients. We use gentle, low-force adjustments and specialized positioning to ensure complete comfort and safety at every stage of pregnancy."
      },
      {
        question: "What is the Webster Technique?",
        answer: "The Webster Technique is a specific chiropractic analysis and adjustment for pregnant women. It focuses on reducing sacral misalignment and improving pelvic balance, which can help the baby achieve optimal positioning for birth."
      },
      {
        question: "When should I start prenatal chiropractic care?",
        answer: "You can benefit from chiropractic care at any stage of pregnancy. Many women start in the first trimester to stay ahead of the changes, while others come in later when discomfort increases. The sooner you start, the more proactive we can be."
      },
      {
        question: "Can chiropractic care help with labor?",
        answer: "Yes. Studies show that regular chiropractic care during pregnancy can contribute to shorter labor times and reduce the need for interventions. Proper pelvic alignment gives the baby more room to move into the ideal birth position."
      }
    ]
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
    metaDescription: "Safe, gentle chiropractic care for children in Valley, AL. From colic and ear infections to growing pains, Dr. Bang helps kids grow up healthy and strong.",
    approach: "Children are not small adults — their spines and nervous systems are developing rapidly, and even minor misalignments can affect their health in ways that aren't always obvious. We use **extremely gentle, low-force techniques** specifically designed for pediatric patients. Our evaluations look at spinal alignment, posture, and neurological development to catch issues early. Whether your child is dealing with colic, ear infections, growing pains, or the effects of screen time and heavy backpacks, we provide safe, effective care that supports their growth and development.",
    faqs: [
      {
        question: "At what age can a child see a chiropractor?",
        answer: "Children can benefit from chiropractic care at any age, even as newborns. Birth itself can place significant stress on a baby's spine and nervous system. Our pediatric adjustments are incredibly gentle — using no more pressure than you'd use to test the ripeness of a tomato."
      },
      {
        question: "Is chiropractic safe for children?",
        answer: "Absolutely. Pediatric chiropractic care uses very gentle, low-force techniques that are completely different from adult adjustments. Dr. Bang has specialized training in pediatric care and tailors every adjustment to the child's age and size."
      },
      {
        question: "What signs might indicate my child needs chiropractic care?",
        answer: "Common signs include frequent ear infections, colic, difficulty sleeping, poor posture, complaints of back or neck pain, headaches, and uneven gait or movement patterns. Even children without obvious symptoms can benefit from wellness check-ups."
      },
      {
        question: "How often does a child need to be adjusted?",
        answer: "It depends on the child's specific needs. Some children respond quickly and only need occasional wellness visits, while others with specific conditions may need a short series of visits. We'll create a plan based on your child's individual evaluation."
      }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
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
    approach: "We assess your movement patterns, joint mobility, and spinal alignment to identify limitations that hold back performance. Through targeted spinal adjustments, we optimize neural communication between your brain and muscles for faster reaction times and better coordination. Combined with specific mobility work and corrective care, our performance program helps you train harder, recover faster, and compete at your best.",
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
        answer: "Yes. We use targeted spinal correction and integrated rehabilitation to treat sports injuries like sprains, strains, tendinitis, and overuse injuries. Our goal is to get you back to your sport as quickly and safely as possible."
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
    details: "Low back pain is the leading cause of disability worldwide and the number one reason Americans miss work. Despite how common it is, most people never address the underlying structural cause — they cycle through pain medication, rest, and occasional physical therapy without ever correcting what's actually wrong with their spine. This is why so many people in Valley, AL find themselves dealing with the same back pain year after year.\n\nThe lumbar spine bears the weight of your entire upper body while simultaneously allowing you to bend, twist, lift, and move. It's a remarkable structure, but it's also highly vulnerable to injury and degeneration when spinal alignment is compromised. Even minor vertebral misalignments can place uneven pressure on intervertebral discs, irritate or compress spinal nerves, and trigger protective muscle spasms that spread pain across the lower back, hips, and down the legs.\n\nAt Chiropractic Unlimited, we specialize in identifying the specific structural cause of your low back pain through a thorough clinical evaluation — not just treating the location where it hurts. Whether your pain stems from a recent injury, a long-standing structural issue, or accumulated stress from work and lifestyle habits, we build a corrective care plan designed to resolve the problem at its source.",
    symptoms: ["Stiffness and reduced mobility", "Muscle spasms", "Numbness or tingling in legs", "Sharp or aching localized pain", "Difficulty standing or sitting for long", "Pain radiating into the buttock or hip"],
    image: "https://plus.unsplash.com/premium_photo-1723924974091-859223dad2fd?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Low Back Pain Relief in Valley, AL | Dr. Jason Bang",
    metaDescription: "Suffering from low back pain or sciatica in Valley, AL? Dr. Jason Bang offers non-invasive spinal correction and holistic care for lasting relief. Book today.",
    causes: "Low back pain almost always has an identifiable structural cause. Understanding what's driving your pain is the first step toward lasting relief. The most common causes we identify at Chiropractic Unlimited include:\n\n**Spinal Misalignment (Subluxation):** When one or more lumbar vertebrae shift out of their optimal position, they create uneven mechanical stress on discs, joints, and nerves. This is one of the most common underlying contributors to both acute and chronic low back pain — and it responds exceptionally well to chiropractic correction.\n\n**Herniated or Bulging Discs:** The intervertebral discs that cushion your lumbar vertebrae can weaken, bulge, or rupture under prolonged mechanical stress. When disc material presses against nearby nerve roots, it causes pain that may radiate from the lower back into the buttock, hip, or down the leg — a condition commonly associated with sciatica.\n\n**Sacroiliac (SI) Joint Dysfunction:** The SI joints connect the spine to the pelvis and are a frequently overlooked source of lower back pain. When these joints become misaligned or inflamed, they generate deep, aching pain in the lower back and buttocks that is often mistaken for disc pathology.\n\n**Degenerative Disc Disease:** Years of poor posture, physical stress, or untreated misalignment can accelerate disc degeneration — a gradual wearing down of disc height and hydration that narrows the spaces through which spinal nerves pass.\n\n**Muscle Imbalances from Prolonged Sitting:** Modern lifestyles — desk jobs, long commutes, excessive screen time — create predictable muscle imbalance patterns that place abnormal stress on the lumbar spine. When hip flexors tighten and core stabilizers weaken, the lower back absorbs forces it was never designed to handle alone.",
    whenToSee: "Many people assume low back pain is something they just have to live with. But persistent or recurring pain is your body signaling that something structurally needs attention. The longer a spinal problem goes unaddressed, the more compensation patterns develop — and the more complex the correction becomes.\n\nYou should schedule an evaluation with Dr. Bang if your pain has lasted more than three days without improvement, radiates into your buttock, hip, or leg, or comes with numbness and tingling. Similarly, if you've had multiple back pain episodes in the past year, if over-the-counter medication isn't providing adequate relief, or if your pain limits your ability to work or sleep normally — these are all signs that a structural issue needs professional evaluation.\n\nAs both a Doctor of Chiropractic and a Family Nurse Practitioner, Dr. Bang is uniquely equipped to evaluate low back pain from multiple clinical perspectives. This means he can differentiate between mechanical spinal pain, nerve compression syndromes, and other underlying conditions that can mimic or contribute to back pain — ensuring you get the right diagnosis and the most effective treatment from day one.",
    approach: "At Chiropractic Unlimited, we approach low back pain with a single guiding principle: **find the cause and correct it**. Treatment begins with a comprehensive evaluation — including orthopedic and neurological testing, postural analysis, and a detailed health history — to identify the precise structural issue driving your symptoms.\n\nFor most patients, the cornerstone of care is **spinal adjustment (chiropractic correction)**: precise, controlled force applied to misaligned lumbar vertebrae to restore proper joint mechanics, decompress irritated nerves, and reduce the protective muscle guarding that perpetuates pain cycles. When disc involvement is present, we incorporate **spinal decompression techniques** that gently traction the lumbar spine, creating negative intradiscal pressure that draws herniated material back toward center and promotes disc rehydration.\n\nWe also address the muscular side of the equation. **Targeted rehabilitative exercises** strengthen the deep core stabilizers that support the lumbar spine between visits, reducing re-injury risk and helping your spine maintain the corrections achieved in the office. This is the difference between getting adjusted and staying well.\n\nDr. Bang's dual credentials as a Doctor of Chiropractic and a Family Nurse Practitioner add a dimension of care that most chiropractic clinics cannot offer. His medical training allows him to identify when low back pain has systemic contributors — such as inflammatory arthritis or metabolic conditions — and factor those into your treatment plan for truly integrated care.",
    faqs: [
      {
        question: "When should I see a chiropractor for back pain?",
        answer: "If your pain persists more than a few days, radiates down your leg, or limits normal movement, it's time for a professional evaluation. Early intervention consistently produces better outcomes and shorter recovery times than waiting for pain to become severe. Even if you're not sure whether chiropractic is right for your situation, Dr. Bang's dual DC and FNP credentials allow him to properly assess your case and recommend the most appropriate course of care."
      },
      {
        question: "Can you help with sciatica?",
        answer: "Yes. Sciatica is nerve pain caused by compression or irritation of the sciatic nerve — most commonly from a herniated disc, bone spur, or spinal misalignment in the lower back. Our approach targets the specific site of nerve compression using spinal adjustment and decompression techniques to relieve pressure at the root. Many patients experience meaningful relief from sciatic symptoms within the first several visits."
      },
      {
        question: "Is chiropractic care safe for the lower back?",
        answer: "Chiropractic care is one of the safest, most evidence-backed treatments available for mechanical low back pain. Dr. Bang performs a thorough evaluation before beginning treatment and tailors every adjustment to the individual patient's presentation, age, and health status. Techniques are always chosen based on safety and clinical appropriateness."
      },
      {
        question: "Do you accept insurance?",
        answer: "We are a cash-based practice, which allows us to deliver the highest standard of care without the limitations imposed by insurance billing. Being out-of-network means Dr. Bang can spend the time your case actually requires. We offer transparent, affordable care plans and are happy to provide documentation for FSA/HSA reimbursement."
      },
      {
        question: "How long does treatment take?",
        answer: "Recovery timelines vary based on the nature and duration of your condition. Acute injuries often respond within 4-8 visits, while correcting long-standing structural issues typically requires a more comprehensive plan. After your initial evaluation, Dr. Bang will outline a specific timeline with clear milestones so you know exactly what to expect."
      },
      {
        question: "What if I've had back surgery? Can I still be treated?",
        answer: "In many cases, yes. Post-surgical patients often develop adjacent segment problems — where the levels above or below a fusion become overloaded. Dr. Bang evaluates post-surgical spines carefully and uses appropriately modified techniques. Your safety and clinical suitability are always assessed before treatment begins."
      }
    ]
  },
  {
    slug: "neck-pain",
    title: "Neck Pain",
    description: "Often caused by poor posture, stress, or minor injuries like whiplash.",
    details: "Neck pain is one of the most prevalent musculoskeletal complaints in modern life — and it's getting worse. The combination of desk work, smartphone use, and sedentary lifestyles has created an epidemic of cervical spine dysfunction that affects people of all ages in Valley, AL and across the country. Unlike back pain, which people often rest from, neck pain tends to be relentless — present during work, sleep, driving, and exercise — making it exceptionally disruptive to daily life.\n\nThe cervical spine is an engineering marvel: seven small vertebrae that support a head weighing 10 to 12 pounds, while allowing an extraordinary range of motion in virtually every direction. This combination of load-bearing and mobility makes the cervical spine particularly susceptible to misalignment, disc injury, and muscular imbalance.\n\nWhat most people don't realize is that neck pain rarely stays in the neck. Nerve roots exiting the cervical spine supply sensation and motor function to the shoulders, arms, and hands. Compressed or irritated cervical nerves can cause pain, tingling, numbness, and weakness that extends far from the original problem. Cervical misalignment can also restrict blood flow and nerve signaling to the head, contributing to chronic headaches, dizziness, and difficulty concentrating — symptoms that many people never connect to their neck.",
    symptoms: ["Tightness and stiffness", "Reduced range of motion", "Dizziness or lightheadedness", "Pain radiating to shoulders or arms", "Difficulty sleeping", "Tension headaches at the base of the skull"],
    image: "https://plus.unsplash.com/premium_photo-1661517603309-e9d451e395b0?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Neck Pain Relief in Valley, AL | Dr. Jason Bang",
    metaDescription: "Struggling with chronic neck pain or stiffness in Valley, AL? Dr. Jason Bang provides gentle spinal correction and integrated care for lasting neck pain relief.",
    causes: "Neck pain is almost always structural in origin — meaning there is an identifiable mechanical or postural cause that can be addressed. Common causes we evaluate and treat at Chiropractic Unlimited include:\n\n**Forward Head Posture (Tech Neck):** For every inch your head sits forward of its ideal position over your shoulders, it adds an additional 10 pounds of effective weight to your cervical spine. The average smartphone user spends 2-4 hours per day with their head tilted forward at 45 degrees — placing up to 49 pounds of stress on a spine designed to support 10 to 12. This chronic postural strain is now the leading cause of neck pain in younger adults.\n\n**Cervical Disc Herniation:** Discs in the neck can herniate just as they do in the lower back, pushing material against nerve roots that travel down the arm. This produces a distinctive pattern of neck pain combined with arm pain, numbness, or weakness — known as cervical radiculopathy.\n\n**Whiplash Injuries:** The rapid acceleration-deceleration forces in a car accident stretch and strain the soft tissues of the neck beyond their normal range of motion. Even low-speed impacts can cause ligament damage and vertebral misalignment that becomes a source of chronic pain if not properly treated.\n\n**Sleeping Position Dysfunction:** Hours spent sleeping on too-thick or too-thin pillows, or in positions that strain the cervical spine, can cause morning stiffness and gradual misalignment that accumulates over time.\n\n**Degenerative Cervical Changes:** Years of untreated misalignment and postural stress accelerate the natural aging of cervical discs and joints, narrowing the spaces through which nerves exit and contributing to chronic, progressive pain.",
    whenToSee: "Neck pain that lingers beyond a few days, or that comes with other symptoms, warrants professional evaluation. Many people tolerate neck pain far longer than they should — applying heat, taking over-the-counter pain relievers, or stretching — while the underlying structural problem quietly progresses.\n\nYou should see Dr. Bang if your neck pain has lasted more than a week without significant improvement, if it extends into your shoulder, arm, or hand, or if you're experiencing numbness or tingling anywhere in your upper extremities. Headaches that seem to originate at the base of the skull or behind the eyes — especially those that accompany neck stiffness — are a strong signal of cervical involvement and respond well to chiropractic care.\n\nAdditionally, if you've recently been in a car accident, took a fall, or experienced any physical trauma — even a minor one — early evaluation is essential. Whiplash and soft tissue injuries often feel minimal in the first 24 to 48 hours due to adrenaline and inflammation that hasn't fully developed. Dr. Bang's combined chiropractic and medical training allows him to perform a comprehensive evaluation that rules out serious injury and establishes an effective treatment protocol.",
    approach: "Our approach to neck pain is precision-based: we identify the exact cervical segments that are misaligned, restricted, or causing nerve irritation — and we correct them with targeted, gentle adjustments.\n\nEvery neck pain patient begins with a thorough cervical evaluation that includes range-of-motion testing, orthopedic and neurological assessment, and postural analysis. Dr. Bang determines not just that your neck hurts, but specifically which vertebrae are involved and what structural dysfunction is causing the problem. This precision allows us to apply the right technique to the right level — rather than performing generic adjustments that may provide only temporary symptomatic relief.\n\nFor patients with **cervical disc herniation or radiculopathy** (nerve pain extending into the arm), we incorporate cervical decompression techniques alongside adjustments to reduce pressure on the affected nerve root. For patients with **postural neck pain and forward head syndrome**, corrective adjustments are combined with specific rehabilitation exercises that retrain the deep cervical flexors and strengthen the muscles responsible for maintaining proper head and neck position.\n\nAs a Family Nurse Practitioner in addition to a Doctor of Chiropractic, Dr. Bang brings a broader clinical lens to neck pain evaluation. When indicated, he can assess whether inflammatory conditions or other systemic issues may be contributing to cervical symptoms — something that chiropractic alone cannot adequately address.",
    faqs: [
      {
        question: "What causes neck pain that won't go away?",
        answer: "Persistent neck pain is almost always a sign of an unresolved structural problem — cervical misalignment, disc pathology, or chronic postural dysfunction. Without correcting the underlying mechanical issue, pain relievers and rest only provide temporary relief. Chiropractic care addresses the root cause directly, which is why it produces more lasting outcomes than symptom management alone."
      },
      {
        question: "Is chiropractic safe for neck adjustments?",
        answer: "Yes. Cervical adjustments performed by a qualified chiropractor are safe and effective. Dr. Bang uses precise, low-force techniques tailored to each patient's age, health status, and clinical presentation. He performs a thorough evaluation before any adjustment to ensure the technique used is appropriate and safe for your specific condition."
      },
      {
        question: "Can neck problems cause headaches?",
        answer: "Absolutely — and this is one of the most common patterns we see. Cervicogenic headaches originate from irritation or tension in the upper cervical spine and can produce pain that mimics tension headaches or even migraines. If your headaches tend to start in the neck or base of the skull, are worse in the morning, or come with neck stiffness, chiropractic care targeting the cervical spine is frequently highly effective."
      },
      {
        question: "How many visits will I need for neck pain?",
        answer: "Most patients with acute neck pain notice meaningful improvement within 4-6 visits. Chronic or more complex conditions — such as cervical disc herniation or advanced forward head posture — typically require a longer corrective phase. Dr. Bang will outline a specific plan with expected milestones during your initial consultation so you have a clear understanding of what to expect."
      },
      {
        question: "Can you help with pain that radiates into my arm or hand?",
        answer: "Yes. Arm and hand pain that originates from the neck (cervical radiculopathy) responds well to chiropractic care. By decompressing the affected nerve root through targeted adjustments and cervical traction, we can relieve the pressure that's causing the radiating symptoms."
      },
      {
        question: "What can I do at home to help my neck pain?",
        answer: "Dr. Bang will give you specific home care recommendations as part of your treatment plan. Common strategies include cervical-specific stretches and strengthening exercises, ergonomic adjustments to your workstation, guidance on sleeping position and pillow height, and posture awareness habits for phone and screen use. In-office treatment combined with consistent home care produces significantly better and faster results."
      }
    ]
  },
  {
    slug: "headaches",
    title: "Headaches & Migraines",
    description: "Relief from tension headaches and chronic migraines through spinal health.",
    details: "Chronic headaches are one of the most disabling conditions in modern healthcare — and one of the most undertreated at the source. The standard medical approach relies heavily on pain medication: over-the-counter anti-inflammatories for tension headaches, triptans for migraines, and eventually preventive medications for chronic sufferers. While these options provide temporary relief, they do nothing to address why the headaches are occurring in the first place.\n\nResearch has consistently demonstrated a strong link between cervical spine dysfunction and headache disorders. The upper cervical spine — particularly the joints and nerves at the C1, C2, and C3 levels — has direct neurological connections to the trigeminal nucleus, the same pain pathway involved in migraine generation. When these cervical segments are misaligned or restricted, they create persistent irritation in this neural network that can trigger or amplify headache patterns.\n\nAt Chiropractic Unlimited, we evaluate every headache patient with this connection in mind. Many people who have suffered from chronic headaches for years — sometimes decades — find significant and lasting relief through cervical chiropractic care because, for the first time, the structural source of their symptoms has been identified and corrected. If you've been managing your headaches rather than eliminating them, there is a very good chance that a cervical spine issue is playing a significant role.",
    symptoms: ["Pulsing or throbbing pain", "Sensitivity to light and sound", "Neck stiffness before onset", "Temporal or behind-the-eye pressure", "Nausea during episodes", "Pain worsening with activity"],
    image: "https://plus.unsplash.com/premium_photo-1661775923999-698b5481e8b5?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Headache & Migraine Relief in Valley, AL | Dr. Jason Bang",
    metaDescription: "Tired of chronic headaches and migraines in Valley, AL? Dr. Jason Bang treats the spinal root cause of headaches with gentle, drug-free chiropractic care.",
    causes: "Headaches and migraines have multiple contributing causes, but structural and neurological factors in the cervical spine are among the most frequently overlooked. At Chiropractic Unlimited, we focus on identifying the mechanical contributors that respond to chiropractic intervention:\n\n**Upper Cervical Misalignment:** The joint at the base of the skull (the occiput-atlas joint) and the upper cervical vertebrae (C1-C3) are in direct neurological communication with the trigeminal nucleus caudalis — the brainstem region responsible for head and face pain. Misalignment at these levels creates chronic irritation in this pathway, lowering the headache threshold and making migraine attacks more frequent and severe.\n\n**Muscular Tension and Trigger Points:** Chronic tightness in the suboccipital muscles at the base of the skull, the upper trapezius, and the levator scapulae is a major driver of tension-type headaches. These muscles often harbor trigger points — hypersensitive knots that refer pain into the head, temples, and behind the eyes. Cervical misalignment is a primary driver of chronic muscular tension in these areas.\n\n**Postural Stress:** Forward head posture dramatically increases the load on posterior cervical muscles and joints. The chronic muscular and joint strain from sustained poor posture is a leading cause of daily or near-daily tension headaches, particularly in desk workers and those who spend significant time on devices.\n\n**Restricted Cervical Joint Motion:** When cervical joints lose their normal range of motion — due to prior injury, degenerative changes, or sustained postural stress — they generate pain signals that can feed directly into headache patterns, particularly those felt at the base of the skull, temples, or behind the eyes.",
    whenToSee: "If headaches are disrupting your quality of life — affecting your work, your family, or your sleep — you deserve more than just a prescription to manage them. Chiropractic evaluation is particularly appropriate if your headaches are accompanied by neck stiffness or tension, seem to start at the base of the skull, worsen with certain head positions or after prolonged sitting, or have not responded satisfactorily to medication alone.\n\nYou should schedule an evaluation if you experience headaches three or more times per week, if over-the-counter medications are becoming less effective, or if you're taking headache medication more than two days per week — a pattern that can lead to medication overuse headache.\n\nWhile most headaches have musculoskeletal or neurological origins that chiropractic can address, Dr. Bang's FNP training allows him to conduct a thorough clinical evaluation to rule out secondary causes — including hypertension, sinus pathology, or more serious neurological conditions — before establishing a treatment plan. This level of clinical thoroughness is what sets integrated care at Chiropractic Unlimited apart.",
    approach: "Our approach to headaches and migraines centers on a thorough assessment of the upper cervical spine — the region with the most direct neurological influence on head pain patterns. Dr. Bang evaluates cervical joint mobility, muscle tension, postural alignment, and neurological function to build a precise clinical picture of what's driving your headaches.\n\n**Cervical Spinal Adjustment** is the primary treatment tool for most headache patients. By restoring proper motion and alignment to the upper cervical vertebrae — particularly C1, C2, and C3 — we reduce the chronic mechanical irritation that feeds the headache pathway. Many patients notice a reduction in headache frequency after just a few adjustments, as the nervous system recalibrates with the structural corrections.\n\nFor patients with significant muscle tension, we incorporate **myofascial release and soft tissue therapy** targeting the suboccipital muscles, upper trapezius, and cervical paraspinals. Releasing these chronically shortened muscles removes a major source of referral pain into the head and significantly enhances the effectiveness of spinal adjustments.\n\n**Postural correction and ergonomic guidance** form an essential part of long-term headache management. Dr. Bang works with each patient to identify the postural habits and environmental factors maintaining their headache triggers — and provides specific, practical strategies to change them. For patients whose headaches have non-mechanical contributors, Dr. Bang's FNP credentials allow him to evaluate and co-manage those factors as part of a truly integrated treatment approach.",
    faqs: [
      {
        question: "Can a chiropractor really help with migraines?",
        answer: "Yes. Multiple clinical studies have shown that cervical spinal manipulation reduces migraine frequency, duration, and severity in patients with cervicogenic migraine contributions. While chiropractic is not a universal cure for all migraine types, a significant proportion of migraine sufferers have measurable cervical dysfunction that, when corrected, produces a meaningful reduction in attack frequency. Dr. Bang's comprehensive evaluation identifies whether cervical factors are playing a role in your specific headache pattern."
      },
      {
        question: "What type of headaches does chiropractic treat best?",
        answer: "Chiropractic care is most effective for tension-type headaches and cervicogenic headaches — those that originate from or are significantly contributed to by cervical spine dysfunction. Migraines that involve a cervical trigger also respond well. The key diagnostic indicator is whether neck stiffness, restricted motion, or tenderness accompanies the headaches. If it does, there is a strong structural component that chiropractic can address."
      },
      {
        question: "Will I need to keep coming back forever?",
        answer: "Our goal is correction, not dependency. During the active care phase, visits are more frequent as we correct the structural problem. Most patients then transition to a less frequent maintenance phase to preserve results and prevent regression. Many eventually require only periodic wellness visits. The objective is always to get you to the point where your spine is functioning well and your headaches are under control with minimal ongoing intervention."
      },
      {
        question: "How quickly will I feel relief?",
        answer: "Many patients notice a meaningful reduction in headache frequency and intensity within the first 3-4 weeks of care. Some experience improvement after just a few visits. The response depends on how long the structural problem has been present and the specific type of headache pattern involved."
      },
      {
        question: "I've tried everything. How is this different?",
        answer: "Most headache treatments focus on the symptom — the pain itself — rather than the structural cause. Chiropractic care is one of the only approaches that directly evaluates and corrects the cervical mechanics that may be driving headache generation. If you've never had a comprehensive cervical evaluation as part of your headache workup, there is a strong possibility that a treatable structural issue has been missed."
      },
      {
        question: "Can children be treated for headaches with chiropractic?",
        answer: "Yes. Pediatric chiropractic care uses significantly gentler techniques appropriate for developing spines. Headaches in children and adolescents frequently have cervical components related to heavy backpack use, poor school posture, and increased screen time — all of which respond well to gentle chiropractic correction and postural guidance."
      }
    ]
  },
  {
    slug: "sciatica",
    title: "Sciatica",
    description: "Shooting pain that travels down the leg from the lower back.",
    details: "Sciatica is not a diagnosis in itself — it's a description of symptoms produced when the sciatic nerve, the longest and largest nerve in the human body, is compressed or irritated somewhere along its path from the lower spine through the buttock and down the leg. The burning, shooting, or electric pain that travels from the lower back into the leg is one of the most recognizable and disabling pain patterns in musculoskeletal medicine.\n\nWhat makes sciatica particularly difficult to manage with conventional approaches is that the pain location — the leg — is not the source of the problem. Anti-inflammatory medications and steroid injections may quiet symptoms temporarily, but unless the compression at the nerve root is relieved, the underlying problem remains and symptoms reliably return.\n\nAt Chiropractic Unlimited, we specialize in identifying the exact site and mechanism of sciatic nerve compression. Whether the cause is a herniated lumbar disc, spinal stenosis, sacroiliac joint dysfunction, or piriformis syndrome — each requires a distinctly different treatment approach. Dr. Bang's comprehensive clinical evaluation determines the precise cause of your sciatica before treatment begins, ensuring the approach is targeted and effective rather than generic.",
    symptoms: ["Shooting pain down the leg", "Burning or tingling sensation", "Numbness in the foot or toes", "Lower back tightness", "Leg weakness", "Pain worsening when sitting"],
    image: "https://plus.unsplash.com/premium_photo-1664303718610-b6bcb2c6758e?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Sciatica Treatment in Valley, AL | Dr. Jason Bang",
    metaDescription: "Suffering from sciatica or leg pain in Valley, AL? Dr. Jason Bang provides non-surgical spinal decompression and correction for lasting sciatic nerve relief.",
    causes: "The sciatic nerve is formed from several nerve roots that exit the lumbar spine and merge in the pelvis before traveling down the back of the thigh. Compression or irritation at any point along this path can produce sciatic symptoms. The most common causes we evaluate and treat include:\n\n**Lumbar Disc Herniation:** When an intervertebral disc in the lower back — most commonly at L4-L5 or L5-S1 — bulges or herniates, it can press directly against the nerve root that forms part of the sciatic nerve. This produces characteristic radiating pain that travels down the back of the leg, often to the calf or foot, along with potential numbness and weakness.\n\n**Spinal Stenosis:** Narrowing of the spinal canal or the nerve root channels due to degenerative changes, bone spurs, or thickened ligaments can compress sciatic nerve roots. This type of sciatica often worsens with standing or walking and is more common in patients over 50.\n\n**Sacroiliac Joint Dysfunction:** Misalignment or inflammation of the sacroiliac joint — which connects the spine to the pelvis — can directly compress or irritate the sciatic nerve as it exits the pelvis. SI joint sciatica is frequently misdiagnosed as disc herniation.\n\n**Piriformis Syndrome:** The piriformis muscle sits deep in the buttock, directly above the sciatic nerve. When this muscle becomes tight or goes into spasm — often from prolonged sitting, overuse, or hip imbalance — it can compress the sciatic nerve, producing buttock and leg pain that mimics disc-related sciatica.\n\n**Lumbar Misalignment:** Even without disc herniation, vertebral misalignment in the lower spine can narrow nerve root channels and create chronic mechanical irritation of the sciatic nerve roots.",
    whenToSee: "Sciatica that goes untreated tends to worsen, not improve. Prolonged nerve compression can lead to chronic changes in nerve function — including persistent numbness, muscle weakness, and reduced reflexes — that become increasingly difficult to reverse the longer they are left unaddressed.\n\nYou should seek evaluation promptly if you have pain that radiates from your lower back into your buttock or leg, if you're experiencing numbness or tingling in your lower extremity, or if you notice any weakness in your leg or foot. Sciatica that worsens with sitting, improves slightly with walking, or that disturbs your sleep is a sign of significant nerve root compression that requires prompt clinical attention.\n\nIf you experience sudden, severe sciatica with loss of bowel or bladder function, this is a medical emergency requiring immediate emergency room care. For all other presentations, Dr. Bang's approach offers a highly effective, non-surgical path to recovery. Early intervention significantly improves outcomes and reduces the risk of transitioning from acute to chronic sciatica.",
    approach: "Effective sciatica treatment requires precise identification of where and why the sciatic nerve is being compressed — and our approach is built on exactly that diagnostic foundation. Before treatment begins, Dr. Bang performs a thorough evaluation including orthopedic nerve tension tests, lumbar and sacral assessment, and a detailed history to determine whether the source of compression is discal, articular, muscular, or some combination.\n\nFor **disc-related sciatica**, the primary treatment is **spinal decompression** combined with **lumbar adjustment**. Spinal decompression creates gentle traction in the lumbar spine that reduces intradiscal pressure, encourages herniated disc material to retract, and facilitates the rehydration and healing of damaged disc tissue.\n\nFor **sacroiliac joint dysfunction**, we use specific SI joint mobilization techniques to restore proper pelvic alignment and reduce the joint irritation that is compressing the sciatic nerve. Many patients with SI-driven sciatica respond very quickly to this targeted approach — often experiencing dramatic relief within the first few visits.\n\nFor **piriformis syndrome**, treatment focuses on soft tissue release of the piriformis muscle combined with hip and sacral correction to address the underlying biomechanical cause. All sciatica patients also receive a **rehabilitative exercise component** — specific movements designed to decompress the lumbar spine and maintain the corrections achieved through treatment. Dr. Bang's FNP background adds a critical clinical layer: the ability to identify when sciatica has inflammatory or systemic contributions that require co-management beyond structural chiropractic care.",
    faqs: [
      {
        question: "How do I know if it's sciatica or just back pain?",
        answer: "The defining feature of sciatica is pain that travels from the lower back or buttock into the leg — typically following the path of the sciatic nerve down the back of the thigh, into the calf, and sometimes to the foot. Numbness, tingling, or weakness in the leg are additional signs of nerve involvement. Pure back pain, without leg symptoms, is more likely a local structural problem rather than sciatic nerve compression. Dr. Bang's evaluation can precisely distinguish between these presentations."
      },
      {
        question: "Can sciatica go away on its own?",
        answer: "Mild sciatica from minor disc irritation may resolve with rest, but the structural issue driving it — misalignment, disc herniation, SI dysfunction — often persists and predisposes you to recurrent episodes. Without addressing the mechanical cause, sciatica reliably returns, often more severely. Chiropractic care aims to correct the underlying structural problem so that recovery is complete and durable, not just temporary."
      },
      {
        question: "Is chiropractic better than surgery for sciatica?",
        answer: "For the large majority of sciatica cases, conservative care — including chiropractic, decompression, and rehabilitation — achieves outcomes equivalent to or better than surgery, without the risks of operative intervention. Surgery is generally reserved for cases involving severe neurological deficit or for patients who have failed comprehensive conservative management. Dr. Bang will be straightforward about whether your case is appropriate for conservative care or requires surgical referral."
      },
      {
        question: "How quickly will I feel relief?",
        answer: "Many patients experience meaningful improvement within the first 3-6 visits as we begin decompressing the affected nerve root. The full course of treatment — aimed at correcting the underlying structural problem rather than just relieving symptoms — typically spans several weeks depending on the severity and chronicity of the condition."
      },
      {
        question: "I've had sciatica for years. Can you still help?",
        answer: "Yes, though chronic sciatica typically requires a more extended treatment protocol than acute presentations. Long-standing nerve compression often involves disc changes, muscle atrophy, and adaptation patterns that take time to correct. The important thing is that with a proper diagnosis and consistent treatment, even chronic sciatica cases frequently achieve significant, lasting improvement."
      },
      {
        question: "Will I need X-rays or an MRI?",
        answer: "Diagnostic imaging is not always necessary, but for complex or severe presentations, Dr. Bang may recommend imaging to confirm the diagnosis or rule out conditions that require a different management approach. His FNP training gives him the clinical background to evaluate when imaging is warranted and to properly interpret the findings in the context of your full clinical picture."
      }
    ]
  },
  {
    slug: "auto-injuries",
    title: "Auto Injuries",
    description: "Specialized care for car accident recovery and whiplash treatment.",
    details: "Car accidents are one of the most common sources of serious spinal injury — and one of the most underestimated. The forces involved in even a low-speed rear-end collision are substantial: a 10 mph impact generates enough force to cause cervical disc injury, joint subluxation, and soft tissue damage that may not produce significant pain for days, sometimes weeks, after the accident.\n\nThis delay in symptom onset is precisely why so many auto injury patients make the mistake of not seeking immediate evaluation. They feel shaken but functional after the accident and assume they'll be fine in a day or two. By the time significant pain, stiffness, and headaches develop, the opportunity for early intervention — which dramatically improves recovery outcomes — has passed, and the injury has begun the transition toward chronic dysfunction.\n\nAt Chiropractic Unlimited, we specialize in post-accident spinal evaluation and recovery. Dr. Bang's combined training as a Doctor of Chiropractic and a Family Nurse Practitioner makes him uniquely equipped to assess the full scope of an auto injury — evaluating both the musculoskeletal and neurological consequences of the impact, identifying injuries that standard emergency evaluations often miss, and establishing a thorough clinical record that is essential for any associated legal or insurance proceedings.",
    symptoms: ["Whiplash and neck stiffness", "Delayed onset pain (days after accident)", "Soft tissue soreness and swelling", "Headaches and dizziness", "Reduced range of motion", "Numbness or tingling in arms"],
    image: "https://plus.unsplash.com/premium_photo-1661370337354-558d7120eb54?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Auto Injury & Whiplash Treatment in Valley, AL | Dr. Jason Bang",
    metaDescription: "Been in a car accident in Valley, AL? Dr. Jason Bang provides specialized chiropractic care for whiplash, auto injuries, and post-accident recovery. Book today.",
    causes: "Auto injuries involve a specific and predictable pattern of spinal trauma based on the mechanics of the collision. Understanding the types of injury that result from different accident types helps explain why comprehensive evaluation — not just an emergency room clearance — is essential for full recovery:\n\n**Whiplash (Cervical Acceleration-Deceleration Injury):** The rapid backward-then-forward whipping motion of the head during a rear-end impact stretches and strains the muscles, ligaments, and joint capsules of the cervical spine beyond their normal range. This causes microscopic tissue tears and joint subluxation that lead to inflammation, muscle guarding, restricted motion, and chronic pain if not properly treated.\n\n**Cervical and Lumbar Disc Injuries:** The compressive and shearing forces in a collision can cause intervertebral discs to bulge, herniate, or tear. These disc injuries may not be immediately symptomatic but are a common source of chronic neck and back pain that develops weeks to months after the accident.\n\n**Facet Joint Subluxation:** The small facet joints that guide spinal movement can be forced out of their normal alignment by the sudden, uncontrolled forces of a collision. Misaligned facet joints produce local pain, restricted range of motion, and — in the cervical spine — headache patterns.\n\n**Soft Tissue Injuries:** Muscles, tendons, and ligaments throughout the spine can sustain varying degrees of strain and sprain. Ligament injuries are particularly significant because ligaments have poor blood supply and heal slowly — and because inadequate healing can lead to long-term spinal instability.\n\n**Concussion and Head Trauma:** Head contact with steering wheels, windows, or airbags can cause traumatic brain injury ranging from mild concussion to more severe injury that requires prompt neurological evaluation.",
    whenToSee: "The single most important piece of advice for anyone involved in a car accident — regardless of perceived severity — is this: get evaluated within 72 hours, even if you feel relatively fine.\n\nThe adrenaline and cortisol released during an accident act as powerful natural pain suppressants, masking the true extent of injury in the immediate aftermath. The absence of pain in the first hours after an accident is not a reliable indicator that no significant injury has occurred. Symptoms of whiplash, disc injury, and soft tissue damage typically peak 24-72 hours post-impact and may continue developing for several weeks.\n\nEarly evaluation accomplishes three critical things: it identifies injuries before they become chronic, it establishes a medical record that documents your condition in temporal relationship to the accident, and it initiates treatment while your tissues are in the acute healing phase — when intervention produces the fastest and most complete recovery. Dr. Bang's dual credentials as a chiropractor and family nurse practitioner make him an ideal first point of evaluation after an accident.",
    approach: "Our approach to auto injury recovery is built around three priorities: accurate diagnosis, early intervention, and comprehensive documentation.\n\nEvery post-accident patient begins with a thorough clinical evaluation that goes beyond what a typical emergency room assessment covers. Dr. Bang conducts detailed orthopedic and neurological testing, evaluates cervical and lumbar range of motion, assesses soft tissue integrity, and reviews any imaging studies from the emergency visit. When indicated, he orders additional diagnostic imaging to fully characterize the extent of injury.\n\nFor **whiplash and cervical injuries**, treatment combines gentle **cervical spinal adjustment** to address joint subluxation and restore proper alignment with **soft tissue therapy** to accelerate healing in damaged muscles and ligaments. We avoid aggressive manipulation in the acute phase, using gentle mobilization techniques appropriate for irritated, inflamed tissues.\n\nFor **lumbar injuries and disc trauma**, we incorporate **lumbar adjustment** and **spinal decompression** to relieve pressure on injured discs and nerve roots, reduce inflammatory load, and promote disc rehydration and healing. **Rehabilitation exercises** introduced progressively as healing allows build strength and stability in the muscles that protect the injured segments.\n\nBeyond clinical treatment, Dr. Bang provides thorough and detailed documentation of your injuries, treatment, and progress — records that are essential for personal injury claims. As a Family Nurse Practitioner, he is also equipped to identify and address symptoms beyond the spine — including post-concussion symptoms and vestibular disruption — that may require co-management or specialist referral.",
    faqs: [
      {
        question: "How soon after an accident should I see a chiropractor?",
        answer: "As soon as possible — ideally within 24 to 72 hours. Early evaluation and intervention consistently produce better outcomes than delayed treatment. Most importantly, early documentation of your injuries in close temporal relationship to the accident is critical for any insurance or legal proceedings. Waiting weeks or months to seek care can complicate both your recovery and your claim."
      },
      {
        question: "I feel fine. Do I still need to be evaluated?",
        answer: "Yes, and this is important. Adrenaline and cortisol released during an accident act as natural pain suppressants that can mask significant injury for hours or days. Whiplash symptoms, disc injuries, and soft tissue damage commonly peak 24-72 hours post-accident. Feeling okay immediately after a crash does not mean no injury occurred — it means your body's natural response system is temporarily doing its job. A thorough evaluation identifies any injuries while they're still in the acute, highly treatable phase."
      },
      {
        question: "What is whiplash and how is it treated?",
        answer: "Whiplash is a cervical acceleration-deceleration injury — the rapid back-and-forth movement of the head during a collision stretches and strains the cervical spine's soft tissues and joints beyond their normal range. Symptoms include neck pain, stiffness, headaches, dizziness, and sometimes arm symptoms from nerve irritation. We treat whiplash with a progressive combination of gentle cervical adjustment to restore proper alignment, soft tissue therapy to accelerate healing, and rehabilitative exercises to rebuild cervical stability."
      },
      {
        question: "Do you work with auto insurance or personal injury cases?",
        answer: "We are a cash-based practice and do not bill auto insurance directly. However, we provide comprehensive, detailed medical documentation of your injuries, treatment, and recovery progress — records that are essential for personal injury claims and that your attorney can use to accurately represent the medical dimension of your case. We are experienced in providing the clinical documentation that personal injury cases require."
      },
      {
        question: "What if my accident was weeks or months ago?",
        answer: "It's never too late to seek treatment, though earlier is always better. If you're still experiencing symptoms weeks or months after an accident, there is likely an unresolved structural injury driving those symptoms. Dr. Bang will evaluate your current presentation and establish a treatment plan appropriate to your current state — it's far better to start now than to continue living with post-accident pain."
      },
      {
        question: "Can chiropractic help with headaches after a car accident?",
        answer: "Yes, very effectively. Post-accident headaches are typically driven by cervical joint subluxation and muscle tension resulting from the whiplash mechanism. By correcting the cervical misalignment and releasing the tight suboccipital and cervical muscles causing headache referral patterns, we can resolve post-accident headaches that would otherwise persist for months or years."
      }
    ]
  },
  {
    slug: "poor-posture",
    title: "Poor Posture",
    description: "Correcting 'tech neck' and structural imbalances from modern lifestyles.",
    details: "Poor posture has moved from a personal habit to a public health crisis. The combination of sedentary desk work, constant smartphone use, and increasingly passive lifestyles has created widespread structural deterioration in our spines — particularly in younger generations who have grown up with devices. Forward head posture, rounded shoulders, and loss of the natural spinal curves are now epidemic — and they are not merely cosmetic problems.\n\nFor every inch your head moves forward of its ideal position over your shoulders, an additional 10 pounds of effective load is placed on your cervical spine. In the 60-degree head-down position typical of smartphone use, this effective load increases to approximately 60 pounds — six times the natural weight of your head. Over hours, days, months, and years, this mechanical stress produces measurable structural changes: flattening of the cervical curve, disc degeneration, bone spur formation, and nerve compression.\n\nBeyond the spine, poor posture has cascading effects throughout the body. Rounded shoulders restrict chest expansion and reduce lung capacity. Anterior pelvic tilt from prolonged sitting tightens hip flexors and weakens glutes, transferring abnormal forces to the lumbar spine. Forward head posture changes the mechanical relationship of the skull and jaw, contributing to temporomandibular joint dysfunction. Poor posture is not just a back problem — it is a whole-body structural issue that, left unaddressed, produces progressive deterioration over time.",
    symptoms: ["Rounded shoulders", "Forward head posture (tech neck)", "Chronic fatigue and low energy", "Upper and mid-back pain", "Difficulty standing straight", "Jaw tension and TMJ issues"],
    image: "https://plus.unsplash.com/premium_photo-1682126239728-43b4e30792d6?q=80&w=800&auto=format&fit=crop",
    metaTitle: "Posture Correction in Valley, AL | Dr. Jason Bang",
    metaDescription: "Struggling with tech neck or poor posture in Valley, AL? Dr. Jason Bang provides corrective chiropractic care to restore spinal alignment and relieve pain.",
    causes: "Poor posture develops through the interaction of structural dysfunction, muscular imbalance, and habitual movement and positioning patterns. The causes we address at Chiropractic Unlimited include:\n\n**Prolonged Static Postures:** Hours of sitting — whether at a desk, in a car, or on a couch — places the spine in sustained non-neutral positions that gradually deform soft tissue, fatigue postural muscles, and alter resting spinal alignment. The human spine was designed for varied movement; sustained static loading in poor positions drives structural change over time.\n\n**Device and Screen Use:** Smartphones, tablets, and computers all require the user to hold their head in a flexed or protruded position that loads the cervical spine far beyond its design capacity. The cumulative daily hours of screen-based forward head posture accelerates disc degeneration, produces cervical muscle fatigue, and progressively flattens the normal cervical lordosis.\n\n**Muscular Imbalances:** Poor posture is both a cause and an effect of predictable muscular imbalance patterns. Tight hip flexors, weak glutes, shortened pectoral muscles, and inhibited deep cervical flexors all contribute to the characteristic posture patterns we see — anterior pelvic tilt in the lumbar spine and forward head posture in the cervical spine.\n\n**Spinal Misalignment:** Underlying vertebral misalignments alter the mechanical behavior of the spine, making it harder to maintain neutral posture even with conscious effort. Conversely, poor posture creates and perpetuates new misalignments. Effective postural correction must address both the structural (chiropractic adjustment) and the muscular/behavioral (rehabilitation and habit change) dimensions simultaneously.\n\n**Prior Injury:** Unresolved injuries from sports, accidents, or falls can alter movement patterns and spinal mechanics in ways that translate directly into chronic poor posture.",
    whenToSee: "Most people don't seek help for posture until it's causing pain — but by that point, structural changes to the spine are often already significant. Proactive posture evaluation and correction is always more effective than waiting for symptoms to develop.\n\nYou should schedule a postural evaluation with Dr. Bang if you notice yourself consistently struggling to stand or sit straight, if your head appears to protrude forward in photos or mirrors, if your shoulders round forward, or if you experience chronic tension in your upper back, neck, or shoulders. These are signs of established structural imbalance that will continue to progress without intervention.\n\nIf you're also experiencing related symptoms — headaches, dizziness, jaw tension, limited shoulder mobility, or a sensation that your neck or back are always tight regardless of how much you stretch — this further suggests that structural correction is needed rather than symptomatic management alone. Posture correction is also highly appropriate as a preventive measure for young people, office workers, and students whose daily routine involves significant static sitting or device use.",
    approach: "Correcting poor posture requires addressing two things simultaneously: the structural misalignments that make neutral posture mechanically difficult to achieve, and the muscular imbalances and habits that perpetuate the poor postural pattern. Our approach addresses both.\n\nEvery posture patient begins with a comprehensive **postural analysis** — a systematic visual and functional assessment that documents the current degree of structural deviation and identifies the specific segments and muscle groups involved. This provides a clear baseline against which we can measure progress and demonstrates to patients the objective changes occurring in their spine over time.\n\n**Spinal Adjustment (Chiropractic Correction)** is the foundation of structural postural rehabilitation. By restoring proper motion and alignment to the cervical and thoracic vertebrae that have adapted to the abnormal postural load, we create the structural precondition for posture improvement. Without correcting the underlying misalignments, postural exercises and ergonomic changes produce limited results because the spine is fighting its own structural dysfunction.\n\n**Rehabilitation Exercises** targeting the deep cervical flexors, mid-thoracic stabilizers, lower trapezius, and gluteal muscles directly address the specific muscular imbalances driving poor posture. These are not generic stretching routines — they are targeted, progressive exercise protocols chosen for your specific postural pattern. **Ergonomic and lifestyle guidance** ensures that the corrections achieved in the office are reinforced by what you do the other 23 hours of each day.",
    faqs: [
      {
        question: "Can poor posture really cause that much pain and damage?",
        answer: "Yes — and significantly more than most people realize. For every inch of forward head posture, effective load on the cervical spine increases by approximately 10 pounds. At a 45-degree forward head angle — common during smartphone use — the effective load reaches 49 pounds. Sustained over thousands of hours, this drives disc degeneration, nerve compression, bone spur formation, and chronic pain patterns that are very real structural consequences, not just postural bad habits."
      },
      {
        question: "How long does it take to correct posture?",
        answer: "Meaningful structural improvement typically becomes measurable within 8 to 12 weeks of consistent chiropractic care and rehabilitative exercise. How quickly you progress depends on how long the problem has been developing, your commitment to the at-home exercise component, and the degree of structural change already present. We track your progress with periodic postural reassessments so you can see the objective changes occurring in your spine."
      },
      {
        question: "I've tried standing desks, ergonomic chairs, and exercises. Why aren't they working?",
        answer: "Ergonomic modifications and exercises address the muscular and environmental factors contributing to poor posture — but they cannot correct underlying spinal misalignments that are making neutral posture mechanically difficult. If your spine has structural dysfunction, no amount of ergonomic optimization will fully resolve the problem. Chiropractic correction addresses the structural layer that posture aids cannot reach."
      },
      {
        question: "Will I need to do exercises at home?",
        answer: "Yes, and this is an essential part of the process. Spinal adjustments correct structural alignment, but the muscles that hold your spine in that corrected position need to be retrained through specific, targeted exercises. We prescribe simple, time-efficient routines that reinforce your in-office corrections — and the combination consistently produces results that neither treatment alone achieves."
      },
      {
        question: "Is posture correction only for people in pain?",
        answer: "Absolutely not. Proactive posture correction is one of the most valuable preventive interventions available — particularly for office workers, students, and anyone who spends significant time with screens. Correcting postural dysfunction before significant structural deterioration develops is far more efficient than correcting it after years of spinal degeneration. Early intervention also improves energy levels, athletic performance, breathing efficiency, and overall well-being."
      },
      {
        question: "My job requires sitting for 8+ hours. What can realistically be done?",
        answer: "A great deal, actually. While we cannot change your job requirements, we can correct the structural damage that prolonged sitting has already created, provide you with a practical workstation optimization checklist, prescribe targeted microbreak movements that counteract sitting's effects throughout your workday, and build the muscular resilience that allows your spine to tolerate extended sitting with far less dysfunction. The goal is to make your work demands manageable on a healthy spine."
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

export const SERVICE_AREAS: ServiceAreaItem[] = [
  {
    slug: "lanett-al",
    city: "Lanett",
    state: "AL",
    title: "Chiropractor Near Lanett, AL",
    description: "Quality chiropractic care for Lanett, AL residents — just minutes from downtown Lanett.",
    metaTitle: "Chiropractor Near Lanett, AL | Dr. Jason Bang DC FNP",
    metaDescription: "Looking for a chiropractor near Lanett, AL? Dr. Jason Bang offers spinal correction, pain relief, and integrated wellness care just 5 minutes from downtown Lanett.",
    driveTime: "5 minutes",
    distance: "3 miles",
    intro: "If you live in Lanett, Alabama, quality chiropractic care is closer than you think. Chiropractic Unlimited is located just 3 miles away on 20th Avenue in Valley — a quick 5-minute drive from downtown Lanett. Dr. Jason Bang provides the same caliber of spinal correction and integrated wellness care that you'd expect from a major metro practice, right here in your backyard.\n\nLanett residents have historically had to travel to Opelika, Auburn, or LaGrange for specialized healthcare — adding 30 to 45 minutes of drive time each way. At Chiropractic Unlimited, we've made it our mission to bring advanced, evidence-based chiropractic care to the Chattahoochee Valley so that communities like Lanett have access to the treatment they deserve without the commute.\n\nWhat makes our clinic unique is Dr. Bang's dual credentials. As both a Doctor of Chiropractic (DC) and a Family Nurse Practitioner (FNP), he brings an integrated clinical perspective to every patient — combining the structural expertise of chiropractic with the diagnostic depth of advanced medical training. For Lanett families, this means comprehensive care under one roof.",
    whyChoose: "Lanett is a close-knit community where people value personal relationships with their healthcare providers. At Chiropractic Unlimited, that's exactly what you'll find. Dr. Bang takes the time to understand each patient's unique situation — their work demands, activity level, and health history — and builds a care plan around their specific needs, not a one-size-fits-all protocol.\n\nFor Lanett residents dealing with back pain from physical labor, neck stiffness from desk work at one of the area employers, or recovery from an auto accident on I-85, we provide the same thorough evaluation and targeted treatment whether it's your first visit or your fiftieth. Our approach is corrective, not just palliative — we identify and fix the structural cause of your pain so it doesn't keep coming back.\n\nWe also understand that convenience matters. Our location inside the Workout Anytime gym on 20th Avenue in Valley is easy to reach from Lanett — just a straight shot down the road. With flexible scheduling Monday through Saturday, fitting appointments into your routine is simple.",
    directions: "From downtown Lanett, head south on N 1st Street toward the Valley city line. Turn right onto 20th Avenue and continue for approximately 2 miles. Chiropractic Unlimited is located inside the Workout Anytime gym, in the same plaza as Ace Hardware. The entire drive takes about 5 minutes.",
    conditionsServed: "Lanett residents visit us for the full range of conditions we treat, including **low back pain**, **neck pain**, **headaches and migraines**, **sciatica**, **auto injury recovery**, and **posture correction**. Whether you're a warehouse worker dealing with repetitive strain, a retiree with chronic stiffness, or a student athlete looking to stay competitive, Dr. Bang's integrated approach addresses your specific needs with precision and care.",
    faqs: [
      {
        question: "How far is Chiropractic Unlimited from Lanett?",
        answer: "We're located just 3 miles from downtown Lanett — about a 5-minute drive down 20th Avenue in Valley, AL. We're inside the Workout Anytime gym, in the same plaza as Ace Hardware."
      },
      {
        question: "Do you see many patients from Lanett?",
        answer: "Yes. A significant portion of our patient base comes from Lanett and the surrounding Chambers County area. Our convenient location on 20th Avenue makes us easily accessible to anyone in the Lanett community."
      },
      {
        question: "What makes Dr. Bang different from other chiropractors in the area?",
        answer: "Dr. Bang holds dual credentials as both a Doctor of Chiropractic (DC) and a Family Nurse Practitioner (FNP) — a combination that is extremely rare. This means he can evaluate your pain from both a structural and a medical perspective, providing more comprehensive care than a standard chiropractic visit."
      },
      {
        question: "Do I need a referral to be seen?",
        answer: "No referral is necessary. You can call us directly at (334) 219-0150 or book online through our website. We welcome walk-ins when scheduling allows, but appointments are recommended to minimize your wait time."
      },
      {
        question: "What are your hours?",
        answer: "We're open Monday, Tuesday, Friday, and Saturday from 10:00 AM to 5:00 PM. We are closed Wednesday, Thursday, and Sunday. This schedule allows us to offer weekend availability for patients who can't make weekday appointments."
      }
    ]
  },
  {
    slug: "lafayette-al",
    city: "LaFayette",
    state: "AL",
    title: "Chiropractor Near LaFayette, AL",
    description: "Serving LaFayette, AL with expert chiropractic and integrated wellness care — just a short drive away.",
    metaTitle: "Chiropractor Near LaFayette, AL | Dr. Jason Bang DC FNP",
    metaDescription: "Need a chiropractor near LaFayette, AL? Dr. Jason Bang provides spinal correction, pain relief, and holistic care in Valley, AL — just 25 minutes from LaFayette.",
    driveTime: "25 minutes",
    distance: "18 miles",
    intro: "LaFayette, Alabama residents looking for experienced, comprehensive chiropractic care don't have to drive to Auburn or Columbus. Chiropractic Unlimited in Valley, AL is just 18 miles from LaFayette — roughly a 25-minute drive on US-431 — and offers a level of integrated care that's rare to find anywhere in the region.\n\nAs the county seat of Chambers County, LaFayette is home to hardworking families, local business owners, and an active agricultural community. The physical demands of life in LaFayette — whether from manual labor, long commutes, or the simple wear and tear of daily activity — can take a real toll on the spine. Unfortunately, chiropractic options in LaFayette itself are limited, leaving many residents to either manage their pain on their own or make the longer trip to larger cities.\n\nDr. Jason Bang opened Chiropractic Unlimited with communities like LaFayette in mind. His dual credentials as a Doctor of Chiropractic and a Family Nurse Practitioner mean that LaFayette patients receive not just a spinal adjustment, but a comprehensive clinical evaluation that addresses the full picture of their musculoskeletal and overall health.",
    whyChoose: "For LaFayette residents, the drive to Chiropractic Unlimited is an investment in care quality that pays for itself many times over. Dr. Bang's integrated approach means fewer visits overall — because we correct the underlying structural problem rather than providing temporary relief that requires endless follow-ups.\n\nMany LaFayette patients tell us they've tried other providers closer to home — or have been managing pain with medication for years — before finding us. What they consistently report is that Dr. Bang's thorough evaluation identifies issues that were previously missed, and that the corrective care plan produces results they hadn't been able to achieve elsewhere.\n\nWe respect your time, especially when you're driving from LaFayette. Our scheduling is designed to minimize wait times, and Dr. Bang is thorough but efficient — you'll spend your time in the treatment room, not the waiting room.",
    directions: "From LaFayette, take US-431 North toward Valley. Continue on US-431 for approximately 16 miles until you reach the Valley area. Turn right onto 20th Avenue. Chiropractic Unlimited is located inside the Workout Anytime gym, in the same plaza as Ace Hardware. The drive takes approximately 25 minutes.",
    conditionsServed: "LaFayette patients visit us for conditions including **low back pain** from agricultural and manual work, **neck pain** and **headaches** from desk work and driving, **sciatica** causing leg pain, **auto injuries** from accidents on US-431 and I-85, and **posture correction** for chronic structural issues. Dr. Bang's FNP training is particularly valuable for LaFayette patients who want a provider capable of evaluating both the structural and medical dimensions of their condition.",
    faqs: [
      {
        question: "How far is Chiropractic Unlimited from LaFayette?",
        answer: "We're approximately 18 miles from downtown LaFayette — about a 25-minute drive north on US-431. We're located inside the Workout Anytime gym on 20th Avenue in Valley, AL, in the same plaza as Ace Hardware."
      },
      {
        question: "Is it worth the drive from LaFayette?",
        answer: "Our LaFayette patients consistently say yes. Dr. Bang's dual DC and FNP credentials allow him to provide a level of diagnostic and treatment depth that's difficult to find in the area. Because our approach is corrective — fixing the root cause — most patients need fewer total visits than they would with symptom-focused care, which actually saves time in the long run."
      },
      {
        question: "Can you help with pain from farming or physical labor?",
        answer: "Absolutely. Repetitive lifting, bending, and prolonged physical work are among the most common causes of spinal misalignment and disc injury. We see many patients whose back and neck pain is directly related to the physical demands of their work. Dr. Bang develops treatment plans that address the structural damage and help prevent re-injury."
      },
      {
        question: "Do you offer flexible scheduling for patients driving from a distance?",
        answer: "Yes. We're open Monday, Tuesday, Friday, and Saturday, including weekend hours that work well for patients who can't take time off during the week. We do our best to accommodate scheduling needs for patients traveling from LaFayette and other surrounding communities."
      },
      {
        question: "What should I expect at my first visit?",
        answer: "Your first visit includes a comprehensive health history, orthopedic and neurological evaluation, postural assessment, and — when appropriate — diagnostic imaging review. Dr. Bang will explain his findings, discuss the root cause of your symptoms, and outline a recommended care plan with a specific timeline. Most first visits take 45-60 minutes."
      }
    ]
  },
  {
    slug: "west-point-ga",
    city: "West Point",
    state: "GA",
    title: "Chiropractor Near West Point, GA",
    description: "Chiropractic care for West Point, GA residents — just across the state line in Valley, AL.",
    metaTitle: "Chiropractor Near West Point, GA | Dr. Jason Bang DC FNP",
    metaDescription: "West Point, GA residents: quality chiropractic care is just minutes away. Dr. Jason Bang offers spinal correction and integrated wellness in Valley, AL.",
    driveTime: "8 minutes",
    distance: "4 miles",
    intro: "West Point, Georgia and Valley, Alabama are separated by the Chattahoochee River — and not much else. Chiropractic Unlimited is located just 4 miles from downtown West Point, making it one of the closest and most accessible chiropractic clinics for West Point residents. The drive takes about 8 minutes, and the quality of care you'll receive is worth every one of them.\n\nWest Point has a rich history and a strong sense of community, but like many smaller cities, specialized healthcare options can be limited. For chiropractic care, West Point residents have traditionally looked toward LaGrange or Columbus — both of which add significant drive time. Chiropractic Unlimited provides a closer alternative with a level of clinical expertise that stands up to any practice in the region.\n\nDr. Jason Bang's unique combination of Doctor of Chiropractic and Family Nurse Practitioner credentials means West Point patients receive an integrated clinical evaluation that goes beyond what a standard chiropractic visit offers. Whether you're dealing with chronic back pain, recovering from a car accident, or looking to improve your posture and overall spinal health, Dr. Bang provides thorough, evidence-based care tailored to your individual needs.",
    whyChoose: "West Point residents choose Chiropractic Unlimited for three simple reasons: proximity, expertise, and results.\n\nAt just 4 miles away, we're closer to West Point than most chiropractic clinics in either Georgia or Alabama. There's no need to drive 20+ miles to LaGrange or Columbus when advanced chiropractic care is available right across the river.\n\nDr. Bang's dual credentials are a genuine differentiator. His FNP training gives him diagnostic capabilities that most chiropractors don't have — including the ability to evaluate whether your pain has medical contributing factors beyond the spine. For West Point patients managing complex or multi-system health issues, this integrated perspective eliminates the need to coordinate between multiple providers.\n\nAnd the results speak for themselves. Our approach is corrective — we identify the structural root cause of your problem and fix it. West Point patients consistently report that the quality of their evaluation and treatment exceeds what they've experienced elsewhere.",
    directions: "From downtown West Point, GA, cross the Chattahoochee River into Valley, AL via US-29. Continue on US-29 and turn onto 20th Avenue. Chiropractic Unlimited is located inside the Workout Anytime gym, in the same plaza as Ace Hardware. The entire drive is approximately 4 miles and takes about 8 minutes.",
    conditionsServed: "West Point residents visit us for the full spectrum of conditions we treat: **low back pain**, **neck pain**, **headaches and migraines**, **sciatica**, **auto injuries** and whiplash recovery, and **posture correction**. We also provide care for **athletes** at all levels, **prenatal chiropractic** for expecting mothers, and **pediatric chiropractic** for children. Living just across the state line means you have access to Dr. Bang's comprehensive, integrated approach without a long drive.",
    faqs: [
      {
        question: "Can I see a chiropractor in Alabama if I live in Georgia?",
        answer: "Absolutely. There are no restrictions on receiving chiropractic care across state lines. Many of our patients live in West Point and other Georgia communities. You don't need a referral, and your visit is handled exactly the same as any other patient."
      },
      {
        question: "How far is Chiropractic Unlimited from West Point?",
        answer: "We're just 4 miles from downtown West Point — about an 8-minute drive across the Chattahoochee River into Valley, AL. We're inside the Workout Anytime gym on 20th Avenue, in the same plaza as Ace Hardware."
      },
      {
        question: "Do you accept Georgia insurance?",
        answer: "We are a cash-based practice, so insurance state of origin is not a factor. Our transparent pricing applies equally to all patients regardless of where they live. We offer affordable care plans and can provide documentation for FSA/HSA reimbursement if applicable."
      },
      {
        question: "Why should I come to Valley instead of going to LaGrange or Columbus?",
        answer: "Proximity and quality. We're 4 miles from West Point — significantly closer than LaGrange (25+ miles) or Columbus (35+ miles). Dr. Bang's dual DC and FNP credentials provide a level of integrated diagnostic and treatment capability that is rare anywhere in the region, regardless of distance."
      },
      {
        question: "What conditions do West Point patients most commonly come in for?",
        answer: "The most common presentations from West Point patients are low back pain, neck pain with associated headaches, sciatica, and auto injury recovery. We also see athletes from West Point seeking performance optimization and families bringing children for pediatric spinal checkups."
      }
    ]
  },
  {
    slug: "opelika-al",
    city: "Opelika",
    state: "AL",
    title: "Chiropractor Near Opelika, AL",
    description: "Advanced chiropractic and integrated wellness care for Opelika, AL residents in nearby Valley.",
    metaTitle: "Chiropractor Near Opelika, AL | Dr. Jason Bang DC FNP",
    metaDescription: "Opelika, AL residents: Dr. Jason Bang offers dual-credentialed chiropractic and integrated wellness care in Valley, AL — about 30 minutes from Opelika.",
    driveTime: "30 minutes",
    distance: "25 miles",
    intro: "Opelika, Alabama has no shortage of healthcare options — but finding a chiropractor who combines structural expertise with advanced medical training is another matter. Dr. Jason Bang at Chiropractic Unlimited in Valley, AL is one of the only practitioners in the region who holds both Doctor of Chiropractic (DC) and Family Nurse Practitioner (FNP) credentials, offering Opelika residents a level of integrated care that most chiropractic clinics simply cannot match.\n\nLocated about 25 miles from Opelika — roughly a 30-minute drive on US-431 or I-85 — Chiropractic Unlimited serves patients throughout the greater Lee and Chambers County area. While Opelika residents have chiropractic options closer to home, many choose to make the drive specifically because Dr. Bang's dual-credentialed approach delivers diagnostic depth and treatment outcomes they haven't found elsewhere.\n\nWhether you're an Opelika professional dealing with desk-related neck pain, a retiree managing chronic back issues, or a parent looking for gentle pediatric chiropractic care, Dr. Bang provides thorough, evidence-based treatment designed to correct the underlying structural cause of your symptoms — not just temporarily relieve them.",
    whyChoose: "Opelika patients who choose Chiropractic Unlimited do so because they've recognized the value of Dr. Bang's integrated clinical approach. His FNP training means he evaluates every patient from both a structural and a medical perspective — identifying contributing factors that a standard chiropractic evaluation might miss and developing care plans that address the full scope of the problem.\n\nThis is particularly valuable for Opelika patients with complex presentations — conditions where the spine, nervous system, and overall health intersect. Rather than bouncing between a chiropractor and a primary care provider, Dr. Bang can assess both dimensions in a single visit and develop a unified treatment strategy.\n\nOur corrective approach also means fewer visits over time. Because we target the root structural cause rather than just managing symptoms, many patients find that their total time and cost of care is actually less than what they were spending on frequent, symptom-focused treatments closer to home.",
    directions: "From Opelika, take US-431 North through Smiths Station, continuing toward Valley. Alternatively, take I-85 North to Exit 66, then follow signs toward Valley on US-431. Continue to 20th Avenue in Valley. Chiropractic Unlimited is located inside the Workout Anytime gym, in the same plaza as Ace Hardware. The drive takes approximately 30 minutes via either route.",
    conditionsServed: "Opelika patients visit us for conditions including **low back pain**, **neck pain**, **chronic headaches and migraines**, **sciatica**, **auto injury recovery** from I-85 and US-431 accidents, and **posture correction**. We also serve Opelika **athletes** seeking performance care, provide **prenatal chiropractic** for expecting mothers, and offer **pediatric spinal evaluations** for children. Dr. Bang's integrated approach is especially beneficial for patients with chronic conditions that haven't responded fully to conventional chiropractic or medical management alone.",
    faqs: [
      {
        question: "Why would I drive to Valley when there are chiropractors in Opelika?",
        answer: "Dr. Bang's dual DC and FNP credentials are extremely rare — most chiropractors do not hold advanced medical training. This means he can diagnose and treat from both a structural and a medical perspective, providing a depth of care that standard chiropractic visits cannot. Our Opelika patients consistently tell us that the quality of evaluation and treatment results justify the drive."
      },
      {
        question: "How far is the drive from Opelika?",
        answer: "Approximately 25 miles — about 30 minutes via US-431 or I-85. We're located inside the Workout Anytime gym on 20th Avenue in Valley, in the same plaza as Ace Hardware."
      },
      {
        question: "Do you see many patients from Opelika and Auburn?",
        answer: "Yes. We serve patients from across the greater Lee and Chambers County area, including Opelika, Auburn, Smiths Station, and Phenix City. Many of these patients specifically seek out Dr. Bang's integrated approach after finding that conventional chiropractic alone hasn't fully resolved their condition."
      },
      {
        question: "What should I expect at my first appointment?",
        answer: "A thorough initial evaluation that includes your complete health history, orthopedic and neurological testing, postural assessment, and a detailed discussion of your symptoms and goals. Dr. Bang will explain exactly what he finds, what's causing your symptoms, and what corrective care plan he recommends — with a clear timeline and milestones. Most first visits take 45-60 minutes."
      },
      {
        question: "Is chiropractic covered by insurance?",
        answer: "We are a cash-based practice, which means we don't bill insurance directly. This model allows Dr. Bang to spend the time each case requires without insurance-imposed visit limits. We offer transparent, affordable care plans and can provide documentation for FSA/HSA reimbursement."
      }
    ]
  }
];