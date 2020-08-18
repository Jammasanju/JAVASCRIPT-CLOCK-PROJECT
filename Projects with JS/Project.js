// /*
// console.log("Hello world",4+6,"Another log")
// console.warn("This is a warning")
// console.error("This is an error")
// alert("me");
// */

// //Java script variables

// //what are Variables?  -  Containers to store data values

// /*multi 
// line 
// comment
// */

// var number1 = 34;
// var number2 = 56;
// // console.log(number1+number2);

// //data types in Java Script

// var str1 = "this is a string";
// var str2 = 'this is also a string';
// // console.log(str1+str2);

// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry:99.78
// }

// // console.log(marks);

// var a = true;
// var b = false;

// //console.log(a,b);

// var und = undefined;
// // console.log(und)

// var undef;
// // console.log(undef);

// var n = null;
// // console.log(n);

// // at a very high level , there are two types of data types
// //Primitive data types: undefined,null,number,string,boolean,symbol
// //reference data types: arrays/objects

// var arr = [1,2,"stringafdjdvbfkn",4,5]
// // console.log(arr);

// var a = 34;
// var b = 56;
// /*
// console.log("the value of a+b is ",a+b);
// console.log("the value of a-b is ",a-b);
// console.log("the value of a*b is ",a*b);
// console.log("the value of a/b is ",a/b);
// */

// var c= b;
// // console.log(c);

// var x = 34;
// var y = 56;
// /*
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// */

// /*
// console.log(true && false)
// console.log(true && true)
// console.log(!true);
// console.log(!false)
// */

// // function avg(a,b)
// // {
// //     return (a+b)/2;
// // }
// // c1=avg(4,6);
// // c2=avg(5,6);
// // //console.log(c1,c2);

// // // var age = 34;
// // // if(age>8)
// // // {
// // //     console.log('You are not a kid');
// // // }
// // // else{
// // //     console.log('You are a kid');
// // // }

// // age = 24
// // if(age>32)
// // {
// //     console.log('You are not  a kid')
// // }
// // else if(age>26)
// // {
// //     console.group("fgahjskdjvgkb jf jf f ")
// // }
// // else
// // {
// //     console.log('sgfbfj f fj  j fl k   jnkd ikoj ')
// // }

// // console.log("End of ladder")


// var arr= [1,2,3,4,5,6,7]
// // console.log(arr)
// // for(var i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i]);
// // }

// // arr.forEach(function(element){
// //     console.log(element)
// // })

// // let j=0;
// // const alpha=0;
// // // a++; gives error
// // // a=a+1 gives error

// // while(j<arr.length)
// // {
// //     console.log(arr[j]);
// //     j++;
// // }

// // for(var i=0;i<arr.length;i++){
// //     if(i==2)
// //     {
// //         break;
// //     }
// //     console.log(arr[i]);
// // }

// // myarr = ['a','b','c','d','e']
// // console.log(myarr.length);
// // myarr.shift()
// // console.log(myarr)
// // myarr.pop()
// // console.log(myarr)
// // myarr.push('3')
// // console.log(myarr)
// // myarr.unshift("sathwik")
// // console.log(myarr)
// // myarr.toString()
// // console.log(myarr)
// // myarr.sort()
// // 
// // let mylovelystring = "harry is a is good boy";
// // // console.log(mylovelystring.length)
// // // console.log(mylovelystring.indexOf('is'))
// // // console.log(mylovelystring.lastIndexOf('is'))

// // // console.log(mylovelystring.slice(1,3))
// // d=mylovelystring.replace('harry','sathwik') //only first occurence
// // console.log(d,mylovelystring)

// mydate =  new Date();
// // console.log(mydate.getTime());
// // console.log(mydate.getFullYear());
// // console.log(mydate.getDay());
// // console.log(mydate.getMinutes());
// // console.log(mydate.getHours());

// // DOM Manipulation
// let elem = document.getElementById('click');
// // console.log(elem);

// let elemclass =  document.getElementsByClassName('container');
// // console.log(elemclass);

// // elemclass[0].style.background = "yellow"
// elemclass[0].classList.add("bg-primary")
// elemclass[0].classList.add("text-success")
// //text success can be removed

// // console.log(elem.innerHTML)
// // console.log(elem.innerText);


// // console.log(elemclass[0].innerHTML)
// // console.log(elemclass[0].innerText);

// tn= document.getElementsByTagName('button')
// console.log(tn)

// createdElement = document.createElement('p')
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold ";
// tn[0].appendChild(createdElement2);

// //selecting using query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// // Events in JavaScript
// // function clicked()
// // {
// //     console.log('the button was clicked ');
// // }

// // window.onload=function()
// // {
// //     console.log('the document was loaded');
// // }

// // firstcontainer.addEventListener('click',function()
// // {
// //     console.log("click on container");
// // })

// // firstcontainer.addEventListener('mouseover',function()
// // {
// //     console.log("mouse on container");
// // })

// // firstcontainer.addEventListener('mouseout',function()
// // {
// //     console.log("mouse out of container");
// // })

// // firstcontainer.addEventListener('mouseup',function()
// // {
// //     console.log("mouse up when clicked on container");
// // })

// // firstcontainer.addEventListener('mousedown',function()
// // {
// //     console.log("mouse down when clicked on container");
// // })

// // obj = {name:'harry',length:1,a: {this:"that"}} // no single code
// // jso = JSON.stringify(obj)
// // console.log(jso)
// // console.log(typeof jso)
// // parsed = JSON.parse('{"name":"harry","length":1,"a":{"this":"that"}}')
// // console.log(parsed)



