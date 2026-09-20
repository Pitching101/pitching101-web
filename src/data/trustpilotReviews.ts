/** Real Trustpilot reviews from https://www.trustpilot.com/review/pitching101.com — scraped live, not invented. */
export type TrustpilotReview = {
  name: string;
  stars: number;
  title: string;
  quote: string;
};

export const TRUSTPILOT_URL =
  "https://www.trustpilot.com/review/pitching101.com" as const;

export const trustpilotReviews: TrustpilotReview[] = [
  {
    "name": "Eric Marvin",
    "stars": 5,
    "title": "Coach Nick is a great young pitching\u2026",
    "quote": "Coach Nick is a great young pitching instructor.  He takes the time to teach the kids proper warm up and cool down as well as how to go about being a pitcher.  We will continue to utilize him for our travel team.  He is a true asset!"
  },
  {
    "name": "Grace",
    "stars": 5,
    "title": "Coach Nick is amazing!",
    "quote": "Coach Nick is amazing with young athletes! He has been working with our 9 year old son and the progress is impressive. His strike consistency has greatly improved as well as his throwing mechanics. We love how Coach Nick teaches him proper warmups and cool downs to protect his throwing arm. The lessons are fun and challenging at the same time. Coach Nick truly has a gift for connecting with young athletes and bringing out the best in them."
  },
  {
    "name": "K Rahall",
    "stars": 5,
    "title": "Nick worked with my son and was really\u2026",
    "quote": "Nick worked with my son and was really good at communicating what he needed to do to get better at it. He was fun and engaging and combined warming up with pitching mechanics perfectly. We wish we had more time with him but wish him well on his new adventure."
  },
  {
    "name": "vinnie_msn.com",
    "stars": 5,
    "title": "Nick worked with my son Bradley on a\u2026",
    "quote": "Nick worked with my son Bradley on a weekly basis with pitching. Probably 10 or more times. He did a great job connecting with him and understanding what needed to be worked on. He is very knowledgable and made training fun and engaging. He added greatly to Bradley\u2019s growth as a pitcher and will not be forgotten. We would have loved to have more time with him for training but wish him the best of luck with his future!"
  },
  {
    "name": "Katheryn Benson",
    "stars": 5,
    "title": "Huge improvement in the off season",
    "quote": "My son worked with Nick throughout the winter & spring season this past year in both a group setting as well as private.  Apart from being great with kids, he helped my son not only throw harder, but also establish a solid pitching warm-up routine as well as placed a big emphasis on arm care.  He grew in both control and command but most importantly, always looked forward to his sessions with Nick."
  },
  {
    "name": "Mike M",
    "stars": 5,
    "title": "Knowledge and experience ",
    "quote": "Nick from Pitching101 is an outstanding coach, with lots of experience. He worked with my son (9U going into 10U) and helped him adjust a lot of fundamentals issues that greatly increased his skillset and confidence. \n\nCoach Nick is great with youth athletes. We have attended both one on one lessons and pitching clinics. My son raved about both and wanted to do more. Nick honed in on the issues he observed; with his knowledge and experience he critiqued and work on those issues. \n\nI would highly recommend Pitching101 for anyone looking to develop their young athletes"
  },
  {
    "name": "Taylor Price",
    "stars": 5,
    "title": "Worth the investment and would do it again",
    "quote": "I've never played baseball in my life but decided to give it a go as a fun hobby. Within a few lessons, I was pitching in the zone and learned more than I ever could learning by myself. Yes it will be frustrating at times when you're not performing at the level you know you are capable of. But, that's exactly when Coach Deising steps in. I'm reminded of the basics like control, mechanics, and getting back in the game from the ground up. It was worth the investment."
  }
];
