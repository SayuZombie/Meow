document.addEventListener("DOMContentLoaded", () => {
    // -------------------------
    // Falling Hearts Animation
    // -------------------------
    const canvas = document.getElementById("heartCanvas");
    const ctx = canvas.getContext("2d");
    let hearts = [];
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  
    function Heart() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height - canvas.height;
      this.size = Math.random() * 20 + 10;
      this.speed = Math.random() * 1 + 0.5;
      this.angle = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.05;
      this.opacity = Math.random() * 0.5 + 0.5;
    }
  
    function drawHeart(x, y, size, angle, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = `rgba(255,105,180,${opacity})`;
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.bezierCurveTo(size / 2, -size, size, 0, 0, size);
      ctx.bezierCurveTo(-size, 0, -size / 2, -size, 0, -size / 2);
      ctx.fill();
      ctx.restore();
    }
  
    function initHearts(count) {
      hearts = [];
      for (let i = 0; i < count; i++) {
        hearts.push(new Heart());
      }
    }
    initHearts(50);
  
    function animateHearts() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((heart) => {
        heart.y += heart.speed;
        heart.angle += heart.rotationSpeed;
        if (heart.y - heart.size > canvas.height) {
          heart.y = -heart.size;
          heart.x = Math.random() * canvas.width;
        }
        drawHeart(heart.x, heart.y, heart.size, heart.angle, heart.opacity);
      });
      requestAnimationFrame(animateHearts);
    }
    animateHearts();
  
    // -------------------------
    // Cat Fact Feature
    // -------------------------
    const catFacts = [
      "Cats have five toes on their front paws, but only four on the back ones.",
      "A group of cats is called a clowder.",
      "Cats sleep for 70% of their lives.",
      "A cat's nose is as unique as a human's fingerprint.",
      "The world's largest cat measured 48.5 inches long."
    ];
    const catFactBtn = document.getElementById("cat-fact-btn");
    const catFactText = document.getElementById("cat-fact");
    catFactBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * catFacts.length);
      catFactText.textContent = catFacts[randomIndex];
    });
  
    // -------------------------
    // Reveal Letter and Play Background Music Feature
    // -------------------------
    const revealButton = document.getElementById("reveal-button");
    const letterSection = document.getElementById("letter-section");
    const bgMusic = document.getElementById("bg-music");
    
    revealButton.addEventListener("click", () => {
      letterSection.classList.add("show");
      revealButton.style.display = "none";
      // Start background music when the button is clicked
      bgMusic.play().catch((err) => {
        console.error("Autoplay prevented:", err);
      });
    });
  });
  