const initWorker              = async () => {

  await navigator.serviceWorker.register(

    new URL("ui-sw.js", import.meta.url), { type: "module"

  }).then((registration) => {

    console.log("Service worker registered:", registration);

  }).catch((error) => {

    console.log("Error registering service worker:", error);
  });
};

initWorker();
