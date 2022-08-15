(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.SmartUI = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const CButton = vue.defineComponent({
    name: "CButton",
    render() {
      return vue.h("button", 1);
    }
  });
  const _sfc_main = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "sfc button");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const JSXButton = vue.defineComponent({
    name: "JSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("TSX Button")]);
    }
  });
  const entry = {
    install(app) {
      app.component(CButton.name, CButton);
      app.component(SFCButton.name, SFCButton);
      app.component(JSXButton.name, JSXButton);
    }
  };
  exports2.CButton = CButton;
  exports2.JSXButton = JSXButton;
  exports2.SFCButton = SFCButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
