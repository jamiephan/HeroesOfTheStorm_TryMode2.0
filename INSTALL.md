# Installation and Running

## Run the `.stormmap` file

In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, download the latest `trymode20.stormmap`. Afterwards, you can run the map with the command:

`"path/to/Heroes of the Storm/Support64/HeroesSwitcher_x64.exe" -run "path/to/downloaded/trymode20.stormmap"`

>Note: `path/to/downloaded/trymode20.stormmap` **must* * be an absolute path, or the map will not be loaded.

## Custom Installation

Heroes of the Storm allows user to override the `mods/heroes.stormmod/base.stormmaps/maps <==> INSTALL_DIR/maps`.

In order words, to use this map, copy the folder `(10)trymemode.stormmap` in this repo to `"Heroes_Of_The_Storm_Install_Location/maps/heroes/singleplayermaps"` (also create nessasary directories), which you should get the similar directory:

    Heroes of the Storm/
    ├── HeroesData/
    ├── maps/
    │   └──heroes/
    |      └──singleplayermaps/
    |         └──(10)trymemode.stormmap/
    ├── Support/
    ├── Support64/
    ├── Versions/
    ├── .build.info
    ├── .product.db
    ├── Heroes of the Storm.exe
    └── Launcher.db

After you installed, Launch the try mode in game and you should see the message on the left of the screen:

![Starting Message](https://i.imgur.com/A5vkLFv.png)

Start by typing "hi" in the chat message (in-game allies or all chat, not private or channel chat) and you should see your name responded.

If you see something like this, maybe the game just updated with broken compatibility, please wait for update or create an issue.

![Map script error](https://i.imgur.com/cjXbq07.jpg)