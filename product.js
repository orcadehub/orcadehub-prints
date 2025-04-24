const data = {
  "T-Shirts": [
    {
      image: "./products/t.jpeg",
      category: "T-Shirts",
      title: "T-Shirt one side print",
      rating: 5,
      reviews: 117,
      currentPrice: "₹99",
      originalPrice: "₹199",
    },
    {
      image: "./products/t2.jpeg",
      category: "T-Shirts",
      title: "T-Shirt two side print",
      rating: 5,
      reviews: 219,
      currentPrice: "₹149",
      originalPrice: "₹299",
    },
    // {
    //   image: "./products/tee3.jpeg",
    //   category: "T-Shirts",
    //   title: "Printed Oversized Tee",
    //   rating: 4.5,
    //   reviews: 12,
    //   currentPrice: "₹549",
    //   originalPrice: "₹649",
    // },
    // {
    //   image: "./products/tee4.jpeg",
    //   category: "T-Shirts",
    //   title: "Sports Dry Fit Tee",
    //   rating: 5,
    //   reviews: 20,
    //   currentPrice: "₹599",
    //   originalPrice: "₹699",
    // },
  ],
  Caps: [
    {
      image: "./products/cap.jpeg",
      category: "Hoodies",
      title: "Graphic Hoodie",
      rating: 5,
      reviews: 184,
      currentPrice: "₹99",
      originalPrice: "₹199",
    },
    // {
    //   image: "./products/h1.jpeg",
    //   category: "Hoodies",
    //   title: "Plain Zip-Up Hoodie",
    //   rating: 5,
    //   reviews: 10,
    //   currentPrice: "₹899",
    //   originalPrice: "₹1099",
    // },
    // {
    //   image: "./products/h2.jpeg",
    //   category: "Hoodies",
    //   title: "Fleece Hoodie",
    //   rating: 4.5,
    //   reviews: 18,
    //   currentPrice: "₹1099",
    //   originalPrice: "₹1299",
    // },
    // {
    //   image: "./products/h3.jpeg",
    //   category: "Hoodies",
    //   title: "Pullover Hoodie",
    //   rating: 4,
    //   reviews: 22,
    //   currentPrice: "₹949",
    //   originalPrice: "₹1149",
    // },
  ],
  Bags: [
    {
      image: "./products/b1.jpeg",
      category: "Bags",
      title: "Leather Backpack",
      rating: 5,
      reviews: 20,
      currentPrice: "₹1299",
      originalPrice: "₹1499",
    },
    {
      image: "./products/b2.jpeg",
      category: "Bags",
      title: "Casual Sling Bag",
      rating: 4,
      reviews: 18,
      currentPrice: "₹699",
      originalPrice: "₹799",
    },
    {
      image: "./products/b3.jpeg",
      category: "Bags",
      title: "Laptop Bag",
      rating: 5,
      reviews: 25,
      currentPrice: "₹1499",
      originalPrice: "₹1699",
    },
    {
      image: "./products/b4.jpeg",
      category: "Bags",
      title: "Travel Duffel Bag",
      rating: 4.5,
      reviews: 30,
      currentPrice: "₹1799",
      originalPrice: "₹1999",
    },
  ],
  Cups: [
    {
      image: "./products/cup.jpg",
      category: "Cups",
      title: "Cup with one image",
      rating: 5,
      reviews: 325,
      currentPrice: "₹99",
      originalPrice: "₹199",
    },
    {
      image: "./products/cup2.jpeg",
      category: "Cup with one image and text",
      title: "Cup with one image and text",
      rating: 5,
      reviews: 259,
      currentPrice: "₹129",
      originalPrice: "₹249",
    },
    // {
    //   image: "./products/cup3.webp",
    //   category: "Cups",
    //   title: "Magic Color Changing Mug",
    //   rating: 5,
    //   reviews: 40,
    //   currentPrice: "₹399",
    //   originalPrice: "₹499",
    // },
    {
      image: "./products/cup3.webp",
      category: "Cups",
      title: "Cup with 2 images",
      rating: 5,
      reviews: 22,
      currentPrice: "₹149",
      originalPrice: "₹299",
    },
  ],
  Bottles: [
    {
      image: "./products/b1.jpg",
      category: "Bottles",
      title: "Bottle one side print",
      rating: 5,
      reviews: 25,
      currentPrice: "₹189",
      originalPrice: "₹299",
    },
    {
      image: "./products/b2.jpg",
      category: "Bottles",
      title: "Bottle two side print",
      rating: 4,
      reviews: 10,
      currentPrice: "₹229",
      originalPrice: "₹349",
    },
    // {
    //   image: "./products/bottle3.jpeg",
    //   category: "Bottles",
    //   title: "Insulated Flask Bottle",
    //   rating: 4.5,
    //   reviews: 15,
    //   currentPrice: "₹699",
    //   originalPrice: "₹799",
    // },
    // {
    //   image: "./products/bottle4.jpeg",
    //   category: "Bottles",
    //   title: "Custom Printed Bottle",
    //   rating: 5,
    //   reviews: 18,
    //   currentPrice: "₹799",
    //   originalPrice: "₹899",
    // },
  ],
  "ID Cards": [
    {
      image: "./products/idcard1.jpeg",
      category: "ID Cards",
      title: "Custom ID Card",
      rating: 5,
      reviews: 40,
      currentPrice: "₹149",
      originalPrice: "₹199",
    },
    {
      image: "./products/idcard2.jpeg",
      category: "ID Cards",
      title: "Employee ID Badge",
      rating: 4,
      reviews: 18,
      currentPrice: "₹199",
      originalPrice: "₹249",
    },
    {
      image: "./products/idcard3.jpeg",
      category: "ID Cards",
      title: "School ID Card",
      rating: 5,
      reviews: 30,
      currentPrice: "₹129",
      originalPrice: "₹179",
    },
    {
      image: "./products/idcard4.jpeg",
      category: "ID Cards",
      title: "PVC Smart ID Card",
      rating: 4.5,
      reviews: 20,
      currentPrice: "₹179",
      originalPrice: "₹229",
    },
  ],
};

// Function to display products based on selected category
function displayProducts(category) {
  let e = document.getElementById("products");
  e.innerHTML = ""; // Clear previous content

  if (!data[category]) {
    e.innerHTML = `<p class="text-center">No products available in this category.</p>`;
    return;
  }

  data[category].forEach((product) => {
    e.innerHTML += `
        <div class="product-card">
            <div class="product-image-container">
              <img src="${product.image}" alt="${
      product.title
    }" class="product-image">
              <div class="image-overlay"></div>
            </div>
            <div class="product-info">
              <span class="product-category">${product.category}</span>
              <h3 class="product-title">${product.title}</h3>
              <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="review-count">(${product.reviews})</span>
              </div>
              <div class="product-price">
                <span class="current-price">${product.currentPrice}</span>
                <span class="original-price">${product.originalPrice}</span>
              </div>
            </div>
          <button class="add-to-cart-butto" onclick="redirectToWhatsApp()">
  <i class="fas fa-shopping-cart"></i> Buy Now
</button>
        </div>`;
  });
  // Update active button styling dynamically
  document
    .querySelectorAll(".category-btn")
    .forEach((btn) => btn.classList.remove("active-category"));
  document.getElementById(category).classList.add("active-category");
}

// Function to generate star ratings dynamically
function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="star ${i <= rating ? "filled" : ""}">★</span>`;
  }
  return stars;
}

// Default category on page load
document.addEventListener("DOMContentLoaded", function () {
  displayProducts("T-Shirts"); // Default category
});

function redirectToWhatsApp() {
  const phoneNumber = "917569042554"; // WhatsApp number (without +)
  const message = encodeURIComponent("Hello, I want to place an order.");
  // const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  const whatsappURL = "https://forms.gle/9ZtQjn3d8N9GQTAH7";
  window.location.href = whatsappURL;
}

// products.js

// Product data array
const products = [
  // {
  //     id: 1,
  //     title: "Graphic Hoodie",
  //     image: "./products/hoodie1.jpeg",
  //     currentPrice: 549.00,
  //     originalPrice: 599.00,
  //     rating: 5,
  //     ratingCount: 12,
  //     badge: "BestSeller"
  // },
  {
    id: 2,
    title: "Printed Tee",
    image: "./products/t.jpeg",
    currentPrice: 99.0,
    originalPrice: 199.0,
    rating: 5,
    ratingCount: 8,
    badge: "BestSeller",
  },
  {
    id: 3,
    title: "Printed Coffee Cup",
    image: "./products/cup.jpg",
    currentPrice: 99.0,
    originalPrice: 199.0,
    rating: 5,
    ratingCount: 15,
    badge: "New",
  },
  {
    id: 4,
    title: "Print on Cap",
    image: "./products/cap.jpeg",
    currentPrice: 49.0,
    originalPrice: 199.0,
    rating: 5,
    ratingCount: 6,
    badge: "new",
  },
  {
    id: 5,
    title: "Prited Cups for Couple",
    image: "./products/c2.jpeg",
    currentPrice: 249.0,
    originalPrice: 399.0,
    rating: 5,
    ratingCount: 6,
    badge: "BestSeller",
  },
  // {
  //     id: 6,
  //     title: "Id Card Print",
  //     image: "./products/idcard1.jpeg",
  //     currentPrice: 129.00,
  //     originalPrice: 189.00,
  //     rating: 4,
  //     ratingCount: 6,
  //     badge: "BestSeller"
  // },
  // {
  //     id: 7,
  //     title: "Leather Bag Print",
  //     image: "./products/b1.jpeg",
  //     currentPrice: 899.00,
  //     originalPrice: 1299.00,
  //     rating: 4,
  //     ratingCount: 6,
  //     badge: "new"
  // },
  // {
  //     id: 8,
  //     title: "Print on Books & PEN",
  //     image: "./products/book.jpeg",
  //     currentPrice: 249.00,
  //     originalPrice: 299.00,
  //     rating: 4,
  //     ratingCount: 6,
  //     badge: "new"
  // },
  {
    id: 9,
    title: "Prited Bottle",
    image: "./products/bottle4.jpeg",
    currentPrice: 199.0,
    originalPrice: 299.0,
    rating: 5,
    ratingCount: 6,
    badge: "BestSeller",
  },
];

// Function to generate star rating
function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="${i <= rating ? "fas" : "far"} fa-star"></i>`;
  }
  return stars;
}

// Updated renderProducts function
function renderProducts() {
  const slider = document.getElementById("productsSlider");
  slider.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-actions">
                    <button class="wishlist-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                ${
                  product.badge
                    ? `
                    <div class="product-badges">
                        <span class="product-badge ${
                          product.badge.toLowerCase().replace(" ", "-") || ""
                        }">${product.badge}</span>
                    </div>
                `
                    : ""
                }
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-count">(${product.ratingCount})</span>
                </div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.currentPrice.toFixed(
                      2
                    )}</span>
                    <span class="original-price">₹${product.originalPrice.toFixed(
                      2
                    )}</span>
                </div>
            </div>
           
        </div>
    `
    )
    .join("");
}

// Basic slider functionality
function initializeSlider() {
  const slider = document.getElementById("productsSlider");
  const prevBtn = document.getElementById("productPrev");
  const nextBtn = document.getElementById("productNext");

  let scrollAmount = 0;
  const scrollStep = 300; // Adjust this value based on your card width

  nextBtn.addEventListener("click", () => {
    scrollAmount += scrollStep;
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initializeSlider();
});
