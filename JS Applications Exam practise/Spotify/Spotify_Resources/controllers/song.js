import extend from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        create(ctx) {
            extend(ctx)
                .partial('../views/song/create.hbs')
        },
        allSongs(ctx) {
            models.song.getAll().then(r => {
                let songs = r.docs.map(d => { return { ...d.data(), id: d.id, isAuthor: d.data().organizer === sessionStorage.getItem('email') } });
                let currentUser = sessionStorage.getItem('email');
                songs.sort((a, b) => (a.organizer !== currentUser || b.organizer !== currentUser) || b.likes - a.likes)

                ctx.songs = songs || {};
                extend(ctx).
                    partial('../views/song/allSongs.hbs');
            })
                .catch(e => toastr.error(e))
        },
        mySongs(ctx) {
            models.song.getAll().then(r => {
                let songs = r.docs.map(d => { return { ...d.data(), id: d.id } });
                songs = songs.filter(s => s.organizer === sessionStorage.getItem('email'));
                songs.sort((a, b) => b.likes - a.likes || b.listen - a.listen);
                ctx.songs = songs || {};
                extend(ctx).
                    partial('../views/song/mySongs.hbs');
            })
                .catch(e => toastr.error(e))
        }
    },
    post: {
        create(ctx) {
            const { title, artist, imageURL } = ctx.params;

            const song = {
                title,
                artist,
                imageURL,
                organizer: sessionStorage.getItem('email'),
                likes: 0,
                listen: 0
            }

            models.song.create(song)
                .then(r => {
                    extend(ctx)
                        .then(c => {
                            toastr.success('Song created successfully.');
                            this.redirect('/allSongs');
                        });
                })
                .catch(e => toastr.error(e));
        },
        async like(ctx) {
            const id = ctx.params.id;
            try {
                await models.song.get(id)
                    .then(r => {
                        const { title, artist, imageURL, organizer, likes, listen } = r.data();

                        const song = {
                            title,
                            artist,
                            imageURL,
                            organizer,
                            likes: Number(likes) + 1,
                            listen
                        }

                        models.song.update(id, song);
                    })

                extend(ctx).then(r => {
                    this.redirect('/allSongs');
                    toastr.success('Liked!');
                })

            } catch (e) {
                toastr.error(e);
            }
        },
        async listen(ctx) {
            const id = ctx.params.id;
            let songName = '';
            try {
                await models.song.get(id)
                    .then(r => {
                        const { title, artist, imageURL, organizer, likes, listen } = r.data();

                        songName = title;
                        const song = {
                            title,
                            artist,
                            imageURL,
                            organizer,
                            likes,
                            listen: Number(listen) + 1
                        }

                        return models.song.update(id, song);
                    })

                extend(ctx)
                    .then(c => {
                        toastr.success(`You just listened ${songName}`);
                        this.redirect('/allSongs');
                    })
            } catch (e) {
                toastr.error(e)
            }
        }
    },
    delete: {
        async delete(ctx) {
            const id = ctx.params.id;

            try {
                await models.song.delete(id);

                extend(ctx)
                    .then(c => {
                        toastr.success('Song removed successfully!');
                        this.redirect('/allSongs')
                    });

            } catch (e) {
                toastr.error(e)
            }



        }
    }
};