const URL = "https://api.spotify.com/v1";

export const getTopTracks = ({ limit, offset, time_range }) => {
  const qs = buildQS({ limit, offset, time_range });

  return fetch(`${URL}/me/top/tracks${qs ? qs : ""}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });
};

export const getTopArtists = ({ limit, offset, time_range }) => {
  const qs = buildQS({ limit, offset, time_range });

  return fetch(`${URL}/me/top/artists${qs ? qs : ""}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });
};

const buildQS = options => {
  let qs = "";

  Object.keys(options).forEach(key => {
    qs += `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}&`;
  });

  qs = qs.substring(0, qs.length - 1);

  return `?${qs}`;
};
