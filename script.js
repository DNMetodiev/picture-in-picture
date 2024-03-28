const videoElement = document.getElementById('video')
const button = document.getElementById('button')


//Prompt to select media stream, pass to video element, then play 
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    console.log('error', error);
  }
}

button.addEventListener('click', async () => {
  // Disable Button when clicked
  button.disabled = true;
  //Start pucture in picture
  await videoElement.requestPictureInPicture();
  // Reset the button 
  button.disabled = false;
});

//On Load 
selectMediaStream();