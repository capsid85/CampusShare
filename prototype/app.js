// CampusShare — Practical Real-World Privacy Architecture
// Built for MIT Bengaluru (HUM_4342 Design Thinking)
// 100% Anonymized Peer Data (Zero Real Names, Zero Phone Numbers)

let items = [
  {
    id: 110,
    title: "Netflix Mobile / Private Screen Slot (1-Month Share)",
    category: "subs",
    dept: "Common",
    mode: "subs",
    countdown: "1 Slot Left",
    priceDisplay: "₹99 / mo",
    numericPrice: 99,
    origPrice: "₹199/mo",
    condition: "Private PIN Profile",
    sellerName: "Peer Member",
    sellerYear: "3rd Yr CSE",
    upiId: "peer.netflix@upi",
    handoverSpot: "Digital Credential Handover / Central Library",
    desc: "Private 1-screen profile on personal Netflix subscription. Full HD streaming, zero password sharing hassle, pay month-to-month without getting scammed.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 111,
    title: "Dyazo 13.6\" MacBook Air Hard Transparent Case",
    category: "tech",
    dept: "Common",
    mode: "flash",
    isFlash: true,
    countdown: "Duplicate Order",
    priceDisplay: "₹579",
    numericPrice: 579,
    origPrice: "₹2,099 MRP",
    condition: "Brand New Sealed",
    sellerName: "Senior Student",
    sellerYear: "2nd Yr IT",
    upiId: "student.dyazo@upi",
    handoverSpot: "Central Library Steps / Block 1",
    desc: "Ordered 2 pieces of 13.6-inch crystal transparent hard cases on Amazon by mistake. Brand new, factory sealed with original invoice.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 112,
    title: "Yoga Bar Super Muesli (Dark Chocolate + Cranberry, 700g)",
    category: "food",
    dept: "Common",
    mode: "flash",
    isFlash: true,
    countdown: "Pantry Surplus",
    priceDisplay: "₹250",
    numericPrice: 250,
    origPrice: "₹450 MRP",
    condition: "Factory Sealed",
    sellerName: "Hostel Resident",
    sellerYear: "3rd Yr BioTech",
    upiId: "hostel.pantry@upi",
    handoverSpot: "Girls Hostel Block A Security Foyer",
    desc: "700g Yoga Bar Super Muesli with 83% whole grains and dark chocolate cranberries. Completely unopened, factory seal intact. Bought excess online.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 113,
    title: "Late-Night Hot Egg Parathas with Mint Chutney & Mayo",
    category: "food",
    dept: "Common",
    mode: "flash",
    isFlash: true,
    countdown: "3:25 AM Drop",
    priceDisplay: "₹80",
    numericPrice: 80,
    origPrice: "₹140",
    condition: "Hot in Sealed Pouch",
    sellerName: "Campus Peer",
    sellerYear: "4th Yr CSE",
    upiId: "student.midnight@upi",
    handoverSpot: "Hostel Block 2 Common Lobby",
    desc: "Delivered fresh 10 mins ago. Egg parathas with mayonnaise and red chutney packets in zip-lock packaging. Hot and ready for midnight study sessions.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 114,
    title: "Beast Life Creatine Monohydrate (100g Unopened Tub)",
    category: "fitness",
    dept: "Common",
    mode: "buy",
    countdown: "Unopened Tub",
    priceDisplay: "₹280",
    numericPrice: 280,
    origPrice: "₹499 MRP",
    condition: "Sealed & Unopened",
    sellerName: "Student Member",
    sellerYear: "3rd Yr Mech",
    upiId: "peer.gym@upi",
    handoverSpot: "Campus Gym Entrance / Block 3",
    desc: "Beastlife 100g Creatine Monohydrate micronized tub, unbroken security seal. Great for campus gym training without paying full retail.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 115,
    title: "Spotify Premium Family Slot (Campus Split)",
    category: "subs",
    dept: "Common",
    mode: "subs",
    countdown: "Instant Invite",
    priceDisplay: "₹40 / mo",
    numericPrice: 40,
    origPrice: "₹119/mo",
    condition: "Legit Family Plan",
    sellerName: "Verified Peer",
    sellerYear: "3rd Yr CSE",
    upiId: "campus.spotify@upi",
    handoverSpot: "Digital Transfer (Invite Link)",
    desc: "1 open slot on Spotify Premium Family. Ad-free music, offline downloads. Instant campus invite link with verified student authentication.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 100,
    title: "Meghana Special Chicken Biryani + Salan (Fresh)",
    category: "food",
    dept: "Common",
    mode: "flash",
    isFlash: true,
    countdown: "Hot • 35m left",
    priceDisplay: "₹160",
    numericPrice: 160,
    origPrice: "₹320",
    condition: "Untouched Sealed Pack",
    sellerName: "Peer Member",
    sellerYear: "3rd Yr CSE",
    upiId: "foodcourt.peer@upi",
    handoverSpot: "Food Court Main Plaza",
    desc: "Food delivery arrived at 1:15 PM but our lab batch got pulled into an unscheduled session. Untouched container with fresh raita and salan.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 101,
    title: "Domino's Farmhouse Medium Pizza + Garlic Bread",
    category: "food",
    dept: "Common",
    mode: "flash",
    isFlash: true,
    countdown: "Fresh in Box",
    priceDisplay: "₹150",
    numericPrice: 150,
    origPrice: "₹340",
    condition: "Hot in Delivery Box",
    sellerName: "Campus Peer",
    sellerYear: "3rd Yr CSE",
    upiId: "hostel.pizza@upi",
    handoverSpot: "Hostel Block 3 Reception Foyer",
    desc: "Delivered 12 mins ago. Friend had to leave campus unexpectedly. Box is completely unopened, hot and ready for pickup.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 102,
    title: "Zara Relaxed Cotton Overshirt (Size M - Unworn)",
    category: "apparel",
    dept: "Common",
    mode: "buy",
    countdown: "Size Misfit",
    priceDisplay: "₹1,200",
    numericPrice: 1200,
    origPrice: "₹2,790",
    condition: "Brand New with Tags",
    sellerName: "Design Student",
    sellerYear: "2nd Yr Design",
    upiId: "design.peer@upi",
    handoverSpot: "Girls Hostel Block A Security Gate",
    desc: "Ordered during Zara online sale, wrong size delivered (needed Small, received Medium). Return window expired. Tags completely intact.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 1,
    title: "Higher Engineering Mathematics (44th Edition)",
    category: "textbook",
    dept: "Common",
    mode: "borrow",
    priceDisplay: "Free Loan",
    numericPrice: 0,
    origPrice: "₹895",
    condition: "Like New (No marks)",
    sellerName: "Senior Peer",
    sellerYear: "3rd Yr CSE",
    upiId: "senior.math@upi",
    handoverSpot: "Central Library Ground Floor Reading Hall",
    desc: "Required for Engineering Mathematics I & II in 1st year. Fully intact binding, zero missing pages. Free peer borrow for entire semester.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 2,
    title: "Casio fx-991CW Scientific Calculator (ClassWiz)",
    category: "calculator",
    dept: "Common",
    mode: "rent",
    priceDisplay: "₹40 / week",
    numericPrice: 40,
    origPrice: "₹1,495",
    condition: "Excellent (New battery)",
    sellerName: "ECE Student",
    sellerYear: "4th Yr ECE",
    upiId: "peer.calculator@upi",
    handoverSpot: "Academic Block 1 Entrance",
    desc: "Approved for all university end-semester examinations. High-resolution screen, all keys functional, includes snap-on hard case.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 201,
    title: "EMERGENCY: Casio fx-991ES Plus (Exam Hall Handover)",
    category: "calculator",
    dept: "Common",
    mode: "sos",
    isSOS: true,
    countdown: "Exam Today at 2 PM",
    priceDisplay: "₹30 / day",
    numericPrice: 30,
    origPrice: "₹1,250",
    condition: "100% Tested Battery",
    sellerName: "Mech Senior",
    sellerYear: "4th Yr Mech",
    upiId: "sos.exam@upi",
    handoverSpot: "Outside Exam Hall (Audi 2)",
    desc: "EXAM SOS: For students who forgot their calculator or had battery failure this morning. Handover directly at Audi 2 entrance before 1:45 PM.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 3,
    title: "Standard White Lab Coat (Unisex, Size M) + Goggles",
    category: "lab",
    dept: "Common",
    mode: "borrow",
    priceDisplay: "Free Loan",
    numericPrice: 0,
    origPrice: "₹450",
    condition: "Freshly Washed",
    sellerName: "BioTech Peer",
    sellerYear: "2nd Yr BioTech",
    upiId: "lab.peer@upi",
    handoverSpot: "Girls Hostel Block B Security Gate",
    desc: "Mandatory for Chemistry & Material Science labs. 100% cotton, freshly laundered, includes transparent safety eye goggles.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 202,
    title: "EMERGENCY: Chemistry Lab Coat + Safety Goggles (Size L)",
    category: "lab",
    dept: "Common",
    mode: "sos",
    isSOS: true,
    countdown: "Lab Slot 1:30 PM",
    priceDisplay: "₹20 / day",
    numericPrice: 20,
    origPrice: "₹500",
    condition: "Fresh & Ready",
    sellerName: "Chemistry Senior",
    sellerYear: "3rd Yr Chem",
    upiId: "sos.lab@upi",
    handoverSpot: "Chemistry Lab Lobby (2nd Fl)",
    desc: "LAB SOS: Forgotten your lab coat for today's practical evaluation? Don't get turned away at the door. Instant pickup outside the lab.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 4,
    title: "Complete Mini Drafter with Canvas Cover",
    category: "drafting",
    dept: "Mech",
    mode: "buy",
    priceDisplay: "₹180",
    numericPrice: 180,
    origPrice: "₹750",
    condition: "Good (Zero scale play)",
    sellerName: "Mech Peer",
    sellerYear: "3rd Yr Mech",
    upiId: "mech.drafter@upi",
    handoverSpot: "Workshop Block / Gate 2",
    desc: "Essential for Engineering Graphics (EG) drawing sheets. Both clamps intact, scale is scratch-free with canvas carrying sling.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 5,
    title: "Arduino Uno R3 Starter Kit + Sensor Bundle",
    category: "electronics",
    dept: "ECE",
    mode: "rent",
    priceDisplay: "₹50 / week",
    numericPrice: 50,
    origPrice: "₹1,850",
    condition: "Like New (All wires intact)",
    sellerName: "EEE Student",
    sellerYear: "3rd Yr EEE",
    upiId: "ece.arduino@upi",
    handoverSpot: "Innovation Lab / Tech Center",
    desc: "Perfect for Basic Electronics lab and mini-projects. Includes ultrasonic sensor, breadboard, LEDs, and jumper bundle.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 6,
    title: "Introduction to Algorithms (CLRS 3rd Ed)",
    category: "textbook",
    dept: "CSE",
    mode: "buy",
    priceDisplay: "₹350",
    numericPrice: 350,
    origPrice: "₹1,200",
    condition: "Acceptable (Hardbound)",
    sellerName: "CSE Senior",
    sellerYear: "4th Yr CSE",
    upiId: "cse.clrs@upi",
    handoverSpot: "Student Activity Center (SAC) Cafe",
    desc: "The definitive reference for DSA. Excellent for placement prep and 3rd sem DAA course. Hardcover bound.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 7,
    title: "Digital Design Principles & Practices",
    category: "textbook",
    dept: "ECE",
    mode: "borrow",
    priceDisplay: "Free Loan",
    numericPrice: 0,
    origPrice: "₹720",
    condition: "Good Condition",
    sellerName: "ECE Peer",
    sellerYear: "3rd Yr ECE",
    upiId: "ece.digital@upi",
    handoverSpot: "Library Discussion Room",
    desc: "Available for full semester loan. Required reference text for Digital System Design and computer architecture.",
    isCompleted: false,
    ghostMode: true
  },
  {
    id: 8,
    title: "Raspberry Pi 4 Model B (4GB) with Power Adapter",
    category: "electronics",
    dept: "CSE",
    mode: "rent",
    priceDisplay: "₹80 / week",
    numericPrice: 80,
    origPrice: "₹5,200",
    condition: "Excellent with Cooler",
    sellerName: "IT Senior",
    sellerYear: "4th Yr IT",
    upiId: "it.rpi@upi",
    handoverSpot: "Block 3 2nd Floor Common Lobby",
    desc: "Rent for your IoT open elective or capstone project without buying an expensive single-board computer.",
    isCompleted: false,
    ghostMode: true
  }
];

// In-Memory Chat Conversations
let chatConversations = {};

// Active Chat State
let activeChatId = null;

// Filter State
let currentMode = "all";
let currentCategory = "all";
let currentDept = "all";
let searchQuery = "";

// DOM Elements
const itemsGrid = document.getElementById("itemsGrid");
const listingsCountTitle = document.getElementById("listingsCountTitle");
const searchInput = document.getElementById("searchInput");
const segmentBtns = document.querySelectorAll(".segment-btn");
const filterChips = document.querySelectorAll(".filter-chip");
const deptFilter = document.getElementById("deptFilter");

// Modals
const postModal = document.getElementById("postModal");
const openPostModal = document.getElementById("openPostModal");
const closePostModal = document.getElementById("closePostModal");
const postForm = document.getElementById("postForm");

const dtModal = document.getElementById("dtModal");
const openDtModal = document.getElementById("openDtModal");
const closeDtModal = document.getElementById("closeDtModal");

// Chat Drawer Elements
const chatDrawer = document.getElementById("chatDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const closeChatDrawer = document.getElementById("closeChatDrawer");
const drawerSellerAvatar = document.getElementById("drawerSellerAvatar");
const drawerSellerName = document.getElementById("drawerSellerName");
const drawerSellerDomain = document.getElementById("drawerSellerDomain");
const drawerItemSnippet = document.getElementById("drawerItemSnippet");
const chatStream = document.getElementById("chatStream");
const chatInputForm = document.getElementById("chatInputForm");
const chatInput = document.getElementById("chatInput");
const drawerUnlockBox = document.getElementById("drawerUnlockBox");
const quickChips = document.getElementById("quickChips");
const pingArrivalBtn = document.getElementById("pingArrivalBtn");
const openUpiQrBtn = document.getElementById("openUpiQrBtn");

// UPI Modal Elements
const upiModal = document.getElementById("upiModal");
const closeUpiModal = document.getElementById("closeUpiModal");
const upiQrFrame = document.getElementById("upiQrFrame");
const upiMeta = document.getElementById("upiMeta");
const confirmUpiPaidBtn = document.getElementById("confirmUpiPaidBtn");

// Escape HTML utility
function escapeHTML(str) {
  return String(str).replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Current Time Formatter
function getFormattedTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Render Products Grid (Apple Design + Real-World Zero-Knowledge Privacy)
function renderItems() {
  const filtered = items.filter(item => {
    let matchMode = false;
    if (currentMode === "all") {
      matchMode = true;
    } else if (currentMode === "academics") {
      matchMode = ["textbook", "calculator", "lab", "electronics", "drafting"].includes(item.category);
    } else if (currentMode === "flash") {
      matchMode = item.isFlash || item.mode === "flash" || item.category === "food";
    } else if (currentMode === "subs") {
      matchMode = item.category === "subs" || item.mode === "subs";
    } else if (currentMode === "sos") {
      matchMode = item.isSOS || item.mode === "sos";
    } else if (currentMode === "borrow") {
      matchMode = item.mode === "borrow";
    }

    const matchCat = (currentCategory === "all" || item.category === currentCategory);
    const matchDept = (currentDept === "all" || item.dept === currentDept);
    const matchSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.handoverSpot.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sellerName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchMode && matchCat && matchDept && matchSearch;
  });

  if (listingsCountTitle) {
    listingsCountTitle.textContent = `Available Resources (${filtered.length} items)`;
  }

  if (filtered.length === 0) {
    itemsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 64px 24px; background: #ffffff; border-radius: 14px; border: 1px dashed rgba(0,0,0,0.12);">
        <span style="font-size: 32px; display: block; margin-bottom: 12px; opacity: 0.6;">🔍</span>
        <h3 style="font-size: 17px; font-weight: 600; color: #1d1d1f; margin-bottom: 4px;">No matching campus items found</h3>
        <p style="color: #86868b; font-size: 13px;">Try switching your category filter or be the first to list this item on the campus feed.</p>
      </div>
    `;
    return;
  }

  itemsGrid.innerHTML = filtered.map(item => {
    let badgeClass = "badge-borrow";
    let badgeLabel = "Borrow Free";

    if (item.category === "subs") {
      badgeClass = "badge-subs";
      badgeLabel = "Subscription Split";
    } else if (item.category === "tech") {
      badgeClass = "badge-tech";
      badgeLabel = "Tech Accessory";
    } else if (item.category === "fitness") {
      badgeClass = "badge-fitness";
      badgeLabel = "Gym Supplement";
    } else if (item.category === "food") {
      badgeClass = "badge-food";
      badgeLabel = "Hostel & Food Drop";
    } else if (item.category === "apparel") {
      badgeClass = "badge-buy";
      badgeLabel = "Fashion Misfit";
    } else if (item.isSOS || item.mode === "sos") {
      badgeClass = "badge-sos";
      badgeLabel = "Exam SOS";
    } else if (item.mode === "rent") {
      badgeClass = "badge-rent";
      badgeLabel = "Weekly Rent";
    } else if (item.mode === "buy") {
      badgeClass = "badge-buy";
      badgeLabel = "Peer Purchase";
    }

    let ctaLabel = "Chat & Meet at Spot";
    if (item.category === "subs") ctaLabel = "Split Plan";
    else if (item.isFlash) ctaLabel = "Claim Drop";
    else if (item.isSOS) ctaLabel = "SOS Claim";
    else if (item.mode === "borrow") ctaLabel = "Borrow Item";
    else if (item.mode === "rent") ctaLabel = "Rent Slot";

    return `
      <article class="product-card">
        <div class="card-header-line">
          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <span class="apple-badge ${badgeClass}">${badgeLabel}</span>
            ${item.countdown ? `<span class="countdown-pill">${escapeHTML(item.countdown)}</span>` : ''}
          </div>
          <span class="card-dept-tag">${item.dept}</span>
        </div>

        <h3 class="card-title">${escapeHTML(item.title)}</h3>
        <p class="card-desc">${escapeHTML(item.desc)}</p>

        <div class="card-specs">
          <div class="spec-line">
            <span>Condition</span>
            <span class="spec-val">${escapeHTML(item.condition)}</span>
          </div>
          <div class="spec-line">
            <span>Verified Peer</span>
            <span class="spec-val">${escapeHTML(item.sellerName)} (${escapeHTML(item.sellerYear)})</span>
          </div>
          <div class="spec-line">
            <span>Handover Spot</span>
            <span class="spec-val">📍 ${escapeHTML(item.handoverSpot)}</span>
          </div>
          <div class="spec-line" style="margin-top: 4px; padding-top: 4px; border-top: 1px dashed rgba(0,0,0,0.06);">
            <span style="color: #166534; font-size: 11px;">🛡️ Privacy Protocol</span>
            <span class="privacy-tag-card">${item.isCompleted ? '✅ Handover Completed' : '🔒 Ghost Mode (Phone & Room Never Exposed)'}</span>
          </div>
        </div>

        <div class="card-footer-action">
          <div class="price-unit">
            <span class="price-figure">${escapeHTML(item.priceDisplay)}</span>
            <span class="price-sub">Retail: ${escapeHTML(item.origPrice)}</span>
          </div>
          <button class="cta-pill primary" onclick="openChatDrawer(${item.id})">
            ${ctaLabel}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// Open Chat Drawer (Slide-Over Sidebar)
window.openChatDrawer = function(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  activeChatId = itemId;

  // Initialize conversation if not present
  if (!chatConversations[itemId]) {
    chatConversations[itemId] = [
      {
        sender: "seller",
        text: `Hey! Thanks for inquiring about "${item.title}". I'm available for handover at ${item.handoverSpot}. Let me know when you reach the spot!`,
        time: getFormattedTime()
      }
    ];
  }

  // Update Drawer Header (Anonymous initials)
  drawerSellerAvatar.textContent = "P";
  drawerSellerName.textContent = `${item.sellerName} (${item.sellerYear})`;
  drawerSellerDomain.textContent = "verified.student@learner.manipal.edu";

  // Update Drawer Item Snippet
  drawerItemSnippet.innerHTML = `
    <div class="drawer-item-info">
      <h4>${escapeHTML(item.title)}</h4>
      <span>📍 Public Handover Spot: ${escapeHTML(item.handoverSpot)}</span>
    </div>
    <div class="drawer-item-price">${escapeHTML(item.priceDisplay)}</div>
  `;

  // Render Chat Messages
  renderChatStream();

  // Render Bottom Command Center
  renderBottomCenter(item);

  // Open Drawer & Backdrop
  chatDrawer.classList.add("open");
  chatDrawer.setAttribute("aria-hidden", "false");
  drawerBackdrop.classList.add("open");
};

// Close Chat Drawer
function closeDrawer() {
  chatDrawer.classList.remove("open");
  chatDrawer.setAttribute("aria-hidden", "true");
  drawerBackdrop.classList.remove("open");
  activeChatId = null;
}

closeChatDrawer.addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

// Render Chat Bubbles
function renderChatStream() {
  if (!activeChatId || !chatConversations[activeChatId]) return;
  const messages = chatConversations[activeChatId];

  chatStream.innerHTML = messages.map(msg => {
    if (msg.isBeacon) {
      return `
        <div class="chat-bubble beacon">
          <span>📍</span>
          <div>${escapeHTML(msg.text)}</div>
        </div>
      `;
    }
    if (msg.sender === "system") {
      return `
        <div class="chat-bubble system">
          ${escapeHTML(msg.text)}
        </div>
      `;
    }
    const isMe = msg.sender === "buyer";
    return `
      <div class="chat-bubble ${isMe ? 'outgoing' : 'incoming'}">
        <p>${escapeHTML(msg.text)}</p>
        <span class="chat-time">${escapeHTML(msg.time)}</span>
      </div>
    `;
  }).join("");

  chatStream.scrollTop = chatStream.scrollHeight;
}

// Render Practical Zero-Knowledge Handover Center at Bottom of Drawer
function renderBottomCenter(item) {
  if (!item.isCompleted) {
    const isFree = item.numericPrice === 0 || item.mode === "borrow";
    drawerUnlockBox.innerHTML = `
      <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--apple-border); border-radius: var(--apple-radius-sm); padding: 12px 14px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="font-size: 12px; color: #1d1d1f;">🤝 Real-World Handover Checklist</strong>
          <span style="font-size: 10.5px; color: #166534; font-weight: 600;">100% Zero-Knowledge</span>
        </div>
        <p style="font-size: 11.5px; color: #86868b; line-height: 1.4; margin: 0;">
          1. Meet at ${escapeHTML(item.handoverSpot)}<br>
          2. Inspect item condition physically (No upfront lock-in)<br>
          3. ${isFree ? 'Confirm free peer loan' : 'Scan senior\'s direct UPI QR on the spot'}
        </p>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="cta-pill primary full" onclick="triggerDirectUpi(${item.id})">
          ${isFree ? '🤝 Confirm Free Handover' : `⚡ Scan On-Spot UPI QR (${item.priceDisplay})`}
        </button>
      </div>
    `;
  } else {
    drawerUnlockBox.innerHTML = `
      <div class="unlocked-card">
        <div class="unlocked-badge">
          <span>✅ Handover Complete • Verified Physical Peer Exchange</span>
        </div>
        <p style="font-size: 11.5px; color: #166534; line-height: 1.4; margin: 4px 0 0;">
          🌱 Recirculated cleanly within MIT Bengaluru. Zero personal phone numbers or room numbers were ever exposed.
        </p>
      </div>
    `;
  }
}

// Broadcast Arrival Beacon ("I'm at the spot")
pingArrivalBtn.addEventListener("click", () => {
  if (!activeChatId) return;
  const item = items.find(i => i.id === activeChatId);
  if (!item) return;

  const visualCue = prompt("Add a quick visual cue (e.g., 'Wearing black hoodie near library stairs'):", "Wearing black hoodie near the turnstile");
  const cueText = visualCue ? ` (Cue: "${visualCue}")` : "";

  chatConversations[activeChatId].push({
    isBeacon: true,
    text: `ARRIVAL BEACON: Buyer has arrived at ${item.handoverSpot}${cueText}`,
    time: getFormattedTime()
  });

  renderChatStream();

  // Simulated seller immediate response
  setTimeout(() => {
    chatConversations[activeChatId].push({
      sender: "seller",
      text: `Got your beacon! Stepping out to ${item.handoverSpot} right now, see you in 1 minute!`,
      time: getFormattedTime()
    });
    renderChatStream();
  }, 600);
});

// Trigger Direct UPI QR Modal
openUpiQrBtn.addEventListener("click", () => {
  if (!activeChatId) return;
  triggerDirectUpi(activeChatId);
});

window.triggerDirectUpi = function(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  const isFree = item.numericPrice === 0 || item.mode === "borrow";

  // Generate SVG QR Code
  upiQrFrame.innerHTML = `
    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="white"/>
      <rect x="10" y="10" width="24" height="24" rx="4" fill="#1d1d1f"/>
      <rect x="14" y="14" width="16" height="16" rx="2" fill="white"/>
      <rect x="18" y="18" width="8" height="8" fill="#0071e3"/>

      <rect x="66" y="10" width="24" height="24" rx="4" fill="#1d1d1f"/>
      <rect x="70" y="14" width="16" height="16" rx="2" fill="white"/>
      <rect x="74" y="18" width="8" height="8" fill="#0071e3"/>

      <rect x="10" y="66" width="24" height="24" rx="4" fill="#1d1d1f"/>
      <rect x="14" y="70" width="16" height="16" rx="2" fill="white"/>
      <rect x="18" y="74" width="8" height="8" fill="#0071e3"/>

      <rect x="42" y="12" width="6" height="6" fill="#1d1d1f"/>
      <rect x="52" y="12" width="6" height="6" fill="#1d1d1f"/>
      <rect x="42" y="24" width="8" height="6" fill="#1d1d1f"/>
      <rect x="40" y="40" width="20" height="20" rx="3" fill="#0071e3"/>
      <text x="50" y="54" font-size="10" font-family="sans-serif" font-weight="bold" fill="white" text-anchor="middle">UPI</text>

      <rect x="68" y="44" width="6" height="6" fill="#1d1d1f"/>
      <rect x="80" y="44" width="6" height="6" fill="#1d1d1f"/>
      <rect x="68" y="56" width="12" height="6" fill="#1d1d1f"/>

      <rect x="14" y="44" width="6" height="6" fill="#1d1d1f"/>
      <rect x="24" y="44" width="6" height="6" fill="#1d1d1f"/>
      <rect x="14" y="56" width="8" height="6" fill="#1d1d1f"/>

      <rect x="42" y="70" width="8" height="6" fill="#1d1d1f"/>
      <rect x="54" y="70" width="6" height="6" fill="#1d1d1f"/>
      <rect x="42" y="82" width="18" height="6" fill="#1d1d1f"/>
      <rect x="70" y="74" width="16" height="16" rx="2" fill="#1d1d1f"/>
    </svg>
  `;

  upiMeta.innerHTML = `
    <div class="upi-amount">${isFree ? 'Free Peer Loan (₹0)' : escapeHTML(item.priceDisplay)}</div>
    <div style="font-size: 13px; font-weight: 600; color: #1d1d1f; margin-top: 4px;">Verified Peer: ${escapeHTML(item.sellerName)} (${escapeHTML(item.dept)})</div>
    <div class="upi-id-tag">UPI: ${escapeHTML(item.upiId)}</div>
  `;

  confirmUpiPaidBtn.textContent = isFree
    ? "Item Inspected & Received (Confirm Free Handover)"
    : "Item Inspected & Paid Directly via GPay/PhonePe";

  confirmUpiPaidBtn.onclick = function() {
    item.isCompleted = true;
    upiModal.classList.remove("open");

    // Add confirmation in chat
    chatConversations[item.id].push({
      sender: "system",
      text: `🎉 Handover Completed! Item inspected and confirmed at ${item.handoverSpot}. Zero personal phone numbers or rooms were shared. +15 Campus Sustainability Credits recorded!`
    });

    renderChatStream();
    renderBottomCenter(item);
    renderItems();

    alert(`🎉 Physical Handover Successful!\n\nYou've completed the exchange at ${item.handoverSpot}.\nZero platform cuts, direct bank-to-bank UPI, and complete privacy preserved.`);
  };

  upiModal.classList.add("open");
};

closeUpiModal.addEventListener("click", () => upiModal.classList.remove("open"));

// Chat Form Submission
chatInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text || !activeChatId) return;

  chatConversations[activeChatId].push({
    sender: "buyer",
    text: text,
    time: getFormattedTime()
  });

  chatInput.value = "";
  renderChatStream();

  const currentItem = items.find(i => i.id === activeChatId);
  setTimeout(() => {
    if (activeChatId === currentItem.id) {
      const replies = [
        `Sounds perfect! I'm right here at ${currentItem.handoverSpot}. Feel free to ping arrival beacon when you're nearby!`,
        `Checked and packed! Let me know when you reach ${currentItem.handoverSpot}.`,
        `Sure, feel free to inspect it thoroughly before scanning the UPI QR!`
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      chatConversations[activeChatId].push({
        sender: "seller",
        text: randomReply,
        time: getFormattedTime()
      });
      renderChatStream();
    }
  }, 700);
});

// Quick Chips
quickChips.addEventListener("click", (e) => {
  const chip = e.target.closest(".quick-chip-btn");
  if (!chip || !activeChatId) return;
  chatInput.value = chip.dataset.msg;
  chatInputForm.dispatchEvent(new Event("submit"));
});

// Segmented Switcher
segmentBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    segmentBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentMode = btn.dataset.mode;
    renderItems();
  });
});

// Filter Chips
filterChips.forEach(chip => {
  chip.addEventListener("click", () => {
    filterChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentCategory = chip.dataset.cat;
    renderItems();
  });
});

// Department Filter
deptFilter.addEventListener("change", (e) => {
  currentDept = e.target.value;
  renderItems();
});

// Search Input
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderItems();
});

// Keyboard Shortcut ⌘K
window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchInput.focus();
  }
});

// Post Item Modal
openPostModal.addEventListener("click", () => postModal.classList.add("open"));
closePostModal.addEventListener("click", () => postModal.classList.remove("open"));

// Design Thinking Modal
openDtModal.addEventListener("click", () => dtModal.classList.add("open"));
closeDtModal.addEventListener("click", () => dtModal.classList.remove("open"));

// Outside modal click
window.addEventListener("click", (e) => {
  if (e.target === postModal) postModal.classList.remove("open");
  if (e.target === dtModal) dtModal.classList.remove("open");
  if (e.target === upiModal) upiModal.classList.remove("open");
});

// Post Form Submit
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const rawPrice = document.getElementById("postPrice").value || "Free";
  const numPrice = parseInt(rawPrice.replace(/[^0-9]/g, '')) || 0;
  const isGhost = document.getElementById("postGhostMode") ? document.getElementById("postGhostMode").checked : true;

  const newItem = {
    id: items.length + 100,
    title: document.getElementById("postTitle").value,
    category: document.getElementById("postCategory").value,
    dept: "Common",
    mode: document.getElementById("postMode").value,
    priceDisplay: numPrice === 0 ? "Free Loan" : `₹${numPrice}`,
    numericPrice: numPrice,
    origPrice: "₹850",
    condition: document.getElementById("postCondition").value,
    sellerName: "Campus Peer",
    sellerYear: "Verified Member",
    upiId: "campus.peer@upi",
    handoverSpot: document.getElementById("postLocation").value,
    desc: document.getElementById("postDesc").value || "Available for campus peer handover.",
    isCompleted: false,
    ghostMode: isGhost
  };

  items.unshift(newItem);
  postModal.classList.remove("open");
  postForm.reset();
  renderItems();

  alert("🚀 Item Listed on Campus Feed!\n🛡️ Zero-Knowledge Ghost Privacy Active: Zero personal phone numbers or room numbers are ever exposed. Coordination happens via in-app peer chat.");
});

// Initial Render
renderItems();
