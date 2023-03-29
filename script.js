const input = document.querySelector(".inputBox input");
const span = document.querySelector(".length span");
const range = document.querySelector(".length input");
const btn = document.querySelector(".btn button");
const icon = document.querySelector(".fa-copy");


range.addEventListener('input',(e) => {
  value = e.target.value;
});


let pas = ''
const password = () => {
  const alphabets = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ';
  const symbols = '@##%&*+()/?!|{}[]=£№©<>=_€™~÷×^°;:';
  const number = '01234567890123456789';
  
  //string
  let str = alphabets;
  
  //#Check All checkBox
  //UpperCase
  if (document.getElementById('U').checked) {
    if (document.getElementById('N').checked) {
      str = alphabets.concat(number).toUpperCase();
    };
    
    if (document.getElementById('S').checked && document.getElementById('U').checked) {
      str = alphabets.concat(symbols).toUpperCase();
    };
    
    if (document.getElementById('S').checked && document.getElementById('N').checked) {
      str = alphabets.concat(symbols,number).toUpperCase();
    };
    
    if (document.getElementById('U').checked && !document.getElementById('S').checked && !document.getElementById('N').checked) {
      str = alphabets.toUpperCase();
    };
    
  };
  
  //Numbers
  if (document.getElementById('N').checked && !document.getElementById('U').checked) {
    if (document.getElementById('S')
  .checked) {
      str = alphabets.concat(symbols,number);
    }else {
      str = alphabets.concat(number);
    };
    
  };
  
  //Sumbols
  if (document.getElementById('S').checked && !document.getElementById('U').checked && !document.getElementById('N').checked) {
    str = alphabets.concat(symbols);
  };
  
  //password length
  let length = range.value;
  for (let i= 0; i < length; i++) {
    const random = Math.floor(Math.random() * str.length);
     pas += str.substring(random,random+1);
  };
  //set pass to DOM
  input.value = pas;
  pas = '';
  
};

btn.addEventListener('click',password);

//set length
range.addEventListener('input',(e)=> {
  span.innerText = e.target.value;
});
span.innerText = range.value;


//Copy Password
icon.addEventListener('click',() => {
 //for mobile
 input.select();
 input.setSelectionRange(0, 99999);
 
 //others
 navigator.clipboard.writeText(input.value);
 
});

//kshpai