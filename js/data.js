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
    heroBg: "images/indus coating 2.jpg",
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
    { num: "150", suffix: "+", label: "Exhibitors", icon: "fa-store" },
    { num: "10", suffix: "+", label: "Countries", icon: "fa-globe" },
    { num: "3", suffix: "", label: "Days of Business", icon: "fa-calendar-alt" },
    { num: "50", suffix: "K+", label: "Expected Visitors", icon: "fa-users" },
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
        icon: "fa-paint-roller",
        title: "Decorative Paints",
        items: [
            "Interior wall paints", "Exterior paints", "Emulsions & Distempers",
            "Primers", "Texture paints", "Designer finishes", "Waterproof coatings",
            "Wood coatings", "Metal paints & Enamels"
        ],
    },
    {
        icon: "fa-industry",
        title: "Industrial Coatings",
        items: [
            "Protective coatings", "Anti-corrosion & Powder coatings",
            "Automotive paints", "OEM & Coil coatings", "Marine coatings",
            "Floor & Pipeline coatings", "Heat resistant coatings",
            "Fire-retardant coatings", "Epoxy & PU systems"
        ],
    },
    {
        icon: "fa-vial",
        title: "Specialty Paints",
        items: [
            "Reflective paints", "Food-grade coatings", "Anti-bacterial coatings",
            "UV-resistant paints", "Thermal insulation coatings", "Smart coatings",
            "Nano coatings"
        ],
    },
    {
        icon: "fa-cogs",
        title: "Powder Coating & Surface Finishing",
        items: [
            "Powder coating powders", "Surface treatment chemicals", "Pre-treatment systems",
            "Degreasing chemicals", "Phosphating systems", "Electroplating chemicals",
            "Finishing solutions", "Metal treatment products"
        ],
    },
    {
        icon: "fa-box",
        title: "Packaging & Filling Solutions",
        items: [
            "Paint cans", "Metal containers", "Plastic buckets", "Labels", "Closures",
            "Filling machines", "Automatic packing lines", "Drum handling systems",
            "Barcode & coding systems"
        ],
    },
    {
        icon: "fa-leaf",
        title: "Eco-Friendly & Sustainable Coating Solutions",
        items: [
            "Water-based paints", "Low VOC coatings", "Green chemistry",
            "Recyclable packaging", "Bio-based additives", "Energy-efficient curing systems",
            "Waste management solutions", "Effluent treatment systems"
        ],
    },
    {
        icon: "fa-tools",
        title: "Adhesives, Sealants & Allied Products",
        items: [
            "Industrial adhesives", "Construction chemicals", "Sealants",
            "Waterproofing compounds", "Surface protection materials"
        ],
    },
    {
        icon: "fa-wrench",
        title: "Mechanical Tools",
        items: [
            "Paint Sprayers", "Electric Sanders", "Power Mixers", "Heat Guns",
            "Air Compressors", "Paint Mixers", "Pressure Washers", "Paint Removal Tools"
        ],
    },
    {
        icon: "fa-laptop-code",
        title: "Digital & Smart Solutions",
        items: [
            "ERP & Business Management Software", "CRM & Sales Automation Platforms",
            "Dealer & Distributor Management Solutions", "E-Commerce & Digital Commerce Platforms",
            "AI & Data Analytics Solutions", "AR/VR Paint Visualization Technologies",
            "Smart Color Matching Systems", "Digital Marketing & Customer Engagement Platforms",
            "Logistics & Supply Chain Technologies", "BIM & Architectural Software Solutions",
            "Smart Retail Technologies"
        ],
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
            "63 Sqm Premium Exhibition Space",
            'Exclusive "Title Sponsor" status as "X" Presents PROPAINT 2027',
            "Complimentary conference speaking slot",
            "Main entrance, Stage backdrop, Registration area, Hall, VIP lounge branding",
            "Directional signage branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "Exclusive media mentions",
            "Branding in all official media interactions",
            "VIP networking access",
            "Buyer-seller meet participation",
            "Access to VIP delegates"
        ],
    },
    {
        tier: "Platinum Sponsor",
        exclusive: false,
        slots: 3,
        price: "₹10 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "63 Sqm Premium Exhibition Space",
            "Complimentary conference speaking slot",
            "Main entrance, Stage backdrop, Registration area, Hall, VIP lounge branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "Branding in all official media interactions",
            "VIP networking access",
            "Buyer-seller meet participation",
            "Access to VIP delegates"
        ],
    },
    {
        tier: "Gold Sponsor",
        exclusive: false,
        slots: 3,
        price: "₹7 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "35 Sqm Premium Exhibition Space",
            "Complimentary conference speaking slot",
            "Main entrance, Stage backdrop, Registration area, Hall, VIP lounge branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "Branding in all official media interactions",
            "VIP networking access",
            "Buyer-seller meet participation",
            "Access to VIP delegates"
        ],
    },
    {
        tier: "Silver Sponsor",
        exclusive: false,
        slots: 3,
        price: "₹5 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "27 Sqm Premium Exhibition Space",
            "Complimentary conference speaking slot",
            "Main entrance, Stage backdrop, Registration area, VIP lounge branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "VIP networking access",
            "Buyer-seller meet participation",
            "Access to VIP delegates"
        ],
    },
    {
        tier: "Networking Dinner Sponsor",
        exclusive: true,
        price: "₹5 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "18 Sqm Premium Exhibition Space",
            'Exclusive Title Rights "Networking Dinner Presented by [Sponsor Name]"',
            "Premium Brand Visibility at Dinner Venue",
            "Branding On Event Collaterals: Dinner Invite, Website, Emailers, Press Releases, Social Media, Advertisements, And More",
            "50+ Industry Consultants",
            "10 Min Speaking Slot",
            "Direct High-Value Networking",
            "Relationship Building Beyond Expo Hours",
            "Exclusive Digital Promotions to All Registered Visitors"
        ],
    },
    {
        tier: "Lanyard Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "18 Sqm Premium Exhibition Space",
            "Brand logo on official visitor lanyards",
            "High visibility across all attendees",
            "Main entrance, Stage backdrop, Registration area branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "Buyer-seller meet participation"
        ],
    },
    {
        tier: "Registration Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "18 Sqm Premium Exhibition Space",
            'Branding at registration counters as "Registration Sponsor"',
            "Branding on registration confirmations",
            "Digital registration page branding",
            "Main entrance, Stage backdrop branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "Buyer-seller meet participation"
        ],
    },
    {
        tier: "Delegate Bag Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "18 Sqm Premium Exhibition Space",
            "Logo on official delegate bags",
            "Distribution to all VIPs & visitors",
            "Promotional inserts allowed",
            "Main entrance branding",
            "Stage backdrop branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "Buyer-seller meet participation"
        ],
    },
    {
        tier: "Conference Sponsor",
        exclusive: true,
        price: "₹4 Lakhs",
        gst: "+ GST (18%)",
        featured: true,
        benefits: [
            "18 Sqm Premium Exhibition Space",
            "Branding inside conference hall",
            "Speaker session opportunity",
            "Podium, LED screen branding",
            "Conference brochure branding",
            "Networking with industry delegates",
            "Main entrance,Stage backdrop branding",
            "Premium logo placement on Website, Flyers, Brochures, Digital campaigns, Invitations, Emailers",
            "Social media creatives, Press releases",
            "Buyer-seller meet participation"
        ],
    },
];
const INDUSTRY_SECTORS = [
    { icon: "fa-building", title: "Construction & Infrastructure", desc: "Residential, commercial real estate, metro projects and public infrastructure driving demand for decorative paints, waterproofing and protective coatings." },
    { icon: "fa-car", title: "Automotive Leadership", desc: "One of India's largest automotive production centres with OEM coatings, refinish paints, powder coatings and EV component coatings." },
    { icon: "fa-industry", title: "Manufacturing Ecosystem", desc: "Engineering, heavy fabrication, electrical and consumer appliances create strong demand for industrial coatings and protective paint systems." },
    { icon: "fa-water", title: "Coastal & Marine Advantage", desc: "Ports and coastline support marine paints, anti-fouling systems, epoxy coatings and salt-corrosion protection requirements." },
];
