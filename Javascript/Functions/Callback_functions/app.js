//function add ( a,b){
    //return a + b;
//}

//console.log(add(2,4));

//function sayHello(){
//console.log("Hello");
//}
//console.log (sayHello());

function notifyUser(){
    console.log ("notifyUser function is called!");
}

function myAwesomeFunction(notifyUserCallback){
    console.log("Running myAwesomeFunction... doing complex tasks..");
    console.log("Complex task complete. I will notify the user");
    notifyUserCallback ();
}

myAwesomeFunction(notifyUser); 


function myAwesomeFunction(onCompleteCallback){
    console.log("Running myAweFunction ... doing complex tasks...");
    console.log("Complex task complete. I will notify the user");
    onCompleteCallback();
}

//myAwesomeFunction(function(){
   // console.log("notifyUser function was called!");
//});

//we can also use this function
myAwesomeFunction(()=>{
    console.log("notifyUser function was called!");
});

function myAwesomeFunction2 (onSuccessCallback, onFailureCallback){ //rename myAwesomeFunction to myAwesomeFunction2. 
    console.log ("Running myAwesomeFunction... doing complex tasks..");
    console.log ("Complex task complete. I will notify user");

    //randomly choose if success is true or false
    const success = Math.random() > 0.5;
    if (success){
        onSuccessCallback ({
            message: " This is the message of success",
        });
    } else { 
        onFailureCallback();
    }
    }
    myAwesomeFunction2 (
        (data) => {
            console.log ("It was successful:", data.message);
        },
        ()=> {
            console.log ("It failed :( ");
        }
    );

    function onAwesomeSuccess(data) {
        console.log ("It was sucessfull: ", data.message);
    }

    function onAwesomeFailure() {
        console.log ("It failed :( ");
    }
    myAwesomeFunction2 (onAwesomeSuccess, onAwesomeFailure);

    function add( a, b) {
        return a + b ;
    }

    function multiply (a, b){
        return a * b ;
    }

    function myCalculatorFunction(a, b, operationCallback) {
        console.log("Doing a calculation using the numbers: ", a,b);
        console.log(
            "We might have code saves the result to a log or a database"
        );

        return operationCallback (a, b);
    }

    const result = myCalculatorFunction (1,2, add);
    console.log(result); //this should output 3

    const result2 = myCalculatorFunction ( 2,3, multiply);
    console.log ( result2); // this should output :6

    //adding the two results together 
    const finalResult = myCalculatorFunction (result, result2, add);
    console.log ( finalResult); // this should output :9

   










