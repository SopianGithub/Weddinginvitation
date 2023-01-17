import { useSSRContext, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { u as useCoverStore, a as useGuestStore, b as useSvcGenStore, _ as _sfc_main$7, c as _sfc_main$8 } from "./Couples.25d31a7f.mjs";
import { mapState, defineStore, mapActions, mapWritableState } from "pinia";
import moment from "moment";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import axios from "axios";
const Events_vue_vue_type_style_index_0_lang = "";
const __default__$5 = {
  computed: {
    ...mapState(useCoverStore, { fontCover: "getFontCover" })
  },
  data() {
    return {};
  }
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$5, {
  __name: "Events",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["maukid my-16", _ctx.fontCover]
      }, _attrs))}><div class="container mx-auto max-w-5xl"><div class="flex justify-center items-center"><img src="/images/port1/mahkota.png" alt="mahkota" class="max-w-xs"></div><div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 mt-8"><div class="flex justify-center"><div class="information-wrap"><div class="information"><h3 class="caption-mikad">Akad Nikah</h3><p> Kamis, 10 November 2022 <br> 08:00 - 10:00 WIB </p><p> Masjid Pon-Pes Al-Khoeriyyah <br> Kp. Pamipiran RT/RW 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya </p></div></div></div><div class="flex justify-center"><div class="information-wrap"><div class="information"><h3 class="caption-mikad">Resepsi</h3><p> Kamis, 10 November 2022 <br> 10:00 - Selesai WIB </p><p> Kompleks Pon-Pes Al-Khoeriyyah <br> Kp. Pamipiran RT/RW 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya </p></div></div></div></div><div class="grid grid-rows-2 max-w-full justify-center"><h5 class="text-center">Add to :</h5><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20221110T080000Z/20221110T140000Z&amp;text=Gita+%26+Yayan+Wedding&amp;details=Gita+%26+Yayan+Wedding+on+Kamis%2C+10+November22&amp;location=Ponpes%2C+Al-Khoeriyyah%2C+%7C+Kp.Pamipiran%2C+Pagersari%2C+Kec.+Pagerageung%2C+Tasikmalaya%2C+Jawa+Barat" target="_blank" class="btn btn-primary mt-2 mx-1 hover:bg-yellow-600"> Google Calendar </a></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Events.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __default__$4 = {
  computed: {
    ...mapState(useCoverStore, { fontCover: "getFontCover" })
  },
  data() {
    return {};
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$4, {
  __name: "Location",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["mikad my-16", _ctx.fontCover]
      }, _attrs))}><div class="container mx-auto p-4"><div class="grid grid-cols-1 gap-2"><div class="flex justify-center"><h2 class="text-3xl font-bold uppercase text-yellow-400">MAPS Location</h2></div><div class="grid grid-cols-1 gap-4 mt-4"><div class="mapouter flex justify-center"><div class="gmap_canvas w-3/4 border-4 border-solid border-yellow-500 rounded-md"><iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Pondok%20Pesantren%20Al-khoeriah%20Pagersari,%20Pagerageung,%20Tasikmalaya%20Regency,%20West%20Java%2046158&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe></div></div><div class="flex justify-center"><a target="_blank" href="https://www.google.com/maps/dir/?api=1&amp;destination=-7.1219769,108.1573866&amp;zoom=20&amp;dir_action=navigate" class="btn btn-primary mt-3 hover:bg-yellow-600">Open Google Maps</a></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Location.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __default__$3 = {
  computed: {
    ...mapState(useCoverStore, { fontCover: "getFontCover" })
  },
  data() {
    return {};
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$3, {
  __name: "Quotes",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [_ctx.fontCover, "my-16"]
      }, _attrs))}><div class="container mx-auto font-font3"><div class="row-auto flex justify-center"><h2 class="text-3xl font-extrabold uppercase text-yellow-400">Quotes</h2></div><div class="row-auto flex justify-center p-8 mt-4"><p class="text-lg text-gray-50"><span>&quot;</span> Mahasuci Allah yang telah menciptakan semuanya berpasang-pasangan, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka sendiri maupun dari apa yang tidak mereka ketahui <span>&quot;</span></p></div><h3 class="flex justify-center text-xl text-yellow-500">QS. Yasin Ayat 36</h3></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Quotes.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Countdown_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  props: {
    time: {
      type: Number,
      default: 60
    },
    interval: {
      type: Number,
      default: 1e3
    }
  },
  data() {
    return {
      current: 0,
      timeText: this.time,
      timerCount: moment.duration(moment(this.time).diff(moment.now()), "milliseconds"),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    };
  },
  methods: {
    "plan": function() {
      this.$dispatch("plan");
    },
    reduceOne: function() {
      this.current--;
      if (this.current > 0) {
        setTimeout(this.reduceOne.bind(this), 1e3);
      }
    }
  },
  events: {
    "ready": function() {
      this.current = this.time;
      this.reduceOne();
    }
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setInterval(() => {
            let durasi = moment.duration(moment(this.time).diff(moment.now()), "milliseconds");
            this.days = parseInt(durasi.asDays());
            this.hours = durasi.hours();
            this.minutes = durasi.minutes();
            this.seconds = durasi.seconds();
          }, this.interval);
        }
      },
      deep: true,
      immediate: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "countdown-container" }, _attrs))}><div class="flex justify-around"><div class="grid grid-cols-2 lg:grid-cols-4 gap-16"><div class="flex flex-col"><div class="timer timer-1 days">${ssrInterpolate($data.days)}</div><div class="flex justify-center uppercase text-xl">Days</div></div><div class="grid grid-cols-1"><div class="timer timer-2 hours">${ssrInterpolate($data.hours)}</div><div class="flex justify-center uppercase text-xl">Hours</div></div><div class="grid grid-cols-1"><div class="timer timer-3 minutes">${ssrInterpolate($data.minutes)}</div><div class="flex justify-center uppercase text-xl">Minutes</div></div><div class="grid grid-cols-1"><div class="timer timer-4 seconds">${ssrInterpolate($data.seconds)}</div><div class="flex justify-center uppercase text-xl">Seconds</div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Countdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Countdown = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const __default__$2 = {
  computed: {
    ...mapState(useCoverStore, { fontCover: "getFontCover" })
  },
  data() {
    const akadDate = new Date("November 10, 2022 08:00:00");
    return {
      time: akadDate,
      interval: 1e3
    };
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "Countdownpage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["counter-time my-16", _ctx.fontCover]
      }, _attrs))}><div class="container mx-auto font-font3"><div class="row-auto"><h3 class="flex justify-center text-center font-extrabold text-3xl uppercase text-yellow-400">Time To Akad</h3></div><div class="row-auto mt-16">`);
      _push(ssrRenderComponent(Countdown, {
        time: _ctx.time,
        interval: _ctx.interval
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Countdownpage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useGreetingStore = defineStore("greetings-store", {
  state: () => {
    return {
      isEnabled: true,
      listOfGreetings: [],
      postGreetings: {
        name: "",
        tanggal: "",
        ucapan: "",
        hadir: false
      },
      postComment: false,
      postNotif: {},
      errNotif: {},
      loading: false
    };
  },
  getters: {
    getlistOfGreetings(state) {
      return state.listOfGreetings;
    },
    getLoadingState(state) {
      return state.loading;
    }
  },
  actions: {
    setlistOfGreetings(grreting) {
      this.listOfGreetings = grreting;
    },
    submitComment(data, miftah) {
      this.loading = true;
      axios.post(
        `/api/invited/greetings`,
        data,
        {
          headers: {
            Authorization: `Bearer ${miftah}`
          }
        }
      ).then((res) => {
        if (res.statusCode !== 200) {
          this.postNotif = res.data;
        } else {
          this.postNotif = res;
        }
      }).catch((err) => this.errFontLoad = err);
      this.loading = false;
    },
    async loadComments(id = 1, miftah) {
      this.loading = true;
      await axios.get(`/api/invited/greetings/${id}`, {
        headers: {
          Authorization: `Bearer ${miftah}`
        }
      }).then((res) => {
        if (res.statusCode !== 200) {
          this.listOfGreetings = res.data;
        } else {
          this.errNotif = res;
        }
      }).catch((err) => this.errNotif = err);
      this.loading = false;
    }
  }
});
const __default__$1 = {
  created() {
    this.invitName = this.guest;
    this.invitAddr = this.address;
    this.comments.nama = this.guest;
  },
  mounted() {
    setTimeout(() => {
      this.checkComments();
    }, 5e3);
  },
  computed: {
    ...mapState(useCoverStore, { fontCover: "getFontCover" }),
    ...mapState(useGuestStore, { guest: "getInviteGuest", address: "getInviteAddress" }),
    ...mapState(useSvcGenStore, { miftah: "getMiftah" }),
    ...mapState(useGreetingStore, { greeting: "getlistOfGreetings", loading: "getLoadingState" })
  },
  watch: {
    checkComments() {
      if (this.miftah !== "") {
        this.loadComments(1, this.miftah);
        this.listComments = this.greeting;
      }
    }
  },
  data() {
    return {
      invitName: "",
      invitAddr: "Tempat",
      comments: {
        couple_desc_id: 1,
        nama: "",
        pesan: "",
        isConfirm: false
      },
      listComments: []
    };
  },
  methods: {
    ...mapActions(useGreetingStore, ["submitComment", "loadComments", "setlistOfGreetings"]),
    checkComments() {
      if (this.miftah !== "") {
        this.loadComments(1, this.miftah);
        this.listComments = this.greeting;
        return this.listComments;
      }
    },
    submitGreeting() {
      this.submitComment(this.comments, this.miftah);
      if (!this.loading) {
        this.setlistOfGreetings(this.checkComments());
        this.comments.pesan = "";
      }
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Guestbook",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["addrbook py-4 mb-16", _ctx.fontCover]
      }, _attrs))}><div class="container mx-auto max-w-lg"><div class="flex justify-center mb-8"><img src="/images/port1/mahkota.png" alt="mahkota" class="max-w-xs"></div><div class="flex justify-center pb-8"><h2 class="text-3xl font-bold uppercase text-yellow-400">GUEST BOOK</h2></div><div class="grid grid-cols-1 mx-16"><form><div class="flex flex-col mb-4"><label for="" class="text-gray-50 font-semibold">Nama</label><input type="text" class="form-control my-4 text-gray-900" id="guestName" name="name"${ssrRenderAttr("value", _ctx.comments.nama)} placeholder="Your Name" autocomplete="off"></div><div class="flex flex-col mb-4"><label for="" class="text-gray-50 font-semibold">Konfirmasi Kehadiran</label><div class="bg-black form-control py-4"><div class="form-check form-switch"><input${ssrIncludeBooleanAttr(Array.isArray(_ctx.comments.isConfirm) ? ssrLooseContain(_ctx.comments.isConfirm, null) : _ctx.comments.isConfirm) ? " checked" : ""} class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm checked:bg-yellow-500" type="checkbox" role="switch" id="flexSwitchCheckDefault"><label class="form-check-label inline-block text-gray-50" for="flexSwitchCheckDefault ml-4">\xA0Hadir</label></div></div></div><div class="flex flex-col mb-4"><label class="my-4 text-gray-50 font-semibold" for="">Pesan dan Doa</label><textarea name="pesan" id="message" cols="30" rows="7" class="bg-transparent rounded-xl border-b-2 border-yellow-300">${ssrInterpolate(_ctx.comments.pesan)}</textarea></div><div class="flex justify-center"><button type="submit" class="${ssrRenderClass([{ "opacity-50": !_ctx.comments.pesan.length }, "bg-yellow-500 hover:bg-yellow-400 rounded-lg text-gray-900 p-2 font-bold"])}"${ssrIncludeBooleanAttr(!_ctx.comments.pesan.length) ? " disabled" : ""}>Kirim Pesan</button></div><div class="flex justify-center p-4">`);
      if (_ctx.loading) {
        _push(`<progress class="progress w-56 bg-gray-500"></progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div><div id="show-guest" class="grid grid-cols-1 mx-8 py-16"><div class="container mx-auto text-left max-h-96 overflow-y-auto"><!--[-->`);
      ssrRenderList(_ctx.greeting, (item) => {
        _push(`<div class="grid grid-cols-1 justify-center overflow-y-auto"><div class="flex items-start mx-2 mb-3"><img class="rounded-full font-extrabold mr-3 xl:none sm:block md:block lg:block"${ssrRenderAttr("src", "https://na.ui-avatars.com/api/?name=" + item.nama + "&size=50")} alt="Image Avatar"><div class="media-body"><div class="mb-2"><h5 class="text-lg mb-0 text-yellow-500 text-bold">${ssrInterpolate(item.nama)}</h5><small class="text-gray-200">${ssrInterpolate(unref(moment)(item.created_at).format("DD-MM-YYYY hh:mm:ss"))}</small></div><p>${ssrInterpolate(item.pesan)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Guestbook.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Invited_vue_vue_type_style_index_0_lang = "";
const audio = new Audio("sounds/Baraakalloh.mp3");
const __default__ = {
  props: {
    generallyAPIKey: String,
    generallySecretKeyAPI: String,
    id: Number
  },
  computed: {
    ...mapWritableState(useSvcGenStore, { miftah: "getMiftah" })
  },
  created() {
    audio.pause();
  },
  mounted() {
    this.setMiftah(this.generallyAPIKey);
  },
  data() {
    return {
      playing: false,
      notif: { "BNI": false, "Linkaja": false, "Gopay": false, "Dana": false }
    };
  },
  methods: {
    ...mapActions(useSvcGenStore, ["setMiftah"]),
    copyTextRek(norek, bank) {
      this.$copyText(norek).then(() => {
        this.notif[bank] = true;
      }).catch(() => {
        console.log(`can't copy`);
      });
      setTimeout(() => {
        this.notif[bank] = false;
      }, 2e3);
    },
    playMusic() {
      this.playing = !this.playing;
      if (this.playing) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Invited",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen overflow-y-scroll bg-black" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="play-pause btn-play-pause" id="button-control"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"></path></svg></div><label for="my-modal-3" class="modal-button btn-donation flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path></svg> Kirim Hadiah </label><input type="checkbox" id="my-modal-3" class="modal-toggle"><div class="modal font-font3"><div class="modal-box relative bg-white text-gray-900"><label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-slate-500">\u2715</label><div id="header-gift" class="container mx-auto mt-4 border-b-2"><div class="flex items-center mx-auto justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg></div><h3 class="text-2xl font-bold text-center">Kirim Hadiah</h3><p class="text-md font-bold text-center">Untuk Gita &amp; Yayan</p></div><div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900 mt-2"><div class="collapse-title text-xl font-medium bg-white"><label class="flex flex-row"><img src="/images/bank/bni.png" alt="BNI" class="w-1/5"></label></div><div class="collapse-content bg-white"><p class="flex justify-between"><div>0573832764</div><div class="flex flex-nowrap"><img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">`);
      if (_ctx.notif["BNI"]) {
        _push(`<span class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></p><p>a.n Yayan Sopian</p><img src="/images/bank/qris_bni.jpg" alt="QRIS"></div></div><div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900"><div class="collapse-title text-xl font-medium bg-white"><label class="flex flex-row"><img src="/images/bank/linkaja.png" alt="Linkaja" class="w-1/5"></label></div><div class="collapse-content bg-white"><p class="flex justify-between"><div>085342422507</div><div class="flex flex-nowrap"><img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">`);
      if (_ctx.notif["Linkaja"]) {
        _push(`<span class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></p><p>a.n Yayan Sopian</p></div></div><div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900"><div class="collapse-title text-xl font-medium bg-white"><label class="flex flex-row"><img src="/images/bank/gopay.png" alt="Gopay" class="w-1/5"></label></div><div class="collapse-content bg-white"><p class="flex justify-between"><div>085871152707</div><div class="flex flex-nowrap"><img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">`);
      if (_ctx.notif["Gopay"]) {
        _push(`<span class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></p><p>a.n Yayan Sopian</p></div></div><div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white text-gray-900"><div class="collapse-title text-xl font-medium bg-white"><label class="flex flex-row"><img src="/images/bank/dana.png" alt="Dana" class="w-1/5"></label></div><div class="collapse-content bg-white"><p class="flex justify-between"><div>085871152707</div><div class="flex flex-nowrap"><img src="/images/bank/copy.png" alt="Copy Button" class="h-4 w-4 mx-2">`);
      if (_ctx.notif["Dana"]) {
        _push(`<span class="m-auto bg-green-100 text-green-600 rounded-md font-bold text-md"> Copied </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></p><p>a.n Yayan Sopian</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Invited.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
