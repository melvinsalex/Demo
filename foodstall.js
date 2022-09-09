food_name = [
    {
        food: "rava idly",
        foodRecipe: { step1: "Making Rava Dough", step2: "Making Rava Idly" }, price: 10
    },
    {
        food: "podi idly",
        foodRecipe: { step1: "Making Normal Idly", step2: "Adding Idayam Ginggely oil and podi in idly" }, price: 20
    },
    {
        food: "stuffed idly",
        foodRecipe: { step1: "Making stuffed dough", step2: "Making stuffed idly" }, price: 25
    }
]

put_chutney = [
    {
        chutney: "puthina chutney",
        foodRecipe: { step1: "Grinding mint with chillies and salt", step2: "Adding oil in pan and cooking chutney" }
    },
    {
        chutney: "coconut chutney",
        foodRecipe: { step1: "Grinding coconut with chillies and salt", step2: "Adding oil in pan and cooking chutney" }
    }
]

console.log('----Welcome To Melvin Idly Shop :)----')
console.log('--------------------------------------')
console.log('--MENU CARD--');
for (menuCard = 0; menuCard < food_name.length; menuCard++) {
    console.log('DISH-'+(Number(menuCard)+Number(1))+':-',(food_name[menuCard].food).toUpperCase());
}


// foodNeed=String(prompt('Which Idly do you Want?'))
foodNeed = 'stuffed idly'
function foodDetails(foodEnteredByUser) {
    return foodEnteredByUser
}

// idlyCount=string(prompt('How Many Do Idly You Want?'))
idlyCount = 4
function noOfIdly(CountOfIdly) {
    return CountOfIdly
}

function priceOfFood(CountOfIdly,foodType){
    for (toFindPrice = 0; toFindPrice < foodType.length; toFindPrice++) {
        if (foodDetails(foodNeed).toLowerCase() == foodType[toFindPrice].food) {
            priceOfYourFood = (CountOfIdly * (foodType[toFindPrice].price))
        }
    }
return priceOfYourFood
}



// chutneyNeed=String(prompt('Which Chutney do you Want?'))
chutneyNeed = 'coconut chutney'
function chutneyDetails(chutneyEnteredByUser) {
    return chutneyEnteredByUser
}


foodDetails(foodNeed)
function selectingAFood(foodType) {
    for (eachFoodType = 0; eachFoodType < foodType.length; eachFoodType++) {
        if (foodDetails(foodNeed).toLowerCase() == foodType[eachFoodType].food) {
            priceOfYourFood = (noOfIdly(idlyCount)) * (foodType[eachFoodType].price)
            console.log('Your Food Will Delivered In 10 seconds');
            console.log('STEP-1:-',(foodType[eachFoodType].foodRecipe.step1).toUpperCase())
            console.log('STEP-2:-',(foodType[eachFoodType].foodRecipe.step2).toUpperCase())
        }
    }
}

setTimeout(() => {
    console.log('-----------------------------------');
    console.log("MAKING OF IDLY STARTED");
    console.log('-----------------------------------');
    selectingAFood(food_name)
}, 4000)


function selectingAChutney(foodType) {
    // answerForAboveQuestion=String(prompt('Do You Need Chutney?'))
    answerForAboveQuestion = 'yes'
    if (answerForAboveQuestion.toLowerCase() == 'yes') {
        console.log('-----------------------------------');
        console.log("MAKING OF CHUTNEY STARTED");
        console.log('-----------------------------------');
        for (eachChutneyType = 0; eachChutneyType < foodType.length; eachChutneyType++) {
            if (chutneyDetails(chutneyNeed).toLowerCase() == foodType[eachChutneyType].chutney) {
                console.log('Your Food Will Delivered In 5 seconds');
                console.log('STEP-1:-',(foodType[eachChutneyType].foodRecipe.step1).toUpperCase())
                console.log('STEP-2:-',(foodType[eachChutneyType].foodRecipe.step2).toUpperCase())
            }
        };
    }
}

setTimeout(() => {
   
    selectingAChutney(put_chutney)
}, 5000)

function orderDetails(food, chutney, foodcount, prices) {
    arr = []
    const orderDetail = {
        FOOD   : food.toUpperCase(),
        CHUTNEY: chutney.toUpperCase(),
        COUNT  : foodcount,
        price  :prices
    }
    arr.push(orderDetail)
}
setTimeout(() => {
    console.log('-----------------------------------');
    console.log('THANKS FOR ORDERING')
    console.log('YOUR ORDER HAS BEEN PLACED..:)');
    console.log('YOUR ORDER DETAILS:-');
    orderDetails(foodDetails(foodNeed), chutneyDetails(chutneyNeed), noOfIdly(idlyCount),priceOfFood(idlyCount,food_name))
    console.log(arr);
}, 2000)