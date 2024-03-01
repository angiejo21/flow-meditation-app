import { DEFAULT_VOLUME } from "../config";

import { PiBird } from "react-icons/pi";
import { PiWaveform } from "react-icons/pi";
import { PiCampfire } from "react-icons/pi";
import { PiCat } from "react-icons/pi";
import { PiBugBeetle } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";
import { PiKeyboard } from "react-icons/pi";
import { PiCloudRain } from "react-icons/pi";
import { PiList } from "react-icons/pi";
import { PiShower } from "react-icons/pi";
import { PiWaves } from "react-icons/pi";
import { PiWind } from "react-icons/pi";

import birds from "../assets/sounds/birds.mp3";
import brownNoise from "../assets/sounds/brown-noise.mp3";
import campfire from "../assets/sounds/campfire.mp3";
import cat from "../assets/sounds/purring-cat.mp3";
import crickets from "../assets/sounds/crickets.mp3";
import heartBeat from "../assets/sounds/heart-beating.mp3";
import keyboard from "../assets/sounds/keyboard.mp3";
import rain from "../assets/sounds/rain.mp3";
import river from "../assets/sounds/river.mp3";
import shower from "../assets/sounds/shower.mp3";
import waves from "../assets/sounds/waves.mp3";
import wind from "../assets/sounds/wind.mp3";

export const soundData = [
  {
    name: "Birds",
    src: birds,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Brown noise",
    src: brownNoise,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Campfire",
    src: campfire,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Cat",
    src: cat,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Crickets",
    src: crickets,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Heart beat",
    src: heartBeat,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Keyboard",
    src: keyboard,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Rain",
    src: rain,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "River",
    src: river,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Shower",
    src: shower,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Waves",
    src: waves,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Wind",
    src: wind,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
];

export const soundDataRender = [
  {
    name: "Birds",
    icon: <PiBird />,
  },
  {
    name: "Brown noise",
    icon: <PiWaveform />,
  },
  {
    name: "Campfire",
    icon: <PiCampfire />,
  },
  {
    name: "Cat",
    icon: <PiCat />,
  },
  {
    name: "Crickets",
    icon: <PiBugBeetle />,
  },
  {
    name: "Heart beat",
    icon: <PiHeart />,
  },
  {
    name: "Keyboard",
    icon: <PiKeyboard />,
  },
  {
    name: "River",
    icon: <PiList />,
  },
  {
    name: "Shower",
    icon: <PiShower />,
  },
  {
    name: "Rain",
    icon: <PiCloudRain />,
  },
  {
    name: "Waves",
    icon: <PiWaves />,
  },
  {
    name: "Wind",
    icon: <PiWind />,
  },
];
