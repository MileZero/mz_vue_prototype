import ConnectionOptions from '../local-connection.json';

export const getParams = (url) => {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
}

export const getOrg = async (orgId) => {
  try {
    let response = await(await fetch(`${ConnectionOptions.mvbUrl}/milevision/${orgId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
    })).json();
    return response;
  } catch (e) {
    return e;
  }
}

/** Calls mvb to authenticate and set cookie */
export const loginMvb = async (access_token, id_token, scope, token_type, state) => {
  const formBody = {
    access_token,
    id_token,
    scope,
    expires_in: 86400,
    token_type,
    state
  };
  const body = Object.keys(formBody).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(formBody[key]);
  }).join('&');
  
  try {
    let response = await(await fetch(`${ConnectionOptions.mvbUrl}/milevision/authenticate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'no-cors',
      body,
    })).json();
    return response;
  } catch (e) {
    return e;
  }
}

export const logoutMvb = async () => {
  let response = await fetch(`${ConnectionOptions.mvbUrl}/milevision/logout`,
  {
    method: 'GET',
    mode: 'no-cors',
  });
  return response;
}