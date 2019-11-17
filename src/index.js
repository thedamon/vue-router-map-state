import Vue from "vue";
import VueRouter from "vue-router";

const generateComputed = (
  params,
  { history = false, formatQueryParam = p => p, jsonEncodeValues = false } = {},
  sync = false
) => {
  const paramNames = params;
  const computed = {};
  paramNames.forEach(param => {
    // if (!this.$router) installRouter();
    const qParam = formatQueryParam(param);
    const verb = history ? "push" : "push";

    const get = function() {
      return this.$route && this.$route.query && this.$route.query[qParam];
    };
    const set = function(val) {
      this.$router[verb]({ query: { ...this.$route.query, [qParam]: val } });
    };
    computed[param] = sync ? { get, set } : get;
  });
  return computed;
};

export const syncQueryParams = (params, config) => {
  return generateComputed(params, config, true);
};

export const mapQueryParams = (params, config) => {
  return generateComputed(params, config, false);
};

const installRouter = () => {
  Vue.use(VueRouter);
  this.$router = new VueRouter();
};
