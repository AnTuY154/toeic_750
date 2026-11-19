// Agent 10 — Liên từ và quan hệ logic
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "conjunctions",
  "title": "Liên từ và quan hệ logic",
  "level": "451–600",
  "objective": "Phân biệt liên từ nguyên nhân, tương phản, điều kiện, thời gian và kết quả.",
  "sections": [
    {
      "heading": "Nguyên nhân và kết quả",
      "body": "Because/since/as nối mệnh đề; because of/due to đi với danh từ; therefore/consequently diễn tả kết quả.",
      "examples": [
        "Canceled because it rained.",
        "Canceled because of heavy rain."
      ]
    },
    {
      "heading": "Tương phản",
      "body": "Although/even though nối mệnh đề; despite/in spite of đi với danh từ/V-ing; however nối ý tương phản.",
      "examples": [
        "Although the budget was limited, work continued.",
        "Despite the delay, the shipment arrived."
      ]
    },
    {
      "heading": "Điều kiện và thời gian",
      "body": "If/unless diễn tả điều kiện; when/before/after nối mệnh đề thời gian. Mệnh đề thời gian tương lai thường dùng hiện tại đơn.",
      "examples": [
        "If you need help, call reception.",
        "Call me when the report arrives."
      ]
    },
    {
      "heading": "Liên từ kép",
      "body": "Both…and, either…or, neither…nor, not only…but also nối các thành phần tương đương.",
      "examples": [
        "Both teams attended.",
        "Either Monday or Tuesday is suitable."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "therefore",
      "meaning": "do đó",
      "pos": "adverb",
      "example": "Therefore, deliveries were delayed."
    },
    {
      "word": "despite",
      "meaning": "mặc dù",
      "pos": "preposition",
      "example": "Despite the rain, work continued."
    },
    {
      "word": "unless",
      "meaning": "trừ khi",
      "pos": "conjunction",
      "example": "The order will not ship unless paid."
    }
  ],
  "questions": [
    {
      "prompt": "The shipment was delayed _____ severe weather.",
      "choices": [
        "because",
        "because of",
        "although",
        "therefore"
      ],
      "answer": 1,
      "explanation": "Sau chỗ trống là cụm danh từ, dùng because of."
    },
    {
      "prompt": "_____ the meeting ran late, all items were covered.",
      "choices": [
        "Despite",
        "Although",
        "Because of",
        "Therefore"
      ],
      "answer": 1,
      "explanation": "Although nối mệnh đề."
    },
    {
      "prompt": "Submit the form today; _____, your application may be delayed.",
      "choices": [
        "however",
        "otherwise",
        "although",
        "despite"
      ],
      "answer": 1,
      "explanation": "Otherwise diễn tả hệ quả nếu không làm."
    },
    {
      "prompt": "The office remains closed _____ repairs are complete.",
      "choices": [
        "until",
        "despite",
        "because of",
        "whereas"
      ],
      "answer": 0,
      "explanation": "Until nối mệnh đề thời gian."
    }
  ]
} satisfies LessonContent;
export default lesson;
