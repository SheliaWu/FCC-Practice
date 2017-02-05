/*1.Sum All Numbers in a Range */
function sumAll(arr) {
 arr= arr.sort(function(a,b){
    return a-b;
  });
  var sum=0;
   for(var i=arr[0];i<=arr[1];i++){
    sum+=i;
  } 
 
  /*var newarr=[];
  for(var i = arr[0]; i <= arr[1]; i++){
    newarr.push(i);    
  }
  sum = newarr.reduce(function(x,y){
    return x + y;
  });*/
 
  return sum;
}

sumAll([1, 4]);

/*2.Diff Two Arrays */
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(var i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
      newArr.push(arr1[i]);
    }
  }
  for(var j = 0; j < arr2.length; j++){
    if(arr1.indexOf(arr2[j]) == -1){
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*3.Roman Numeral Converter 有难度*/
function convert(num) {
  var alpha = [ 'I', 'V', 'X', 'L', 'C', 'D', 'M' ], roman = "", bit = 0;
        while (num > 0){  
            var tempnum = num % 10;
            switch (tempnum){  
                case 3:{   
                    roman = alpha[bit] + roman;  
                    tempnum--;
                  } 
                case 2:{  
                    roman = alpha[bit] + roman;  
                    tempnum--;
                }  
                case 1:{  
                    roman = alpha[bit] + roman;  
                    break;  
                }  
                case 4:{  
                    roman = alpha[bit + 1] + roman;
                    roman = alpha[bit] + roman;  
                    break;  
                }  
                case 8:{  
                    roman = alpha[bit] + roman; 
                    tempnum--;
                }  
                case 7:{  
                    roman = alpha[bit] + roman; 
                    tempnum--;
                }  
                case 6:{  
                    roman = alpha[bit] + roman;  
                    tempnum--;
                }
                case 5:{  
                    roman = alpha[bit + 1] + roman;  
                    break;  
                }  
                case 9:{ 
                    roman = alpha[bit + 2] + roman; 
                    roman = alpha[bit] + roman; 
                    break;  
                }  
                default:{  
                    break;  
                }  
            }  
            bit += 2;  
            num = Math.floor(num / 10);  
        }  
        return roman;
}

convert(36);
convert(44);

/*4.Where art thou*/
function where(collection, source) {
  var arr = [];
  // What's in a name?
  var sou=Object.keys(source);//方法会返回一个由给定对象的所有可枚举自身属性的属性名组成的数组
    for(var i in collection){
      var count=0;
      for(var j=0;j<sou.length;j++){
        if(collection[i][sou[j]]&&source[sou[j]]==collection[i][sou[j]]){
          count++;
        }
      }
      if(count==sou.length){
        arr.push(collection[i]);
      }
    }
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/*5.Search and Replace */
function myReplace(str, before, after) {
  str=str.split(' ');
  for(var i=0;i<str.length;i++){
    if(str[i]==before){
      if(str[i].toLowerCase()!==str[i]){
        after=after.slice(0,1).toUpperCase()+after.slice(1).toLowerCase();
        
      }
      str[i]=after;
    }
  }
  str=str.join(' ');
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*6.Pig Latin*/
function translate(str) {
  str=str.split('');
  if(str.indexOf('a')===0||str.indexOf('e')===0||str.indexOf('o')===0||str.indexOf('i')===0||str.indexOf('u')===0){
    str.push('way');
    str=str.join('');
    return str;
  }else{
    for(var i=0;i<str.length;i++){
      if(str[i]=='a'||str[i]=='e'||str[i]=='o'||str[i]=='u'||str[i]=='i'){
        var back=str.splice(0,i);
        back.push('ay');
        back=back.join('');
        str.push(back);
        str=str.join('');
        return str;
      }
    }
  }

  
}

translate("consonant");

/*7.DNA Pairing */
function pair(str) {
  str=str.split('');
  for(var i=0;i<str.length;i++){
    var match=[];
    if(str[i]=='C'){
      match.push('C');
      match.push('G');
    }else if(str[i]=='G'){
      match.push('G');
      match.push('C');
    }else if(str[i]=='A'){
      match.push('A');
      match.push('T');
    }else{
      match.push('T');
      match.push('A');
    }
    str[i]=match;
  }
  return str;
}

pair("GCG");

/*8.Missing letters */
function fearNotLetter(str) {
 for(var j = str[0].charCodeAt(),i = 0; j <= str[str.length - 1].charCodeAt(); j++,i++){
    if(j != str[i].charCodeAt()){
      return String.fromCharCode(j);
    }
  }
}

fearNotLetter("abce");

/*9.Boo Who*/
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
return typeof bool === "boolean";
}

boo(null);

/*10.Sorted Union*/
function unite(arr1, arr2, arr3) {
  var arr = Array.prototype.slice.call(arguments);
  var newarr = [];
  var endarr = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
       newarr.push(arr[i][j]);
    }
  }
  //如果它的indexof不等于索引证明重复了
  for(var k = 0; k < newarr.length; k++){
    if(newarr.indexOf(newarr[k]) == k){
      endarr.push(newarr[k]);
    } 
  }
  return endarr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*11.Convert HTML Entities*/
function convert(str) {
  // &colon;&rpar;
   var i=0;
  var arr=str.split("");

  for(i=0;i<arr.length;i++){
    switch(arr[i]){
      case '&':
        arr.splice(i,1,'&amp;');
        break;
      case '>':
        arr.splice(i,1,'&gt;');
        break;
      case '<':
        arr.splice(i,1,'&lt;');
        break;
      case "'":
        arr.splice(i,1,'&apos;');
        break;
      case '"':
        arr.splice(i,1,'&quot;');
        break;
    }
  }
  str=arr.join('');
  return str;
}

convert("Dolce & Gabbana");

/*12.Spinal Tap Case */
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 str = str.replace(/([A-Z]+)/g,' $1');
  //匹配到大写字母，在前面空一格
 str = str.replace(/\s+|_+/g,'-');
  //把空格或者＿替换成－
  if(str[0] == '-'){
    str = str.substring(1);
  }
  str = str.replace(/--/g,'-');
  str = str.toLowerCase();
  return str;
  
}

spinalCase('This Is Spinal Tap');

/*13.Sum All Odd Fibonacci Numbers */
function sumFibs(num) {
  var sum=0;
  var arr=[1,1];
  while(arr[arr.length-1]<=num){
    arr.push(arr[arr.length-1]+arr[arr.length-2]);
  }
for(var i=0;i<arr.length-1;i++){
    if(arr[i]%2!==0){
      sum+=arr[i];
    }
    
  }
  return sum;
}

sumFibs(4);
sumFibs(75025);

/*14.Sum All Primes */
function sumPrimes(num) {
  var arr = [2];
  var sum = 0;
  for(var i = 2; i <= num; i++){
    var pri = true;
    for(var j = 0; j < arr.length; j++){
      if(i % arr[j] === 0){
        pri = false;
        break;
      }
    }
    if(pri){
      arr.push(i);
    }
  }
  /*for(var i=3;i<=num;i++){
    var pr=true;
    for(var j=2;j<num;j++){
      if(i%j===0){
        pr=false;
        break;
      }
    }
    if(pr){
      arr.push(i);
    }
    
  }*/
  for(var k = 0; k < arr.length; k++){
    sum += arr[k];
  }
  return sum;
}

sumPrimes(10);

/*15.Smallest Common Multiple */
unction smallestCommons(arr) {
  arr=arr.sort(function(a,b){
    return a-b;
  });
  //找到最大公约数
  function fun(m,n){
    if(m % n === 0) return n;
    return fun(n, m % n);
  }
  //最小公倍数的求法是：彼此之间的乘积除以最大公约数。
//因为是求几个连续自然数之间的公倍数，所以，求出前两个最小公倍数之后，用这个最小公倍数和下一个值比较。//然后就得出了新的最小公倍数。主要用的是递归的思想。
  var num = arr[0];
  for(var i = arr[0] + 1; i <= arr[1]; i++){
    num *= i / fun(num,i);
  }
  return num;
}


smallestCommons([1,5]);

/*16.Finders Keepers */
function find(arr, func) {
  var num = 0;
   for(var i=0;i<arr.length;i++){
     if(func(arr[i])){
        num=arr[i];
       return num;
     }
   }
  return ; 
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*17.Drop it*/
function drop(arr, func) {
  // Drop them elements.
  var len = arr.length;
  for(var i = 0; i < len; i++){
    if(func(arr[0]) === false){
       arr.shift();
    }
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });

/*18.Steamroller*/
function steamroller(arr) {
  // I'm a steamroller, baby
 var newarr = [];
  function fun(a){
    for(var i = 0; i < a.length; i++){
      if(Array.isArray(a[i]) === true){
        fun(a[i]);
      }else{
        newarr.push(a[i]);
      }
    }
  }
  fun(arr);
  return newarr;
}

steamroller([1, [2], [3, [[4]]]]);

/*19.Binary Agents */
function binaryAgent(str) {
   /*parseInt(string, radix)

string    必需。要被解析的字符串    
radix    
可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
*/
  var arr=[];
  arr=str.split(' ');
  for(var i=0;i<arr.length;i++){
    arr[i]=parseInt(arr[i],2);
    arr[i]=String.fromCharCode(arr[i]);
  }
  str=arr.join('');
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*20.Everything be true*/
function every(collection, pre) {
  // Is everyone being true?
  var bCheck = true;
  for(var i in collection){
    if(!collection[i][pre]){
      bCheck = false;
    }
  }
  return bCheck;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/*21.Arguments Optional */
function add(x) {
  if(typeof x == 'number' && typeof arguments[1] == 'number' && arguments.length == 2){
    return arguments[0] + arguments[1];
  }else if(typeof x == 'number' && arguments.length == 1){
    return function(y){
      if(typeof y == 'number' && arguments.length == 1){
        return x + y;
      }
    };
  }else{
    return undefined;
  }
}

add(2,3);
