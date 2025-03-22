const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

// document.getElementById("registerBtn").addEventListener("click", ()=> {
//     var end = Date.now() + (1 * 1000);

// // go Buckeyes!
// var colors = ['#bb0000', '#ffffff'];

// (function frame() {
//   confetti({
//     particleCount: 2,
//     angle: 60,
//     spread: 55,
//     origin: { x: 0 },
//     colors: colors
//   });
//   confetti({
//     particleCount: 2,
//     angle: 120,
//     spread: 55,
//     origin: { x: 1 },
//     colors: colors
//   });

//   if (Date.now() < end) {
//     requestAnimationFrame(frame);
//   }
// }());
// })

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

  
  
  