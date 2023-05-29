import { createToaster } from "@meforma/vue-toaster";

export default defineNuxtPlugin((nuxtApp) => {
    const toaster = createToaster({
        position: 'top-right'
    });
    
    nuxtApp.provide("toast", toaster);
    
  });
  