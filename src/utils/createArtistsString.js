export const createArtistsString = artists => {
  return artists.map(artist => artist.name).join(", ");
};
