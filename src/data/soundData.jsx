import { DEFAULT_VOLUME } from "../config";

import { PiBird } from "react-icons/pi";
import { PiWaveform } from "react-icons/pi";
import { PiWaves } from "react-icons/pi";
import { PiFlame } from "react-icons/pi";
import { PiCat } from "react-icons/pi";
import { PiBugBeetle } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";
import { PiFan } from "react-icons/pi";
import { LiaGripLinesSolid } from "react-icons/lia";
import { CgBowl } from "react-icons/cg";
import { PiCloudRain } from "react-icons/pi";
import { LuFish } from "react-icons/lu";

import birds from "../assets/sounds/birds.mp3";
import brownNoise from "../assets/sounds/brown-noise.mp3";
import campfire from "../assets/sounds/campfire.mp3";
import cat from "../assets/sounds/purring-cat.mp3";
import crickets from "../assets/sounds/crickets.mp3";
import heartBeat from "../assets/sounds/heart-beating.mp3";
import fan from "../assets/sounds/oscillating-fan.mp3";
import river from "../assets/sounds/river.mp3";
import singingBowl from "../assets/sounds/singing-bowl.mp3";
import rain from "../assets/sounds/soft-rain.mp3";
import whale from "../assets/sounds/underwater-whale.mp3";
import waves from "../assets/sounds/waves-on-rocks.mp3";

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
    name: "Fan",
    src: fan,
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
    name: "Singing bowl",
    src: singingBowl,
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
    name: "Waves on rocks",
    src: waves,
    isPlaying: false,
    volume: DEFAULT_VOLUME,
  },
  {
    name: "Whale",
    src: whale,
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
    icon: <PiFlame />,
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
    name: "Fan",
    icon: <PiFan />,
  },
  {
    name: "River",
    icon: <LiaGripLinesSolid />,
  },
  {
    name: "Singing bowl",
    icon: <CgBowl />,
  },
  {
    name: "Rain",
    icon: <PiCloudRain />,
  },
  {
    name: "Waves on rocks",
    icon: <PiWaves />,
  },
  {
    name: "Whale",
    icon: <LuFish />,
  },
];
