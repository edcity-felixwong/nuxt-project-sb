import { defineStore } from "pinia";

const devHostname: string[] = [
  "localhost", //
  "e.star.dev.hkedcity.net",
];
const uatHostname: string[] = [
  "estar-uat.edcity.hk", //
];
const stagingHostname: string[] = [
  // "e.star.dev.hkedcity.net",//
];
const prdHostname: string[] = [
  "estar.edcity.hk", //
];
const ENV = {
  DEV: "DEV",
  UAT: "UAT",
  STAGING: "STAGING",
  PRD: "PRD",
} as const;
const allowedHostname: string[] = [...devHostname];
const blockedHostname: string[] = [];

const _isHostnameValid = () =>
  allowedHostname.includes(window.location.hostname) &&
  !blockedHostname.includes(window.location.hostname);

const getEnv = () => {
  if (!_isHostnameValid()) return null;
  if (devHostname.includes(window.location.hostname)) return ENV.DEV;
  if (uatHostname.includes(window.location.hostname)) return ENV.UAT;
  if (stagingHostname.includes(window.location.hostname)) return ENV.STAGING;
  if (prdHostname.includes(window.location.hostname)) return ENV.PRD;
  return null;
};

export const useEnvironmentStore = defineStore("environment", () => {
  const isHostnameValid = computed(_isHostnameValid);
  const env = ref(getEnv());
  const isDev = computed(() => env.value === ENV.DEV);
  const isUat = computed(() => env.value === ENV.UAT);
  const isStaging = computed(() => env.value === ENV.STAGING);
  const isPrd = computed(() => env.value === ENV.PRD);

  function getCurrentEnvHostname() {
    if (isDev.value) return "e.star.dev.hkedcity.net";
    if (isUat.value) return window.location.hostname;
    if (isStaging.value) return window.location.hostname;
    if (isPrd.value) return window.location.hostname;
    throw new Error("Can't find suitable hostname.");
  }
  return { isHostnameValid, env, isDev, isUat, isStaging, isPrd, getCurrentEnvHostname };
});
