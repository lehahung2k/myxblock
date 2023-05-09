// /* Javascript for MyXBlock. */
// function MyXBlock(runtime, element) {

//     function updateCount(result) {
//         $('.count', element).text(result.count);
//     }

//     var handlerUrl = runtime.handlerUrl(element, 'increment_count');

//     $('p', element).click(function(eventObject) {
//         $.ajax({
//             type: "POST",
//             url: handlerUrl,
//             data: JSON.stringify({"hello": "world"}),
//             success: updateCount
//         });
//     });

//     $(function ($) {
//         /* Here's where you'd do things on page load. */
//     });
// }
const data1= [
    {  "learnerID": "187405626","imageUrl":"../assets/images/image.jpg","name":"Nguyễn Thế Công","status": true,"cameraUrl":"../assets/images/video.mp4"},
     {  "learnerID": "001083012504","imageUrl":"../assets/images/image.jpg","name":"Vương Đình Chiểu","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "087094000606","imageUrl":"../assets/images/image.jpg","name":"NGÔ PHẠM THẾ DUY","status": false,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "001202004644","imageUrl":"../assets/images/image.jpg","name":"Vũ Hải Nam","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "035088011016","imageUrl":"../assets/images/image.jpg","name":"Vũ Hoàng Long","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "066202015229","imageUrl":"../assets/images/image.jpg","name":"Lê Ngọc Hòa","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "001203004917","imageUrl":"../assets/images/image.jpg","name":"Vũ Thanh Phương","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "030198001507","imageUrl":"../assets/images/image.jpg","name":"Lê Vũ Thu Hà","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "040204000039","imageUrl":"../assets/images/image.jpg","name":"Nguyễn Huy Khang","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "079069005306","imageUrl":"../assets/images/image.jpg","name":"Đỗ Huy Cường","status": true,"cameraUrl":"../assets/images/video.mp4"},
 {  "learnerID": "036189015147","imageUrl":"../assets/images/image.jpg","name":"Nguyễn Thị Thu Dung","status": true,"cameraUrl":"../assets/images/video.mp4"}
]



function renderTable(){
    // let data=JSON.stringify(data1);
    const tableData= document.getElementById('tableData');
    // for (person of data1){
    //     // console.log(person)
    //     const row= document.createElement('tr');
    //     const idCell = document.createElement('td');
    //     idCell.textContent = person.learnerID;
    //     row.appendChild(idCell);
    //     const nameCell = document.createElement('td');
    //     nameCell.textContent = person.name;
    //     row.appendChild(nameCell);
    //     const statusCell = document.createElement('td');
    //     statusCell.textContent = person.status;
    //     row.appendChild(statusCell);
    //     const cameraCell = document.createElement('td');
    //     cameraCell.textContent = person.cameraUrl;
    //     row.appendChild(cameraCell);
    //     tableData.appendChild(row);
    // }
    data1.forEach((item) => {
        tableData.innerHTML += `<tr>
        <td> ${item.learnerID} </td>
        <td> <img src=${item.imageUrl} alt="">${item.name}</td>
        <td>
            <p class="status ${item.status?"passed":"warnning"}">${item.status?"Passed":"Warnning"}</p>
        </td>
        <td>
        <video id="myVideo" width="150" height="80">
            <source src=${item.cameraUrl} type="video/mp4">
            Your browser does not support the video tag.
            </video>
            </td>
        </tr>`
    })
}
renderTable()
const myVideo = document.getElementById('myVideo');
const rows = document.querySelectorAll('#tableData tr');

// Thêm trình xử lý sự kiện onclick cho mỗi dòng
rows.forEach(function(row) {
  row.addEventListener('click', function() {
    // Xử lý sự kiện khi dòng được nhấn
    window.location.href="/scenario/myxblock.0/second_view/"
  });
});
// Play the video
myVideo.play();