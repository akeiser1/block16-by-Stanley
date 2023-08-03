const songQueue = ["Protect Ya Neck", "Only Wanna Be With You", "Boom Boom", "Gooey"];

const addSongToQueue = (song) => {
  songQueue.push(song);
}

const removeFirstSongFromQueue = () => {
  // songQueue is empty!
  if (songQueue.length === 0) {
    console.log('Song queue is empty. Please add more songs');

    return;
  }

  return songQueue.shift();
}

const removeSongFromQueue = (song) => {
  const songIsInQueue = isSongInQueue(song);

  if (songIsInQueue) {
    for (let i = 0; i < songQueue.length; i++) {
      songQueue.splice(i, 1);
    }
  } else {
    console.log(`${song} is not in the queue`)
  }
}

const printQueue = () => {
  for (let i = 0; i < songQueue.length; i++) {
    const num = i + 1;
    const song = songQueue[i];

    console.log(`${num}. ${song}`);
  }
}

const isSongInQueue = (song) => {
  for (const currentSong of songQueue) {
    if (currentSong === song) {
      return true;
    }
  }
  
  return false;
}