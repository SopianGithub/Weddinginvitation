import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext, mergeProps, resolveComponent, unref, isRef, withCtx, createVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { defineStore, mapState, mapActions, mapWritableState } from "pinia";
import { _ as _sfc_main$a, c as _sfc_main$b, u as useCoverStore, b as useSvcGenStore, d as useCoupleStore } from "./Couples.25d31a7f.mjs";
import axios from "axios";
import Datepicker from "@vuepic/vue-datepicker";
import { MapboxMap, MapboxGeocoder, MapboxGeolocateControl, MapboxNavigationControl, MapboxMarker } from "@studiometa/vue-mapbox-gl";
const _sfc_main$9 = {
  name: "icon-list",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Object
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: ["flex-no-shrink", "w-" + $props.size.width + " h-" + $props.size.height]
  }, _attrs))}><path style="${ssrRenderStyle($props.name === "phonedevice" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path><path style="${ssrRenderStyle($props.name === "tabletdevice" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"></path><path style="${ssrRenderStyle($props.name === "computerdevice" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path><path style="${ssrRenderStyle($props.name === "images" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path><path style="${ssrRenderStyle($props.name === "link" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path><path style="${ssrRenderStyle($props.name === "pencilsquare" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path><path style="${ssrRenderStyle($props.name === "gift" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path><path style="${ssrRenderStyle($props.name === "users" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path><path style="${ssrRenderStyle($props.name === "chat-bulle-oval-left" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"></path><path style="${ssrRenderStyle($props.name === "identification" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"></path><path style="${ssrRenderStyle($props.name === "camera" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path><path style="${ssrRenderStyle($props.name === "camera" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path><path style="${ssrRenderStyle($props.name === "video-camera" ? null : { display: "none" })}" stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path><path style="${ssrRenderStyle($props.name === "envolpe" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path><path style="${ssrRenderStyle($props.name === "musical-note" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"></path><path style="${ssrRenderStyle($props.name === "clipboard-document" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path><path style="${ssrRenderStyle($props.name === "window" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"></path><path style="${ssrRenderStyle($props.name === "document-check" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path><path style="${ssrRenderStyle($props.name === "globe-alt" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path><path style="${ssrRenderStyle($props.name === "chat-bubble-left-right" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path><path style="${ssrRenderStyle($props.name === "book-open" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path><path style="${ssrRenderStyle($props.name === "adjustments-horizontal" ? null : { display: "none" })}" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Icons/Iconslist.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Iconslist = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$8 = {
  name: "icons",
  props: {
    name: { type: String, required: true },
    size: {
      type: Object,
      default: {
        height: 4,
        width: 4
      }
    }
  },
  components: {
    Iconslist
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Iconslist = resolveComponent("Iconslist");
  _push(ssrRenderComponent(_component_Iconslist, mergeProps({
    name: $props.name,
    size: $props.size
  }, _attrs), null, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Icons/Index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const icons = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const useDeviceStore = defineStore("divices-store", {
  state: () => {
    return {
      deviceTabs: {
        phone: false,
        tablet: false,
        computer: true
      }
    };
  },
  getters: {
    results(state) {
      return state.deviceTabs;
    }
  },
  actions: {
    setDeviceTabs(deviceTabs) {
      for (let key in this.deviceTabs) {
        if (key == deviceTabs) {
          this.deviceTabs[key] = true;
        } else {
          this.deviceTabs[key] = false;
        }
      }
    }
  }
});
const _sfc_main$7 = {
  __name: "Computer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mockup-window border bg-base-300" }, _attrs))}><div class="h-screen overflow-y-scroll">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(`<section class="maukid"><div class="container mx-auto font-font3 max-w-5xl"><div class="flex justify-center"><img src="/images/port1/mahkota.png" alt="mahkota" class="max-w-xs"></div><div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 mt-8"><div class="flex"><div class="information-wrap"><div class="information"><h3 class="caption-mikad">Akad Nikah</h3><p> Thursday, 10 November 2022 <br> 08:00 - 09:00 WIB </p><p> Masjid Al-Khoeriyyah <br> Pondok Pesantren Al-Khoeriyyah, Kp. Pamipiran Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya </p></div></div></div><div class="flex"><div class="information-wrap"><div class="information"><h3 class="uppercase">Resepsi</h3><p> Thursday, 10 November 2022 <br> 09:00 - 12:00 WIB </p><p> Rumah Mempelai Wanita <br> Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya </p></div></div></div></div><div class="grid grid-rows-2 max-w-full justify-center"><h5 class="text-center">Add to :</h5><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20221110T080000Z/20221110T140000Z&amp;text=Gita+%26+Yayan+Wedding&amp;details=Gita+%26+Yayan+Wedding+on+Thursday%2C+10+November22&amp;location=Rumah%2C+Mempelai%2C+Wanita%2C+%7C+Kp.Pamipiran%2C+Pagersari%2C+Kec.+Pagerageung%2C+Tasikmalaya%2C+Jawa+Barat" target="_blank" class="btn btn-primary mt-2 mx-1 hover:bg-gray-50" data-aos="fade-down" data-aos-delay="300"> Google Calendar </a></div></div></section></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/States/components/Devices/Computer.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mockup-phone" }, _attrs))}><div class="camera"></div><div class="display"><div class="artboard artboard-demo phone-1 relative overflow-y-auto h-screen"><div class="absolute h-full w-full"><div class="container bg-center bg-cover bg-no-repeat bg-[url(&#39;/images/port1/18385244.jpg&#39;)] h-full"><div class="flex flex-col justify-center text-center"><h4 id="title-invite">Undangan Pernikahan</h4></div><div class="bg-[url(&#39;/images/port1/738-ai.png&#39;)] bg-contain bg-no-repeat bg-center w-full h-64 flex justify-center font-extrabold text-4xl py-28"> G &amp; Y </div><div class="flex flex-col justify-center text-center gap-4"><h1>Gita &amp; Yayan</h1><h4>Kamis, 10 November 2022</h4></div></div><div class="container h-full"><div class="row-auto py-4"><h2 class="flex justify-center text-3xl"> GROOM &amp; BRIDE </h2></div><div class="row-auto"><i class="flex justify-center text-center mb-2">Assalamu\u2019alaikum Warahmatullahi Wabarakatuh</i><p class="flex justify-center text-center">Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.</p><p class="flex justify-center text-center">Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p></div><div class="row-auto"><div class="grid grid-cols-1 gap-2"><div id="jauz"><div class="relative"><div class="row-auto px-2 before:content-[&#39;*&#39;] before:bg-[url(&#39;/images/port1/border-couple-2.png&#39;)] before:bg-contain before:bg-no-repeat before:absolute before:block before:left-0 before:w-full before:h-full before:bg-center"><div class="flex max-w-full justify-center"><img src="/images/port1/zauj.png" alt="Zauj Photo" class="w-1/3 h-auto rounded-full align-middle border-none"></div></div></div><div class="flex flex-col my-4 text-center justify-center gap-2 font-caption"><h3 class="text-2xl uppercase font-extrabold text-amber-200 mb-2">Yayan</h3><h3>Yayan Sopian</h3><p>Putra dari Pasangan <br> Bpk Nono Waryono(Alm) &amp; Ibu Ombah</p><p>Kp. Tanjungsari 07/02 Ds. Pamoyanan Kec. Kadipaten Kab. Tasikmalaya</p><div class="socmed"></div></div></div><div id="jauzah"><div class="relative"><div class="row-auto px-2before:content-[&#39;*&#39;] before:bg-[url(&#39;/images/port1/border-couple-1.png&#39;)] before:bg-contain before:bg-no-repeat before:absolute before:block before:left-0 before:w-full before:h-full before:bg-center"><div class="flex max-w-full justify-center"><img src="/images/port1/zaujah.png" alt="Zaujah Photo" class="w-1/3 h-auto rounded-full align-middle border-none"></div></div></div><div class="flex flex-col my-4 text-center justify-center gap-2"><h3 class="text-2xl uppercase font-extrabold text-amber-200 mb-2">Gita</h3><h3>Gita Thohiroturrohmah</h3><p>Putra dari Pasangan <br> Bpk Otong &amp; Ibu Nonoh</p><p>Kp. Pamipiran 02/04 Ds. Pagersari Kec. Pagerageung Kab. Tasikmalaya</p><div class="socmed"></div></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/States/components/Devices/Mobile.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Mobile = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const Index_vue_vue_type_style_index_0_lang = "";
const __default__$5 = {
  components: {
    icons
  },
  computed: {
    ...mapState(useDeviceStore, { deviceTabs: "results" })
  },
  methods: {
    ...mapActions(useDeviceStore, ["setDeviceTabs"])
  },
  created() {
    useDeviceStore();
  },
  data() {
    return {
      iconSizeConfig: {
        height: 6,
        width: 6
      }
    };
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$5, {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "configrations",
        class: "mx-2"
      }, _attrs))}><div class="tabs tabs-boxed justify-end"><a class="${ssrRenderClass([_ctx.deviceTabs.phone ? "tab-active" : "", "tab"])}">`);
      _push(ssrRenderComponent(icons, {
        name: "phonedevice",
        class: "text-center",
        size: _ctx.iconSizeConfig
      }, null, _parent));
      _push(`</a><a class="${ssrRenderClass([_ctx.deviceTabs.tablet ? "tab-active" : "", "tab"])}">`);
      _push(ssrRenderComponent(icons, {
        name: "tabletdevice",
        class: "text-center",
        size: _ctx.iconSizeConfig
      }, null, _parent));
      _push(`</a><a class="${ssrRenderClass([_ctx.deviceTabs.computer ? "tab-active" : "", "tab"])}">`);
      _push(ssrRenderComponent(icons, {
        name: "computerdevice",
        class: "text-center",
        size: _ctx.iconSizeConfig
      }, null, _parent));
      _push(`</a></div><div id="deviceOption"><div id="phone" style="${ssrRenderStyle(_ctx.deviceTabs.phone ? null : { display: "none" })}" class="flex justify-center">`);
      _push(ssrRenderComponent(Mobile, null, null, _parent));
      _push(`</div><div id="tablet" style="${ssrRenderStyle(_ctx.deviceTabs.tablet ? null : { display: "none" })}" class="flex justify-center"><div class="mockup-window border border-base-300 w-1/2"><div class="flex justify-center px-4 py-16 border-t bg-cover bg-[url(&#39;/images/port1/18385244.jpg&#39;)]"><div class="container mx-auto"><div class="flex flex-col justify-center text-center gap-4"><h4 id="title-invite">Undangan Pernikahan</h4><h1>Gita &amp; Yayan</h1><h4>Kamis, 10 November 2022</h4></div></div></div></div></div><div id="computer" style="${ssrRenderStyle(_ctx.deviceTabs.computer ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/States/components/Devices/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __default__$4 = {
  computed: {
    ...mapWritableState(useCoverStore, { title: "getTitleCover", man: "getCouplesMan", girl: "getCoupleGirl", showInviteTo: "getShowInviteTo", fontCover: "getFontCover", fontList: "getFontList" }),
    ...mapState(useSvcGenStore, { miftah: "getMiftah", authheader: "getAuthGenerally" })
  },
  methods: {
    ...mapActions(useCoverStore, ["setTitle", "setCoupleMan", "setCoupleGirl", "setShowInviteTo", "setFontCover", "setFontList"]),
    updateCover() {
      this.setTitle(this.formCover.title);
      this.setCoupleMan(this.formCover.man);
      this.setCoupleGirl(this.formCover.girl);
      this.setShowInviteTo(this.formCover.showInviteTo);
      this.setFontCover(this.formCover.fontSelected);
    },
    changeFontFamily(e) {
      this.formCover.fontSelected = e.target.value;
    }
  },
  mounted() {
    this.formCover.title = this.title;
    this.formCover.man = this.man;
    this.formCover.girl = this.girl;
    this.formCover.showInviteTo = this.showInviteTo;
    setTimeout(() => {
      this.setFontList(this.miftah);
    }, 100);
  },
  data() {
    return {
      formCover: {
        title: "",
        showInviteTo: true,
        man: "",
        girl: "",
        fontSelected: "font-kurale"
      },
      errFontLoad: {}
    };
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$4, {
  __name: "Cover",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Judul Undangan</span></label><input type="text" placeholder="Input Judul Undangan"${ssrRenderAttr("value", _ctx.formCover.title)} class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Pasangan Laki-laki</span></label><input type="text" placeholder="Input Nama Pasangan Laki-laki"${ssrRenderAttr("value", _ctx.formCover.man)} class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Pasangan Wanita</span></label><input type="text" placeholder="Input Nama Pasangan Wanita"${ssrRenderAttr("value", _ctx.formCover.girl)} class="input input-bordered w-full max-w-xs"></div><div class="form-control"><label class="label cursor-pointer"><span class="label-text">Tampilakn Penerima Undangan</span><input type="checkbox"${ssrIncludeBooleanAttr(_ctx.formCover.showInviteTo) ? " checked" : ""}${ssrIncludeBooleanAttr(Array.isArray(_ctx.formCover.showInviteTo) ? ssrLooseContain(_ctx.formCover.showInviteTo, null) : _ctx.formCover.showInviteTo) ? " checked" : ""} class="checkbox checkbox-primary"></label></div><div class="form-control"><label class="label"><span class="label-text">Pilih Font Cover</span></label><select class="${ssrRenderClass([_ctx.formCover.fontSelected, "select select-primary w-full max-w-xs"])}"><!--[-->`);
      ssrRenderList(_ctx.fontList, (item) => {
        _push(`<option${ssrRenderAttr("value", item.class_name)} class="${ssrRenderClass(item.class_name)}"${ssrIncludeBooleanAttr(item.is_default) ? " selected" : ""}>${ssrInterpolate(item.font_name[0].toUpperCase() + item.font_name.substring(1))}</option>`);
      });
      _push(`<!--]--></select></div><div class="form-control w-full max-w-xs pt-4"><button tipe="button" class="btn btn-active btn-primary">Simpan</button></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Maker/Configurations/Cover.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __default__$3 = {
  computed: {
    ...mapWritableState(useCoupleStore, { titleCouples: "getTitleCouple", couplelist: "getCouple" })
  },
  methods: {
    ...mapActions(useCoupleStore, ["setTitleCouple", "setCouple"]),
    updateProfil() {
      this.setTitleCouple(this.formCouple.titlePage);
      this.setCouple(this.formCouple.couples);
    }
  },
  mounted() {
    this.formCouple.titlePage = this.titleCouples;
    this.formCouple.couples = this.couplelist;
  },
  data() {
    return {
      formCouple: {
        titlePage: "",
        orderingMan: false,
        couples: {
          pria: {
            nama_lengkap: "",
            foto: "",
            alamat_ig: "",
            alamat_rumah: "",
            nama_ibu: "",
            nama_ayah: "",
            anak_ke: 0
          },
          wanita: {
            nama_lengkap: "",
            foto: "",
            alamat_ig: "",
            alamat_rumah: "",
            nama_ibu: "",
            nama_ayah: "",
            anak_ke: 0
          }
        }
      }
    };
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$3, {
  __name: "Couples",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Judul Page Calon Mempelai</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.titlePage)} placeholder="Input Page Calon Mempelai" class="input input-bordered w-full max-w-xs"></div><div class="form-control"><label class="label cursor-pointer"><span class="label-text">Urutkan Pria terlbih dahulu</span><input type="checkbox" class="checkbox checkbox-primary"></label></div><div class="flex w-full sm:flex-col lg:flex-row md:flex-row"><div class="grid flex-grow card bg-base-300 rounded-box place-items-center"><div class="card"><h3 class="card-title">Profil Calon Pria</h3><div class="card-body"><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Calon Pria</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.pria.nama_lengkap)} placeholder="Input Nama Calon Pria" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Foto Calon Pria</span></label><input type="file" accept="image/*" placeholder="Input Judul Undangan" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Anak Ke-</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.pria.anak_ke)} placeholder="Input Anak Ke berapa dalam jumalh sodara" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Ayah</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.pria.nama_ayah)} placeholder="Input Nama Ayah" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Ibu</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.pria.nama_ibu)} placeholder="Input Nama Ibu" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Alamat</span></label><textarea class="textarea" placeholder="Alamat">${ssrInterpolate(_ctx.formCouple.couples.pria.alamat_rumah)}</textarea></div></div></div></div><div class="divider divider-horizontal"></div><div class="grid flex-grow card bg-base-300 rounded-box place-items-center"><div class="card"><h3 class="card-title">Profil Calon Wanita</h3><div class="card-body"><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Calon Wanita</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.wanita.nama_lengkap)} placeholder="Input Nama Calon Wanita" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Foto Calon Wanita</span></label><input type="file" accept="image/*" placeholder="Input Judul Undangan" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Anak Ke-</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.wanita.anak_ke)} placeholder="Input Anak ke berapa dalam sodara" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Ayah</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.wanita.nama_ayah)} placeholder="Input Nama Ayah" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Nama Ibu</span></label><input type="text"${ssrRenderAttr("value", _ctx.formCouple.couples.wanita.nama_ibu)} placeholder="Input Nama Ibu" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Alamat</span></label><textarea class="textarea" placeholder="Alamat">${ssrInterpolate(_ctx.formCouple.couples.wanita.alamat_rumah)}</textarea></div></div></div></div></div><div class="form-control w-full max-w-xs pt-4 mb-8"><button tipe="button" class="btn btn-active btn-primary">Simpan</button></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Maker/Configurations/Couples.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const main = "";
const mapboxGl = "";
const mapboxGlGeocoder = "";
const Invitations_vue_vue_type_style_index_0_lang = "";
const __default__$2 = {
  data() {
    return {
      date: null,
      accessToken: "pk.eyJ1IjoieWF5YW4tc29waWFuIiwiYSI6ImNrZGRyNGtoZTFwZ2szMW1rYzMybjVjdzAifQ.3Efkru6X3bmOXNMikeHR6w",
      mapStyle: {},
      zoom: 10,
      center: [108.15628898565814, -7.126416406325575],
      longlat: {}
    };
  },
  created() {
  },
  computed: {},
  methods: {
    getLonglat(e) {
      this.longlat = e.target._lngLat;
      this.center = [e.target._lngLat.lng, e.target._lngLat.lat];
      console.log(this.center);
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "Invitations",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex flex-col w-full"><div class="grid card bg-base-300 rounded-box place-items-center"><div class="card"><div class="card-body"><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Judul Acara</span></label><input type="text" placeholder="Input Judul Acara" class="input input-bordered w-full max-w-xs"></div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Waktu Acara</span></label>`);
      _push(ssrRenderComponent(unref(Datepicker), {
        modelValue: _ctx.date,
        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
        placeholder: "Input Waktu Acara",
        menuClassName: "dp-custom-menu"
      }, null, _parent));
      _push(`</div><div class="form-control w-full max-w-xs"><label class="label"><span class="label-text">Alamat Acara</span></label><textarea class="textarea" placeholder="Input Alamat Acara"></textarea></div></div></div></div><div class="divider"></div><div class="grid card bg-base-300 rounded-box place-items-center"><div class="relative h-96 w-full">`);
      _push(ssrRenderComponent(unref(MapboxMap), {
        class: "absolute h-full w-full",
        "access-token": _ctx.accessToken,
        center: _ctx.center,
        zoom: _ctx.zoom,
        "map-style": "mapbox://styles/mapbox/streets-v11"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MapboxGeocoder), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MapboxGeolocateControl), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MapboxNavigationControl), { position: "bottom-right" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(MapboxMarker), {
              "lng-lat": _ctx.center,
              draggable: true,
              onMbDragend: _ctx.getLonglat
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="p-1 bg-gray-500 border-r-amber-50"${_scopeId2}>Hello world!</p>`);
                } else {
                  return [
                    createVNode("p", { class: "p-1 bg-gray-500 border-r-amber-50" }, "Hello world!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MapboxGeocoder)),
              createVNode(unref(MapboxGeolocateControl)),
              createVNode(unref(MapboxNavigationControl), { position: "bottom-right" }),
              createVNode(unref(MapboxMarker), {
                "lng-lat": _ctx.center,
                draggable: true,
                onMbDragend: _ctx.getLonglat
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "p-1 bg-gray-500 border-r-amber-50" }, "Hello world!")
                ]),
                _: 1
              }, 8, ["lng-lat", "onMbDragend"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Maker/Configurations/Invitations.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __default__$1 = {
  props: {
    slot: String
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Configs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.slot === "Cover") {
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.slot === "Profil Pasangan") {
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.slot === "Detail Undangan") {
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Maker/Configs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useMakerStore = defineStore("maker-store", {
  state: () => {
    return {
      contentShow: ``,
      contentSetting: [],
      contentActive: "Cover",
      erroReport: []
    };
  },
  getters: {
    getContents(state) {
      return state.contentSetting;
    },
    getActiveContent(state) {
      return state.contentActive;
    }
  },
  actions: {
    async setContentSetting(authSetting) {
      await axios.get(`/api/setting/contents`, authSetting).then((response) => {
        this.contentSetting = response.data;
      }).catch((error) => {
        console.error(error);
      });
    },
    setActiveContent(content) {
      this.contentActive = content;
    }
  }
});
const __default__ = {
  props: {
    generallyAPIKey: String,
    generallySecretKeyAPI: String
  },
  components: {
    icons,
    devices: _sfc_main$5
  },
  data() {
    return {
      isShowConfig: false,
      iconSizeLink: {
        height: 4,
        width: 4
      },
      iconSizeConfig: {
        height: 6,
        width: 6
      }
    };
  },
  computed: {
    ...mapState(useMakerStore, { contents: "getContents", contentActive: "getActiveContent" }),
    ...mapState(useCoverStore, { man: "getCouplesMan", girl: "getCoupleGirl" }),
    ...mapState(useSvcGenStore, { miftah: "getMiftah", motivation: "getMotivation", authheader: "getAuthGenerally" })
  },
  methods: {
    ...mapActions(useMakerStore, ["setContentSetting", "setActiveContent"]),
    ...mapActions(useSvcGenStore, ["setMiftah", "setMotivation", "setAuthGenerally"]),
    setShowConfig() {
      this.isShowConfig = !this.isShowConfig;
    }
  },
  mounted() {
    this.setMiftah(this.generallyAPIKey);
    this.setMotivation(this.generallySecretKeyAPI);
    this.setAuthGenerally(this.generallyAPIKey);
    this.setContentSetting(this.authheader);
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Maker",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="navbar bg-base-100"><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></label><ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a>Homepage</a></li><li><a>Portfolio</a></li><li><a>About</a></li></ul></div></div><div class="navbar-center"><a class="btn btn-ghost normal-case text-xl">Gista</a></div><div class="navbar-end"><div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img src="https://placeimg.com/80/80/people"></div></label><ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a class="justify-between">${ssrInterpolate(_ctx.girl)} &amp; ${ssrInterpolate(_ctx.man)} <span class="badge">`);
      _push(ssrRenderComponent(icons, {
        name: "link",
        class: "mt-1 mr-1",
        size: _ctx.iconSizeLink
      }, null, _parent));
      _push(`</span></a></li><li><a>Logout</a></li></ul></div></div></div><div class="container mx-auto"><div class="alert alert-warning shadow-lg"><div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><div><h3 class="font-bold">Website Undangan kamu <b>belum aktif</b>!</h3><div class="text-xs">Masa percobaan Tersisa 2 hari, 7 jam, 25 menit, 38 detik lagi</div></div></div><div class="flex-none"><button class="btn btn-sm">Upgrade Paket</button></div></div></div><div class="mx-auto"><div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"><input type="checkbox" class="peer"${ssrIncludeBooleanAttr(_ctx.isShowConfig) ? " checked" : ""}><div class="collapse-title text-xl font-medium"> Konfigurasi Undangan </div><div class="collapse-content h-96"><div class="drawer drawer-mobile"><input id="my-drawer-2" type="checkbox" class="drawer-toggle"><div class="drawer-content flex flex-col h-96 overflow-y-auto"><div class="flex flex-col gap-2"><div><label for="my-drawer-2" class="btn btn-secondary drawer-button lg:hidden absolute right-2">`);
      _push(ssrRenderComponent(icons, {
        name: "adjustments-horizontal",
        class: "text-center",
        size: _ctx.iconSizeConfig
      }, null, _parent));
      _push(`</label></div><div class="h-96 overflow-y-auto ml-8">`);
      _push(ssrRenderComponent(_sfc_main$1, { slot: _ctx.contentActive }, null, _parent));
      _push(`</div></div></div><div class="drawer-side h-96 overflow-y-auto"><label for="my-drawer-2" class="drawer-overlay"></label><ul class="menu p-4 w-80 bg-base-100 text-base-content"><!--[-->`);
      ssrRenderList(_ctx.contents, (item) => {
        _push(`<li><a class="${ssrRenderClass(item.name === _ctx.contentActive ? "bg-gray-500" : "")}">`);
        _push(ssrRenderComponent(icons, {
          name: item.icon,
          class: "text-center",
          size: _ctx.iconSizeConfig
        }, null, _parent));
        _push(` ${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Maker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
