Vadim Tudor app
===

Source code for the Vadim Tudor native app. This is a [soundboard][1]-type app. There are other similar apps on the Android Play store but this one doesn't display any ads.

It's built with [react-native][2] and [expo][3], and (soon will be) published to both the Android and iOS app stores.

## Building and running locally

Requirements:

```bash
$ uname -mprsv
Darwin 16.7.0 Darwin Kernel Version 16.7.0: Thu Jun 15 17:36:27 PDT 2017; root:xnu-3789.70.16~2/RELEASE_X86_64 x86_64 i386
$ node --version
v8.4.0
$ npm --version
4.6.1 # Expo warns if you use a newer version, but it may still work.
$ exp --version # npm i -g exp
44.0.0
```

Run:

```bash
$ npm i
$ exp start
```

Then open the [Expo client app](https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8) and scan the QR code.

## License

[MIT](LICENSE).

[1]: https://en.wikipedia.org/wiki/Soundboard_(computer_program)
[2]: https://facebook.github.io/react-native/
[3]: https://expo.io
