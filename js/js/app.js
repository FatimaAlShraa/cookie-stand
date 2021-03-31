'use strict';
let workHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let shops = [];

function Cityshop(shopName, minHour, maxHour, avarge,total, getRandomcookis, averageCust) {
    this.shopName = shopName,
    this.minHour = minHour,
        this.maxHour = maxHour,
        this.avarge = avarge,
        this.randomCust = [],
        this.avaregCustprHor = [],
        this.total = 0,


        this.getRandomcookis = this.getRandomcookis /* function () {
       for(let i=0; i<=workHour.length;i++){
           this.randomCust.push (Math.floor(Math.random() *
           (this.maxHour - this.minHour)) + this.minHour);
           console.log(this.randomCust[i]);
       } ;
   },*/


    this.averageCust = this.averageCust
    /* function () {
        for(let i=0;i<workHour.length;i++){
         let mult= this.avarge*this.randomCust[i] 
         mult=Math.floor(mult)
         this.avaregCustprHor.push(`${mult}`)
         this.total+=mult
    
            console.log(this.avaregCustprHor[i])
        }*/
    shops.push(this)

}

//console.log(Seattle);
//Seattle.getRandomcookis()
//Seattle.averageCust()




Cityshop.prototype.getRandomcookis = function () {
    for (let i = 0; i <= workHour.length; i++) {
        this.randomCust.push(Math.floor(Math.random() *
            (this.maxHour - this.minHour)) + this.minHour);
        console.log(this.randomCust[i]);
    };
}

Cityshop.prototype.averageCust = function () {
    for (let i = 0; i < workHour.length; i++) {
        let mult = this.avarge * this.randomCust[i]
        mult = Math.floor(mult)
        this.avaregCustprHor.push(`${mult}`)
        this.total += mult

        console.log(this.avaregCustprHor[i])


    }
    
}

let seattle = new Cityshop('seattle',23, 65, 6.3);
let Tokyo = new Cityshop('Tokyo',3, 24, 1.2);
let Dubai = new Cityshop('Dubai',11, 38, 3.7);
let Paris = new Cityshop('Pris',20, 38, 2.3);
let Lima = new Cityshop('lima',2, 16, 4.6);


seattle.getRandomcookis();
Tokyo.getRandomcookis();
Dubai.getRandomcookis();
Paris.getRandomcookis();
Lima.getRandomcookis();

let parent = document.getElementById("parent");
let table = document.createElement('table');
parent.appendChild(table);
let headingRow = document.createElement('tr');
table.appendChild(headingRow);
let heading = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total']

for (let i = 0; i < heading.length; i++) {
    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = heading[i];



}


Cityshop.prototype.render=function(){
    //for(let i=0;i<shops.length ; i++){
    let shopRow=document.createElement('tr');
    table.appendChild(shopRow);
    let nameData=document.createElement('td');
    shopRow.appendChild(nameData);
    nameData.textContent= this.shopName

    for(let i=0;i<workHour.length ; i++){
        let cookie=document.createElement('td')
        shopRow.appendChild(cookie)
        cookie.textContent=this.randomCust[i]


      }  //console.log('hello ',shops[i]);
    let dialyTotal=document.createElement('td')
    shopRow.appendChild(dialyTotal)
    dialyTotal.textContent=this.total
}
seattle.render()
Tokyo.render()
Dubai.render()
Paris.render()
Lima.render()



function makingFooter(){
    let lastRow=document.createElement('tr')
    table.appendChild(lastRow);
    lastRow.textContent='total'
    for (let i = 0; i <workHour.length; i++) {
        let finalTotal
        let sumTotal=0;
        for(let j=0 ; j<shops.length ; j++ ){
            finalTotal=0;
            finalTotal+=shops[j].randomCust[i];
            sumTotal+=shops[j].randomCust[i];

          
        } 
        let totalFinal=document.createElement('td')
        lastRow.appendChild(totalFinal);
        totalFinal.textContent=finalTotal 
        }
        let megaTh=document.createElement('th')
        lastRow.appendChild(megaTh)
        megaTh.textContent=sumTotal
        
        
    }  
    makingFooter()
    





































/*let parent=document.getElementById
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
  Ttotal:0,
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
     this.Ttotal+=mult

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
let TtotalElement=document.createElement("li");
tulelement.appendChild(TtotalElement);
TtotalElement.textContent=`total=${Tokyo.Ttotal}cookies`





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
dtotalElement.textContent=`total=${Dubai.dtotal}cookies`





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
ltotalElement.textContent=`total=${Lima.ltotal}cookies`}*/
