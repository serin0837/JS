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
//answer
function similarLicensePlates(plate1, plate2){
    const pairGroup = [["0", "O", "Q"], ["1", "I", "T"], ["2", "Z"], ["5", "S"], ["8", "B"]]; 

      const plate1Arr = plate1.split("").filter(str => /\S/.test(str));
      const plate2Arr = plate2.split("").filter(str => /\S/.test(str));

    if (plate1Arr.length !== plate2Arr.length) return false;

    for (let i = 0; i < plate1Arr.length; i++) {
        if (plate1Arr[i] === plate2Arr[i]) continue; 
            const group = pairGroup.filter(group => group.includes(plate1Arr[i])); 
            if (group.length === 0) return false;
            if (![plate1Arr[i], plate2Arr[i]].every(char => group[0].includes(char))) return false; 
        }
        return true;
};
console.log(similarLicensePlates("1II", "III"));
module.exports = similarLicensePlates







