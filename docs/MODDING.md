# Modding

There are multiple ways to mod this map file:

- [Edit the XML files](#mod-xml)
- [Edit the Galaxy Script files](#mod-galaxy)
- [Edit the Asset files](#mod-assets)
- [Adding extra `*.stormmod` mods](#mod-stormmod)

<a name="mod-xml" />

## Edit the XML files

Modifications of XML files are under `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`).

Generally, You can override the XML Keys that the game has. The game will use your own version instead. However, you must follow the XML level structure similar to the game has. For example, to make Maiev's Fan of Knives (Q) to have no cooldown and do insane damage, your XML should look something like this:

    <?xml version="1.0" encoding="us-ascii"?>
    <Catalog>
        <CAbilEffectTarget id="MaievFanOfKnives">
            <Cost>
                <Cooldown TimeUse="0" />
            </Cost>
        </CAbilEffectTarget>
        <CEffectDamage id="MaievFanOfKnivesDamage" parent="StormSpell">
            <Amount value="9999999" />
        </CEffectDamage>
    </Catalog>


All XML modifications must be inside the `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`). Any subdirectories or file name (provided its ending with `.xml`) are not limited.

It is recommend using the tool `npm run build:xml` to build the XML files, for more, see [TOOLS.md](TOOLS.md#tools-buildxml).

---

<a name="mod-galaxy" />

## Edit the Galaxy Script files

Modifications of Galaxy files in (`./(10)trymemode.stormmap/base.stormdata`), same as where the custom command library located at.

I have also published the `Modules_Editor.SC2Mod` in `(10)trymemode.stormmap/base.stormdata/Modules/` that you can open it in SC2 Editor, However due to some issues between SC2 Editor and Heroes (some functions and variables does not exist is both sides or even have incompatible function signature)

**IMPORTANT: DO NOT do this to `LibModuleLoader.galaxy` and `Module Loader` in SC2Editor or the whole modding will fail.**


### Modifying Current Library Files:

1. Change The Viewing mode to Triggers, or Pressing F6:

![](https://i.imgur.com/tjWy1BG.png)

2. Change Whatever you like in here, with some exceptions, see below:

![](https://i.imgur.com/owiyGwk.png)

3. Please see the [save and modify section](#save-and-modify) below:

### Adding New Galaxy Library:

Adding a New lib is also pretty simple:

1. Adding a new Lib by right click on empty space:

![](https://i.imgur.com/5rogkWe.png)

![](https://i.imgur.com/inOHIqD.png)

2. However, I do suggest you change the library ID to a 4 character ID:

![](https://i.imgur.com/MwQr2NP.png)

3. Change whatever you like on the first box and uncheck the "Auto Load":

![](https://i.imgur.com/s30zhnO.png)

4. To Save, do the thing similar to above with Export and stuff but not replacing the file when saving. (Also place the new file on the same directory if possible)

5. Modify the `LibModuleLoader.galaxy` file with a text editor (NOT the SC2 Editor):

![](https://i.imgur.com/P7iDABh.png)


6. Append the new File without the `.galaxy` extension. For instance, if your file name is `LibNice.galaxy`, append the lane: `include "Modules/LibNice`

![](https://i.imgur.com/cN85UN8.png)

7. Now we need to find the Lib init function by opening up the script file (Ctrl F11 or Data->View Script):

![](https://i.imgur.com/rDjPTAz.png)

8. Find the section `// Library Initialization` (usually at bottom) and copy this section (generally is `libXXXXX_InitLib()` depends on the name you changed above):

![](https://i.imgur.com/AgC1DVC.png)

9. Copy the code (function name) into the `LibModuleLoader.galaxy` in this section:

![](https://i.imgur.com/RyTaUEQ.png)

10. Remove the space and add a semicolon at the end (*important) and save the file: 

![](https://i.imgur.com/9M77FKV.png)


### Dealing with Heroes of the Storm Specific Functions:

Since Heroes is a modified SC2 Engine, it also have some functions that cannot be found on SC2 Editor such as `SetTalentEnabled()` which is a function to enable or disable a talent (Note: Don't be confused with `SetTalentsEnabled()` in SC2 Editor.)

>Note: As well as some Functions from SC2 Editor is absent in Heroes, such as UnitItem, this will cause error in Heroes that the game cannot be loaded even though it is valid in SC2 editor.

To add the Heroes Specific script:

1. Create a new Action:

![](https://i.imgur.com/YbZavES.png)

2. Select Custom Script:

![](https://i.imgur.com/CYPtAdg.png)

3. Type in the Heroes Code you want, Please also do check the parameter type and adding a semi-colon at the end (Note: It can also include the variables from Sc2Editor, such as `lv_*` for local variable and `gv_*` for global variable):

![](https://i.imgur.com/ZXAT6DT.png)

4. Add `//_heroes_replace//` before the custom script:

![](https://i.imgur.com/faiq3Qt.png)


Note that If you attempt to save the SC2Mod file (the one you currently opening in SC2Editor, not the galaxy file), it most likely complain and won't let you save:

![](https://i.imgur.com/8mMezMF.png)



<a name="save-and-modify" />

### Saving and Modifying for Heroes compatibility

#### Using the [`patch:library`](TOOLS.md#tools-patchlibraries) tool (Recommended)

1. When Save, Use the Export Functionality by going view script or Ctrl + F11:

![](https://i.imgur.com/w7gk6Ym.png)

![](https://i.imgur.com/J5klmRW.png)

2. Click On File -> Export

![](https://i.imgur.com/UY4nOq0.png)

3. Select the corresponding galaxy file to replace and save (Note: Please do make sure you replace the correct file, as it will not able to launch the game if so.):

![](https://i.imgur.com/ztgHF1n.png)

4. Please see [TOOLS.md](Tools.md#tools-patchlibraries) for more details.

#### Manually modifying for heroes compatibility

This sections demonstrates how to remove the `//_heroes_replace_//` in SC2 Editor when exporting, allows for custom heroes functionalities.

1. When Save, Use the Export Functionality by going view script or Ctrl + F11:

![](https://i.imgur.com/w7gk6Ym.png)

![](https://i.imgur.com/J5klmRW.png)

2. After see this screen, Do a Find -> Replace or Ctrl + H:

![](https://i.imgur.com/ZzyUrT6.png)

3. Type in `//_heroes_replace_//` for text and empty text box for `Replace With` and spam the `Replace` Button (Not `Replace All`) until it can no longer replace anymore:

![](https://i.imgur.com/v9EePbP.png)

4. Close the Replace Dialog and export the file:

![](https://i.imgur.com/UY4nOq0.png)

5. Select the corresponding galaxy file to replace and save (Note: Please do make sure you replace the correct file, as it will not able to launch the game if so.):

![](https://i.imgur.com/ztgHF1n.png)

### Error and Debugging:

If you encounter stuff like this, mostly likely you have error on your galaxy files:

![Map script error](https://i.imgur.com/cjXbq07.jpg)

Currently it is **unable** to call the Heroes' specific debug menu like in SC2, the best way to [debug](https://xkcd.com/1722/) is mostly likely just to print out messages (Text Message).

![SC2 debug window](https://i.imgur.com/7IofkYI.png)


<a name="mod-assets" />

## Edit the Asset files

Generally, you can replace any in game assets with your own. The game will priorities loading your own asset over the internal ones, provided they are have the same name. For instance, the Raynor-with-a-bunny-ear loading screen in this map, the file is under `(10)trymemode.stormmap/base.stormassets/Assets/Textures/storm_ui_loading_startup.dds`, which is to replace the default in-game file: heroes.`stormmod/base.stormassets/Assets/Textures/storm_ui_loading_startup.dds`. Note that the path in `base.stormassets` must be the same.

You can use this to also replace assets such as but not limited to: `*.dds` (texture), `*.m3` (models) and `*.ogg` (sound/music files).


### Editing Asset Files (.dds)

If you loaded this map, you will noticed the loading screen have changed to our boy jimmy:

![Try mode 2.0 loading screen](https://i.imgur.com/dbggpQN.png)

I recommend using a plugin [NVIDIA Texture Tools for Adobe PhotoShop](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop) to do edit the .dds files with Photoshop. 

>Note: When saving, remember to choose `No MIP maps` inside the `MIP Map Generation` section. 
*(Took me a long time to figure it out why the texture is not loading.....)*

<a name="mod-stormmod" />

## Adding extra `*.stormmod` mods

If you would like to include a `*.stormmod` file into this map, you can copy the file into `HEROES_OF_THE_STORM/mods/yourmod.stormmod`:

    Heroes of the Storm
    ├── HeroesData
    ├── mods
    │   └── yourmod.stormmod   <-- Here
    ├── Support
    ├── Support64
    ├── Versions
    ├── .build.info
    └── .Heroes of the Storm.exe

Then, in [`Includes.xml`](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/blob/master/(10)trymemode.stormmap/base.stormdata/Includes.xml), add an entry: 

```xml
<Path value="Mods/yourmod.StormMod" />
```

Afterwards, reload the Try Mode map (completely exit and re-enter the map), you should see your map loaded, provided the stormmod file is valid.

You can also obtain the official Heroes of the Storm stormmod files from my `*.s2ma` hosting repo: https://github.com/jamiephan/HeroesOfTheStorm_S2MA

**Examples:**

Using the [AzmoDUNK Mutator](https://github.com/jamiephan/HeroesOfTheStorm_S2MA/blob/main/mods/AzmoDUNK%20Mutator.stormmod) Mod:

![AzmoDUNK Mutator](https://i.imgur.com/n6FKFe2.png)

Using the [In Game Hero Selection](https://github.com/jamiephan/HeroesOfTheStorm_S2MA/blob/main/mods/In%20Game%20Hero%20Selection.stormmod) Mod:

![In Game Hero Selection](https://i.imgur.com/iIZlSJf.png)








