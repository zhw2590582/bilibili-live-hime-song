import './style.scss';
import './vidage.scss';
import Vidage from 'vidage';
import topbar from './topbar';
import lyrics from './lyrics';
import playlist from './playlist';
import config from './config';
import { getPlaylist, getLyrics, getPlayingSong } from './utils';

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
            <div class="bsh-info">
                <div>切换歌曲：#切歌</div>
                <div>点播歌曲：#点歌 + 空格 + 歌名</div>
            </div>
            <div class="bsh-notices"></div>
        `;

        const $topbar = $container.querySelector('.bsh-top-inner');
        const $vidage = $container.querySelector('.vidage');
        const $video = $container.querySelector('#vidage');
        const $notices = $container.querySelector('.bsh-notices');
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
                const playingSong = getPlayingSong();
                playlist($playlistOuter, $playlistInner, getPlaylist(), playingSong.id);
                lyrics($lyricsOuter, $lyricsInner, getLyrics(), playingSong.id);
            }
        }, 200);

        function notice(text) {
            const { children } = $notices;
            if (children.length > 5) {
                const child = children[0];
                child.innerText = text;
                $notices.appendChild(child);
            } else {
                $notices.insertAdjacentHTML('beforeend', `<div class="bsh-notice-item">${text}</div>`);
            }
        }

        window.addEventListener('message', event => {
            const { cmd, info } = event.data;
            if (cmd === 'DANMU_MSG') {
                const macth = info[1].match(/\s*#\s*([^\s]+)(\s+(.+))*/i);
                const type = macth[1];
                const song = macth[2];
                const uname = info[2][1];

                if (type === '切歌') {
                    const $next = document.querySelector('[title="下一首(ctrl+→)"]');
                    $next.click();
                    setTimeout(() => {
                        const playingSong = getPlayingSong();
                        notice(`${uname} 切歌成功：${playingSong.singer} -《${playingSong.song}》`);
                    }, 500);
                }

                if (type === '点歌' && song) {
                    const $iframe = document.querySelector('#g_iframe').contentDocument;
                    const $input = $iframe.querySelector('#m-search-input');
                    const $search = $iframe.querySelector('[title="搜索"]');
                    $input.value = song.trim();
                    $search.click();
                    setTimeout(() => {
                        const $add = $iframe.querySelector('[title="添加到播放列表"');
                        if ($add) {
                            $add.click();
                            setTimeout(() => {
                                if (document.querySelector('.m-vipguide-modal')) {
                                    document.querySelector('.m-vipcashier-title-close').click();
                                    notice(`${uname} 点歌失败：版权歌曲`);
                                } else {
                                    const last = getPlaylist().pop();
                                    notice(`${uname} 点歌成功：${last.singer} -《${last.song}》`);
                                }
                            }, 500);
                        } else {
                            notice(`${uname} 点歌失败：未找到歌曲`);
                        }
                    }, 500);
                }
            }
        });
    });
}
