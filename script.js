document.querySelectorAll('.sound-button').forEach(button => {
  button.addEventListener('click', () => {
      const soundName = button.getAttribute('data-sound');
      const audio = new Audio(`assets/sounds/${soundName}.m4a`);
      audio.play();
  });
});
