// Application State - Using JavaScript variables instead of localStorage
let appState = {
    cart: [],
    wishlist: [],
    currentScreen: 'homeScreen',
    currentProductId: null,
    currentArtisanId: null,
    selectedMaterial: 'all',
    maxPrice: 10000,
    navigationHistory: []
};

// Data
const artisans = [
    {
        id: 1,
        name: "Rajesh Kumar",
        region: "Rajasthan",
        specialty: "Pottery Artist",
        experience: "15 years",
        bio: "Master potter specializing in traditional Rajasthani pottery with intricate hand-painted designs. Each piece tells a story of heritage and craftsmanship.",
        monthlyEarnings: 45000,
        rating: 4.8,
        reviews: 124,
        products: 24,
        profileImage: "https://pplx-res.cloudinary.com/image/upload/v1761941499/pplx_project_search_images/d6c6c3b8f3f66c1facdf0a7a05a013a0a52686a4.png",
        story: "Growing up in a small village in Rajasthan, I learned pottery from my grandfather. Today, I continue this 40-year-old family tradition while blending modern aesthetics with ancient techniques.",
        skills: ["Hand-thrown pottery", "Traditional painting", "Custom orders", "Restoration"]
    },
    {
        id: 2,
        name: "Priya Sharma",
        region: "Kerala",
        specialty: "Woodcraft Artist",
        experience: "12 years",
        bio: "Creating beautiful wooden sculptures and home decor items inspired by Kerala's rich cultural heritage and natural beauty.",
        monthlyEarnings: 38000,
        rating: 4.9,
        reviews: 156,
        products: 31,
        profileImage: "https://pplx-res.cloudinary.com/image/upload/v1758524597/pplx_project_search_images/949abc8b05d795a5692e475413dd6e446c309efe.png",
        story: "Inspired by the backwaters and temples of Kerala, I craft wooden pieces that capture the essence of Southern Indian art and nature.",
        skills: ["Wood carving", "Sculpture", "Inlay work", "Finishing"]
    },
    {
        id: 3,
        name: "Arjun Singh",
        region: "Gujarat",
        specialty: "Textile Designer",
        experience: "10 years",
        bio: "Expert in traditional Gujarati embroidery and textile dyeing. Creating vibrant, sustainable fabrics with authentic regional motifs.",
        monthlyEarnings: 32000,
        rating: 4.7,
        reviews: 98,
        products: 18,
        profileImage: "https://pplx-res.cloudinary.com/image/upload/v1761941500/pplx_project_search_images/1ce6fb33b6a670aab2133d45ecdaf0990535a512.png",
        story: "The colors and patterns of Gujarat's festivals inspire my work. Every textile is dyed naturally and embroidered by hand, preserving traditional knowledge.",
        skills: ["Embroidery", "Natural dyeing", "Weaving", "Design"]
    },
    {
        id: 4,
        name: "Deepak Nair",
        region: "Tamil Nadu",
        specialty: "Brass Artisan",
        experience: "18 years",
        bio: "Craftsman in traditional Tamil Nadu brass work. Creating intricate vessels, decorative items, and temple-inspired pieces with superior quality.",
        monthlyEarnings: 52000,
        rating: 4.9,
        reviews: 203,
        products: 42,
        profileImage: "https://pplx-res.cloudinary.com/image/upload/v1758880593/pplx_project_search_images/d527606bd2a5263623e987b1b6a357b611cbb95f.png",
        story: "Brass working has been my family's legacy for generations. I use sustainable practices while creating pieces that honor our cultural heritage.",
        skills: ["Brass casting", "Engraving", "Polishing", "Restoration"]
    },
    {
        id: 5,
        name: "Maya Das",
        region: "Odisha",
        specialty: "Tribal Art Artist",
        experience: "8 years",
        bio: "Preserving tribal art traditions of Odisha through contemporary designs. Each artwork celebrates indigenous wisdom and natural materials.",
        monthlyEarnings: 28000,
        rating: 4.6,
        reviews: 87,
        products: 22,
        profileImage: "https://pplx-res.cloudinary.com/image/upload/v1755590158/pplx_project_search_images/7361531857cbf2fbc5a1c7e61d5df7f6cf778fb3.png",
        story: "Growing up surrounded by tribal traditions, I create art that honors my heritage while creating sustainable livelihoods for my community.",
        skills: ["Tribal painting", "Natural materials", "Mixed media", "Community art"]
    }
];

const products = [
    { id: 1, name: "Traditional Rajasthani Pottery Bowl", artisanId: 1, artisanName: "Rajesh Kumar", region: "Rajasthan", price: 2500, image: "https://pplx-res.cloudinary.com/image/upload/v1754838438/pplx_project_search_images/52978f19b96669346a6ff9645c326f60ec350c26.png", rating: 4.8, reviews: 45, description: "Handcrafted pottery bowl featuring traditional Rajasthani motifs. Hand-painted with natural pigments.", material: "Clay", dimensions: "12cm x 12cm" },
    { id: 2, name: "Kerala Wooden Wall Sculpture", artisanId: 2, artisanName: "Priya Sharma", region: "Kerala", price: 5800, image: "https://pplx-res.cloudinary.com/image/upload/v1754804224/pplx_project_search_images/65e649aae3d2aef33cfecb72efcec4924bedb780.png", rating: 4.9, reviews: 62, description: "Stunning wooden wall art inspired by Kerala temple architecture. Each piece is unique and hand-carved.", material: "Wood", dimensions: "30cm x 40cm" },
    { id: 3, name: "Gujarat Embroidered Wall Hanging", artisanId: 3, artisanName: "Arjun Singh", region: "Gujarat", price: 3200, image: "https://pplx-res.cloudinary.com/image/upload/v1761941533/pplx_project_search_images/ea7948c00235e2be3d575f7511420d4884f67e6b.png", rating: 4.7, reviews: 38, description: "Vibrant embroidered textile with traditional Gujarat patterns. Sustainably dyed natural fabric.", material: "Textile", dimensions: "60cm x 80cm" },
    { id: 4, name: "Tamil Nadu Brass Decorative Vessel", artisanId: 4, artisanName: "Deepak Nair", region: "Tamil Nadu", price: 4200, image: "https://pplx-res.cloudinary.com/image/upload/v1761941499/pplx_project_search_images/c290adc54596da90a6e9ecae11d1b62f4d2de9e0.png", rating: 4.9, reviews: 71, description: "Intricately engraved brass vessel with traditional Tamil Nadu designs. Perfect for home decoration.", material: "Brass", dimensions: "20cm height" },
    { id: 5, name: "Odisha Tribal Canvas Art", artisanId: 5, artisanName: "Maya Das", region: "Odisha", price: 2800, image: "https://pplx-res.cloudinary.com/image/upload/v1761941502/pplx_project_search_images/e5fa3e0091a758ec7026a107aa4ab6ea451f6f97.png", rating: 4.6, reviews: 29, description: "Authentic tribal art from Odisha featuring traditional patterns and symbolism. Natural materials used.", material: "Canvas & Natural pigments", dimensions: "50cm x 60cm" },
    { id: 6, name: "Handpainted Ceramic Tea Set", artisanId: 1, artisanName: "Rajesh Kumar", region: "Rajasthan", price: 3500, image: "https://pplx-res.cloudinary.com/image/upload/v1755238559/pplx_project_search_images/46123e06a9f301e1a95acf3315d70bfc15292f0c.png", rating: 4.8, reviews: 34, description: "Beautiful ceramic tea set with traditional patterns. Includes 6 cups and 1 teapot.", material: "Clay", dimensions: "Teapot: 15cm height" },
    { id: 7, name: "Kerala Temple Inspired Statue", artisanId: 2, artisanName: "Priya Sharma", region: "Kerala", price: 7500, image: "https://pplx-res.cloudinary.com/image/upload/v1761288051/pplx_project_search_images/c7434cfb7f5dc735ba74307b2f95c0126d67b465.png", rating: 4.9, reviews: 56, description: "Hand-carved wooden statue inspired by Kerala temple architecture. Intricate detail work.", material: "Wood", dimensions: "45cm height" },
    { id: 8, name: "Gujarat Colorful Tapestry", artisanId: 3, artisanName: "Arjun Singh", region: "Gujarat", price: 2900, image: "https://pplx-res.cloudinary.com/image/upload/v1761941533/pplx_project_search_images/da26560d8a8245710a2505056e48f8b1fd8ac20b.png", rating: 4.7, reviews: 27, description: "Beautifully embroidered tapestry with vibrant colors. Perfect for adding warmth to any room.", material: "Textile", dimensions: "100cm x 120cm" },
    { id: 9, name: "Brass Oil Lamp (Diya)", artisanId: 4, artisanName: "Deepak Nair", region: "Tamil Nadu", price: 1800, image: "https://pplx-res.cloudinary.com/image/upload/v1754732275/pplx_project_search_images/0076fe7eefb632f1d79fccbfa5edeed1cbd6c209.png", rating: 4.9, reviews: 89, description: "Traditional brass oil lamp with intricate engravings. Perfect for festivals and home decoration.", material: "Brass", dimensions: "12cm height" },
    { id: 10, name: "Tribal Art Print Series", artisanId: 5, artisanName: "Maya Das", region: "Odisha", price: 1500, image: "https://pplx-res.cloudinary.com/image/upload/v1755883760/pplx_project_search_images/f7e70aca5df4c941b864615300d052f7d01cbcd0.png", rating: 4.6, reviews: 19, description: "Set of 3 tribal art prints on eco-friendly paper. Celebrate indigenous wisdom and culture.", material: "Paper & Natural pigments", dimensions: "A4 size (3 prints)" }
];

// Helper Functions
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    return stars;
}

const regionalImages = {
    "Rajasthan": "https://pplx-res.cloudinary.com/image/upload/v1754838438/pplx_project_search_images/52978f19b96669346a6ff9645c326f60ec350c26.png",
    "Kerala": "https://pplx-res.cloudinary.com/image/upload/v1755841293/pplx_project_search_images/8d41ed4b73794a6eb024915344c3455baa1cf235.png",
    "Gujarat": "https://pplx-res.cloudinary.com/image/upload/v1755346139/pplx_project_search_images/51e7f2cdb2fee6571cc5ea34f1001df98d506816.png",
    "Tamil Nadu": "https://pplx-res.cloudinary.com/image/upload/v1758880593/pplx_project_search_images/d527606bd2a5263623e987b1b6a357b611cbb95f.png",
    "Odisha": "https://pplx-res.cloudinary.com/image/upload/v1761941500/pplx_project_search_images/e7f89263eb960c0f58aad67710e1759dde467f5e.png"
};

// Navigation
function navigateToScreen(screenId) {
    // Save current screen to history
    if (appState.currentScreen) {
        appState.navigationHistory.push(appState.currentScreen);
    }
    
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        appState.currentScreen = screenId;
        
        // Update bottom nav active state
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.screen === screenId) {
                btn.classList.add('active');
            }
        });
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function navigateBack() {
    if (appState.navigationHistory.length > 0) {
        const previousScreen = appState.navigationHistory.pop();
        navigateToScreen(previousScreen);
    } else {
        navigateToScreen('homeScreen');
    }
}

// Product Rendering
function renderProductCard(product, showWishlistBtn = true) {
    const isWishlisted = appState.wishlist.includes(product.id);
    return `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            ${showWishlistBtn ? `
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    ${isWishlisted ? '❤️' : '🤍'}
                </button>
            ` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="artisan-name">by ${product.artisanName}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <div class="product-rating">
                        <span class="stars">${generateStars(product.rating)}</span>
                        <span>(${product.reviews})</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTrendingProducts() {
    const container = document.getElementById('trendingProducts');
    const trending = products.slice(0, 6);
    container.innerHTML = trending.map(p => renderProductCard(p)).join('');
}

function filterProducts() {
    const filtered = products.filter(product => {
        const materialMatch = appState.selectedMaterial === 'all' || 
            product.material.includes(appState.selectedMaterial);
        const priceMatch = product.price <= appState.maxPrice;
        return materialMatch && priceMatch;
    });
    
    const container = document.getElementById('exploreProducts');
    const countContainer = document.getElementById('productCount');
    
    countContainer.textContent = `${filtered.length} products found`;
    container.innerHTML = filtered.map(p => renderProductCard(p)).join('');
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    appState.currentProductId = productId;
    const artisan = artisans.find(a => a.id === product.artisanId);
    const relatedProducts = products.filter(p => 
        p.region === product.region && p.id !== product.id
    ).slice(0, 3);
    
    const container = document.getElementById('productDetail');
    container.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        
        <div class="detail-section">
            <h2>${product.name}</h2>
            <div class="artisan-info">
                <div class="artisan-avatar">
                    ${artisan.profileImage ? `<img src="${artisan.profileImage}" alt="${product.artisanName}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : '👤'}
                </div>
                <div>
                    <strong>${product.artisanName}</strong><br>
                    <small>${product.region}</small>
                </div>
            </div>
            <div class="product-footer" style="margin-top: 15px;">
                <span class="product-price">${formatPrice(product.price)}</span>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span>(${product.reviews} reviews)</span>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Description</h3>
            <p>${product.description}</p>
        </div>
        
        <div class="detail-section">
            <div class="detail-row">
                <span class="detail-label">Material</span>
                <span>${product.material}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Dimensions</span>
                <span>${product.dimensions}</span>
            </div>
        </div>
        
        <div class="action-buttons">
            <button class="btn-primary" onclick="addToCart(${product.id})">
                🛒 Add to Cart
            </button>
            <button class="icon-btn" onclick="openChat(${product.artisanId})">
                💬 Message Artisan
            </button>
        </div>
        
        <button class="btn-secondary btn-full" style="margin-top: 10px;">
            📱 AR Preview
        </button>
        
        ${relatedProducts.length > 0 ? `
            <div class="detail-section">
                <h3>Related Products</h3>
                <div class="product-grid">
                    ${relatedProducts.map(p => renderProductCard(p, false)).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    navigateToScreen('productDetailScreen');
}

// Cart Functions
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'block' : 'none';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = appState.cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        appState.cart.push({
            productId: productId,
            quantity: 1,
            product: product
        });
    }
    
    updateCartBadge();
    alert(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.productId !== productId);
    updateCartBadge();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = appState.cart.find(item => item.productId === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartBadge();
        renderCart();
    }
}

function renderCart() {
    const container = document.getElementById('cartContent');
    
    if (appState.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some beautiful handicrafts to your cart</p>
                <button class="btn-primary" onclick="navigateToScreen('exploreScreen')">Explore Products</button>
            </div>
        `;
        return;
    }
    
    const subtotal = appState.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const shipping = 100;
    const total = subtotal + tax + shipping;
    
    container.innerHTML = `
        <div class="cart-items">
            ${appState.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.product.image}" alt="${item.product.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.product.name}</h4>
                        <p class="cart-item-artisan">by ${item.product.artisanName}</p>
                        <div class="cart-item-footer">
                            <div class="quantity-controls">
                                <button class="qty-btn" onclick="updateQuantity(${item.productId}, -1)">−</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity(${item.productId}, 1)">+</button>
                            </div>
                            <span class="product-price">${formatPrice(item.product.price * item.quantity)}</span>
                            <button class="remove-btn" onclick="removeFromCart(${item.productId})">🗑️</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Tax (GST 18%)</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${formatPrice(shipping)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>${formatPrice(total)}</span>
            </div>
            <button class="btn-primary btn-full" onclick="proceedToCheckout()">Proceed to Checkout</button>
            <button class="btn-secondary btn-full" onclick="navigateToScreen('exploreScreen')">Continue Shopping</button>
        </div>
    `;
}

function proceedToCheckout() {
    renderCheckout();
    navigateToScreen('checkoutScreen');
}

function renderCheckout() {
    const container = document.getElementById('checkoutSummary');
    const subtotal = appState.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const shipping = 100;
    const total = subtotal + tax + shipping;
    
    container.innerHTML = `
        <h3>Order Summary</h3>
        ${appState.cart.map(item => `
            <div class="summary-row">
                <span>${item.product.name} (x${item.quantity})</span>
                <span>${formatPrice(item.product.price * item.quantity)}</span>
            </div>
        `).join('')}
        <div class="summary-row total">
            <span>Total Amount</span>
            <span>${formatPrice(total)}</span>
        </div>
    `;
}

// Wishlist
function toggleWishlist(productId) {
    const index = appState.wishlist.indexOf(productId);
    if (index > -1) {
        appState.wishlist.splice(index, 1);
    } else {
        appState.wishlist.push(productId);
    }
    
    // Re-render current screen
    if (appState.currentScreen === 'homeScreen') {
        renderTrendingProducts();
    } else if (appState.currentScreen === 'exploreScreen') {
        filterProducts();
    }
}

function showWishlist() {
    const wishlistedProducts = products.filter(p => appState.wishlist.includes(p.id));
    const container = document.getElementById('exploreProducts');
    const countContainer = document.getElementById('productCount');
    
    countContainer.textContent = `${wishlistedProducts.length} saved items`;
    container.innerHTML = wishlistedProducts.length > 0 
        ? wishlistedProducts.map(p => renderProductCard(p)).join('')
        : '<div class="empty-cart"><h3>No saved items</h3><p>Save your favorite items to view them here</p></div>';
    
    navigateToScreen('exploreScreen');
}

// Artisans
function renderArtisans() {
    const container = document.getElementById('artisansList');
    container.innerHTML = artisans.map(artisan => `
        <div class="artisan-card" onclick="showArtisanDetail(${artisan.id})">
            <div class="artisan-header">
                <div class="artisan-profile-pic">
                    ${artisan.profileImage ? `<img src="${artisan.profileImage}" alt="${artisan.name}">` : '👤'}
                </div>
                <div class="artisan-header-info">
                    <h3>${artisan.name}</h3>
                    <p class="artisan-region">${artisan.region}</p>
                    <p class="artisan-specialty">${artisan.specialty} • ${artisan.experience}</p>
                </div>
            </div>
            <p>${artisan.bio}</p>
            <div class="artisan-stats">
                <div class="stat-item">
                    <div class="stat-value">${artisan.products}</div>
                    <div class="stat-label">Products</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${artisan.reviews}</div>
                    <div class="stat-label">Reviews</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${formatPrice(artisan.monthlyEarnings)}</div>
                    <div class="stat-label">This Month</div>
                </div>
            </div>
            <div class="product-rating" style="justify-content: center; margin: 10px 0;">
                <span class="stars">${generateStars(artisan.rating)}</span>
                <span>(${artisan.rating})</span>
            </div>
            <div class="artisan-actions">
                <button class="btn-primary" style="flex: 1;" onclick="event.stopPropagation(); showArtisanDetail(${artisan.id})">View Profile</button>
                <button class="icon-btn" onclick="event.stopPropagation(); openChat(${artisan.id})">💬</button>
            </div>
        </div>
    `).join('');
}

function showArtisanDetail(artisanId) {
    const artisan = artisans.find(a => a.id === artisanId);
    if (!artisan) return;
    
    appState.currentArtisanId = artisanId;
    const artisanProducts = products.filter(p => p.artisanId === artisanId);
    
    // Generate earnings data for chart
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const earningsData = months.map(() => Math.floor(Math.random() * 60000) + 20000);
    const maxEarnings = Math.max(...earningsData);
    
    const container = document.getElementById('artisanDetail');
    container.innerHTML = `
        <div class="artisan-profile-section">
            <div class="artisan-profile-large">
                ${artisan.profileImage ? `<img src="${artisan.profileImage}" alt="${artisan.name}">` : '👤'}
            </div>
            <h2>${artisan.name}</h2>
            <p>${artisan.region} • ${artisan.specialty}</p>
            <p style="color: #666; margin-top: 10px;">${artisan.experience} experience</p>
            <div class="product-rating" style="justify-content: center; margin: 15px 0;">
                <span class="stars">${generateStars(artisan.rating)}</span>
                <span>(${artisan.reviews} reviews)</span>
            </div>
        </div>
        
        <div class="story-section">
            <h3>Meet the Artisan</h3>
            <p>${artisan.story}</p>
        </div>
        
        <div class="skills-section">
            <h3>Skills & Specializations</h3>
            <div class="skills-list">
                ${artisan.skills.map(skill => `<span class="skill-tag">✓ ${skill}</span>`).join('')}
            </div>
        </div>
        
        <div class="earnings-section">
            <h3>Earnings Transparency</h3>
            <p>Supporting artisans directly. Current monthly earnings: <strong>${formatPrice(artisan.monthlyEarnings)}</strong></p>
            <div class="earnings-chart">
                <div class="chart-bars">
                    ${months.map((month, i) => `
                        <div class="chart-bar" style="height: ${(earningsData[i] / maxEarnings) * 100}%;">
                            <div class="chart-bar-label">${month}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="portfolio-section">
            <h3>Product Portfolio</h3>
            <div class="product-grid">
                ${artisanProducts.map(p => renderProductCard(p, false)).join('')}
            </div>
        </div>
        
        <div class="reviews-section">
            <h3>Customer Reviews</h3>
            <div class="review-item">
                <div class="review-header">
                    <span class="reviewer-name">Amit Patel</span>
                    <span class="stars">${generateStars(5)}</span>
                </div>
                <p class="review-text">Absolutely stunning craftsmanship! The attention to detail is incredible. Highly recommend!</p>
            </div>
            <div class="review-item">
                <div class="review-header">
                    <span class="reviewer-name">Priya Menon</span>
                    <span class="stars">${generateStars(4.5)}</span>
                </div>
                <p class="review-text">Beautiful work and excellent communication. Will definitely order again.</p>
            </div>
        </div>
        
        <button class="btn-primary btn-full" onclick="showCustomOrderModal()">📝 Request Custom Order</button>
        <button class="btn-secondary btn-full" onclick="openChat(${artisan.id})">💬 Chat with Artisan</button>
    `;
    
    navigateToScreen('artisanDetailScreen');
}

// Custom Order Modal
function showCustomOrderModal() {
    const modal = document.getElementById('customOrderModal');
    modal.classList.add('active');
}

function closeCustomOrderModal() {
    const modal = document.getElementById('customOrderModal');
    modal.classList.remove('active');
}

function submitCustomOrder() {
    alert('Custom order submitted! The artisan will contact you shortly.');
    closeCustomOrderModal();
}

// Chat
function openChat(artisanId) {
    const artisan = artisans.find(a => a.id === artisanId);
    if (!artisan) return;
    
    const headerContainer = document.getElementById('chatHeader');
    headerContainer.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
            <div class="artisan-avatar">
                ${artisan.profileImage ? `<img src="${artisan.profileImage}" alt="${artisan.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : '👤'}
            </div>
            <div>
                <h3 style="margin: 0;">${artisan.name}</h3>
                <p style="margin: 0; color: #666; font-size: 13px;">${artisan.specialty}</p>
            </div>
        </div>
    `;
    
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML = `
        <div class="message received">
            <div class="message-bubble">Hello! Thank you for your interest in my work. How can I help you today?</div>
            <div class="message-time">10:30 AM</div>
        </div>
        <div class="message sent">
            <div class="message-bubble">Hi! I'm interested in a custom pottery set. Can you create something with traditional Rajasthani designs?</div>
            <div class="message-time">10:32 AM</div>
        </div>
        <div class="message received">
            <div class="message-bubble">Absolutely! I'd be happy to create a custom set for you. What size and colors are you looking for?</div>
            <div class="message-time">10:33 AM</div>
        </div>
        <div class="message sent">
            <div class="message-bubble">A dinner set for 6 people, with earth tones and traditional motifs.</div>
            <div class="message-time">10:35 AM</div>
        </div>
        <div class="message received">
            <div class="message-bubble">Perfect! I can create that for you. It will take about 3-4 weeks. The estimated cost would be around ₹12,000-₹15,000. Would you like to proceed?</div>
            <div class="message-time">10:37 AM</div>
        </div>
    `;
    
    navigateToScreen('chatScreen');
}

function showOrders() {
    alert('Order history feature - showing your past orders');
}

function showChatHistory() {
    alert('Chat history feature - showing all your conversations');
}

// Search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) return;
        
        const results = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.artisanName.toLowerCase().includes(query) ||
            p.region.toLowerCase().includes(query)
        );
        
        const container = document.getElementById('exploreProducts');
        const countContainer = document.getElementById('productCount');
        
        countContainer.textContent = `${results.length} results for "${query}"`;
        container.innerHTML = results.map(p => renderProductCard(p)).join('');
        
        navigateToScreen('exploreScreen');
    });
}

// Filters
function setupFilters() {
    // Material filters
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            appState.selectedMaterial = e.target.dataset.material;
            filterProducts();
        });
    });
    
    // Price filter
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    priceRange.addEventListener('input', (e) => {
        appState.maxPrice = parseInt(e.target.value);
        priceValue.textContent = `₹0 - ${formatPrice(appState.maxPrice)}`;
        filterProducts();
    });
}

// Region filters
function setupRegionCards() {
    document.querySelectorAll('.region-card').forEach(card => {
        const region = card.dataset.region;
        const patternDiv = card.querySelector('.region-pattern');
        if (patternDiv && regionalImages[region]) {
            patternDiv.style.backgroundImage = `url('${regionalImages[region]}')`;
        }
        
        card.addEventListener('click', (e) => {
            const region = e.currentTarget.dataset.region;
            const filtered = products.filter(p => p.region === region);
            
            const container = document.getElementById('exploreProducts');
            const countContainer = document.getElementById('productCount');
            
            countContainer.textContent = `${filtered.length} products from ${region}`;
            container.innerHTML = filtered.map(p => renderProductCard(p)).join('');
            
            navigateToScreen('exploreScreen');
        });
    });
}

// Bottom Navigation
function setupBottomNav() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const screenId = btn.dataset.screen;
            
            if (screenId === 'cartScreen') {
                renderCart();
            } else if (screenId === 'artisansScreen') {
                renderArtisans();
            } else if (screenId === 'exploreScreen') {
                filterProducts();
            }
            
            navigateToScreen(screenId);
        });
    });
}

// Initialize App
function initializeApp() {
    renderTrendingProducts();
    renderArtisans();
    filterProducts();
    setupBottomNav();
    setupSearch();
    setupFilters();
    setupRegionCards();
    updateCartBadge();
    
    // Set default filter
    document.querySelector('.filter-chip[data-material="all"]').classList.add('active');
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}