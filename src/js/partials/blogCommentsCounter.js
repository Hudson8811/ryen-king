document.addEventListener('DOMContentLoaded', () => {
  const commentsCounter = document.getElementById('comments-counter');

  commentsCounter.textContent =
    document.querySelectorAll('.comments-item').length;
});
