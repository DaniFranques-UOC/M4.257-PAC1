const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function changeTheme(ev) {
  if (!ev.target.checked) {
    document.documentElement.setAttribute('theme', 'light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
  }
}
colorSwitch.addEventListener('change', changeTheme);
