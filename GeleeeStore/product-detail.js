// Data produk knalpot dengan deskripsi lengkap
const products = [
    {
        id: 1,
        name: "Knalpot Racing R9",
        price: 850000,
        image: "images/Knalpot-Racing-R9.jpg",
        description: "Knalpot Racing R9 adalah pilihan terbaik untuk meningkatkan performa motor Anda. Terbuat dari material berkualitas tinggi dengan desain aerodinamis yang memberikan suara yang mantap dan performa yang optimal. Cocok untuk motor harian maupun untuk balapan.",
        specifications: {
            material: "Stainless Steel 304",
            diameter: "51mm",
            weight: "2.5kg",
            compatibility: "Honda Vario, PCX, ADV"
        },
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
                images: ["images/Knalpot-Racing-R9.jpg"],
                helpful: 12,
                reply: {
                    author: "Geleee Store",
                    comment: "Terima kasih atas reviewnya Pak Budi! Senang bisa memberikan produk yang memuaskan. Jangan lupa share ke teman-teman ya! 😊",
                    date: "2024-12-16"
                }
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
                images: [],
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
                images: ["images/Knalpot-Racing-R9.jpg"],
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
                images: [],
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
                images: [],
                helpful: 7
            },
            {
                id: 6,
                rating: 5,
                comment: "Best purchase ever! Sudah 3 bulan pakai, performa tetap maksimal. Suara yang dihasilkan sangat enak di telinga, motor jadi lebih bertenaga.",
                author: "Eko Prasetyo",
                authorAvatar: "https://dummyimage.com/40x40/607D8B/fff&text=EP",
                date: "2024-11-30",
                purchaseDate: "2024-11-25",
                verified: true,
                productVariant: "Stainless Steel",
                images: ["images/Knalpot-Racing-R9.jpg"],
                helpful: 18
            },
            {
                id: 7,
                rating: 4,
                comment: "Kualitas bagus untuk harga segini. Suara tidak terlalu bising, cocok untuk motor harian. Finishing rapi dan tahan lama.",
                author: "Maya Sari",
                authorAvatar: "https://dummyimage.com/40x40/00BCD4/fff&text=MS",
                date: "2024-11-28",
                purchaseDate: "2024-11-23",
                verified: true,
                productVariant: "Stainless Steel",
                images: [],
                helpful: 6
            },
            {
                id: 8,
                rating: 5,
                comment: "Rekomendasi banget! Suara mantap, performa naik signifikan. Motor jadi lebih responsif dan hemat BBM. Worth it untuk upgrade!",
                author: "Doni Kusuma",
                authorAvatar: "https://dummyimage.com/40x40/795548/fff&text=DK",
                date: "2024-11-25",
                purchaseDate: "2024-11-20",
                verified: true,
                productVariant: "Stainless Steel",
                images: [],
                helpful: 11
            },
            {
                id: 9,
                rating: 4,
                comment: "Bagus untuk motor harian. Suara tidak mengganggu, performa tetap optimal. Pemasangan mudah dan kualitas material terjamin.",
                author: "Nina Kartika",
                authorAvatar: "https://dummyimage.com/40x40/8BC34A/fff&text=NK",
                date: "2024-11-22",
                purchaseDate: "2024-11-18",
                verified: true,
                productVariant: "Stainless Steel",
                images: [],
                helpful: 5
            },
            {
                id: 10,
                rating: 5,
                comment: "Excellent product! Suara yang dihasilkan sangat memuaskan, motor jadi lebih bertenaga dan responsif. Kualitas premium untuk harga terjangkau.",
                author: "Bambang Sutejo",
                authorAvatar: "https://dummyimage.com/40x40/3F51B5/fff&text=BS",
                date: "2024-11-20",
                purchaseDate: "2024-11-15",
                verified: true,
                productVariant: "Stainless Steel",
                images: ["images/Knalpot-Racing-R9.jpg"],
                helpful: 14
            }
        ]
    },
    {
        id: 2,
        name: "Knalpot Akrapovic Carbon",
        price: 1200000,
        image: "images/Knalpot-Akrapovic-Carbon.jpeg",
        description: "Knalpot premium dari brand terkenal Akrapovic dengan material carbon fiber yang ringan namun kuat. Memberikan suara yang ngebass dan performa maksimal. Desain eksklusif yang membuat motor Anda terlihat lebih mewah dan sporty.",
        specifications: {
            material: "Carbon Fiber",
            diameter: "60mm",
            weight: "1.8kg",
            compatibility: "Yamaha NMAX, XSR, MT-15"
        },
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
                images: ["images/Knalpot-Akrapovic-Carbon.jpeg"],
                helpful: 23,
                reply: {
                    author: "Geleee Store",
                    comment: "Terima kasih Pak Rendi! Akrapovic memang brand premium yang sudah teruji kualitasnya. Semoga motor semakin keren! 🏍️",
                    date: "2024-12-13"
                }
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
                images: [],
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
                images: [],
                helpful: 7,
                reply: {
                    author: "Geleee Store",
                    comment: "Mohon maaf Pak Joko, mungkin bisa coba produk lain yang lebih cocok untuk motor harian. Tim kami siap membantu rekomendasi produk yang sesuai!",
                    date: "2024-11-29"
                }
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
                images: ["images/Knalpot-Akrapovic-Carbon.jpeg"],
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
                images: [],
                helpful: 16
            },
            {
                id: 16,
                rating: 4,
                comment: "Kualitas premium, suara bagus. Cocok untuk motor sport atau balapan. Carbon fiber ringan dan tahan lama. Harga mahal tapi worth it.",
                author: "Maya Indira",
                authorAvatar: "https://dummyimage.com/40x40/00BCD4/fff&text=MI",
                date: "2024-11-20",
                purchaseDate: "2024-11-15",
                verified: true,
                productVariant: "Carbon Fiber",
                images: [],
                helpful: 12
            },
            {
                id: 17,
                rating: 5,
                comment: "Excellent product! Akrapovic memang brand terbaik. Suara yang dihasilkan sangat memuaskan, motor jadi lebih bertenaga dan responsif.",
                author: "Budi Santoso",
                authorAvatar: "https://dummyimage.com/40x40/4CAF50/fff&text=BS",
                date: "2024-11-18",
                purchaseDate: "2024-11-13",
                verified: true,
                productVariant: "Carbon Fiber",
                images: ["images/Knalpot-Akrapovic-Carbon.jpeg"],
                helpful: 21
            },
            {
                id: 18,
                rating: 4,
                comment: "Kualitas bagus, suara enak. Cocok untuk motor sport. Carbon fiber ringan dan awet. Pemasangan mudah dengan panduan yang jelas.",
                author: "Ahmad Rizki",
                authorAvatar: "https://dummyimage.com/40x40/2196F3/fff&text=AR",
                date: "2024-11-15",
                purchaseDate: "2024-11-10",
                verified: true,
                productVariant: "Carbon Fiber",
                images: [],
                helpful: 9
            },
            {
                id: 19,
                rating: 5,
                comment: "Top notch quality! Akrapovic memang tidak diragukan lagi kualitasnya. Suara yang dihasilkan sangat memuaskan, motor jadi terlihat sangat premium.",
                author: "Dewi Sartika",
                authorAvatar: "https://dummyimage.com/40x40/FF9800/fff&text=DS",
                date: "2024-11-12",
                purchaseDate: "2024-11-08",
                verified: true,
                productVariant: "Carbon Fiber",
                images: [],
                helpful: 15
            },
            {
                id: 20,
                rating: 4,
                comment: "Premium product dengan kualitas terbaik. Suara bagus, performa optimal. Carbon fiber ringan dan tahan lama. Worth it untuk upgrade motor.",
                author: "Rudi Hartono",
                authorAvatar: "https://dummyimage.com/40x40/FF5722/fff&text=RH",
                date: "2024-11-10",
                purchaseDate: "2024-11-05",
                verified: true,
                productVariant: "Carbon Fiber",
                images: [],
                helpful: 11
            }
        ]
    },
    {
        id: 3,
        name: "Knalpot Yoshimura",
        price: 950000,
        image: "images/Knalpot-Yoshimura.jpeg",
        description: "Knalpot Yoshimura dengan teknologi racing terbaru. Memberikan suara yang enak di telinga dengan performa yang luar biasa. Cocok untuk pengendara yang mengutamakan kualitas dan performa dalam satu paket.",
        specifications: {
            material: "Titanium",
            diameter: "55mm",
            weight: "2.2kg",
            compatibility: "Suzuki GSX-R, V-Strom, Burgman"
        },
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
                images: ["images/Knalpot-Yoshimura.jpeg"],
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
                images: ["images/Knalpot-Yoshimura.jpeg"],
                helpful: 31,
                reply: {
                    author: "Geleee Store",
                    comment: "Wah keren Pak Agus! Yoshimura memang pilihan tepat untuk racing. Semoga selalu juara di setiap balapan! 🏆",
                    date: "2024-12-08"
                }
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
                images: [],
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
                images: ["images/Knalpot-Yoshimura.jpeg"],
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
                images: [],
                helpful: 16
            },
            {
                id: 26,
                rating: 4,
                comment: "Desain keren, suara enak. Cocok untuk motor sport atau harian. Titanium ringan dan tahan lama. Pemasangan mudah dengan panduan yang jelas.",
                author: "Dewi Sartika",
                authorAvatar: "https://dummyimage.com/40x40/FF9800/fff&text=DS",
                date: "2024-11-25",
                purchaseDate: "2024-11-20",
                verified: true,
                productVariant: "Titanium",
                images: [],
                helpful: 9
            },
            {
                id: 27,
                rating: 5,
                comment: "Best racing exhaust! Yoshimura memang pilihan tepat untuk balapan. Suara yang dihasilkan sangat memuaskan, performa motor meningkat drastis.",
                author: "Rudi Hartono",
                authorAvatar: "https://dummyimage.com/40x40/FF5722/fff&text=RH",
                date: "2024-11-22",
                purchaseDate: "2024-11-18",
                verified: true,
                productVariant: "Titanium",
                images: ["images/Knalpot-Yoshimura.jpeg"],
                helpful: 24
            },
            {
                id: 28,
                rating: 4,
                comment: "Kualitas premium, suara bagus. Cocok untuk motor sport. Titanium ringan dan awet. Harga worth it untuk kualitas yang didapat.",
                author: "Sari Indah",
                authorAvatar: "https://dummyimage.com/40x40/9C27B0/fff&text=SI",
                date: "2024-11-20",
                purchaseDate: "2024-11-16",
                verified: true,
                productVariant: "Titanium",
                images: [],
                helpful: 11
            },
            {
                id: 29,
                rating: 5,
                comment: "Outstanding product! Yoshimura memang tidak pernah mengecewakan. Suara yang dihasilkan sangat enak, motor jadi lebih responsif dan bertenaga.",
                author: "Eko Prasetyo",
                authorAvatar: "https://dummyimage.com/40x40/607D8B/fff&text=EP",
                date: "2024-11-18",
                purchaseDate: "2024-11-14",
                verified: true,
                productVariant: "Titanium",
                images: [],
                helpful: 19
            },
            {
                id: 30,
                rating: 4,
                comment: "Desain unik, suara enak. Cocok untuk motor sport atau harian. Titanium ringan dan tahan lama. Pemasangan mudah dan kualitas terjamin.",
                author: "Maya Sari",
                authorAvatar: "https://dummyimage.com/40x40/00BCD4/fff&text=MS",
                date: "2024-11-15",
                purchaseDate: "2024-11-11",
                verified: true,
                productVariant: "Titanium",
                images: [],
                helpful: 8
            }
        ]
    },
    {
        id: 4,
        name: "Knalpot Proliner SS",
        price: 780000,
        image: "images/Knalpot-Proliner-SS.jpg",
        description: "Knalpot Proliner SS dengan harga terjangkau namun tetap berkualitas. Terbuat dari stainless steel yang tahan karat dan awet. Suara yang tidak terlalu bising namun tetap memberikan sensasi racing yang menyenangkan.",
        specifications: {
            material: "Stainless Steel 201",
            diameter: "48mm",
            weight: "2.8kg",
            compatibility: "Kawasaki Ninja, Versys, Z"
        },
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
                images: [],
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
                images: ["images/Knalpot-Proliner-SS.jpg"],
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
                images: [],
                helpful: 3,
                reply: {
                    author: "Geleee Store",
                    comment: "Mohon maaf Pak Doni, kami akan perbaiki kualitas finishing. Silakan hubungi CS kami untuk penanganan lebih lanjut.",
                    date: "2024-12-01"
                }
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
                images: [],
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
                images: [],
                helpful: 4
            },
            {
                id: 36,
                rating: 4,
                comment: "Worth it untuk budget terbatas. Suara tidak mengganggu, performa cukup baik. Cocok untuk motor harian dengan budget minimal.",
                author: "Maya Sari",
                authorAvatar: "https://dummyimage.com/40x40/00BCD4/fff&text=MS",
                date: "2024-11-22",
                purchaseDate: "2024-11-18",
                verified: true,
                productVariant: "Stainless Steel 201",
                images: ["images/Knalpot-Proliner-SS.jpg"],
                helpful: 8
            },
            {
                id: 37,
                rating: 3,
                comment: "Kualitas standar untuk harga segini. Suara agak cempreng tapi masih bisa diterima. Pemasangan mudah dan material cukup awet.",
                author: "Rudi Hartono",
                authorAvatar: "https://dummyimage.com/40x40/FF5722/fff&text=RH",
                date: "2024-11-20",
                purchaseDate: "2024-11-16",
                verified: true,
                productVariant: "Stainless Steel 201",
                images: [],
                helpful: 5
            },
            {
                id: 38,
                rating: 4,
                comment: "Bagus untuk entry level. Suara tidak terlalu bising, cocok untuk motor harian. Harga terjangkau dengan kualitas yang cukup baik.",
                author: "Budi Santoso",
                authorAvatar: "https://dummyimage.com/40x40/4CAF50/fff&text=BS",
                date: "2024-11-18",
                purchaseDate: "2024-11-14",
                verified: true,
                productVariant: "Stainless Steel 201",
                images: [],
                helpful: 6
            },
            {
                id: 39,
                rating: 3,
                comment: "Lumayan untuk budget minimal. Suara agak cempreng tapi masih bisa diterima. Kualitas material standar untuk harga segini.",
                author: "Ahmad Rizki",
                authorAvatar: "https://dummyimage.com/40x40/2196F3/fff&text=AR",
                date: "2024-11-15",
                purchaseDate: "2024-11-11",
                verified: true,
                productVariant: "Stainless Steel 201",
                images: [],
                helpful: 4
            },
            {
                id: 40,
                rating: 4,
                comment: "Cocok untuk pemula. Suara tidak mengganggu, performa cukup baik. Harga terjangkau dengan kualitas yang sesuai ekspektasi.",
                author: "Dewi Sartika",
                authorAvatar: "https://dummyimage.com/40x40/FF9800/fff&text=DS",
                date: "2024-11-12",
                purchaseDate: "2024-11-08",
                verified: true,
                productVariant: "Stainless Steel 201",
                images: ["images/Knalpot-Proliner-SS.jpg"],
                helpful: 7
            }
        ]
    }
];

const cart = [];

// Load cart dari localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('geleeeCart');
    if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        cart.length = 0;
        cart.push(...parsedCart);
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

// Fungsi untuk render bintang
function renderStar(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span style="color:${i <= rating ? '#FFD700' : '#ccc'};font-size:1.2em">★</span>`;
    }
    return html;
}

// Fungsi untuk memuat detail produk
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update title
    document.title = `${product.name} - Geleee Store`;
    
    // Update breadcrumb
    document.getElementById('product-breadcrumb').textContent = product.name;
    
    // Load product data
    const productImage = document.getElementById('product-image');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.onerror = function() {
        this.src = 'https://dummyimage.com/400x400/6c63ff/fff&text=IMG';
    };
    
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `Rp${product.price.toLocaleString()}`;
    document.getElementById('product-description-text').textContent = product.description;
    
    // Load rating
    const avgRating = getAverageRating(product.testimonials);
    document.getElementById('product-stars').innerHTML = renderStar(avgRating);
    document.getElementById('product-rating-text').textContent = `(${avgRating}/5) - ${product.testimonials.length} ulasan`;
    
    // Load testimonials with filter system
    allTestimonials = product.testimonials || [];
    filteredTestimonials = [...allTestimonials];
    
    // Initialize filters
    initializeFilters();
    
    // Display testimonials
    displayTestimonials();
    updateTestimonialStats();
    
    // Set event listeners
    document.getElementById('add-to-cart-btn').onclick = () => addToCart(product.id);
    document.getElementById('buy-now-btn').onclick = () => buyNow(product.id);
}

// Fungsi untuk memuat testimoni
function loadTestimonials(testimonials) {
    const testimonialsList = document.getElementById('testimonials-list');
    testimonialsList.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial-card';
        
        // Render rating detail
        const ratingDetail = renderRatingDetail(testimonial.rating);
        
        // Render images if any
        const imagesHtml = testimonial.images.length > 0 ? renderTestimonialImages(testimonial.images) : '';
        
        // Render reply if exists
        const replyHtml = testimonial.reply ? renderReply(testimonial.reply) : '';
        
        testimonialDiv.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-user">
                    <img src="${testimonial.authorAvatar}" alt="${testimonial.author}" class="user-avatar">
                    <div class="user-info">
                        <div class="user-name">
                            ${testimonial.author}
                            ${testimonial.verified ? '<span class="verified-badge">✓</span>' : ''}
                        </div>
                        <div class="purchase-info">
                            Dibeli pada ${formatDate(testimonial.purchaseDate)}
                        </div>
                    </div>
                </div>
                <div class="testimonial-rating">
                    ${ratingDetail}
                </div>
            </div>
            
            <div class="testimonial-content">
                <div class="testimonial-comment">${testimonial.comment}</div>
                ${imagesHtml}
            </div>
            
            <div class="testimonial-footer">
                <div class="testimonial-meta">
                    <span class="variant-info">Varian: ${testimonial.productVariant}</span>
                    <span class="review-date">${formatDate(testimonial.date)}</span>
                </div>
                <div class="testimonial-actions">
                    <button class="helpful-btn" onclick="markHelpful(${testimonial.id})">
                        👍 Bermanfaat (${testimonial.helpful})
                    </button>
                </div>
            </div>
            
            ${replyHtml}
        `;
        
        testimonialsList.appendChild(testimonialDiv);
    });
}

// Fungsi untuk render rating detail
function renderRatingDetail(rating) {
    let html = '<div class="rating-stars">';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="star ${i <= rating ? 'filled' : ''}">★</span>`;
    }
    html += `</div>`;
    return html;
}

// Fungsi untuk render testimonial images
function renderTestimonialImages(images) {
    if (images.length === 0) return '';
    
    let html = '<div class="testimonial-images">';
    images.forEach((image, index) => {
        html += `
            <div class="testimonial-image" onclick="openImageModal('${image}')">
                <img src="${image}" alt="Foto testimoni ${index + 1}" onerror="this.src='https://dummyimage.com/80x80/6c63ff/fff&text=IMG'">
            </div>
        `;
    });
    html += '</div>';
    return html;
}

// Fungsi untuk render reply
function renderReply(reply) {
    return `
        <div class="seller-reply">
            <div class="reply-header">
                <span class="seller-name">${reply.author}</span>
                <span class="reply-date">${formatDate(reply.date)}</span>
            </div>
            <div class="reply-content">${reply.comment}</div>
        </div>
    `;
}

// Fungsi untuk mark helpful
function markHelpful(testimonialId) {
    // Simulasi increment helpful count
    const helpfulBtn = event.target;
    const currentText = helpfulBtn.textContent;
    const currentCount = parseInt(currentText.match(/\d+/)[0]);
    helpfulBtn.textContent = `👍 Bermanfaat (${currentCount + 1})`;
    helpfulBtn.disabled = true;
    helpfulBtn.style.opacity = '0.7';
}

// Fungsi untuk open image modal
function openImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imageSrc}" alt="Foto testimoni">
        </div>
    `;
    
    modal.onclick = function(e) {
        if (e.target === modal || e.target.className === 'close-modal') {
            modal.remove();
        }
    };
    
    document.body.appendChild(modal);
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

// Fungsi untuk generate stars
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? 'filled' : ''}">★</span>`;
    }
    return stars;
}

// Fungsi untuk get rating text
function getRatingText(rating) {
    const texts = {
        1: 'Sangat Buruk',
        2: 'Buruk',
        3: 'Cukup',
        4: 'Bagus',
        5: 'Sangat Bagus'
    };
    return texts[rating] || 'Tidak ada rating';
}

// Fungsi untuk format price
function formatPrice(price) {
    return `Rp${price.toLocaleString()}`;
}

// Fungsi untuk menambah ke cart
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

// Fungsi untuk beli sekarang
function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Produk tidak ditemukan!');
        return;
    }
    
    // Tambahkan produk ke cart (sama seperti addToCart)
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
    
    // Tampilkan cart
    const cartElement = document.getElementById('cart');
    const overlay = document.getElementById('cart-overlay');
    cartElement.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Focus pada tombol close untuk accessibility
    setTimeout(() => {
        document.getElementById('close-cart').focus();
    }, 100);
}

// Fungsi untuk update cart
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

// Fungsi untuk hapus dari cart
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

// Fungsi untuk menampilkan notifikasi
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

// Event listeners
document.getElementById('cart-btn').addEventListener('click', function() {
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
});

document.getElementById('close-cart').addEventListener('click', function() {
    closeCart();
});

document.getElementById('cart-overlay').addEventListener('click', function() {
    closeCart();
});

document.getElementById('start-shopping-btn').addEventListener('click', function() {
    closeCart();
});

// Keyboard support untuk cart
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const cart = document.getElementById('cart');
        if (cart.classList.contains('show')) {
            closeCart();
        }
    }
});

function closeCart() {
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('cart-overlay');
    cart.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
}

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

// Filter state
let currentFilters = {
    rating: 'all',
    sort: 'newest',
    verifiedOnly: false,
    withImages: false,
    withReply: false
};

let allTestimonials = [];
let filteredTestimonials = [];

// Initialize filters
function initializeFilters() {
    // Rating filter buttons
    const ratingButtons = document.querySelectorAll('.rating-filter-btn');
    ratingButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            ratingButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilters.rating = btn.dataset.rating;
            applyFilters();
        });
    });

    // Sort select
    const sortSelect = document.getElementById('testimonial-sort');
    sortSelect.addEventListener('change', (e) => {
        currentFilters.sort = e.target.value;
        applyFilters();
    });

    // Feature checkboxes
    const checkboxes = document.querySelectorAll('.feature-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.id === 'verified-only') {
                currentFilters.verifiedOnly = e.target.checked;
            } else if (e.target.id === 'with-images') {
                currentFilters.withImages = e.target.checked;
            } else if (e.target.id === 'with-reply') {
                currentFilters.withReply = e.target.checked;
            }
            applyFilters();
        });
    });
}

// Apply filters to testimonials
function applyFilters() {
    filteredTestimonials = allTestimonials.filter(testimonial => {
        // Rating filter
        if (currentFilters.rating !== 'all' && testimonial.rating !== parseInt(currentFilters.rating)) {
            return false;
        }

        // Verified only filter
        if (currentFilters.verifiedOnly && !testimonial.verified) {
            return false;
        }

        // With images filter
        if (currentFilters.withImages && (!testimonial.images || testimonial.images.length === 0)) {
            return false;
        }

        // With reply filter
        if (currentFilters.withReply && !testimonial.reply) {
            return false;
        }

        return true;
    });

    // Sort testimonials
    sortTestimonials();

    // Update display
    displayTestimonials();
    updateTestimonialStats();
}

// Sort testimonials based on current sort option
function sortTestimonials() {
    switch (currentFilters.sort) {
        case 'newest':
            filteredTestimonials.sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
            break;
        case 'oldest':
            filteredTestimonials.sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate));
            break;
        case 'highest-rating':
            filteredTestimonials.sort((a, b) => b.rating - a.rating);
            break;
        case 'lowest-rating':
            filteredTestimonials.sort((a, b) => a.rating - b.rating);
            break;
        case 'most-helpful':
            filteredTestimonials.sort((a, b) => b.helpful - a.helpful);
            break;
    }
}

// Update testimonial statistics
function updateTestimonialStats() {
    const totalReviews = document.getElementById('total-reviews');
    const ratingDistribution = document.getElementById('rating-distribution');
    
    totalReviews.textContent = filteredTestimonials.length;

    // Calculate rating distribution
    const ratingCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    filteredTestimonials.forEach(testimonial => {
        ratingCounts[testimonial.rating]++;
    });

    // Create rating distribution bars
    ratingDistribution.innerHTML = '';
    for (let rating = 5; rating >= 1; rating--) {
        const count = ratingCounts[rating];
        const percentage = filteredTestimonials.length > 0 ? (count / filteredTestimonials.length) * 100 : 0;
        
        const ratingBar = document.createElement('div');
        ratingBar.className = 'rating-bar';
        ratingBar.innerHTML = `
            <div class="rating-bar-label">${rating}⭐</div>
            <div class="rating-bar-progress">
                <div class="rating-bar-fill" style="width: ${percentage}%"></div>
            </div>
            <div class="rating-bar-count">${count}</div>
        `;
        ratingDistribution.appendChild(ratingBar);
    }
}

// Update display testimonials function
function displayTestimonials() {
    const testimonialsList = document.getElementById('testimonials-list');
    
    if (filteredTestimonials.length === 0) {
        testimonialsList.innerHTML = `
            <div class="no-testimonials">
                <p>Tidak ada testimoni yang sesuai dengan filter yang dipilih.</p>
                <button onclick="resetFilters()" class="reset-filters-btn">Reset Filter</button>
            </div>
        `;
        return;
    }

    testimonialsList.innerHTML = '';
    
    filteredTestimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial-card';
        
        // Render rating detail
        const ratingDetail = renderRatingDetail(testimonial.rating);
        
        // Render images if any
        const imagesHtml = testimonial.images && testimonial.images.length > 0 ? renderTestimonialImages(testimonial.images) : '';
        
        // Render reply if exists
        const replyHtml = testimonial.reply ? renderReply(testimonial.reply) : '';
        
        testimonialDiv.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-user">
                    <img src="${testimonial.authorAvatar}" alt="${testimonial.author}" class="user-avatar" onerror="this.src='https://dummyimage.com/40x40/6c63ff/fff&text=U'">
                    <div class="user-info">
                        <div class="user-name">
                            ${testimonial.author}
                            ${testimonial.verified ? '<span class="verified-badge">✓</span>' : ''}
                        </div>
                        <div class="purchase-info">
                            Dibeli pada ${formatDate(testimonial.purchaseDate)}
                        </div>
                    </div>
                </div>
                <div class="testimonial-rating">
                    ${ratingDetail}
                </div>
            </div>
            
            <div class="testimonial-content">
                <div class="testimonial-comment">${testimonial.comment}</div>
                ${imagesHtml}
            </div>
            
            <div class="testimonial-footer">
                <div class="testimonial-meta">
                    <span class="variant-info">Varian: ${testimonial.productVariant}</span>
                    <span class="review-date">${formatDate(testimonial.date)}</span>
                </div>
                <div class="testimonial-actions">
                    <button class="helpful-btn" onclick="markHelpful(${testimonial.id})">
                        👍 Bermanfaat (${testimonial.helpful})
                    </button>
                </div>
            </div>
            
            ${replyHtml}
        `;
        
        testimonialsList.appendChild(testimonialDiv);
    });
}

// Reset filters function
function resetFilters() {
    currentFilters = {
        rating: 'all',
        sort: 'newest',
        verifiedOnly: false,
        withImages: false,
        withReply: false
    };

    // Reset UI
    document.querySelectorAll('.rating-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.rating === 'all') {
            btn.classList.add('active');
        }
    });

    document.getElementById('testimonial-sort').value = 'newest';
    document.querySelectorAll('.feature-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });

    applyFilters();
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

// Inisialisasi
loadCartFromStorage();
loadProductDetail();
updateCart(); 