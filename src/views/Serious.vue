<template >
    <div class="container background page">
        <v-btn class="ma-2 backHome" color="error" elevation="3" :to="{path: '/'}"><v-icon>mdi-home</v-icon></v-btn>
        <div class="is-mobile is-top-right">
            <h1 class="is-size-2 font-weight-bold font-italic column is-offset-7 titre"
                :style="{color: fontColors, textShadow: fontBorder}">Re-bonjour <h1
                    class="underline is-size-2 font-weight-bold font-italic"
                    :style="{backgroundImage: underlineColor, color: fontColors, textShadow: fontBorder}">{{enterpriseName}}</h1></h1>
        </div>
        <template v-if="window.width > 650">
            <v-timeline
            :align-top="true">
                <v-timeline-item
                        v-for="(paragraf, i) in paragrafs"
                        :key="i"
                        :color="paragraf.color"
                        small
                >
                    <template v-slot:opposite>
                    <span
                            :class="`headline  font-weight ${paragraf.color}--text paragrafAnim`"
                            v-text="paragraf.paragraf"
                            :style="{animationDelay: paragraf.delay+'s'}"/>
                    </template>
                    <v-card class="paragrafAnim" :style="{animationDelay: paragraf.delay+'s'}" elevation="5" >
                        <div class="py-4 paragrafAnim" :style="{animationDelay: paragraf.delay+'s'}">
                            <v-card-title>
                                <h2 :class="`headline font-weight-light mb-4 ${paragraf.color}--text`">
                                    {{paragraf.paragrafTitle}}</h2>
                            </v-card-title>
                            <v-card-text>
                                <div :class="`text-${paragraf.align} is-size-6`">
                                    {{paragraf.paragrafContent}}
                                </div>
                            </v-card-text>
                        </div>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
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
        <div v-intersect.quiet="onIntersect" class="text-center" style="padding: 3rem;">
            <v-btn v-if="contact" class="mx-2 paragrafAnim" fab dark large color="secondary" style="animation-delay: 0.3s" @click="sendMail" >
                <v-icon dark>mdi-email</v-icon>
            </v-btn>
            <br>
            <p v-if="contact" class="secondary--text" style="padding-top: 1rem">Contactez-moi</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Serious",
        data() {
            return {
                randomColor: '',
                enterpriseName: '',
                paragrafs: [
                    {
                        color: 'secondary',
                        delay: 1,
                        align: 'center',
                        paragraf: '" Je recherche une alternance "',
                        paragrafTitle: 'Présentation',
                        paragrafContent: 'Je m\'appelle Eric, je vis sur Grenoble et je recherche une entreprise pour une future alternance en Service Mobiles et Interface Nomade\n'
                    },
                    {
                        color: 'accent',
                        delay: 4,
                        align: 'center',
                        paragraf: '" Je suis actuellement en formation "',
                        paragrafTitle: 'Qu\'est ce que je fais aujourd\'hui',
                        paragrafContent: 'Je suis actuellement en formation au Campus Numérique in The Alps, j\'ai commencé cette formation en fin d\'année 2018 et je suis en ce moment et jusqu\'à ' +
                            'ma soutenance en alternance chez BSM / IZYFLOW à Montbonnot\n'
                    },
                    {
                        color: 'info',
                        delay: 8,
                        align: 'center',
                        paragraf: '" Une montée en compétences "',
                        paragrafTitle: 'Qu\'est ce que je veux faire',
                        paragrafContent: 'Aujourd\'hui j\'aimerai continué de me former au métier du Web et me spécialiser en intégration mobile. Une année suplémentaire me permettrai une montée en ' +
                            'compétences et une réelle validation de celles-ci.\nA l\'avenir j\'aimerai confier de mon temps et transmettre ce que j\'ai appris à de nouvelles personnes.\n'
                    },
                    {
                        color: 'accent',
                        delay: 12,
                        align: 'center',
                        paragraf: '" Ma curiosité m\'a permis également d\'en apprendre plus "',
                        paragrafTitle: 'Mes compétences',
                        paragrafContent: 'Je suis plutôt à l\'aise en Back-End, j\'aimerais acquérir de fortes compétences en intégration par la suite. Je suis à l\'aise en Javascript ainsi que VueJS. ' +
                            'Pendant mon alternance je travail sur une application en PHP Slim. Ma formation m\'a également permise d\'apprehender d\'autres langages comme le C# et JAVA.\n' +
                            ' Ma curiosité m\'a permis également d\'en apprendre plus en C# avec le logiciel Unity. La mise en place de test (unitaire et fonctionnel) est également dans mon cursus mais nous n\'avons pas eu des gros module dessus. \n'
                    },
                    {
                        color: 'secondary',
                        delay: 18,
                        align: 'center',
                        paragraf: 'Je suis très assidu dans ce que je fais',
                        paragrafTitle: 'Pourquoi moi ?',
                        paragrafContent: 'Je suis une personne très curieuse et très sociable. J\'aime travailler en groupe, je suis très assidu dans ce que je fais. Avec un certain recul je ' +
                            'pense être force de proposition quand une idée me semble pertinante. \n Je reconnais facilement mes forces et mes faiblesses, ce qui me permet d\'apprendre vite et de me mettre au travail efficassement'
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
            this.randomColor = this.getRandomColor()
            if (this.randomColor === '#0388A6' || this.randomColor === '#A61780'){
                this.fontColors = 'white'
                this.fontBorder = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
            }
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
            if (parseInt(localStorage.getItem("firstPassage")) > 3){
                for (let i = 0; i < this.paragrafs.length; i++){
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
            onIntersect (entries, observer, isIntersecting) {
                this.contact = true
            },
            sendMail() {
                window.open(this.email)
            },
        },
        computed: {
            underlineColor() {
                return 'linear-gradient(\n transparent 28%, ' + this.randomColor + ' 28%, ' + this.randomColor + ' 55%, transparent 55%)'
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
    }
</script>

<style lang="scss" scoped>

    .titre {
        padding-bottom: 2rem;
    }

</style>