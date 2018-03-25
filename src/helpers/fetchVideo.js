import Keys from '../config';

export function getVideo (keyWords) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${keyWords}&key=${Keys.youtubeKey}`, {
    method: 'GET',
  })
  .then((response) => {
    return response.json();
  })
  .catch((err) => {
    return err;
  })
}
