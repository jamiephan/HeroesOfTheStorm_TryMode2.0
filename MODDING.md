# Modding

## Editing the XML files

Modifications of XML files are under `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`).

Generally, You can override the XML Keys that the game has. The game will use your own version instead. However, you must follow the XML level structure similar to the game has. For example, to make Maiev's Fan of Knives (Q) to have no cooldown and do insane damage, your XML should look something like this:

    <?xml version="1.0" encoding="us-ascii"?>
    <Catalog>
        <CAbilEffectTarget id="MaievFanOfKnives">
            <PrepEffect value="DismountDecloakCasterSet" />
            <Effect value="MaievFanOfKnivesInitialPersistent" />
            <Flags index="ClearLastAttackTargetOutOfRange" value="1" />
            <Flags index="RequireTargetVision" value="0" />
            <Cost>
            <Vital index="Energy" value="30" />
            <Cooldown TimeUse="0" />
            </Cost>
            <Range value="7.25" />
            <Arc value="360" />
            <CastIntroTime value="0.1" />
            <UninterruptibleArray index="Cast" value="1" />
            <UninterruptibleArray index="Channel" value="1" />
            <UninterruptibleArray index="Finish" value="1" />
            <CmdButtonArray index="Execute" DefaultButtonFace="MaievFanOfKnives" />
            <CursorRangeFlags index="ClampMin" value="1" />
            <CursorRangeFlags index="ClampMax" value="1" />
            <CursorEffect value="MaievFanOfKnivesSearchArea" />
        </CAbilEffectTarget>
        <CEffectDamage id="MaievFanOfKnivesDamage" parent="StormSpell">
            <MultiplicativeModifierArray index="MaievFanOfKnivesPinDown" Accumulator="MaievFanOfKnivesPinDownDamageAccumulator" />
            <MultiplicativeModifierArray index="RuthlessSpirit" Validator="MaievSpiritOfVengeanceRuthlessSpiritCombine" Accumulator="MaievSpiritOfVengeanceRuthlessSpiritDamageAccumulator" Crit="1" />
            <Amount value="9999999" />
        </CEffectDamage>
    </Catalog>


All XML modifications must be inside the `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`). Any subdirectories, file name, amount are not limited.

I also recommend using the tool `generatexml` to build the XML file, for more, see [TOOLS.md](TOOLS.md).

## Editing the Galaxy Script Files

Modifications of Galaxy files in (`./(10)trymemode.stormmap/base.stormdata`), same as where the custom command library located at.

I have also published the `Modules_Editor.SC2Mod` in `(10)trymemode.stormmap/base.stormdata/Modules/` that you can open it in SC2 Editor, However this is how you should us it, or at least how I do it:

**IMPORTANT: DO NOT do this to `LibModuleLoader.galaxy` and `Module Loader` in SC2Editor or the whole mods will fail.**

## Modifying Current Mod Files:

1. Change The Viewing mode to Triggers, or Pressing F6:
![](https://i.imgur.com/tjWy1BG.png)

2. Change Whatever you like in here, with some exceptions, see below:
![](https://i.imgur.com/owiyGwk.png)

3. When Save, Use the Export Functionality by going view script or Ctrl + F11:
![](https://i.imgur.com/w7gk6Ym.png)
![](https://i.imgur.com/J5klmRW.png)

4. After see this screen, Do a Find -> Replace or Ctrl + H:
![](https://i.imgur.com/ZzyUrT6.png)

5. Type in `//lib` for text and `lib` to replace and spam the `Replace` Button (Not `Replace All`) until it can no longer replace anymore:
![](https://i.imgur.com/KOqlwyN.png)

6. Close the Replace Dialog and export the file:
![](https://i.imgur.com/UY4nOq0.png)

7. Select the coresponding galaxy file to replace and save (Note: Please do make sure you replace the correct file, as it will not able to launch the game if so.):
![](https://i.imgur.com/ztgHF1n.png)

11. Reload the try mode and test it out!

### Adding New Galaxy Lib:

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

11. Reload the try mode and test it out!

### Dealing with Heroes Of the Storm Specific Functions:

Since Heroes is a modified SC2 Engine, it also have some functions that cannot be found on SC2 Editor such as `SetTalentEnabled()` which is a function to enable or disable a talent (Note: Don't be confused with `SetTalentsEnabled()` in SC2 Editor.)

>Note: As well as some Functions from SC2 Editor is absent in Heroes, such as UnitItem, this will cause error in Heroes that the game cannot be loaded even though it is valid in SC2 editor.

To add the Heroes Specific script, in the Actions:
![](https://i.imgur.com/YbZavES.png)

Select Custom Script:
![](https://i.imgur.com/CYPtAdg.png)

And Type in the Heroes Code you want, Please also do check the parameter type and adding a semi-colon at the end (Note: It can also include the variables from Sc2Editor, such as `lv_*` for local variable and `gv_*` for global variable):
![](https://i.imgur.com/ZXAT6DT.png)

If you attempt to save the SC2Mod file (the one you currently opening in SC2Editor, not the galaxy file), it most likely complain and won't let you save:
![](https://i.imgur.com/8mMezMF.png)

To able to save the SC2Mod file, append `//` before the custom script:
![](https://i.imgur.com/yCPzG0X.png)

Which you can now save it. But you will need to manually modify the galaxy file when exporting, unless the custom function starts with `lib`, which was done by step 3 above in Modifying the Mod files.

## Error and Debugging:

If you encounter stuff like this, mostly likely you have error on your galaxy files:

![Map script error](https://i.imgur.com/cjXbq07.jpg)

Currently it is **unable** to call the Heroes' specific debug menu like in SC2, the best way to [debug](https://xkcd.com/1722/) is mostly likely just to print out messages (Text Message).

![SC2 debug window](https://i.imgur.com/7IofkYI.png)


## Editing Asset Files (.dds)

If you loaded this map, you will noticed the loading screen have changed to our boy jimmy:

![Try mode 2.0 loading screen](https://i.imgur.com/dbggpQN.png)

I recommend using a plugin [NVIDIA Texture Tools for Adobe Photoshop](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop) to do edit the .dds files with Photoshop. 

>Note: When saving, remember to choose `No MIP maps` inside the `MIP Map Generation` section. 
*(Took me a long time to figure it out why the texture is not loading.....)*
