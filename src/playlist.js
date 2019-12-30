import dequal from 'dequal';

let lastId = -1;
let lastPlaylist = [];
export default function(outer, inner, playlist, id) {
    if (!dequal(id, lastId) || playlist.length !== lastPlaylist.length) {
        lastId = id;
        inner.innerHTML = playlist
            .map(
                (item, index) =>
                    `<div data-id="${item.id}" class="bsh-playlist-item ${item.playing ? 'bsh-playlist-playing' : ''}">
                        <span class="bsh-playlist-index">${index + 1}.</span>
                        <span class="bsh-playlist-song">${item.song}</span>
                        <span class="bsh-playlist-singer">${item.singer}</span>
                    </div>`,
            )
            .join('');
        outer.scrollTo(0, 0);
    }

    if (!dequal(playlist, lastPlaylist)) {
        lastPlaylist = playlist;
        const $oldPlaying = inner.querySelector('.bsh-playlist-playing');
        if ($oldPlaying) {
            $oldPlaying.classList.remove('bsh-playlist-playing');
        }

        const playing = playlist.find(item => item.playing) || {};
        const $newPlaying = inner.querySelector(`[data-id="${playing.id}"]`);
        if (playing && $newPlaying) {
            $newPlaying.classList.add('bsh-playlist-playing');
            outer.scrollTo(0, $newPlaying ? $newPlaying.offsetTop - 100 : 0);
        }
    }
}
