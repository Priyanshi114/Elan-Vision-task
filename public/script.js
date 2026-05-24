gsap.registerPlugin(ScrollTrigger);

let intro = gsap.timeline();
intro
  .from(".title", { y: -50, opacity: 0, duration: 1 })
  .from(".tagline", { y: 30, opacity: 0, duration: 1 }, "-=0.5")
  .from(".cta", { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.3");


gsap.from(".title", {
  scrollTrigger: ".main",
  opacity: 0,
  y: 20,
  stagger: 0.05,
  duration: 0.6
});

gsap.from(".menu li", {
  x: -50,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".sidebar",
    start: "left center"
  }
});

gsap.to(".particle", {
  y: "random(-20, 20)",
  x: "random(-20, 20)",
  repeat: -1,
  yoyo: true,
  duration: "random(2, 5)",
  ease: "sine.inOut"
});

// Show form when Register button is clicked
document.getElementById("registerBtn").addEventListener("click", () => {
  document.getElementById("registerForm").style.display = "block";
});

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault(); 

  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  const response = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
  }
});
