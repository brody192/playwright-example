# This example is to be used with the [Browserless template](https://railway.app/template/browserless)

Create a reference variable on your service

```shell
BROWSER_PLAYWRIGHT_ENDPOINT=${{Browserless.BROWSER_PLAYWRIGHT_ENDPOINT}}
```

</br>

Then use `process.env.BROWSER_PLAYWRIGHT_ENDPOINT` in code

### Before

```javascript
const browser = await playwright.chromium.launch();
```

### After

```javascript
const browser = await playwright.chromium.connect(process.env.BROWSER_PLAYWRIGHT_ENDPOINT);
```

The rest of your code remains the same with no other changes required.