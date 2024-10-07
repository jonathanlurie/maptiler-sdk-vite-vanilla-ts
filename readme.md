# MapTiler SDK + ViteJS + Vanilla TS

![](SDK-vite-ts.png)

The startng point for this project was the [Vanilla TS sample project](https://vite.new/vanilla-ts) listed on the [ViteJS guide page](https://vitejs.dev/guide/).

Then, we install **Maptiler SDK**:

```shell
npm install @maptiler/sdk
```

The main difference from the Vite boilerplate is in the `tsconfig.json` file of the project, where we set the property `"esModuleInterop"` to `true` because Maplibre GL JS (the foundation for MapTiler SDK) exposes a CommonJS bundle. This option increases compatibility between packages that use different bundling modalities.

Then don't forget to replace the MapTiler API key with your own in the file `src/main.ts`. Get one for free with a generous plan here [https://cloud.maptiler.com/](https://cloud.maptiler.com/).

Find tons of examples on our [SDK page](https://docs.maptiler.com/sdk-js/examples/)!
