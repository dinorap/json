const express = require("express");
const app = express();
const port = 3000;

// Định nghĩa một route trả về dữ liệu JSON
app.get("/api/data", (req, res) => {
  const jsonData = [
    {
      id: 18,
      name: " Grammar",
      category_id: 3,
    },
    ,
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
  ];
  res.json(jsonData);
});

// Lắng nghe các yêu cầu tới cổng đã chọn
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
