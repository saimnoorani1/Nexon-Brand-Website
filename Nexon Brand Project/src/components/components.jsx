import heroimage from "../assets/heroimage.png";
import img1 from '../assets/earbuds.png';
import img2 from '../assets/smartwatch.png';
import img3 from '../assets/charger.png';
import img4 from '../assets/earbuds2.png';
import img5 from '../assets/keyboard.png';
import img8 from '../assets/powerbank.png';
import img9 from '../assets/magcharger.png';
import img10 from '../assets/headphone.png';
import img11 from '../assets/speaker.png';

function Navbar({cartcounter}) {
    return (
        <nav className="navbar">

            <div className="logo">
                <h2>NEXON</h2>
            </div>

            <div className="navbarlinks">
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#features">Features</a>
                <a href="#reviews">Reviews</a>
                <a href="#contact">Contact Us</a>
            </div>

            <button className="cartbtn">Cart 🛒
                {cartcounter > 0 && <span className="cartbadge">{cartcounter}</span>}
            </button>

        </nav>
    )
}


function Hero() {
    return (
        <section id="home" className="hero">

            <div className="herotext">
                <p>PREMIUM TECHNOLOGY</p>

                <h1>
                    Technology Built
                    <br />
                    for the Future.
                </h1>

                <p>
                    Discover premium gadgets designed for
                    performance, creativity and everyday life.
                </p>

                <a href="#products" className="explorebtn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Explore Products
                </a>
            </div>

            <div className="heroimage">
                <img src={heroimage} alt="Premium Head Phones" />
            </div>

        </section>
    )
}

function Products({cartcounter , setcartcounter}) {
    const myProducts = [
        {
            id: 1,
            title: "Aura Pro Earbuds",
            price: 204,
            image: img1,
            rating: 4.8
        },
        {
            id: 2,
            title: "Apex Smart Watch",
            price: 299,
            image: img2,
            rating: 4.9
        },
        {
            id: 3,
            title: "100W GaN Charger",
            price: 45,
            image: img3,
            rating: 4.3
        },
        {
            id: 4,
            title: "ZenPods Lite",
            price: 89,
            image: img4,
            rating: 4.2
        },
        {
            id: 5,
            title: "Phantom Keyboard",
            price: 149,
            image: img5,
            rating: 4.7
        },
        {
            id: 6,
            title: "Stealth Gaming Mouse",
            price: 75,
            image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.4
        },
        {
            id: 7,
            title: "Nexan Studio Headphones",
            price: 229,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
            rating: 4.9
        },
        {
            id: 8,
            title: "Titan Power Bank",
            price: 65,
            image: img8,
            rating: 4.3
        },
        {
            id: 9,
            title: "MagCharge Pad",
            price: 35,
            image: img9,
            rating: 4.5
        },
        {
            id: 10,
            title: "Sonic Studio Headphones",
            price: 269,
            image: img10,
            rating: 4.9
        },
        {
            id: 11,
            title: "Sony Speaker Base",
            price: 95,
            image: img11,
            rating: 4.7
        }
    ];

    return (
        <section id="products" className="productssection">
            <h2 className="sectiontitle">Premium Tech Gear</h2>
            <div className="productflex">
                {myProducts.map((item) => (
                    <Productcard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}

                        cartcounter = {cartcounter}
                        setcartcounter = {setcartcounter}
                    />
                ))}
            </div>
        </section>
    );
}

function Productcard({ title, price, image, rating , cartcounter , setcartcounter}) {
    const ispremium = price > 200

    return (
        <div className="productcard">
            <img src={image} className="cardimage" alt="product" />
            <h3 className="cardtitle">{title}</h3>
            <p className={ispremium ? "premiumtext" : "normaltext"}>Price: ${price}</p>
            {ispremium && <p className="premiumtag">High-End Device</p>}
            <button className="buybtn" onClick={ () => setcartcounter(cartcounter + 1)}>
                {rating > 4.5 ? 'Buy Top Rated' : 'Add to Cart'}
            </button>
        </div>
    );
}

function Features() {
    const myFeatures = [
        {
            id: 1,
            icon: "🚚",
            title: "Express Delivery",
            desc: "Get your gear delivered right to your doorstep within 24 to 48 hours. No hidden shipping charges."
        },
        {
            id: 2,
            icon: "🛡️",
            title: "Official Warranty",
            desc: "Peace of mind guaranteed. Every product includes a 1-year brand warranty and a 7-day easy return policy."
        },
        {
            id: 3,
            icon: "🎧",
            title: "24/7 Tech Support",
            desc: "Stuck on setup or need troubleshooting? Our tech specialists are online round the clock to assist you."
        }
    ];

    return (
        <section id="features" className="featuressection">
            <h2 className="sectiontitle">Why Choose Us</h2>

            <div className="featureflex">
                {myFeatures.map((item) => (
                    <Featurecard
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>

        </section>
    );
}

function Featurecard({ icon, title, desc }) {
    return (
        <div className="featurecard">
            <div className="featureicon">{icon}</div>
            <h3 className="featuretitle">{title}</h3>
            <p className="featuredesc">{desc}</p>
        </div>
    );
}

function Reviews() {
    const myReviews = [
        { id: 1, name: "Ali Khan", text: "Best tech store! The shipping was incredibly fast and the headphones are top-notch.", rating: 5 },
        { id: 2, name: "Sarah M.", text: "Customer support was very helpful when I needed to claim my warranty. Highly recommended.", rating: 5 },
        { id: 3, name: "Usman R.", text: "Great prices for premium gear. The mechanical keyboard is totally worth it.", rating: 4 },
        { id: 4, name: "Ayesha T.", text: "Packaging was secure. The smart watch works flawlessly with my phone.", rating: 5 },
        { id: 5, name: "Bilal Ahmed", text: "Got exactly what was shown in the pictures. Delivery within 24 hours!", rating: 4 },
        { id: 6, name: "Zainab F.", text: "First time buying from here, totally satisfied with the build quality of the mouse.", rating: 5 },
        { id: 7, name: "Omar H.", text: "Smooth checkout process and amazing discounts. Will definitely buy again.", rating: 5 }
    ];

    return (
        <section id="reviews" className="reviewssection">
            <h2 className="sectiontitle">Customer Feedback</h2>

            <div className="reviewflex">
                {myReviews.map((item) => (
                    <Reviewcard
                        key={item.id}
                        name={item.name}
                        text={item.text}
                        rating={item.rating}
                    />
                ))}
            </div>

        </section>
    );
}

function Reviewcard({ name, text, rating }) {
    const stars = "⭐".repeat(rating);

    return (
        <div className="reviewcard">
            <div className="reviewstars">{stars}</div>
            <p className="reviewtext">"{text}"</p>
            <h4 className="reviewername"> {name}</h4>
        </div>
    );
}

// Footer

function Footer() {
    return (
        <footer id="contact" className="footersection">
            <div className="footercontainer">

                <div className="footerbrand">
                    <h2 className="footerlogo">NEXON</h2>
                    <p className="footerdesc">
                        Premium tech gadgets designed for performance and everyday life. Delivering excellence across Karachi, Pakistan.
                    </p>
                    <div className="socialicons">
                        <a href="https://wa.me/923089862109" target="_blank" className="sociallink">💬 WhatsApp</a>
                        <a href="https://www.linkedin.com/in/saim-noorani-64b0a637a/" target="_blank" className="sociallink">💼 LinkedIn</a>
                        <a href="https://github.com/saimnoorani1" target="_blank" className="sociallink">🐙 GitHub</a>
                    </div>
                </div>

                <div className="footerlinks">
                    <h3>Quick Links</h3>
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#features">Features</a>
                    <a href="#reviews">Reviews</a>
                </div>

                <div className="footercontact">
                    <h3>Get in Touch</h3>
                    <p>📍 Karachi, Pakistan</p>
                    <p>📧 saimnoorani2007@gmail.com</p>
                    <p>📞 +92 3089862109</p>
                </div>

            </div>

            <div className="footerbottom">
                <p>&copy; 2026 NEXON. All rights reserved.</p>
                <p className="devcredit">Developed with 💜 by Muhammad Saim</p>
            </div>
        </footer>
    );
}

export { Navbar, Hero, Products, Productcard, Features, Reviews, Footer }
