var imges=[
    "https://i.postimg.cc/MKdhy06Z/family.jpg",
    "https://i.postimg.cc/L6HcYQM0/grand-father.png",
     "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
      "https://i.postimg.cc/5ymDKL83/bro.jpg",
     "https://i.postimg.cc/JnL6wtrd/sister.jpg",
      "https://i.postimg.cc/bw5W5zSK/mother.jpg"
];

var names=[
    "FAMILY BOOK",
    "AADARSH GOYAL",
    "AKRITI GOYAL",
    "ABHISHREE GOYAL",
    "NISTHA GOYAL",
    "PUSPA DEVI GOYAL"
];

var i=0;

function next(){
    i++;
    var num=5
    if(1>num){
        i=0
    }
    document.getElementById("img_1").src=imges[i];
   document.getElementById("name_1").innerHTML=names[i];
}