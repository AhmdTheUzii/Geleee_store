// Data produk knalpot dengan testimoni
const products = [
    {
        id: 1,
        name: "Knalpot Racing R9",
        price: 850000,
        image: "images/Knalpot-Racing-R9.jpg",
        testimonials: [
            {
                id: 1,
                rating: 5,
                comment: "Suara mantap, performa naik! Motor jadi lebih responsif dan suara knalpotnya enak banget. Pemasangan mudah, kualitas material terasa premium. Worth it banget untuk upgrade motor!",
                author: "Budi Santoso",
                authorAvatar: "https://dummyimage.com/40x40/4CAF50/fff&text=BS",
                date: "2024-12-15",
                purchaseDate: "2024-12-10",
                verified: true,
                productVariant: "Stainless Steel",
                helpful: 12
            },
            {
                id: 2,
                rating: 4,
                comment: "Bagus, tapi pemasangan agak sulit. Suara knalpotnya sesuai ekspektasi, tapi perlu bantuan mekanik untuk pemasangan yang tepat. Overall puas dengan hasilnya.",
                author: "Ahmad Rizki",
                authorAvatar: "https://dummyimage.com/40x40/2196F3/fff&text=AR",
                date: "2024-12-10",
                purchaseDate: "2024-12-05",
                verified: true,
                productVariant: "Stainless Steel",
                helpful: 8
            },
            {
                id: 3,
                rating: 5,
                comment: "Rekomendasi buat motor harian! Sudah 2 bulan pakai, performa tetap konsisten. Suara tidak terlalu bising tapi tetap sporty. Bahan awet, tidak mudah karat.",
                author: "Dewi Sartika",
                authorAvatar: "https://dummyimage.com/40x40/FF9800/fff&text=DS",
                date: "2024-12-08",
                purchaseDate: "2024-12-01",
                verified: true,
                productVariant: "Stainless Steel",
                helpful: 15
            },
            {
                id: 4,
                rating: 5,
                comment: "Kualitas luar biasa! Suara yang dihasilkan sangat memuaskan, tidak terlalu bising tapi tetap terasa power. Motor jadi lebih responsif dan hemat BBM.",
                author: "Rudi Hartono",
                authorAvatar: "https://dummyimage.com/40x40/FF5722/fff&text=RH",
                date: "2024-12-05",
                purchaseDate: "2024-11-30",
                verified: true,
                productVariant: "Stainless Steel",
                helpful: 9
            },
            {
                id: 5,
                rating: 4,
                comment: "Desain keren, suara enak. Cocok untuk motor harian, tidak mengganggu tetangga tapi tetap terlihat sporty. Pemasangan mudah dengan panduan yang jelas.",
                author: "Sari Indah",
                authorAvatar: "https://dummyimage.com/40x40/9C27B0/fff&text=SI",
                date: "2024-12-03",
                purchaseDate: "2024-11-28",
                verified: true,
                productVariant: "Stainless Steel",
                helpful: 7
            }
        ]
    },
    {
        id: 2,
        name: "Knalpot Akrapovic Carbon",
        price: 1200000,
        image: "images/Knalpot-Akrapovic-Carbon.jpeg",
        testimonials: [
            {
                id: 11,
                rating: 5,
                comment: "Knalpot premium, suara ngebass! Kualitas Akrapovic memang tidak diragukan lagi. Carbon fiber ringan tapi kuat, suara yang dihasilkan sangat memuaskan. Motor jadi terlihat lebih premium!",
                author: "Rendi Pratama",
                authorAvatar: "https://dummyimage.com/40x40/9C27B0/fff&text=RP",
                date: "2024-12-12",
                purchaseDate: "2024-12-08",
                verified: true,
                productVariant: "Carbon Fiber",
                helpful: 23
            },
            {
                id: 12,
                rating: 4,
                comment: "Kualitas oke, harga lumayan. Suara bagus, pemasangan mudah. Tapi harganya memang mahal untuk ukuran kantong saya. Tapi worth it untuk kualitas premium.",
                author: "Siti Nurhaliza",
                authorAvatar: "https://dummyimage.com/40x40/E91E63/fff&text=SN",
                date: "2024-12-05",
                purchaseDate: "2024-11-30",
                verified: true,
                productVariant: "Carbon Fiber",
                helpful: 11
            },
            {
                id: 13,
                rating: 3,
                comment: "Kurang cocok untuk motor saya. Suara terlalu bising untuk motor harian. Mungkin lebih cocok untuk motor sport atau balapan. Kualitas bagus tapi tidak sesuai kebutuhan.",
                author: "Joko Widodo",
                authorAvatar: "https://dummyimage.com/40x40/607D8B/fff&text=JW",
                date: "2024-11-28",
                purchaseDate: "2024-11-25",
                verified: true,
                productVariant: "Carbon Fiber",
                helpful: 7
            },
            {
                id: 14,
                rating: 5,
                comment: "Premium quality! Akrapovic memang tidak pernah mengecewakan. Carbon fiber ringan, suara yang dihasilkan sangat memuaskan. Motor jadi terlihat sangat eksklusif.",
                author: "Agus Setiawan",
                authorAvatar: "https://dummyimage.com/40x40/795548/fff&text=AS",
                date: "2024-11-25",
                purchaseDate: "2024-11-20",
                verified: true,
                productVariant: "Carbon Fiber",
                helpful: 19
            },
            {
                id: 15,
                rating: 5,
                comment: "Worth every penny! Kualitas Akrapovic memang luar biasa. Suara yang dihasilkan sangat enak, performa motor meningkat signifikan. Best investment!",
                author: "Linda Permata",
                authorAvatar: "https://dummyimage.com/40x40/8BC34A/fff&text=LP",
                date: "2024-11-22",
                purchaseDate: "2024-11-18",
                verified: true,
                productVariant: "Carbon Fiber",
                helpful: 16
            }
        ]
    },
    {
        id: 3,
        name: "Knalpot Yoshimura",
        price: 950000,
        image: "images/Knalpot-Yoshimura.jpeg",
        testimonials: [
            {
                id: 21,
                rating: 4,
                comment: "Suara enak, desain keren. Yoshimura memang terkenal dengan kualitasnya. Suara yang dihasilkan tidak terlalu bising tapi tetap sporty. Cocok untuk motor sport.",
                author: "Maya Indira",
                authorAvatar: "https://dummyimage.com/40x40/00BCD4/fff&text=MI",
                date: "2024-12-14",
                purchaseDate: "2024-12-10",
                verified: true,
                productVariant: "Titanium",
                helpful: 18
            },
            {
                id: 22,
                rating: 5,
                comment: "Top banget buat balap! Sudah dipakai di beberapa event balapan, performa luar biasa. Suara yang dihasilkan sangat memuaskan, respon gas lebih responsif.",
                author: "Agus Setiawan",
                authorAvatar: "https://dummyimage.com/40x40/795548/fff&text=AS",
                date: "2024-12-07",
                purchaseDate: "2024-12-03",
                verified: true,
                productVariant: "Titanium",
                helpful: 31
            },
            {
                id: 23,
                rating: 5,
                comment: "Bikin motor makin ganteng. Desain Yoshimura memang unik dan menarik. Suara yang dihasilkan juga enak, tidak mengganggu tapi tetap terlihat keren.",
                author: "Linda Permata",
                authorAvatar: "https://dummyimage.com/40x40/8BC34A/fff&text=LP",
                date: "2024-12-03",
                purchaseDate: "2024-11-28",
                verified: true,
                productVariant: "Titanium",
                helpful: 14
            },
            {
                id: 24,
                rating: 4,
                comment: "Kualitas Yoshimura memang tidak diragukan. Suara yang dihasilkan sangat enak, performa motor meningkat signifikan. Cocok untuk motor sport.",
                author: "Budi Santoso",
                authorAvatar: "https://dummyimage.com/40x40/4CAF50/fff&text=BS",
                date: "2024-11-30",
                purchaseDate: "2024-11-25",
                verified: true,
                productVariant: "Titanium",
                helpful: 12
            },
            {
                id: 25,
                rating: 5,
                comment: "Excellent product! Yoshimura memang brand terbaik untuk racing. Suara yang dihasilkan sangat memuaskan, motor jadi lebih bertenaga.",
                author: "Ahmad Rizki",
                authorAvatar: "https://dummyimage.com/40x40/2196F3/fff&text=AR",
                date: "2024-11-27",
                purchaseDate: "2024-11-22",
                verified: true,
                productVariant: "Titanium",
                helpful: 16
            }
        ]
    },
    {
        id: 4,
        name: "Knalpot Proliner SS",
        price: 780000,
        image: "images/Knalpot-Proliner-SS.jpg",
        testimonials: [
            {
                id: 31,
                rating: 3,
                comment: "Lumayan, suara agak cempreng. Untuk harga segini memang sudah oke, tapi suara yang dihasilkan kurang enak di telinga. Mungkin perlu adjustment lagi.",
                author: "Bambang Sutejo",
                authorAvatar: "https://dummyimage.com/40x40/FF5722/fff&text=BS",
                date: "2024-12-11",
                purchaseDate: "2024-12-07",
                verified: true,
                productVariant: "Stainless Steel 201",
                helpful: 5
            },
            {
                id: 32,
                rating: 4,
                comment: "Harga terjangkau, kualitas oke. Untuk budget terbatas, produk ini bisa jadi pilihan. Suara tidak terlalu bising, cocok untuk motor harian.",
                author: "Nina Kartika",
                authorAvatar: "https://dummyimage.com/40x40/3F51B5/fff&text=NK",
                date: "2024-12-06",
                purchaseDate: "2024-12-02",
                verified: true,
                productVariant: "Stainless Steel 201",
                helpful: 9
            },
            {
                id: 33,
                rating: 2,
                comment: "Kurang puas sama finishingnya. Ada beberapa bagian yang kurang rapi, mungkin QC perlu diperbaiki. Suara oke tapi finishing kurang memuaskan.",
                author: "Doni Kusuma",
                authorAvatar: "https://dummyimage.com/40x40/009688/fff&text=DK",
                date: "2024-11-30",
                purchaseDate: "2024-11-25",
                verified: true,
                productVariant: "Stainless Steel 201",
                helpful: 3
            },
            {
                id: 34,
                rating: 4,
                comment: "Bagus untuk budget terbatas. Suara tidak terlalu bising, cocok untuk motor harian. Kualitas material cukup baik untuk harga segini.",
                author: "Sari Indah",
                authorAvatar: "https://dummyimage.com/40x40/9C27B0/fff&text=SI",
                date: "2024-11-28",
                purchaseDate: "2024-11-23",
                verified: true,
                productVariant: "Stainless Steel 201",
                helpful: 7
            },
            {
                id: 35,
                rating: 3,
                comment: "Lumayan untuk harga terjangkau. Suara agak cempreng tapi masih bisa diterima. Pemasangan mudah dan kualitas material cukup baik.",
                author: "Eko Prasetyo",
                authorAvatar: "https://dummyimage.com/40x40/607D8B/fff&text=EP",
                date: "2024-11-25",
                purchaseDate: "2024-11-20",
                verified: true,
                productVariant: "Stainless Steel 201",
                helpful: 4
            }
        ]
    }
];

const cart = [];
let currentFilter = 0; // 0 = semua produk, 1-5 = filter berdasarkan rating
let currentSearch = ''; // Untuk menyimpan kata kunci pencarian
let currentSort = 'name-asc'; // Untuk menyimpan pengaturan sorting

// Load cart dari localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('geleeeCart');
    if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        cart.length = 0; // Clear array
        cart.push(...parsedCart); // Add items back
    }
}

// Save cart ke localStorage
function saveCartToStorage() {
    localStorage.setItem('geleeeCart', JSON.stringify(cart));
}

// Fungsi untuk menghitung rating rata-rata
function getAverageRating(testimonials) {
    if (testimonials.length === 0) return 0;
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return Math.round(total / testimonials.length);
}

// Fungsi untuk memfilter produk berdasarkan rating
function filterProductsByRating(rating) {
    currentFilter = rating;
    renderProducts();
    updateStarFilter();
}

// Fungsi untuk mencari produk
function searchProducts() {
    currentSearch = document.getElementById('search-input').value.toLowerCase().trim();
    renderProducts();
}

function clearSearch() {
    document.getElementById('search-input').value = '';
    currentSearch = '';
    renderProducts();
}

// Fungsi untuk memperbarui tampilan star filter
function updateStarFilter() {
    const starFilter = document.getElementById('star-filter');
    starFilter.innerHTML = '';
    
    // Tombol "Semua"
    const allBtn = document.createElement('button');
    allBtn.className = `star-filter-btn ${currentFilter === 0 ? 'active' : ''}`;
    allBtn.textContent = 'Semua';
    allBtn.setAttribute('data-rating', '0');
    starFilter.appendChild(allBtn);
    
    // Tombol rating 1-5
    for (let i = 1; i <= 5; i++) {
        const btn = document.createElement('button');
        btn.className = `star-filter-btn ${currentFilter === i ? 'active' : ''}`;
        btn.innerHTML = '★'.repeat(i);
        btn.setAttribute('data-rating', i);
        starFilter.appendChild(btn);
    }
}

function renderStar(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span style="color:${i <= rating ? '#FFD700' : '#ccc'};font-size:1.1em">★</span>`;
    }
    return html;
}

// Fungsi untuk sorting produk
function sortProducts(productsToSort) {
    const sortType = document.getElementById('sort-select').value;
    
    return productsToSort.sort((a, b) => {
        switch (sortType) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'rating-desc':
                const ratingA = getAverageRating(a.testimonials);
                const ratingB = getAverageRating(b.testimonials);
                return ratingB - ratingA;
            default:
                return 0;
        }
    });
}

function renderProducts() {
    const productsEl = document.getElementById('products');
    productsEl.innerHTML = '';
    
    // Filter produk berdasarkan rating dan pencarian
    let filteredProducts = products;
    
    // Filter berdasarkan rating
    if (currentFilter > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const avgRating = getAverageRating(product.testimonials);
            return avgRating >= currentFilter;
        });
    }
    
    // Filter berdasarkan pencarian
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentSearch)
        );
    }
    
    // Sort produk
    filteredProducts = sortProducts(filteredProducts);
    
    // Tampilkan pesan jika tidak ada produk yang sesuai filter
    if (filteredProducts.length === 0) {
        let emptyStateHtml = '';
        
        if (currentSearch && currentFilter > 0) {
            emptyStateHtml = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div class="empty-state-title">Tidak Ada Hasil</div>
                    <div class="empty-state-message">Tidak ditemukan produk dengan nama "${currentSearch}" dan rating ${currentFilter} bintang atau lebih tinggi.</div>
                    <button class="empty-state-action" onclick="clearSearch()">Lihat Semua Produk</button>
                </div>
            `;
        } else if (currentSearch) {
            emptyStateHtml = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div class="empty-state-title">Tidak Ada Hasil</div>
                    <div class="empty-state-message">Tidak ditemukan produk dengan nama "${currentSearch}".</div>
                    <button class="empty-state-action" onclick="clearSearch()">Lihat Semua Produk</button>
                </div>
            `;
        } else if (currentFilter > 0) {
            emptyStateHtml = `
                <div class="empty-state">
                    <div class="empty-state-icon">⭐</div>
                    <div class="empty-state-title">Tidak Ada Hasil</div>
                    <div class="empty-state-message">Tidak ada produk dengan rating ${currentFilter} bintang atau lebih tinggi.</div>
                    <button class="empty-state-action" onclick="filterProductsByRating(0)">Lihat Semua Produk</button>
                </div>
            `;
        } else {
            emptyStateHtml = `
                <div class="empty-state">
                    <div class="empty-state-icon">📦</div>
                    <div class="empty-state-title">Tidak Ada Produk</div>
                    <div class="empty-state-message">Belum ada produk yang tersedia.</div>
                </div>
            `;
        }
        
        productsEl.innerHTML = emptyStateHtml;
        return;
    }
    
    filteredProducts.forEach(product => {
        const avgRating = getAverageRating(product.testimonials);
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img" data-id="${product.id}" onerror="this.src='https://dummyimage.com/120x120/6c63ff/fff&text=IMG'">
            <h3 class="product-title" data-id="${product.id}">${product.name}</h3>
            <p>Rp${product.price.toLocaleString()}</p>
            <div class="avg-rating">
                ${renderStar(avgRating)} <span style="font-size:0.9em;color:#666;">(${avgRating}/5)</span>
            </div>
            <div class="product-buttons">
                <button onclick="viewProductDetail(${product.id})" class="view-detail-btn">Lihat Detail</button>
                <button onclick="addToCart(${product.id})" class="add-cart-btn">Tambah ke Cart</button>
            </div>
        `;
        // Event klik pada gambar dan judul untuk buka modal testimoni
        div.querySelector('.product-img').onclick = () => showTestimoniModal(product.id);
        div.querySelector('.product-title').onclick = () => showTestimoniModal(product.id);
        productsEl.appendChild(div);
    });
}

function showTestimoniModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Produk tidak ditemukan!');
        return;
    }
    
    // Trap focus dalam modal untuk accessibility
    const modalElement = document.getElementById('testimoni-modal');
    const focusableElements = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    let testimonialsHtml = '';
    product.testimonials.forEach(testimonial => {
        const stars = renderStar(testimonial.rating);
        const verifiedBadge = testimonial.verified ? '<span class="verified-badge">✓</span>' : '';
        
        testimonialsHtml += `
            <div class="modal-testimonial-item">
                <div class="modal-testimonial-header">
                    <div class="modal-user-info">
                        <img src="${testimonial.authorAvatar}" alt="${testimonial.author}" class="modal-user-avatar">
                        <div>
                            <div class="modal-user-name">
                                ${testimonial.author} ${verifiedBadge}
                            </div>
                            <div class="modal-purchase-date">Dibeli pada ${formatDate(testimonial.purchaseDate)}</div>
                        </div>
                    </div>
                    <div class="modal-rating">${stars}</div>
                </div>
                <div class="modal-testimonial-content">
                    <div class="modal-comment">${testimonial.comment}</div>
                    <div class="modal-variant">Varian: ${testimonial.productVariant}</div>
                    <div class="modal-helpful">👍 Bermanfaat (${testimonial.helpful})</div>
                </div>
            </div>
        `;
    });
    
    let html = `<div class='modal-content testimonial-modal'>
        <h2>Testimoni untuk ${product.name}</h2>
        <div class="modal-testimonials-list">
            ${testimonialsHtml}
        </div>
        <button id='close-modal-btn' style='margin-top:1em;padding:0.5em 1.2em;border-radius:20px;background:#6c63ff;color:#fff;border:none;cursor:pointer;'>Tutup</button>
    </div>`;
    
    modalElement.innerHTML = html;
    modalElement.classList.remove('hidden');
    document.getElementById('close-modal-btn').onclick = function() {
        modalElement.classList.add('hidden');
    };
}

// Fungsi untuk format tanggal
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Update addToCart function to show notification
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        });
    }
    
    updateCart();
    saveCartToStorage();
    showNotification(`${product.name} ditambahkan ke keranjang!`);
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        const removedItem = cart[index];
        cart.splice(index, 1);
        updateCart();
        saveCartToStorage();
        showNotification(`${removedItem.name} dihapus dari keranjang`, 'info');
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;
    
    // Clear cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        // Show empty state
        cartItems.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <div class="empty-state-title">Keranjang Kosong</div>
                <div class="empty-state-message">Belum ada produk di keranjang belanja Anda</div>
            </div>
        `;
        cartTotal.textContent = 'Rp0';
        document.getElementById('checkout-btn').style.display = 'none';
        document.getElementById('start-shopping-btn').style.display = 'block';
        return;
    }
    
    // Add cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">Rp${item.price.toLocaleString()} x ${item.qty}</div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-btn">×</button>
        `;
        cartItems.appendChild(li);
    });
    
    // Calculate and display total
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotal.textContent = `Rp${total.toLocaleString()}`;
    
    // Show checkout button, hide start shopping button
    document.getElementById('checkout-btn').style.display = 'block';
    document.getElementById('start-shopping-btn').style.display = 'none';
}

function toggleCart() {
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('cart-overlay');
    
    if (cart.classList.contains('show')) {
        cart.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    } else {
        cart.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        // Focus pada tombol close untuk accessibility
        setTimeout(() => {
            document.getElementById('close-cart').focus();
        }, 100);
    }
}

function closeCart() {
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('cart-overlay');
    cart.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Modal testimoni
if (!document.getElementById('testimoni-modal')) {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'testimoni-modal';
    modalDiv.className = 'modal hidden';
    modalDiv.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;z-index:200;';
    document.body.appendChild(modalDiv);
}

// Back to Top Button functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
initBackToTop();

// Auth functions
function checkAuthStatus() {
    const user = JSON.parse(localStorage.getItem('geleeeUser') || '{}');
    const userSection = document.getElementById('user-section');
    const authButtons = document.getElementById('auth-buttons');
    const userName = document.getElementById('user-name');
    
    if (user.isLoggedIn) {
        userSection.style.display = 'block';
        authButtons.style.display = 'none';
        userName.textContent = `Halo, ${user.name}!`;
    } else {
        userSection.style.display = 'none';
        authButtons.style.display = 'block';
    }
}

// Logout function
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('geleeeUser');
            checkAuthStatus();
            showNotification('Logout berhasil!', 'success');
        });
    }
});

// Logout button event listener
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('geleeeUser');
        window.location.href = 'login.html';
    });
}

// Inisialisasi
loadCartFromStorage();
renderProducts();
updateCart();
updateStarFilter();
checkAuthStatus();

// Event listeners untuk pencarian
document.getElementById('search-btn').addEventListener('click', searchProducts);
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// Event listener untuk real-time search (opsional)
document.getElementById('search-input').addEventListener('input', function() {
    // Debounce untuk performa yang lebih baik
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
        currentSearch = this.value.toLowerCase().trim();
        renderProducts();
    }, 300);
});

// Event listener untuk sorting
document.getElementById('sort-select').addEventListener('change', function() {
    currentSort = this.value;
    renderProducts();
});

// Event listeners untuk cart buttons
document.getElementById('cart-btn').addEventListener('click', toggleCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);
document.getElementById('start-shopping-btn').addEventListener('click', closeCart);

// Keyboard support untuk cart
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const cart = document.getElementById('cart');
        if (cart.classList.contains('show')) {
            closeCart();
        }
        
        const modal = document.getElementById('testimoni-modal');
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }
});
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length === 0) {
        showNotification('Keranjang masih kosong!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    showNotification(`Terima kasih! Total pembayaran: Rp${total.toLocaleString()}`, 'success');
    
    cart.length = 0;
    updateCart();
    saveCartToStorage();
    closeCart();
});

// Star filter event listeners
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('star-filter-btn')) {
        const rating = parseInt(e.target.dataset.rating) || 0;
        filterProductsByRating(rating);
    }
});

// Fungsi untuk melihat detail produk
function viewProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
} 