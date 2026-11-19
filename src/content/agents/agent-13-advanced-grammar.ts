// Agent 13 — Cấu trúc nâng cao và bẫy ngữ pháp
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "advanced-grammar",
  "title": "Cấu trúc nâng cao và bẫy ngữ pháp",
  "level": "601–750",
  "objective": "Xử lý hòa hợp chủ-vị, song song, so sánh, lượng từ và dạng động từ.",
  "sections": [
    {
      "heading": "Hòa hợp chủ-vị",
      "body": "Động từ hòa hợp với chủ ngữ chính, không bị đánh lừa bởi cụm giới từ chen giữa. Each/every/either/neither thường đi số ít.",
      "examples": [
        "The list of vendors is updated.",
        "Each employee receives a badge."
      ]
    },
    {
      "heading": "Cấu trúc song song",
      "body": "Các thành phần nối bằng and/or/but hoặc cặp liên từ cần cùng dạng ngữ pháp.",
      "examples": [
        "planning, organizing, and reporting",
        "both practical and affordable"
      ]
    },
    {
      "heading": "So sánh và lượng từ",
      "body": "Fewer đi với danh từ đếm được; less với không đếm được; phân biệt many/much, most/almost, so/such.",
      "examples": [
        "Fewer applicants attended.",
        "The project requires less funding."
      ]
    },
    {
      "heading": "Dạng động từ",
      "body": "Sau giới từ dùng danh từ/V-ing; sau modal dùng nguyên mẫu; một số động từ đi với to-V hoặc V-ing.",
      "examples": [
        "interested in expanding",
        "decided to postpone"
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "eligible",
      "meaning": "đủ điều kiện",
      "pos": "adjective",
      "example": "Eligible employees may apply."
    },
    {
      "word": "consecutive",
      "meaning": "liên tiếp",
      "pos": "adjective",
      "example": "Three consecutive days."
    },
    {
      "word": "allocate",
      "meaning": "phân bổ",
      "pos": "verb",
      "example": "Funds were allocated to the project."
    }
  ],
  "questions": [
    {
      "prompt": "The list of suppliers _____ updated quarterly.",
      "choices": [
        "are",
        "is",
        "have",
        "were"
      ],
      "answer": 1,
      "explanation": "Chủ ngữ chính list số ít."
    },
    {
      "prompt": "The role requires _____ reports and presenting findings.",
      "choices": [
        "prepare",
        "prepared",
        "preparing",
        "preparation"
      ],
      "answer": 2,
      "explanation": "Song song với presenting cần preparing."
    },
    {
      "prompt": "The process uses _____ paper than before.",
      "choices": [
        "fewer",
        "less",
        "many",
        "few"
      ],
      "answer": 1,
      "explanation": "Paper không đếm được, dùng less."
    },
    {
      "prompt": "The committee decided _____ the launch.",
      "choices": [
        "postpone",
        "postponing",
        "to postpone",
        "postponed"
      ],
      "answer": 2,
      "explanation": "Decide + to-infinitive."
    }
  ]
} satisfies LessonContent;
export default lesson;
