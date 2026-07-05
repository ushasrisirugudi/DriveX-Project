// ===============================
// DARK MODE TOGGLE
// ===============================

const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = darkBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
    }
  });
}

// Load saved theme
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");

    if (darkBtn) {
      darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  }
});

// ===============================
// STICKY NAVBAR EFFECT
// ===============================

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 100) {
    navbar.style.padding = "15px 8%";
    navbar.style.background = "#0F172A";
  } else {
    navbar.style.padding = "20px 8%";
    navbar.style.background = "rgba(15,23,42,0.9)";
  }
});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML =
  '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#FF6B00;
color:white;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 5px 15px rgba(0,0,0,.3);
z-index:999;
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements =
  document.querySelectorAll(
    ".car-card,.feature-box,.search-card,.hero-content"
  );

function reveal() {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", reveal);
reveal();

// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", () => {
  const loader = document.createElement("div");

  loader.id = "loader";

  loader.innerHTML = `
      <div class="loader-box">
          <i class="fa-solid fa-car-side"></i>
          <h2>DriveX</h2>
      </div>
  `;

  loader.style.cssText = `
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100vh;
      background:#0F172A;
      display:flex;
      justify-content:center;
      align-items:center;
      color:white;
      z-index:9999;
      flex-direction:column;
      font-size:40px;
  `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 500);
  }, 1200);
});

// ===============================
// NOTIFICATION POPUP
// ===============================

function showNotification(message) {
  const note = document.createElement("div");

  note.innerHTML = message;

  note.style.cssText = `
      position:fixed;
      top:100px;
      right:20px;
      background:#FF6B00;
      color:white;
      padding:15px 25px;
      border-radius:10px;
      box-shadow:0 10px 20px rgba(0,0,0,.3);
      z-index:9999;
      animation:slide .5s;
  `;

  document.body.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 3000);
}

// Example
setTimeout(() => {
  showNotification(
    "🔥 New Premium Cars Added!"
  );
}, 2500);

// ===============================
// WHATSAPP FLOATING BUTTON
// ===============================

const whatsapp =
  document.createElement("a");

whatsapp.href = "https://wa.me/919999999999";
whatsapp.target = "_blank";

whatsapp.innerHTML =
  '<i class="fab fa-whatsapp"></i>';

whatsapp.style.cssText = `
position:fixed;
bottom:100px;
right:30px;
width:60px;
height:60px;
background:#25D366;
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:30px;
border-radius:50%;
text-decoration:none;
box-shadow:0 5px 15px rgba(0,0,0,.3);
z-index:999;
`;

document.body.appendChild(whatsapp);

// ===============================
// VEHICLE SEARCH
// ===============================

const searchBtn =
  document.querySelector(
    ".search-card button"
  );

if (searchBtn) {
  searchBtn.addEventListener(
    "click",
    () => {
      showNotification(
        "Searching Vehicles..."
      );

      setTimeout(() => {
        window.location.href =
          "vehicles.html";
      }, 1000);
    }
  );
}

// ===============================
// IMAGE SLIDER (Hero)
// ===============================

const hero = document.querySelector(
  ".hero"
);

if (hero) {
  const images = [
    "images/hero-car.jpg",
    "images/car1.jpg",
    "images/car2.jpg",
    "images/car3.jpg"
  ];

  let index = 0;

  setInterval(() => {
    index++;

    if (index >= images.length) {
      index = 0;
    }

    hero.style.background =
      `linear-gradient(
      rgba(0,0,0,.6),
      rgba(0,0,0,.6)),
      url('${images[index]}')`;

    hero.style.backgroundSize =
      "cover";
    hero.style.backgroundPosition =
      "center";
  }, 5000);
}

// ===============================
// FAVORITE BUTTONS
// ===============================

document
  .querySelectorAll(".favorite")
  .forEach((btn) => {
    btn.addEventListener(
      "click",
      () => {
        btn.classList.toggle(
          "active"
        );

        showNotification(
          "Added to Wishlist ❤️"
        );
      }
    );
  });

// ===============================
// PAYMENT SUCCESS
// ===============================

function paymentSuccess() {
  showNotification(
    "✅ Payment Successful!"
  );
}

// ===============================
// BOOK TEST DRIVE
// ===============================

function bookTestDrive() {
  showNotification(
    "🚗 Test Drive Booked Successfully!"
  );
}

// ===============================
// CONTACT SELLER
// ===============================

function contactSeller() {
  showNotification(
    "📞 Seller Contact Request Sent!"
  );
}