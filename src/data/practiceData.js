import { DEFAULT_DURATION, DEFAULT_REPETITIONS } from "../config";

export const practiceData = [
  {
    name: "meditation",
    list: [
      {
        id: "M00",
        name: "Unguided meditation",
        duration: { minutes: DEFAULT_DURATION, seconds: DEFAULT_DURATION * 60 },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum molestias commodi beatae provident ullam, eligendi molestiae velit. Unde ex numquam alias eligendi harum cum!",
      },
      {
        id: "M01",
        name: "Meditation 1",
        duration: { minutes: 10, seconds: 10 * 60 },
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum assumenda enim, ducimus ex impedit nesciunt quod atque fugiat ipsa quisquam magnam dolor perspiciatis porro fugit!",
      },
      {
        id: "M02",
        name: "Meditation 2",
        duration: { minutes: 15, seconds: 15 * 60 },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam at facere nihil nobis. Perspiciatis sed necessitatibus repudiandae odio reprehenderit ipsum cupiditate nihil et blanditiis!",
      },
    ],
  },

  {
    name: "breathing",
    list: [
      {
        id: "B00",
        name: "4-4-4",
        duration: {
          minutes: 16 * DEFAULT_REPETITIONS * 60,
          seconds: 16 * DEFAULT_REPETITIONS,
        },
        progression: {
          count: 16,
          state: "pause",
          inhale: [12, 16],
          exhale: [4, 9],
        },
        step: 16,
        reps: DEFAULT_REPETITIONS,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, beatae?",
      },
      {
        id: "B01",
        name: "4-8",
        duration: {
          minutes: 12 * DEFAULT_REPETITIONS * 60,
          seconds: 12 * DEFAULT_REPETITIONS,
        },
        progression: {
          count: 12,
          state: "pause",
          inhale: [8, 12],
          exhale: [0, 9],
        },
        step: 12,
        reps: DEFAULT_REPETITIONS,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, ducimus.",
      },
      {
        id: "B02",
        name: "6-6",
        duration: {
          minutes: 12 * DEFAULT_REPETITIONS * 60,
          seconds: 12 * DEFAULT_REPETITIONS,
        },
        progression: {
          count: 12,
          state: "pause",
          inhale: [6, 12],
          exhale: [0, 7],
        },
        step: 12,
        reps: DEFAULT_REPETITIONS,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, doloribus.",
      },
      {
        id: "B03",
        name: "4-7-8",
        duration: {
          minutes: Math.floor(190 / 60),
          seconds: 19 * DEFAULT_REPETITIONS,
        },
        progression: {
          count: 19,
          state: "pause",
          inhale: [15, 19],
          exhale: [0, 9],
        },
        step: 19,
        reps: DEFAULT_REPETITIONS,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dignissimos.",
      },
    ],
  },
];
