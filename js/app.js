'use strict';
let workHours=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let stores =[];

function cityShop(name, minCust , maxCust, averageCookies ){
this.name= name;
this.minCust =minCust;
this.maxCust=maxCust;
this.averageCookies=averageCookies;
this.CustomersNum=[];
this.averageCust=[];
this.total=0;

stores.push(this)
};
console.log(stores)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



cityShop.prototype.getCust=function() { 
    for (let i = 0; i <workHours.length; i++){

        this.CustomersNum.push(getRndInteger(this.minCust, this.maxCust));

    }

 }

 cityShop.prototype.getCookie= function () {
    for (let i = 0; i < this.CustomersNum.length; i++) {
      let  mult=this.CustomersNum[i] * this.averageCookies;
     mult=Math.floor(mult)
      this.averageCust.push(mult);
     this.total+=this.averageCust[i]
    }
}

let seattle = new cityShop('Seattle', 23, 65 , 6.3 );
console.log(seattle);
seattle.getCust();
seattle.getCookie();



let Tokyo =new cityShop('Tokyo', 3, 24, 1.2);
Tokyo.getCust();
Tokyo.getCookie();
console.log(Tokyo);

let Dubai=new cityShop('Dubai', 11, 38, 3.7);
Dubai.getCust();
Dubai.getCookie();
console.log(Dubai);

let Paris=new cityShop('Paris',20 ,38 ,2.3 );
Paris.getCust();
Paris.getCookie();
console.log(Paris);

let Lima=new cityShop('Lima', 2, 16 ,4.6 );
Lima.getCust();
Lima.getCookie();
console.log(Lima);




let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);


let headerHoures=[' ','6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Daily location total'];


//creat the header for the table:
 function makingHeader(){
let tr=document.createElement('tr')
table.appendChild(tr)

for(let i=0; i< headerHoures.length;i++){
    let th=document.createElement('th')
    tr.appendChild(th)
    th.textContent=headerHoures[i]
}
}

// creat the tr, td that has the nombers of cookies for all the stores 
cityShop.prototype.render= function(){
    let shopRow=document.createElement('tr')
    table.appendChild(shopRow)
    let td=document.createElement('td')
    shopRow.appendChild(td)
   td.textContent=this.name

    for(let i=0; i<workHours.length;i++){
       let cityRow=document.createElement('td')
       shopRow.appendChild(cityRow)
       cityRow.textContent=this.averageCust[i]
       
    }
    let dailyTotalTd= document.createElement('td')
    shopRow.appendChild(dailyTotalTd)
    dailyTotalTd.textContent=this.total
    
}
// creat footer 

//calling the functions
makingHeader();

seattle.render();
Tokyo.render();
Dubai.render();
Lima.render();
Paris.render()







function makingFooter(){
    let lastRow=document.createElement('tr')
    table.appendChild(lastRow);
    lastRow.textContent='total'
    var megaTotal = 0;
    for (let i = 0; i <workHours.length; i++) {
        let finalTotal;
        finalTotal=0;
        for(let j=0 ; j<stores.length ; j++ ){
            
            finalTotal+=stores[j].averageCust[i];
            megaTotal+=stores[j].averageCust[i];

          
        } 
        let totalFinal=document.createElement('td')
        lastRow.appendChild(totalFinal);
        totalFinal.textContent=finalTotal 
        }
        let megaTh=document.createElement('th')
        lastRow.appendChild(megaTh)
        megaTh.textContent=megaTotal
        
        
    }  
    makingFooter()



  //get element by id
    let storeForm= document.getElementById('storeForm');

    // event listner

    storeForm.addEventListener('submit' , accept)

// creat fun.

     function accept(event){
         event.preventDefault()
     

     console.log(event);

     let name=event.target.nameField.value;
     console.log(name);

     let minCust=parseInt(event.target.minCust.value);
     console.log(minCust)

     let maxCust= parseInt(event.target.maxCust.value);
     console.log(maxCust);
     let averageCookies= parseInt(event.target.averageCookies.value);
     console.log(averageCookies);

     let addedCity= new cityShop(name,minCust,maxCust,averageCookies);
     console.log(addedCity);

     table.textContent="";
     makingHeader();


     for(let i=0;i<stores.length;i++){

     stores[i].getCust();
     stores[i].getCookie();
     stores[i].render();
    console.log(stores[i]);

     }
     makingFooter();

     }
    //  makingHeader();

    //  for(let i=0;i<stores.length;i++){

    //  stores[i].getCust();
    //  stores[i].getCookie();
    //  stores[i].render();
    // console.log(stores[i]);

    //  }
    //  makingFooter();



    





































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
