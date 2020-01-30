<template>
    <div class="container background page">
        <v-btn class="ma-2 backHome" color="cyan" rounded dark elevation="3" :to="{path: '/'}">Home</v-btn>
        <div class="is-mobile is-top-right">
            <h1 class="is-size-2 font-weight-bold font-italic column is-offset-7 titre">Re-bonjour <h1
                    class="underline is-size-2 font-weight-bold font-italic"
                    :style="{backgroundImage: underlineColor}">{{enterpriseName}}</h1></h1>
        </div>
        <template>
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
                            :style="{animationDelay: paragraf.delay+'s'}"
                    />
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
                        color: 'primary',
                        delay: 1,
                        align: 'center',
                        paragraf: '" Je recherche une alternance "',
                        paragrafTitle: 'Présentation',
                        paragrafContent: 'Je m\'appelle Eric, je vis sur Grenoble et je recherche activement une entreprise pour une future alternance en Service Mobiles et Interface Nomade\n'
                    },
                    {
                        color: 'amber',
                        delay: 4,
                        align: 'center',
                        paragraf: '" Je suis actuellement en formation "',
                        paragrafTitle: 'Qu\'est ce que je fais aujourd\'hui',
                        paragrafContent: 'Je suis actuellement en formation au Campus Numérique in The Alps, j\'ai commencé cette formation en fin d\'année 2018 et je suis en ce moment et jusqu\'à ' +
                            'ma soutenance en alternance chez BSM / IZYFLOW à Montbonnot\n'
                    },
                    {
                        color: 'pink',
                        delay: 8,
                        align: 'center',
                        paragraf: '" Une montée en compétences "',
                        paragrafTitle: 'Qu\'est ce que je veux faire',
                        paragrafContent: 'Aujourd\'hui j\'aimerai continué de me former au métier du Web et me spécialiser en intégration mobile. Une année suplémentaire me permettrai une montée en ' +
                            'compétences et une réelle validation de celles-ci.\nA l\'avenir j\'aimerai confier de mon temps et transmettre ce que j\'ai appris à de nouvelles personnes.\n'
                    },
                    {
                        color: 'red',
                        delay: 12,
                        align: 'center',
                        paragraf: '" Ma curiosité m\'a permis également d\'en apprendre plus "',
                        paragrafTitle: 'Mes compétences',
                        paragrafContent: 'Je suis plutôt à l\'aise en Back-End, j\'aimerais acquérir de fortes compétences en intégration par la suite. Je suis à l\'aise en Javascript ainsi que VueJS. ' +
                            'Pendant mon alternance je travail sur une application en PHP Slim. Ma formation m\'a également permise d\'apprehender d\'autres langages comme le C# et JAVA.\n' +
                            ' Ma curiosité m\'a permis également d\'en apprendre plus en C# avec le logiciel Unity. La mise en place de test (unitaire et fonctionnel) est également dans mon cursus mais nous n\'avons pas eu des gros module dessus. \n'
                    },
                    {
                        color: 'orange',
                        delay: 18,
                        align: 'center',
                        paragraf: 'Je suis très assidu dans ce que je fais',
                        paragrafTitle: 'Pourquoi moi ?',
                        paragrafContent: 'Je suis une personne très curieuse et très sociable. J\'aime travailler en groupe, je suis très assidu dans ce que je fais. Avec un certain recul je ' +
                            'pense être force de proposition quand une idée me semble pertinante. \n Je reconnais facilement mes forces et mes faiblesses, ce qui me permet d\'apprendre vite et de me mettre au travail efficassement'
                    },
                ],
                colorsArray: [
                    '#ff7eda',
                    '#3df9c6'
                ]
            }
        },
        created() {
            this.enterpriseName = localStorage.getItem("name")
            this.randomColor = this.getRandomColor()
        },
        methods: {
            getRandomColor() {
                return this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
            }
        },
        computed: {
            underlineColor() {
                return 'linear-gradient(\n transparent 28%, ' + this.randomColor + ' 28%, ' + this.randomColor + ' 55%, transparent 55%)'
            }
        }
    }
</script>

<style lang="scss" scoped>

    .titre {
        padding-bottom: 2rem;
    }

    .paragrafAnim {
        animation: seriousEnter 1s forwards;
        opacity: 0;
    }


    @keyframes seriousEnter {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

</style>