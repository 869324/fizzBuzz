console.clear();

for (let i = 1; i <= 100; i++) {

    let string = i;

    if (i % 3 == 0 && i % 5 == 0) {
        string = string + " Fizz Buzz"
    }

    else if (i % 3 == 0 && i % 5 != 0) {
        string = string + " Fizz"
    }

    else if (i % 3 != 0 && i % 5 == 0) {
        string = string + " Buzz"
    }

    console.log(string);

}

