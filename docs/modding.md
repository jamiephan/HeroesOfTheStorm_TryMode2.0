[◁ Back to Home](index.md)
# Modding

There are multiple ways to mod this map file:

- [Adding extra `*.stormmod` mods](#mod-stormmod)
- [Edit the XML files](#mod-xml)
- [Edit the Galaxy Script files](#mod-galaxy)
- [Edit the Asset files](#mod-assets)

---

<a name="mod-stormmod"></a>

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

> You can also obtain a list of official Heroes of the Storm stormmod files from my `*.s2ma` hosting repo: https://github.com/jamiephan/HeroesOfTheStorm_S2MA/tree/main/mods (Files where extracted directly from the game files)

**Examples:**

Using the [AzmoDUNK Mutator](https://github.com/jamiephan/HeroesOfTheStorm_S2MA/blob/main/mods/AzmoDUNK%20Mutator.stormmod) Mod:

![AzmoDUNK Mutator](https://i.imgur.com/n6FKFe2.png)

Using the [In Game Hero Selection](https://github.com/jamiephan/HeroesOfTheStorm_S2MA/blob/main/mods/In%20Game%20Hero%20Selection.stormmod) Mod:

![In Game Hero Selection](https://i.imgur.com/iIZlSJf.png)

---

<a name="mod-xml"></a>

## Edit the XML files

### Editor Setup

>This section of setting up the editor is optional, but it's highly recommended

It is recommended using [Visual Studio Code](https://code.visualstudio.com/) with the extension [XML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml) installed.

This extension also allows you to load a `.xsd` file for autocompletion.

In a regular XML file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Catalog>
    <!-- Your stuff -->
</Catalog>
```

Modify the `<Catalog>` to include the XSD (XML Schema Definition) file :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Catalog xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/jamiephan/HeroesOfTheStorm_Gamedata/master/xsd/latest.xsd">
    <!-- Your stuff -->
</Catalog>
```

> Note: This will not affect how the game reads the XML file, nor will it change any output.

This enables you to auto complete the XML tags and attributes:

![Autocomplete demo](https://i.imgur.com/UPqgdPe.gif)


>Note the `.xsd` file loaded is from the repo [jamiephan/HeroesOfTheStorm_Gamedata](https://github.com/jamiephan/HeroesOfTheStorm_Gamedata), which host all the game data and generate a XSD file automatically



### Modifying the XML files

Generally, you can override the game's XML files. The game will use your version instead. However, you must follow the same XML hierarchy as the game uses. For example, to make Maiev's Fan of Knives (Q) to have no cooldown and do insane damage, your XML should look something like this:

```xml
<?xml version="1.0" encoding="us-ascii"?>
<Catalog>
    <CAbilEffectTarget id="MaievFanOfKnives">
        <Cost>
            <Cooldown TimeUse="0" />
        </Cost>
    </CAbilEffectTarget>
    <CEffectDamage id="MaievFanOfKnivesDamage" parent="StormSpell">
        <Amount value="9999" />
    </CEffectDamage>
</Catalog>
```

Now save this XML into a file, e.g `MaievQModify.xml` and place it in the `(10)trymemode.stormmap/base.stormdata` directory. Afterwards, update the [`GameData.xml`](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/blob/master/(10)trymemode.stormmap/base.stormdata/GameData.xml) file:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Includes>
  <Catalog path="Mods/GameData/HeroesMod/AbilityMimic.xml"/>
  <Catalog path="Mods/GameData/HeroesMod/BehaviorMimic.xml"/>
  <Catalog path="Mods/GameData/HeroesMod/IconGlowing.xml"/>
  <Catalog path="Mods/GameData/HeroesMod/ModelMimic.xml"/>
  <Catalog path="Mods/GameData/HeroesMod/PermaArmor.xml"/>
  <Catalog path="Mods/GameData/HeroesMod/TestHero.xml"/>
  <Catalog path="Mods/GameData/SystemMod/TestSystem.xml"/>
  <Catalog path="MaievQModify.xml"/> <!-- Add This line here-->
</Includes>
```

The `path` is relative to `base.stormdata`. Therefore, if you place it in `(10)trymemode.stormmap/base.stormdata/MaievMod/QModify.xml`, the path will be `MaievMod/QModify.xml`.

To automate this process, use the [Build XML tool](tools.md#tools-buildxml).

>Note: If you use `npm run build:xml` to build the XML files, **all XML modifications must be inside the `Mods/GameData` folder (`./(10)trymemode.stormmap/base.stormdata/Mods/GameData`)**. Any subdirectories or file name (provided its ending with `.xml`) are not limited.

Restart the Try Mode by exiting and re-entering, or by using the [`restartgame`](usage.md#cmd-restartgame) command, you should see Maive's Q Damage is skyrocketed with no cooldown:

![Maiev Q Damage](https://i.imgur.com/yHJjpeo.png)


---

<a name="mod-galaxy"></a>

## Edit the Galaxy Script files

Modifications of Galaxy files in (`./(10)trymemode.stormmap/base.stormdata/Modules/`), same as where the custom command library located at.

The `Modules_Editor.SC2Mod` is also available in `(10)trymemode.stormmap/base.stormdata/Modules/` and can be opened in SC2 Editor. However, due to compatibility issues between SC2 Editor and Heroes (some functions and variables do not exist in both environments, or have incompatible signatures)

**IMPORTANT: Do not apply the following instructions to `LibModuleLoader.galaxy` or `Module Loader` in SC2 Editor, as doing so will break the entire modding setup.**

### Modifying Current Library Files:

1. Change The Viewing mode to Triggers, or Pressing F6:

![mod-step-1](https://i.imgur.com/tjWy1BG.png)

2. Make your changes here, noting the exceptions listed below:

![mod-step-2](https://i.imgur.com/owiyGwk.png)

3. Please see the [save and modify section](#save-and-modify) below:

### Adding New Galaxy Library:

Adding a New lib is also pretty simple:

1. Add a new library by right-clicking on an empty space:

![add-step-1](https://i.imgur.com/5rogkWe.png)

![add-step-1-1](https://i.imgur.com/inOHIqD.png)

2. It is recommended to change the library ID to a 4-character ID:

![add-step-2](https://i.imgur.com/MwQr2NP.png)

3. Make your changes in the first box and uncheck "Auto Load":

![add-step-3](https://i.imgur.com/s30zhnO.png)

4. To save, follow the same export steps as above, but save it as a new file rather than replacing an existing one (place it in the same directory if possible).

5. Modify the `LibModuleLoader.galaxy` file with a text editor (NOT the SC2 Editor):

![add-step-5](https://i.imgur.com/P7iDABh.png)


6. Append the new file without the `.galaxy` extension. For example, if your file name is `LibNice.galaxy`, append the line: `include "Modules/LibNice`

![add-step-6](https://i.imgur.com/cN85UN8.png)

7. Now we need to find the Lib init function by opening up the script file (Ctrl F11 or Data->View Script):

![add-step-7](https://i.imgur.com/rDjPTAz.png)

8. Find the section `// Library Initialization` (usually at bottom) and copy this section (generally is `libXXXXX_InitLib()` depends on the name you changed above):

![add-step-8](https://i.imgur.com/AgC1DVC.png)

9. Copy the code (function name) into the `LibModuleLoader.galaxy` in this section:

![add-step-9](https://i.imgur.com/RyTaUEQ.png)

10. Remove the space and add a semicolon at the end (*important) and save the file: 

![add-step-10](https://i.imgur.com/9M77FKV.png)


### Dealing with Heroes of the Storm Specific Functions:

Since Heroes is a modified SC2 Engine, it also have some functions that cannot be found on SC2 Editor such as `SetTalentEnabled()` which is a function to enable or disable a talent (Note: Don't be confused with `SetTalentsEnabled()` in SC2 Editor.)

>Note: As well as some Functions from SC2 Editor is absent in Heroes, such as UnitItem, this will cause error in Heroes that the game cannot be loaded even though it is valid in SC2 editor.

To add the Heroes Specific script:

1. Create a new Action:

![deal-step-1](https://i.imgur.com/YbZavES.png)

2. Select Custom Script:

![deal-step-2](https://i.imgur.com/CYPtAdg.png)

3. Type in the Heroes Code you want, Please also do check the parameter type and adding a semi-colon at the end (Note: It can also include the variables from Sc2Editor, such as `lv_*` for local variable and `gv_*` for global variable):

![deal-step-3](https://i.imgur.com/ZXAT6DT.png)

4. Add `//_heroes_replace//` before the custom script:

![deal-step-4](https://i.imgur.com/faiq3Qt.png)


Note that If you attempt to save the SC2Mod file (the one you currently opening in SC2Editor, not the galaxy file), it most likely complain and won't let you save:

![deal-step-result](https://i.imgur.com/8mMezMF.png)



<a name="save-and-modify"></a>

### Saving and Modifying for Heroes compatibility

#### Using the [`patch:library`](tools.md#tools-patchlibraries) tool (Recommended)

1. When Save, Use the Export Functionality by going view script or Ctrl + F11:

![save-step-1](https://i.imgur.com/w7gk6Ym.png)

![save-step-1-1](https://i.imgur.com/J5klmRW.png)

2. Click On File -> Export

![save-step-2](https://i.imgur.com/UY4nOq0.png)

3. Select the corresponding galaxy file to replace and save (Note: Make sure you select the correct file — choosing the wrong one will prevent the game from launching.):

![save-step-3](https://i.imgur.com/ztgHF1n.png)

4. Please see [tools.md](tools.md#tools-patchlibraries) for more details.

#### Manually modifying for heroes compatibility

This sections demonstrates how to remove the `//_heroes_replace_//` in SC2 Editor when exporting, allows for custom heroes functionalities.

1. When Save, Use the Export Functionality by going view script or Ctrl + F11:

![manual-step-1](https://i.imgur.com/w7gk6Ym.png)

![manual-step-1-1](https://i.imgur.com/J5klmRW.png)

2. After see this screen, Do a Find -> Replace or Ctrl + H:

![manual-step-2](https://i.imgur.com/ZzyUrT6.png)

3. Type in `//_heroes_replace_//` for text and empty text box for `Replace With` and spam the `Replace` Button (Not `Replace All`) until it can no longer replace anymore:

![manual-step-3](https://i.imgur.com/v9EePbP.png)

4. Close the Replace Dialog and export the file:

![manual-step-4](https://i.imgur.com/UY4nOq0.png)

5. Select the corresponding galaxy file to replace and save (Note: Make sure you select the correct file — choosing the wrong one will prevent the game from launching.):

![manual-step-4](https://i.imgur.com/ztgHF1n.png)

### Error and Debugging:

If you encounter stuff like this, mostly likely you have error on your galaxy files:

![Map script error](https://i.imgur.com/cjXbq07.jpg)

It is currently not possible to open the Heroes-specific debug menu as in SC2. The best debugging approach is to print output messages.

![SC2 debug window](https://i.imgur.com/7IofkYI.png)

---

<a name="mod-assets"></a>

## Edit the Asset files

Generally, you can replace any in game assets with your own. The game will priorities loading your own asset over the internal ones, provided they have the same name. For instance, the *Raynor-with-a-bunny-ear* loading screen image in this map, the file is under `(10)trymemode.stormmap/base.stormassets/Assets/Textures/storm_ui_loading_startup.dds`, which is to replace the default in-game file: heroes.`stormmod/base.stormassets/Assets/Textures/storm_ui_loading_startup.dds`. Note that the path in `base.stormassets` must be the same.

You can use this to also replace assets such as but not limited to: `*.dds` (texture), `*.m3` (models) and `*.ogg` (sound/music files).

### Editing Asset Files (.dds)

If you loaded this map, you will noticed the loading screen have changed to our boy jimmy:

![Try mode 2.0 loading screen](https://i.imgur.com/dbggpQN.png)

I recommend using a plugin [NVIDIA Texture Tools for Adobe PhotoShop](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop) to do edit the .dds files with Photoshop. 

>Note: When saving, remember to choose `No MIP maps` inside the `MIP Map Generation` section. 
*(Took me a long time to figure it out why the texture is not loading.....)*

