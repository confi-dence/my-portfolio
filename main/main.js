const menu = document.getElementById('menu'),
upanddown = document.getElementById('upanddown'),
cross = document.querySelectorAll('[id^="cross-"]'),
content = document.getElementById('contents'),
left = document.getElementById('left'),
Right = document.getElementById('Right')


const image1 = '../main/images/menuB.png';
const image2 = '../main/images/cross.png';

let isMenuOpen = false
function menuButton() {

  if (!isMenuOpen) {
    menu.classList.remove('rotateBack');
    menu.classList.add('rotate');
    left.classList.add('slideleftUp')
    upanddown.classList.add('atTab')
    Right.classList.add('slideDownRight')
    content.classList.add('reduceOpacity')
    // void menu.offsetWidth; 
    setTimeout(()=>{
      menu.style.display = 'none'
      upanddown.style.display = 'flex'
isMenuOpen = true
    },500)
  }
}

menu.addEventListener('click', menuButton);
// function crossButton() {
//   if (menu.src.includes('menuB.png')) {
//     cross.classList.toggle('rotateBack');
//     cross.classList.remove('rotate');
 
//     setTimeout(()=>{
//       menu.style.display = 'flex'
//       upanddown.style.display = 'none'

//     },500)
//   }
// }

// cross.addEventListener('click', crossButton);

cross.forEach(search => {
  search.addEventListener('click', function () {
    if (menu.src.includes('menuB.png')) {
      search.classList.add('rotateBack');
      search.classList.remove('rotate');
      content.classList.remove('reduceOpacity')
   
      setTimeout(()=>{
        menu.style.display = 'flex'
        upanddown.style.display = 'none'
        search.classList.remove('rotateBack');
        search.classList.add('rotate');
          menu.classList.add('rotateBack');
      menu.classList.remove('rotate');
      isMenuOpen = false;
      },500)
    }
  })
})
