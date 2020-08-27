<template>
    <div class="container background page">
        <v-btn class="ma-2 backHome" color="accent" elevation="3" :to="{path: '/'}" fixed style="z-index: 5">
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <div class="is-mobile is-top" style="margin-left: 1rem; margin-top: 3rem">
            <h1 v-if="helloOrNotHello" class="is-size-2 font-weight-bold font-italic column is-offset-5 titre"
                :style="{color: fontColors, textShadow: fontBorder}">Hey <h1
                    class="underline is-size-2 font-weight-bold font-italic"
                    :style="{backgroundImage: underlineColor, color: fontColors, textShadow: fontBorder}">
                {{enterpriseName}}</h1> !
            </h1>
            <h1 v-else class="is-size-2 column is-offset-5 titre"> Mes compétences </h1>

        </div>
        <template v-if="window.width > 650">
            <v-card-text class="py-0">
                <v-timeline
                        align-top
                >
                    <v-timeline-item
                            :color="paragrafs[0].color"

                            :icon="paragrafs[0].icon"
                            :fill-dot="true"
                    >
                        <v-card-text class="py-0">

                            <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[0].delay+'s'}">
                                <v-col>
                                    <strong class="titleFun" :style="{color: colorsArray[1]}">{{paragrafs[0].paragrafTitle}}</strong>
                                    <div class="caption">
                                        <li>
                                            <v-icon color="info">mdi-language-html5</v-icon>
                                            Html / Css / JavaScript
                                        </li>
                                        <li>
                                            <v-icon color="info">mdi-language-csharp</v-icon>
                                            PHP, C#
                                        </li>
                                        <li>
                                            <v-icon color="info">mdi-vuejs</v-icon>
                                            VueJs
                                        </li>
                                        <li>
                                            <v-icon color="info">mdi-laravel</v-icon>
                                            Laravel
                                        </li>
                                        <div class="caption">
                                            <h3 style="font-weight: bold; margin-bottom: .5rem">Connaissances :</h3>
                                            <li> Symfony
                                            </li>
                                            <li>Firebase
                                                <v-icon color="info">mdi-firebase</v-icon>
                                            </li>
                                            <li> Sass
                                            </li>
                                        </div>
                                        <div class="caption">
                                            <h3 style="font-weight: bold; margin-bottom: .5rem">Autres outils :</h3>
                                            <li>
                                                <v-icon color="info">mdi-git</v-icon>
                                                Git / SourceTree
                                            </li>
                                            <li>
                                                Postman
                                            </li>
                                            <li>
                                                FileZila
                                            </li>
                                            <li>
                                                Methodes Agiles
                                            </li>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-timeline-item>
                    <v-timeline-item
                            :color="paragrafs[1].color"

                            :icon="paragrafs[1].icon"
                            :fill-dot="true"
                    >
                        <v-row class="paragrafAnim pt-1 text-center" :style="{animationDelay: paragrafs[1].delay+'s'}">
                            <v-col>
                                <strong class="titleFun"
                                        :style="{color: colorsArray[2]}">{{paragrafs[1].paragrafTitle}}</strong>
                                <div class="caption">
                                    <h3 style="font-weight: bold; margin-bottom: .5rem">CAMPUS NUMERIQUE IN THE
                                        ALPS</h3>
                                    <div class="" style="margin-top: 0.5rem">
                                        <li>Décembre - 2018 - juin - 2020</li>
                                        <li>BAC+2 ou Titre RNCP de niveau 3</li>
                                    </div>

                                </div>
                                <div class="caption">
                                    <h3 style="font-weight: bold; margin-bottom: .5rem">Langues</h3>
                                    <div class="" style="margin-top: 0.5rem">
                                        <li>Anglais: courant et technique</li>
                                    </div>

                                </div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item
                            :color="paragrafs[2].color"

                            :icon="paragrafs[2].icon"
                            :fill-dot="true"
                    >
                        <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[2].delay+'s'}">
                            <v-col>
                                <strong class="titleFun"
                                        :style="{color: colorsArray[1]}">{{paragrafs[2].paragrafTitle}}</strong>
                                <div class="caption">
                                    <h3 style="font-weight: bold; margin-bottom: .5rem">IZYFLOW (BSM SAS)
                                        <v-icon color="secondary">mdi-laptop-chromebook</v-icon>
                                    </h3>
                                    <div class="caption" style="margin-top: 0.5rem">
                                        <li>Juin - 2019 - Juin - 2020</li>
                                        <li>En alternance</li>
                                        <li>Ajout de fonctionnalités sur la plateforme en place</li>
                                    </div>
                                </div>
                                <div class="caption">
                                    <h3 style="font-weight: bold; margin-bottom: .5rem">MAGIC CANDY BAR
                                        <v-icon color="secondary">mdi-food-fork-drink</v-icon>
                                    </h3>
                                    <div class="caption" style="margin-top: 0.5rem">
                                        <li>Mars - 2015 - Novembre - 2017</li>
                                        <li>Manager</li>
                                        <li>Gestion des stocks, prise de commande, encaissement et clôture de
                                            caisse, ouverture et fermeture de l’établissement.
                                        </li>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item
                            :color="paragrafs[3].color"

                            :icon="paragrafs[3].icon"
                            :fill-dot="true"
                    >
                        <v-row class="paragrafAnim pt-1 text-center" :style="{animationDelay: paragrafs[3].delay+'s'}">
                            <v-col>
                                <strong class="titleFun"
                                        :style="{color: colorsArray[2]}">{{paragrafs[3].paragrafTitle}}</strong>
                                <div class="caption">
                                    <li>Curieux</li>
                                    <li>Sérieux</li>
                                    <li>Travail en équipe</li>
                                    <li>Adaptabilité</li>
                                </div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item
                            :color="paragrafs[4].color"

                            :icon="paragrafs[4].icon"
                            :fill-dot="true"
                    >
                        <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[4].delay+'s'}">
                            <v-col>
                                <strong class="titleFun"
                                        :style="{color: colorsArray[1]}">{{paragrafs[4].paragrafTitle}}</strong>
                                <div class="caption">
                                    <li>Magie</li>
                                    <li>Théatre</li>
                                    <li>Jeux en ligne en équipe
                                        <v-icon color="info">mdi-steam</v-icon>
                                    </li>
                                    <div class="caption">
                                        <h3 style="font-weight: bold; margin-bottom: .5rem">De temps en temps !</h3>
                                        <li>
                                            <v-icon color="info">mdi-blender-software</v-icon>
                                            Modélisation 3D avec Blender
                                        </li>
                                        <li>Montages vidéos</li>
                                        <li>
                                            <v-icon color="info">mdi-unreal</v-icon>
                                            Découverte création de jeux vidéos avec Unity / Unreal
                                        </li>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </template>
        <template v-else>
            <v-card
                    class="mx-auto"
                    max-width="375"
            >
                <v-card-text class="py-0">
                    <v-timeline
                            align-top
                            dense
                    >
                        <v-timeline-item
                                :color="paragrafs[0].color"

                                :icon="paragrafs[0].icon"
                                :fill-dot="true"
                        >
                            <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[0].delay+'s'}">
                                <v-col>
                                    <strong class="titleFun">{{paragrafs[0].paragrafTitle}}</strong>
                                    <div class="caption">
                                        <li>
                                            <v-icon color="info">mdi-language-html5</v-icon>
                                            Html / Css / JavaScript
                                        </li>
                                        <li>
                                            <v-icon color="info">mdi-language-csharp</v-icon>
                                            PHP, C#
                                        </li>
                                        <li>
                                            <v-icon color="info">mdi-vuejs</v-icon>
                                            VueJs
                                        </li>
                                        <li>
                                            <v-icon color="info">mdi-laravel</v-icon>
                                            Laravel
                                        </li>
                                        <div class="caption">
                                            <h3 style="font-weight: bold; margin-bottom: .5rem">Connaissances :</h3>
                                            <li> Symfony
                                            </li>
                                            <li>Firebase
                                                <v-icon color="info">mdi-firebase</v-icon>
                                            </li>
                                            <li> Sass
                                            </li>
                                        </div>
                                        <div class="caption">
                                            <h3 style="font-weight: bold; margin-bottom: .5rem">Autres outils :</h3>
                                            <li>
                                                <v-icon color="info">mdi-git</v-icon>
                                                Git / SourceTree
                                            </li>
                                            <li>
                                                Postman
                                            </li>
                                            <li>
                                                FilleZila
                                            </li>
                                            <li>
                                                Methodes Agiles
                                            </li>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                        <v-timeline-item
                                :color="paragrafs[1].color"

                                :icon="paragrafs[1].icon"
                                :fill-dot="true"
                        >
                            <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[1].delay+'s'}">
                                <v-col>
                                    <strong class="titleFun">{{paragrafs[1].paragrafTitle}}</strong>
                                    <div class="caption">
                                        <h3 style="font-weight: bold; margin-bottom: .5rem">CAMPUS NUMERIQUE IN THE
                                            ALPS</h3>
                                        <div class="" style="margin-top: 0.5rem">
                                            <li>Décembre - 2018 - juin - 2020</li>
                                            <li>BAC+2 ou Titre RNCP de niveau 3</li>
                                        </div>

                                    </div>
                                    <div class="caption">
                                        <h3 style="font-weight: bold; margin-bottom: .5rem">Langues</h3>
                                        <div class="" style="margin-top: 0.5rem">
                                            <li>Anglais: courant et technique</li>
                                        </div>

                                    </div>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                        <v-timeline-item
                                :color="paragrafs[2].color"

                                :icon="paragrafs[2].icon"
                                :fill-dot="true"
                        >
                            <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[2].delay+'s'}">
                                <v-col>
                                    <strong class="titleFun">{{paragrafs[2].paragrafTitle}}</strong>
                                    <div class="caption">
                                        <h3 style="font-weight: bold; margin-bottom: .5rem">IZYFLOW (BSM SAS)
                                            <v-icon color="secondary">mdi-laptop-chromebook</v-icon>
                                        </h3>
                                        <div class="caption" style="margin-top: 0.5rem">
                                            <li>Juin - 2019 - Juin - 2020</li>
                                            <li>En alternance</li>
                                            <li>Ajout de fonctionnalités sur la plateforme en place</li>
                                        </div>
                                    </div>
                                    <div class="caption">
                                        <h3 style="font-weight: bold; margin-bottom: .5rem">MAGIC CANDY BAR
                                            <v-icon color="secondary">mdi-food-fork-drink</v-icon>
                                        </h3>
                                        <div class="caption" style="margin-top: 0.5rem">
                                            <li>Mars - 2015 - Novembre - 2017</li>
                                            <li>Manager</li>
                                            <li>Gestion des stocks, prise de commande, encaissement et clôture de
                                                caisse, ouverture et fermeture de l’établissement.
                                            </li>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                        <v-timeline-item
                                :color="paragrafs[3].color"

                                :icon="paragrafs[3].icon"
                                :fill-dot="true"
                        >
                            <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[3].delay+'s'}">
                                <v-col>
                                    <strong class="titleFun">{{paragrafs[3].paragrafTitle}}</strong>
                                    <div class="caption">
                                        <li>Curieux</li>
                                        <li>Sérieux</li>
                                        <li>Travail en équipe</li>
                                        <li>Adaptabilité</li>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                        <v-timeline-item
                                :color="paragrafs[4].color"

                                :icon="paragrafs[4].icon"
                                :fill-dot="true"
                        >
                            <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragrafs[4].delay+'s'}">
                                <v-col>
                                    <strong class="titleFun">{{paragrafs[4].paragrafTitle}}</strong>
                                    <div class="caption">
                                        <li>Magie</li>
                                        <li>Théatre</li>
                                        <li>Jeux en ligne en équipe
                                            <v-icon color="info">mdi-steam</v-icon>
                                        </li>
                                        <div class="caption">
                                            <h3 style="font-weight: bold; margin-bottom: .5rem">De temps en temps !</h3>
                                            <li>
                                                <v-icon color="info">mdi-blender-software</v-icon>
                                                Modélisation 3D avec Blender
                                            </li>
                                            <li>Montages vidéos</li>
                                            <li>
                                                <v-icon color="info">mdi-unreal</v-icon>
                                                Découverte création de jeux vidéos avec Unity / Unreal
                                            </li>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </template>
        <div v-intersect.quiet="onIntersect" class="text-center" style="padding: 3rem;">
            <v-btn v-if="contact" class="mx-2 paragrafAnim" fab dark large color="secondary"
                   style="animation-delay: 0.3s"
                   @click="sendMail">
                <v-icon dark>mdi-email</v-icon>
            </v-btn>
            <br>
            <p v-if="contact" class="secondary--text" style="padding-top: 1rem">Contactez-moi</p>
        </div>
    </div>
</template>

<script>
    import Icon from "buefy";

    export default {
        name: "Serious",
        components: {Icon},
        data() {
            return {
                enterpriseName: '',
                paragrafs: [
                    {
                        color: 'secondary',
                        delay: 0,
                        paragraf: '',
                        paragrafTitle: 'Langages',
                        paragrafContent: '',
                        list: [{
                            text: [
                                'test',
                                'testouille',

                            ],
                            icon: [
                                'mdi-console',
                                'mdi-console-line',
                            ]
                        }],
                        icon: 'mdi-console-line'
                    },
                    {
                        color: 'accent',
                        delay: 1,
                        paragraf: '',
                        paragrafTitle: 'Formation',
                        paragrafContent: '',
                        list: [],
                        icon: 'mdi-database-lock'
                    },
                    {
                        color: 'info',
                        delay: 2,
                        paragraf: '',
                        paragrafTitle: 'Expériences',
                        paragrafContent: '',
                        list: [],
                        icon: 'mdi-git'
                    },
                    {
                        color: 'accent',
                        delay: 3,
                        paragraf: '',
                        paragrafTitle: 'Soft Skill',
                        paragrafContent: '',
                        list: [],
                        icon: 'mdi-nature-people'
                    },
                    {
                        color: 'secondary',
                        delay: 4,
                        paragraf: 'Je suis très assidu dans ce que je fais',
                        paragrafTitle: 'Loisirs',
                        paragrafContent: '',
                        list: [],
                        icon: 'mdi-unity'
                    },
                ],
                colorsArray: [
                    '#05F2DB',
                    '#0388A6',
                    '#F205CB',
                    '#A61780'
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
            if (this.randomColor === '#0388A6' || this.randomColor === '#A61780') {
                if (this.window.width > 450) {
                    this.fontColors = 'white'
                    this.fontBorder = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
                }
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
        },
        computed: {
            underlineColor() {
                return 'linear-gradient(\n transparent 28%, ' + this.randomColor + ' 28%, ' + this.randomColor + ' 55%, transparent 55%)'
            },
            randomColor() {
                return this.getRandomColor()
            },
            helloOrNotHello() {
                switch (this.enterpriseName) {
                    case "":
                        return false
                    case " ":
                        return false
                    case "LinkedIn":
                        return false
                    case null:
                        return false
                    default :
                        return true
                }
            }
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

    .titleFun {
        font-size: 1.5rem;
        @media screen and (max-device-width: 650px) {
            font-size: 1rem;
        }
    }

    .caption {
        margin-top: 1rem;
        margin-left: 1rem;

        h3 {
            font-size: 0.8rem;
        }

        li {
            font-size: 0.9rem;
            @media screen and (max-device-width: 650px) {
                font-size: 0.8rem;
            }

        }

    }

</style>