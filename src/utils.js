export function getPlaylist() {
    const $list = document.querySelector('#g_playlist');
    if (!$list) return [];
    const $list_ul = $list.querySelector('.f-cb');
    return Array.from($list_ul.children).map(item => {
        return {
            id: Number(item.dataset.id),
            playing: item.classList.contains('z-sel'),
            song: item.children[1].innerText.trim(),
            singer: item.children[3].innerText,
            duration: item.children[4].innerText,
        };
    });
}

export function getLyrics() {
    const $list = document.querySelector('#g_playlist');
    if (!$list) return [];
    const $lyrics = $list.querySelector('.listlyric');
    return Array.from($lyrics.children).map(item => {
        return {
            playing: item.classList.contains('z-sel'),
            time: item.dataset.time,
            text: item.innerText.trim(),
        };
    });
}

export function getSongId() {
    const $list = document.querySelector('#g_playlist');
    if (!$list) return -1;
    const $sel = $list.querySelector('.f-cb .z-sel');
    return $sel ? Number($sel.dataset.id) : -1;
}