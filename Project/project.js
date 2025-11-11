document.body.style.background = 'white';
document.body.style.color = 'black';

let theme = document.querySelector('#theme-button');

const changeTheme = () => {
 
 if (document.body.style.background === 'white') {
  document.body.style.background = '#42445A';
  
  document.body.style.color = 'white';
 } else {
  
  document.body.style.background = 'white';
  document.body.style.color = 'black';
 }
};

theme.addEventListener('click', changeTheme);