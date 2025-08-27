// Dom element
const btnBar = document.querySelector('#btn-bar');
const navLinks = document.querySelector('ul');
const btnClose = document.querySelector('#close');
const listLink = document.querySelectorAll('a');

// Event Listeners
btnBar.addEventListener('click', shownavLinks);
btnClose.addEventListener('click', closenavLinks);



// getnavLinks 
function shownavLinks(){
    // alert('this is not easy');
    navLinks.style.marginLeft = '1px';
    navLinks.style.transition = '0.8s ease-in';
    navLinks.style.background = 'rgba(255, 255, 255, 0.9)';
    navLinks.style.display = 'block';
    btnClose.style.display = 'block';
    btnBar.style.display = 'none';
    listLink.forEach(link => {
        link.style.display = 'block';
        link.style.transition = '0.8s ease-in-out';
        link.style.margin = '3px';
    });

}

// this is the close button
function closenavLinks(){
    navLinks.style.marginLeft = '-200px';
    navLinks.style.transition = '0.8s ease-in';
    navLinks.style.background = 'transparent';
    navLinks.style.display = 'none';
    btnClose.style.display = 'none';
    btnBar.style.display = 'block';
    listLink.forEach(link => link.style.display = 'none',
       
    );



}