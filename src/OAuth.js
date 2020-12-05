
const youtube_API_Key = "AIzaSyAu6KcQ4lwLobUNuFVSkktCk_i2Chjda3I";
const client_id = "91645925090-tovf00ce60f85f9t3u39maruffk2ckst.apps.googleusercontent.com"


export const authenticate = () => {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }


export const loadClient = () => {
    gapi.client.setApiKey(`${youtube_API_Key}`);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.

export const execute = () => {
    return gapi.client.youtube.subscriptions.list({})
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: `${client_id}`});
  });
{/* <button onclick="authenticate().then(loadClient)">authorize and load</button>
<button onclick="execute()">execute</button> */}
