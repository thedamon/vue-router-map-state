import Vue from "vue";
// import { mount } from "@vue/test-utils";
import { syncQueryParams, mapQueryParams } from "../src";

const vm = new Vue({
  name: "huh",
  computed: {
    ...syncQueryParams(["page", "sort"]),
    ...mapQueryParams(["author"])
  }
});
describe("Computed shape looks capiche", () => {
  test("we have computed props with correct names", () => {
    expect(Object.keys(vm.$options.computed)).toEqual([
      "page",
      "sort",
      "author"
    ]);
  });
  // test("we have 2 synced bois", () => {});
  // test("we have 1 mapped boi", () => {});
});

// TODO: figure out involving router and the query params in the unit tests bc that's what we're after.
