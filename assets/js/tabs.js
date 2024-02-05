// var tabNavLinks = document.querySelectorAll('.tab-nav a');
// var tabPanes = document.querySelectorAll('.tab-pane');

// // Set the default active tab
// tabNavLinks[0].classList.add('active');
// tabNavLinks[0].classList.add('active'); // Set the green underline for the default active tab
// tabPanes[0].classList.add('active');

// for (var i = 0; i < tabNavLinks.length; i++) {
//   tabNavLinks[i].addEventListener('click', function (e) {
//     e.preventDefault();
//     var tabId = this.getAttribute('data-tab');

//     for (var j = 0; j < tabNavLinks.length; j++) {
//       tabNavLinks[j].classList.remove('active');
//     }

//     for (var k = 0; k < tabPanes.length; k++) {
//       tabPanes[k].classList.remove('active');
//     }

//     this.classList.add('active');
//     document.getElementById(tabId).classList.add('active');
//   });
// }