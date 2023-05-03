// JavaScript Document

var menu = 
"<nav> <ul>	<li><a href='/home.html'>Home</a></li>	<li><a href='/design.html'>Design</a></li>	<li><a href='/stream.html'>Stream</a></li>	<li><a href='/contato.html'>Contato</a></li>	</ul></nav>";

document.write(menu);

var menuList = document.querySelector('#menu-list');
var menuItems = ['Home', 'Design', 'Stream', 'Contato'];
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = document.createElement('li');
  menuItem.textContent = menuItems[i];
  menuItem.classList.add('menu-item'); // Add CSS class to menu item
  menuList.appendChild(menuItem);
  var menuContainer = document.querySelector('#menu-container');
  var logoImg = document.createElement('img');
  logoImg.src = '/buttons/VitcorLF.png';
  logoImg.alt = 'Your Logo';
  menuContainer.appendChild(logoImg);
}
