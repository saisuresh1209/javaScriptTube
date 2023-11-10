var roomSpends = {
    tenants: "sai",
    rent : 13000,
    currentBill : 450,
    cook : 5000,
    owner : "satyanarayana",
    gendern : "male",
    spendsList: [],
    getSpends : function (elements) {
        this.spendsList.push(elements);
    },
    getSpendsCount: function () {
       return ` ${this.tenants} is spending money on ${this.spendsList} and how many items are ${this.spendsList.length} and total money spend is ${this.getSpendsBasedOnInput(this.spendsList)}`
    },
    getValueFromInput: function (input) {
        switch (input) {
            case "rent":
                return this.rent
            case "cook":
                return this.cook
            default:
                return 0;
        }
    },
    getSpendsBasedOnInput: function (spendsList) {
        console.log(typeof this.spendsList);
        let sum = 0;
        for(let i=0; i<spendsList.length; i++){
            sum = sum + this.getValueFromInput(spendsList[i])
        }
        return sum
    }
 };

 var getSpends = true;
 roomSpends.getSpends("rent");
 roomSpends.getSpends("cook");
 roomSpends.getSpends("petrol");
 roomSpends.getSpends("currentBill");
 console.log(roomSpends.getSpendsCount());