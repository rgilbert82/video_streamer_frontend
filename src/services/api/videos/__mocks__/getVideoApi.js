export default (video_id) => {
  return new Promise((resolve, reject) => {
    const data = {
      video: { name: 'Video 1' },
      chat: { id: '1' }
    }

    resolve(data);
  });
}
