// ══════════════════════════════════════════════
// SHOPEASE MOCK DATA
// ══════════════════════════════════════════════

export const CATEGORIES = ["All","Electronics","Fashion","Mobiles","Furniture","Books","Sports","Appliances","Beauty"];

export const INITIAL_PRODUCTS = [
  { id:1, name:"iPhone 15 Pro Max", cat:"Mobiles", price:134999, origPrice:149999, desc:"Apple A17 Pro chip, titanium design, 48MP camera.", stock:12, seller:"AppleStore", rating:4.8, reviews:3240, img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80", badge:"Hot" },
  { id:2, name:"Samsung Galaxy S24 Ultra", cat:"Mobiles", price:109999, origPrice:129999, desc:"200MP camera, S Pen, AI features, Snapdragon 8 Gen 3.", stock:8, seller:"Samsung", rating:4.7, reviews:2180, img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80", badge:"Top Deal" },
  { id:3, name:"Sony WH-1000XM5", cat:"Electronics", price:26999, origPrice:34999, desc:"Industry-leading noise cancellation, 30hr battery.", stock:25, seller:"SonyHub", rating:4.9, reviews:5600, img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", badge:"Best Seller" },
  { id:4, name:"Apple Watch Ultra 2", cat:"Electronics", price:76999, origPrice:89999, desc:"Rugged design, precision GPS, 60hr battery life.", stock:6, seller:"AppleStore", rating:4.7, reviews:890, img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80", badge:"New" },
  { id:5, name:'Samsung QLED 65" 4K', cat:"Electronics", price:89999, origPrice:119999, desc:"Quantum dot display, 120Hz, Dolby Atmos sound.", stock:4, seller:"Samsung", rating:4.6, reviews:1200, img:"https://m.media-amazon.com/images/I/81BXTdEC03L._AC_UF1000,1000_QL80_.jpg", badge:"Top Deal" },
  { id:6, name:"Nike Air Jordan 1 Retro", cat:"Fashion", price:12499, origPrice:15999, desc:"Classic high-top silhouette, premium leather upper.", stock:30, seller:"NikeStore", rating:4.5, reviews:4100, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", badge:"New" },
  { id:7, name:'MacBook Pro 14" M3', cat:"Electronics", price:179999, origPrice:199999, desc:"M3 chip, 18hr battery, Liquid Retina XDR display.", stock:5, seller:"AppleStore", rating:4.9, reviews:2300, img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", badge:"Hot" },
  { id:8, name:"Ergonomic Office Chair", cat:"Furniture", price:18999, origPrice:24999, desc:"Lumbar support, breathable mesh, adjustable armrests.", stock:15, seller:"WorkDesk", rating:4.4, reviews:760, img:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80", badge:null },
  { id:9, name:"OnePlus 12", cat:"Mobiles", price:64999, origPrice:69999, desc:"Snapdragon 8 Gen 3, Hasselblad camera, 120Hz AMOLED.", stock:20, seller:"OnePlus", rating:4.6, reviews:1320, img:"https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&q=80", badge:"New" },

{ id:10, name:"Google Pixel 8 Pro", cat:"Mobiles", price:99999, origPrice:109999, desc:"Google Tensor G3 chip, AI camera features.", stock:10, seller:"GoogleStore", rating:4.7, reviews:980, img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80", badge:"Hot" },

{ id:11, name:"Dell XPS 13", cat:"Electronics", price:124999, origPrice:139999, desc:"13.4-inch InfinityEdge display, Intel i7, ultra-light.", stock:7, seller:"DellStore", rating:4.6, reviews:1400, img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80", badge:"Top Deal" },

{ id:12, name:"HP Pavilion Gaming Laptop", cat:"Electronics", price:85999, origPrice:94999, desc:"Ryzen 7 processor, RTX graphics, 144Hz display.", stock:9, seller:"HPStore", rating:4.5, reviews:1750, img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80", badge:"Best Seller" },

{ id:13, name:"Boat Rockerz 550 Headphones", cat:"Electronics", price:1999, origPrice:2999, desc:"Wireless headphones, 50mm drivers, deep bass.", stock:50, seller:"Boat", rating:4.3, reviews:5400, img:"https://images.unsplash.com/photo-1580894908361-967195033215?w=500&q=80", badge:"Hot" },

{ id:14, name:"Logitech MX Master 3 Mouse", cat:"Electronics", price:7999, origPrice:9999, desc:"Advanced wireless mouse with precision scrolling.", stock:18, seller:"Logitech", rating:4.8, reviews:3100, img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", badge:"Best Seller" },

{ id:15, name:"Adidas Ultraboost Shoes", cat:"Fashion", price:13999, origPrice:16999, desc:"Responsive cushioning, breathable knit upper.", stock:22, seller:"Adidas", rating:4.6, reviews:2600, img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80", badge:"New" },

{ id:16, name:"Levi's Men's Denim Jacket", cat:"Fashion", price:5999, origPrice:7999, desc:"Classic trucker jacket with premium denim.", stock:16, seller:"Levis", rating:4.4, reviews:980, img:"https://i.pinimg.com/736x/d1/05/d1/d105d1a9557cc7ef71fc1ab9344970ea.jpg", badge:null },

{ id:17, name:"Wooden Study Table", cat:"Furniture", price:10999, origPrice:13999, desc:"Solid wood table with storage drawers.", stock:12, seller:"HomeCraft", rating:4.3, reviews:410, img:"https://m.media-amazon.com/images/I/8185R3I4y0L._AC_UF894,1000_QL80_.jpg", badge:"Top Deal" },

{ id:18, name:"3-Seater Fabric Sofa", cat:"Furniture", price:34999, origPrice:44999, desc:"Comfortable fabric sofa with modern design.", stock:6, seller:"UrbanHome", rating:4.5, reviews:320, img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80", badge:"Hot" },

{ id:19, name:"Canon EOS R50 Camera", cat:"Electronics", price:78999, origPrice:89999, desc:"24MP mirrorless camera with 4K video.", stock:5, seller:"CanonStore", rating:4.7, reviews:560, img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&q=80", badge:"New" },

{ id:20, name:"Apple AirPods Pro 2", cat:"Electronics", price:23999, origPrice:26999, desc:"Active noise cancellation, spatial audio.", stock:30, seller:"AppleStore", rating:4.8, reviews:6500, img:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80", badge:"Best Seller" },

{ id:21, name:"Samsung Galaxy Tab S9", cat:"Electronics", price:74999, origPrice:84999, desc:"AMOLED display, S Pen included.", stock:11, seller:"Samsung", rating:4.6, reviews:720, img:"https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&q=80", badge:"New" },

{ id:22, name:"Mi Smart Band 8", cat:"Electronics", price:3499, origPrice:4999, desc:"Fitness tracker with heart-rate monitoring.", stock:40, seller:"MiStore", rating:4.4, reviews:3500, img:"https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&q=80", badge:"Hot" },

{ id:23, name:"Gaming Mechanical Keyboard", cat:"Electronics", price:4999, origPrice:6999, desc:"RGB mechanical keyboard with blue switches.", stock:20, seller:"GameTech", rating:4.5, reviews:900, img:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=500&q=80", badge:"Best Seller" },

{ id:24, name:"ASUS ROG Gaming Monitor", cat:"Electronics", price:28999, origPrice:32999, desc:"27-inch gaming monitor, 165Hz refresh rate.", stock:9, seller:"ASUS", rating:4.7, reviews:1100, img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80", badge:"Top Deal" },

{ id:25, name:"Puma Running T-Shirt", cat:"Fashion", price:1499, origPrice:2499, desc:"Lightweight breathable sports t-shirt.", stock:35, seller:"Puma", rating:4.3, reviews:800, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2885Jkj4c5jct-11IIdSIz1__xQcEvgFZQ&s", badge:null },

{ id:26, name:"Smart LED Ceiling Light", cat:"Furniture", price:3999, origPrice:5999, desc:"WiFi-enabled LED light with color control.", stock:14, seller:"SmartHome", rating:4.4, reviews:250, img:"https://ledex.ie/cdn/shop/files/smart-led-ceiling-light-ledex_1_600x600.webp?v=1689069512", badge:"New" },

{ id:27, name:"JBL Flip 6 Bluetooth Speaker", cat:"Electronics", price:11999, origPrice:13999, desc:"Portable waterproof speaker with deep bass.", stock:18, seller:"JBLStore", rating:4.6, reviews:2200, img:"https://rukminim2.flixcart.com/image/480/640/xif0q/speaker/b/n/a/-original-imahdxtp4wegepkd.jpeg?q=90", badge:"Hot" },

{ id:28, name:"Realme Buds Air 5", cat:"Electronics", price:3999, origPrice:5999, desc:"ANC earbuds with 38hr battery.", stock:28, seller:"Realme", rating:4.4, reviews:1700, img:"https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&q=80", badge:"Top Deal" }
];

export const INITIAL_ORDERS = [
  { id:"ORD-5001", date:"2026-03-08", status:"DELIVERED", total:134999, customer:"Arjun Mehta", items:[{name:"iPhone 15 Pro Max",qty:1,price:134999,img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=80"}] },
  { id:"ORD-5002", date:"2026-03-09", status:"SHIPPED",   total:136998, customer:"Sneha Rao", items:[{name:"Samsung Galaxy S24 Ultra",qty:1,price:109999,img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=80"},{name:"Sony WH-1000XM5",qty:1,price:26999,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80"}] },
  { id:"ORD-5003", date:"2026-03-10", status:"PROCESSING",total:76999,  customer:"Dev Sharma", items:[{name:"Apple Watch Ultra 2",qty:1,price:76999,img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=80"}] },
  { id:"ORD-5004", date:"2026-03-10", status:"PENDING",   total:26999,  customer:"Priya Nair", items:[{name:"Sony WH-1000XM5",qty:1,price:26999,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80"}] },
];

export const SELLER_PRODUCTS_INIT = [
  { id:1, name:"iPhone 15 Pro Max", cat:"Mobiles", price:134999, stock:12, sales:45, revenue:6074955, status:"ACTIVE", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=120" },
  { id:2, name:"Apple Watch Ultra 2", cat:"Electronics", price:76999, stock:6, sales:28, revenue:2155972, status:"ACTIVE", img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=120" },
  { id:3, name:"Sony WH-1000XM5", cat:"Electronics", price:26999, stock:2, sales:67, revenue:1808933, status:"LOW", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120" },
  { id:4, name:'MacBook Pro 14"', cat:"Electronics", price:179999, stock:0, sales:12, revenue:2159988, status:"OUT", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=120" },
];

export const ADMIN_USERS_INIT = [
  { id:1, name:"Arjun Mehta",   email:"arjun@gmail.com",   role:"CUSTOMER", joined:"2026-01-15", orders:5,  avatar:"AM" },
  { id:2, name:"TechZone Store",email:"techzone@shop.com", role:"SELLER",   joined:"2025-11-20", orders:0,  avatar:"TZ" },
  { id:3, name:"Sneha Rao",     email:"sneha@gmail.com",   role:"CUSTOMER", joined:"2026-02-10", orders:3,  avatar:"SR" },
  { id:4, name:"SportFit Hub",  email:"sports@sell.com",   role:"SELLER",   joined:"2025-12-05", orders:0,  avatar:"SF" },
  { id:5, name:"Super Admin",   email:"admin@shopease.com",role:"ADMIN",    joined:"2025-10-01", orders:0,  avatar:"SA" },
  { id:6, name:"Dev Sharma",    email:"dev@gmail.com",     role:"CUSTOMER", joined:"2026-03-01", orders:2,  avatar:"DS" },
];

export const ADMIN_CATS_INIT = [
  { id:1, name:"Electronics", desc:"Gadgets & devices",   products:45,  color:"#06b6d4" },
  { id:2, name:"Fashion",     desc:"Clothing & footwear", products:132, color:"#ec4899" },
  { id:3, name:"Mobiles",     desc:"Smartphones & more",  products:67,  color:"#8b5cf6" },
  { id:4, name:"Furniture",   desc:"Home & office",       products:28,  color:"#f59e0b" },
  { id:5, name:"Books",       desc:"All genres",          products:89,  color:"#10b981" },
  { id:6, name:"Sports",      desc:"Fitness equipment",   products:54,  color:"#ef4444" },
];

export const STATUS_FLOW  = ["PENDING","PROCESSING","SHIPPED","DELIVERED"];
export const STATUS_COLOR = { PENDING:"#f59e0b", PROCESSING:"#3b82f6", SHIPPED:"#8b5cf6", DELIVERED:"#10b981" };
export const STATUS_BG    = { PENDING:"#fef3c7", PROCESSING:"#dbeafe", SHIPPED:"#ede9fe", DELIVERED:"#d1fae5" };

export const DEMO_ACCOUNTS = [
  { label:"Customer", username:"customer1", password:"pass123", role:"CUSTOMER" },
  { label:"Seller",   username:"seller1",   password:"pass123", role:"SELLER"   },
  { label:"Admin",    username:"admin1",    password:"pass123", role:"ADMIN"    },
];