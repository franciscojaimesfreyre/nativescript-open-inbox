var application = require("tns-core-modules/application");

var _sendIntentAndStartActivity = function () {
  var intent = new android.content.Intent(android.content.Intent.ACTION_MAIN);
  intent.addCategory(android.content.Intent.CATEGORY_APP_EMAIL);
  intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
  application.android.context.startActivity(intent);
};

exports.openInbox = function () {
  return new Promise(function (resolve, reject) {
    try {
      _sendIntentAndStartActivity();
      resolve();
    } catch (ex) {
      console.log("Error opening email inbox: " + ex);
      reject(ex);
    }
  });
};