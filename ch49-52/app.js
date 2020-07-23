                // Question  1
        //function display() {
                //DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=1000,height=1000')
                //msg = "<b>First NAME: </b>" + document.regform.fname.value;"<br> <br>"
                //msg += "<b>Last NAME: </b>" + document.regform.lname.value;"<br> <br>"
                //msg += "<b>Country: </b>" + document.regform.country.value;"<br> <br>"
                //msg += "<b>Email: </b>" + document.regform.email.value;"<br> <br>"
                //msg += "<b>ADDRESS: </b>" + document.regform.address.value;"<br> <br>"
                //msg += "<b>PHONE: </b>" + document.regform.phone.value + "<br> <br>";
                //DispWin.document.write(msg);
        //}

        
                // Question  2
        //function readMore() {
        //    let dots = document.getElementById("dots");
        //    let moreText = document.getElementById("more");
        //    let btnText = document.getElementById("button");
        //    if (dots.style.display === "none") {
        //        dots.style.display = "inline";
        //        btnText.innerHTML = "Read more"; 
        //        moreText.style.display = "none";
        //    } else {
        //        dots.style.display = "none";
        //        btnText.innerHTML = "Read less"; 
        //        moreText.style.display = "inline";
        //    }
        //}


                //Question  3          
        // let rIndex,
        // table = document.getElementById("table");
 
        // function checkEmptyInput(){
        //         let isEmpty = false,
        //         fname = document.getElementById("fname").value,
        //         lname = document.getElementById("lname").value,
        //         email = document.getElementById("email").value,
        //         age = document.getElementById("age").value;

        //         if(fname === ""){
        //                 alert("Not Correct!!");
        //                 isEmpty = true;
        //         }
        //         else if(lname === ""){
        //                 alert("Not Correct!!");
        //                 isEmpty = true;
        //         }
        //         else if(email === ""){
        //                 alert("Not Correct!!");
        //                 isEmpty = true;
        //         }
        //         else if(age === ""){
        //                 alert("Not Correct!!");
        //                 isEmpty = true;
        //         }
        //         return isEmpty;
        // }
           
        // function addHtmlTableRow()
        // {
        //         if(!checkEmptyInput()){
        //                 let newRow = table.insertRow(table.length),
        //                 cell1 = newRow.insertCell(0),
        //                 cell2 = newRow.insertCell(1),
        //                 cell3 = newRow.insertCell(2),
        //                 cell4 = newRow.insertCell(3),
        //                 fname = document.getElementById("fname").value,
        //                 lname = document.getElementById("lname").value,
        //                 email = document.getElementById("email").value,
        //                 age = document.getElementById("age").value;
          
        //                 cell1.innerHTML = fname;
        //                 cell2.innerHTML = lname;
        //                 cell3.innerHTML = email;
        //                 cell4.innerHTML = age;
        //                 selectedRowToInput();
        //         }
        // }

        // function selectedRowToInput()
        // {
               
        //        for(let i = 1; i < table.rows.length; i++)
        //        {
        //            table.rows[i].onclick = function()
        //            {
        //              rIndex = this.rowIndex;
        //              document.getElementById("fname").value = this.cells[0].innerHTML;
        //              document.getElementById("lname").value = this.cells[1].innerHTML;
        //              document.getElementById("email").value = this.cells[2].innerHTML;
        //              document.getElementById("age").value = this.cells[3].innerHTML;
        //            };
        //        }
        //    }
        //    selectedRowToInput();
           
        //    function editHtmlTbleSelectedRow()
        //    {
        //        let fname = document.getElementById("fname").value,
        //            lname = document.getElementById("lname").value,
        //            email = document.getElementById("email").value,
        //            age = document.getElementById("age").value;
        //       if(!checkEmptyInput()){
        //        table.rows[rIndex].cells[0].innerHTML = fname;
        //        table.rows[rIndex].cells[1].innerHTML = lname;
        //        table.rows[rIndex].cells[2].innerHTML = email;
        //        table.rows[rIndex].cells[3].innerHTML = age;
        //      }
        // }
            
        // function removeSelectedRow()
        // {
        //        table.deleteRow(rIndex);
        //        // clear input text
        //        document.getElementById("fname").value = "";
        //        document.getElementById("lname").value = "";
        //        document.getElementById("email").value = "";
        //        document.getElementById("age").value = "";
        // }
       