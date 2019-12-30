import './style.scss';
import './vidage.scss';
import Vidage from 'vidage';
import topbar from './topbar';
import lyrics from './lyrics';
import playlist from './playlist';
import config from './config';
import { getPlaylist, getLyrics, getSongId } from './utils';

const music163 = 'https://music.163.com/#/search/m/?s=';
if (window.location.href.startsWith(music163)) {
    window.addEventListener('load', () => {
        const $container = document.createElement('div');
        $container.classList.add('bilibili-song-hime');
        document.body.appendChild($container);
        $container.innerHTML = `
            <div class="vidage">
                <video id="vidage" class="vidage-video" preload="metadata" loop autoplay muted>
                    <source src="${config.videoBg}" type="video/mp4" />
                </video>
            </div>
            <div class="bsh-top">
                <div class="bsh-top-inner"></div>
            </div>
            <div class="bsh-lyrics">
                <div class="bsh-lyrics-outer">
                    <div class="bsh-lyrics-inner"></div>
                </div>
            </div>
            <div class="bsh-playlist">
                <div class="bsh-playlist-outer">
                    <div class="bsh-playlist-inner"></div>
                </div>
            </div>
        `;

        const $topbar = $container.querySelector('.bsh-top-inner');
        const $vidage = $container.querySelector('.vidage');
        const $video = $container.querySelector('#vidage');
        const $lyricsOuter = $container.querySelector('.bsh-lyrics-outer');
        const $lyricsInner = $container.querySelector('.bsh-lyrics-inner');
        const $playlistOuter = $container.querySelector('.bsh-playlist-outer');
        const $playlistInner = $container.querySelector('.bsh-playlist-inner');

        new Vidage('#vidage');
        topbar($topbar, config.topbar);

        $vidage.addEventListener('dragover', event => event.preventDefault());
        $vidage.addEventListener('drop', event => {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            if (file) {
                const canPlayType = $video.canPlayType(file.type);
                if (canPlayType === 'maybe' || canPlayType === 'probably') {
                    $video.src = URL.createObjectURL(file);
                }
            }
        });

        setInterval(() => {
            const $listBtn = document.querySelector('[title="播放列表"]');
            const $list = document.querySelector('#g_playlist');
            if (!$list && $listBtn) {
                $listBtn.click();
            } else {
                playlist($playlistOuter, $playlistInner, getPlaylist(), getSongId());
                lyrics($lyricsOuter, $lyricsInner, getLyrics(), getSongId());
            }
        }, 500);
    });
}
