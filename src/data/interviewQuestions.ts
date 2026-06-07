// The 25-question interview bank, verbatim from architect-shortlist.md,
// grouped by theme for the checkbox UI.

export interface QuestionGroup {
  theme: string;
  questions: { n: number; q: string }[];
}

export const interviewBank: QuestionGroup[] = [
  {
    theme: 'Process & collaboration style',
    questions: [
      {
        n: 1,
        q: 'Walk us through your design process from first meeting to move-in. Who from your team is in the room at each phase, and who do we talk to day-to-day?',
      },
      {
        n: 2,
        q: 'We want to co-design heavily — bringing our own sketches, references, and strong opinions. Describe a project where the client drove the aesthetic. How did that go, and where did you push back?',
      },
      {
        n: 3,
        q: 'Are you more comfortable delivering your own design vision, or building on ours? Be honest — both are valid, we just need to know.',
      },
      {
        n: 4,
        q: 'How do you handle disagreement when we want something you think is a mistake?',
      },
    ],
  },
  {
    theme: 'MCM & aesthetic fit',
    questions: [
      {
        n: 5,
        q: 'What does "mid-century modern" mean to you, and how is it different from contemporary modernism? Show us a project where you worked in that idiom.',
      },
      {
        n: 6,
        q: 'Have you restored or designed a true MCM home (post-and-beam, clerestories, breeze blocks, flat/butterfly roofs, indoor-outdoor flow)? Which one, and what did you learn?',
      },
      {
        n: 7,
        q: 'If we showed up with Eichler / Neutra / Fehr & Granger references, would that excite you or constrain you?',
      },
    ],
  },
  {
    theme: 'Texas heat & site',
    questions: [
      {
        n: 8,
        q: 'How do you design for Texas heat and sun — orientation, overhangs, shading, glazing, materials, passive cooling? Give a specific example.',
      },
      {
        n: 9,
        q: 'We don’t have a site yet. How involved do you get in site selection, and would you walk a candidate lot with us before we buy?',
      },
      {
        n: 10,
        q: 'Tell us about a project where the site (slope, trees, views, floodplain, heritage oaks) fundamentally drove the design.',
      },
    ],
  },
  {
    theme: 'Fees, money & change orders',
    questions: [
      {
        n: 11,
        q: 'How do you structure fees — percentage of construction cost, fixed fee, or hourly with a cap? What percentage or number, and what’s included/excluded?',
      },
      {
        n: 12,
        q: 'How is the fee split across phases (programming, SD, DD, CDs, CA)?',
      },
      {
        n: 13,
        q: 'How do you handle change orders and scope creep — especially with clients like us who’ll want to revise as we go? What’s billable vs. absorbed?',
      },
      {
        n: 14,
        q: 'At what construction budget does a project like ours typically land per square foot in your hands, and what drives that number up or down?',
      },
    ],
  },
  {
    theme: 'Communication & schedule',
    questions: [
      {
        n: 15,
        q: 'What’s your communication cadence — how often will we meet, and how do you share progress (models, renderings, walkthroughs)?',
      },
      {
        n: 16,
        q: 'Realistically, when could you start, and what’s your current queue? How many active projects does our lead architect carry at once?',
      },
      {
        n: 17,
        q: 'What’s a realistic design-through-move-in timeline for a $1–2M custom home, and where does it usually slip?',
      },
    ],
  },
  {
    theme: 'Contractors, documents & construction',
    questions: [
      {
        n: 18,
        q: 'Do you have builders you regularly work with? How do you run bidding and contractor selection?',
      },
      {
        n: 19,
        q: 'How detailed are your construction documents, and how involved are you during construction (construction administration)? Do you do site visits?',
      },
      {
        n: 20,
        q: 'How do you protect design intent during value-engineering when bids come in over budget?',
      },
    ],
  },
  {
    theme: 'Sustainability & the hard questions',
    questions: [
      {
        n: 21,
        q: 'What sustainability/energy strategies do you consider standard vs. upgrades for an Austin home?',
      },
      {
        n: 22,
        q: 'Tell us about your last three difficult clients or projects — what went wrong and what you’d do differently.',
      },
      {
        n: 23,
        q: 'What do you say no to? What kind of project or client is not a fit for you?',
      },
      {
        n: 24,
        q: 'May we speak with two or three recent clients — ideally one whose project had a problem?',
      },
      {
        n: 25,
        q: 'What’s the one thing you wish clients understood before starting a custom home?',
      },
    ],
  },
];

export const totalQuestions = interviewBank.reduce(
  (n, g) => n + g.questions.length,
  0,
);
