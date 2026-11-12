const toast = document.querySelector("#toast");
let toastTimer;

function notify(message) {
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.textContent = "", 1800);
}

document.querySelectorAll(".social-actions button").forEach(button => {
  button.addEventListener("click", async () => {
    button.classList.toggle("active");
    if (button.id === "shareButton" && navigator.share) {
      try {
        await navigator.share({
          title: "Animated Blossoming Flowers",
          text: "A flower-growing animation built with HTML and CSS."
        });
      } catch (_) {}
      return;
    }
    const messages = {
      likeButton: "Thanks for the love!",
      saveButton: "Animation saved.",
      shareButton: "Share this flower animation."
    };
    notify(messages[button.id]);
  });
});
