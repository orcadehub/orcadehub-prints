document.addEventListener('DOMContentLoaded', function() {
  initNavbarScroll();
  initScrollAnimations();
  initProductSlider();
  initAnimations();
});

function initNavbarScroll() {
  const navbar = document.getElementById('mainNav');
  
  function handleScroll() {
      if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-enter');
  
  function checkScroll() {
      animatedElements.forEach((element, index) => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementTop < windowHeight * 0.9) {
              setTimeout(() => {
                  element.style.animationDelay = `${index * 0.1}s`;
                  element.style.animationName = 'fadeInUp';
              }, index * 50);
          }
      });
  }
  
  window.addEventListener('scroll', checkScroll);
  setTimeout(checkScroll, 100);
}

function initProductSlider() {
  const slider = document.getElementById('productsSlider');
  const prevButton = document.getElementById('productPrev');
  const nextButton = document.getElementById('productNext');
  
  if (!slider || !prevButton || !nextButton) return;
  
  updateSliderButtons();
  
  prevButton.addEventListener('click', scrollLeft);
  nextButton.addEventListener('click', scrollRight);
  slider.addEventListener('scroll', updateSliderButtons);
  
  function scrollLeft() {
      const width = slider.clientWidth;
      slider.scrollBy({
          left: -width / 1.5,
          behavior: 'smooth'
      });
  }
  
  function scrollRight() {
      const width = slider.clientWidth;
      slider.scrollBy({
          left: width / 1.5,
          behavior: 'smooth'
      });
  }
  
  function updateSliderButtons() {
      if (slider.scrollLeft <= 10) {
          prevButton.style.opacity = '0';
          prevButton.style.pointerEvents = 'none';
      } else {
          prevButton.style.opacity = '1';
          prevButton.style.pointerEvents = 'auto';
      }
      
      const canScrollMore = slider.scrollWidth - slider.scrollLeft - slider.clientWidth > 10;
      if (canScrollMore) {
          nextButton.style.opacity = '1';
          nextButton.style.pointerEvents = 'auto';
      } else {
          nextButton.style.opacity = '0';
          nextButton.style.pointerEvents = 'none';
      }
  }
}

function initAnimations() {
  const heroElements = document.querySelectorAll('.hero-content > *');
  heroElements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.animationDelay = `${index * 0.1}s`;
      setTimeout(() => {
          element.style.animationName = 'fadeInUp';
      }, 100 + (index * 100));
  });
  
  initProductInteractions();
}

function initProductInteractions() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
      const wishlistBtn = card.querySelector('.wishlist-btn');
      const addToCartBtn = card.querySelector('.add-to-cart-btn');
      
      if (wishlistBtn) {
          wishlistBtn.addEventListener('click', function(e) {
              e.preventDefault();
              
              const icon = wishlistBtn.querySelector('i');
              if (icon.classList.contains('far')) {
                  icon.classList.remove('far');
                  icon.classList.add('fas');
                  console.log('Added to wishlist!');
              } else {
                  icon.classList.remove('fas');
                  icon.classList.add('far');
                  console.log('Removed from wishlist!');
              }
          });
      }
      
      if (addToCartBtn) {
          addToCartBtn.addEventListener('click', function(e) {
              e.preventDefault();
              
              console.log('Added to cart!');
              
              addToCartBtn.classList.add('added');
              setTimeout(() => {
                  addToCartBtn.classList.remove('added');
              }, 1000);
              
              const cartCount = document.querySelector('.cart-count');
              if (cartCount) {
                  const currentCount = parseInt(cartCount.textContent);
                  cartCount.textContent = currentCount + 1;
                  
                  cartCount.classList.add('pulse');
                  setTimeout(() => {
                      cartCount.classList.remove('pulse');
                  }, 500);
              }
          });
      }
  });
}
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalItemsElement = document.querySelector('.total-items');
    const subtotalElement = document.querySelector('.subtotal');
    const taxElement = document.querySelector('.tax');
    const totalElement = document.querySelector('.total');
  
    function updateCartSummary() {
      let totalItems = 0;
      let subtotal = 0;
  
      cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.getAttribute('data-price'));
        totalItems += quantity;
        subtotal += quantity * price;
      });
  
      const tax = subtotal * 0.16; // Assuming 16% tax
      const total = subtotal + tax;
  
      totalItemsElement.textContent = totalItems;
      subtotalElement.textContent = subtotal.toFixed(2);
      taxElement.textContent = tax.toFixed(2);
      totalElement.textContent = total.toFixed(2);
    }
  
    cartItems.forEach(item => {
      const minusBtn = item.querySelector('.minus');
      const plusBtn = item.querySelector('.plus');
      const quantityElement = item.querySelector('.quantity');
      const totalPriceElement = item.querySelector('.total-price');
  
      minusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantity--;
          quantityElement.textContent = quantity;
          const price = parseFloat(item.getAttribute('data-price'));
          totalPriceElement.textContent = `₹ ${(quantity * price).toFixed(2)}`;
          updateCartSummary();
        }
      });
  
      plusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        const price = parseFloat(item.getAttribute('data-price'));
        totalPriceElement.textContent = `₹ ${(quantity * price).toFixed(2)}`;
        updateCartSummary();
      });
  
      const removeBtn = item.querySelector('.remove-btn');
      removeBtn.addEventListener('click', function() {
        item.remove();
        updateCartSummary();
      });
    });
  
    updateCartSummary();
  });