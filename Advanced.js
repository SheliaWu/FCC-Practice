/*1.Validate US Telephone Numbers*/
function telephoneCheck(str) {
  // Good luck!
      var re = /^\(\d{3}\)[- ]?\d{3}[- ]?\d{4}$|^\d{3}[ -]?\d{3}[ -]?\d{4}$/;
      //判断第一个数字是否为1
      if(str[0] == 1){
           if(str[1] ===' '){
               return re.test(str.slice(2));
           }
           else{
               return re.test(str.slice(1));
           }
      }
      return re.test(str);
}



telephoneCheck("555-555-5555");
telephoneCheck("1(555)555-5555");

/*2.Symmetric Difference */
function sym(args) {
   var arr=Array.prototype.slice.apply(arguments);
   /* var newarr=arr.reduce(function(a, b){
      var str1=a.join('');
      var str2=b.join('');
    }, []);*/
  var newarr=[];
  for(var i=0;i<arr.length;i++){
    var tem=[];
    for(var j=0;j<arr[i].length;j++){
      if(newarr.indexOf(arr[i][j])<0){
        tem.push(arr[i][j]);
      }
    }
    for(var k=0;k<newarr.length;k++){
      if(arr[i].indexOf(newarr[k])<0){
        tem.push(newarr[k]);
      }
    }
    newarr=tem;
  }  
  /*

//求出将要测试的数组  previousValue（上一次调用回调函数时的返回值，或者初始值）
                      currentValue（当前正在处理的数组元素）
                      currentIndex（当前正在处理的数组元素下标）
                      array（调用reduce()方法的数组）
        var newarr = arr.reduce(function(prev,cur,index,arr){
                var a = prev.filter(function(item){
               return cur.indexOf(item) < 0;
             });
             var b = cur.filter(function(item){
               return prev.indexOf(item) < 0;
             });
             return a.concat(b);
             });*/
        //去重
         return newarr.filter(function(item,index,array){
             return array.indexOf(item) == index;
         });
  
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

/*3.Exact Change*/
function checkCashRegister(price, cash, cid) {
  var change=[];
   //防止浮点计算的误差防止两个浮点数做计算，把所有数据乘以100
  var left=cash*100-price*100;
  var sum=0;
  for(var i=0;i<cid.length;i++){
    switch(cid[i][0]){
      case 'PENNY': cid[i][1]=cid[i][1]*100;cid[i].push(1);cid[i].push(cid[i][1]/1);
        break;
      case 'NICKEL': cid[i][1]=cid[i][1]*100;cid[i].push(5);cid[i].push(cid[i][1]*100/5);
        break;
      case 'DIME':  cid[i][1]=cid[i][1]*100;cid[i].push(10);cid[i].push(cid[i][1]/10);
        break;
      case 'QUARTER': cid[i][1]=cid[i][1]*100;cid[i].push(25);cid[i].push(cid[i][1]/25);
        break;
      case 'ONE':  cid[i][1]=cid[i][1]*100;cid[i].push(100);cid[i].push(cid[i][1]/100);
        break;
      case 'FIVE': cid[i][1]=cid[i][1]*100;cid[i].push(500);cid[i].push(cid[i][1]/500);
        break;
      case 'TEN':  cid[i][1]=cid[i][1]*100;cid[i].push(1000);cid[i].push(cid[i][1]/1000);
        break;
      case 'TWENTY': cid[i][1]=cid[i][1]*100;cid[i].push(2000);cid[i].push(cid[i][1]/2000);
        break;
      case 'ONE HUNDRED': cid[i][1]=cid[i][1]*100;cid[i].push(10000);cid[i].push(cid[i][1]/10000);
        break;      
    }
    sum+=cid[i][1];

  }
  
   // Here is your change, ma'am.
      for(var j=cid.length-1;j>-1;j--){
        var count=Math.floor(left/cid[j][2]);
        if(count>0&&cid[j][3]>0){
          var arr=[];
          if(count-cid[j][3]>0){
            arr.push(cid[j][0]);
            arr.push(cid[j][3]*cid[j][2]/100);
            left=left-cid[j][2]*cid[j][3];
          }else{
            arr.push(cid[j][0]);
            arr.push(count*cid[j][2]/100);
            left=left-cid[j][2]*count;
          }
          change.push(arr);
        }
      }
  var sum2=change.reduce(function(pre,curr,index,array){
    return pre+array[index][1];
  },0);
  //return sum2+' '+sum+' '+(cash*100-price*100);
  if(left>0){
    return 'Insufficient Funds';
  }else if(left===0&&sum2*100===sum){
    return 'Closed';
  }else{
    return change; 
  }
     

// Example cash-in-drawer array:
// [["PENNY", 1.01],0.01
// ["NICKEL", 2.05],0.05
// ["DIME", 3.10],0.1
// ["QUARTER", 4.25],0.25
// ["ONE", 90.00],1
// ["FIVE", 55.00],5
// ["TEN", 20.00],10
// ["TWENTY", 60.00],20
// ["ONE HUNDRED", 100.00]] 100
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

/*4.Inventory Update*/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for(var i=0;i<arr2.length;i++){
      for(var j=0;j<arr1.length;j++){
        if(arr2[i][1]===arr1[j][1]){
          arr1[j][0]+=arr2[i][0];
          break;
        }
      }
      if(j===arr1.length){
        arr1.push(arr2[i]);
      }
    }
  //排序的知识点还是不太懂a,b表示数组中的任意两个元素，若return > 0 b前a后；reutrn < 0 a前b后；a=b时存在浏览器兼容
    //简化一下：a-b输出从小到大排序，b-a输出从大到小排序。
  //a[1][0]取数组的字符串的第一个字母来进行比较,为什么return a[1][0]-b[1][0]不对
  arr1.sort(function(a,b){
    return (a[1][0]>b[1][0])?1:0;
  });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

/*5.No repeats please 很有难度，网上找的解法还不理解*/
function permAlone(str) {
  
//create variable to store number of perms without a repeat
var noDupes = 0;
 
//split string into array
var arr = str.split("");
  
// Call with an array of the original string
findPerm(arr.length,arr);
  
return noDupes;
 
//Heap's Algorithm
function findPerm(n, array) {
    // If only 1 element, just output the array
    if (n == 1) {
//check for duplicates
    if(!(/([a-zA-Z])\1+/).test(array.join(""))){
        noDupes += 1;
        }
      return;
    }
 
    for (var i = 0; i < n; i+= 1) {
        findPerm(n - 1, arr);
 
        // If n is even
        if (n % 2 === 0) {
            swap(i, n - 1);
        } else {
            swap(0, n - 1);
        }
    }
 
 function swap(idxA, idxB) {
    var tmp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = tmp;
    }
  }
  
}
 
//call permAlone() with any string

permAlone('aab');

/*6.Friendly Date Ranges 重点在一年内的判断条件*/
function makeFriendlyDates(arr){
  var begin=arr[0].split('-');
  var end=arr[1].split('-');
  function InitialDate(array){
    switch(array[1]){
      case "01": array.push("January");
      break;
      case "02":array.push("February");
        break;
      case "03":array.push("March");
        break;
      case "04": array.push("April");
        break;
      case "05":array.push("May");
        break;
      case "06":array.push("June");
        break;
      case "07": array.push("July");
        break;
      case "08":array.push("August");
        break;
      case "09":array.push("September");
        break;
      case "10": array.push("October");
        break;
      case "11":array.push("November");
        break;
      case "12":array.push("December");
        break;             
    }

    if(array[2]<10){
      array[2]=array[2][1];
    }
    switch(array[2]%10){
      case 1:{
        if(Math.floor(array[2]/10)!==1){array[2]=array[2]+'st';}else{array[2]=array[2]+'th';}
      }
        break;
      case 2:{
        if(Math.floor(array[2]/10)!==1){array[2]=array[2]+'nd';}else{array[2]=array[2]+'th';}
      }
        break;
      case 3:{
        if(Math.floor(array[2]/10)!==1){array[2]=array[2]+'rd';}else{array[2]=array[2]+'th';}
      }
        break;
      default:array[2]=array[2]+'th';
    }
    return array;
  }
  begin=InitialDate(begin);
  end=InitialDate(end);
  var newArr=[];
  var date=new Date();
  var curryear=date.getFullYear()-1 ;
  //怎么判断同一年，年份相同或者年份相差1月份小一前一年或者年份相差1月份相同日期比前一年小
  //如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
  if((begin[0]==curryear&&begin[0]==end[0])||(begin[0]==curryear&&end[0]-begin[0]==1&&end[1]<begin[1])||(begin[0]==curryear&&end[0]-begin[0]==1&&end[1]==begin[1]&&end[2].slice(0,end[2].length-2)<begin[2].slice(0,begin[2].length-2))){
    if(begin[0]==end[0]&&begin[1]==end[1]&&begin[2]==end[2]){
        newArr.push(end[3]+" "+end[2]+", "+end[0]);
        return newArr;
      }
    newArr.push(begin[3]+" "+begin[2]);           
      if(begin[1]===end[1]&&begin[0]==end[0]){
        newArr.push(end[2]);
      }else{
        newArr.push(end[3]+" "+end[2]);
      }     
    }else {
      //除了 开始日期年份是当前年份，且结束日期与开始日期小于一年，
      if(begin[0]==end[0]&&begin[1]==end[1]&&begin[2]==end[2]){
        newArr.push(end[3]+" "+end[2]+", "+end[0]);
        return newArr;
      }
      //同一年内
    if((begin[0]==end[0])||(end[0]-begin[0]==1&&end[1]<begin[1])||(end[0]-begin[0]==1&&end[1]==begin[1]&&end[2].slice(0,end[2].length-2)<begin[2].slice(0,begin[2].length-2))){
       newArr.push(begin[3]+" "+begin[2]+", "+begin[0]);
      if(begin[1]===end[1]&&begin[0]==end[0]){
        newArr.push(end[2]);
      }else{
        newArr.push(end[3]+" "+end[2]);
      }     
    }else{
      //不是同一年
      newArr.push(begin[3]+" "+begin[2]+", "+begin[0]);
      newArr.push(end[3]+" "+end[2]+", "+end[0]);
    }
  }
  return newArr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

/*7.Make a Person */
var Person = function(firstAndLast) {
   this.getFirstName=function(){
    return firstAndLast.split(' ')[0];
  };
  this.getLastName=function(){
    return firstAndLast.split(' ')[1];
  };
  this.setFirstName=function(first){
    var arr=firstAndLast.split(' ');
    arr.splice(0,1,first);
    firstAndLast=arr.join(' ');
  };
  this.setLastName=function(last){
    var arr=firstAndLast.split(' ');
    arr.splice(1,1,last);
    firstAndLast=arr.join(' ');
  };
  this.setFullName=function(fullName){
    firstAndLast=fullName;
  };
  this.getFullName=function(){
    return firstAndLast;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

/*8.Map the Debris */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i=0;i<arr.length;i++){
     var R=(arr[i].avgAlt+earthRadius);
     var T=2*Math.PI*Math.sqrt((R*R*R/GM));
     delete arr[i].avgAlt;
     arr[i].orbitalPeriod=Math.round(T);
   }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/*9.Pairwise */
function pairwise(arr, arg) {
  var pair=0;
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==arg){
        pair=pair+i+j;
        //为了防止被重复计算，把已经计算过的元素赋值为NaN让两个数相加不能得到一个整数
        arr[i]=NaN;
        arr[j]=NaN;
      }
    }
   
  }
  return pair;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);