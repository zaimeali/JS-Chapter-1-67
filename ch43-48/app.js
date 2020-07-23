// 
// Chapters 43-48 (Events)
// 

        // Question 1
    // document.write("<button onclick='alert(`You Clicked on a Link`)'>Alert Box</button>");


        // Question 2
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
    // let student = [
    //     {
    //         'id': 0,
    //         'name': 'Jhone',
    //         'class': 10,
    //         'isDelete': false
    //     },
    //     {
    //         'id': 1,
    //         'name': 'Doe',
    //         'class': 9,
    //         'isDelete': false
    //     },
    //     {
    //         'id': 2,
    //         'name': 'Mark',
    //         'class': 10,
    //         'isDelete': false
    //     },
    //     {
    //         'id': 3,
    //         'name': 'James',
    //         'class': 8,
    //         'isDelete': false
    //     },
    // ];

    // function updateTable(id){
    //     console.log(id);
    //     student[id].isDelete = !student[id].isDelete;
    //     printTable();
    // }

    // function printTable(){
    //     let tbody = document.createElement("tbody");
    //     let tr = document.createElement("tr");
    //     let Index = document.createElement("td");
    //     let Name = document.createElement("td");
    //     let Class = document.createElement("td");
    //     let Button = document.createElement("td");
    //     for(i = 0; i < student.length; i++){
    //         if(!student[i].isDelete){
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
            // }
        // }
        // document.getElementById("studentList").appendChild(tbody);
    // }
    // document.write("<table id='studentList'>");
    //     document.write(
    //         "<thead><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr></thead>"
    //     );
    // printTable();
    // document.write("</table>")


        // Question 4
    // function changeImage(){
    //     document.getElementById('imgHover').src = "./img/img2.png";
    //     document.getElementById('imgHover').alt = "image 2";
    // }
    // function overOut(){
    //     document.getElementById('imgHover').src = "./img/img1.jpg";
    //     document.getElementById('imgHover').alt = "image 1";
    // }


        // Question 5
    // function increase(){
    //     let value = +document.getElementById('counter').innerHTML;
    //     value += 1;
    //     document.getElementById('counter').innerHTML = value;
    // }
    // function decrease(){
    //     let value = +document.getElementById('counter').innerHTML;
    //     value -= 1;
    //     document.getElementById('counter').innerHTML = value;
    // }