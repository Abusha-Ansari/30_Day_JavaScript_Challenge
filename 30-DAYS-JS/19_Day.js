// A-1
// function logWordOccurrences(text, word) {
//     const regex = new RegExp(`\\b${word}\\b`, 'gi');
    
//     const matches = text.match(regex);
    
//     if (matches) {
//       console.log(`The word "${word}" occurs ${matches.length} times.`);
//     } else {
//       console.log(`The word "${word}" does not occur in the text.`);
//     }
//   }
//   const text = "abusha is abusha because abusha is abusha no one else is abusha because abusha is abusha.";
//   const word = "abusha";
//   logWordOccurrences(text, word);
  

// let inputString = "hello 123 i am only 123 years old and 123 days new 123 mins";
// let pattern = /\d+/g;
// let matches = inputString.match(pattern);
// console.log("Matched digit sequences:", matches);

// A-2
// const text = "Hello My name is Abusha And i am new In Coding.";
// const pattern = /\b[A-Z][a-z]*\b/g;
// const matches = text.match(pattern);
// console.log("Matches:", matches);



// const text = "Abu have 1234 banana and 5678 apple tell me if abu gives nupoor 1000 apple how many banana is left with him";
// const pattern = /\d+/g;
// const matches = text.match(pattern);
// console.log("Matches:", matches);

// A-3

// A-4
// const text = "Abu have 1234 banana and 5678 apple tell me if abu gives nupoor 1000 apple how many banana is left with him";
// const pattern = /^\w+/g;
// const matches = text.match(pattern);
// console.log("Matches:", matches);

// const text = "Abu have 1234 banana and 5678 apple tell me if abu gives nupoor 1000 apple how many banana is left with him";
// const pattern = /\w+$/g;
// const matches = text.match(pattern);
// console.log("Matches:", matches);

// A-5
// const validatePassword = (password) => {
//     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

//     const isValid = pattern.test(password);

//     console.log(`Password: "${password}" is ${isValid ? "valid" : "invalid"}`);
// }
// const passwords = [
//     "Password1!",
//     "password",
//     "PASSWORD",
//     "Passw0rd",
//     "Pa$sw0rd"
// ];
// passwords.forEach(validatePassword);




// const validateURL = (url) => {
//     const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(\/[^\s]*)?$/;

//     const isValid = pattern.test(url);

//     console.log(`URL: "${url}" is ${isValid ? "valid" : "invalid"}`);
// }
// const urls = [
//     "https://www.example.com",
//     "http://example.com",
//     "www.example.com",
//     "example.com",
//     "https://example",
//     "http://www.example.com/path?query=string#fragment",
//     "https://example.com/path/to/page",
//     "ftp://example.com",
//     "https://example.com:8080",
//     "invalid_url",
//     "http://127.0.0.1:5500/index.html",
//     "https://chatgpt.com/?temporary-chat=true"
// ];
// urls.forEach(validateURL);