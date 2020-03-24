/* 
function step1(cb) {
    setTimeout(function() {
      console.log('STEP 1 COMPLETE');
      cb()
    }, 750);
  }
  
function step2(cb) {
    setTimeout(function() {
      console.log('STEP 2 COMPLETE');
      cb()
    }, 500);
  }
      
function step3(cb) {
    setTimeout(function() {
      console.log('STEP 3 COMPLETE');
      cb()
    }, 250);
  }
  

step1(function(steps) {
    steps.forEach(function () {
        console.log(steps);
    })
});

step1(function () {
    step2(function () {
        step3(function () {
            console.log("Finished")
        })
    })
})
*/

class BankAccount {
    constructor(ownerName, balance, acctNum) {
      this.ownerName = ownerName;
      this.balance = balance;
      this.acctNum = acctNum;
    }
    deposit(sum) {
      this.balance = this.balance + sum
    }
    withdraw(sum) {
      this.balance = this.balance - sum
    }
}




