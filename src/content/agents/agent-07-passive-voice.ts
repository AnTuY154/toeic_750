// Agent 07 — Câu bị động trong môi trường công sở
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "passive-voice",
  "title": "Câu bị động trong môi trường công sở",
  "level": "301–450",
  "objective": "Dùng be + V3 ở các thì phổ biến trong thông báo và quy trình.",
  "sections": [
    {
      "heading": "Công thức bị động",
      "body": "Bị động dùng be + past participle; tân ngữ câu chủ động thành chủ ngữ bị động. Có thể bỏ tác nhân by nếu không quan trọng.",
      "examples": [
        "The printer was repaired by a technician.",
        "Invoices are processed every Monday."
      ]
    },
    {
      "heading": "Bị động theo thì",
      "body": "Hiện tại is/are + V3; quá khứ was/were + V3; tương lai will be + V3; hoàn thành has/have been + V3.",
      "examples": [
        "The office is cleaned daily.",
        "The results will be announced tomorrow."
      ]
    },
    {
      "heading": "Khi dùng bị động",
      "body": "Dùng khi người làm không rõ/không quan trọng hoặc muốn nhấn mạnh quy trình, kết quả.",
      "examples": [
        "All visitors must be registered.",
        "Applications have been reviewed."
      ]
    },
    {
      "heading": "Bẫy Part 5",
      "body": "Sau modal dùng be + V3; kiểm tra số ít/số nhiều và dấu hiệu thời gian.",
      "examples": [
        "The forms must be submitted by noon.",
        "The equipment was inspected last week."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "process",
      "meaning": "xử lý",
      "pos": "verb",
      "example": "Requests are processed daily."
    },
    {
      "word": "inspect",
      "meaning": "kiểm tra",
      "pos": "verb",
      "example": "Equipment is inspected regularly."
    },
    {
      "word": "announce",
      "meaning": "thông báo",
      "pos": "verb",
      "example": "The winner will be announced."
    }
  ],
  "questions": [
    {
      "prompt": "Expense reports _____ by Finance.",
      "choices": [
        "review",
        "are reviewed",
        "reviewing",
        "has reviewed"
      ],
      "answer": 1,
      "explanation": "Reports số nhiều và nhận hành động: are reviewed."
    },
    {
      "prompt": "The policy will _____ next month.",
      "choices": [
        "implement",
        "be implemented",
        "implemented",
        "be implementing"
      ],
      "answer": 1,
      "explanation": "Will be + V3."
    },
    {
      "prompt": "The elevator _____ yesterday.",
      "choices": [
        "repairs",
        "was repaired",
        "has repair",
        "is repairing"
      ],
      "answer": 1,
      "explanation": "Yesterday dùng was repaired."
    },
    {
      "prompt": "Visitors must _____ at reception.",
      "choices": [
        "register",
        "be registered",
        "registered",
        "being registered"
      ],
      "answer": 1,
      "explanation": "Sau must, bị động là be registered."
    }
  ]
} satisfies LessonContent;

lesson.questions.push(...[{"prompt":"The invoices _____ by accounting every Friday.","choices":["process","are processed","processing","has process"],"answer":1,"explanation":"Invoices được xử lý: hiện tại đơn bị động."},{"prompt":"The new policy _____ next month.","choices":["will introduce","will be introduced","introduces","introducing"],"answer":1,"explanation":"Tương lai bị động: will be + V3."},{"prompt":"All applicants _____ by email yesterday.","choices":["contacted","were contacted","are contacting","have contact"],"answer":1,"explanation":"Yesterday dùng quá khứ đơn bị động."},{"prompt":"The equipment must _____ after each use.","choices":["clean","be cleaned","cleaning","is cleaned"],"answer":1,"explanation":"Modal + be + V3."},{"prompt":"The report _____ yet.","choices":["has not been submitted","has not submitted","is not submitting","not submitted"],"answer":0,"explanation":"Hiện tại hoàn thành bị động."},{"prompt":"The damaged window _____ last weekend.","choices":["replaced","was replaced","has replacing","is replace"],"answer":1,"explanation":"Last weekend cần quá khứ đơn bị động."},{"prompt":"Reservations can _____ online.","choices":["make","be made","made","making"],"answer":1,"explanation":"Can + be + V3."},{"prompt":"The contract _____ by both parties before launch.","choices":["signed","will sign","will be signed","signing"],"answer":2,"explanation":"Tương lai bị động: will be signed."}]);
export default lesson;
