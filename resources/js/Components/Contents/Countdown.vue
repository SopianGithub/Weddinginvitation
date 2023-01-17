<template>
    <div class="countdown-container">
        <div class="flex justify-around">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-16">
                <div class="flex flex-col">
                    <div class="timer timer-1 days">
                        {{ days }}
                    </div>
                    <div class="flex justify-center uppercase text-xl">Days</div>
                </div>
                <div class="grid grid-cols-1">
                    <div class="timer timer-2 hours">
                        {{ hours }}
                    </div>
                    <div class="flex justify-center uppercase text-xl">Hours</div>
                </div>
                <div class="grid grid-cols-1">
                    <div class="timer timer-3 minutes">
                        {{ minutes }}
                    </div>
                    <div class="flex justify-center uppercase text-xl">Minutes</div>
                </div>
                <div class="grid grid-cols-1">
                    <div class="timer timer-4 seconds">
                        {{ seconds }}
                    </div>
                    <div class="flex justify-center uppercase text-xl">Seconds</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .timer {
        height: 130px;
        width: 130px;
        border-radius: 50%;
        border: solid 1px #efbf69;
        text-align: center;
        display: inline-block;
        line-height: 116px;
        font-size: 55px;
        margin-bottom: 20px;
        position: relative;
    }
    .timer-1::after,
    .timer-2::after,
    .timer-3::after,
    .timer-4::after {
        content: '';
        display: block;
        height: 130px;
        width: 130px;
        position: absolute;
        top:0;
        background:url('https://demo.datengdong.com/themes/eight/images/border-timer.png') no-repeat;
        background-size: contain;
        -webkit-animation:spin 30s linear infinite;
        -moz-animation:spin 30s linear infinite;
        animation:spin 30s linear infinite;
    }
    .timer-2::after {
        transform: rotate(120deg);
    }
    .timer-3::after {
        transform: rotate(250deg);
    }
    .timer-4::after {
        transform: rotate(90deg);
    }
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

    @-webkit-keyframes slideTopRight {
        100% { right: 0px; top: 0px; }
    }

    @keyframes slideTopRight {
        100% { right: 0px; top: 0px;}
    }

    @-webkit-keyframes slideTopLeft {
        100% { left: 50px; top: 50px; }
    }
    @keyframes slideTopLeft {
        100% { left: 50px; top: 50px;}
    }

    @-webkit-keyframes slideBottomLeft {
        100% { left: 0px; bottom: 0px; }
    }
    @keyframes slideBottomLeft {
        100% { left: 0px; bottom: 0px;}
    }

    @-webkit-keyframes slideBottomRight {
        100% { right: 50px; bottom: 50px; }
    }
    @keyframes slideBottomRight {
        100% { right: 50px; bottom: 50px;}
    }
</style>

<script>

    import moment from 'moment'

    export default {
        props:{
            time:{    
                type:Number,
                default:60
            },
            interval:{
                type:Number,
                default:1000
            },
        },
        data(){
            return{
                current:0,
                timeText: this.time,
                timerCount: moment.duration(moment(this.time).diff(moment.now()), 'milliseconds'),
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            }
        },
        methods:{
            "plan":function(){
                this.$dispatch("plan");
            },
            reduceOne: function() {
                this.current--;
                if(this.current > 0) {
                    setTimeout(this.reduceOne.bind(this), 1000);
                }
            }
        },
        events:{
            "ready":function(){
                this.current=this.time;
                this.reduceOne();
            }
        },
        watch: {
            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setInterval(() => {
                            let durasi = moment.duration(moment(this.time).diff(moment.now()), 'milliseconds');
                            this.days = parseInt(durasi.asDays());
                            this.hours = durasi.hours();
                            this.minutes = durasi.minutes();
                            this.seconds = durasi.seconds();
                        }, this.interval);
                    }

                },
                deep:true,
                immediate: true
            }

        }
    }
</script>