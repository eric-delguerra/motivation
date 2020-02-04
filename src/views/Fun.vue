<template>
    <div class="container background page">
        <v-btn class="ma-2 backHome" color="error" dark elevation="3" :to="{path: '/'}">Home</v-btn>
        <div class="is-mobile is-top-right">
            <h1 class="is-size-2 font-weight-bold font-italic column is-offset-7 titre"
                :style="{color: fontColors, textShadow: fontBorder}">Re-bonjour <h1
                    class="underline is-size-2 font-weight-bold font-italic"
                    :style="{backgroundImage: underlineColor, color: fontColors, textShadow: fontBorder}">
                {{enterpriseName}}</h1></h1>
        </div>
        <template v-if="window.width > 450">
            <v-timeline
                    :align-top="true">
                <v-timeline-item
                        v-for="(paragraf, i) in paragrafs"
                        :key="i"
                        :color="paragraf.color"
                        :icon="paragraf.icon"
                        :fill-dot="true"
                >
                    <template v-slot:opposite>
                    <span
                            :class="`headline  font-weight ${paragraf.color}--text paragrafAnim`"
                            v-text="paragraf.paragraf"
                            :style="{animationDelay: paragraf.delay+'s'}"/>
                    </template>
                    <v-card class="paragrafAnim" :style="{animationDelay: paragraf.delay+'s'}" elevation="5">
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
<!--                <v-card-->
<!--                        dark-->
<!--                        flat-->
<!--                >-->
<!--                    <v-img-->
<!--                            src="../assets/seriously.jpg"-->
<!--                            gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"-->
<!--                            aspect-ratio="2.3"-->
<!--                    >-->
<!--                        <v-container class="fill-height">-->
<!--                            <v-row align="center">-->
<!--                                <strong class="display-4 font-weight-regular mr-6"/>-->
<!--                            </v-row>-->
<!--                        </v-container>-->
<!--                    </v-img>-->
<!--                </v-card>-->
                <v-card-text class="py-0">
                    <v-timeline
                            align-top
                            dense
                    >
                        <v-timeline-item
                                :color="paragraf.color"
                                v-for="paragraf in paragrafs"
                                :key="i"
                                :icon="paragraf.icon"
                                :fill-dot="true"
                        >
                            <v-row class="paragrafAnim pt-1" :style="{animationDelay: paragraf.delay+'s'}">
                                <v-col>
                                    <strong>{{paragraf.paragrafTitle}}</strong>
                                    <div class="caption">{{paragraf.paragrafContent}}</div>
                                    <div class="caption" v-for="elem in paragraf.list"> {{elem.text}}</div>
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </template>
        <div v-intersect.quiet="onIntersect" class="text-center" style="padding: 3rem;">
            <v-btn v-if="contact" class="mx-2 paragrafAnim" fab dark large color="secondary"
                   style="animation-delay: 0.3s">
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
                        paragrafTitle: 'Formations',
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
                        icon: 'mdi-blender-software'
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
                contact: false
            }
        },
        created() {
            this.enterpriseName = localStorage.getItem("name")
            this.randomColor = this.getRandomColor()
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
            }
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