const { createApp } = Vue;
const lang = "it-IT";

createApp({
    data() {
        return {
            cards,
            lang,
            searchstring: "",
            results: [],
            apiUrl: "https://api.themoviedb.org/3",
            imageUrl: "https://image.tmdb.org/t/p/w500/",
            options: {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDk3OWE4YWI3YzEyYTc1MWYxZjVhZTZjMzM4ZGU0ZCIsInN1YiI6IjY1NmRiZjhkNGE0YmY2MDEwMzUxMTc0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NQ5B3w-U4U5Uwg3nCOX7asEO-psqD_ken-kkZrHFZSA'
                },
            },
            // ToDo: recupera lista dei provides italiani, poi lascia scegliere l'utente
            // fetch('https://api.themoviedb.org/3/watch/providers/movie?language=it-IT&watch_region=IT', options)
            //     .then(response => response.json())
            //     .then(response => { x = response; })
            availableProviders: [
                { condition: "always", provide_name: "Streaming Unity", url: "https://streamingunity.co/search?q=%query%", logo_path: "https://streamingunity.co/img/logo.png" },
                { condition: "empty", provide_name: "Google", url: "https://www.google.com/search?q=dove+guardare+%query%", logo_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/240px-Google_%22G%22_logo.svg.png" },
                { provider_id: 337, provider_name: "Disney Plus", url: "https://www.google.com/search?q=%query%+site:disneyplus.com" },
                { provider_id: 8, provider_name: "Netflix", url: "https://www.netflix.com/search?q=%query%" },
                { provider_id: 2, provider_name: "Apple TV", url: "https://tv.apple.com/search?term=%query%" },
                { provider_id: 350, provider_name: "Apple TV Plus", url: "https://tv.apple.com/search?term=%query%" },
                { provider_id: 3, provider_name: "Google Play Movies", url: "https://play.google.com/store/search?q=%query%&c=movies&hl=it" },
                { provider_id: 39, provider_name: "Now TV", url: "https://www.google.com/search?q=%query%+site:nowtv.it" },
                { provider_id: 222, provider_name: "Rai Play", url: "https://www.raiplay.it/ricerca.html?q=%query%" },
                { provider_id: 188, provider_name: "YouTube Premium", url: "https://www.youtube.com/results?search_query=%query%" },
                { provider_id: 68, provider_name: "Microsoft Store", url: "https://www.microsoft.com/it-it/search/shop/movies?q=%query%" },
                { provider_id: 119, provider_name: "Amazon Prime Video", url: "https://www.primevideo.com/-/it/search/ref=atv_nb_sug?phrase=%query%" },
                { provider_id: 10, provider_name: "Amazon Video Fallback?", url: "https://www.primevideo.com/-/it/search/ref=atv_nb_sug?phrase=%query%" },
                { provider_id: 531, provider_name: "Paramount Plus", url: "https://www.primevideo.com/-/it/search/ref=atv_nb_sug?phrase=%query%" },
                { provider_id: 582, provider_name: "Paramount+ Amazon Channel", url: "https://www.primevideo.com/-/it/search/ref=atv_nb_sug?phrase=%query%" },
                { provider_id: 584, provider_name: "Discovery+ Amazon Channel", url: "https://www.primevideo.com/-/it/search/ref=atv_nb_sug?phrase=%query%" },
                { provider_id: 283, provider_name: "Crunchyroll", url: "https://www.crunchyroll.com/it/search?q=%query%" },
            ],
            hiddenProviders: [
                { provider_id: 29, provider_name: "Sky Go", url: "https://www.google.com/search?q=skygo" },
                { provider_id: 359, provider_name: "Mediaset Infinity", url: "https://www.google.com/search?q=%query%+site:mediasetinfinity.mediaset.it" },
                { provider_id: 109, provider_name: "Timvision", url: "https://www.google.com/search?q=%query%+site:timvision.it" },
                { provider_id: 110, provider_name: "Infinity+", url: "https://www.google.com/search?q=%query%+site:mediasetinfinity.mediaset.it" },
                { provider_id: 35, provider_name: "Rakuten TV" },
                { provider_id: 11, provider_name: "MUBI" },
                { provider_id: 40, provider_name: "Chili" },
                { provider_id: 641, provider_name: "Nexo Plus" },
                { provider_id: 100, provider_name: "GuideDoc" },
                { provider_id: 414, provider_name: "VVVVID" },
                { provider_id: 190, provider_name: "Curiosity Stream" },
                { provider_id: 475, provider_name: "DOCSVILLE" },
                { provider_id: 521, provider_name: "Spamflix" },
                { provider_id: 538, provider_name: "Plex" },
                { provider_id: 546, provider_name: "WOW Presents Plus" },
                { provider_id: 551, provider_name: "Magellan TV" },
                { provider_id: 554, provider_name: "BroadwayHD" },
                { provider_id: 559, provider_name: "Filmzie" },
                { provider_id: 444, provider_name: "Dekkoo" },
                { provider_id: 567, provider_name: "True Story" },
                { provider_id: 569, provider_name: "DocAlliance Films" },
                { provider_id: 315, provider_name: "Hoichoi" },
                { provider_id: 300, provider_name: "Pluto TV" },
                { provider_id: 677, provider_name: "Eventive" },
                { provider_id: 688, provider_name: "ShortsTV Amazon Channel" },
                { provider_id: 692, provider_name: "Cultpix" },
                { provider_id: 701, provider_name: "FilmBox+" },
                { provider_id: 1726, provider_name: "Infinity Selection Amazon Channel" },
                { provider_id: 1727, provider_name: "CG Collection Amazon channel" },
                { provider_id: 1728, provider_name: "iWonder Full Amazon channel" },
                { provider_id: 1729, provider_name: "Full Action Amazon Channel" },
                { provider_id: 1730, provider_name: "Cine Comico Amazon Channel" },
                { provider_id: 201, provider_name: "MUBI Amazon Channel" },
                { provider_id: 588, provider_name: "MGM Amazon Channel" },
                { provider_id: 1771, provider_name: "Takflix" },
                { provider_id: 309, provider_name: "Sun Nxt" },
                { provider_id: 445, provider_name: "Classix" },
                { provider_id: 1796, provider_name: "Netflix basic with Ads" },
                { provider_id: 1853, provider_name: "Paramount Plus Apple TV Channel " },
                { provider_id: 1862, provider_name: "UAM TV" },
                { provider_id: 1894, provider_name: "CineAutore Amazon Channel" },
                { provider_id: 1895, provider_name: "Anime Generation Amazon Channel" },
                { provider_id: 1896, provider_name: "Raro Video Amazon Channel" },
                { provider_id: 1897, provider_name: "MIDNIGHT FACTORY Amazon Channel" },
                { provider_id: 1715, provider_name: "Shahid VIP" },
            ]
        }
    },
    methods: {
        search() {
            this.results = [];

            if (this.searchstring.length >= 3) {
                fetch(`${this.apiUrl}/search/multi?query=${encodeURIComponent(this.searchstring)}&include_adult=true&language=it-IT&page=1&region=it-IT`, this.options)
                    .then(r => r.json())
                    .then(r => {
                        this.results = r.results.filter(item => item.media_type !== "person"); //filtra le "person"
                    }).then(r => {
                        this.getProviders();
                    }).catch(err => {
                        console.error(err)
                    });
            }
        },
        clear() {
            this.results = [];
            this.searchstring = "";
        },
        getProviders() {
            this.results.forEach(element => {
                fetch(`${this.apiUrl}/${element.media_type}/${element.id}/watch/providers`, this.options)
                    .then(r => r.json())
                    .then(r => {
                        let i = this.results.findIndex(x => x.id == element.id);
                        if (this.results[i]) {
                            this.results[i].providers = this.filterProviders(r.results.IT);
                        }
                    }).catch(err => {
                        console.error(err);
                    });
            });
        },
        filterProviders(providers) {
            let result = {
                flatrate: []
            };

            if (providers) {

                if (providers.flatrate) {

                    let flatrate = providers.flatrate.filter(provider => {
                        return this.availableProviders.find(x => x.provider_id == provider.provider_id);
                    }).map(provider => {
                        provider.logo_path = this.imageUrl + provider.logo_path;
                        provider.url = this.availableProviders.find(x => x.provider_id == provider.provider_id).url;
                        return provider;
                    });
                    result.flatrate = flatrate;
                }

                // ToDo: riabilitare con opzione?
                // if (providers.rent) {
                //     let rent = providers.rent.filter(provider => {
                //         return this.availableProviders.includes(provider.provider_id);
                //     });
                //     result.rent = rent;
                // }
                // if (providers.buy) {
                //     let buy = providers.buy.filter(provider => {
                //         return this.availableProviders.includes(provider.provider_id);
                //     });
                //     result.buy = buy;
                // }
            }
            
            //Always
            result.flatrate.push(...this.availableProviders.filter(x => x.condition == "always"));

            //Fallback
            if (result.flatrate.length == 1) {
                // result.flatrate = this.availableProviders.filter(x => x.condition == "empty");
                result.flatrate.push(...this.availableProviders.filter(x => x.condition == "empty"));
            }


            return result;
        },
        parseUrl(url, name) {
            return url.replace("%query%", encodeURIComponent(name));
        },
        parseDate(date) {
            return new Date(date).getFullYear();
        },
        parseStars(stars) {
            // arrotonda all'intero più vicino (9.4 -> 9.0, 9.5 -> 10)
            // dividi per due (9.0 -> 4.5, 10 -> 5)
            // risultato: 9.4 -> 4.5 stelle, 10 -> 5 stelle
            return Math.round(stars) / 2;
        },
        parseDescription(desc, size) {
            size--; //prendi in considerazione il "." che dovremo aggiungere in chiusura
            if (desc.length <= size) {
                return desc; //già ok
            }

            desc = desc.slice(0, desc.lastIndexOf("."));

            while (desc.length > size) {
                //se ci sono ancora "." per cui spezzare la stringa
                if (desc.lastIndexOf(".") > 0) {
                    desc = desc.slice(0, desc.lastIndexOf("."));
                } else {
                    desc = "Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatul.";
                    break; //abbiamo finito
                }
            }
            return desc + ".";
        }
    }
}).mount('#app');