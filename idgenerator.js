    // // // ID Card
function getvalues(currentId) {
    let selectedField = document.getElementById(currentId);
    let fieldValue = selectedField.value;
    console.log(fieldValue);
    document.getElementById(currentId + "-view").innerHTML = fieldValue;
  }
let inputImg = document.querySelector('#myfile');
let showImage = document.querySelector('#show-image');

inputImg.addEventListener('change', function(event) {
    var tempUrl = URL.createObjectURL(event.target.files[0])
    showImage.setAttribute('src', tempUrl)

})
