//******************ASSIGNMENT NUMBER 1**********************************
//****************SP21-BSE-019*******************************************


// *******************1 charAt()****************************
const str1 = "AwaisAwan";
const char = str1.charAt(7);
console.log(char); 

// **************************2 charCodeAt()****************************
const str2 = "I am Awais";
const unicode = str2.charCodeAt(7);
console.log(unicode); 

//**************************** 3 concat()****************************
const str3 = "Awais";
const str4 = " Awan";
const concatenated = str3.concat(", ", str4);
console.log(concatenated); 

//**************************** 4 constructor****************************
const str5 = "My name is Awais Awan";
const constructor = str5.constructor;
console.log(constructor); 

// **************************5 endsWith()****************************
const str6 = "Hello, World!";
const endsWithWorld = str6.endsWith("World!");
console.log(endsWithWorld); 

// **************************6 fromCharCode()****************************
const unicodeValues = [12, 123, 456, 324, 568];
const str7 = String.fromCharCode(...unicodeValues);
console.log(str7); 

// **************************7 includes()****************************
const str8 = "Awais Awan";
const containsHello = str8.includes("Hello");
console.log(containsHello); 

// **************************8 indexOf()****************************
const str9 = "My name is Awais Awan";
const index = str9.indexOf("Awais");
console.log(index); 

// **************************9 lastIndexOf()****************************
const str10 = "This world is full of haters";
const lastIndex = str10.lastIndexOf("heters");
console.log(lastIndex); 
// **************************10 length****************************
const str11 = "I am making Assignment";
const length = str11.length;
console.log(length); 

// **************************11 localeCompare()****************************
const str12 = "Awais";
const str13 = "Awan";
const comparison = str12.localeCompare(str13);
console.log(comparison); 

//**************************** 12 match()****************************
const str14 = "The quick brown fox";
const matches = str14.match(/o/g);
console.log(matches); 

// prototype
// You Normally don't use it directly on strings, but it is used for extending objects.

//**************************** 13 repeat()****************************
const str15 = "Awais";
const repeated = str15.repeat(3);
console.log(repeated); 

//**************************** 14 replace()****************************
const str16 = "I am Malik Awais Awan";
const replaced = str16.replace("Malik", "Muhammad");
console.log(replaced); 

// **************************15 replaceAll()****************************
const str17 = "I am Malik Awais Awan";
const replacedAll = str17.replaceAll("Malik", "Muhammad");
console.log(replacedAll); 

//**************************** 16 search()****************************
const str18 = "My Name is Awais";
const searchResult = str18.search("Awais");
console.log(searchResult); 

// **************************17 slice()****************************
const str19 = "Awais Awan ";
const sliced = str19.slice(10, 17);
console.log(sliced); 

//**************************** 18 split()****************************
const str20 = "Hello, World!";
const parts = str20.split(" ");
console.log(parts); 

//**************************** 19 startsWith()****************************
const str21 = "What is your name";
const startsWithHello = str21.startsWith("What");
console.log(startsWithHello); 

// **************************20 substr()****************************
const str22 = "React.js";
const subString = str22.substr(0, 5);
console.log(subString); 

//**************************** 21 substring()****************************
const str23 = "Hello, World!";
const subString2 = str23.substring(7, 12);
console.log(subString2); 

// **************************22 toLocaleLowerCase()****************************
const str24 = "AWAIS AWAN";
const lowerCase = str24.toLocaleLowerCase();
console.log(lowerCase); 

// **************************23 toLocaleUpperCase()****************************
const str25 = "awais awan";
const upperCase = str25.toLocaleUpperCase();
console.log(upperCase); 

// **************************24 toLowerCase()****************************
const str26 = "Full Stack Developer";
const lowerCase2 = str26.toLowerCase();
console.log(lowerCase2); 

//**************************** 25 toString()****************************
const str27 = "javascript";
const strToString = str27.toString();
console.log(strToString); 

//**************************** 26 toUpperCase()****************************
const str28 = "Hello, World!";
const upperCase2 = str28.toUpperCase();
console.log(upperCase2); 

//**************************** 27 trim()****************************
const str29 = "   Developers in Codeshef   ";
const trimmed = str29.trim();
console.log(trimmed); 

// **************************28 trimEnd()****************************
const str30 = "   Hello, World!   ";
const trimmedEnd = str30.trimEnd();
console.log(trimmedEnd); 

// **************************29 trimStart()****************************
const str31 = "   Coding , Programming   ";
const trimmedStart = str31.trimStart();
console.log(trimmedStart); 

// **************************30 valueOf()****************************
const str32 = new String("My goal is Full Stack ");
const primitiveValue = str32.valueOf();
console.log(primitiveValue);