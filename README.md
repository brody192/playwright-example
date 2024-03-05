# This example is to be used with the [Browserless template](https://railway.app/template/browserless)

Create a referance variable on your service

```shell
WS_ENDPOINT_PLAYWRIGHT=${{Browserless.WS_ENDPOINT_PLAYWRIGHT}}
```

</br>

Then use `process.env.WS_ENDPOINT_PLAYWRIGHT` in code

### Before

```javascript
const browser = await playwright.chromium.launch();
```

### After

```javascript
const browser = await playwright.chromium.connect(process.env.WS_ENDPOINT_PLAYWRIGHT);
```

The rest of your code remains the same with no other changes required.