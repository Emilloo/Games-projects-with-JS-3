// let car = ["mercedes","BMW","Ford",2016,{name:"Emil"}]
// console.log(car);

// let fruit = []

// fruit[0] = "alma";
// fruit[1] = "armud";
// fruit[5] = "nar";
// fruit[2] = "alca"
// fruit[3] = "banan";
// fruit[fruit.length] = "limon";
// fruit[fruit.length] = "mandalin";
// fruit[fruit.length - 1] = 'apensin'
// console.log(fruit);
// console.log(fruit.length);

// ==========================================================================

//Push
//Push metodu deyerin(datanin) uzunlugunu qaytarir
// let fruits = ["nar","alma","armud","alca"];
// fruits.push("limon");
// let fruit = fruits.push("banan");  
// console.log(fruits);
// console.log(fruit);



// =================================================================================================


//Pop
// AArray-in birinci melumatini ve heminn melumati qaytarir
// let cars = ["mercedees","Bmw","Toyota","lada"]
// let masin = cars.pop()
// let auto = cars.pop()
// console.log(cars);
// console.log(masin,auto);

//=============================================================================================

//shift
// Array-in birinci melumatini silir  ve heminn melumati qaytarir

// let adlar = ["Emil","Togrul","Ayaz","Tural"]
// let men = adlar.shift();
// let yaxsiOglan = adlar.shift();
// console.log(adlar);
// console.log(yaxsiOglan,men);

//==============================================================================================


//unshift

// let qizAdlari = ["Leyla","Gunay","Aytac","Aydan"];
// qizAdlari.unshift("Gulay");
// let qiz = qizAdlari.unshift("Ayten");
// console.log(qizAdlari);
// console.log(qiz);

//==============================================================================================

// camelCase = menimAdGunum;
//PascalCase = MenimAdGunum;
//kabab-case = menim_ad_gunum

//Splice

// let a = ["bizon","saqqiz","un","sud","qatiq"];
// let silinenMallar = a.splice(2,2)
// console.log(a,silinenMallar);

//============================================================================================

//slice
// let mehsullar = a.slice(1,4);
// console.log(mehsullar);

//===========================================================================================

// concat
// yazilanlari birlesdirir
// let rusiya = ["moskva","piter","varonej"];
// let azerbaycan = ["baki","mingecevir","qebele"];
// let seherler = azerbaycan.concat(rusiya);
// console.log(seherler);

//=====================================================================================

//SPLIT
// yazilanlari birlesdirir
// let seherler2 = [...azerbaycan,...rusiya]
// console.log(seherler2);
//===============================================================================

//Join
//herflerin arasina simvollar ve ya bosluq qoyur
// let herfler = ["s","a","l","a","m"];
// let soz = herfler.join('')
// console.log(soz);

// let fName = 'Elicabbar';
// let dersAd = fName.split('').reverse().join('')
// console.log(dersAd);

//======================================================================================================

// let olkeler = ["rus","aze","eng","abs"];
// let tersOlkeler = olkeler.reverse();
// console.log(tersOlkeler);

//=============================================================================================================

//Flat
// let arr = [3,4,5,["salam","sagol"], [true,false]];
// let flat = arr.flat()
// console.log(flat);

//=============================================================================================================

// reqemlerin 2 qatin gorsedir

// let nums = [1,2,3,4,5,6,7];
// for(let i = 0; i < nums.length; i++){
// console.log(nums[i] * 2);
// }

//=======================================================================================================

// foreach
// nums.forEach(n => console.log(n));

//========================================================================================================

// arraylarin sadece adini gorsedir
// let products = [
//     {ad: "Iphone", price: 3000},
//     {ad: "samsung", price: 1000},
//     {ad: "Nokia", price: 300},
// ]

// products.forEach(element => {   console.log(element.ad)});

//===============================================================================================================================

//Map
// Obyektin deyerlerini gorsedir ve qaytarir
// let products = [
//     { ad: "Iphone", price: 3000 },
//     { ad: "samsung", price: 1000 },
//     { ad: "Nokia", price: 300 },
// ]

// let newProducts = products.map(function(n){
//     return {ad: n.ad, qiymet: n.price * 2}

// }) 

// let newProduct = products.map((n) => {
//     return {
//         ad: n.ad,
//         qiymet: n.price * 2
//     }
// })

// console.log(newProduct);

//=======================================================================================================

//Sort
// herfleri sozleri sirasi ile duzur

// let names = ["miki","cavid","adam"]
// const reqem = number.sort();
// console.log(reqem);

// reqemleri sira ile duzur
// let number = [2,3,4,5,6,45,34]; 
// const numlar = number.sort(function(a, b){
    //     return a - b;
    // })
    
    // console.log(numlar);=
    
//=========================================================================================================
    
// Filter
// arraylerin icindeki deyeri filterleyir

// let phones = [
//     {
//         name: "Iphone",
//         model: "Iphone 15",
//         ram: 4,
//     },
//     {
//         name: "Iphone",
//         model: "Iphone X",
//         ram: 6
//     },
//     {
//         name: "Samsung",
//         model: "Galaxy S24 Ultra",
//         ram: 6
//     }
// ]
// let tel = phones.filter((n) => {
//     return n.ram > 4
// })

// console.log(tel);

//===========================================================================================

//Some

// let phones = [
//     {
//         name: "Iphone",
//         model: "Iphone 15",
//         ram: 4,
//     },
//     {
//         name: "Iphone",
//         model: "Iphone X",
//         ram: 6
//     },
//     {
//         name: "Samsung",
//         model: "Galaxy S24 Ultra",
//         ram: 8
//     }
// ]

// let tel = phones.some((n) => n.ram == 6)
// console.log(tel);

//Every

// let tel2 = phones.every((n) => n.ram == 6)
// console.log(tel2);

//==================================================================================================

//Reduce
// arraylari toplayib ust-uste gelir
// let nums = [15,24,13,35];
// let count = 0;
// nums.forEach((n) =>{count = count + n;})
// console.log(count);

// let summ = nums.reduce((prev, next) => prev + next,0)
// console.log(summ);

// ===================================================================================================

// let fruitBasket = ["alma","armud","nar","alma","qarpiz","alma","nar","alca"]


// let say = {
//     alma: 3,
//     armud: 1,
//     nar: 2,
//     alca: 1
// }

// let count = fruitBasket.reduce((tally,fruit) => {
//     tally[fruit] = (tally[fruit] || 0) + 1;
//     return tally
// }, {})
// console.log(count);


// let tally = {}
// tally['alma'] = (tally['alma'] || 0) + 1;
// tally['alrmud'] = (tally['armud'] || 0) + 1;
// tally['nar'] = (tally['nar'] || 0) + 1;
// tally['alma'] = (tally['alma'] || 0) + 1;

// console.log(tally);




