//Step 1
var CarVisitor = function()
{
    var visit = function(carVariable)
    {
        //do some operations on carVariable
    }
}

var TruckVisitor = function()
{
    var visit = function(truckVariable)
    {
        //do some operations on carVariable
    }
}

var MonsterTruckVisitor = function()
{
    var visit = function(MonsterTruckVariable)
    {
        //do some operations on carVariable
    }
}

//Step 2
var carVariable = function(){
    var seats = 5;
    var doors = 4;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}

var truckVariable = function(){
    var towPackage = true;
    var doors = 2;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}

var MonsterTruckVariable = function(){
    var looksLikeADragon = true;
    var doors = 1.5;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}

//Step 3
var CarVisitor = function()
{
    this.visit = function(car)
    {
        if(car.seats > 2)
        {
            console.log('this is clearly a car for old people');
        }
        else
        {
            console.log('My bet is this car has at least 2 cylinders');
        }
    }
}

var TruckVisitor = function()
{
    this.visit = function(truckVar)
    {
        if(truckVar.towPackage)
        {
            console.log('we need to buy a boat')
        }
    }
}

var MonsterTruckVisitor = function()
{
    this.visit = function(monsterTruckVar)
    {
        if(monsterTruckVar.looksLikeADragon)
        {
            console.log('that is a badass monster truck')
        }
        else
        {
            console.log('loser')
        }
    }
}

//Step 4
var myCar = new carVariable();
myCar.seats = 2;
myCar.accept(new CarVisitor());

var myMonsterTruck = new MonsterTruckVariable();
myMonsterTruck.looksLikeADragon = false;
myMonsterTruck.accept(new MonsterTruckVisitor());

var myCar2 = new carVariable();
myCar2.seats = 2;
myCar.accept(new MonsterTruckVariable()); //this will fail because the visitor is not expecting a car