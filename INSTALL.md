# Installation and Running

Install Methods:

- [Replace in-game Try Mode with `.stormmap` file (All Platforms)](#runStormmap-customstormmap) (Recommended ✔)
- [Replace in-game Try Mode with repo's folder for modding (All Platforms)](#runStormmap-custom)
- [Run the `.stormmap` file directly](#runStormmap)
  - [Command Line (Directly)](#runStormmap-cmdDirectly)
  - [Command Line (Relatively)](#runStormmap-cmdRelatively)
  - [File Association (Windows-Only)](#runStormmap-fileassoc)

Post Installation Check:

 - [Post-Install check](#runStormmap-postInstall)


<a name="runStormmap-customstormmap"></a>
## Replace in-game Try Mode with `.stormmap` file (All Platforms)

This method is **recommended** if you are not going to mod/change anything in the try mode, as it is the easiest way to install and manage.

>Note that: `trymode20.stormmap` in the Release page is the same as the `(10)trymemode.stormmap` folder in this repo.

1. Download any `.stormmap` file.
2. Rename the file to `(10)trymemode.stormmap`.
3. Place the file in `"Heroes_Of_The_Storm_Install_Location/maps/heroes/singleplayermaps"`(also create necessary directories)

You should get the similar directory structure as below:

    Heroes of the Storm/
    ├── HeroesData/
    ├── maps/
    │   └──heroes/
    |      └──singleplayermaps/
    |         └──(10)trymemode.stormmap   <- the renamed stormmap file
    ├── Support/
    ├── Support64/
    ├── Versions/
    ├── .build.info
    ├── .product.db
    ├── Heroes of the Storm.exe
    └── Launcher.db

Then, you can launch try mode with any hero in-game and the modified map should be launched.

>Note: If you would like to restore the original try mode, simply delete or rename the file.

If you would like to replace the in game tutorial instead (Setting -> Tutorial), you can place it in the following folder (of course also rename the file correspondingly):

(This can be handy if you want multiple `.stormmap` at once.)

    Heroes of the Storm/
    ├── HeroesData/
    ├── maps/
    │   └──heroes/
    |      └──singleplayermaps/
    |         └──startingexperience/
    |            └──tutorial01.stormmap            <- Tutorial
    |            └──tutorialmapmechanics.stormmap  <- Battleground Training
    |            └──tutorialveteran.stormmap       <- Veteran Tutorial
    ├── Support/
    ├── Support64/
    ├── Versions/
    ├── .build.info
    ├── .product.db
    ├── Heroes of the Storm.exe
    └── Launcher.db

<a name="runStormmap-custom"></a>
## Replace in-game Try Mode with repo's folder for modding (All Platforms)

This method is for users going to mod the try mode.

1. Clone this repo (or download as zip)
2. Copy the `(10)trymemode.stormmap` folder in this repo
3. Paste it in `"Heroes_Of_The_Storm_Install_Location/maps/heroes/singleplayermaps"` (also create necessary directories).

You should get the similar directory:

    Heroes of the Storm/
    ├── HeroesData/
    ├── maps/
    │   └──heroes/
    |      └──singleplayermaps/
    |         └──(10)trymemode.stormmap/ <- the folder from this repo
    ├── Support/
    ├── Support64/
    ├── Versions/
    ├── .build.info
    ├── .product.db
    ├── Heroes of the Storm.exe
    └── Launcher.db

>Tip: You can make a symbolic link that allows you to use the tools as well. (e.g `mklink /D /J "path/to/heroes/maps/heroes/singleplayermaps/(10)trymemode.stormmap" "path/to/repo/(10)trymemode.stormmap"`)


If you would like to replace the in game tutorial instead (Setting -> Tutorial), you can place it in the following folder (of course also rename the folder correspondingly):

(This can be handy if you want multiple modded at once.)

    Heroes of the Storm/
    ├── HeroesData/
    ├── maps/
    │   └──heroes/
    |      └──singleplayermaps/
    |         └──startingexperience/
    |            └──tutorial01.stormmap/            <- Tutorial
    |            └──tutorialmapmechanics.stormmap/  <- Battleground Training
    |            └──tutorialveteran.stormmap/       <- Veteran Tutorial
    ├── Support/
    ├── Support64/
    ├── Versions/
    ├── .build.info
    ├── .product.db
    ├── Heroes of the Storm.exe
    └── Launcher.db

<a name="runStormmap"></a>
## Run the `.stormmap` file directly (Windows-only)

> Note: Using the two command lines (obviously change the executable as well) method below might work in Linux or MacOS, but I haven't test it out.

**Important**: Using the methods in this section will cause stuff such as heroes talent will not be loaded.

> TODO: Figuring out what talents are not loaded

<a name="runStormmap-fileassoc"></a>
### Windows File Association

This allows you to double click on the `*.stormmap` file and run the map directly.

Each of the push request to Github will automatically generate a patched version of the all the maps in the game. Including main maps (e.g Cursed Hollow, Sky temple, etc) and Brawl Maps (e.g Lost Cavern, Lunar Rocket Racing and PVE Escape from Braxis).

These maps will automatically include additional functionalities provided in this repo (such as using the debug menu with the `\` key, chat command, XML files, extra UIs).

>Note: Please noted that some maps will not work properly, showing the "Map Error" Screen (As shown in [Post-Install check](#runStormmap-postInstall) section). This is due to some maps are not maintained by Blizzard anymore (surprisingly Haunted Mines still works), this problem mainly exists on Brawl maps.

>Note: The map `trymode20.stormmap` is the packaged map file for this repo's `./(10)trymemode.stormmap`.

In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, There are

1. In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, download your desired map.

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

In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, download your desired map. Afterwards, you can run the map with the command:

>Note: The commands below assumes you downloaded `trymode20.stormmap`. Change the path/name according to your downloaded map.

`"path/to/Heroes of the Storm/Support64/HeroesSwitcher_x64.exe" "path/to/downloaded/trymode20.stormmap"`

(e.g `"C:/Program Files/Heroes of the Storm/Support64/HeroesSwitcher_x64.exe" "C:/Users/your_name/Downloads/trymode20.stormmap"`)

>Note: `path/to/downloaded/trymode20.stormmap` **must** be an absolute path, or the map will not be loaded.

<a name="runStormmap-cmdRelatively"></a>
### Windows Command Line (Relatively)

>Note: Unlike most other shell commands, relative path for Heroes does not work current working directory, but relative to `Heroes_Of_The_Storm_Install_Location/maps`.

The game will load the map relative to the `Heroes_Of_The_Storm_Install_Location/maps`. If you would like to *not* reference the `.stormmap` file with an absolute path (or save the map for later use), you can do the following:

In the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) page, download your desired map.

>Note: The commands below assumes you downloaded `trymode20.stormmap`. Change the path/name according to your downloaded map.

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

<a name="runStormmap-postInstall"></a>
## Post-Install check
After you installed, Launch the try mode in game. During loading, it should have a *sexy jimmy-in-a-rabbit* 🔫🐰 background:

![Map Loading](https://i.imgur.com/jDPNHxg.png)


When the game loaded, you should see the message on the left of the screen:

![Starting Message](https://i.imgur.com/A5vkLFv.png)

Start by typing "hi" in the chat message (in-game allies or all chat, **not private or public channel chat**) and you should see your name responded:

![Chat Message](https://i.imgur.com/CJPhy9r.png)

![Name Response](https://i.imgur.com/TjWJmdd.png)

If you see something like this, maybe the game just updated with broken compatibility, please wait for update or create an issue.

![Map script error](https://i.imgur.com/cjXbq07.jpg)