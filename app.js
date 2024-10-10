let passBox=document.querySelector(".Password");
let length=12;
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*()_+~|}{[]></-=";
function createPassword(){
    let password="";
    for(let i=0;i<length;i++){
    password+=upperCase[Math.floor(Math.random()* upperCase.length)];
    }
    passBox.value=password;
}



// nnot working pending.
// function copyPass() {
//     const passwordBox = document.getElementById('passwordBox');
    
//     // Use the Clipboard API if available
//     if (navigator.clipboard) {
//         navigator.clipboard.writeText(passwordBox.value).then(() => {
//             alert('Password copied to clipboard!');
//         }).catch(err => {
//             console.error('Failed to copy password', err);
//         });
//     } else {
//         // Fallback for older browsers: use a temporary textarea
//         const tempTextArea = document.createElement('textarea');
//         tempTextArea.value = passwordBox.value;
//         document.body.appendChild(tempTextArea);
//         tempTextArea.select();
//         document.execCommand('copy');
//         document.body.removeChild(tempTextArea);
//         alert('Password copied to clipboard!');
//     }
//}
 