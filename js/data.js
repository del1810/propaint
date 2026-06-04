/* ============================================================
   PROPAINT 2027 — Content & Image Configuration
   Update this file to change site text and images.
   ============================================================ */

const SITE = {
    name: "PROPAINT",
    year: "2027",
    tagline: "International Paints &amp; Coatings Products Expo",
    dates: "May 14–16, 2027",
    venue: "Chennai Trade Centre, Chennai, India",
    phone: "+91 95005 32234",
    email: "sales@propaint.in",
    website: "www.propaint.in",
    organiser: "Fair Connects India (FCI)",
    eventDate: "2027-05-14T09:00:00+05:30",
};

/* ---- Image URLs — replace any URL to swap an image ---- */
const IMAGES = {
    heroBg: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    aboutExpo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    aboutOrg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    statsBg: "https://images.unsplash.com/photo-1565793579543-2461da8ece42?w=1920&q=80",
    exhibitorsCta: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
    visitorsCta: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=1920&q=80",
    sponsorsCta: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80",
    contactHero: "https://images.unsplash.com/photo-1596708886762-4b4a82b804d5?w=1920&q=80",
    paintColors: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&q=80",
    pageHeroDefault: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80",
};

const STATS = [
    { num: "150", suffix: "+", label: "Exhibitors" },
    { num: "10", suffix: "+", label: "Countries" },
    { num: "3", suffix: "", label: "Days of Business" },
    { num: "50", suffix: "K+", label: "Expected Visitors" },
];

const WHY_EXHIBIT = [
    { icon: "fa-map-marked-alt", title: "Access South India's Largest Paint Market", desc: "Reach buyers from Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana and Puducherry." },
    { icon: "fa-rocket", title: "Launch New Products", desc: "Introduce innovative finishes and premium paint solutions directly to the market." },
    { icon: "fa-handshake", title: "Expand Dealer Networks", desc: "Build strong distributor and retailer partnerships across South India." },
    { icon: "fa-users", title: "Generate Quality Business Leads", desc: "Meet architects, contractors, developers, industrial buyers and serious consumers." },
    { icon: "fa-trophy", title: "Strengthen Brand Positioning", desc: "Position your company among the leading finished paint product brands in India." },
    { icon: "fa-home", title: "Tap into the Repainting Economy", desc: "Leverage India's rapidly growing renovation and home décor market." },
];

const EXHIBITOR_PROFILES = [
    {
        icon: "fa-paint-brush",
        title: "Paint Manufacturers – Decorative & Industrial",
        items: ["Interior wall paints & exterior paints", "Emulsions, distempers & primers", "Texture paints & designer finishes", "Waterproof & wood coatings", "Protective & anti-corrosion coatings", "Powder coatings & marine coatings", "Epoxy & PU systems", "Specialty & nano coatings"],
    },
    {
        icon: "fa-cogs",
        title: "Powder Coating & Surface Finishing",
        items: ["Powder coating powders", "Surface treatment chemicals", "Pre-treatment & phosphating systems", "Degreasing chemicals", "Electroplating chemicals", "Metal treatment products", "Finishing solutions"],
    },
    {
        icon: "fa-box",
        title: "Packaging & Filling Solutions",
        items: ["Paint cans & metal containers", "Plastic buckets & closures", "Labels & barcode systems", "Filling machines", "Automatic packing lines", "Drum handling systems"],
    },
    {
        icon: "fa-leaf",
        title: "Eco-Friendly & Sustainable Coatings",
        items: ["Water-based paints", "Low VOC coatings", "Green chemistry solutions", "Recyclable packaging", "Bio-based additives", "Energy-efficient curing systems", "Waste & effluent treatment"],
    },
    {
        icon: "fa-tools",
        title: "Adhesives, Sealants & Allied Products",
        items: ["Industrial adhesives", "Construction chemicals", "Sealants & waterproofing compounds", "Surface protection materials"],
    },
];

const VISITOR_PROFILES = [
    { icon: "fa-store", text: "Paint Dealers, Distributors & Retail Networks" },
    { icon: "fa-building", text: "Construction, Infrastructure & Real Estate Sector" },
    { icon: "fa-drafting-compass", text: "Architects & Interior Designers" },
    { icon: "fa-car", text: "Automotive OEMs & Auto Component Manufacturers" },
    { icon: "fa-industry", text: "Industrial Manufacturing & Engineering Companies" },
    { icon: "fa-ship", text: "Marine, Shipbuilding & Coastal Infrastructure" },
    { icon: "fa-spray-can", text: "Surface Finishing & Powder Coating Professionals" },
    { icon: "fa-landmark", text: "Government & Public Sector Buyers" },
    { icon: "fa-user-tie", text: "Consultants & Industry Advisors" },
    { icon: "fa-globe", text: "Importers, Exporters & International Buyers" },
    { icon: "fa-lightbulb", text: "Start-ups & Innovation Teams" },
];

const EVENT_HIGHLIGHTS = [
    { icon: "fa-store-alt", text: "150+ Exhibitors" },
    { icon: "fa-globe-asia", text: "10+ Countries" },
    { icon: "fa-flask", text: "Advanced Paint Formulations" },
    { icon: "fa-leaf", text: "Eco-Friendly Coatings Zone" },
    { icon: "fa-play-circle", text: "Live Demonstrations" },
    { icon: "fa-robot", text: "Smart Painting Technologies" },
    { icon: "fa-recycle", text: "Sustainable Coatings Pavilion" },
    { icon: "fa-atom", text: "Raw Materials & Chemical Innovations" },
    { icon: "fa-handshake", text: "B2B Matchmaking Sessions" },
];

const WHY_VISIT = [
    { icon: "fa-lightbulb", text: "Explore The Latest Industry Innovations" },
    { icon: "fa-award", text: "Connect with Leading Brands & Manufacturers" },
    { icon: "fa-chart-line", text: "Access South India's Fastest Growing Market" },
    { icon: "fa-briefcase", text: "Discover New Business Opportunities" },
    { icon: "fa-graduation-cap", text: "Learn About Industry Trends & Future Technologies" },
    { icon: "fa-users", text: "Network with Industry Professionals" },
    { icon: "fa-eye", text: "Experience Live Product Demonstrations" },
    { icon: "fa-search", text: "Source New Products & Suppliers" },
];

const SPONSOR_PACKAGES = [
    {
        tier: "Title Sponsor",
        exclusive: true,
        price: "₹15 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            'Exclusive "Title Sponsor" status — "X Presents PROPAINT 2027"',
            "63 Sqm Premium Exhibition Space",
            "Complimentary conference speaking slot",
            "Main entrance & stage backdrop branding",
            "Registration area, hall & VIP lounge branding",
            "Directional signage branding",
            "Premium logo on website, flyers, emailers, social media",
            "Branding in all media interactions & press releases",
            "VIP networking & buyer-seller meet access",
        ],
    },
    {
        tier: "Platinum Sponsor",
        exclusive: false,
        slots: 3,
        price: "₹10 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            "63 Sqm Premium Exhibition Space",
            "Complimentary conference speaking slot",
            "Main entrance & stage backdrop branding",
            "Registration area, hall & VIP lounge branding",
            "Premium logo on all media & press releases",
            "VIP networking & buyer-seller meet",
        ],
    },
    {
        tier: "Gold Sponsor",
        exclusive: false,
        slots: 3,
        price: "₹7 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            "35 Sqm Premium Exhibition Space",
            "Complimentary conference speaking slot",
            "Main entrance & stage backdrop branding",
            "Hall & VIP lounge branding",
            "Premium logo on all media",
            "VIP networking & buyer-seller meet",
        ],
    },
    {
        tier: "Silver Sponsor",
        exclusive: false,
        slots: 3,
        price: "₹5 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            "27 Sqm Premium Exhibition Space",
            "Complimentary conference speaking slot",
            "Main entrance & stage backdrop branding",
            "VIP lounge branding",
            "Premium logo on all media",
            "VIP networking access",
        ],
    },
    {
        tier: "Networking Dinner Sponsor",
        exclusive: true,
        price: "₹5 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            'Exclusive "Networking Dinner Presented by [Sponsor]" rights',
            "18 Sqm Premium Exhibition Space",
            "Premium brand visibility at dinner venue",
            "10 min speaking slot",
            "Access to 50+ industry consultants",
            "Direct high-value networking beyond expo hours",
            "Exclusive digital promotions to all registered visitors",
        ],
    },
    {
        tier: "Lanyard Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            "Brand logo on ALL visitor lanyards — maximum visibility",
            "18 Sqm Premium Exhibition Space",
            "Main entrance & stage backdrop branding",
            "Registration area branding",
            "Premium logo on all media & press releases",
            "Buyer-seller meet participation",
        ],
    },
    {
        tier: "Registration Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            "Branding at all registration counters",
            "Digital registration page branding",
            "Branding on registration confirmations",
            "18 Sqm Premium Exhibition Space",
            "Main entrance & stage backdrop branding",
            "Buyer-seller meet participation",
        ],
    },
    {
        tier: "Delegate Bag Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            "Logo on ALL official delegate bags",
            "Distribution to all VIPs & visitors",
            "Promotional inserts allowed",
            "18 Sqm Premium Exhibition Space",
            "Main entrance & stage backdrop branding",
            "Buyer-seller meet participation",
        ],
    },
    {
        tier: "Conference Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: false,
        benefits: [
            "Branding inside the conference hall",
            "Podium, LED screen & brochure branding",
            "Speaker session opportunity",
            "18 Sqm Premium Exhibition Space",
            "Main entrance & stage backdrop branding",
            "Buyer-seller meet participation",
        ],
    },
];

const MARKET_INSIGHTS = [
    { num: "₹1.35T", label: "India Paint Market (Current)" },
    { num: "₹2.29T", label: "Projected Market Size by 2030" },
    { num: "9.2%", label: "Industry CAGR" },
    { num: "$17B+", label: "Projected USD Market (Next Decade)" },
];

const INDUSTRY_SECTORS = [
    { icon: "fa-building", title: "Construction & Infrastructure", desc: "Residential, commercial real estate, metro projects and public infrastructure driving demand for decorative paints, waterproofing and protective coatings." },
    { icon: "fa-car", title: "Automotive Leadership", desc: "One of India's largest automotive production centres with OEM coatings, refinish paints, powder coatings and EV component coatings." },
    { icon: "fa-industry", title: "Manufacturing Ecosystem", desc: "Engineering, heavy fabrication, electrical and consumer appliances create strong demand for industrial coatings and protective paint systems." },
    { icon: "fa-water", title: "Coastal & Marine Advantage", desc: "Ports and coastline support marine paints, anti-fouling systems, epoxy coatings and salt-corrosion protection requirements." },
];
