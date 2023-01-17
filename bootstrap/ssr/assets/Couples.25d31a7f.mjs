import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { defineStore, mapWritableState, mapActions, mapState } from "pinia";
import axios from "axios";
const useSvcGenStore = defineStore("service-general-store", {
  state: () => {
    return {
      baseUrlAPI: "http://127.0.0.1:8000/api/",
      miftah: "",
      motivation: "",
      authGenerally: {}
    };
  },
  getters: {
    getMiftah(state) {
      return state.miftah;
    },
    getMotivation(state) {
      return state.motivation;
    },
    getbaseUrlAPI(state) {
      return state.baseUrlAPI;
    },
    getAuthGenerally(state) {
      return state.authGenerally;
    }
  },
  actions: {
    setMiftah(key) {
      this.miftah = key;
    },
    setMotivation(word) {
      this.motivation = word;
    },
    setAuthGenerally(miftah) {
      this.authGenerally = { headers: { Authorization: `Bearer ${miftah}` } };
    }
  }
});
const useCoverStore = defineStore("cover-store", {
  state: () => {
    return {
      title: `Undangan Pernikahan`,
      showInviteTo: true,
      couples: {
        man: `Yayan`,
        girl: `Gita`
      },
      covers: [],
      fontCovers: "font-kurale",
      fontList: [],
      errFontLoad: {}
    };
  },
  getters: {
    getTitleCover(state) {
      return state.title;
    },
    getShowInviteTo(state) {
      return state.showInviteTo;
    },
    getCouplesMan(state) {
      return state.couples.man;
    },
    getCoupleGirl(state) {
      return state.couples.girl;
    },
    getCovers(state) {
      return state.covers;
    },
    getFontCover(state) {
      return state.fontCovers;
    },
    getFontList(state) {
      return state.fontList;
    }
  },
  actions: {
    setTitle(title) {
      this.title = title;
    },
    setShowInviteTo(invite) {
      this.showInviteTo = invite;
    },
    setCoupleMan(couples) {
      this.couples.man = couples;
    },
    setCoupleGirl(couples) {
      this.couples.girl = couples;
    },
    setCovers(covers) {
      this.covers = covers;
    },
    setFontCover(font) {
      this.fontCovers = font;
    },
    async setFontList(miftah) {
      await axios.get(`/api/setting/fontlist`, { headers: { Authorization: `Bearer ${miftah}` } }).then((res) => {
        this.fontList = res.data;
      }).catch((err) => this.errFontLoad = err);
    }
  }
});
const useGuestStore = defineStore("guest-store", {
  state: () => {
    return {
      countOfGuest: 0,
      MaxGuest: 0,
      noSeenGuest: false,
      listOfGuest: [],
      inviteGuest: "",
      inviteAddress: "Tempat"
    };
  },
  getters: {
    getInviteGuest(state) {
      return state.inviteGuest;
    },
    getInviteAddress(state) {
      return state.inviteAddress;
    },
    getlistComment(state) {
      return state.listComment;
    }
  },
  actions: {
    setInviteGuest(guest) {
      this.inviteGuest = guest;
    },
    setInviteAddress(address) {
      this.inviteAddress = address;
    }
  }
});
const Covers_vue_vue_type_style_index_0_lang = "";
let uri = window.location.search.substring(1);
let params = new URLSearchParams(uri);
const __default__$1 = {
  computed: {
    ...mapWritableState(useCoverStore, { title: "getTitleCover", man: "getCouplesMan", girl: "getCoupleGirl", covers: "getCovers", showInviteTo: "getShowInviteTo", fontCover: "getFontCover" }),
    ...mapWritableState(useGuestStore, { guest: "getInviteGuest", address: "getInviteAddress" })
  },
  mounted() {
  },
  methods: {
    ...mapActions(useCoverStore, ["setTitle", "setCouplesMan", "setCoupleGirl", "setCovers", "setShowInviteTo"]),
    ...mapActions(useGuestStore, ["setInviteGuest", "setInviteAddress"])
  },
  created() {
    var _a, _b;
    this.setShowInviteTo(params.get("invit") !== null ? true : false);
    this.setInviteGuest((_a = params.get("invit")) != null ? _a : "Ismun");
    this.setInviteAddress((_b = params.get("address")) != null ? _b : "Tempat");
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Covers",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "cover",
        class: _ctx.fontCover
      }, _attrs))}><div class="front-cover"><div class="container mx-auto"><div class="flex flex-col justify-center text-center py-4 font-alice"><h1 class="title-invite text-2xl font-bold uppercase mt-20">${ssrInterpolate(_ctx.title)}</h1></div><div class="initial-frame"><span class="initial-text">${ssrInterpolate(_ctx.girl.charAt(0).toUpperCase())} &amp; ${ssrInterpolate(_ctx.man.charAt(0).toUpperCase())}</span></div><div class="flex flex-col justify-center text-center gap-4 py-4"><h1>${ssrInterpolate(_ctx.girl)} &amp; ${ssrInterpolate(_ctx.man)}</h1><h4>Kamis, 10 November 2022</h4></div><div class="row-auto my-4" style="${ssrRenderStyle(_ctx.showInviteTo ? null : { display: "none" })}"><span class="flex justify-center">Kepada Yth</span><span class="flex justify-center">Bapak/Ibu/Saudara/i</span><h4 class="mt-1 text-lg font-semibold flex justify-center">${ssrInterpolate(_ctx.guest)}</h4><span class="flex justify-center">di ${ssrInterpolate(_ctx.address)}</span></div></div></div><div class="back-footer"></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Covers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useCoupleStore = defineStore("couples-store", {
  state: () => {
    return {
      titleCouples: "Calon Mempelai",
      layoutList: [],
      couples: {
        pria: {
          nama_lengkap: "Yayan Sopian",
          foto: "",
          alamat_ig: "",
          alamat_rumah: "Kp. Tanjungsari 07/02 Ds. Pamoyanan Kec. Kadipaten Kab. Tasikmalaya",
          nama_ibu: "Ibu Omah",
          nama_ayah: "Alm. Bpk Nono Waryono",
          anak_ke: 3
        },
        wanita: {
          nama_lengkap: "Gita Thohiroturrohmah",
          foto: "",
          alamat_ig: "",
          alamat_rumah: "Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya",
          nama_ibu: "Ibu Nonoh",
          nama_ayah: "Bpk Totong",
          anak_ke: 3
        }
      },
      settings: {
        info_ortu: true,
        foto_profile: true,
        orderingCouplesLk: false,
        layoutProfilCouples: ""
      }
    };
  },
  getters: {
    getTitleCouple(state) {
      return state.titleCouples;
    },
    getCouple(state) {
      return state.couples;
    }
  },
  actions: {
    setTitleCouple(prm) {
      this.titleCouples = prm;
    },
    setCouple(couple) {
      this.couples = couple;
    },
    setOrdering() {
      this.settings.orderingCouplesLk = !this.settings.orderingCouplesLk;
    },
    setlayoutList() {
    }
  }
});
const Couples_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  computed: {
    ...mapState(useCoverStore, { man: "getCouplesMan", girl: "getCoupleGirl", fontCover: "getFontCover" }),
    ...mapState(useCoupleStore, { title: "getTitleCouple", coupleslist: "getCouple" })
  },
  data() {
    return {};
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Couples",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "couple",
        class: ["text-yellow-400", _ctx.fontCover]
      }, _attrs))}><div class="container mx-auto mt-8"><div class="row-auto"><h2 class="flex justify-center text-4xl font-extrabold">${ssrInterpolate(_ctx.title)}</h2></div><div class="row-auto mx-4 pt-4"><i class="flex justify-center mb-4">Assalamu\u2019alaikum Warahmatullahi Wabarakatuh</i><p class="flex justify-center text-center">Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.</p><p class="flex justify-center text-center">Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p></div></div><div class="row-auto pt-8"><div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8"><div id="jauzah"><div class="relative"><div class="row-auto px-2 jauzah-ring"><div class="flex max-w-full justify-center"><img src="/images/port1/zaujah.png" alt="Zaujah Photo" class="w-1/3 h-auto rounded-full align-middle border-none"></div></div></div><div class="flex flex-col my-4 text-center justify-center gap-2"><h3 class="text-2xl uppercase font-extrabold text-yellow-400 mb-2">${ssrInterpolate(_ctx.girl)}</h3><h3>${ssrInterpolate(_ctx.coupleslist.wanita.nama_lengkap)}</h3><p>Putri dari Pasangan <br> ${ssrInterpolate(_ctx.coupleslist.wanita.nama_ayah)} &amp; ${ssrInterpolate(_ctx.coupleslist.wanita.nama_ibu)}</p><p>${ssrInterpolate(_ctx.coupleslist.wanita.alamat_rumah)}</p><div class="socmed"></div></div></div><div id="jauz"><div class="relative"><div class="row-auto px-2 jauz-ring"><div class="flex max-w-full justify-center"><img src="/images/port1/zauj.png" alt="Zauj Photo" class="w-1/3 h-auto rounded-full align-middle border-none"></div></div></div><div class="flex flex-col my-4 text-center justify-center gap-2 font-caption"><h3 class="text-2xl uppercase font-extrabold text-yellow-400 mb-2">${ssrInterpolate(_ctx.man)}</h3><h3>${ssrInterpolate(_ctx.coupleslist.pria.nama_lengkap)}</h3><p>Putra dari Pasangan <br> ${ssrInterpolate(_ctx.coupleslist.pria.nama_ayah)} &amp; ${ssrInterpolate(_ctx.coupleslist.pria.nama_ibu)}</p><p>${ssrInterpolate(_ctx.coupleslist.pria.alamat_rumah)}</p><div class="socmed"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contents/Couples.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  useGuestStore as a,
  useSvcGenStore as b,
  _sfc_main as c,
  useCoupleStore as d,
  useCoverStore as u
};
