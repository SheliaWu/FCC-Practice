
/*1.Reverse a String */
function reverseString(str) {
  str=str.split('');
  str=str.reverse();
  str=str.join('');
  return str;
}

reverseString("hello");

/*2.Factorialize a Number*/ 
function factorialize(num) {
	//递归
  if (num>0){
    num=num*factorialize(num-1);
  }
  else{
    return 1;
  }
  return num;
}

factorialize(5);

/*3.Check for Palindromes */
function palindrome(str) {
  // Good luck!
 //var re=/[^\w]/gi;会忽略了空格
  var re=/[^0-9a-zA-Z]/gi;
  str=str.replace(re,'');
  return str.toLowerCase()==str.split('').reverse().join('').toLowerCase();
  
}

palindrome("eye");

/*4.Find the Longest Word in a String*/
function findLongestWord(str) {
var sstr = str.split(' ');
  sstr.sort(function(a,b){
    //它的排序原理是每2个数比较,然后根据正负更改数组内元素的位置.其实这个函数相当于一个委托(或许说谓词函数更为贴切一些)，因为要对数组排序，必然要涉及到两个数组成员的比较，这个函数为你提供一种选择，以改变默认的大小比较规则，排序结果根据这个规则进行比较(函数返回值小于0认为是第一个元素小于第二个元素，等于0是两个元素相等，大于0是第一个元素大于第二个元素)。简单的改变这个函数，你就可以实现倒序排序。
    //降序
    return b.length - a.length;
    //降序
  });
  
  return sstr[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
/*5.Title Case a Sentence */
function titleCase(str) {
  str=str.split(' ');
  /*var i;
 for(i=0;i<str.length;i++){
   str[i]=str[i].substring(0,1).toUpperCase()+str[i].substring(1).toLowerCase();
 }*/
  str=str.map(function(item){
   return item.substring(0,1).toUpperCase()+item.substring(1).toLowerCase();
  });
  str=str.join(' ');
  return str;
}

titleCase("I'm a little tea pot");

/*6.Return Largest Numbers in Arrays */
function largestOfFour(arr) {
  // You can do this!
  var newarr=[];
  for(var i=0;i<arr.length;i++){
    arr[i].sort(function(a,b){
      return b-a;
    });
    newarr.push(arr[i][0]);
  }
  return newarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*7.Confirm the Ending */
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var n=target.length;
  if(str.substring(str.length-n)==target){
    return true;
  }else{
    return false;
  }
}

confirmEnding("Bastian", "n");

/*8.Repeat a string repeat a string*/
function repeat(str, num) {
  // repeat after me
  if(num<0){
    return '';
  }else{
    var word=str;
    str='';
    for(var i=0;i<num;i++){
      str+=word;
    }
  }
  return str;
  
}

repeat("abc", 3);

/*9.Truncate a string*/
function truncate(str, num) {
  // Clear out that junk in your trunk
 if(num <= 3){
   if(str.length>num)
    str = str.slice(0,num)+'...';
  }else{
    if(str.length>num)
      str=str.substring(0,num-3)+'...';
  }
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("A-", 5);

/*10.Chunky Monkey*/
function chunk(arr, size) {
  // Break it up.
  var newarr=[];
  var index=0;
  for(i=0;i<Math.ceil(arr.length/size);i++){
    newarr.push(arr.slice(index,index+size));
    index+=size;
  }
  return newarr;
}

chunk(["a", "b", "c", "d"], 2);

/*11.Slasher Flick*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr=arr.slice(howMany);
  return arr;
}

slasher([1, 2, 3], 2);

/*12.Mutations*/
function mutation(arr) {
  var arrz = arr[0].toLowerCase();
  var arro = arr[1].toLowerCase();
  for(var i = 0; i < arro.length; i++){
    if(arrz.indexOf(arro[i]) == -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

/*13.Falsy Bouncer*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
arr= arr.filter(function(s){
    return Boolean(s) !== false;    

  });
  return arr;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);

/*14.Seek and Destroy*/
function destroyer(arr) {
  // Remove all the values
   var values = arguments;
    arr=arr.filter(function(item){
      for(var i=1;i<values.length;i++){
        if(item==values[i]){
          return false;
        }        
      }
      return true;
      
    });

  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*15.Where do I belong */
function where(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a,b){
    return a-b;
  });
  num=arr.indexOf(num);
  return num;
}

where([40, 60], 50);

/*16.Caesars Cipher*/
unction rot13(str) { // LBH QVQ VG!
  var arr = str.toUpperCase().split(" ");
  var str1 = [];
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split("");
    for (var j = 0; j < arr1.length; j++) {
      var num = arr1[j].charCodeAt();
      if (num >= 65 && num <= 90) {
        arr1[j] = num + 13 > 90 ? String.fromCharCode(64 + (num + 13 - 90)):String.fromCharCode(num + 13);
      }
 
    }
    str1.push(arr1.join(""));
  }
  return str1.join(" ");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
