// Opens the main UI in a new tab or focuses on an existing one.
const openMainUI              = () => {

  const url                   = chrome.runtime.getURL("index.html");

  chrome.tabs.query( { url }, (tabs) => {

    if (tabs && tabs.length > 0) {

      const tab               = tabs[0];

      if (tab.id !== void 0) {

           chrome.tabs.update(tab.id,       { active:  true }, () => { });
        chrome.windows.update(tab.windowId, { focused: true }, () => { });
      }
    } else {

      chrome.tabs.create({ url }, (tab) => { });
    }
  } );
};

chrome.action.onClicked.addListener(openMainUI);

const hasChromiumIssue1316588 = () => {

  return new Promise((resolve) => {

    let dispatched            = false;

    const testEventDispatching = () => {

      chrome.storage.local.onChanged.removeListener(testEventDispatching);

      dispatched              = true;
    };

    chrome.storage.local.onChanged.addListener(testEventDispatching);
    chrome.storage.local.set({ testEventDispatching: Math.random() });

    setTimeout( () => resolve(!dispatched), 200 );
  });
};

const fixChromiumIssue1316588 = () => {

  hasChromiumIssue1316588().then((hasIssue) => {

    if (hasIssue) {

      console.error("fixChromiumIssue1316588: events not working.");

      // Comment in to reload extension context.
      // chrome.runtime.reload();

    } else {

      setTimeout( fixChromiumIssue1316588, 2000 );
    }
  });
};

fixChromiumIssue1316588();

console.warn("ServiceWorker loaded");
