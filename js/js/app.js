'use strict';
let workHour=['6am','7am','8am','9am', '10am' ,'11am' , '12pm' , '1pm', '2pm', '3pm' ,'4pm', '5pm','6pm','7pm']

let Seattle={
   shopName: 'seattle',
    minHour:23,
    maxHour:65,
    avarge:6.3,
   randomCust:[],
  avaregCustprHor:[],
  total:0,
// total:sum(avaregCustprHor),
 getRandomcookis:  function () {
       for(let i=0; i<=workHour.length;i++){
           this.randomCust.push (Math.floor(Math.random() *
           (this.maxHour - this.minHour)) + this.minHour);
           console.log(this.randomCust[i]);
       } ;
   },
        
    
averageCust: function () {
    for(let i=0;i<workHour.length;i++){
     let mult= this.avarge*this.randomCust[i] 
     mult=Math.floor(mult)
     this.avaregCustprHor.push(`${mult}`)
     this.total+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Seattle);
Seattle.getRandomcookis()
Seattle.averageCust()


let parent=document.getElementById
('parent')
let h2element=document.createElement("h2")
parent.appendChild(h2element);
h2element.textContent=Seattle.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let ulelement = document.createElement("ul");
parent.appendChild(ulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let lielement =document.createElement("li")
    ulelement.appendChild(lielement);
    lielement.textContent=`${workHour[i]} ${Seattle.avaregCustprHor[i]} cookies  `

}
let totalElement=document.createElement("li");
ulelement.appendChild(totalElement);
totalElement.textContent=`total=${Seattle.total}cookies`









let Tokyo={
   shopName: 'Tokyo',
    minHour:3,
    maxHour:24,
    avarge:1.2,
   randomCust:[],
  avaregCustprHor:[],
  total:0,
// total:sum(avaregCustprHor),
 getRandomcookis:  function () {
       for(let i=0; i<=workHour.length;i++){
           this.randomCust.push (Math.floor(Math.random() *
           (this.maxHour - this.minHour)) + this.minHour);
           console.log(this.randomCust[i]);
       } ;
   },
        
    
averageCust: function () {
    for(let i=0;i<workHour.length;i++){
     let mult= this.avarge*this.randomCust[i] 
     mult=Math.floor(mult)
     this.avaregCustprHor.push(`${mult}`)
     this.total+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Tokyo)
Tokyo.getRandomcookis()
Tokyo.averageCust()


let cook=document.getElementById
('cook')
let h2element=document.createElement("h2")
cook.appendChild(h3element);
h3element.textContent=Tokyo.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let ulelement = document.createElement("ul");
cook.appendChild(ulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let lielement =document.createElement("li")
    ulelement.appendChild(lielement);
    lielement.textContent=`${workHour[i]} ${Tokyo.avaregCustprHor[i]} cookies  `

}
let totalElement=document.createElement("li");
ulelement.appendChild(totalElement);
totalElement.textContent=`total=${Tokyo.total}cookies`





let Dubai={
   shopName: 'Dubai',
    minHour:11,
    maxHour:36,
    avarge:3.7,
   randomCust:[],
  avaregCustprHor:[],
  total:0,
// total:sum(avaregCustprHor),
 getRandomcookis:  function () {
       for(let i=0; i<=workHour.length;i++){
           this.randomCust.push (Math.floor(Math.random() *
           (this.maxHour - this.minHour)) + this.minHour);
           console.log(this.randomCust[i]);
       } ;
   },
        
    
averageCust: function () {
    for(let i=0;i<workHour.length;i++){
     let mult= this.avarge*this.randomCust[i] 
     mult=Math.floor(mult)
     this.avaregCustprHor.push(`${mult}`)
     this.total+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Dubai);
Dubai.getRandomcookis()
Dubai.averageCust()


let dubai=document.getElementById
('parent')
let h2element=document.createElement("h2")
dubai.appendChild(h2element);
h2element.textContent=Dubai.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let ulelement = document.createElement("ul");
dubai.appendChild(ulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let lielement =document.createElement("li")
    ulelement.appendChild(lielement);
    lielement.textContent=`${workHour[i]} ${Dubai.avaregCustprHor[i]} cookies  `

}
let totalElement=document.createElement("li");
ulelement.appendChild(totalElement);
totalElement.textContent=`total=${Dubai.total}cookies`





let Paris={
   shopName: 'Paris',
    minHour:20,
    maxHour:38,
    avarge:2.3,
   randomCust:[],
  avaregCustprHor:[],
  total:0,
// total:sum(avaregCustprHor),
 getRandomcookis:  function () {
       for(let i=0; i<=workHour.length;i++){
           this.randomCust.push (Math.floor(Math.random() *
           (this.maxHour - this.minHour)) + this.minHour);
           console.log(this.randomCust[i]);
       } ;
   },
        
    
averageCust: function () {
    for(let i=0;i<workHour.length;i++){
     let mult= this.avarge*this.randomCust[i] 
     mult=Math.floor(mult)
     this.avaregCustprHor.push(`${mult}`)
     this.total+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Paris);
Paris.getRandomcookis()
Paris.averageCust()


let paris=document.getElementById
('paris')
let h2element=document.createElement("h2")
paris.appendChild(h2element);
h2element.textContent=Paris.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let ulelement = document.createElement("ul");
paris.appendChild(ulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let lielement =document.createElement("li")
    ulelement.appendChild(lielement);
    lielement.textContent=`${workHour[i]} ${Seattle.avaregCustprHor[i]} cookies  `

}
let totalElement=document.createElement("li");
ulelement.appendChild(totalElement);
totalElement.textContent=`total=${Paris.total}cookies`







let Lima={
   shopName: 'Lima',
    minHour:2,
    maxHour:16,
    avarge:4.6,
   randomCust:[],
  avaregCustprHor:[],
  total:0,
// total:sum(avaregCustprHor),
 getRandomcookis:  function () {
       for(let i=0; i<=workHour.length;i++){
           this.randomCust.push (Math.floor(Math.random() *
           (this.maxHour - this.minHour)) + this.minHour);
           console.log(this.randomCust[i]);
       } ;
   },
        
    
averageCust: function () {
    for(let i=0;i<workHour.length;i++){
     let mult= this.avarge*this.randomCust[i] 
     mult=Math.floor(mult)
     this.avaregCustprHor.push(`${mult}`)
     this.total+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Lima);
Lima.getRandomcookis()
Lima.averageCust()


let lima=document.getElementById
('lima')
let h2element=document.createElement("h2")
lima.appendChild(h2element);
h2element.textContent=Lima.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let ulelement = document.createElement("ul");
lima.appendChild(ulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let lielement =document.createElement("li")
    ulelement.appendChild(lielement);
    lielement.textContent=`${workHour[i]} ${Lima.avaregCustprHor[i]} cookies  `

}
let totalElement=document.createElement("li");
ulelement.appendChild(totalElement);
totalElement.textContent=`total=${Lima.total}cookies`







