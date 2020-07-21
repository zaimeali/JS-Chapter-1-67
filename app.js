// 
// Chapters 38-42 (Functions, Switch Statement, While.. Do While Loops)
// 

        // Question 1
    // function power(a, b){
    //     document.write("<h1>Chapters 38 - 42 | Question 1</h1>");
    //     let pow = 1;
    //     for(i = 0; i < b; i++){
    //         pow *= a;
    //     }
    //     document.write(`${a} raised to power ${b} is: <b>${pow}</b>`);
    // }
    // power(2, 3);


        // Question 2
    // function leap_year(year){
    //     document.write("<h1>Chapters 38 - 42 | Question 2</h1>");
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
    //     document.write("<h1>Chapters 38 - 42 | Question 3</h1>");
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
    //     document.write("<h1>Chapters 38 - 42 | Question 4</h1>");
    //     let result = average(s1, s2, s3);
    //     let resultPercent = percentage(s1, s2, s3);
    //     document.write(`<p><b>Average</b> is ${result}</p>`);
    //     document.write(`<b>Percentage</b> is ${resultPercent}%`);
    // }
    // mainFunction(67, 87, 98);


        // Question 5
    // function index_of(v, e){
    //     document.write("<h1>Chapters 38 - 42 | Question 5</h1>");
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
    //     document.write("<h1>Chapters 38 - 42 | Question 6</h1>");
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
    // function succession(s){
    //     document.write("<h1>Chapters 38 - 42 | Question 7</h1>");
    //     s = s.toLowerCase();
    //     s = s.split("");
    //     let vowel = ["a", "e", "i", "o", "u"];
    //     let isJoin = false;
    //     let vowelJoin = "";
    //     let j = 0;
    //     for(i = 0; i < s.length; i++){
    //         switch(s[i]){
    //             case "a":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     document.write(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "e":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     document.write(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "i":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     document.write(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "o":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     document.write(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "u":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     document.write(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //         }
    //     }
    // }
    // succession('Pleases read this application and give me gratuity');


        // Question 8
    // function countDecimals(value) {
    //     if(Math.floor(value) === value) return 0;
    //     return value.toString().split(".")[1].length || 0; 
    // }
    // function decimalCount(num){
    //     if(countDecimals(num) >= 1){
    //         return num.toFixed(2);
    //     }
    //     return num;
    // }
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    // function meters(km){
    //     return km * 1000;
    // }
    // function feet(km){
    //     return km * 3280.84;
    // }
    // function inches(km){
    //     return km * 39370.1;
    // }
    // function centimeters(km){
    //     return km * 100000;
    // }
    // function distance(city1, city2, km){
    //     document.write("<h1>Chapters 38 - 42 | Question 8</h1>");
    //     document.write(`<p>Distance from ${city1} to ${city2} is ${numberWithCommas(decimalCount(km))} in Kilometer</p>`);  
    //     document.write(`<p>Distance from ${city1} to ${city2} is ${numberWithCommas(decimalCount(meters(km)))} in Meter</p>`);
    //     document.write(`<p>Distance from ${city1} to ${city2} is ${numberWithCommas(decimalCount(feet(km)))} in Feet</p>`);
    //     document.write(`<p>Distance from ${city1} to ${city2} is ${numberWithCommas(decimalCount(inches(km)))} in Inch</p>`);
    //     document.write(`<p>Distance from ${city1} to ${city2} is ${numberWithCommas(decimalCount(centimeters(km)))} in Centimeter</p>`);
    // }
    
    // distance("Karachi", "Lahore", 1211.9);


        // Question 9
    // function overtimePay(hrs, overHrWork){
    //     document.write("<h1>Chapters 38 - 42 | Question 9</h1>");
    //     if(hrs > 40){   
    //         return `Overtime Pay: ${overHrWork * 12.00}`
    //     }
    //     return `You haven't done work more than 40 hours`;
    // }
    // document.write(`<p>${overtimePay(41, 2)}</p>`);


        // Question 10
    // function denomination(amount){
    //     document.write("<h1>Chapters 38 - 42 | Question 10</h1>");
    //     let hundred = parseInt(amount / 100);
    //     let fifty = parseInt((amount % 100) / 50);
    //     let ten = parseInt(((amount % 100) % 50) / 10);
    //     document.write(`<p>You will have ${hundred} hundred notes ${fifty} fifty notes, ${ten} ten notes</p>`);
    // }
    // denomination(+prompt("Enter Amount to Withdraw"));



// ========================================================================================================

// 
// Chapters 43-48 (Events)
// 

        // Question 1
    // document.write("<h1>Chapters 43 - 48 | Question 1</h1>");
    // document.write("<button onclick='alert(`You Clicked on a Link`)'>Alert Box</button>");


        // Question 2
    // document.write("<h1>Chapters 43 - 48 | Question 2</h1>");
    // let mobiles = [
    //     {
    //         'name': 'iPhone XS',
    //         'image': 'https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhoneXS-b.jpg'
    //     },
    //     {
    //         'name': 'Nokia 9',
    //         'image': 'https://www.whatmobile.com.pk/admin/images/Nokia/Nokia9b.jpg'
    //     },
    //     {
    //         'name': 'Samsung S11',
    //         'image': 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS20-b.jpg'
    //     },
    //     {
    //         'name': 'Infinix Hot 8',
    //         'image': 'https://www.whatmobile.com.pk/admin/images/Infinix/InfinixHot8-b.jpg'
    //     }
    // ];
    // for(let i = 0; i < mobiles.length; i++){
    //     document.write("<div style='width: 24%; float: left; text-align: center;'>");
    //         document.write(`<button style='border: none;' onclick='alert("You Clicked on Mobile: ${mobiles[i].name}")'>`);
    //             document.write(`<img src='${mobiles[i].image}'>`);
    //             document.write(`<p style='text-align: center;'>${mobiles[i].name}</p>`);
    //         document.write("</button>");
    //     document.write("</div>");
    // }


        // Question 3
    document.write("<h1>Chapters 43 - 48 | Question 3</h1>");
    let student = [
        {
            'id': 0,
            'name': 'Jhone',
            'class': 10,
            'isDelete': false
        },
        {
            'id': 1,
            'name': 'Doe',
            'class': 9,
            'isDelete': false
        },
        {
            'id': 2,
            'name': 'Mark',
            'class': 10,
            'isDelete': false
        },
        {
            'id': 3,
            'name': 'James',
            'class': 8,
            'isDelete': false
        },
    ];

    function updateTable(id){
        console.log(id);
        student[id].isDelete = !student[id].isDelete;
        printTable();
    }

    function printTable(){
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let Index = document.createElement("td");
        let Name = document.createElement("td");
        let Class = document.createElement("td");
        let Button = document.createElement("td");
        for(i = 0; i < student.length; i++){
            if(!student[i].isDelete){
                // Index.innerHTML = student[i].id;
                // tr.appendChild(Index);
                // Name.innerHTML = student[i].name;
                // tr.appendChild(Name);
                // Class.innerHTML = student[i].class;
                // tr.appendChild(Class);
                // Button.innerHTML = "Delete";
                // tr.appendChild(Button);
                // tbody.appendChild(tr);


                //         table.appendChild(`
                //             <tr>
                //                 <td>${student[i].id}</td>
                //                 <td>${student[i].name}</td>
                //                 <td>${student[i].class}</td>
                //                 <td>
                //                     <button onclick='updateTable(${student[i].id})'>
                //                         Delete
                //                     </button>
                //                 </td>
                //             </tr>
                //         `);
                        // document.write("<tr>");
                        //     document.write(`<td>${student[i].id}</td>`);
                        //     document.write(`<td>${student[i].name}</td>`);
                        //     document.write(`<td>${student[i].class}</td>`);
                        //     document.write(`<td><button onclick='updateTable(${student[i].id})'>Delete</button></td>`);
                        // document.write("</tr>");
            }
        }
        document.getElementById("studentList").appendChild(tbody);
    }
    document.write("<table id='studentList'>");
        document.write(
            "<thead><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr></thead>"
        );
    printTable();
    document.write("</table>")