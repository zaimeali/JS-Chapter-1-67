// 
// Chapters 58-67 (DOM)
// 


        // Question 1
    // part 1
    // let q1a1 = document.getElementById("main-content").children;

    // part 2
    // for(i = 0; i < q1a1.length; i++){
    //     document.write(`<p class='${q1a1[i].className}'>${q1a1[i].innerHTML}</p>`);
    //     console.log(`<p class='${q1a1[i].className}'>${q1a1[i].innerHTML}</p>`);
    // }

    // part 3
    // let q1a3 = document.getElementsByClassName('render');
    // for(i = 0; i < q1a3.length; i++){
    //     document.write(`<p>${q1a3[i].innerHTML}</p>`);
    //     console.log(`<p class='${q1a3[i].className}'>${q1a3[i].innerHTML}</p>`);
    // }

    // part 4
    // document.getElementById('first-name').value = "Abdul Raffay";

    // part 5
    // document.getElementById('last-name').value = "Rizwan";
    // document.getElementById('email').value = "zaimeali1997@gmail.com";



        // Question 2
    // part 1
    // let q2a1 = document.getElementById('form-content').nodeType;
    // document.getElementById('q2a1').innerHTML = `Node Type of id 'form-content' is ${q2a1}`;

    // part 2
    // let q2a2 = document.getElementById('lastName').nodeType;
    // document.getElementById('q2a2').innerHTML = `Node Type of id 'lastName' is ${q2a2}`;
    // let q2a2Child = document.getElementById('lastName').childNodes[0];
    // document.getElementById('q2a2Child').innerHTML = `Child Node of id 'lastName' is ${q2a2Child}`;
    
    // part 3
    // document.getElementById('lastName').innerHTML = "Rizwan";

    // part 4
    // let firstChild = document.getElementById('main-content').children[0];
    // let lastChild = document.getElementById('main-content').children[1];
    // document.write("First Child is ");
    // document.write("'", firstChild.innerHTML, "'");
    // console.log(firstChild);
    // document.write("<br>Last Child is ");
    // document.write("'", lastChild.innerHTML, "'");
    // console.log(lastChild);

    // part 5
    // let parent = document.getElementById('lastName').parentElement;
    // let parentContent = Array.prototype.slice.call(parent.children);
    // let indexNum = 0;
    // for(let i = 0; i < parentContent.length; i++){
    //     if(parentContent[i].id === 'lastName'){
    //         indexNum = i;
    //         break;
    //     }
    // }
    // document.write("Previous: ");
    // document.write(parentContent[indexNum - 1].innerHTML);
    // console.log(parentContent[indexNum - 1]);
    // document.write("<br>Next: ");
    // document.write(parentContent[indexNum + 1].innerHTML);
    // console.log(parentContent[indexNum + 1]);

    // Part 6
    let parentNode = document.getElementById('email').parentElement;
    let nType = document.getElementById('email').nodeType;
    document.write('Parent Node: ', parentNode);
    document.write('<br>Node Type: ', nType);


    
