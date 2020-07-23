// 
// Chapters 53-58 (EVENTS)
// 


        // Question 1
    // let arr = [
    //     {
    //         name: 'Salar de Uyuni, Bolivia',
    //         description: 'The world�s largest salt flat, it creates a mirror effect after the rain.',
    //         path: '1.jpg',
    //     },
    //     {
    //         name: 'Cinque Terre, Rio Maggiore, Italy',
    //         description: 'The 5 Lands of colored homes perched on a cliff by the sea.',
    //         path: '2.jpg',
    //     },
    //     {
    //         name: 'Blue Lagoon, Iceland',
    //         description: 'Natural thermal hot springs.',
    //         path: '3.jpg',
    //     },
    //     {
    //         name: 'Maldives',
    //         description: 'This archipelago is the ultimate tropical island paradise.',
    //         path: '4.png',
    //     },
    // ];

    // function modalScene(id){
    //     document.getElementById('modal').style.display = 'block';
    //     document.getElementById('modal-img').src = `./img/${arr[id].path}`;
    //     document.getElementById('modal-head').innerHTML = arr[id].name;
    //     document.getElementById('modal-desc').innerHTML = arr[id].description;
    // }

    // for(i = 0; i < arr.length; i++){
    //     document.getElementById(`img-${i}`).innerHTML = `<img onclick='modalScene(this.id)' height="350px" width="250px" id='${i}' src='./img/${arr[i].path}' alt='${arr[i].name}' />`;
    // }

    // function onClosedImagModal(){
    //     document.getElementById('modal').style.display = "none";
    // }


        // Question 2
    // function increaseFont(id){
    //     let currentSize = window.getComputedStyle(document.getElementById(id)).fontSize;
    //     let fSize = parseFloat(currentSize);
    //     document.getElementById(id).style.fontSize = (fSize + 10) + 'px';
    // }
    // function decreaseFont(id){
    //     let currentSize = window.getComputedStyle(document.getElementById(id)).fontSize;
    //     let fSize = parseFloat(currentSize);
    //     document.getElementById(id).style.fontSize = (fSize - 10) + 'px';
    // }