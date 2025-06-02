const menu = document.getElementById('menu'),
upanddown = document.getElementById('upanddown'),
cross = document.querySelectorAll('[id^="cross-"]'),
left = document.getElementById('left'),
Right = document.getElementById('Right')


const image1 = '../main/images/menuB.png';
const image2 = '../main/images/cross.png';

function menuButton() {

  if (menu.src.includes('menuB.png')) {
    menu.classList.remove('rotateBack');
    menu.classList.toggle('rotate');
    left.classList.add('slideleftUp')
    upanddown.classList.add('atTab')
    Right.classList.add('slideDownRight')
    // void menu.offsetWidth; 
    setTimeout(()=>{
      menu.style.display = 'none'
      upanddown.style.display = 'flex'

    },500)
  }else{
    cross.classList.toggle('rotateBack');
    cross.classList.remove('rotate');
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
      search.classList.toggle('rotateBack');
      search.classList.remove('rotate');
   
      setTimeout(()=>{
        menu.style.display = 'flex'
        upanddown.style.display = 'none'
  
      },500)
    }
  })
})
