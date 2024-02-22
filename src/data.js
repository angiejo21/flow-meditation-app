import { DEFAULT_DURATION, DEFAULT_REPETITIONS } from "./config";

export const data = [
  {
    name: "meditation",
    list: [
      {
        id: "M00",
        name: "Unguided meditation",
        duration: DEFAULT_DURATION,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum molestias commodi beatae provident ullam, eligendi molestiae velit. Unde ex numquam alias eligendi harum cum!",
      },
      {
        id: "M01",
        name: "Meditation 1",
        duration: 10,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum assumenda enim, ducimus ex impedit nesciunt quod atque fugiat ipsa quisquam magnam dolor perspiciatis porro fugit!",
      },
      {
        id: "M02",
        name: "Meditation 2",
        duration: 15,
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
        duration: 12 * DEFAULT_REPETITIONS,
        step: 12,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, beatae?",
      },
      {
        id: "B01",
        name: "4-8",
        duration: 12 * DEFAULT_REPETITIONS,
        step: 12,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, ducimus.",
      },
      {
        id: "B02",
        name: "6-6",
        duration: 12 * DEFAULT_REPETITIONS,
        step: 12,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, doloribus.",
      },
      {
        id: "B03",
        name: "4-7-8",
        duration: 19 * DEFAULT_REPETITIONS,
        step: 19,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dignissimos.",
      },
    ],
  },
];
