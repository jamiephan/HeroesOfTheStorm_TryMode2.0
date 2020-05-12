# Adding the mods to your map

## Modules

All modules are under the `/Modules` directory in `(10)trymemode.stormmap/base.stormdata`.

| Module Name|File|Lib Id| Brief functionality|
|:------------- |:------------- |:-------------|:-----|
| Module Loader|`LibModuleLoader.galaxy`|`libMODL`|A unified Module Loader Lib that allows you to choose which module to load,|
| Utilities|`LibUtilities.galaxy`|`libUTIL`|A Module that have utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.|
| Units |`LibUnits.galaxy`|`libUNIT`|Commands that are related to Players, eg, scoreboard, respawn timer, etc|
| Players |`LibPlayers.galaxy`|`libPLYR`|Commands that are related to units, eg, spawn, kill, etc|
| Builder Mode |`LibBuilderMode.galaxy`|`libBULM`|A Builder Module that allows you to place objects anywhere in the map.|
| FPS Mode|`LibFPSMode.galaxy`|`libFPSM`|A FPS Module that allows you to see the map in first person camera.|
| Free Camera Mode|`LibFreeCameraMode.galaxy`|`libFRCM`|Free Camera Mode allows you to change the angle of the camera easily.|
| Funny Module |`LibFunny.galaxy`|`libFUNY`|Some random code that I put in when I am boring.|

You can easily add modules or use the above in your map easily!

1. Copy the whole directory `Modules` in `base.stormdata`
2. Put it in your mods or map file's directory, should be something like `/your/path/to/ModOrMap.stormmap(or .stormmod)/base.stormdata/Modules`

## How to use it in your own map

If you are developing a map, you should have a `MapScript.galaxy` file in the root of your map directory.

>Note: I suggest use text editor that supports syntax highlighting such as Sublime Text, VS code or Notepad ++

1. Open the `MapScript.galaxy` in your text editor.
2. For the first few lines, you should see bunch of `include "XXXX"`. (If not, just add it on top of the file.)
3. After the last line, add the code in a new line: `include "Modules/LibModuleLoader"`:
     
        include "XXXXXXX"
        include "XXXXXXX"
        ...
        include "Modules/LibModuleLoader"
        
4. Then find the function named `InitLibs ()`, which look like this:

        void InitLibs () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
        }

5. At the last line, add the code `libMODL_InitLib();`, which looks like this:

        void InitLibs () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
            libMODL_InitLib();
        }
6. Save the file and open the map, you should see some modules loaded message appear: 
![Loaded Modules](https://i.imgur.com/Jwci20Y.jpg)
7. If there any errors, which will looks like this, then check your code again:
![Map script error](https://i.imgur.com/cjXbq07.jpg)

## How to use in your own Mod

If you are developing a mod, you should have a created a `.galaxy` file inside `base.stormdata` directory. If not, create one using tools such as SC2 Editor and add a trigger library, or make your own

>Note: I suggest use text editor that supports syntax highlighting such as Sublime Text, VS code or Notepad ++

1. Open the `.galaxy` in your text editor.
2. For the first few lines, you should see bunch of `include "XXXX"`. (If not, just add it on top of the file.)
3. After the last line, add the code in a new line: `include "Modules/LibModuleLoader"`:
     
        include "XXXXXXX"
        include "XXXXXXX"
        ...
        include "Modules/LibModuleLoader"
        
4. Your `.galaxy` file should have a LibID, which most functions or variables star with. It is beginning with `lib` then either follow by a 4 character or 6 random Hex characters. It should not hard to find it. (below will use `libXXXX` as example)

5. Then find the function named `libXXX_InitLibraries ()`, which look like this:

        void libXXX_InitLibraries () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
        }

5. At the last line, add the code `libMODL_InitLib();`, which looks like this:

        void libXXX_InitLibraries () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
            libMODL_InitLib();
        }
6. Save the file and open the map, you should see some modules loaded message appear: 
![Loaded Modules](https://i.imgur.com/Jwci20Y.jpg)
7. If there any errors, which will looks like this, then check your code again:
![Map script error](https://i.imgur.com/cjXbq07.jpg)