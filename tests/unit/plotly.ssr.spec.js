/**
 * @jest-environment node
 */

const Vue = require("vue");
const renderer = require("vue-server-renderer").createRenderer();
const Plotly = require("@/components/Plotly").default;
  /* eslint-disable */
Vue.component("plotly", Plotly);
  /* eslint-enable */
const app = new Vue({
  name: "test-app",
  template: `<plotly></plotly>`
});
let html;

describe("Plotly.vue in a ssr context", () => {
  beforeEach(async () => {
    html = await renderer.renderToString(app);
  });

  it("can be rendered", () => {
    const expected = '<div data-server-rendered="true"></div>';
    expect(html).toEqual(expected);
  });
});
