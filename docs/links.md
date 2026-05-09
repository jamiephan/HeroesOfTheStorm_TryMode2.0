---
title: 🔗 Useful Resources
nav_order: 7
last_modified_date: 2026-05-09 20:00:00
---

# 🔗 Useful Resources

## My other related projects

- [Try Mode 2.0 Repo](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0)
  - The main repo for this try mode 2.0 project
- [Try Mode 2.0 Installer Repo](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0Installer)
  - The source code for the try mode 2.0 installer application
- [Stormmap Generator](https://stormmap.jamiephan.net) ([Source Code](https://github.com/jamiephan/HeroesOfTheStorm_StormMapGenerator))
  - An Experimental tool to generate your own `stormmap` file with an mod editor, which can be loaded in the game.
- [Heroes Gamedata Repo](https://github.com/jamiephan/HeroesOfTheStorm_Gamedata)
  - A automated repo for automatically extract the game files. You can get the latest game files from here, for e.g data mining and assist on modding
- [Heroes S2MA Repo](https://github.com/jamiephan/HeroesOfTheStorm_S2MA)
  - A automated repo for automatically extract the game files, particularly s2ma files, which are the MPQ files for `stormmod` (mod file) and `stormmap` (map file) in Heroes.
- [Heroes AI Maps Repo](https://github.com/jamiephan/HeroesOfTheStorm_AIMaps)
  - A automated repo for automatically to patch the map files from s2ma repo, then generate the AI composition matrix (e.g 1v1, 3v2, 4v5 or spectator mode: no player and watching 5v5 AIs)
- [CascLib/StormLib NAPI Binding Mono Repo](https://github.com/jamiephan/casclib-stormlib-monorepo)
  - A Nodejs Native binding Library for CascLib and StormLib. Used by my other projects or gamedata extraction and MPQ file management. Because its a native binding, the speed is way faster than calling the CLI tool (e.g `CascView.exe` or `MPOEditor.exe`).

## External Projects (Many thanks to the authors!)

- [CascLib](https://github.com/ladislav-zezula/CascLib)
  - For Heroes game file extractions and the interaction of the CASC Protocol
- [StormLib](https://github.com/ladislav-zezula/StormLib)
  - For MPO files management (extract, create), which used by Heroes's `stormmod` and `stormmap` files.
- [wowdev](https://wowdev.wiki/NGDP)
  - A Gold mine of information about how Blizzard's game management and format works