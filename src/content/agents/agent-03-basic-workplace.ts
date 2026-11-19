// Agent 03 — Từ vựng nơi làm việc cơ bản
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "basic-workplace",
  "title": "Từ vựng nơi làm việc cơ bản",
  "level": "0–150",
  "objective": "Hiểu từ vựng về nhân sự, phòng ban, văn phòng và tài liệu.",
  "sections": [
    {
      "heading": "Người và chức vụ",
      "body": "Nhận diện employee, supervisor, colleague, applicant, receptionist để hiểu vai trò trong hội thoại.",
      "examples": [
        "The supervisor approved the request.",
        "A colleague left a message."
      ]
    },
    {
      "heading": "Phòng ban và địa điểm",
      "body": "Tên phòng ban thường gặp: accounting, human resources, sales, marketing; địa điểm: warehouse, reception, headquarters.",
      "examples": [
        "The accounting department is upstairs.",
        "The warehouse is behind the office."
      ]
    },
    {
      "heading": "Vật dụng và tài liệu",
      "body": "Phân biệt document, file, invoice, copier, printer, cabinet trong mô tả văn phòng.",
      "examples": [
        "The invoice is attached.",
        "The printer is beside the copier."
      ]
    },
    {
      "heading": "Cụm từ theo ngữ cảnh",
      "body": "Học theo cụm: attend a meeting, submit a report, contact a supervisor, schedule an interview.",
      "examples": [
        "Please submit the report.",
        "Contact reception for assistance."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "supervisor",
      "meaning": "người giám sát",
      "pos": "noun",
      "example": "Ask your supervisor for approval."
    },
    {
      "word": "colleague",
      "meaning": "đồng nghiệp",
      "pos": "noun",
      "example": "A colleague will cover my shift."
    },
    {
      "word": "headquarters",
      "meaning": "trụ sở chính",
      "pos": "noun",
      "example": "The headquarters is downtown."
    }
  ],
  "questions": [
    {
      "prompt": "Ask your _____ before changing the schedule.",
      "choices": [
        "supervise",
        "supervisor",
        "supervision",
        "supervised"
      ],
      "answer": 1,
      "explanation": "Cần danh từ chỉ người giám sát."
    },
    {
      "prompt": "The _____ greeted visitors at reception.",
      "choices": [
        "receptionist",
        "reception",
        "receive",
        "receptive"
      ],
      "answer": 0,
      "explanation": "Người chào đón khách là receptionist."
    },
    {
      "prompt": "Please send the invoice to the _____ department.",
      "choices": [
        "accounting",
        "accountant",
        "accounted",
        "accountably"
      ],
      "answer": 0,
      "explanation": "Accounting department là phòng kế toán."
    },
    {
      "prompt": "A _____ left a message for you.",
      "choices": [
        "colleague",
        "collegial",
        "collegially",
        "collegiate"
      ],
      "answer": 0,
      "explanation": "Colleague là đồng nghiệp, danh từ chỉ người."
    }
  ]
} satisfies LessonContent;
export default lesson;
