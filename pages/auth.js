import React from "react";

const clientID = process.env.NEXT_PUBLIC_CLIENT_ID_OAUTH;

function auth() {
  function oauth2SignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    // Create element to open OAuth 2.0 endpoint in new window.
    let form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    let params = {
      client_id: clientID,
      redirect_uri: "http:localhost:3000",
      scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
      state: "try_sample_request",
      include_granted_scopes: "true",
      response_type: "token",
    };

    // Add form parameters as hidden input values.
    for (let p in params) {
      let input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

  return (
    <div>
      <button onClick={() => oauth2SignIn()}>log in</button>
    </div>
  );
}

export default auth;
