export const metadata = {
    title: 'Mango Tree',
    description: 'Get Your Own .mmit Domain',
  }

export function addRemoveClass(i , c) {
  const element = document.getElementById(i);

  if (element.classList.contains(c)) {
      element.classList.remove(c);
  } else {
      element.classList.add(c);
  }
}