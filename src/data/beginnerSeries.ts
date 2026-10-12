import type { LeadMagnet } from "@/data/leadMagnets";
import { OG_IMAGE, OG_IMAGE_ALT } from "@/data/siteCopy";

/**
 * Beginner Pitching Series, shipped Oct 12, 2026.
 * The drafts describe custom share art that is not in the repo.
 * Share cards use the default image and its existing alt.
 */
const SERIES_ICON = "/assets/icons/icon-free-guide-v2.png";

const NOT_MEDICAL =
  "General information, not medical advice. I'm a pitching coach, not a doctor. If your child has pain that doesn't go away or something feels wrong, stop throwing and talk to a doctor.";

function seriesGuide(
  guide: Omit<
    LeadMagnet,
    "kicker" | "icon" | "cta" | "ctaHref" | "ogImage" | "ogImageAlt" | "datePublished"
  > &
    Partial<Pick<LeadMagnet, "icon">>,
): LeadMagnet {
  return {
    kicker: "Free guide",
    icon: SERIES_ICON,
    cta: "Contact",
    ctaHref: "/contact/",
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    datePublished: "2026-10-12",
    ...guide,
  };
}

export const beginnerSeries: LeadMagnet[] = [
  seriesGuide({
    slug: "beginner-pitching-series",
    title: "Beginner Pitching Series: 10 Steps for Young Pitchers",
    metaTitle: "Beginner Pitching Series: 10 Steps for Kids | Pitching101",
    metaDescription:
      "New to pitching? Our free 10-part Beginner Pitching Series for young pitchers and parents: strikes, balance, fastball, changeup, and thinking like a pitcher.",
    ogTitle: "Beginner Pitching Series: 10 Steps for Young Pitchers",
    ogDescription:
      "Ten short beginner guides, in order, from your first strike to thinking like a pitcher.",
    twitterTitle: "Beginner Pitching Series: 10 Steps for Young Pitchers",
    twitterDescription:
      "A free 10-part beginner pitching series for kids and parents from a Naples coach.",
    note: "Ten short guides, in order, that match Coach Nick's beginner Reels: from your first strike to thinking like a pitcher.",
    topic: "Beginner series",
    emailSubject: "Beginner Pitching Series",
    series: [
      {
        name: "How to start pitching for the first time",
        path: "/guides/start-pitching-for-the-first-time/",
      },
      {
        name: "How to throw strikes: aim small, miss small",
        path: "/guides/how-to-throw-strikes-aim-small-miss-small/",
      },
      {
        name: "Pitching terms for beginners",
        path: "/guides/pitching-terms-for-beginners/",
      },
      {
        name: "How to stand on the mound",
        path: "/guides/how-to-stand-on-the-mound-balance/",
      },
      {
        name: "Basic pitching motion: balance, move, throw, finish",
        path: "/guides/how-to-teach-a-kid-to-pitch/#balance-move-throw-finish",
      },
      {
        name: "Four-seam fastball grip",
        path: "/guides/four-seam-fastball-grip-for-kids/",
      },
      {
        name: "How to aim a fastball: partner target game",
        path: "/guides/how-to-throw-strikes-aim-small-miss-small/#partner-target-game-how-to-aim-a-fastball",
      },
      {
        name: "Changeup for beginners",
        path: "/guides/when-should-young-pitchers-start-throwing-a-changeup/#changeup-for-beginners",
      },
      {
        name: "Ready for a curveball?",
        path: "/guides/ready-for-a-curveball/",
      },
      {
        name: "Think like a pitcher",
        path: "/guides/think-like-a-pitcher/",
      },
    ],
    lede: [
      "**Short answer:** The Beginner Pitching Series is 10 short guides that take a young pitcher from day one to thinking like a pitcher, in the order we teach it. Start with throwing strikes and staying balanced, then build the fastball, changeup, and pitcher's mindset.",
      "Each guide matches one of Coach Nick's beginner Reels, so you can watch the video and then read the steps. It's built for young pitchers and parents in Naples and around Collier County.",
    ],
    sections: [
      {
        heading: "The big ideas",
        blocks: [
          {
            kind: "ul",
            items: [
              "Control your body = control the pitch.",
              "Balanced start = controlled finish.",
              "Aim small, miss small.",
              "Fastball command first, changeup second.",
            ],
          },
        ],
      },
      {
        heading: "The series, in order",
        blocks: [
          {
            kind: "ol",
            items: [
              "[How to start pitching for the first time](/guides/start-pitching-for-the-first-time/)",
              "[How to throw strikes: aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/) (also covers part 7, aiming your fastball)",
              "[Pitching terms for beginners](/guides/pitching-terms-for-beginners/)",
              "[How to stand on the mound](/guides/how-to-stand-on-the-mound-balance/)",
              "[Basic pitching motion: balance, move, throw, finish](/guides/how-to-teach-a-kid-to-pitch/#balance-move-throw-finish)",
              "[Four-seam fastball grip](/guides/four-seam-fastball-grip-for-kids/)",
              "[How to aim a fastball: partner target game](/guides/how-to-throw-strikes-aim-small-miss-small/#partner-target-game-how-to-aim-a-fastball)",
              "[Changeup for beginners](/guides/when-should-young-pitchers-start-throwing-a-changeup/#changeup-for-beginners)",
              "[Ready for a curveball?](/guides/ready-for-a-curveball/)",
              "[Think like a pitcher](/guides/think-like-a-pitcher/)",
            ],
          },
        ],
      },
      {
        heading: "For parents helping at home",
        blocks: [
          {
            kind: "ul",
            items: [
              "[How to teach a kid to pitch](/guides/how-to-teach-a-kid-to-pitch/)",
              "[Pre-catch warmup](/guides/pre-catch-warmup/)",
              "[How often should young pitchers throw between lessons?](/guides/how-often-should-young-pitchers-throw-between-lessons/)",
              "[Fun games to play](/guides/fun-games/)",
            ],
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "Where should a beginner pitcher start?",
                a: "With part 1: the first job is to throw a strike. Then work through the series in order.",
              },
              {
                q: "What age is this series for?",
                a: "Young pitchers roughly 8 to 16 who are new to pitching, and the parents helping them.",
              },
              {
                q: "When should my child learn a changeup or curveball?",
                a: "Fastball command first, changeup second. Parts 8 and 9 cover when each makes sense.",
              },
              {
                q: "Do we need lessons to use this series?",
                a: "No. It's free to use at home. If you'd like hands-on help, reach out through the [contact page](/contact/).",
              },
            ],
          },
        ],
      },
      {
        heading: "Want hands-on help?",
        blocks: [
          {
            kind: "p",
            text: "Send your child's age, experience, and goals through the [contact page](/contact/). Private beginner lessons in Naples and Collier County.",
          },
        ],
      },
    ],
  }),
  seriesGuide({
    slug: "start-pitching-for-the-first-time",
    title: "How to Start Pitching for the First Time: A Beginner's Guide",
    metaTitle: "How to Start Pitching for the First Time | Pitching101",
    metaDescription:
      "New to pitching? Your first job is to throw a strike. A beginner guide for young pitchers and parents: stay balanced, no perfect mechanics or big speed needed.",
    ogTitle: "How to Start Pitching for the First Time: A Beginner's Guide",
    ogDescription:
      "Your first job as a new pitcher is to throw a strike. Control your body, control the pitch.",
    twitterTitle: "How to Start Pitching for the First Time: A Beginner's Guide",
    twitterDescription:
      "A simple first-pitching guide for kids and parents from a Naples pitching coach.",
    note: "Brand new to the mound? Here's the one job that matters first, and why you don't need perfect mechanics or a big fastball to start.",
    topic: "Beginner series",
    emailSubject: "How to Start Pitching for the First Time",
    lede: [
      "**Short answer:** Your first job as a new pitcher is simple: throw a strike. You don't need perfect mechanics or max velocity to start. Stay balanced, because when you control your body, you control the pitch.",
      "This is part 1 of our [Beginner Pitching Series](/guides/beginner-pitching-series/). It's written for young pitchers and their parents in Naples and around Collier County who are just getting started.",
      NOT_MEDICAL,
    ],
    sections: [
      {
        heading: "Your first job: throw a strike",
        blocks: [
          {
            kind: "p",
            text: "New pitchers often think they need to throw hard right away. They don't. A strike is the best pitch in baseball, at any age. If you can throw strikes, you can pitch. Everything else gets built on top of that.",
          },
        ],
      },
      {
        heading: "You don't need perfect mechanics",
        blocks: [
          {
            kind: "p",
            text: "Nobody starts with a perfect delivery. Not you, not the big leaguers. Mechanics get better over time with good reps. What you need on day one is a simple, repeatable motion and an easy effort level.",
          },
        ],
      },
      {
        heading: "You don't need max velocity",
        blocks: [
          {
            kind: "p",
            text: "Speed comes later. Throwing as hard as you can before your motion is under control usually means more balls, more walks, and more frustration. Throw easy and on target first.",
          },
        ],
      },
      {
        heading: "Control your body = control the pitch",
        blocks: [
          {
            kind: "p",
            text: "This is the big idea of the whole series. If your body is balanced and under control, the ball goes where you want more often. If your body is wobbling or falling off, the ball goes wherever it wants.",
          },
          {
            kind: "ul",
            items: [
              "Start balanced.",
              "Move toward your target.",
              "Finish under control.",
            ],
          },
          {
            kind: "p",
            text: "Our guide on [how to stand on the mound](/guides/how-to-stand-on-the-mound-balance/) walks through balance step by step.",
          },
        ],
      },
      {
        heading: "Where to go next in the series",
        blocks: [
          {
            kind: "ol",
            items: [
              "[Pitching terms for beginners](/guides/pitching-terms-for-beginners/) so the words make sense",
              "[How to stand on the mound](/guides/how-to-stand-on-the-mound-balance/)",
              "[How to throw strikes: aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/)",
            ],
          },
          {
            kind: "p",
            text: "Parents who want to help in the backyard: our [how to teach a kid to pitch](/guides/how-to-teach-a-kid-to-pitch/) guide has a simple step-by-step plan, and the [pre-catch warmup](/guides/pre-catch-warmup/) shows how we get loose before throwing.",
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "What should a beginner pitcher learn first?",
                a: "How to throw strikes with a balanced, simple motion. One pitch, the fastball, thrown on target.",
              },
              {
                q: "Does my child need to throw hard to start pitching?",
                a: "No. Strikes come first. Speed comes later, once the motion is under control.",
              },
              {
                q: "Do they need perfect mechanics before pitching in a game?",
                a: "No. Nobody's mechanics are perfect. A simple, balanced, repeatable motion is plenty to start.",
              },
              {
                q: "How often should a new pitcher throw?",
                a: "Keep it easy and build in rest days. Our [throw-between-lessons guide](/guides/how-often-should-young-pitchers-throw-between-lessons/) has a simple weekly plan.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want help getting started?",
        blocks: [
          {
            kind: "p",
            text: "Send your child's age and what they want to work on through the [contact page](/contact/). We offer private beginner lessons in Naples and around Collier County.",
          },
        ],
      },
    ],
  }),
  seriesGuide({
    slug: "how-to-throw-strikes-aim-small-miss-small",
    title: "How to Throw Strikes: Aim Small, Miss Small (Plus a Partner Target Game)",
    metaTitle: "How to Throw Strikes: Aim Small, Miss Small | Pitching101",
    metaDescription:
      "How can a young pitcher throw more strikes? Aim small, miss small: pick one spot on the glove, keep arm speed the same, and try our partner target game.",
    ogTitle: "How to Throw Strikes: Aim Small, Miss Small (Plus a Partner Target Game)",
    ogDescription:
      "Aim small, miss small. One spot on the glove, eyes locked, same arm speed, plus a partner target game.",
    twitterTitle: "How to Throw Strikes: Aim Small, Miss Small (Plus a Partner Target Game)",
    twitterDescription:
      "A simple strike-throwing guide and backyard target game for young pitchers.",
    note: "The mindset and the backyard game we use to help young pitchers throw more strikes, using one small spot on the glove.",
    topic: "Strikes",
    icon: "/assets/icons/icon-strikes.png",
    emailSubject: "How to Throw Strikes: Aim Small, Miss Small",
    lede: [
      "**Short answer:** To throw more strikes, aim small, miss small. Pick one spot on the catcher's glove, lock your eyes on it for a few seconds, then throw with your normal arm speed and let your eyes do the work.",
      "This is part 2 of our [Beginner Pitching Series](/guides/beginner-pitching-series/). It covers how to think about strikes and a simple partner target game to practice aiming your fastball.",
    ],
    sections: [
      {
        heading: 'Why "don\'t miss" makes you miss',
        blocks: [
          {
            kind: "p",
            text: 'When a pitcher tells himself "don\'t miss," his body gets tight. Tight muscles make the ball harder to control. Instead of thinking about what NOT to do, give your eyes one clear job.',
          },
        ],
      },
      {
        heading: "Aim small, miss small",
        blocks: [
          {
            kind: "p",
            text: "If you aim at the whole catcher, a miss can end up anywhere. If you aim at one small spot, a miss is usually still close.",
          },
          {
            kind: "ol",
            items: [
              "**Pick one spot.** One spot on the glove, like the middle of the pocket.",
              "**Lock your eyes on it.** Stare at it for a few seconds before you start your motion.",
              "**Throw.** Keep your eyes on the spot all the way through.",
            ],
          },
        ],
      },
      {
        id: "partner-target-game-how-to-aim-a-fastball",
        heading: "Partner target game (how to aim a fastball)",
        blocks: [
          {
            kind: "p",
            text: "All you need is a partner with a glove. This is the game from Nick's Reel.",
          },
          {
            kind: "ul",
            items: [
              "**The target:** the middle of your partner's glove.",
              "**Hit it:** your partner moves the glove to a new spot.",
              "**Miss it:** throw at the same spot again.",
              '**Rules:** don\'t change your arm speed. Don\'t slow down to "guide" it. Your eyes do the work.',
            ],
          },
          {
            kind: "p",
            text: "Start at a short distance and move back only when hitting the glove feels easy. Keep it to a short, fun session, and warm up first with our [pre-catch warmup](/guides/pre-catch-warmup/).",
          },
        ],
      },
      {
        heading: "Don't slow your arm down to aim",
        blocks: [
          {
            kind: "p",
            text: "Slowing your arm to \"place\" the ball usually makes it sail or bounce. Same arm speed every throw. Trust your eyes and a balanced body. Remember: control your body = control the pitch. See [how to stand on the mound](/guides/how-to-stand-on-the-mound-balance/) for balance.",
          },
        ],
      },
      {
        heading: "More strike help",
        blocks: [
          {
            kind: "ul",
            items: [
              "Quick cues: our [strike tips](/guides/strike-tips/) card",
              "More target games: [fun games to play](/guides/fun-games/)",
              'New to the words "strike" and "count"? [Pitching terms for beginners](/guides/pitching-terms-for-beginners/)',
            ],
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "How can my child throw more strikes?",
                a: "Aim small, miss small. Pick one small spot on the glove, lock the eyes on it, and throw with normal arm speed.",
              },
              {
                q: "Should young pitchers slow down to throw strikes?",
                a: "No. Slowing the arm to aim usually makes control worse. Keep the same arm speed and let the eyes do the work.",
              },
              {
                q: "What's a good game to practice aiming a fastball?",
                a: "The partner target game: hit the middle of the glove and your partner moves it; miss and you throw at the same spot again.",
              },
              {
                q: "Why does my kid get wild when he's nervous?",
                a: 'Thinking "don\'t miss" makes the body tight. Giving the eyes one small target helps calm that down.',
              },
            ],
          },
        ],
      },
      {
        heading: "Want help with strikes?",
        blocks: [
          {
            kind: "p",
            text: "Tell us your child's age and what's happening with their control on the [contact page](/contact/). We teach command-first lessons in Naples and Collier County.",
          },
        ],
      },
    ],
  }),
  seriesGuide({
    slug: "pitching-terms-for-beginners",
    title: "Pitching Terms for Beginners: Mound, Rubber, Strike, Count",
    metaTitle: "Pitching Terms for Beginners: Mound, Strike, Count",
    metaDescription:
      "New to pitching? Simple meanings of mound, rubber, strike, ball, count, and get ahead for young pitchers and parents, from a Naples, FL pitching coach guide.",
    ogTitle: "Pitching Terms for Beginners: Mound, Rubber, Strike, Count",
    ogDescription:
      'Mound, rubber, strike, count, and "get ahead" explained in plain words for new pitchers and parents.',
    twitterTitle: "Pitching Terms for Beginners: Mound, Rubber, Strike, Count",
    twitterDescription: "A plain-language pitching glossary for beginners and baseball parents.",
    note: "New to baseball? The simple words every young pitcher and parent hears on day one, explained in plain language.",
    topic: "Beginner series",
    emailSubject: "Pitching Terms for Beginners",
    lede: [
      '**Short answer:** The mound is the raised dirt where the pitcher stands, the rubber is the white strip you push from, a strike is a pitch in the zone (or swung at and missed), and the count is balls and strikes on the batter. "Get ahead" means throwing an early strike so the count is on your side.',
      "This is part 3 of our [Beginner Pitching Series](/guides/beginner-pitching-series/). Knowing the words makes lessons, games, and coaching cues much easier to follow.",
    ],
    sections: [
      {
        heading: "The mound",
        blocks: [
          {
            kind: "p",
            text: "The raised circle of dirt in the middle of the infield. The pitcher stands on top of it to throw to the catcher.",
          },
        ],
      },
      {
        heading: "The rubber",
        blocks: [
          {
            kind: "p",
            text: "The white rectangle on top of the mound. A pitcher keeps a foot on it when starting each pitch.",
          },
        ],
      },
      {
        heading: "Strike",
        blocks: [
          {
            kind: "p",
            text: "A pitch that crosses the strike zone, or one the batter swings at and misses. A foul ball also counts as a strike, except it can't be the third strike.",
          },
        ],
      },
      {
        heading: "Ball",
        blocks: [
          {
            kind: "p",
            text: "A pitch outside the strike zone that the batter doesn't swing at. Four balls and the batter walks to first base.",
          },
        ],
      },
      {
        heading: "The count",
        blocks: [
          {
            kind: "p",
            text: 'Balls and strikes on the batter, always said balls first. "2-1" means two balls, one strike.',
          },
        ],
      },
      {
        heading: '"Get ahead"',
        blocks: [
          {
            kind: "p",
            text: 'Throwing an early strike, especially the first pitch, so the count is in the pitcher\'s favor (like 0-1 or 1-2). Getting ahead is one of the easiest ways for a young pitcher to have success. See [think like a pitcher](/guides/think-like-a-pitcher/).',
          },
        ],
      },
      {
        heading: "A few more words you'll hear",
        blocks: [
          {
            kind: "ul",
            items: [
              "**Catcher's glove / target:** where the pitcher aims. See [aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/).",
              "**Bullpen:** practice pitching to a catcher, before a game or in a lesson.",
              "**Fastball:** the first pitch every pitcher learns.",
              "**Changeup:** a slower pitch that looks like a fastball. See our [changeup guide](/guides/when-should-young-pitchers-start-throwing-a-changeup/).",
              "**Command:** being able to throw the ball where you want it.",
            ],
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: 'What does "count" mean in baseball?',
                a: 'It\'s the number of balls and strikes on the batter, said balls first. "3-2" is three balls and two strikes.',
              },
              {
                q: 'What does "get ahead" mean for a pitcher?',
                a: "Throwing an early strike so the count favors the pitcher, like 0-1.",
              },
              {
                q: "What is the pitching rubber?",
                a: "The white strip on top of the mound that the pitcher starts each pitch from.",
              },
              {
                q: "Is a foul ball a strike?",
                a: "Yes, unless the batter already has two strikes.",
              },
            ],
          },
        ],
      },
      {
        heading: "Questions about getting started?",
        blocks: [
          {
            kind: "p",
            text: "Send your child's age and experience on the [contact page](/contact/). We work with beginners in Naples and around Collier County.",
          },
        ],
      },
    ],
  }),
  seriesGuide({
    slug: "how-to-stand-on-the-mound-balance",
    title: "How to Stand on the Mound: Balance for Young Pitchers",
    metaTitle: "How to Stand on the Mound: Balance Tips | Pitching101",
    metaDescription:
      "How should young pitchers stand on the mound? Feet to the catcher, lift and hold, drop into back leg, reset if off balance. Balanced start = controlled finish.",
    ogTitle: "How to Stand on the Mound: Balance for Young Pitchers",
    ogDescription:
      "Feet to the catcher, lift and hold, drop and hold, deliver under control. A balanced start = a controlled finish.",
    twitterTitle: "How to Stand on the Mound: Balance for Young Pitchers",
    twitterDescription: "Simple mound balance steps for young pitchers from a Naples pitching coach.",
    note: "Where your feet go, how to lift and hold, and why a balanced start leads to a controlled finish.",
    topic: "Beginner series",
    emailSubject: "How to Stand on the Mound",
    lede: [
      "**Short answer:** Start with your feet pointed toward the catcher, lift your leg high, and hold your balance. Then drop into your back leg, hold, and deliver under control. If you're off balance, reset, because a balanced start = a controlled finish.",
      "This is part 4 of our [Beginner Pitching Series](/guides/beginner-pitching-series/). It's the foundation for the [basic pitching motion: balance, move, throw, finish](/guides/how-to-teach-a-kid-to-pitch/#balance-move-throw-finish).",
    ],
    sections: [
      {
        heading: "Step 1: Feet toward the catcher",
        blocks: [
          {
            kind: "p",
            text: "Stand on the rubber with your feet pointed toward the catcher. Stand tall and relaxed.",
          },
        ],
      },
      {
        heading: "Step 2: Lift high, balance, hold",
        blocks: [
          {
            kind: "p",
            text: "Lift your front leg high and hold it. Stay tall. You should feel steady, not wobbly. Holding for a moment in practice teaches your body what balance feels like.",
          },
        ],
      },
      {
        heading: "Step 3: Drop into your back leg, hold",
        blocks: [
          {
            kind: "p",
            text: "From the lift, sink into your back leg and hold again. This is where you load up before moving toward the catcher.",
          },
        ],
      },
      {
        heading: "Step 4: Deliver under control",
        blocks: [
          {
            kind: "p",
            text: "Now move toward the catcher and throw, staying under control the whole way. Finish where you can still stand steady.",
          },
        ],
      },
      {
        heading: "Off balance? Reset.",
        blocks: [
          {
            kind: "p",
            text: "If you tip, wobble, or fall off, don't throw it anyway. Step off, take a breath, and start over. Resetting is part of practice, not a mistake.",
          },
        ],
      },
      {
        heading: "Why balance matters",
        blocks: [
          {
            kind: "p",
            text: "Control your body = control the pitch. When your start is balanced, your finish is more controlled, and the ball goes where you aim more often. That's what [aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/) needs to work.",
          },
          {
            kind: "p",
            text: "Parents: our [how to teach a kid to pitch](/guides/how-to-teach-a-kid-to-pitch/) guide has a backyard balance drill, and the [pre-catch warmup](/guides/pre-catch-warmup/) gets the body loose first.",
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "How should a young pitcher stand on the mound?",
                a: "Feet pointed toward the catcher, standing tall and relaxed on the rubber.",
              },
              {
                q: "Why is balance so important in pitching?",
                a: "A balanced start = a controlled finish. When the body is under control, the pitch is easier to control.",
              },
              {
                q: "What should my child do if they lose balance mid-motion?",
                a: "Reset. Step off, breathe, and start the motion again instead of forcing the throw.",
              },
              {
                q: "Do they need a real mound to practice?",
                a: "No. Flat ground in the backyard or at the park works fine for balance work.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want help with balance and mechanics?",
        blocks: [
          {
            kind: "p",
            text: "Send your child's age and goals on the [contact page](/contact/). Lessons are at Fleischmann Park in Naples, and we travel within Collier County.",
          },
        ],
      },
    ],
  }),
  seriesGuide({
    slug: "four-seam-fastball-grip-for-kids",
    title: "Four-Seam Fastball Grip for Kids: The First Pitch to Learn",
    metaTitle: "Four-Seam Fastball Grip for Kids: First Pitch | Pitching101",
    metaDescription:
      "How should kids hold a four-seam fastball? Fingers across the horseshoe seams, thumb under, firm but relaxed. Why the fastball is the first pitch to learn.",
    ogTitle: "Four-Seam Fastball Grip for Kids: The First Pitch to Learn",
    ogDescription:
      "Fingers across the horseshoe, thumb under, firm but relaxed. Throw it like you're playing catch.",
    twitterTitle: "Four-Seam Fastball Grip for Kids: The First Pitch to Learn",
    twitterDescription:
      "The first grip every young pitcher learns, in plain steps from a Naples pitching coach.",
    note: "How to hold a four-seam fastball, in plain steps, and why the fastball is the foundation for every other pitch.",
    topic: "Beginner series",
    emailSubject: "Four-Seam Fastball Grip for Kids",
    lede: [
      "**Short answer:** Put your index and middle fingers across the horseshoe seams, thumb underneath, and hold the ball firm but relaxed. Then throw it like you're playing catch. Less is more, and the fastball is the foundation for every pitch that comes after it.",
      "This is part 6 of our [Beginner Pitching Series](/guides/beginner-pitching-series/). It's the grip every beginner learns first.",
    ],
    sections: [
      {
        heading: "Why the fastball comes first",
        blocks: [
          {
            kind: "p",
            text: "The fastball is the foundation. It's the pitch you'll throw most, and it's the one you learn to throw strikes with. Fastball command first, changeup second.",
          },
        ],
      },
      {
        heading: "The four-seam grip, step by step",
        blocks: [
          {
            kind: "ol",
            items: [
              "**Find the horseshoe.** Turn the ball until the seams make a horseshoe (a \"U\") shape.",
              "**Fingers across the seams.** Lay your index and middle fingers across the horseshoe seams, with a little space between them.",
              "**Thumb underneath.** Put your thumb under the ball, roughly between your two top fingers.",
              "**Firm but relaxed.** Hold it like you mean it, but don't squeeze it tight.",
            ],
          },
        ],
      },
      {
        heading: "Throw it like you're playing catch",
        blocks: [
          {
            kind: "p",
            text: "Once the grip is set, don't overthink it. Throw it like a normal game of catch. Less is more. Trying to do extra with your hand or wrist usually makes the ball harder to control.",
          },
        ],
      },
      {
        heading: "Practice ideas",
        blocks: [
          {
            kind: "ul",
            items: [
              "Pick up a ball and find the grip without looking, a few times a day.",
              "Play easy catch using only the four-seam grip.",
              "Then aim it: [aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/#partner-target-game-how-to-aim-a-fastball) has a partner target game.",
            ],
          },
          {
            kind: "p",
            text: "Warm up first with our [pre-catch warmup](/guides/pre-catch-warmup/).",
          },
        ],
      },
      {
        heading: "What comes after the fastball",
        blocks: [
          {
            kind: "p",
            text: "Once fastball strikes feel normal, the next pitch is the changeup. See the [beginner changeup section](/guides/when-should-young-pitchers-start-throwing-a-changeup/#changeup-for-beginners) of our changeup guide.",
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "What pitch should a kid learn first?",
                a: "The four-seam fastball. It's the foundation, and it's the easiest pitch to learn to throw for strikes.",
              },
              {
                q: "How do you hold a four-seam fastball?",
                a: "Index and middle fingers across the horseshoe seams, thumb underneath, firm but relaxed.",
              },
              {
                q: "Should my child squeeze the ball tight?",
                a: "No. Firm but relaxed. A tight squeeze usually makes control harder.",
              },
              {
                q: "When should they learn another pitch?",
                a: "After the fastball goes for strikes consistently. Fastball command first, changeup second.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want help with grips and command?",
        blocks: [
          {
            kind: "p",
            text: "Send your child's age and goals through the [contact page](/contact/). Private lessons in Naples and around Collier County.",
          },
        ],
      },
    ],
  }),
  seriesGuide({
    slug: "ready-for-a-curveball",
    title: "Is My Kid Ready for a Curveball? 3 Questions to Ask First",
    metaTitle: "Is My Kid Ready for a Curveball? 3 Questions | Pitching101",
    metaDescription:
      "Is your young pitcher ready for a curveball? Ask 3 questions first: fastball strikes, changeup arm speed, a repeatable motion. Not all yes? Keep building.",
    ogTitle: "Is My Kid Ready for a Curveball? 3 Questions to Ask First",
    ogDescription:
      "Three yes/no questions before a breaking ball. Not all yes? Keep building the fastball.",
    twitterTitle: "Is My Kid Ready for a Curveball? 3 Questions to Ask First",
    twitterDescription:
      "A breaking ball isn't a shortcut. Three questions for young pitchers and parents first.",
    note: "Before a breaking ball, answer three simple questions. If any answer is no, keep building the fastball and changeup.",
    topic: "Pitch selection",
    emailSubject: "Ready for a Curveball",
    lede: [
      "**Short answer:** Ask three questions: Does your fastball throw strikes consistently? Does your changeup use the same arm speed? Can you repeat your motion on every pitch? If any answer is no, keep building the fastball, because a breaking ball isn't a shortcut.",
      "This is part 9 of our [Beginner Pitching Series](/guides/beginner-pitching-series/).",
      NOT_MEDICAL,
    ],
    sections: [
      {
        heading: "Question 1: Do you throw fastball strikes consistently?",
        blocks: [
          {
            kind: "p",
            text: "Not once in a while. Consistently. If the fastball isn't going for strikes yet, a new pitch won't fix that. See [aim small, miss small](/guides/how-to-throw-strikes-aim-small-miss-small/).",
          },
        ],
      },
      {
        heading: "Question 2: Does your changeup use the same arm speed?",
        blocks: [
          {
            kind: "p",
            text: "The changeup comes before the curveball. If the changeup still looks slower out of your arm, keep working it. See the [beginner changeup section](/guides/when-should-young-pitchers-start-throwing-a-changeup/#changeup-for-beginners).",
          },
        ],
      },
      {
        heading: "Question 3: Can you repeat your motion on every pitch?",
        blocks: [
          {
            kind: "p",
            text: "Same balance, same move, same finish, every time. See [the basic pitching motion](/guides/how-to-teach-a-kid-to-pitch/#balance-move-throw-finish).",
          },
        ],
      },
      {
        heading: "Not all yes? Keep building the fastball",
        blocks: [
          {
            kind: "p",
            text: "That's normal, and it's not a setback. A breaking ball isn't a shortcut. Strikes, a good changeup, and a repeatable motion get more outs for young pitchers than a pitch they can't control.",
          },
        ],
      },
      {
        heading: "Talk to your coach (and doctor) first",
        blocks: [
          {
            kind: "p",
            text: "There's no one right age for every kid. Every pitcher grows and develops differently. Before adding a breaking ball, talk with your child's pitching coach about where they are. If you have any health questions about your child's arm, talk to a doctor.",
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "What age can kids throw a curveball?",
                a: "There isn't one answer for every child. Start with the three questions above, and talk to your child's coach. For health questions, talk to a doctor.",
              },
              {
                q: "Will a curveball help my kid get more outs?",
                a: "Not if the fastball and changeup aren't there yet. A breaking ball isn't a shortcut.",
              },
              {
                q: "What should my child work on instead?",
                a: "Fastball command first, changeup second, and a motion they can repeat on every pitch.",
              },
              {
                q: "My kid's travel coach wants a curve. What do we do?",
                a: "Share the three questions and talk it through with the coach. Ask what the plan is for the fastball and changeup first.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want a plan for what to work on next?",
        blocks: [
          {
            kind: "p",
            text: "Tell us your child's age and current pitches on the [contact page](/contact/). We coach young pitchers in Naples and Collier County.",
          },
        ],
      },
    ],
  }),
  seriesGuide({
    slug: "think-like-a-pitcher",
    title: "Think Like a Pitcher: 5 Mental Habits for Young Pitchers",
    metaTitle: "Think Like a Pitcher: Mental Tips for Kids | Pitching101",
    metaDescription:
      "How do young pitchers think on the mound? First-pitch strikes, one small target, fastball confidence, and a reset after every pitch. Win every pitch, then more.",
    ogTitle: "Think Like a Pitcher: 5 Mental Habits for Young Pitchers",
    ogDescription:
      "First-pitch strike, one small target, fastball confidence, reset every pitch. Win every pitch.",
    twitterTitle: "Think Like a Pitcher: 5 Mental Habits for Young Pitchers",
    twitterDescription: "Five simple mental habits for young pitchers from a Naples pitching coach.",
    note: "First-pitch strikes, one small target, confidence in your fastball, and a reset after every pitch. Win every pitch.",
    topic: "Beginner series",
    emailSubject: "Think Like a Pitcher",
    lede: [
      "**Short answer:** Thinking like a pitcher means throwing a first-pitch strike, picking one small target, throwing your fastball with confidence, and resetting after every pitch. Win the pitch, then the count, then the at-bat, then the game.",
      "This is part 10, the last step of our [Beginner Pitching Series](/guides/beginner-pitching-series/).",
    ],
    sections: [
      {
        heading: "1. Throw a first-pitch strike",
        blocks: [
          {
            kind: "p",
            text: "Getting ahead puts the count on your side. If the words are new, see [pitching terms for beginners](/guides/pitching-terms-for-beginners/).",
          },
        ],
      },
      {
        heading: "2. Pick one small target",
        blocks: [
          {
            kind: "p",
            text: "Aim small, miss small. One spot on the glove, eyes locked. See [how to throw strikes](/guides/how-to-throw-strikes-aim-small-miss-small/).",
          },
        ],
      },
      {
        heading: "3. Throw your fastball with confidence",
        blocks: [
          {
            kind: "p",
            text: "Your fastball is your best friend. Throw it like you mean it, with the same grip and the same arm speed. See [four-seam fastball grip](/guides/four-seam-fastball-grip-for-kids/).",
          },
        ],
      },
      {
        heading: "4. Reset after every pitch",
        blocks: [
          {
            kind: "p",
            text: "Good pitch or bad pitch, it's over. Take a breath, get the ball back, find your target, and start fresh. One pitch at a time.",
          },
        ],
      },
      {
        heading: "5. Win every pitch",
        blocks: [
          {
            kind: "p",
            text: "Win the pitch. Then win the count. Then the at-bat. Then the game. Big games are just a lot of small pitches.",
          },
        ],
      },
      {
        heading: "For parents: how to help",
        blocks: [
          {
            kind: "ul",
            items: [
              "After a game, ask about one pitch they're proud of.",
              "Praise strikes and resets, not just strikeouts or speed.",
              "Keep it fun. Confident kids throw more strikes.",
            ],
          },
        ],
      },
      {
        heading: "FAQ",
        blocks: [
          {
            kind: "faq",
            items: [
              {
                q: "How can my child stay calm on the mound?",
                a: "Reset after every pitch: breathe, find one small target, and throw the next one. One pitch at a time.",
              },
              {
                q: "Why is the first pitch so important?",
                a: "A first-pitch strike puts the count in the pitcher's favor, which makes the rest of the at-bat easier.",
              },
              {
                q: "What should a young pitcher think about before each pitch?",
                a: "One small target and one simple job: throw this pitch for a strike.",
              },
              {
                q: "My kid gets down after a walk. What helps?",
                a: "Reset. The walk is over. Win the next pitch.",
              },
            ],
          },
        ],
      },
      {
        heading: "Want help building a confident pitcher?",
        blocks: [
          {
            kind: "p",
            text: "Send your child's age and goals through the [contact page](/contact/). We coach young pitchers in Naples and around Collier County.",
          },
        ],
      },
    ],
  }),
];
