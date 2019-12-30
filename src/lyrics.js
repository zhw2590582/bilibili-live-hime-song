import dequal from 'dequal';

let lastId = -1;
let lastLyrics = [];
export default function(outer, inner, lyrics, id) {
    if (!dequal(id, lastId) || lyrics.length !== lastLyrics.length) {
        lastId = id;
        inner.innerHTML = lyrics
            .map(
                item =>
                    `<div data-time="${item.time}" class="bsh-lyrics-item ${
                        item.playing ? 'bsh-lyrics-playing' : ''
                    }">${item.text}</div>`,
            )
            .join('');
        outer.scrollTo(0, 0);
    }

    if (!dequal(lyrics, lastLyrics)) {
        lastLyrics = lyrics;
        const $oldPlaying = inner.querySelector('.bsh-lyrics-playing');
        if ($oldPlaying) {
            $oldPlaying.classList.remove('bsh-lyrics-playing');
        }

        const playing = lyrics.find(item => item.playing) || {};
        const $newPlaying = inner.querySelector(`[data-time="${playing.time}"]`);
        if (playing && $newPlaying) {
            $newPlaying.classList.add('bsh-lyrics-playing');
            outer.scrollTo(0, $newPlaying ? $newPlaying.offsetTop - 100 - outer.clientHeight / 2 : 0);
        }
    }
}
