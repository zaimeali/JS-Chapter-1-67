// 
// Chapters 38-42 (Functions, Switch Statement, While.. Do While Loops)
// 

        // Question 1
    // function power(a, b){
    //     let pow = 1;
    //     for(i = 0; i < b; i++){
    //         pow *= a;
    //     }
    //     document.write(`${a} raised to power ${b} is: <b>${pow}</b>`);
    // }
    // power(2, 3);


        // Question 2
    // function leap_year(year){
    //     let isLeap = "";
    //     if(year % 4 === 0){
    //         isLeap = `${year} is a Leap Year`;
    //     }
    //     else{
    //         isLeap = `${year} is <b>not</b> a Leap Year`;
    //     }
    //     document.write(isLeap);
    // }
    // let year = +prompt("Enter year");
    // leap_year(year);


        // Question 3
    // function S_calc(a, b, c){
    //     return ((a + b + c)/2);
    // }
    // function area(a, b, c){
    //     let S = S_calc(a, b, c);
    //     let area = (S * (S-a) * (S-b) * (S-c)) * 0.5;
    //     document.write(`Area is: ${area}`);
    // }
    // area(2, 3, 2);


        // Question 4
    // function average(s1, s2, s3){
    //     return ((s1 + s2 + s3) / 3);
    // }
    // function percentage(s1, s2, s3){
    //     return (
    //         ((s1 + s2 + s3) / 300) * 100
    //     );
    // }
    // function mainFunction(s1, s2, s3){
    //     let result = average(s1, s2, s3);
    //     let resultPercent = percentage(s1, s2, s3);
    //     document.write(`<p><b>Average</b> is ${result}</p>`);
    //     document.write(`<b>Percentage</b> is ${resultPercent}%`);
    // }
    // mainFunction(67, 87, 98);


        // Question 5
    // function index_of(v, e){
    //     for(i = 0; i < v.length; i++){
    //         if(e === v[i]){
    //             return i;
    //         }
    //     }
    //     return null;
    // }
    // let word = "Zaime";
    // let ele = "m";
    // let iO = index_of(word, ele);
    // document.write(iO ? `"${ele}" found at <b>${iO}</b> in "${word}"` : "Nothing Found");


        // Question 6
    // function delete_vowel(s){
    //     s = s.toLowerCase()
    //     let vowel = ["a", "e", "i", "o", "u"];
    //     s = s.split("");
    //     s = s.filter((value, index, arr) => {
    //         return !vowel.includes(value);
    //     });
    //     s = s.join(" ");
    //     document.write(s);
    // }
    // delete_vowel("I am 22 year old");

        // Question 7
    function succession(s){
        s = s.toLowerCase();
        s = s.split("");
        let vowel = ["a", "e", "i", "o", "u"];
        let isJoin = false;
        let vowelJoin = "";

        for(i = 0; i < s.length; i++){
            // if(isJoin){
            //     vowelJoin = "";
            //     isJoin = false;
            // }
            if(vowel.includes(s[i])){
                vowelJoin += s[i];
                isJoin = true;
            }
            if(vowelJoin.length > 1){
                console.log(vowelJoin);
                vowelJoin = "";
            }
        }
    }
    succession("Pleases read this application and give me gratuity");