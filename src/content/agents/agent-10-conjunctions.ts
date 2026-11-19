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

lesson.questions.push(...[{"prompt":"The shipment was delayed _____ severe weather.","choices":["because","because of","although","unless"],"answer":1,"explanation":"Because of + cụm danh từ."},{"prompt":"_____ the price was high, the client approved the purchase.","choices":["Although","Because of","Despite of","Due"],"answer":0,"explanation":"Although nối hai mệnh đề tương phản."},{"prompt":"Please call the supplier _____ the items arrive.","choices":["as soon as","despite","because of","whereas"],"answer":0,"explanation":"As soon as nghĩa là ngay khi."},{"prompt":"The meeting was cancelled _____ the director was ill.","choices":["because","because of","despite","during"],"answer":0,"explanation":"Because + mệnh đề."},{"prompt":"We will proceed _____ you reserve the room in advance.","choices":["provided that","although","because of","whereas"],"answer":0,"explanation":"Provided that đưa ra điều kiện."},{"prompt":"The new system is faster, _____ it is easier to use.","choices":["and","unless","although","since"],"answer":0,"explanation":"And nối hai ý bổ sung."},{"prompt":"We will launch the product _____ the final test is successful.","choices":["if","despite","whereas","because of"],"answer":0,"explanation":"If đưa ra điều kiện."},{"prompt":"The north branch is small, _____ the central office is larger.","choices":["whereas","because","unless","therefore"],"answer":0,"explanation":"Whereas diễn tả đối lập."}]);
export default lesson;
