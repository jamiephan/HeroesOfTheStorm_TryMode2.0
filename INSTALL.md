# Installation and Running

Install Methods:

- [Run the stormmap file directly (Windows-only)](#runStormmap)
  - [Windows File Association](#runStormmap-fileassoc)
  - [Windows Command Line (Directly)](#runStormmap-cmdDirectly)
  - [Windows Command Line (Relatively)](#runStormmap-cmdRelatively)
- [Replace in-game Try Mode (All Platforms)](#runStormmap-custom) (Recommended ✔)

Post Installation Check

 - [Post-Install check](#runStormmap-postInstall)


<a name="runStormmap"></a>
## Run the `.stormmap` file directly (Windows-only)

**Important**: Using the methods in this section will cause stuff such as heroes talent will not be loaded.

> TODO: Figuring out what talents are not loaded

<a name="runStormmap-fileassoc"></a>
### Windows File Association (double click to open)

This allows you to double click on the `*.stormmap` file and run the map directly.

1. In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, download the latest `trymode20.stormmap`.

2. Locate your downloaded `.stormmap` file:

    ![Locate .stormmap](https://i.imgur.com/W69aqYz.png)

3. On the "Open With" Dialog, click on "More Apps"

    ![Open With dialog](https://i.imgur.com/uEqhnxx.png)

4. Click on the "Look for another app on the PC"

    ![Look for another app](https://i.imgur.com/XJ0oiub.png)

5. Locate the `HeroesSwitcher_64.exe`, usually in `Heroes of the Storm/Support64/` folder.

    ![Locate HeroesSwitcher_64.exe](https://i.imgur.com/AZTp2Kw.png)

6. Double Click on the file and load the map:
    ![Verify](https://i.imgur.com/vmPneQE.png)
    

<a name="runStormmap-cmdDirectly"></a>
### Windows Command Line (Directly)

In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, download the latest `trymode20.stormmap`. Afterwards, you can run the map with the command:

`"path/to/Heroes of the Storm/Support64/HeroesSwitcher_x64.exe" "path/to/downloaded/trymode20.stormmap"`

(e.g `"C:/Program Files/Heroes of the Storm/Support64/HeroesSwitcher_x64.exe" "C:/Users/your_name/Downloads/trymode20.stormmap"`)

>Note: `path/to/downloaded/trymode20.stormmap` **must** be an absolute path, or the map will not be loaded.

<a name="runStormmap-cmdRelatively"></a>
### Windows Command Line (Relatively)

>Note: Unlike most other shell commands, relative path for Heroes does not work current working directory, but relative to `Heroes_Of_The_Storm_Install_Location/maps`.

The game will load the map relative to the `Heroes_Of_The_Storm_Install_Location/maps`. If you would like to *not* reference the `.stormmap` file with an absolute path (or save the map for later use), you can do the following:

In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, download the latest `trymode20.stormmap`.

Create a `maps` folder in `Heroes_Of_The_Storm_Install_Location/` and copy the downloaded `trymode20.stormmap` into it:

    Heroes of the Storm/
    ├── HeroesData/
    ├── maps/                     <- Create This folder
    │   └── trymode20.stormmap    <- Paste the file in here
    ├── Support/
    ├── Support64/
    ├── Versions/
    ├── .build.info
    ├── .product.db
    ├── Heroes of the Storm.exe
    └── Launcher.db

Now that you can simply run:

`"path/to/Heroes of the Storm/Support64/HeroesSwitcher_x64.exe" trymode20.stormmap`

(e.g `"C:/Program Files/Heroes of the Storm/Support64/HeroesSwitcher_x64.exe" trymode20.stormmap"`)

For even better, you can add `path/to/Heroes of the Storm/Support64/` into your `%PATH%` environment variable, so that your command can be reduced to `HeroesSwitcher_x64.exe trymode20.stormmap`.

<a name="runStormmap-custom"></a>
## Replace in-game Try Mode (All Platforms)

Heroes of the Storm allows user to override the `mods/heroes.stormmod/base.stormmaps/maps <==> INSTALL_DIR/maps`.

In order words, to use this map, copy the folder `(10)trymemode.stormmap` in this repo to `"Heroes_Of_The_Storm_Install_Location/maps/heroes/singleplayermaps"` (also create necessary directories), which you should get the similar directory:

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

<a name="runStormmap-postInstall"></a>
## Post-Install check
After you installed, Launch the try mode in game. During loading, it should have a *sexy jimmy-in-a-rabbit* 🔫🐰 background:

![Map Loadeding](https://i.imgur.com/jDPNHxg.png)


When the game loaded, you should see the message on the left of the screen:

![Starting Message](https://i.imgur.com/A5vkLFv.png)

Start by typing "hi" in the chat message (in-game allies or all chat, **not private or public channel chat**) and you should see your name responded:

![Chat Message](https://i.imgur.com/CJPhy9r.png)

![Name Response](https://i.imgur.com/TjWJmdd.png)

If you see something like this, maybe the game just updated with broken compatibility, please wait for update or create an issue.

![Map script error](https://i.imgur.com/cjXbq07.jpg)