function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var flag = true;
  function isNumber(n) {
    return !isNaN(n);
  }

  function showLatitudeError(msg) {
    var errMessage = document.querySelector('#error-latitude');
    errMessage.classList.remove('hidden');
    errMessage.innerHTML = msg;
  }

  function showLongitudeError(msg) {
    var errMessage = document.querySelector('#error-longitude');
    errMessage.classList.remove('hidden');
    errMessage.innerHTML = msg;
  }

  function hideLatitudeError(msg) {
    var errMessage = document.querySelector('#error-latitude');
    errMessage.classList.add('hidden');
    errMessage.innerHTML = '';
  }  

  function hideLongitudeError(msg) {
    var errMessage = document.querySelector('#error-longitude');
    errMessage.classList.add('hidden');
    errMessage.innerHTML = '';
  }

  var latitudeV = document.getElementById("latitude").value;
  var longitudeV = document.getElementById("longitude").value;
  hideLatitudeError();
  hideLongitudeError();
  if(!isNumber(latitudeV) || latitudeV < -90 || latitudeV > 90){
    flag = false;
    showLatitudeError("must be a valid Latitude (-90 to 90)");
  }
  if(!isNumber(longitudeV) || longitudeV < -180 || longitudeV > 180){
    flag = false;
    showLongitudeError("must be a valid Longitude (-180 to 180)");
  }
  if(flag){
    return true;
  }else{
    return false;
  }
  // console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
