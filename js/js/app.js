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
  Total:0,
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
     this.Total+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Tokyo)
Tokyo.getRandomcookis()
Tokyo.averageCust()


let cook=document.getElementById
('cook')
let Th2element=document.createElement("h2")
cook.appendChild(Th2element);
Th2element.textContent=Tokyo.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let tulelement = document.createElement("ul");
cook.appendChild(tulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let tlielement =document.createElement("li")
    tulelement.appendChild(tlielement);
    tlielement.textContent=`${workHour[i]} ${Tokyo.avaregCustprHor[i]} cookies  `

}
let TotalElement=document.createElement("li");
ulelement.appendChild(TotalElement);
TotalElement.textContent=`total=${Tokyo.Total}cookies`





let Dubai={
   shopName: 'Dubai',
    minHour:11,
    maxHour:36,
    avarge:3.7,
   randomCust:[],
  avaregCustprHor:[],
  dtotal:0,
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
     this.dtotal+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Dubai);
Dubai.getRandomcookis()
Dubai.averageCust()


let dubai=document.getElementById
('dubai')
let dh2element=document.createElement("h2")
dubai.appendChild(dh2element);
dh2element.textContent=Dubai.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let dulelement = document.createElement("ul");
dubai.appendChild(dulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let dlielement =document.createElement("li")
    dulelement.appendChild(dlielement);
    dlielement.textContent=`${workHour[i]} ${Dubai.avaregCustprHor[i]} cookies  `

}
let dtotalElement=document.createElement("li");
dulelement.appendChild(dtotalElement);
dtotalElement.textContent=`total=${Dubai.total}cookies`





let Paris={
   shopName: 'Paris',
    minHour:20,
    maxHour:38,
    avarge:2.3,
   randomCust:[],
  avaregCustprHor:[],
  ptotal:0,
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
     this.ptotal+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Paris);
Paris.getRandomcookis()
Paris.averageCust()


let paris=document.getElementById
('paris')
let ph2element=document.createElement("h2")
paris.appendChild(ph2element);
ph2element.textContent=Paris.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let pulelement = document.createElement("ul");
paris.appendChild(pulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let plielement =document.createElement("li")
    pulelement.appendChild(plielement);
    plielement.textContent=`${workHour[i]} ${Seattle.avaregCustprHor[i]} cookies  `

}
let ptotalElement=document.createElement("li");
pulelement.appendChild(ptotalElement);
ptotalElement.textContent=`total=${Paris.ptotal}cookies`







let Lima={
   shopName: 'Lima',
    minHour:2,
    maxHour:16,
    avarge:4.6,
   randomCust:[],
  avaregCustprHor:[],
  ltotal:0,
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
     this.ltotal+=mult

        console.log(this.avaregCustprHor[i])
    }

    
}
}
console.log(Lima);
Lima.getRandomcookis()
Lima.averageCust()


let lima=document.getElementById
('lima')
let lh2element=document.createElement("h2")
lima.appendChild(lh2element);
lh2element.textContent=Lima.shopName
//console.log(parent);
////let mainDiv=document.getElementById("Seattle");
//et test =mainDiv.createElement("h2");

let lulelement = document.createElement("ul");
lima.appendChild(lulelement);
//mainDiv.appendChild(ulelement)

for(let i=0;i<workHour.length;i++){
    let llielement =document.createElement("li")
    lulelement.appendChild(llielement);
    llielement.textContent=`${workHour[i]} ${Lima.avaregCustprHor[i]} cookies  `

}
let ltotalElement=document.createElement("li");
lulelement.appendChild(ltotalElement);
ltotalElement.textContent=`total=${Lima.total}cookies`













