

var _determineAvailabilityAndOpenInbox = function () {
  var url = NSURL.URLWithString("message://");
  if(UIApplication.sharedApplication.canOpenURL(url)){
    UIApplication.sharedApplication.openURL(url);
    return true;
  }
  return false;
};

exports.openInbox = function () {
  return new Promise(function (resolve, reject) {
    try {
      _determineAvailabilityAndOpenInbox() 
        ? resolve() 
        : reject("Could not open message type URL");
    } catch (ex) {
      console.log("Error opening email inbox: " + ex);
      reject(ex);
    }
  });
};