import { DEFAULT_DURATION, DEFAULT_REPETITIONS } from "../config";

const UCLAhealth = `
<p className='mb-2'>
  Recorded by UCLA MARC's Director of Mindfulness Education, Diana Winston.
</p>
<p className='mb-2 text-xs'>
  “Mindful Meditations” created by Diana Winston and others for the <a href="http://www.uclahealth.org/marc" className='text-teal-600 active:text-teal-700 hover:text-teal-700 dark:text-teal-600 dark:active:text-teal-500 dark:hover:text-teal-500 hover:underline'>UCLA Mindful Awareness Research Center (MARC)</a>, ©2011- 2024 The Regents of the University of California (The UC Regents). Mindful Meditations are licensed under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" className='text-teal-600 active:text-teal-700 hover:text-teal-700 dark:text-teal-600 dark:active:text-teal-500 dark:hover:text-teal-500 hover:underline'>Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.</a>
</p>`;

export const practiceData = [
  {
    name: "meditation",
    list: [
      {
        id: "M00",
        name: "Unguided meditation",
        duration: { minutes: DEFAULT_DURATION, seconds: DEFAULT_DURATION * 60 },
        description: "",
      },
      {
        id: "M01",
        name: "Short body scan - Diana Winston (3 min)",
        duration: { minutes: 3, seconds: 2 * 60 + 45 },
        src: "https://d1cy5zxxhbcbkk.cloudfront.net/guided-meditations/Body-Scan-Meditation.mp3",
        description: UCLAhealth,
        isPlaying: false,
        isReset: false,
        volume: 1,
      },
      {
        id: "M02",
        name: "Meditation for working with difficulties - Diana Winston (7 min)",
        duration: { minutes: 7, seconds: 6 * 60 + 56 },
        src: "https://d1cy5zxxhbcbkk.cloudfront.net/guided-meditations/04_Meditation_for_Working_with_Difficulties.mp3",
        description: UCLAhealth,
        isPlaying: false,
        isReset: false,
        volume: 1,
      },
      {
        id: "M03",
        name: "Breath, sound and body meditation - Diana Winston (12 min)",
        duration: { minutes: 12, seconds: 12 * 60 },
        src: "https://d1cy5zxxhbcbkk.cloudfront.net/guided-meditations/02_Breath_Sound_Body_Meditation.mp3",
        description: UCLAhealth,
        isPlaying: false,
        isReset: false,
        volume: 1,
      },
      {
        id: "M04",
        name: "The center of now - Tara Brach (16 min)",
        duration: { minutes: 16, seconds: 15 * 60 + 38 },
        src: "https://content.libsyn.com/p/1/0/a/10a6f5bc20f46e1d/2024-02-14-Meditation-Resting-Center-of-Now-2022-10-05--2017-04-26-TaraBrach.mp3?c_id=167778253&cs_id=167778253&response-content-type=audio%2Fmpeg&Expires=1709283550&Signature=Ymp7B4ORWYwyfQjS4UywBFvmeqF3gCKtlOW1tzZ2M4Ed96pzf3S2qs7cprj3~f95kmBzKpJzyGMvTx3gliUlIVZwnK~O3UAIfkKnT9xCRvUrMWfdlYlmT2MnNfMTwAr7-nzqZXolcIhel06xcKJYDQJVz9DXu33QdbfIQv9QNgF6t9wY~OslilZir3kZhURdAk~edDA31K3J4~BNCvKYOl2DfemDAtJikuqYcU4CKdsyLzg7J2doRheW9NVeHfFuFI83WQ63T4g-GNFAtKg6zR3IvNym034bfcvrwGvMJmEwRsMDj511IPNksyZb59~SiUyBL9rOCFIO~EwrvKux4Q__&Key-Pair-Id=K1YS7LZGUP96OI",
        description: `
          <h6>
            <a href='https://www.tarabrach.com/meditation-the-center-of-now-3/' className='text-teal-600 active:text-teal-700 hover:text-teal-700 dark:text-teal-600 dark:active:text-teal-500 dark:hover:text-teal-500 hover:underline'>The center of now</a>
          </h6>
          <p className='mb-2'>
            This meditation awakens our senses, then guides us to rest in the changing flow of experience. When the mind drifts, we are invited to relax back into full living presence, into that Beingness that is the center of now.  'Listening to and feeling, the changing flow - right here, right in the center of now.
          </p>
          <p className='text-xs'>
            <a href='https://www.tarabrach.com/' className='text-teal-600 active:text-teal-700 hover:text-teal-700 dark:text-teal-600 dark:active:text-teal-500 dark:hover:text-teal-500 hover:underline'>Tara Brach</a>’s teachings blend Western psychology and Eastern spiritual practices, mindful attention to our inner life, and a full, compassionate engagement with our world.
          </p>`,
        isPlaying: false,
        isReset: false,
        volume: 1,
      },
      {
        id: "M05",
        name: "Complete meditation Instructions - Diana Winston (19 min)",
        duration: { minutes: 19, seconds: 19 * 60 },
        src: "https://d1cy5zxxhbcbkk.cloudfront.net/guided-meditations/03_Complete_Meditation_Instructions.mp3",
        description: UCLAhealth,
        isPlaying: false,
        isReset: false,
        volume: 1,
      },
      {
        id: "M06",
        name: "Listening to our heart - Tara Brach (21 min)",
        duration: { minutes: 21, seconds: 20 * 60 + 9 },
        src: "https://content.libsyn.com/p/a/8/0/a80f28d3b727108a/2024-01-24-Meditation-Listening-to-Our-Heart-2020-10-14-TaraBrach.mp3?c_id=166790233&cs_id=166790233&response-content-type=audio%2Fmpeg&Expires=1709284337&Signature=XCy6vUAF2Tlx96ihGdUANkzERK6CSN1L6HBe2x3o-xZAze8gYtbc2Kg0NIa7tXETwcSq6ApnpkMz6y-K94q3rnJKPPMHPctldEbqr~CDD22v3N45lxK~I0LsTd-pR4fy2i4~cL9ijNgHu9AY6EDlIN6dloqfIjdYDTnyBMgEQTluZYD0bWW0EDwu78eBhLlZ5bzdkpriXjUeQXSIjSul6Av1lgaCvNI7zyVSTt5N62wGBdcD2mfUC~erwTq1Jl2PvvtJPJKlqdC06d8YRflNvmxoikaegOLYmtH738bSrnfGrHnvmFC8jRaUQqvWVregRXbm9J0QAi6GaqiXKmbmnQ__&Key-Pair-Id=K1YS7LZGUP96OI",
        description: `
        <h6>
          <a href='https://www.tarabrach.com/meditation-listening-heart-2/' className='text-teal-600 active:text-teal-700 hover:text-teal-700 dark:text-teal-600 dark:active:text-teal-500 dark:hover:text-teal-500 hover:underline'>Listening to our heart</a>
        </h6>
        <p className='mb-2'>
          True listening arouses an open receptive presence that can be truly healing. This meditation awakens a listening presence; first bringing that receptive awareness to sensations and sounds, and then offering that presence to the tenderness and vulnerability of our heart.
        </p>
        <p className='text-xs'>
          <a href='https://www.tarabrach.com/' className='text-teal-600 active:text-teal-700 hover:text-teal-700 dark:text-teal-600 dark:active:text-teal-500 dark:hover:text-teal-500 hover:underline'>Tara Brach</a>’s teachings blend Western psychology and Eastern spiritual practices, mindful attention to our inner life, and a full, compassionate engagement with our world.
        </p>`,
        isPlaying: false,
        isReset: false,
        volume: 1,
      },
    ],
  },

  {
    name: "breathing",
    list: [
      {
        id: "B00",
        name: "4-4-4 Breathing",
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
          "Inhale deeply for 4 counts, hold for 4, exhale for 4. Calms the mind, enhances focus, reduces stress. It's a foundational practice for mindfulness",
      },
      {
        id: "B01",
        name: "4-8 Breathing",
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
          "Breathe in for 4, out for 8. Deepens relaxation, eases tension, promotes tranquility. Ideal for unwinding after a busy day.",
      },
      {
        id: "B02",
        name: "6-6 Breathing",
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
          "Inhale for 6, exhale for 6. Balances energy, fosters mindfulness, improves concentration. Perfect for finding balance in hectic moments.",
      },
      {
        id: "B03",
        name: "4-7-8 Breathing",
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
          "Inhale for 4, hold for 7, exhale for 8. Induces sleep, reduces anxiety, enhances calmness. Known as 'relaxing breath' in yoga, great for stress relief.",
      },
    ],
  },
];
