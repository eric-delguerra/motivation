<template>
    <div class="container background page">
        <v-btn class="ma-2 backHome" color="accent" elevation="3" style="z-index: 20!important; left: 2rem"
               :to="{path: '/'}" fixed>
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <div class="is-mobile is-top-right" style="margin-top: 3rem">
            <h1 v-if="enterpriseName !== 'LinkedIn' || enterpriseName !== ''" class="is-size-2 font-weight-bold font-italic column  titre"
                :style="{color: fontColors, textShadow: fontBorder}">Bonjour <h1
                    class="underline is-size-2 font-weight-bold font-italic"
                    :style="{backgroundImage: underlineColor, color: fontColors, textShadow: fontBorder}">
                {{enterpriseName}}</h1></h1>
        </div>
        <template v-if="window.width > 800">
            <v-container>
                <div class="container columns" style="width: 80vw">
                    <div class="column is-2 menuSerious" style="transition-duration: 0.5s"
                         :class="paragraf.active === 1 ? 'selectedMenu' : null"
                         v-for="(paragraf, i)  in paragrafs"
                         @click="[whichInfo = i, menu(i)]">
                        <p>{{paragraf.paragrafTitle}}</p>
                    </div>
                </div>
                <div id="content" class="container" style="margin: 15vh">
                    <div v-for="(paragraf, i) in paragrafs" v-if="whichInfo === i" style="height: 10vh">
                        <p>
                            {{paragraf.paragrafContent}}
                        </p>
                        <v-icon
                                class="next"
                                color="error"
                                @click="nextParagraf()"
                        v-if="whichInfo < 4">mdi-arrow-down-bold</v-icon>
                    </div>
                </div>
            </v-container>

        </template>
        <template v-else>
            <v-card
                    class="mx-auto"
                    max-width="375"
            >
                <v-card
                        dark
                        flat
                >
                    <v-img
                            src="../assets/seriously.jpg"
                            gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                            aspect-ratio="2.3"
                    >
                        <v-container class="fill-height">
                            <v-row align="center">
                                <strong class="display-4 font-weight-regular mr-6"/>
                            </v-row>
                        </v-container>
                    </v-img>
                </v-card>
                <v-card-text class="py-0">
                    <v-timeline
                            align-top
                            dense
                    >
                        <v-timeline-item
                                :color="paragraf.color"
                                small
                                v-for="paragraf in paragrafs"
                                :key="i"
                        >
                            <v-row class="pt-1">
                                <v-col>
                                    <strong>{{paragraf.paragrafTitle}}</strong>
                                    <div class="caption">{{paragraf.paragrafContent}}</div>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </template>
        <div class="text-center" style="padding: 3rem; cursor: pointer" @click="sendMail">
            <v-icon class="mx-2 paragrafAnim" fab dark large color="secondary"
                    style="animation-delay: 0.3s;">mdi-email
            </v-icon>
            <br>
            <p class="secondary--text" style="padding-top: 1rem">Contactez-moi</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Serious",
        data() {
            return {
                randomColor: '',
                whichInfo: 0,
                enterpriseName: '',
                paragrafs: [
                    {
                        color: 'secondary',
                        delay: 1,
                        align: 'center',
                        paragraf: '" Je recherche une alternance "',
                        paragrafTitle: 'Présentation',
                        paragrafContent: 'Je m\'appelle Eric, je vis sur Grenoble et je recherche une entreprise pour une future alternance en Service Mobile et Interface Nomade.',
                        col: 5,
                        active: 1
                    },
                    {
                        color: 'accent',
                        delay: 4,
                        align: 'center',
                        paragraf: '" Je suis actuellement en formation "',
                        paragrafTitle: 'Aujourd\'hui',
                        paragrafContent: 'Je suis actuellement en formation au Campus Numérique in The Alps, j\'ai commencé cette formation en fin d\'année 2018 et je suis en ce moment en alternance chez BSM / IZYFLOW à Montbonnot jusqu\'à ma soutenance, le 17/18 juin 2020.',
                        col: 7,
                        active: 0

                    },
                    {
                        color: 'info',
                        delay: 8,
                        align: 'center',
                        paragraf: '" Une montée en compétences "',
                        paragrafTitle: 'Je souhaite',
                        paragrafContent: 'Aujourd\'hui j\'aimerais continuer de me former au métier du Web et me spécialiser en intégration mobile. Une année suplémentaire me permettrait une montée en compétences et une réelle validation de celles-ci. A l\'avenir j\'aimerais accorder de mon temps et transmettre ce que j\'ai appris à de nouvelles personnes.',
                        col: 5,
                        active: 0
                    },
                    {
                        color: 'accent',
                        delay: 12,
                        align: 'center',
                        paragraf: '" Ma curiosité m\'a permis également d\'en apprendre plus "',
                        paragrafTitle: 'Mes compétences',
                        paragrafContent: 'Je suis plutôt à l\'aise en Back-End, j\'aimerais acquérir de fortes compétences en intégration par la suite. Je suis à l\'aise en Javascript ainsi que VueJS. Pendant mon alternance je travaille sur une application en PHP Slim et VueJS. Ma formation m\'a également permis d\'appréhender d\'autres langages comme le C# et JAVA et ma curiosité d\'en apprendre plus en C# avec le logiciel Unity. La mise en place de tests (unitaires et fonctionnels) est aussi présente dans mon cursus mais nous n\'avons pas eu de module important pour les approfondir.',
                        col: 7,
                        active: 0
                    },

                    {
                        color: 'secondary',
                        delay: 18,
                        align: 'center',
                        paragraf: 'Je suis très assidu dans ce que je fais',
                        paragrafTitle: 'Pourquoi moi ?',
                        paragrafContent: 'Je suis une personne curieuse et sociable. J\'aime travailler en groupe, je suis très assidu dans ce que je fais. Avec un certain recul je pense être force de proposition quand une idée me semble pertinante. Je reconnais facilement mes forces et mes faiblesses, ce qui me permet d\'apprendre vite et d\'être efficace.',
                        col: 5,
                        active: 0
                    },
                ],
                colorsArray: [
                    '#05F2DB',
                    // '#0388A6',
                    '#F205CB',
                    // '#A61780'
                ],
                fontColors: 'black',
                fontBorder: '',
                window: {
                    width: 0
                },
                contact: false,
                email: 'mailto:delguerra.eric@gmail.com',
            }
        },
        created() {
            this.enterpriseName = localStorage.getItem("name")
            this.randomColor = this.getRandomColor()
            if (this.randomColor === '#0388A6' || this.randomColor === '#A61780') {
                this.fontColors = 'white'
                this.fontBorder = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
            }
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
            if (parseInt(localStorage.getItem("firstPassage")) > 3) {
                for (let i = 0; i < this.paragrafs.length; i++) {
                    this.paragrafs[i].delay = i;
                }
            }
        },
        methods: {
            getRandomColor() {
                return this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
            },
            handleResize() {
                this.window.width = window.innerWidth;
            },
            onIntersect(entries, observer, isIntersecting) {
                this.contact = true
            },
            sendMail() {
                window.open(this.email)
            },
            menu(value) {
                for (let i = 0; i < this.paragrafs.length; i++) {
                    if (i === value) {
                        this.paragrafs[i].active = 1
                    } else {
                        this.paragrafs[i].active = 0
                    }
                }
            },
            nextParagraf() {
                if (this.whichInfo < 5) {
                    this.whichInfo += 1
                    this.menu(this.whichInfo)
                }
            }
        },
        computed: {
            underlineColor() {
                return 'linear-gradient(\n transparent 28%, ' + this.randomColor + ' 28%, ' + this.randomColor + ' 55%, transparent 55%)'
            },

        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
    }
</script>

<style lang="scss" scoped>

    * {
        font-family: Consolas;
    }

    .titre {
        padding-bottom: 2rem;
    }

    .selectedMenu {
        transition-duration: .4s;
        border-bottom: solid .45rem #F205CB;
        padding-top: 1.3rem !important;
        /*border-width: .3rem;*/
        /*border-style: solid;*/
        /*border-image: linear-gradient(*/
        /*                to bottom,*/
        /*                #023859,*/
        /*                rgba(0, 0, 0, 0)*/
        /*) 1 100%;*/


    }

    .menuSerious {
        margin: auto;
        font-size: 1.4rem;
        padding-top: 1rem;
        height: 10vh;
        text-align: center;

        &:hover {
            cursor: pointer;
        }
    }

    #content {
        p {
            font-size: 1.2rem;
            text-align: justify;
            animation: ease-in-out .5s;
            border-bottom: solid .2rem #0388A6;
            padding-bottom: 2rem;

        }
    }

    .next {
        margin-left: 95%;
        transform: rotate(-90deg) scale(1.2);
        cursor: pointer;
        animation-duration: .5s;

        &:hover {
            transform:rotate(-90deg) scale(1.5);

        }
    }


</style>