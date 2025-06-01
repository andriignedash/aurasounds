import moodPlaylists from './moodPlaylists';
import chakraPlaylists from './chakraPlaylists';

const allPlaylists = [...moodPlaylists, ...chakraPlaylists];

export function getPlaylistById(id) {
  return allPlaylists.find(p => p.id === id);
}
