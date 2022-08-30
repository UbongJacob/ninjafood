const navMenuClassList = document.getElementById('nav-menu').classList;

document.getElementById('nav-burger').addEventListener('click', function (e) {
  if (navMenuClassList.contains('hidden')) {
    navMenuClassList.remove('hidden');
  } else {
    navMenuClassList.add('hidden');
  }
});
