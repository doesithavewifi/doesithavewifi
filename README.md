# Does it have wifi?

## Development

Requires **Node 0.12+**.

Install:

```bash
$ npm install -g gulp
$ npm install
```

Run server with auto-reload (without minification):

```bash
$ gulp
```

To force minification of assets (build takes a bit longer) include the `--minified` flag:

```bash
$ gulp --minified
```

## Production deployment

SSH as root into the production server:

```
$ ssh root@45.55.241.79
$ cd /opt/doesithavewifi
$ git pull
$ npm run build
```

## Credits

* [Ramesh Nair](https://github.com/hiddentao)
* [Jeff Lau](https://github.com/jefflau)
* [Leon Talbert](https://github.com/LeonmanRolls)

## License

AGPLv3 - see LICENSE.txt
