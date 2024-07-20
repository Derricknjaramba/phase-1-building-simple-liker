// Define constants for empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener("DOMContentLoaded", () => {
  const emptyHeart = document.querySelector(".like-glyph");
  const errorModal = document.getElementById("modal");

  if (errorModal) {
    errorModal.classList.add("hidden"); // Ensure modal is hidden initially
  }

  // Event listener for clicking on the empty heart
  emptyHeart.addEventListener("click", () => {
    mimicServerCall()
      .then((response) => {
        // Simulate a successful server response
        emptyHeart.classList.add("activated-heart");
        emptyHeart.innerText = FULL_HEART;
      })
      .catch((error) => {
        // Simulate a failed server response
        if (errorModal) {
          errorModal.classList.remove("hidden");
          const modalMessage = document.getElementById("modal-message");
          modalMessage.innerText = error;
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        }
      });
  });

  // Event listener for clicking on the full heart
  emptyHeart.addEventListener("click", () => {
    if (emptyHeart.classList.contains("activated-heart")) {
      emptyHeart.classList.remove("activated-heart");
      emptyHeart.innerText = EMPTY_HEART;
    }
  });
});

