<script setup>
    import covers from "../../../Components/Contents/Covers.vue"
    import couples from "../../../Components/Contents/Couples.vue"
</script>

<template>
    <div class="mockup-window border bg-base-300">
        <div class="h-screen overflow-y-scroll">
            <covers></covers>
            
            <couples></couples>

            <section class="maukid">
                <div class="container mx-auto font-font3 max-w-5xl">
                    <div class="flex justify-center">
                        <img src="/images/port1/mahkota.png" alt="mahkota" class="max-w-xs">
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 mt-8">
                        <div class="flex">
                            <div class="information-wrap">
                                <div class="information">
                                    <h3 class="caption-mikad">Akad Nikah</h3>
                                    <p>
                                        Thursday, 10 November 2022
                                        <br/>
                                        08:00 - 09:00 WIB
                                    </p>
                                    <p>
                                        Masjid Al-Khoeriyyah 
                                        <br/>
                                        Pondok Pesantren Al-Khoeriyyah, Kp. Pamipiran Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="information-wrap">
                                <div class="information">
                                    <h3 class="uppercase">Resepsi</h3>
                                    <p>
                                        Thursday, 10 November 2022
                                        <br/>
                                        09:00 - 12:00 WIB
                                    </p>
                                    <p>
                                        Rumah Mempelai Wanita
                                        <br/>
                                        Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-rows-2 max-w-full justify-center">
                        <h5 class="text-center">Add to :</h5>
                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20221110T080000Z/20221110T140000Z&amp;text=Gita+%26+Yayan+Wedding&amp;details=Gita+%26+Yayan+Wedding+on+Thursday%2C+10+November22&amp;location=Rumah%2C+Mempelai%2C+Wanita%2C+%7C+Kp.Pamipiran%2C+Pagersari%2C+Kec.+Pagerageung%2C+Tasikmalaya%2C+Jawa+Barat" target="_blank" class="btn btn-primary mt-2 mx-1 hover:bg-gray-50" data-aos="fade-down" data-aos-delay="300">
                            Google Calendar
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
