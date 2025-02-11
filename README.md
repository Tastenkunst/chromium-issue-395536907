# chromium-issue-395536907
A reproduction of Chromium issue 395536907

* [Issue](https://bugs.chromium.org/p/chromium/issues/detail?id=395536907)

## Steps to reproduce

1. Have Chrome version 133.0.6943.53/54 installed
2. Open clean browser profile
3. Open extension management page (chrome://extensions/)
4. Enable developer mode
5. Load unpacked extension (this repository)
6. Open the development console for the Service Worker
7. Open the main UI by clicking the extension icon
8. DON'T open the dev console for the main UI (as having it open at the time of the bug will prevent the bug from happening)
9. Wait for 30 to 60 seconds.
10. The Service Worker developer console will print an error once it loses event attachment.
