import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const CButton = defineComponent({
  name: "CButton",
  render() {
    return h("button", 1);
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
  return openBlock(), createElementBlock("button", null, "sfc button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("TSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(CButton.name, CButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  CButton,
  JSXButton,
  SFCButton,
  entry as default
};
