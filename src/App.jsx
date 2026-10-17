import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.WebP";
import hundredislands from "./images/image1.jpg";
import lingayengulf from "./images/lingayen_gulf.jpg";
import manaoag from "./images/manaoag.jpg";
import st_vincent from "./images/st_vincent.jpg";
import Button from "./components/atoms/Button";
import SearchBar from "./components/molecules/SearchBar";

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2b1b22" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#c9a227">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const ReloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const INITIAL_SITES = [
  {
    id: 1,
    name: "Hundred Islands",
    location: "Alaminos City",
    image: hundredislands,
    description: "A protected marine national park featuring 124 islands at low tide scattered across the Lingayen Gulf. Famous for island hopping, snorkeling, and pristine white sand beaches like Governor's Island and Quezon Island.",
  },
  {
    id: 2,
    name: "Lingayen Gulf",
    location: "Bolinao, Pangasinan",
    image: lingayengulf,
    description: "Lingayen Gulf is a large, strategically important inlet of the South China Sea located on the northwestern coast of Luzon, Philippines. It is bounded to the west and south by the province of Pangasinan and to the northeast by La Union.",
  },
  {
    id: 3,
    name: "Our Lady of Manaoag",
    location: "Manaoag, Pangasinan",
    image: manaoag,
    description: "The Minor Basilica of Our Lady of the Rosary of Manaoag (commonly known as Manaoag Church) is a famous Roman Catholic pilgrimage site located in Manaoag, Pangasinan.",
  },
  {
    id: 4,
    name: "St. Vincent Ferrer Church",
    location: "Bayambang, Pangasinan",
    image: st_vincent,
    description: "A historic church known for its beautiful architecture and religious significance. Features stunning stained glass windows and a peaceful atmosphere for reflection.",
  },
];

const MORE_SITES = [
  {
    id: 5,
    name: "Patar White Beach",
    location: "Bolinao, Pangasinan",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    description: "Celebrated for its golden-white sand and stunning sunset views overlooking the western coastline. A favorite getaway for swimming, relaxing, and coastal dining.",
  },
  {
    id: 6,
    name: "Cape Bolinao Lighthouse Trail",
    location: "Bolinao, Pangasinan",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80",
    description: "Scenic coastal trails surrounding the historic lighthouse overlooking dramatic limestone cliffs and roaring ocean waves crashing below.",
  },
  {
    id: 7,
    name: "Enchanted Cave",
    location: "Bani, Pangasinan",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description: "A mystical subterranean coral cave containing crystal-clear emerald spring water pools where visitors can take a refreshing underground swim.",
  },
];

const LINKS = ["Home", "Heritage Sites", "About", "Contact"];

function SiteCard({ site, onSelectSite }) {
  return (
    <article className="site-card">
      <img src={site.image} alt={site.name} loading="lazy" />
      <div className="site-card-overlay">
        <h3 className="site-card-title">{site.name}</h3>
        <p className="site-card-location">
          <PinIcon />
          <span>{site.location}</span>
        </p>
        <Button variant="primary" onClick={() => onSelectSite(site)}>View Details</Button>
      </div>
    </article>
  );
}

function SiteDrawer({ site, onClose }) {
  if (!site) return null;
  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <img src={site.image} alt={site.name} />
        <div className="drawer-body">
          <span className="badge">Heritage Landmark</span>
          <h2>{site.name}</h2>
          <p className="site-card-location dark">
            <PinIcon />
            <span>{site.location}</span>
          </p>
          <p className="drawer-text">{site.description}</p>
          <Button variant="primary" onClick={onClose}>Close Details</Button>
        </div>
      </aside>
    </div>
  );
}

function HomeView({ setActiveTab }) {
  return (
    <section className="hero fade-in" style={{ backgroundImage: `url(${hundredislands})` }}>
      <div className="hero-inner">
        
        <h1>Explore the Beauty of Pangasinan</h1>
        <p>
          Explore pristine white beaches, historic churches, mystical caves, and the
          world-renowned Hundred Islands National Park.
        </p>
        <Button variant="primary" onClick={() => setActiveTab("Heritage Sites")}>Explore All Sites</Button>
      </div>
    </section>
  );
}

function AboutView() {
  return (
    <div className="panel fade-in">
      <span className="badge">About The Province</span>
      <h2 className="panel-title">Preserving Pangasinan&apos;s Rich Legacy</h2>
      <p className="panel-text">
        Pangasinan derives its name from panag-asinan, meaning &quot;land of salt&quot; or
        &quot;place where salt is made,&quot; reflecting its historic salt-making industry
        along the Lingayen Gulf.
      </p>
      <div className="cards-2">
        <div className="info-card">
          <h3>Historical Roots</h3>
          <p>
            From pre-colonial trading ports interacting with ancient merchants to key
            revolutionary milestones, Pangasinan holds a revered place in Philippine
            history and culture.
          </p>
        </div>
        <div className="info-card">
          <h3>Sustainable Ecotourism</h3>
          <p>
            Our initiative is dedicated to protecting our natural treasures, promoting
            local culture, and ensuring sustainable tourism for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="panel fade-in">
      <span className="badge">Get in Touch</span>
      <h2 className="panel-title">Contact Provincial Tourism</h2>
      <p className="panel-text">
        Have inquiries about heritage sites or travel guides? Send us a note below.
      </p>
      {submitted ? (
        <div className="sent">
          <div className="sent-check">&#10003;</div>
          <h3>Message Sent!</h3>
          <p>Thank you, {name}. Our tourism office will respond to you shortly.</p>
          <Button variant="primary" onClick={reset}>Send Another Message</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label className="field">
            Your Name
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Juan Dela Cruz" />
          </label>
          <label className="field">
            Email Address
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="juan@example.com" />
          </label>
          <label className="field">
            Message
            <textarea required rows="4" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help you?" />
          </label>
          <Button variant="primary" className="form-submit">Send Message</Button>
        </form>
      )}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sites, setSites] = useState(INITIAL_SITES);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSite, setSelectedSite] = useState(null);

  const goTo = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (q) setActiveTab("Heritage Sites");
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setSites((prev) => [...prev, ...MORE_SITES]);
      setHasMore(false);
      setLoading(false);
    }, 600);
  };

  const filteredSites = sites.filter((site) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      site.name.toLowerCase().includes(query) ||
      site.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="shell">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="brand" onClick={() => goTo("Home")}>
          <img src={logo} alt="Pangasinan Heritage logo" className="logo-circle" />
          <span className="brand-name">Pangasinan Heritage</span>
        </div>
        <nav className="side-nav">
          {LINKS.map((link) => (
            <Button key={link} variant="nav" active={activeTab === link} onClick={() => goTo(link)}>
              {link}
            </Button>
          ))}
        </nav>
        <p className="side-foot">Land of Salt &amp; Wonder</p>
      </aside>

      <div className="main">
        <header className="topbar">
          <Button variant="icon" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <MenuIcon />
          </Button>
          <h2 className="topbar-title">{activeTab}</h2>
          <SearchBar value={searchQuery} onChange={handleSearch} />
        </header>

        <main className="content">
          {activeTab === "Home" && <HomeView setActiveTab={setActiveTab} />}

          {activeTab === "Heritage Sites" && (
            <div className="fade-in" key="sites">
              {filteredSites.length > 0 ? (
                <div className="site-grid">
                  {filteredSites.map((site) => (
                    <SiteCard key={site.id} site={site} onSelectSite={setSelectedSite} />
                  ))}
                </div>
              ) : (
                <p className="no-results">No heritage sites match &quot;{searchQuery}&quot;.</p>
              )}

              {hasMore && !searchQuery && (
                <div className="load-more-wrap">
                  <Button variant="outline" onClick={handleLoadMore} disabled={loading}>
                    <ReloadIcon />
                    {loading ? "Loading..." : "Load More"}
                  </Button>
                </div>
              )}
            </div>
          )}

          {activeTab === "About" && <AboutView />}
          {activeTab === "Contact" && <ContactView />}
        </main>
      </div>

      <SiteDrawer site={selectedSite} onClose={() => setSelectedSite(null)} />
    </div>
  );
}