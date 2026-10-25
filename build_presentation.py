import sys
import os
import pptx
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def create_deck():
    prs = pptx.Presentation()
    # 16:9 Widescreen standard
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    blank_layout = prs.slide_layouts[6]

    # Apple-grade curated color palette
    c_dark = RGBColor(15, 23, 42)          # Deep Navy/Slate #0f172a
    c_blue = RGBColor(0, 113, 227)         # Apple System Blue #0071e3
    c_accent_blue = RGBColor(37, 99, 235)  # Vibrant Royal Blue #2563eb
    c_light_blue = RGBColor(240, 247, 255) # Ice Blue Canvas #f0f7ff
    c_gray = RGBColor(100, 116, 139)       # Neutral Slate #64748b
    c_light_gray = RGBColor(248, 250, 252) # Card background #f8fafc
    c_border = RGBColor(226, 232, 240)     # Card border #e2e8f0
    c_white = RGBColor(255, 255, 255)      # Pure White

    # Helper for adding consistent Apple-style headers
    def add_header(slide, title, category=None):
        header_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.55), Inches(11.733), Inches(1.1))
        tf = header_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p = tf.paragraphs[0]
        if category:
            p.text = category.upper()
            p.font.size = Pt(11)
            p.font.bold = True
            p.font.color.rgb = c_blue
            p.space_after = Pt(2)
            p = tf.add_paragraph()

        p.text = title
        p.font.size = Pt(24)
        p.font.bold = True
        p.font.color.rgb = c_dark

        # Elegant hairline divider
        line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.5), Inches(11.733), Inches(0.025))
        line.fill.solid()
        line.fill.fore_color.rgb = c_accent_blue
        line.line.fill.background()

    # Helper for two-column slide with refined padding & typography
    def make_two_column_slide(title, cat, left_title, left_bullets, right_title, right_bullets):
        s = prs.slides.add_slide(blank_layout)
        add_header(s, title, cat)
        
        # Left card
        c1 = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.75), Inches(5.65), Inches(5.15))
        c1.fill.solid()
        c1.fill.fore_color.rgb = c_light_gray
        c1.line.color.rgb = c_border
        tf1 = c1.text_frame
        tf1.word_wrap = True
        tf1.margin_left = tf1.margin_right = Inches(0.35)
        tf1.margin_top = tf1.margin_bottom = Inches(0.32)

        p = tf1.paragraphs[0]
        p.text = left_title
        p.font.size = Pt(16)
        p.font.bold = True
        p.font.color.rgb = c_accent_blue
        p.space_after = Pt(12)

        for b in left_bullets:
            p = tf1.add_paragraph()
            p.text = "•  " + b
            p.font.size = Pt(12)
            p.font.color.rgb = c_dark
            p.space_after = Pt(9)

        # Right card
        c2 = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.88), Inches(1.75), Inches(5.65), Inches(5.15))
        c2.fill.solid()
        c2.fill.fore_color.rgb = c_light_gray
        c2.line.color.rgb = c_border
        tf2 = c2.text_frame
        tf2.word_wrap = True
        tf2.margin_left = tf2.margin_right = Inches(0.35)
        tf2.margin_top = tf2.margin_bottom = Inches(0.32)

        p = tf2.paragraphs[0]
        p.text = right_title
        p.font.size = Pt(16)
        p.font.bold = True
        p.font.color.rgb = c_accent_blue
        p.space_after = Pt(12)

        for b in right_bullets:
            p = tf2.add_paragraph()
            p.text = "•  " + b
            p.font.size = Pt(12)
            p.font.color.rgb = c_dark
            p.space_after = Pt(9)
        return s

    # ==================== SLIDE 1: TITLE SLIDE ====================
    s1 = prs.slides.add_slide(blank_layout)
    bg1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = c_dark
    bg1.line.fill.background()

    t_box = s1.shapes.add_textbox(Inches(1.0), Inches(0.9), Inches(11.333), Inches(3.2))
    tf1 = t_box.text_frame
    tf1.word_wrap = True
    tf1.margin_left = tf1.margin_top = tf1.margin_right = tf1.margin_bottom = 0

    p = tf1.paragraphs[0]
    p.text = "DESIGN THINKING (HUM_4342) PROJECT PRESENTATION"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = RGBColor(96, 165, 250)
    p.space_after = Pt(10)

    p = tf1.add_paragraph()
    p.text = "CampusShare"
    p.font.size = Pt(46)
    p.font.bold = True
    p.font.color.rgb = c_white

    p = tf1.add_paragraph()
    p.text = "A Peer-to-Peer Campus Resource & Academic Exchange Platform"
    p.font.size = Pt(20)
    p.font.color.rgb = RGBColor(203, 213, 225)
    p.space_before = Pt(8)

    p = tf1.add_paragraph()
    p.text = "Manipal Institute of Technology Bengaluru • Manipal Academy of Higher Education (MAHE)"
    p.font.size = Pt(12)
    p.font.color.rgb = RGBColor(148, 163, 184)
    p.space_before = Pt(6)

    # Team Card
    card1 = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.0), Inches(4.5), Inches(5.4), Inches(2.3))
    card1.fill.solid()
    card1.fill.fore_color.rgb = RGBColor(30, 41, 59)
    card1.line.color.rgb = RGBColor(51, 65, 85)
    tf_c1 = card1.text_frame
    tf_c1.word_wrap = True
    tf_c1.margin_left = tf_c1.margin_right = Inches(0.3)
    tf_c1.margin_top = tf_c1.margin_bottom = Inches(0.25)
    
    p = tf_c1.paragraphs[0]
    p.text = "PROJECT TEAM MEMBERS:"
    p.font.bold = True
    p.font.size = Pt(11.5)
    p.font.color.rgb = RGBColor(96, 165, 250)
    p.space_after = Pt(6)
    
    names = [
        "1. Sridhar Madhira (Reg. No: 2309xxxxx)",
        "2. Priyansh Kashyap | CSE (AI) (Reg. No: 235890468)"
    ]
    for n in names:
        p = tf_c1.add_paragraph()
        p.text = n
        p.font.size = Pt(13)
        p.font.color.rgb = c_white
        p.space_after = Pt(6)

    # Faculty Mentor Card
    card2 = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.9), Inches(4.5), Inches(5.4), Inches(2.3))
    card2.fill.solid()
    card2.fill.fore_color.rgb = RGBColor(30, 41, 59)
    card2.line.color.rgb = RGBColor(51, 65, 85)
    tf_c2 = card2.text_frame
    tf_c2.word_wrap = True
    tf_c2.margin_left = tf_c2.margin_right = Inches(0.3)
    tf_c2.margin_top = tf_c2.margin_bottom = Inches(0.25)
    
    p = tf_c2.paragraphs[0]
    p.text = "UNDER THE GUIDANCE OF:"
    p.font.bold = True
    p.font.size = Pt(11.5)
    p.font.color.rgb = RGBColor(96, 165, 250)
    p.space_after = Pt(6)
    
    details = [
        "Dr. Vandana Jha",
        "Associate Professor, Department of Humanities",
        "Manipal Institute of Technology Bengaluru",
        "Manipal Academy of Higher Education (MAHE)"
    ]
    for d in details:
        p = tf_c2.add_paragraph()
        p.text = d
        p.font.size = Pt(12)
        p.font.color.rgb = c_white
        p.space_after = Pt(3)

    # ==================== SLIDE 2: EXECUTIVE ROADMAP ====================
    s2 = prs.slides.add_slide(blank_layout)
    add_header(s2, "Executive Presentation Agenda", "TABLE OF CONTENTS")

    agenda_sections = [
        ("01", "Phase 0: Context & Motivation", "Campus resource friction, specialized tools, and commercial marketplace shortcomings."),
        ("02", "Phase 1: Empathy & Field Inquiry", "Observational inquiry into student WhatsApp trading groups and customer journey mapping."),
        ("03", "Phase 1: Define Problem Statement", "Bounded human-centered problem definition, affected cohorts, and institutional drivers."),
        ("04", "Phases 2 & 3: Root Cause & Solution", "5-Whys root cause analysis, HMW opportunities, and multi-tier exchange formulation."),
        ("05", "Phase 4: Prototype & Privacy System", "Apple-grade web application, Zero-Knowledge Ghost Privacy, and direct on-spot UPI."),
        ("06", "Phase 4: Validation & Future Scope", "Peer walkthrough findings, anti-harassment comfort, version 2.0 roadmap, and learnings.")
    ]

    for idx, (num, heading, desc) in enumerate(agenda_sections):
        col = idx // 3
        row = idx % 3
        left = Inches(0.8 + col * 5.95)
        top = Inches(1.85 + row * 1.65)

        card = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(5.75), Inches(1.45))
        card.fill.solid()
        card.fill.fore_color.rgb = c_light_gray
        card.line.color.rgb = c_border
        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.3)
        tf.margin_top = tf.margin_bottom = Inches(0.2)

        p = tf.paragraphs[0]
        p.text = f"{num}   {heading}"
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = c_accent_blue
        p.space_after = Pt(4)

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(11)
        p2.font.color.rgb = c_gray

    # ==================== SLIDE 3: INTRODUCTION ====================
    make_two_column_slide(
        "Introduction: The Campus Resource Dilemma",
        "PHASE 0: CONTEXT & MOTIVATION",
        "The High Cost of Single-Semester Academic Tools",
        [
            "Coursework Equipment Demands: Engineering students are required to procure specialized gear each semester (advanced math reference books, scientific calculators, chemistry aprons, and mini drafters).",
            "Emergency Single-Use Friction: Critical tools are frequently required with little advance notice right before examinations or isolated practical vivas.",
            "The Dormant Asset Problem: Once coursework ends, specialized instruments remain abandoned in hostel cupboards rather than circulating to juniors.",
            "Compounding Financial Strain: Students face recurring out-of-pocket expenses purchasing brand-new supplies from commercial retail shops."
        ],
        "The Untapped Senior Resource Pool",
        [
            "Hostel Storage Inefficiencies: Seniors across 3rd and 4th year possess functional calculators, drafting gear, and books with no easy transfer channel.",
            "Informal Communication Decay: Announcements posted on general batch WhatsApp or Telegram chats rapidly submerge beneath hundreds of unrelated texts.",
            "Commercial Marketplace Shortcomings: External e-commerce platforms incur heavy delivery fees, courier waiting periods, and expose students to strangers.",
            "The Design Opportunity: A campus-exclusive, verified exchange platform enabling immediate, zero-fee physical handovers."
        ]
    )

    # ==================== SLIDE 4: PRIOR ART SEARCH ====================
    make_two_column_slide(
        "Patent Search, Literature & Product Review",
        "BACKGROUND RESEARCH & BENCHMARKING",
        "Commercial & Open Source Benchmarking",
        [
            "Academic Open-Source Audits: Benchmarked existing student exchange repositories, confirming strong student demand for local resource reuse.",
            "Architectural Gap: Existing marketplace platforms focus almost exclusively on permanent resale, completely overlooking free semester borrowing and short-term examination rentals.",
            "Commercial Classifieds (OLX, Amazon Used): Lack institutional domain verification, charge transaction commissions, and fail to prevent external fraud.",
            "Privacy Hazards: External marketplaces expose students' personal phone numbers to unregulated public scrapers."
        ],
        "Patent & Academic Literature Insights",
        [
            "User Authentication Patents: Review of educational marketplace IP highlights that closed university email domains deliver significantly higher peer trust and completed exchanges.",
            "Circular Campus Economy Studies: Published research confirms that structured textbook and instrument reuse materially reduces solid waste and production carbon footprint.",
            "Core Design Synthesis: CampusShare bridges these limitations via a tri-modal framework (Free Borrow, Low-Cost Rent, Deep-Discount Purchase) tied to physical campus landmarks."
        ]
    )

    # ==================== SLIDE 5: CUSTOMER JOURNEY MAPPING ====================
    s5 = prs.slides.add_slide(blank_layout)
    add_header(s5, "Empathize Phase: Customer Journey Mapping", "PHASE 1: EMPATHY")
    
    stages = [
        ("1. Need Arises", "Syllabus Release", "Receives course syllabus requiring specialized calculators and expensive course reference textbooks.", "Anxious / Stressed 😟", "Heavy unexpected expense for single-semester coursework."),
        ("2. Search & Ask", "Batch WhatsApp", "Posts queries in crowded batch groups; inquires across hostel wings for available copies.", "Frustrated 😤", "Inquiries rapidly drown under relentless casual chatter and meme spam."),
        ("3. Negotiation", "Private Chat DMs", "Identifies a potential senior seller; attempts to agree on price, item state, and meeting time.", "Hesitant 😐", "Senior forgets to bring item; lack of transparent pricing and deposit safety."),
        ("4. Handover", "Campus Landmark", "Coordinates physical meetup; inspects equipment binding, keys, and functional condition.", "Relieved 🙂", "Difficulty pinpointing exact turnstile or spot without arrival tracking."),
        ("5. Post-Term", "Semester End", "Examinations finish; equipment sits idle on hostel shelf with no structured channel to hand down.", "Disappointed 😕", "Wasted investment; identical financial friction restarts for next incoming batch.")
    ]

    for idx, (st, touch, act, emo, pain) in enumerate(stages):
        left = Inches(0.8 + idx * 2.38)
        top = Inches(1.8)
        w = Inches(2.25)
        h = Inches(5.1)

        card = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, w, h)
        card.fill.solid()
        card.fill.fore_color.rgb = c_light_gray
        card.line.color.rgb = c_border
        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.18)
        tf.margin_top = tf.margin_bottom = Inches(0.22)

        p = tf.paragraphs[0]
        p.text = st
        p.font.size = Pt(13.5)
        p.font.bold = True
        p.font.color.rgb = c_accent_blue
        p.space_after = Pt(4)

        details = [
            ("Touchpoint:", touch),
            ("User Action:", act),
            ("Emotional State:", emo),
            ("Core Friction:", pain)
        ]
        for label, val in details:
            p = tf.add_paragraph()
            p.text = label
            p.font.size = Pt(10.5)
            p.font.bold = True
            p.font.color.rgb = c_gray
            p.space_before = Pt(6)

            p2 = tf.add_paragraph()
            p2.text = val
            p2.font.size = Pt(10.5)
            p2.font.color.rgb = c_dark

    # ==================== SLIDE 5B: PRIMARY FIELD EVIDENCE ====================
    make_two_column_slide(
        "Empathy Evidence: Real Campus WhatsApp Chat Logs",
        "PHASE 1: AUTHENTIC FIELD RESEARCH",
        "Real Student WhatsApp Listings at MIT-B",
        [
            "Duplicate Online Orders:\nStudent Peer (2nd Yr IT) posted a sealed laptop protective case seeking peer resale after an accidental duplicate e-commerce shipment.",
            "Midnight Perishable Food Surplus:\nHostel Resident (Block 2) posted fresh evening food parcels late at night to prevent discarding hot, edible meals.",
            "Surplus Hostel Pantry Stock:\nHostel Resident (Block A) listed sealed packaged muesli and dry snacks due to surplus personal grocery purchases.",
            "Specialized Fitness Supplies:\nCampus Peer (3rd Yr Mech) posted unopened gym supplements seeking campus workout peers."
        ],
        "The Digital Subscription Sharing Phenomenon",
        [
            "Digital Resource Splits:\nPeer Member (3rd Yr CSE) posted seeking campus peers to split costs for shared personal study and entertainment subscriptions.",
            "Group Chat Degradation:\nNotices drown within minutes amidst active banter, forcing seniors to repeatedly re-post identical messages.",
            "The 'DM for Price' Barrier:\nOpaque pricing causes awkward haggling friction, mutual hesitation, and fear of unverified payment defaults.",
            "Design Intervention: CampusShare delivers structured categories, verified Manipal IDs, upfront pricing, and perishable item timers."
        ]
    )

    # ==================== SLIDE 6: DEFINE PROBLEM STATEMENT (PERFECTED SPACING & NO ESTIMATE NUMBERS) ====================
    s6 = prs.slides.add_slide(blank_layout)
    add_header(s6, "Define Phase: Problem Statement", "PHASE 1: DEFINE")

    # Big quote box
    quote_card = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.75), Inches(11.733), Inches(1.85))
    quote_card.fill.solid()
    quote_card.fill.fore_color.rgb = c_light_blue
    quote_card.line.color.rgb = RGBColor(147, 197, 253)
    tf_q = quote_card.text_frame
    tf_q.word_wrap = True
    tf_q.margin_left = tf_q.margin_right = Inches(0.4)
    tf_q.margin_top = tf_q.margin_bottom = Inches(0.25)

    p = tf_q.paragraphs[0]
    p.text = "OFFICIAL PROBLEM STATEMENT"
    p.font.size = Pt(11.5)
    p.font.bold = True
    p.font.color.rgb = c_blue
    p.space_after = Pt(4)

    p = tf_q.add_paragraph()
    p.text = "“Undergraduate engineering students at MIT Bengaluru incur substantial recurring financial burdens each semester purchasing temporary academic resources that are abandoned after single-term use, because informal campus communication channels lack verification, itemized search, and structured peer-to-peer lending models—leaving senior student inventory unutilized.”"
    p.font.size = Pt(15.5)
    p.font.bold = True
    p.font.color.rgb = c_dark

    # 3 Strategic Pillars below (balanced dimensions & zero arbitrary numbers)
    pillars = [
        ("👥 Target Cohort", "Who is affected?", "Undergraduate engineering students across all academic branches (CSE, IT, ECE, Mechanical, and 1st-Year Common Cycles) residing in campus hostels and day-scholar circles who require temporary coursework tools."),
        ("💸 Core Friction", "What is the impact?", "Severe cumulative financial burden on students repeatedly purchasing brand-new instruments and textbooks that become dormant once final examinations conclude, generating needless financial strain and academic waste."),
        ("🌱 Strategic Timing", "Why address it now?", "Rising cost of academic supplies combined with MAHE's university-wide sustainability mandates, demanding circular student resource lifecycles, zero-waste campus habits, and institutional peer affordability.")
    ]
    for idx, (head, sub, desc) in enumerate(pillars):
        left = Inches(0.8 + idx * 4.0)
        card = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(3.85), Inches(3.733), Inches(3.05))
        card.fill.solid()
        card.fill.fore_color.rgb = c_light_gray
        card.line.color.rgb = c_border
        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = Inches(0.3)
        tf.margin_top = tf.margin_bottom = Inches(0.28)

        p = tf.paragraphs[0]
        p.text = head
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = c_accent_blue

        p_sub = tf.add_paragraph()
        p_sub.text = sub
        p_sub.font.size = Pt(11)
        p_sub.font.bold = True
        p_sub.font.color.rgb = c_gray
        p_sub.space_after = Pt(8)

        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(12)
        p2.font.color.rgb = c_dark

    # ==================== SLIDE 7: ANALYZE PHASE ====================
    make_two_column_slide(
        "Analyze Phase: 5-Whys & How Might We...",
        "PHASE 2: ANALYZE",
        "The 5-Whys Root Cause Analysis",
        [
            "1. Why do students purchase expensive new gear repeatedly?\n   Because they lack visibility into surplus items owned by seniors.",
            "2. Why can't juniors easily access seniors' items?\n   Because unused items remain locked away in seniors' hostel rooms.",
            "3. Why don't seniors transfer them to incoming juniors?\n   Because posting on informal social groups is disorganized and tedious.",
            "4. Why do existing social chat channels fail?\n   Because chat groups lack category filtering, price discovery, and search indexing.",
            "5. Root Cause:\n   The total absence of a dedicated, campus-verified web exchange specifically architected for student peer discovery and physical handovers."
        ],
        "How Might We (HMW) Opportunity Questions",
        [
            "HMW 1 (Economic Affordability):\nHow might we make essential specialized lab gear and reference materials accessible at zero or nominal cost for every student?",
            "HMW 2 (Institutional Trust):\nHow might we guarantee that transaction participants are verified university peers without imposing cumbersome verification workflows?",
            "HMW 3 (Frictionless Exchange):\nHow might we coordinate physical handovers at common campus landmarks without shipping delays or logistical confusion?"
        ]
    )

    # ==================== SLIDE 8: SOLVE PHASE ====================
    make_two_column_slide(
        "Solve Phase: Ideation & Solution Features",
        "PHASE 3: SOLVE",
        "Free Brainstorming & Concept Selection",
        [
            "Idea A: Physical bulletin boards in cafeteria — Discarded (Requires manual paper upkeep, lacks real-time item status, no digital search).",
            "Idea B: Departmental rental hardware lockers — Discarded (High capital installation cost, maintenance complexity, institutional approval delays).",
            "Idea C: CampusShare Web Application — SELECTED (Zero overhead, instant search, accessible from student smartphones, no app store download required).",
            "Core Architectural Advantage: Multi-modal transaction framework accommodating borrowing, renting, surplus claiming, and permanent transfers."
        ],
        "Core Solution Pillars",
        [
            "1. Institutional Peer Verification: Sign-in and request authentication restricted to verified @learner.manipal.edu credentials.",
            "2. Flexible Exchange Options: Free semester loans, low-cost examination rentals, and deep-discount permanent handovers.",
            "3. 🚨 Express Exam & Lab SOS: Instant micro-rentals for emergency scientific calculator and lab coat needs directly outside examination blocks.",
            "4. ⚡ Flash Surplus Drops: Fixed upfront prices with expiration countdowns for hostel dining and pantry surplus, eliminating 'DM for price' spam.",
            "5. Designated Landmark Handovers: Safe physical coordination anchored at recognized campus spots (Central Library, Food Court, Hostel Foyers)."
        ]
    )

    # ==================== SLIDE 9: TARGET USERS ====================
    make_two_column_slide(
        "Target Users & Campus Stakeholders",
        "STAKEHOLDER ANALYSIS",
        "Primary Student Personas",
        [
            "Persona 1: 'The Cost-Conscious Fresher' (1st-Year Engineering Student)\nNeeds: Reference mathematics textbooks, scientific calculators, and standard chemistry lab coats. Goal: Successfully complete 1st-year practicals and exams without paying premium retail prices for single-term items.",
            "Persona 2: 'The Graduating Senior' (4th-Year Outgoing Student)\nNeeds: Efficiently declutter hostel room prior to campus departure. Goal: Seamlessly pass down working drafters, developer kits, and course literature to juniors while recovering modest pocket funds."
        ],
        "Institutional Stakeholders",
        [
            "Persona 3: 'Department Lab Instructors & Faculty'\nNeeds: Ensure students arrive punctually equipped with standard approved instruments (safety goggles, calculators). Goal: Eliminate practical class delays caused by missing tools.",
            "Persona 4: 'University Sustainability Cell (MAHE)'\nNeeds: Enforce circular resource utilization and responsible campus consumption. Goal: Reduce usable paper and plastic academic gear deposited in hostel waste disposal."
        ]
    )

    # ==================== SLIDE 10: OBJECTIVES & METHODOLOGY ====================
    make_two_column_slide(
        "Project Objectives & Design Methodology",
        "METHODOLOGY & SCOPE",
        "Core Project Objectives",
        [
            "1. Financial Accessibility: Alleviate student budget strain by substituting costly retail purchases with peer-to-peer resource sharing.",
            "2. Environmental Responsibility: Establish a closed-loop circular lifecycle keeping durable tools and surplus food in active campus use.",
            "3. Transparent Discovery: Replace unorganized social media spam with structured categorization and upfront fixed pricing.",
            "4. Student Safety & Privacy: Protect student identities through institutional domain validation and Zero-Knowledge privacy protocols."
        ],
        "Design Thinking Methodology",
        [
            "Stage 1: Empathy (Digital ethnography of active campus WhatsApp trade groups and student emotional journey mapping).",
            "Stage 2: Define (Formulation of precise actionable problem statement focused on equipment abandonment).",
            "Stage 3: Analyze (5-Whys root cause discovery and HMW opportunity clustering).",
            "Stage 4: Solve (Multi-mode exchange formulation, wireframing, and interactive prototyping).",
            "Stage 5: Test & Iterate (Walkthrough evaluations with campus peers to validate usability, comfort, and physical handover safety)."
        ]
    )

    # ==================== SLIDE 11: MAKE / TEST PROTOTYPE ====================
    make_two_column_slide(
        "Make / Test Phase: Architecture & Design",
        "PHASE 4: PROTOTYPE IMPLEMENTATION",
        "Technology Stack Selection",
        [
            "Frontend Core: Semantic HTML5, Vanilla CSS3 (Apple Design System with CSS variables), and ES6+ JavaScript.",
            "Zero Backend Overhead Advantage:\n   • Instant load time with zero compilation delays.\n   • Runs directly in any mobile or desktop browser without installation.\n   • Perfect for rapid prototype demonstration in presentations.",
            "Typography & UI System: Curated typography (Inter / San Francisco), frosted glassmorphism (backdrop-filter: blur), and Apple-grade micro-interactions."
        ],
        "Key Prototype Modules",
        [
            "1. Navigation & Search Engine: Real-time search indexing by keyword, item title, and academic department.",
            "2. Multi-Mode Switcher: Rapid filtering across All Items, Free Borrowing, Exam Rentals, and Flash Surplus Drops.",
            "3. Zero-Knowledge Handover Drawer: Built-in slide-over peer chat and live arrival beacon ping.",
            "4. Direct On-Spot UPI QR: Scan-and-pay settlement directly to senior's UPI account with zero middleman commission.",
            "5. Interactive Listing Engine: Seniors publish items in moments with default Ghost Privacy."
        ]
    )

    # ==================== SLIDE 12: SCREENSHOT SLIDE (PROPORTIONAL 16:9 + ZERO DISTORTION) ====================
    s12 = prs.slides.add_slide(blank_layout)
    add_header(s12, "Interactive Web Prototype & Privacy Architecture", "PROTOTYPE DEMONSTRATION")

    cards_path = "c:\\Users\\sridh\\Desktop\\des1\\clean_cards_two_col.png"
    chat_path = "c:\\Users\\sridh\\Desktop\\des1\\clean_chat_drawer_portrait.png"

    # Screenshot 1: Proportional Apple UI Feed (Two-column card view, ZERO vertical squishing)
    if os.path.exists(cards_path):
        s12.shapes.add_picture(cards_path, Inches(0.6), Inches(1.75), width=Inches(5.75))

    # Screenshot 2: Proportional Apple Slide-Over Drawer (Anonymous Peer Chat & Arrival Beacon, ZERO squishing)
    if os.path.exists(chat_path):
        s12.shapes.add_picture(chat_path, Inches(6.5), Inches(1.75), height=Inches(5.1))

    # Highlights side card
    side = s12.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.8), Inches(1.75), Inches(2.95), Inches(5.1))
    side.fill.solid()
    side.fill.fore_color.rgb = c_light_gray
    side.line.color.rgb = c_border
    tf_s = side.text_frame
    tf_s.word_wrap = True
    tf_s.margin_left = tf_s.margin_right = Inches(0.22)
    tf_s.margin_top = tf_s.margin_bottom = Inches(0.25)

    p = tf_s.paragraphs[0]
    p.text = "Zero-Knowledge Architecture"
    p.font.size = Pt(13.5)
    p.font.bold = True
    p.font.color.rgb = c_accent_blue
    p.space_after = Pt(6)

    features = [
        "Zero Phone Numbers Anywhere: Personal phone numbers, WhatsApp, and hostel room numbers are NEVER collected, stored, or exposed anywhere on the platform.",
        "Stage 1 (Public Feed): Displays ONLY public landmark spots (Library, Food Court) and verified student batch handle.",
        "Stage 2 (In-App Peer Chat): Apple slide-over drawer coordinates handover times safely without revealing personal contact details.",
        "Stage 3 (Beacon & Direct UPI): Live arrival beacon ping + on-spot direct GPay/PhonePe scan with zero middleman escrow holding student funds.",
        "Hostel Safety & Anti-Harassment: Eliminates stalking and number scraping, creating a trusted environment for female students in hostel blocks."
    ]
    for f in features:
        p = tf_s.add_paragraph()
        p.text = "🛡️  " + f
        p.font.size = Pt(9.5)
        p.font.color.rgb = c_dark
        p.space_after = Pt(4)

    # ==================== SLIDE 13: TESTING & RESULTS ====================
    make_two_column_slide(
        "Testing, Evaluation & Peer Feedback",
        "PHASE 4: TESTING & VALIDATION",
        "Peer Walkthrough Methodology",
        [
            "Method: Structured interactive walkthrough evaluations conducted with hostel wingmates and batchmates across junior and senior engineering cycles.",
            "Scenario 1 (Seeker Workflow): Finding an exam tool, opening the slide-over peer chat, and triggering the live arrival beacon ping.",
            "Scenario 2 (Lender Workflow): Listing an unused resource within moments with default Zero-Knowledge Ghost Privacy.",
            "Evaluation Criteria: Usability clarity, physical safety comfort, and reduction in peer handover friction."
        ],
        "Qualitative Peer Feedback",
        [
            "Zero-Knowledge Safety: Female students in hostel blocks strongly validated that keeping personal phone numbers and room details completely hidden eliminates harassment risks.",
            "Direct On-Spot UPI: Peers appreciated inspecting items physically first rather than having money locked into an app escrow.",
            "Landmark Coordination: Predefined meeting spots (Library, Food Court) removed the awkwardness of coordinating where to meet.",
            "Transparent Pricing: Freshers praised the upfront price tags, stating they dread asking 'DM for price' on unstructured WhatsApp groups."
        ]
    )

    # ==================== SLIDE 14: FUTURE SCOPE & CONCLUSION ====================
    make_two_column_slide(
        "Future Scope & Project Conclusion",
        "CONCLUSION & ROADMAP",
        "Future Scope & Roadmap (v2.0)",
        [
            "WhatsApp Cloud API Webhooks: Automated messaging notifications alerting seniors when a junior requests an item.",
            "Central Library Smart Lockers: Integration with physical campus lockers for 24/7 contactless handovers and returns.",
            "Automated Academic Return Prompts: Calendar-synced reminders sent prior to end-semester exams to return borrowed books.",
            "University Reserve Catalogue Sync: Cross-referencing university library inventory to highlight high-demand out-of-stock reserve books."
        ],
        "Summary of Key Learnings",
        [
            "Design Thinking forced our team to step back from technical assumptions and understand real human pain points.",
            "Root causes are rarely technical—the issue wasn't a lack of books, but the friction of discovery, trust, and physical handover.",
            "By implementing circular resource sharing, CampusShare demonstrates how simple engineering design creates tangible social and economic value for universities."
        ]
    )

    # ==================== SLIDE 15: THANK YOU ====================
    s15 = prs.slides.add_slide(blank_layout)
    bg15 = s15.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg15.fill.solid()
    bg15.fill.fore_color.rgb = c_dark
    bg15.line.fill.background()

    t_box15 = s15.shapes.add_textbox(Inches(2.0), Inches(2.0), Inches(9.333), Inches(3.5))
    tf15 = t_box15.text_frame
    tf15.word_wrap = True

    p = tf15.paragraphs[0]
    p.text = "Thank You!"
    p.alignment = PP_ALIGN.CENTER
    p.font.size = Pt(46)
    p.font.bold = True
    p.font.color.rgb = c_white

    p = tf15.add_paragraph()
    p.text = "Questions & Feedback Welcome"
    p.alignment = PP_ALIGN.CENTER
    p.font.size = Pt(20)
    p.font.color.rgb = RGBColor(147, 197, 253)
    p.space_before = Pt(8)

    p = tf15.add_paragraph()
    p.text = "CampusShare | Design Thinking (HUM_4342) | MIT Bengaluru"
    p.alignment = PP_ALIGN.CENTER
    p.font.size = Pt(13)
    p.font.color.rgb = RGBColor(148, 163, 184)
    p.space_before = Pt(24)

    # Save with graceful file lock handling
    saved_targets = []
    for filename in ["Design Thinking_Presentation_V2.pptx", "Design Thinking_Presentation_Final.pptx", "Design Thinking_Presentation_Clean.pptx", "Design Thinking_Internship.pptx"]:
        try:
            prs.save(filename)
            saved_targets.append(filename)
            print(f"Successfully generated {filename} with 15 widescreen slides!")
        except Exception as e:
            print(f"Note: {filename} is currently open in PowerPoint and locked. Skipping overwrite.")
    print(f"Presentation saved to: {', '.join(saved_targets)}")

if __name__ == "__main__":
    create_deck()
