// Agent 02 — Động từ be, do, have
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "be-do-have",
  "title": "Động từ be, do, have",
  "level": "0–150",
  "objective": "Dùng be, do, have trong câu khẳng định, phủ định, câu hỏi và cấu trúc hoàn thành.",
  "sections": [
    {
      "heading": "Be: am/is/are/was/were",
      "body": "Be nối chủ ngữ với danh từ, tính từ, địa điểm; chia theo chủ ngữ và thời gian.",
      "examples": [
        "The room is available.",
        "The offices were renovated."
      ]
    },
    {
      "heading": "Do/does/did",
      "body": "Do/does tạo câu hỏi/phủ định hiện tại đơn; did dùng quá khứ. Sau does/did dùng động từ nguyên mẫu.",
      "examples": [
        "Does the store open at nine?",
        "Did the shipment arrive?"
      ]
    },
    {
      "heading": "Have/has/had",
      "body": "Have/has có thể diễn tả sở hữu hoặc làm trợ động từ; hiện tại hoàn thành dùng have/has + V3.",
      "examples": [
        "She has a new laptop.",
        "They have received the documents."
      ]
    },
    {
      "heading": "Lỗi thường gặp",
      "body": "Không dùng did + V2; không dùng does + động từ thêm s. Bị động cần be + V3.",
      "examples": [
        "Did you send the invoice?",
        "The forms are checked daily."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "available",
      "meaning": "có sẵn/rảnh",
      "pos": "adjective",
      "example": "The room is available."
    },
    {
      "word": "renovate",
      "meaning": "cải tạo",
      "pos": "verb",
      "example": "The office was renovated."
    },
    {
      "word": "receive",
      "meaning": "nhận",
      "pos": "verb",
      "example": "We received your application."
    }
  ],
  "questions": [
    {
      "prompt": "The conference rooms _____ available.",
      "choices": [
        "is",
        "are",
        "was",
        "be"
      ],
      "answer": 1,
      "explanation": "Rooms số nhiều dùng are."
    },
    {
      "prompt": "_____ the supplier deliver on Saturdays?",
      "choices": [
        "Do",
        "Does",
        "Is",
        "Has"
      ],
      "answer": 1,
      "explanation": "The supplier số ít: Does + nguyên mẫu."
    },
    {
      "prompt": "_____ you attend the briefing yesterday?",
      "choices": [
        "Do",
        "Does",
        "Did",
        "Have"
      ],
      "answer": 2,
      "explanation": "Yesterday dùng Did + attend."
    },
    {
      "prompt": "The main office _____ renovated last year.",
      "choices": [
        "is",
        "are",
        "was",
        "have"
      ],
      "answer": 2,
      "explanation": "Quá khứ bị động: was renovated."
    }
  ]
} satisfies LessonContent;
export default lesson;
