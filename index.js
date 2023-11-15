const express = require("express");
const app = express();
const port = 3000;
const jsonData = {
  quiz: [
    {
      id: 18,
      name: " Grammar",
      category_id: 3,
    },
    {
      id: 20,
      name: "34 Easy Questions",
      category_id: 3,
    },
    {
      id: 66,
      name: "A Bunch of Questions",
      category_id: 5,
    },
    {
      id: 34,
      name: "A Little-A Few",
      category_id: 3,
    },
    {
      id: 209,
      name: "ACP-120 Jira Cloud Administration",
      category_id: 12,
    },
    {
      id: 210,
      name: "ACP-620 Managing Jira Cloud Projects",
      category_id: 12,
    },
    {
      id: 32,
      name: "Adjective or Adverb",
      category_id: 3,
    },
    {
      id: 33,
      name: "Adjective or Adverb 2",
      category_id: 3,
    },
    {
      id: 91,
      name: "Adjective Order",
      category_id: 5,
    },
    {
      id: 18,
      name: " Grammar",
      category_id: 3,
    },
    {
      id: 20,
      name: "34 Easy Questions",
      category_id: 3,
    },
    {
      id: 66,
      name: "A Bunch of Questions",
      category_id: 5,
    },
    {
      id: 34,
      name: "A Little-A Few",
      category_id: 3,
    },
    {
      id: 209,
      name: "ACP-120 Jira Cloud Administration",
      category_id: 12,
    },
    {
      id: 210,
      name: "ACP-620 Managing Jira Cloud Projects",
      category_id: 12,
    },
    {
      id: 32,
      name: "Adjective or Adverb",
      category_id: 3,
    },
    {
      id: 33,
      name: "Adjective or Adverb 2",
      category_id: 3,
    },
    {
      id: 91,
      name: "Adjective Order",
      category_id: 5,
    },
    {
      id: 35,
      name: "And-But-Or",
      category_id: 3,
    },
    {
      id: 86,
      name: "Another, The Other, The Others, Others",
      category_id: 5,
    },
    {
      id: 211,
      name: "APB-220 Confluence Space Administration",
      category_id: 12,
    },
    {
      id: 138,
      name: "Arkansas",
      category_id: 8,
    },
    {
      id: 1,
      name: "Array",
      category_id: 1,
    },
    {
      id: 171,
      name: "Arrays",
      category_id: 9,
    },
    {
      id: 64,
      name: "Articles",
      category_id: 4,
    },
    {
      id: 101,
      name: "Articles: Health Clubs",
      category_id: 7,
    },
    {
      id: 85,
      name: "Assorted Grammar Quiz",
      category_id: 5,
    },
    {
      id: 69,
      name: "Assorted Questions 1",
      category_id: 5,
    },
    {
      id: 67,
      name: "Assorted Questions 2",
      category_id: 5,
    },
    {
      id: 77,
      name: "Astronomy: Prepositions Quiz",
      category_id: 5,
    },
    {
      id: 37,
      name: "At-By-With",
      category_id: 3,
    },
    {
      id: 36,
      name: "At-On-In Used in Time and Dates",
      category_id: 3,
    },
    {
      id: 103,
      name: "Australia",
      category_id: 8,
    },
    {
      id: 104,
      name: "Australia - Did You Know?",
      category_id: 8,
    },
    {
      id: 169,
      name: "Basic PHP",
      category_id: 9,
    },
    {
      id: 93,
      name: "Beer Basics",
      category_id: 6,
    },
    {
      id: 105,
      name: "Carnival Quiz",
      category_id: 8,
    },
    {
      id: 3,
      name: "Collection",
      category_id: 1,
    },
    {
      id: 4,
      name: "Compile",
      category_id: 1,
    },
    {
      id: 5,
      name: "Concept",
      category_id: 1,
    },
    {
      id: 74,
      name: "Conjunctions I",
      category_id: 5,
    },
    {
      id: 87,
      name: "Connecting Words",
      category_id: 5,
    },
    {
      id: 75,
      name: "Connectives",
      category_id: 5,
    },
    {
      id: 6,
      name: "Constructor",
      category_id: 1,
    },
    {
      id: 173,
      name: "Control Structures",
      category_id: 9,
    },
    {
      id: 7,
      name: "Conversion",
      category_id: 1,
    },
    {
      id: 115,
      name: "Croatia",
      category_id: 8,
    },
    {
      id: 193,
      name: "CSS Basics",
      category_id: 10,
    },
    {
      id: 195,
      name: "CSS Box Model",
      category_id: 10,
    },
    {
      id: 198,
      name: "CSS Flexbox and Grid",
      category_id: 10,
    },
    {
      id: 196,
      name: "CSS Layout and Positioning",
      category_id: 10,
    },
    {
      id: 194,
      name: "CSS Selectors and Properties",
      category_id: 10,
    },
    {
      id: 197,
      name: "CSS Transitions and Animations",
      category_id: 10,
    },
    {
      id: 8,
      name: "Data type",
      category_id: 1,
    },
    {
      id: 182,
      name: "Databases Handling",
      category_id: 9,
    },
    {
      id: 180,
      name: "Date and Timestamp",
      category_id: 9,
    },
    {
      id: 40,
      name: "Did or Made",
      category_id: 3,
    },
    {
      id: 41,
      name: "Do or Make",
      category_id: 3,
    },
    {
      id: 38,
      name: "Do-Does-Did",
      category_id: 3,
    },
    {
      id: 39,
      name: "Don't-Doesn't-Didn't",
      category_id: 3,
    },
    {
      id: 116,
      name: "El Salvador",
      category_id: 8,
    },
    {
      id: 133,
      name: "England",
      category_id: 8,
    },
    {
      id: 117,
      name: "Europe",
      category_id: 8,
    },
    {
      id: 2,
      name: "Exception",
      category_id: 1,
    },
    {
      id: 176,
      name: "Exceptions and Error Handling",
      category_id: 9,
    },
    {
      id: 60,
      name: "Expressing Ability",
      category_id: 3,
    },
    {
      id: 88,
      name: "Fall, Feel or Fill",
      category_id: 5,
    },
    {
      id: 179,
      name: "File System",
      category_id: 9,
    },
    {
      id: 118,
      name: "Finland",
      category_id: 8,
    },
    {
      id: 141,
      name: "Florida Facts Quiz",
      category_id: 8,
    },
    {
      id: 45,
      name: "For - Since",
      category_id: 3,
    },
    {
      id: 207,
      name: "Form & Gestures",

      category_id: 11,
    },
    {
      id: 119,
      name: "France",
      category_id: 8,
    },
    {
      id: 174,
      name: "Functions",
      category_id: 9,
    },
    {
      id: 142,
      name: "Georgia",
      category_id: 8,
    },
    {
      id: 130,
      name: "Getting to Know Spain",
      category_id: 8,
    },
    {
      id: 42,
      name: "Go or Do",
      category_id: 3,
    },
    {
      id: 31,
      name: "Going To",
      category_id: 3,
    },
    {
      id: 95,
      name: "Grammar & Vocabulary",
      category_id: 7,
    },
    {
      id: 129,
      name: "Granada, Spain",
      category_id: 8,
    },
    {
      id: 44,
      name: "Have-Has",
      category_id: 3,
    },
    {
      id: 187,
      name: "HTML Basics",
      category_id: 10,
    },
    {
      id: 188,
      name: "HTML Elements",
      category_id: 10,
    },
    {
      id: 189,
      name: "HTML Forms",
      category_id: 10,
    },
    {
      id: 181,
      name: "HTML Forms Handling",
      category_id: 9,
    },
    {
      id: 190,
      name: "HTML Images and Media",
      category_id: 10,
    },
    {
      id: 192,
      name: "HTML Semantic Elements",
      category_id: 10,
    },
    {
      id: 191,
      name: "HTML Tables",
      category_id: 10,
    },
    {
      id: 120,
      name: "Hungary",
      category_id: 8,
    },
    {
      id: 94,
      name: "Hurricane Quiz",
      category_id: 6,
    },
    {
      id: 102,
      name: "Identifying Sentence Problems",
      category_id: 7,
    },
    {
      id: 43,
      name: "In-At with Places",
      category_id: 3,
    },
    {
      id: 200,
      name: "Input Type",
      category_id: 10,
    },
    {
      id: 9,
      name: "IO",
      category_id: 1,
    },
    {
      id: 121,
      name: "Italy's Regions",
      category_id: 8,
    },
    {
      id: 145,
      name: "Kansas",
      category_id: 8,
    },
    {
      id: 10,
      name: "Keyword",
      category_id: 1,
    },
    {
      id: 124,
      name: "Korea",
      category_id: 8,
    },
    {
      id: 89,
      name: "Lie or Lay?",
      category_id: 5,
    },
    {
      id: 82,
      name: "Look At-Look For-Look After",
      category_id: 5,
    },
    {
      id: 30,
      name: "Look, See or Watch.",
      category_id: 3,
    },
    {
      id: 146,
      name: "Louisiana",
      category_id: 8,
    },
    {
      id: 90,
      name: "Make or Do?",
      category_id: 5,
    },
    {
      id: 78,
      name: "Making a Hypothesis",
      category_id: 5,
    },
    {
      id: 126,
      name: "Malaysia",
      category_id: 8,
    },
    {
      id: 149,
      name: "Massachusetts",
      category_id: 8,
    },
    {
      id: 150,
      name: "Michigan Test",
      category_id: 8,
    },
    {
      id: 68,
      name: "Miscellaneous Grammar Quiz",
      category_id: 5,
    },
    {
      id: 153,
      name: "Missouri",
      category_id: 8,
    },
    {
      id: 56,
      name: "Modals",
      category_id: 3,
    },
    {
      id: 46,
      name: "Much-Many",
      category_id: 3,
    },
    {
      id: 11,
      name: "MultiThread",
      category_id: 1,
    },
    {
      id: 208,
      name: "Navigation & Routing",

      category_id: 11,
    },
    {
      id: 154,
      name: "Nevada",
      category_id: 8,
    },
    {
      id: 156,
      name: "New York",
      category_id: 8,
    },
    {
      id: 127,
      name: "New Zealand - Aotearoa",
      category_id: 8,
    },
    {
      id: 157,
      name: "North Carolina Present and Past",
      category_id: 8,
    },
    {
      id: 55,
      name: "North or Northern?",
      category_id: 3,
    },
    {
      id: 175,
      name: "Object Oriented Concept",
      category_id: 9,
    },
    {
      id: 83,
      name: "On, In or At?",
      category_id: 5,
    },
    {
      id: 12,
      name: "OOP",
      category_id: 1,
    },
    {
      id: 13,
      name: "Operator",
      category_id: 1,
    },
    {
      id: 170,
      name: "Operators and Expressions in php",
      category_id: 9,
    },
    {
      id: 110,
      name: "Ottawa, Canada",
      category_id: 8,
    },
    {
      id: 84,
      name: "Participles",
      category_id: 5,
    },
    {
      id: 177,
      name: "PHP Filter",
      category_id: 9,
    },
    {
      id: 184,
      name: "PHP Networking",
      category_id: 9,
    },
    {
      id: 19,
      name: "Practise Tests",
      category_id: 3,
    },
    {
      id: 65,
      name: "Prepositions",
      category_id: 4,
    },
    {
      id: 57,
      name: "Prepositions I",
      category_id: 3,
    },
    {
      id: 58,
      name: "Prepositions II",
      category_id: 3,
    },
    {
      id: 59,
      name: "Prepositions III",
      category_id: 3,
    },
    {
      id: 26,
      name: "Present Simple Negative Verbs",
      category_id: 3,
    },
    {
      id: 27,
      name: "Present Simple Verbs",
      category_id: 3,
    },
    {
      id: 61,
      name: "Pronouns",
      category_id: 3,
    },
    {
      id: 97,
      name: "Punctuation",
      category_id: 7,
    },
    {
      id: 21,
      name: "Question Formation II",
      category_id: 3,
    },
    {
      id: 22,
      name: "Question Tags",
      category_id: 3,
    },
    {
      id: 62,
      name: "Question Words",
      category_id: 3,
    },
    {
      id: 166,
      name: "Quiz - Salt Lake City Information",
      category_id: 8,
    },
    {
      id: 92,
      name: "Raise or Rise?",
      category_id: 5,
    },
    {
      id: 178,
      name: "Regular Expressions",
      category_id: 9,
    },
    {
      id: 199,
      name: "Responsive Web Design",
      category_id: 10,
    },
    {
      id: 165,
      name: "Salt Lake City, Utah, USA",
      category_id: 8,
    },
    {
      id: 47,
      name: "Set, Sit or Seat?",
      category_id: 3,
    },
    {
      id: 48,
      name: "So or Because",
      category_id: 3,
    },
    {
      id: 185,
      name: "Spring Basics",
      category_id: 1,
    },
    {
      id: 14,
      name: "Statement",
      category_id: 1,
    },
    {
      id: 49,
      name: "Still-Yet",
      category_id: 3,
    },
    {
      id: 15,
      name: "String",
      category_id: 1,
    },
    {
      id: 131,
      name: "Sweden",
      category_id: 8,
    },
    {
      id: 24,
      name: "Tag Questions - Does she? Doesn't she? Did she?",
      category_id: 3,
    },
    {
      id: 23,
      name: "Tag Questions - Has he? Hasn't he? Had he?",
      category_id: 3,
    },
    {
      id: 25,
      name: "Tag Questions - Have you? Are you? Do you?",
      category_id: 3,
    },
    {
      id: 63,
      name: "Tell or Say",
      category_id: 3,
    },
    {
      id: 163,
      name: "Texas",
      category_id: 8,
    },
    {
      id: 70,
      name: "The 3 Bears Mystery",
      category_id: 5,
    },
    {
      id: 106,
      name: "The City of São Paulo, Brazil",
      category_id: 8,
    },
    {
      id: 29,
      name: "The Library",
      category_id: 3,
    },
    {
      id: 50,
      name: "Their, There or They're",
      category_id: 3,
    },
    {
      id: 134,
      name: "Tips for Travellers to the UK",
      category_id: 8,
    },
    {
      id: 16,
      name: "Type of function",
      category_id: 1,
    },
    {
      id: 206,
      name: "UI component",

      category_id: 11,
    },
    {
      id: 132,
      name: "Ukraine",
      category_id: 8,
    },
    {
      id: 135,
      name: "United Kingdom",
      category_id: 8,
    },
    {
      id: 136,
      name: "United Kingdom Trivia",
      category_id: 8,
    },
    {
      id: 51,
      name: "Until-Since-For",
      category_id: 3,
    },
    {
      id: 164,
      name: "Utah",
      category_id: 8,
    },
    {
      id: 73,
      name: "Valentine's Day Quiz",
      category_id: 5,
    },
    {
      id: 17,
      name: "Variable",
      category_id: 1,
    },
    {
      id: 98,
      name: "Various Questions I",
      category_id: 7,
    },
    {
      id: 99,
      name: "Various Questions II",
      category_id: 7,
    },
    {
      id: 100,
      name: "Various Questions III",
      category_id: 7,
    },
    {
      id: 28,
      name: "Verb Gerund or Infinitive ",
      category_id: 3,
    },
    {
      id: 79,
      name: "Verb Tenses 2",
      category_id: 5,
    },
    {
      id: 81,
      name: "Verb Tenses 3",
      category_id: 5,
    },
    {
      id: 96,
      name: "verbs, grammar",
      category_id: 7,
    },
    {
      id: 162,
      name: "Vermont",
      category_id: 8,
    },
    {
      id: 168,
      name: "Vietnam",
      category_id: 8,
    },
    {
      id: 52,
      name: "Was or Were",
      category_id: 3,
    },
    {
      id: 183,
      name: "Website Security",
      category_id: 9,
    },
    {
      id: 167,
      name: "West Virginia",
      category_id: 8,
    },
    {
      id: 54,
      name: "What-Which-How",
      category_id: 3,
    },
    {
      id: 53,
      name: "What, When or Where?",
      category_id: 3,
    },
    {
      id: 205,
      name: "Widget",
      category_id: 11,
    },
  ],
};
// Định nghĩa một route trả về dữ liệu JSON
app.get("/api/listtopic", (req, res) => {
  res.json(jsonData);
});

const topic1 = {
  questions: [
    {
      id: 220,
      content: "Eating ___ chocolate is unhealthy.",
      answers: [
        { id: 877, content: "a lot of", correct: 1, question_id: 220 },
        { id: 878, content: "many", correct: 0, question_id: 220 },
      ],
      pass: 78,
      fail: 5,
      created_at: null,
      updated_at: null,
    },
    {
      id: 221,
      content: "How ___ bread do we have in the kitchen?",
      answers: [
        { id: 879, content: "much", correct: 1, question_id: 221 },
        { id: 880, content: "many", correct: 0, question_id: 221 },
      ],
      pass: 68,
      fail: 28,
      created_at: null,
      updated_at: null,
    },
    {
      id: 222,
      content: "How ___ cups of coffee do you drink every day?",
      answers: [
        { id: 881, content: "many", correct: 1, question_id: 222 },
        { id: 882, content: "much", correct: 0, question_id: 222 },
      ],
      pass: 74,
      fail: 8,
      created_at: null,
      updated_at: null,
    },
    {
      id: 223,
      content: "How ___ rice do we have?",
      answers: [
        { id: 883, content: "much", correct: 1, question_id: 223 },
        { id: 884, content: "many", correct: 0, question_id: 223 },
      ],
      pass: 76,
      fail: 20,
      created_at: null,
      updated_at: null,
    },
    {
      id: 224,
      content: "I ate ___ soup for dinner.",
      answers: [
        { id: 885, content: "a little", correct: 1, question_id: 224 },
        { id: 886, content: "a few", correct: 0, question_id: 224 },
      ],
      pass: 86,
      fail: 10,
      created_at: null,
      updated_at: null,
    },
    {
      id: 225,
      content: "I buy ___ bananas every week.",
      answers: [
        { id: 887, content: "a few", correct: 1, question_id: 225 },
        { id: 888, content: "a little", correct: 0, question_id: 225 },
      ],
      pass: 76,
      fail: 15,
      created_at: null,
      updated_at: null,
    },
    {
      id: 226,
      content: "I don't have ___ money for lunch.",
      answers: [
        { id: 889, content: "any", correct: 1, question_id: 226 },
        { id: 890, content: "some", correct: 0, question_id: 226 },
      ],
      pass: 76,
      fail: 14,
      created_at: null,
      updated_at: null,
    },
    {
      id: 227,
      content: "I don't like ___ vegetables.",
      answers: [
        { id: 891, content: "many", correct: 1, question_id: 227 },
        { id: 892, content: "much", correct: 0, question_id: 227 },
      ],
      pass: 58,
      fail: 24,
      created_at: null,
      updated_at: null,
    },
    {
      id: 228,
      content: "I have ___ friends in America.",
      answers: [
        { id: 893, content: "a few", correct: 1, question_id: 228 },
        { id: 894, content: "a little", correct: 0, question_id: 228 },
      ],
      pass: 77,
      fail: 11,
      created_at: null,
      updated_at: null,
    },
    {
      id: 229,
      content: "Mary likes to eat ___ chicken for dinner.",
      answers: [
        { id: 895, content: "some", correct: 1, question_id: 229 },
        { id: 896, content: "any", correct: 0, question_id: 229 },
      ],
      pass: 84,
      fail: 8,
      created_at: null,
      updated_at: null,
    },
    {
      id: 230,
      content: "She doesn't like ___ catsup on her French fries.",
      answers: [
        { id: 897, content: "any", correct: 1, question_id: 230 },
        { id: 898, content: "some", correct: 0, question_id: 230 },
      ],
      pass: 82,
      fail: 12,
      created_at: null,
      updated_at: null,
    },
    {
      id: 231,
      content: "There ___ many beans in the soup.",
      answers: [
        { id: 899, content: "are", correct: 1, question_id: 231 },
        { id: 900, content: "is", correct: 0, question_id: 231 },
      ],
      pass: 80,
      fail: 7,
      created_at: null,
      updated_at: null,
    },
    {
      id: 232,
      content: "There ___ milk in the refrigerator.",
      answers: [
        { id: 901, content: "is", correct: 1, question_id: 232 },
        { id: 902, content: "are", correct: 0, question_id: 232 },
      ],
      pass: 86,
      fail: 17,
      created_at: null,
      updated_at: null,
    },
    {
      id: 233,
      content: "There are ___ students.",
      answers: [
        { id: 903, content: "a lot of", correct: 1, question_id: 233 },
        { id: 904, content: "much ", correct: 0, question_id: 233 },
      ],
      pass: 84,
      fail: 8,
      created_at: null,
      updated_at: null,
    },
    {
      id: 234,
      content: "There aren't ___ eggs in the refrigerator.",
      answers: [
        { id: 905, content: "a lot of", correct: 1, question_id: 234 },
        { id: 906, content: "much", correct: 0, question_id: 234 },
      ],
      pass: 58,
      fail: 17,
      created_at: null,
      updated_at: null,
    },
    {
      id: 235,
      content: "There is ___ ice cream.",
      answers: [
        { id: 907, content: "a lot of", correct: 1, question_id: 235 },
        { id: 908, content: "many", correct: 0, question_id: 235 },
      ],
      pass: 83,
      fail: 9,
      created_at: null,
      updated_at: null,
    },
    {
      id: 236,
      content: "We don't drink ___ coffee.",
      answers: [
        { id: 909, content: "much", correct: 1, question_id: 236 },
        { id: 910, content: "many", correct: 0, question_id: 236 },
      ],
      pass: 70,
      fail: 8,
      created_at: null,
      updated_at: null,
    },
    {
      id: 237,
      content: "We don't drink ___ orange juice.",
      answers: [
        { id: 911, content: "much", correct: 1, question_id: 237 },
        { id: 912, content: "many", correct: 0, question_id: 237 },
      ],
      pass: 78,
      fail: 9,
      created_at: null,
      updated_at: null,
    },
    {
      id: 238,
      content: "We like ___ jelly on our toast.",
      answers: [
        { id: 913, content: "a little", correct: 1, question_id: 238 },
        { id: 914, content: "a few", correct: 0, question_id: 238 },
      ],
      pass: 65,
      fail: 5,
      created_at: null,
      updated_at: null,
    },
    {
      id: 239,
      content: "___ apples do you have?",
      answers: [
        { id: 915, content: "How many", correct: 1, question_id: 239 },
        { id: 916, content: "How much", correct: 0, question_id: 239 },
      ],
      pass: 78,
      fail: 4,
      created_at: null,
      updated_at: null,
    },
    {
      id: 240,
      content: "___ milk do we need?",
      answers: [
        { id: 917, content: "How much", correct: 1, question_id: 240 },
        { id: 918, content: "How many", correct: 0, question_id: 240 },
      ],
      pass: 11,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 241,
      content: "___ restaurants sell hot dogs.",
      answers: [
        { id: 919, content: "Many", correct: 1, question_id: 241 },
        { id: 920, content: "Much", correct: 0, question_id: 241 },
      ],
      pass: 8,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 242,
      content: "___ there any tomatoes in the salad?",
      answers: [
        { id: 921, content: "Are", correct: 1, question_id: 242 },
        { id: 922, content: "Is", correct: 0, question_id: 242 },
      ],
      pass: 9,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 243,
      content: "___ there cheese in the salad?",
      answers: [
        { id: 923, content: "Is", correct: 1, question_id: 243 },
        { id: 924, content: "Are", correct: 0, question_id: 243 },
      ],
      pass: 11,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 244,
      content: "___ traffic is on the freeway now?",
      answers: [
        { id: 925, content: "How much", correct: 1, question_id: 244 },
        { id: 926, content: "How many", correct: 0, question_id: 244 },
      ],
      pass: 11,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 245,
      content: "Bad weather prevented the team ___.",
      answers: [
        { id: 927, content: "from playing", correct: 1, question_id: 245 },
        { id: 928, content: "to play", correct: 0, question_id: 245 },
      ],
      pass: 8,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 246,
      content: "Cheryl remembers ___ her ring on the dining table.",
      answers: [
        { id: 929, content: "seeing", correct: 1, question_id: 246 },
        { id: 930, content: "to have seen", correct: 0, question_id: 246 },
      ],
      pass: 8,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 247,
      content: "Clarence gave up ___ cigarettes but not cigars.",
      answers: [
        { id: 931, content: "smoking", correct: 1, question_id: 247 },
        { id: 932, content: "to smoke", correct: 0, question_id: 247 },
      ],
      pass: 7,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 248,
      content: "Dan objected to ___ sent home early",
      answers: [
        { id: 933, content: "being", correct: 1, question_id: 248 },
        { id: 934, content: "be", correct: 0, question_id: 248 },
      ],
      pass: 8,
      fail: 3,
      created_at: null,
      updated_at: null,
    },
    {
      id: 249,
      content: "Debbie succeeded ___ the tournament.",
      answers: [
        { id: 935, content: "in winning", correct: 1, question_id: 249 },
        { id: 936, content: "to win", correct: 0, question_id: 249 },
      ],
      pass: 7,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 250,
      content: "Fumi is used to ___ natto for breakfast.",
      answers: [
        { id: 937, content: "eating", correct: 1, question_id: 250 },
        { id: 938, content: "eat", correct: 0, question_id: 250 },
      ],
      pass: 9,
      fail: 3,
      created_at: null,
      updated_at: null,
    },
    {
      id: 251,
      content: "Have you finished ___ supper yet?",
      answers: [
        { id: 939, content: "eating", correct: 1, question_id: 251 },
        { id: 940, content: "to eat", correct: 0, question_id: 251 },
      ],
      pass: 9,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 252,
      content: "He spoke out of turn instead ___ .",
      answers: [
        { id: 941, content: "of listening", correct: 1, question_id: 252 },
        { id: 942, content: "to listen", correct: 0, question_id: 252 },
      ],
      pass: 12,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 253,
      content: "Helen is busy ___ Sunday dinner.",
      answers: [
        { id: 943, content: "preparing", correct: 1, question_id: 253 },
        { id: 944, content: "to prepare", correct: 0, question_id: 253 },
      ],
      pass: 9,
      fail: 2,
      created_at: null,
      updated_at: null,
    },
    {
      id: 254,
      content: "Henry insisted ___ the train.",
      answers: [
        { id: 945, content: "on taking", correct: 1, question_id: 254 },
        { id: 946, content: "to take", correct: 0, question_id: 254 },
      ],
      pass: 10,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 255,
      content: "I could go on ___ all night.",
      answers: [
        { id: 947, content: "dancing", correct: 1, question_id: 255 },
        { id: 948, content: "to dance", correct: 0, question_id: 255 },
      ],
      pass: 12,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 256,
      content: "I have the pleasure ___ the next guest.",
      answers: [
        { id: 949, content: "of introducing", correct: 1, question_id: 256 },
        { id: 950, content: "to introduce", correct: 0, question_id: 256 },
      ],
      pass: 10,
      fail: 2,
      created_at: null,
      updated_at: null,
    },
    {
      id: 257,
      content: "It is impossible to avoid ___ mistakes.",
      answers: [
        { id: 951, content: "making ", correct: 1, question_id: 257 },
        { id: 952, content: "to make", correct: 0, question_id: 257 },
      ],
      pass: 8,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 258,
      content: "It is impossible to thread a needle without ___.",
      answers: [
        { id: 953, content: "looking", correct: 1, question_id: 258 },
        { id: 954, content: "to look", correct: 0, question_id: 258 },
      ],
      pass: 8,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 259,
      content: "It is no good ___ noisy in church.",
      answers: [
        { id: 955, content: "being", correct: 1, question_id: 259 },
        { id: 956, content: "to be", correct: 0, question_id: 259 },
      ],
      pass: 8,
      fail: 2,
      created_at: null,
      updated_at: null,
    },
    {
      id: 260,
      content: "It is no use ___ after 9:00.",
      answers: [
        { id: 957, content: "calling", correct: 1, question_id: 260 },
        { id: 958, content: "to call", correct: 0, question_id: 260 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 261,
      content: "Karen is fond ___ chocolate.",
      answers: [
        { id: 959, content: "of eating", correct: 1, question_id: 261 },
        { id: 960, content: "to eat", correct: 0, question_id: 261 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 262,
      content: "Maika remembers ___ to Canada two years ago.",
      answers: [
        { id: 961, content: "having gone", correct: 1, question_id: 262 },
        { id: 962, content: "to have gone", correct: 0, question_id: 262 },
      ],
      pass: 2,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 263,
      content: "Mother takes great pleasure ___ pictures of our childhood.",
      answers: [
        { id: 963, content: "in showing", correct: 1, question_id: 263 },
        { id: 964, content: "to show", correct: 0, question_id: 263 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 264,
      content: "Not everyone enjoys ___ tennis.",
      answers: [
        { id: 965, content: "playing", correct: 1, question_id: 264 },
        { id: 966, content: "to play", correct: 0, question_id: 264 },
      ],
      pass: 2,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 265,
      content: "Sean could not help ___ at the end of the sad movie.",
      answers: [
        { id: 967, content: "crying", correct: 1, question_id: 265 },
        { id: 968, content: "to cry", correct: 0, question_id: 265 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 266,
      content: "She often thinks ___ her cousin on the telephone.",
      answers: [
        { id: 969, content: "of calling", correct: 1, question_id: 266 },
        { id: 970, content: "to call", correct: 0, question_id: 266 },
      ],
      pass: 3,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 267,
      content: "Stop ___ at me!",
      answers: [
        { id: 971, content: "staring", correct: 1, question_id: 267 },
        { id: 972, content: "to stare", correct: 0, question_id: 267 },
      ],
      pass: 3,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 268,
      content: "The new museum is worth ___.",
      answers: [
        { id: 973, content: "visiting", correct: 1, question_id: 268 },
        { id: 974, content: "to visit", correct: 0, question_id: 268 },
      ],
      pass: 2,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 269,
      content: "There is no harm ___ the truth.",
      answers: [
        { id: 975, content: "in telling", correct: 1, question_id: 269 },
        { id: 976, content: "to tell", correct: 0, question_id: 269 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 270,
      content: "When the girls got tired ___ they went to sleep.",
      answers: [
        { id: 977, content: "of talking", correct: 1, question_id: 270 },
        { id: 978, content: "to talk", correct: 0, question_id: 270 },
      ],
      pass: 2,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 271,
      content: "Would you mind ___ me the time?",
      answers: [
        { id: 979, content: "telling", correct: 1, question_id: 271 },
        { id: 980, content: "to tell", correct: 0, question_id: 271 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 272,
      content: "Which sentence is correct?",
      answers: [
        {
          id: 981,
          content: "A girl who is in our club has a sportscar.",
          correct: 1,
          question_id: 272,
        },
        {
          id: 982,
          content: "A girl has a sportscar who is in our club.",
          correct: 0,
          question_id: 272,
        },
      ],
      pass: 2,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 273,
      content:
        "Photography changed dramatically ___ introduced instant pictures.",
      answers: [
        { id: 983, content: "when Polaroid", correct: 1, question_id: 273 },
        { id: 984, content: "Polaroid", correct: 0, question_id: 273 },
        { id: 985, content: "when was", correct: 0, question_id: 273 },
        { id: 986, content: "it when Polaroid", correct: 0, question_id: 273 },
      ],
      pass: 2,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 274,
      content:
        "Xavier Philippe will often spend his evenings ___ upside-down from the ceiling in his room.",
      answers: [
        { id: 987, content: "hanging", correct: 1, question_id: 274 },
        { id: 988, content: "which hanging", correct: 0, question_id: 274 },
        { id: 989, content: "that are", correct: 0, question_id: 274 },
        { id: 990, content: "hang", correct: 0, question_id: 274 },
      ],
      pass: 3,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 275,
      content: "___ sharks, whales and dolphins are warm blooded mammals.",
      answers: [
        { id: 991, content: "Unlike", correct: 1, question_id: 275 },
        { id: 992, content: "Not likeness to", correct: 0, question_id: 275 },
        { id: 993, content: "Alike", correct: 0, question_id: 275 },
        { id: 994, content: "Dislike", correct: 0, question_id: 275 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 276,
      content: "Sebastien can drink ___ a gallon of beer in one sitting.",
      answers: [
        { id: 995, content: "as much as", correct: 1, question_id: 276 },
        { id: 996, content: "mostly", correct: 0, question_id: 276 },
        { id: 997, content: "so much that", correct: 0, question_id: 276 },
        { id: 998, content: "their", correct: 0, question_id: 276 },
      ],
      pass: 1,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 277,
      content:
        "The closer we ___ to our trip to Boston the more excited my students become.",
      answers: [
        { id: 999, content: "are", correct: 1, question_id: 277 },
        { id: 1000, content: "have", correct: 0, question_id: 277 },
        { id: 1001, content: "the", correct: 0, question_id: 277 },
        { id: 1002, content: "it has", correct: 0, question_id: 277 },
      ],
      pass: 2,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 278,
      content:
        "The USS Constitution, the oldest ship still in active service in the U.S. Navy, ____ in 1797.",
      answers: [
        { id: 1003, content: "was launched", correct: 1, question_id: 278 },
        { id: 1004, content: "when it launched", correct: 0, question_id: 278 },
        {
          id: 1005,
          content: "that was launched",
          correct: 0,
          question_id: 278,
        },
        { id: 1006, content: "launching", correct: 0, question_id: 278 },
      ],
      pass: 2,
      fail: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 279,
      content:
        "___ the end of the whaling industry came hard times for seaports like New Bedford and Nantucket.",
      answers: [
        { id: 1007, content: "With", correct: 1, question_id: 279 },
        { id: 1008, content: "Was it", correct: 0, question_id: 279 },
        { id: 1009, content: "This", correct: 0, question_id: 279 },
        { id: 1010, content: "Moreover", correct: 0, question_id: 279 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 280,
      content:
        "One purpose ___ to make up for money spent in the French and Indian War.",
      answers: [
        {
          id: 1011,
          content: "of the Stamp Act was",
          correct: 1,
          question_id: 280,
        },
        {
          id: 1012,
          content: "of the Stamp Act which was",
          correct: 0,
          question_id: 280,
        },
        { id: 1013, content: "the Stamp Act", correct: 0, question_id: 280 },
        { id: 1014, content: "of the Stamp Act", correct: 0, question_id: 280 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 281,
      content:
        "___ in 1939, the Borne Bridge spans the Cape Cod Canal and is one of the many grand projects of the Depression era.",
      answers: [
        { id: 1015, content: "Completed", correct: 1, question_id: 281 },
        { id: 1016, content: "Completes", correct: 0, question_id: 281 },
        { id: 1017, content: "Completing", correct: 0, question_id: 281 },
        { id: 1018, content: "Complete", correct: 0, question_id: 281 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 282,
      content:
        "The Copperhead is a venomous serpent, found as far North as the Blue Hills in Massachusetts and ___ bite has proved dangerous to hikers and joggers.",
      answers: [
        { id: 1019, content: "its", correct: 1, question_id: 282 },
        { id: 1020, content: "who", correct: 0, question_id: 282 },
        { id: 1021, content: "whom", correct: 0, question_id: 282 },
        { id: 1022, content: "whose", correct: 0, question_id: 282 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 283,
      content:
        "The Boston Marathon ___ every April on Patriot's Day to commemorate the Battles of Lexington and Concord.",
      answers: [
        { id: 1023, content: "is run", correct: 1, question_id: 283 },
        { id: 1024, content: "ran", correct: 0, question_id: 283 },
        { id: 1025, content: "run", correct: 0, question_id: 283 },
        { id: 1026, content: "running", correct: 0, question_id: 283 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 284,
      content:
        "Strangely enough, the Bunker Hill monument ____ on Breed's Hill where the actual battle took place.",
      answers: [
        { id: 1027, content: "is located", correct: 1, question_id: 284 },
        { id: 1028, content: "has situated", correct: 0, question_id: 284 },
        { id: 1029, content: "to situate", correct: 0, question_id: 284 },
        { id: 1030, content: "locating", correct: 0, question_id: 284 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 285,
      content:
        "With the publishing of Thoreau's On Walden Pond _____ of the wonder of Nature.",
      answers: [
        {
          id: 1031,
          content: "came a new appreciation",
          correct: 1,
          question_id: 285,
        },
        { id: 1032, content: "his appreciation", correct: 0, question_id: 285 },
        { id: 1033, content: "appreciated", correct: 0, question_id: 285 },
        {
          id: 1034,
          content: "the author appreciated",
          correct: 0,
          question_id: 285,
        },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 286,
      content:
        "Samuel Adams argued that to live in a truly free and noble state the people permitted to vote ___ even to the point of including women.",
      answers: [
        {
          id: 1035,
          content: "should be increased",
          correct: 1,
          question_id: 286,
        },
        { id: 1036, content: "would be larger", correct: 0, question_id: 286 },
        { id: 1037, content: "should larger", correct: 0, question_id: 286 },
        { id: 1038, content: "is", correct: 0, question_id: 286 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 287,
      content:
        "___ Boston Harbor now, with its dolphins and seals, you would find it hard to believe how polluted it was just a few years ago.",
      answers: [
        { id: 1039, content: "Seeing", correct: 1, question_id: 287 },
        { id: 1040, content: "Seen", correct: 0, question_id: 287 },
        { id: 1041, content: "It sees", correct: 0, question_id: 287 },
        { id: 1042, content: "Is seeing", correct: 0, question_id: 287 },
      ],
      pass: 1,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
  ],
};
app.get("/api/topic1", (req, res) => {
  res.json(topic1);
});

const topic2 = {
  questions: [
    {
      id: 1061,
      content: "How often do you play tennis?",
      answers: [
        { id: 3603, content: "On Tuesday.", correct: 0, question_id: 1061 },
        { id: 3604, content: "For two hours.", correct: 0, question_id: 1061 },
        {
          id: 3605,
          content: "Almost every day.",
          correct: 1,
          question_id: 1061,
        },
        { id: 3606, content: "With John.", correct: 0, question_id: 1061 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1062,
      content: "Where do you usually eat lunch?",
      answers: [
        { id: 3607, content: "Sandwich.", correct: 0, question_id: 1062 },
        { id: 3608, content: "With Jane.", correct: 0, question_id: 1062 },
        { id: 3609, content: "At 12:00.", correct: 0, question_id: 1062 },
        {
          id: 3610,
          content: "In the cafeteria.",
          correct: 1,
          question_id: 1062,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1063,
      content: "How long did you study last night?",
      answers: [
        { id: 3611, content: "With Bob.", correct: 0, question_id: 1063 },
        { id: 3612, content: "In my room.", correct: 0, question_id: 1063 },
        { id: 3613, content: "English.", correct: 0, question_id: 1063 },
        {
          id: 3614,
          content: "For three hours.",
          correct: 1,
          question_id: 1063,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1064,
      content: "What kind of novels do you like?",
      answers: [
        { id: 3615, content: "Yes, I do.", correct: 0, question_id: 1064 },
        {
          id: 3616,
          content: "I like spy novels.",
          correct: 1,
          question_id: 1064,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1065,
      content: "What kind of work do you do?",
      answers: [
        {
          id: 3617,
          content: "I work every day.",
          correct: 0,
          question_id: 1065,
        },
        {
          id: 3618,
          content: "I'm a piano teacher.",
          correct: 1,
          question_id: 1065,
        },
        {
          id: 3619,
          content: "I worked for two hours.",
          correct: 0,
          question_id: 1065,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1066,
      content: "How many hours a day do you watch TV?",
      answers: [
        {
          id: 3620,
          content: "About two hours.",
          correct: 1,
          question_id: 1066,
        },
        {
          id: 3621,
          content: "In my living room.",
          correct: 0,
          question_id: 1066,
        },
        {
          id: 3622,
          content: "I watch the news.",
          correct: 0,
          question_id: 1066,
        },
        { id: 3623, content: "On Tuesday.", correct: 0, question_id: 1066 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1067,
      content: "What is your busiest day of the week?",
      answers: [
        { id: 3624, content: "In the morning.", correct: 0, question_id: 1067 },
        { id: 3625, content: "Every day.", correct: 0, question_id: 1067 },
        { id: 3626, content: "Tuesday.", correct: 1, question_id: 1067 },
        { id: 3627, content: "Last week.", correct: 0, question_id: 1067 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1068,
      content: "My mother is a good cook.",
      answers: [
        {
          id: 3628,
          content: "I agree with you.",
          correct: 1,
          question_id: 1068,
        },
        { id: 3629, content: "I agree you.", correct: 0, question_id: 1068 },
        { id: 3630, content: "I agree to you.", correct: 0, question_id: 1068 },
        {
          id: 3631,
          content: "I agree for you.",
          correct: 0,
          question_id: 1068,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1069,
      content: 'What does "TV" mean?',
      answers: [
        { id: 3632, content: "For one hour.", correct: 0, question_id: 1069 },
        { id: 3633, content: "Yes", correct: 0, question_id: 1069 },
        { id: 3634, content: "Television.", correct: 1, question_id: 1069 },
        { id: 3635, content: "For one hour.", correct: 0, question_id: 1069 },
        { id: 3636, content: "On Friday.", correct: 0, question_id: 1069 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1070,
      content: 'How do you spell "dog"?',
      answers: [
        { id: 3637, content: "No", correct: 0, question_id: 1070 },
        { id: 3638, content: "D-O-G", correct: 1, question_id: 1070 },
        { id: 3639, content: "I have one dog.", correct: 0, question_id: 1070 },
        { id: 3640, content: "I don't", correct: 0, question_id: 1070 },
        { id: 3641, content: "Cat.", correct: 0, question_id: 1070 },
        { id: 3642, content: "I have one dog.", correct: 0, question_id: 1070 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1071,
      content: "What did you do yesterday?",
      answers: [
        { id: 3643, content: "I am swimming.", correct: 0, question_id: 1071 },
        { id: 3644, content: "I swim.", correct: 0, question_id: 1071 },
        { id: 3645, content: "I will swim.", correct: 0, question_id: 1071 },
        { id: 3646, content: "I swam.", correct: 1, question_id: 1071 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1072,
      content: "What do you like to drink?",
      answers: [
        { id: 3647, content: "Coffee.", correct: 1, question_id: 1072 },
        {
          id: 3648,
          content: "Saturday evening.",
          correct: 0,
          question_id: 1072,
        },
        { id: 3649, content: "Two.", correct: 0, question_id: 1072 },
        {
          id: 3650,
          content: "With my friends.",
          correct: 0,
          question_id: 1072,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1073,
      content: "What did you eat last night?",
      answers: [
        { id: 3651, content: "At six.", correct: 0, question_id: 1073 },
        { id: 3652, content: "Spaghetti.", correct: 1, question_id: 1073 },
        { id: 3653, content: "With my family.", correct: 0, question_id: 1073 },
        { id: 3654, content: "At home.", correct: 0, question_id: 1073 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1074,
      content: "What are you doing?",
      answers: [
        { id: 3655, content: "I'm eating.", correct: 1, question_id: 1074 },
        { id: 3656, content: "I ate.", correct: 0, question_id: 1074 },
        {
          id: 3657,
          content: "I will be eating.",
          correct: 0,
          question_id: 1074,
        },
        { id: 3658, content: "I have eaten.", correct: 0, question_id: 1074 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1075,
      content: "What will you do this afternoon?",
      answers: [
        { id: 3659, content: "I play soccer.", correct: 0, question_id: 1075 },
        {
          id: 3660,
          content: "I played soccer.",
          correct: 0,
          question_id: 1075,
        },
        {
          id: 3661,
          content: "I'll play soccer.",
          correct: 1,
          question_id: 1075,
        },
        {
          id: 3662,
          content: "I was playing soccer.",
          correct: 0,
          question_id: 1075,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1076,
      content: "It seems to me that most restaurants are too expensive.",
      answers: [
        {
          id: 3663,
          content: "I don't think it.",
          correct: 0,
          question_id: 1076,
        },
        { id: 3664, content: "I don't think.", correct: 0, question_id: 1076 },
        {
          id: 3665,
          content: "I don't think so.",
          correct: 1,
          question_id: 1076,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1077,
      content: "Where's Mike?",
      answers: [
        { id: 3666, content: "At school.", correct: 1, question_id: 1077 },
        { id: 3667, content: "At eight.", correct: 0, question_id: 1077 },
        {
          id: 3668,
          content: "For three hours.",
          correct: 0,
          question_id: 1077,
        },
        { id: 3669, content: "No, he isn't.", correct: 0, question_id: 1077 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1079,
      content: "When did you go to that restaurant?",
      answers: [
        { id: 3675, content: "Spaghetti.", correct: 0, question_id: 1079 },
        { id: 3676, content: "With Jane.", correct: 0, question_id: 1079 },
        { id: 3677, content: "Last night.", correct: 1, question_id: 1079 },
        {
          id: 3678,
          content: "About 30 minutes.",
          correct: 0,
          question_id: 1079,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1080,
      content: "When was the last time you took a picture?",
      answers: [
        {
          id: 3679,
          content: "A picture of Jane.",
          correct: 0,
          question_id: 1080,
        },
        { id: 3680, content: "Seven pictures.", correct: 0, question_id: 1080 },
        {
          id: 3681,
          content: "About four days ago.",
          correct: 1,
          question_id: 1080,
        },
        { id: 3682, content: "With my camera.", correct: 0, question_id: 1080 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1081,
      content: "What were you doing last night at 7:00?",
      answers: [
        { id: 3683, content: "I sleep.", correct: 0, question_id: 1081 },
        { id: 3684, content: "I slept.", correct: 0, question_id: 1081 },
        {
          id: 3685,
          content: "I will be sleeping.",
          correct: 0,
          question_id: 1081,
        },
        { id: 3686, content: "I was sleeping.", correct: 1, question_id: 1081 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1082,
      content: "When will you mail that letter?",
      answers: [
        { id: 3687, content: "Last night.", correct: 0, question_id: 1082 },
        { id: 3688, content: "To Jane.", correct: 0, question_id: 1082 },
        { id: 3689, content: "After school.", correct: 1, question_id: 1082 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1083,
      content: "What are you going to do after dinner?",
      answers: [
        { id: 3690, content: "I took a bath", correct: 0, question_id: 1083 },
        {
          id: 3691,
          content: "I'll take a bath.",
          correct: 1,
          question_id: 1083,
        },
        { id: 3692, content: "I take a bath.", correct: 0, question_id: 1083 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1084,
      content: "How long have you been playing the trumpet?",
      answers: [
        { id: 3693, content: "About 50 cm.", correct: 0, question_id: 1084 },
        { id: 3694, content: "For four years.", correct: 1, question_id: 1084 },
        { id: 3695, content: "In my room.", correct: 0, question_id: 1084 },
        { id: 3696, content: "By myself.", correct: 0, question_id: 1084 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1085,
      content: "How many hours a day do you sleep?",
      answers: [
        {
          id: 3697,
          content: "I have slept 7 hours.",
          correct: 0,
          question_id: 1085,
        },
        {
          id: 3698,
          content: "I am sleeping 7 hours.",
          correct: 0,
          question_id: 1085,
        },
        {
          id: 3699,
          content: "I slept 7 hours.",
          correct: 0,
          question_id: 1085,
        },
        {
          id: 3700,
          content: "I sleep 7 hours.",
          correct: 1,
          question_id: 1085,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1086,
      content: "How often do you write letters?",
      answers: [
        { id: 3701, content: "Two pages.", correct: 0, question_id: 1086 },
        {
          id: 3702,
          content: "Two times a week.",
          correct: 1,
          question_id: 1086,
        },
        { id: 3703, content: "Two people.", correct: 0, question_id: 1086 },
        { id: 3704, content: "Two hours.", correct: 0, question_id: 1086 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1087,
      content: "Where can I buy beer?",
      answers: [
        {
          id: 3705,
          content: "When you are twenty years old.",
          correct: 0,
          question_id: 1087,
        },
        {
          id: 3706,
          content: "About two bottles.",
          correct: 0,
          question_id: 1087,
        },
        { id: 3707, content: "With Jane.", correct: 0, question_id: 1087 },
        {
          id: 3708,
          content: "At a liquor store.",
          correct: 1,
          question_id: 1087,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1088,
      content: "What's your favorite sport?",
      answers: [
        { id: 3709, content: "Swim.", correct: 0, question_id: 1088 },
        { id: 3710, content: "Swimming.", correct: 1, question_id: 1088 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1089,
      content: "When was the last time you went shopping?",
      answers: [
        { id: 3711, content: "Yesterday.", correct: 1, question_id: 1089 },
        { id: 3712, content: "Tomorrow.", correct: 0, question_id: 1089 },
        {
          id: 3713,
          content: "Near the Station.",
          correct: 0,
          question_id: 1089,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1090,
      content: "How often do you speak on the telephone?",
      answers: [
        {
          id: 3714,
          content: "At least once a day.",
          correct: 1,
          question_id: 1090,
        },
        { id: 3715, content: "In the evening?", correct: 0, question_id: 1090 },
        {
          id: 3716,
          content: "For about 30 minutes.",
          correct: 0,
          question_id: 1090,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1091,
      content: "How many times have you gone camping?",
      answers: [
        { id: 3717, content: "Three people.", correct: 0, question_id: 1091 },
        { id: 3718, content: "Three days.", correct: 0, question_id: 1091 },
        { id: 3719, content: "Three times.", correct: 1, question_id: 1091 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1092,
      content: "When's your birthday?",
      answers: [
        { id: 3720, content: "November two.", correct: 0, question_id: 1092 },
        { id: 3721, content: "November twice.", correct: 0, question_id: 1092 },
        {
          id: 3722,
          content: "November second.",
          correct: 1,
          question_id: 1092,
        },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1093,
      content: "Where are you from?",
      answers: [
        { id: 3723, content: "New York.", correct: 1, question_id: 1093 },
        { id: 3724, content: "1982.", correct: 0, question_id: 1093 },
        { id: 3725, content: "At school.", correct: 0, question_id: 1093 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
    {
      id: 1094,
      content: "How do you get to school?",
      answers: [
        { id: 3726, content: "With train.", correct: 0, question_id: 1094 },
        { id: 3727, content: "In train.", correct: 0, question_id: 1094 },
        { id: 3728, content: "By train.", correct: 1, question_id: 1094 },
      ],
      pass: 0,
      fail: 0,
      created_at: null,
      updated_at: null,
    },
  ],
};
app.get("/api/topic2", (req, res) => {
  res.json(topic2);
});
const listen = [
  {
    id: 265,
    word: "arm",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994176/vocab/265_arm.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=265&language=US",
  },
  {
    id: 266,
    word: "eye",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994188/vocab/266_eye.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=266&language=US",
  },
  {
    id: 267,
    word: "eyebrow",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994190/vocab/267_eyebrow.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=267&language=US",
  },
  {
    id: 269,
    word: "leg",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994192/vocab/269_leg.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=269&language=US",
  },
  {
    id: 271,
    word: "thumb",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994195/vocab/271_thumb.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=271&language=US",
  },
  {
    id: 272,
    word: "elbow",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994196/vocab/272_elbow.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=272&language=US",
  },
  {
    id: 274,
    word: "finger",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994198/vocab/274_finger.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=274&language=US",
  },
  {
    id: 275,
    word: "foot",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994199/vocab/275_foot.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=275&language=US",
  },
  {
    id: 276,
    word: "ankle",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994200/vocab/276_ankle.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=276&language=US",
  },
  {
    id: 278,
    word: "hair",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994203/vocab/278_hair.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=278&language=US",
  },
  {
    id: 279,
    word: "neck",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994205/vocab/279_neck.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=279&language=US",
  },
  {
    id: 280,
    word: "hand",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994206/vocab/280_hand.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=280&language=US",
  },
  {
    id: 281,
    word: "wrist",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994207/vocab/281_wrist.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=281&language=US",
  },
  {
    id: 282,
    word: "hip",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994209/vocab/282_hip.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=282&language=US",
  },
  {
    id: 283,
    word: "chin",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994211/vocab/283_chin.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=283&language=US",
  },
  {
    id: 284,
    word: "knee",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994212/vocab/284_knee.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=284&language=US",
  },
  {
    id: 285,
    word: "head",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994214/vocab/285_head.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=285&language=US",
  },
  {
    id: 286,
    word: "lip",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994215/vocab/286_lip.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=286&language=US",
  },
  {
    id: 287,
    word: "mouth",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994217/vocab/287_mouth.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=287&language=US",
  },
  {
    id: 288,
    word: "nose",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994218/vocab/288_nose.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=288&language=US",
  },
  {
    id: 291,
    word: "thigh",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994234/vocab/291_thigh.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=291&language=US",
  },
  {
    id: 292,
    word: "ear",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994236/vocab/292_ear.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=292&language=US",
  },
  {
    id: 295,
    word: "back",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994237/vocab/295_back.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=295&language=US",
  },
  {
    id: 296,
    word: "underarm",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994239/vocab/296_underarm.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=296&language=US",
  },
  {
    id: 299,
    word: "shoulder",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994241/vocab/299_shoulder.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=299&language=US",
  },
  {
    id: 300,
    word: "forehead",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994242/vocab/300_forehead.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=300&language=US",
  },
  {
    id: 301,
    word: "waist",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994244/vocab/301_waist.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=301&language=US",
  },
  {
    id: 303,
    word: "cheek",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994246/vocab/303_cheek.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=303&language=US",
  },
  {
    id: 306,
    word: "toe",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994250/vocab/306_toe.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=306&language=US",
  },
];
app.get("/api/listen", (req, res) => {
  res.json(listen);
});
const listen1 = [
  {
    id: 19,
    word: "gold",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993801/vocab/19_gold.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=19&language=US",
  },
  {
    id: 91,
    word: "color",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993965/vocab/91_color.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=91&language=US",
  },
  {
    id: 112,
    word: "red",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993997/vocab/112_red.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=112&language=US",
  },
  {
    id: 113,
    word: "blue",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993999/vocab/113_blue.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=113&language=US",
  },
  {
    id: 114,
    word: "yellow",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994000/vocab/114_yellow.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=114&language=US",
  },
  {
    id: 115,
    word: "green",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994012/vocab/115_green.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=115&language=US",
  },
  {
    id: 116,
    word: "pink",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994013/vocab/116_pink.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=116&language=US",
  },
  {
    id: 117,
    word: "orange",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994015/vocab/117_orange.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=117&language=US",
  },
  {
    id: 118,
    word: "purple",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994016/vocab/118_purple.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=118&language=US",
  },
  {
    id: 119,
    word: "black",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994017/vocab/119_black.png",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=119&language=US",
  },
  {
    id: 120,
    word: "white",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994018/vocab/120_white.png",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=120&language=US",
  },
  {
    id: 121,
    word: "brown",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994020/vocab/121_brown.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=121&language=US",
  },
  {
    id: 197,
    word: "gray",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994118/vocab/197_gray.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=197&language=US",
  },
  {
    id: 13237,
    word: "beige",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994706/vocab/13237_beige.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=13237&language=US",
  },
  {
    id: 33285,
    word: "cyan",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995512/vocab/33285_cyan.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=33285&language=US",
  },
  {
    id: 40256,
    word: "dun",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995737/vocab/40256_dun.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=40256&language=US",
  },
  {
    id: 41104,
    word: "ecru",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995764/vocab/41104_ecru.png",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=41104&language=US",
  },
  {
    id: 60624,
    word: "grey",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996160/vocab/60624_grey.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=60624&language=US",
  },
  {
    id: 69334,
    word: "indigo",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996398/vocab/69334_indigo.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=69334&language=US",
  },
  {
    id: 71896,
    word: "ivory",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996447/vocab/71896_ivory.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=71896&language=US",
  },
  {
    id: 72100,
    word: "jade",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996507/vocab/72100_jade.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=72100&language=US",
  },
  {
    id: 76506,
    word: "lavender",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996616/vocab/76506_lavender.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=76506&language=US",
  },
  {
    id: 89575,
    word: "navy",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996901/vocab/89575_navy.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=89575&language=US",
  },
  {
    id: 93433,
    word: "olive",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996990/vocab/93433_olive.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=93433&language=US",
  },
  {
    id: 114008,
    word: "ruby",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997439/vocab/114008_ruby.png",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=114008&language=US",
  },
  {
    id: 114358,
    word: "rust",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997451/vocab/114358_rust.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=114358&language=US",
  },
  {
    id: 115347,
    word: "sand",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997484/vocab/115347_sand.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=115347&language=US",
  },
  {
    id: 120730,
    word: "silver",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997608/vocab/120730_silver.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=120730&language=US",
  },
  {
    id: 131117,
    word: "tan",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997886/vocab/131117_tan.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=131117&language=US",
  },
];
app.get("/api/listen1", (req, res) => {
  res.json(listen1);
});
const listen2 = [
  {
    id: 95,
    word: "hot",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993972/vocab/95_hot.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=95&language=US",
  },
  {
    id: 96,
    word: "cold",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993974/vocab/96_cold.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=96&language=US",
  },
  {
    id: 107,
    word: "wet",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993990/vocab/107_wet.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=107&language=US",
  },
  {
    id: 126,
    word: "rain",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994026/vocab/126_rain.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=126&language=US",
  },
  {
    id: 309,
    word: "sunshine",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994253/vocab/309_sunshine.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=309&language=US",
  },
  {
    id: 311,
    word: "snow",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994255/vocab/311_snow.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=311&language=US",
  },
  {
    id: 312,
    word: "hail",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994256/vocab/312_hail.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=312&language=US",
  },
  {
    id: 315,
    word: "shower",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994260/vocab/315_shower.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=315&language=US",
  },
  {
    id: 318,
    word: "cloud",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994261/vocab/318_cloud.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=318&language=US",
  },
  {
    id: 319,
    word: "rainbow",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994263/vocab/319_rainbow.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=319&language=US",
  },
  {
    id: 320,
    word: "wind",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994270/vocab/320_wind.gif",
    soundUS: null,
  },
  {
    id: 321,
    word: "breeze",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994284/vocab/321_breeze.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=321&language=US",
  },
  {
    id: 322,
    word: "thunder",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994287/vocab/322_thunder.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=322&language=US",
  },
  {
    id: 324,
    word: "storm",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994292/vocab/324_storm.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=324&language=US",
  },
  {
    id: 326,
    word: "gale",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994296/vocab/326_gale.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=326&language=US",
  },
  {
    id: 327,
    word: "tornado",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994298/vocab/327_tornado.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=327&language=US",
  },
  {
    id: 329,
    word: "flood",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994301/vocab/329_flood.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=329&language=US",
  },
  {
    id: 332,
    word: "drought",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994306/vocab/332_drought.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=332&language=US",
  },
  {
    id: 333,
    word: "windy",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994308/vocab/333_windy.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=333&language=US",
  },
  {
    id: 334,
    word: "cloudy",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994310/vocab/334_cloudy.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=334&language=US",
  },
  {
    id: 336,
    word: "misty",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994314/vocab/336_misty.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=336&language=US",
  },
  {
    id: 337,
    word: "icy",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994316/vocab/337_icy.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=337&language=US",
  },
  {
    id: 340,
    word: "dry",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994320/vocab/340_dry.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=340&language=US",
  },
  {
    id: 345,
    word: "sunny",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994325/vocab/345_sunny.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=345&language=US",
  },
  {
    id: 144027,
    word: "warm",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684998239/vocab/144027_warm.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=144027&language=US",
  },
  {
    id: 146281,
    word: "windless",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684998282/vocab/146281_windless.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=146281&language=US",
  },
];
app.get("/api/listen2", (req, res) => {
  res.json(listen2);
});
const listen3 = [
  {
    id: 28,
    word: "moon",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993830/vocab/28_moon.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=28&language=US",
  },
  {
    id: 35,
    word: "sky",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993843/vocab/35_sky.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=35&language=US",
  },
  {
    id: 36,
    word: "star",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993845/vocab/36_star.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=36&language=US",
  },
  {
    id: 38,
    word: "sun",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993847/vocab/38_sun.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=38&language=US",
  },
  {
    id: 9406,
    word: "astronaut",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994520/vocab/9406_astronaut.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=9406&language=US",
  },
  {
    id: 9413,
    word: "astronomer",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994526/vocab/9413_astronomer.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=9413&language=US",
  },
  {
    id: 28030,
    word: "comet",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995261/vocab/28030_comet.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=28030&language=US",
  },
  {
    id: 29606,
    word: "constellation",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995320/vocab/29606_constellation.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=29606&language=US",
  },
  {
    id: 40707,
    word: "earth",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995754/vocab/40707_earth.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=40707&language=US",
  },
  {
    id: 52977,
    word: "galaxy",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996041/vocab/52977_galaxy.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=52977&language=US",
  },
  {
    id: 73649,
    word: "jupiter",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996547/vocab/73649_jupiter.jpg",
    soundUS: null,
  },
  {
    id: 82697,
    word: "mars",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996768/vocab/82697_mars.jpg",
    soundUS: null,
  },
  {
    id: 84410,
    word: "mercury",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996802/vocab/84410_mercury.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=84410&language=US",
  },
  {
    id: 90041,
    word: "neptune",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996913/vocab/90041_neptune.jpg",
    soundUS: null,
  },
  {
    id: 92616,
    word: "observatory",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996969/vocab/92616_observatory.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=92616&language=US",
  },
  {
    id: 94279,
    word: "orbit",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996996/vocab/94279_orbit.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=94279&language=US",
  },
  {
    id: 102501,
    word: "pluto",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997199/vocab/102501_pluto.jpg",
    soundUS: null,
  },
  {
    id: 115864,
    word: "saturn",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997496/vocab/115864_saturn.jpg",
    soundUS: null,
  },
  {
    id: 124019,
    word: "space",
    imageUrl: null,
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=124019&language=US",
  },
  {
    id: 132011,
    word: "telescope",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684997906/vocab/132011_telescope.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=132011&language=US",
  },
  {
    id: 139631,
    word: "universe",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684998139/vocab/139631_universe.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=139631&language=US",
  },
  {
    id: 140952,
    word: "uranus",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684998148/vocab/140952_uranus.jpg",
    soundUS: null,
  },
  {
    id: 142216,
    word: "venus",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684998179/vocab/142216_venus.jpg",
    soundUS: null,
  },
];
app.get("/api/listen3", (req, res) => {
  res.json(listen3);
});
const listen4 = [
  {
    id: 23,
    word: "lake",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993820/vocab/23_lake.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=23&language=US",
  },
  {
    id: 9664,
    word: "atmosphere",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994536/vocab/9664_atmosphere.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=9664&language=US",
  },
  {
    id: 10505,
    word: "avalanche",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994557/vocab/10505_avalanche.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=10505&language=US",
  },
  {
    id: 12609,
    word: "bay",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994663/vocab/12609_bay.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=12609&language=US",
  },
  {
    id: 12680,
    word: "beach",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994665/vocab/12680_beach.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=12680&language=US",
  },
  {
    id: 20316,
    word: "canal",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994993/vocab/20316_canal.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=20316&language=US",
  },
  {
    id: 20640,
    word: "canyon",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995004/vocab/20640_canyon.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=20640&language=US",
  },
  {
    id: 26388,
    word: "cliff",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995202/vocab/26388_cliff.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=26388&language=US",
  },
  {
    id: 26939,
    word: "coal",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995225/vocab/26939_coal.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=26939&language=US",
  },
  {
    id: 26979,
    word: "coast",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995236/vocab/26979_coast.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=26979&language=US",
  },
  {
    id: 30269,
    word: "coppice",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995376/vocab/30269_coppice.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=30269&language=US",
  },
  {
    id: 30282,
    word: "copse",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995382/vocab/30282_copse.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=30282&language=US",
  },
  {
    id: 31696,
    word: "crater",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995431/vocab/31696_crater.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=31696&language=US",
  },
  {
    id: 36080,
    word: "desert",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995633/vocab/36080_desert.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=36080&language=US",
  },
  {
    id: 40741,
    word: "earthquake",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995756/vocab/40741_earthquake.gif",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=40741&language=US",
  },
  {
    id: 48627,
    word: "field",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995921/vocab/48627_field.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=48627&language=US",
  },
  {
    id: 50950,
    word: "forest",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996001/vocab/50950_forest.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=50950&language=US",
  },
  {
    id: 51295,
    word: "fountain",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996004/vocab/51295_fountain.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=51295&language=US",
  },
  {
    id: 58151,
    word: "geyser",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996081/vocab/58151_geyser.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=58151&language=US",
  },
  {
    id: 58577,
    word: "glacier",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996092/vocab/58577_glacier.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=58577&language=US",
  },
  {
    id: 64705,
    word: "highland",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996300/vocab/64705_highland.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=64705&language=US",
  },
  {
    id: 64753,
    word: "hill",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996302/vocab/64753_hill.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=64753&language=US",
  },
  {
    id: 71670,
    word: "island",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996443/vocab/71670_island.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=71670&language=US",
  },
  {
    id: 73586,
    word: "jungle",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996534/vocab/73586_jungle.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=73586&language=US",
  },
  {
    id: 75914,
    word: "landslide",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996591/vocab/75914_landslide.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=75914&language=US",
  },
  {
    id: 76488,
    word: "lava",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996613/vocab/76488_lava.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=76488&language=US",
  },
  {
    id: 83474,
    word: "meadow",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996775/vocab/83474_meadow.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=83474&language=US",
  },
  {
    id: 87075,
    word: "moor",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996841/vocab/87075_moor.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=87075&language=US",
  },
  {
    id: 87596,
    word: "mountain",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684996855/vocab/87596_mountain.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=87596&language=US",
  },
];
app.get("/api/listen4", (req, res) => {
  res.json(listen4);
});
const listen5 = [
  {
    id: 1,
    word: "ant",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993766/vocab/1_ant.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=1&language=US",
  },
  {
    id: 4,
    word: "bear",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993772/vocab/4_bear.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=4&language=US",
  },
  {
    id: 9,
    word: "cat",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993785/vocab/9_cat.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=9&language=US",
  },
  {
    id: 10,
    word: "cow",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993787/vocab/10_cow.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=10&language=US",
  },
  {
    id: 13,
    word: "dog",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993792/vocab/13_dog.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=13&language=US",
  },
  {
    id: 25,
    word: "lion",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993824/vocab/25_lion.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=25&language=US",
  },
  {
    id: 43,
    word: "worm",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684993868/vocab/43_worm.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=43&language=US",
  },
  {
    id: 172,
    word: "horse",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994099/vocab/172_horse.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=172&language=US",
  },
  {
    id: 173,
    word: "bunny",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994100/vocab/173_bunny.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=173&language=US",
  },
  {
    id: 175,
    word: "pig",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994102/vocab/175_pig.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=175&language=US",
  },
  {
    id: 177,
    word: "elephant",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994104/vocab/177_elephant.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=177&language=US",
  },
  {
    id: 178,
    word: "giraffe",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994106/vocab/178_giraffe.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=178&language=US",
  },
  {
    id: 179,
    word: "zebra",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994107/vocab/179_zebra.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=179&language=US",
  },
  {
    id: 181,
    word: "chicken",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994111/vocab/181_chicken.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=181&language=US",
  },
  {
    id: 218,
    word: "camel",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994120/vocab/218_camel.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=218&language=US",
  },
  {
    id: 220,
    word: "cheetah",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994122/vocab/220_cheetah.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=220&language=US",
  },
  {
    id: 225,
    word: "deer",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994126/vocab/225_deer.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=225&language=US",
  },
  {
    id: 233,
    word: "fox",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994143/vocab/233_fox.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=233&language=US",
  },
  {
    id: 238,
    word: "hamster",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994147/vocab/238_hamster.png",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=238&language=US",
  },
  {
    id: 241,
    word: "kangaroo",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994150/vocab/241_kangaroo.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=241&language=US",
  },
  {
    id: 248,
    word: "panda",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994156/vocab/248_panda.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=248&language=US",
  },
  {
    id: 252,
    word: "rat",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994163/vocab/252_rat.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=252&language=US",
  },
  {
    id: 256,
    word: "sheep",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994168/vocab/256_sheep.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=256&language=US",
  },
  {
    id: 263,
    word: "wolf",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994175/vocab/263_wolf.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=263&language=US",
  },
  {
    id: 6520,
    word: "antelope",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994467/vocab/6520_antelope.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=6520&language=US",
  },
  {
    id: 18418,
    word: "buffalo",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684994898/vocab/18418_buffalo.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=18418&language=US",
  },
  {
    id: 24402,
    word: "chihuahua",
    imageUrl:
      "https://res.cloudinary.com/techleadvn/image/upload/v1684995111/vocab/24402_chihuahua.jpg",
    soundUS:
      "https://vocab-v2.techlead.vn/api/v2/words/sounds/pronounce?id=24402&language=US",
  },
];
app.get("/api/listen5", (req, res) => {
  res.json(listen5);
});
// Lắng nghe các yêu cầu tới cổng đã chọn
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
