const data=[
    {"time":0.01,"title":"Out Of Screen"},
    {"time":0.07,"title":"Voice Detection"},
    {
        "time":0.10,"title":"Ussing Paper"
    },
    {"time":0.05,"title":"Out Of Screen"},
    {"time":0.07,"title":"Voice Detection"},
    {
        "time":0.10,"title":"Ussing Paper"
    },
    {"time":0.05,"title":"Out Of Screen"},
    {"time":0.07,"title":"Voice Detection"},
    {
        "time":0.10,"title":"Ussing Paper"
    }
]
//  <img class="canvas-video" src="my-image.jpg" alt="Ảnh của tôi" width="100" height="56">
//        
function loadWarnningList(){
    let detailList = document.querySelector('.warnning-list-container .warnning-list-detail ');
    data.forEach((item,index)=>{
        detailList.innerHTML +=`<div class="list">
        <canvas class="canvas-video1" width="100" height="56"></canvas> 
        <div class="element">
           <div>
              <h3 class="timestamp">${item.time}</h3>
              <h3 class="list-title">${item.title}</h3>
           </div>
           <div>
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
           </div>
           
        </div>
        
     </div>`
    })
    
}
loadWarnningList()

function getImageByTimeStamp(){
    var video = document.getElementById('main-video');
    var canvas = document.getElementsByClassName('canvas-video1');
    // video.addEventListener('seeked', () => {
    //     const ctx = canvas.getContext('2d');
    //     ctx.drawImage(video,0,0, 100, 56);
    //     // Chuyển đổi canvas thành base64 và gán vào thuộc tính src của thẻ Image
    //     // img.src = canvas.toDataURL();
    //   });
    //   video.currentTime = 10;
    // video.currentTime=0;
    console.log(canvas)
    data.forEach((item,index)=>{
        video.addEventListener('seeked',()=>{
            const ctx = canvas[index].getContext('2d');
            ctx.drawImage(video,0,0, 100, 56);
        })
        video.currentTime=item.time
    })
    
}
getImageByTimeStamp()

let listDetail = document.querySelectorAll('.warnning-list-container .warnning-list-detail .list ');

listDetail.forEach(item =>{
   item.onclick = () =>{
    let video = document.getElementById('main-video');
      listDetail.forEach(remove =>{remove.classList.remove('active')});
      item.classList.add('active');
      let title = item.querySelector('.list-title').innerHTML;
      video.currentTime=(item.querySelector('.timestamp').innerHTML)*100;
      document.querySelector('.main-video-container #main-video').play();

      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});
const video = document.getElementById("main-video");
const progressBar = document.getElementById("progress-bar");

function updateProgress() {
  const percent = Math.floor((100 / video.duration) * video.currentTime);
  progressBar.value = percent;
}

video.addEventListener("timeupdate", updateProgress);

  
  // Handle click event on progress bar
  progressBar.addEventListener("click", (e) => {
    const percent = e.offsetX / progressBar.offsetWidth;
    video.currentTime = percent * video.duration;
  });
  
  // Play/pause video when progress bar is clicked
  progressBar.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
// const progress = document.querySelector(".progress");
// const progressBar = document.querySelector(".progress__filled");

// function handleProgress() {
//   const progressPercentage = (videoContainer.currentTime / videoContainer.duration) * 100;
//   progressBar.style.flexBasis = `${progressPercentage}%`;
// }

// function jump(e) {
//   const position = (e.offsetX / progress.offsetWidth) * videoContainer.duration;
//   videoContainer.currentTime = position;
// }

// videoContainer.addEventListener("timeupdate", handleProgress);
// progress.addEventListener("click", jump);
// let mousedown = false;
// progress.addEventListener("mousedown", () => (mousedown = true));
// progress.addEventListener("mousemove", (e) => mousedown && jump(e));
// progress.addEventListener("mouseup", () => (mousedown = false));
// const myVideo = document.querySelector('.main-video-container .main-video');
// const button =document.getElementById('button');


// button.addEventListener('click',()=> myVideo.currentTime=12);