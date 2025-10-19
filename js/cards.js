let urlBase = "./icons";

let cards = [
    // {
    //     tile: {
    //         backgroundColor: "#000000",
    //         color: "#FFFFFF",
    //         href: "#",
    //         class: "card-padding-thin"
    //     },
    //     img: {
    //         src: `${urlBase}/icona.svg`,
    //         class: "card-img-contain card-img-light"
    //     },
    //     text: {
    //         name: "nome",
    //         class: "text-n"
    //     },
    //     // icon: {
    //     //     class: "fa-solid fa-home text-3"
    //     // }
    // }
    // {
    //     tile: {
    //         style: {
    //             backgroundColor: "#000000",
    //             color: "#FFFFFF",
    //         },
    //         href: "https://tv.apple.com/it",
    //         class: "card-padding-thin"
    //     },
    //     img: {
    //         src: `${urlBase}/apple-tv.svg`,
    //         class: "card-img-contain card-img-light"
    //     },
    //     text: {
    //         name: "Apple TV"
    //     },
    // },
    // {
    //     tile: {
    //         style: {
    //             backgroundColor: "#F47521",
    //             color: "#FFFFFF",
    //         },
    //         href: "https://crunchyroll.com/it/",
    //         class: "card-padding-thin"
    //     },
    //     img: {
    //         src: `${urlBase}/crunchyroll.svg`,
    //         class: "card-img-contain card-img-light"
    //     },
    //     text: {
    //         name: "Crunchyroll"
    //     },
    // },
    {
        tile: {
            style: {
                backgroundColor: "#000000",
                color: "#FFFFFF",
            },
            href: "https://streamingunity.co/",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/jack-rackham.svg`,
            class: "card-img-contain card-img-light"
        },
        text: {
            name: "Streaming Unity"
        },
    },
    {
        tile: {
            style: {
                backgroundColor: "#020C6F", //020C3F -> 020C6F
                color: "#FFFFFF",
            },
            href: "https://www.disneyplus.com/it-it/home",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/disney-plus.svg`,
            class: "card-img-contain card-img-light"
        },
        text: {
            name: "Disney+"
        },
    },
    {
        tile: {
            style: {
                backgroundColor: "#000000", //#E50914
                color: "#FFFFFF",
            },
            href: "https://netflix.com/",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/netflix.svg`,
            class: "card-img-contain"
        },
        text: {
            name: "Netflix"
        },
    },
    {
        tile: {
            style: {
                backgroundColor: "#00818A",
                color: "#FFFFFF",
            },
            href: "https://www.nowtv.it/",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/now-tv.svg`,
            class: "card-img-contain card-img-light"
        },
        text: {
            name: "Now TV"
        },
    },
    {
        tile: {
            style: {
                backgroundColor: "#00A8E1",
                color: "#FFFFFF",
            },
            href: "https://www.primevideo.com/",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/prime-video.svg`,
            class: "card-img-contain card-img-light"
        },
        text: {
            name: "Prime Video"
        },
    },
    {
        tile: {
            style: {
                backgroundColor: "#1DB954",
                color: "#FFFFFF",
            },
            href: "https://open.spotify.com/",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/spotify.svg`,
            class: "card-img-contain card-img-light"
        },
        text: {
            name: "Spotify"
        },
    },
    {
        tile: {
            style: {
                backgroundColor: "#FF0000",
                color: "#FFFFFF",
            },
            href: "https://youtube.com/",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/youtube.svg`,
            class: "card-img-contain"
        },
        text: {
            name: "Youtube"
        },
    },
    {
        tile: {
            style: {
                backgroundColor: "#FFFFFF",
                color: "#000000",
            },
            href: "https://www.google.it",
            class: "card-padding-thin"
        },
        img: {
            src: `${urlBase}/google.svg`,
            class: "card-img-contain"
        },
        text: {
            name: "Google"
        },
        // icon: {
        //     class: "fa-brands fa-google text-7"
        // }
    },
    // {
    //     tile: {
    //         style: {
    //             backgroundColor: "#E85E00",
    //             color: "#FFFFFF",
    //         },
    //         href: "javascript:alert('Still work in progress');",
    //         class: "card-padding-thin"
    //     },
    //     // img: {
    //     //     src: `${urlBase}/vlc.svg`,
    //     //     class: "card-img-contain"
    //     // },
    //     text: {
    //         name: "VLC",
    //         class: "text-7"
    //     },
    //     icon: {
    //         class: "fa-solid fa-circle-play text-9"
    //     }
    // },
    // {
    //     tile: {
    //         style: {
    //             background: "linear-gradient(0deg,rgba(3, 112, 164, 1) 0%, rgba(19, 52, 98, 1) 60%, rgba(20, 28, 52, 1) 95%)",
    //             color: "#FFFFFF",
    //         },
    //         href: "javascript:alert('Still work in progress');"
    //     },
    //     text: {
    //         name: "Steam",
    //         class: "text-4"
    //     },
    //     icon: {
    //         class: "fa-brands fa-steam text-7"
    //     }
    // },
    // {
    //     tile: {
    //         style: {
    //             backgroundColor: "#7b5bf5",
    //             color: "#FFFFFF",
    //         },
    //         href: "https://web.stremio.com/",
    //         class: "card-padding-thin"
    //     },
    //     img: {
    //         src: `${urlBase}/stremio.png`,
    //         class: "card-img-contain"
    //     },
    //     text: {
    //         name: "Stremio",
    //         class: "text-4"
    //     },
    // },
    // {
    //     tile: {
    //         style: {
    //             backgroundColor: "#000000",
    //             color: "#FFFFFF",
    //         },
    //         href: "javascript:alert('Still work in progress');"
    //     },
    //     text: {
    //         name: "Settings",
    //         class: "text-4"
    //     },
    //     icon: {
    //         class: "fa-solid fa-gear text-7"
    //     }
    // },
    // {
    //     tile: {
    //         style: {
    //             backgroundColor: "#000000",
    //             color: "#FFFFFF",
    //         },
    //         href: "javascript:alert('Still work in progress');"
    //     },
    //     text: {
    //         name: "Shutdown",
    //         class: "text-4"
    //     },
    //     icon: {
    //         class: "fa-solid fa-power-off text-7"
    //     }
    // },
];
