const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'!','#','$','%','&','_','-',]

let passwordLength = 12;

function getRandomCharacter () {
 let randomChar = Math.floor( Math.random() * characters.length);  
 return characters[randomChar];   
}

function generateRandomPassword() {
  let randomPassword = '';
  for(let i=0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword; 
}

document.getElementById('js-generateBtn').addEventListener('click', () => {
  const password1 = generateRandomPassword();
  const password2 = generateRandomPassword();

  document.getElementById('password1').textContent = password1;
  document.getElementById('password2').textContent = password2;
})
