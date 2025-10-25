// Cruise data
const cruises = [
    {
    id: 1,
    title: "رحلة فينيسيا الإيطالية",
    duration: "11 ليلة",
    ship: "Norwegian Viva",
    route: "فينيسيا (ترييستي) - زادار - فينيسيا (رافينا) - دوبروفنيك - كوتور - كورفو - فاليتا - ميسينا - نابولي (بومبي) - ليفورنو (فلورنسا/بيزا) - كان - تشيفيتافيكيا (روما)",
    departure: "فينيسيا (ترييستي)، إيطاليا",
    arrival: "روما (تشيفيتافيكيا)، إيطاليا",
    image: "https://contents.odysol.com//content/Images/Destination/9/Gallery/Virgin_Island.jpg",
    highlights: [
        "دوبروفنيك القديمة",
        "فاليتا، مالطا",
        " نابولي وبومبي",
        "روما ومعالمها التاريخية"
    ],
}
,
    {
    id: 2,
    title: "رحلة ميامي الرائعة ",
    duration: "15 ليلة",
    ship: "Norwegian Viva",
    route: "ميامي، فلوريدا - بونتا ديلجادا، البرتغال - لشبونة، البرتغال - بالما دي مايوركا، إسبانيا - ليفورنو (فلورنسا/بيزا)، إيطاليا - نيس/موناكو (فيلفرانش)، فرنسا - برشلونة، إسبانيا",
    departure: "ميامي، فلوريدا",
    arrival: "برشلونة، إسبانيا",
    image: "https://contents.odysol.com//content/images/cruise/6/15159/ship_520.jpg",
    highlights: [
        "ميامي الساحرة",
        "لشبونة التاريخية",
        "شواطئ بالما دي مايوركا",
        "فلورنسا وبرج بيزا",
        "موناكو ونيس الفرنسية",
        "برشلونة الحيوية"
    ],
}
,
    {
    id: 3,
    title: "رحلة سان خوان الكاريبية",
    duration: "7 ليالٍ",
    ship: "نرويجيان إبيك",
    route: "سان خوان، بورتو ريكو",
    departure: "سان خوان",
    arrival: "جزر الكاريبي",
    image: "https://contents.odysol.com//content/Images/Cruise/6/13236/Gallery/Great_Outdoors.jpg",
    highlights: [
        "المدينة القديمة في سان خوان",
        "شواطئ أروبا",
        "مباني كوراساو الملونة",
        "قمة بيتونز في سانت لوسيا",
        "شاطئ سانت كيتس الذهبي"
    ],
},
    {
    id: 4,
    title: "رحلة بونتا كانا الكاريبية",
    duration: "7 ليالٍ",
    ship: "نرويجيان سكاي",
    route: "بونتا كانا (لا رومانا)، جمهورية الدومينيكان",
    departure: "بونتا كانا",
    arrival: "جزر الكاريبي",
    image: "https://contents.odysol.com//content/Images/Destination/9/Gallery/Caribbean_islands.jpg",
    highlights: [
        "شواطئ بونتا كانا",
        "جزيرة أروبا",
        "مباني كوراساو الملونة",
        "جزيرة بونير (كرالينديك)",
        "قمة بيتونز في سانت لوسيا",
        "شاطئ سانت كيتس",
        "جزيرة تورتولا"
    ],
},

];

// Function to create cruise card HTML
function createCruiseCard(cruise, index) {
    const highlightsHTML = cruise.highlights
        .map((highlight) => `<span class="highlight-tag">${highlight}</span>`)
        .join("");

    return `
                <div class="card fade-in" style="animation-delay: ${
                    index * 0.1
                }s">
                    <!-- Image -->
                    <div class="image-container">
                        <img src="${cruise.image}" alt="رحلة ${
        cruise.title
    }" loading="lazy">
                        
                        
                    </div>

                    <!-- Content -->
                    <div class="card-content">
                        <h3 class="card-title">${cruise.title}</h3>
                        
                        <div class="space-y-2 mb-4">
                            <div class="info-item">
                                <i class="fas fa-clock"></i>
                                <span class="text-sm">${cruise.duration}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span class="text-sm">${cruise.route}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-ship"></i>
                                <span class="text-sm">${cruise.ship}</span>
                            </div>
                        </div>

                        <!-- Highlights -->
                        <div class="highlights-container">
                            <h4 class="highlights-title">أبرز المعالم:</h4>
                            <div class="highlights-tags">
                                ${highlightsHTML}
                            </div>
                        </div>
                        <a href="https://book.mycruiseksa.com/swift/cruise?siid=1299887&lang=13&cruiseline=6&transportid=29&ship=15159&sortColumn=cruiselinePriority&sortOrder=asc">
                        
                        <button class="btn-primary" >
                            عرض التفاصيل
                        </button>
                        </a>
                    </div>
                </div>
            `;
}

// Function to render all cruise cards
function renderCruises() {
    const container = document.getElementById("cruises-container");
    const cruiseCards = cruises
        .map((cruise, index) => createCruiseCard(cruise, index))
        .join("");

    container.innerHTML = cruiseCards;
}

// Function to handle details button click
function showDetails(cruiseId) {
    const cruise = cruises.find((c) => c.id === cruiseId);
    if (cruise) {
        alert(
            `تفاصيل الرحلة: ${cruise.title}\nالمدة: ${cruise.duration}\nالسعر: ${cruise.price} ريال`
        );
        // You can replace this with actual modal or navigation logic
    }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    renderCruises();

    // Add scroll animation observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach((el) => {
            observer.observe(el);
        });
    }, 100);
});
