import axios from 'axios';

const REACT_APP_GITHUB_CLIENT_ID =
  process.env.REACT_APP_GITHUB_CLIENT_ID || '367cc0355423a81ae23e';

const REACT_APP_GITHUB_CLIENT_SECRET =
  process.env.REACT_APP_GITHUB_CLIENT_SECRET ||
  '8212ea4baeac2dff9e078b54a51b5ccbc8936f58';

export default axios.create({
  baseURL: 'https://api.github.com',
  params: {
    client_id: REACT_APP_GITHUB_CLIENT_ID,
    client_secret: REACT_APP_GITHUB_CLIENT_SECRET
  }
});
