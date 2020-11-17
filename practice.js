// class Order{
//     constructor(customerRawOrder){
//         this.cassette = customerRawOrder[0].includes("cassettes")?customerRawOrder[0][1]:4
//         this.total5value = this.getValueOfDenomination(customerRawOrder,"5")
//         this.total10value = this.getValueOfDenomination(customerRawOrder,"10")
//         this.total20value = this.getValueOfDenomination(customerRawOrder,"20")
//         this.total50value = this.getValueOfDenomination(customerRawOrder,"50")
//         this.total5note = this.total5value/5 
//         this.total10note = this.total10value/10
//         this.total20note = this.total20value/20
//         this.total50note = this.total50value/50
     
//     }
//     getValueOfDenomination(customerRawOrder, denomination){
//         const el = customerRawOrder.filter(element=>element[0]===denomination)
//         return el[0]===undefined?undefined:el[0][1]
//     }
// }

// const order = new Order(
//     [
//       ["cassettes", 4],
//       ["5", 10000],
//       ["10", 10000],
//       ["20", 10000],
//       ["50", 10000]
//     ]
// )    

// console.log(getValueOfDenomination(order,"5"))


function similarLicensePlates(plate1, plate2){
    let arrayOfEquivalent=
    [
        ["0","O","Q"],
        ["1","I","T"],
        ["2","Z"],
        ["8","B"]
    ]

    let newArr1 = plate1.replace(/\s/g, '');
    let newArr2 = plate2.replace(/\s/g, '');
    if(newArr1[0]===newArr2[0]){
        return true
    }else {
        return arrayOfEquivalent.filter(fucntion(el){
            return el.includes(newArr1[0],newArr2[0])
        })
    }
}
module.exports = similarLicensePlates







