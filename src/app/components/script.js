function toggleMenu() {
  document.getElementById('menu-button').addEventListener(
    'click',
    funnction(() => {
      document.getElementById('menu').classList.toggle('hidden');
    }),
  );
}

export function toggleMenu();
