// Agent 05 — Wh- questions và Question–Response
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "wh-questions",
  "title": "Wh- questions và Question–Response",
  "level": "151–300",
  "objective": "Nhận diện câu hỏi What, Where, When, Who, Why, How và phản hồi phù hợp.",
  "sections": [
    {
      "heading": "Từ để hỏi",
      "body": "What hỏi sự vật/thông tin; where nơi chốn; when thời gian; who người; why lý do; how cách thức/tình trạng.",
      "examples": [
        "Where is the loading area?",
        "When will the package arrive?"
      ]
    },
    {
      "heading": "Cấu trúc câu hỏi",
      "body": "Thường dùng từ hỏi + trợ động từ/be + chủ ngữ + động từ. Who làm chủ ngữ có thể đứng trực tiếp trước động từ.",
      "examples": [
        "What time does the train leave?",
        "Who approved the request?"
      ]
    },
    {
      "heading": "Phản hồi gián tiếp",
      "body": "Đáp án đúng có thể diễn đạt lại chứ không lặp từ hỏi. Why có thể trả lời bằng nguyên nhân; when bằng mốc lịch.",
      "examples": [
        "Why is the printer unavailable? — It is being repaired.",
        "When is the interview? — Early next week."
      ]
    },
    {
      "heading": "Bẫy Part 2",
      "body": "Loại đáp án sai loại thông tin, sai người hoặc sai thời gian; không chọn chỉ vì nghe thấy từ giống câu hỏi.",
      "examples": [
        "Where? — In Room 204.",
        "When? — At 2 p.m."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "reschedule",
      "meaning": "đổi lịch",
      "pos": "verb",
      "example": "Could we reschedule the interview?"
    },
    {
      "word": "location",
      "meaning": "địa điểm",
      "pos": "noun",
      "example": "The location is on the map."
    },
    {
      "word": "repair",
      "meaning": "sửa chữa",
      "pos": "verb",
      "example": "The technician will repair it."
    }
  ],
  "questions": [
    {
      "prompt": "When will the software be installed?",
      "choices": [
        "In the IT department.",
        "Early next week.",
        "By the technician.",
        "Because it is old."
      ],
      "answer": 1,
      "explanation": "When hỏi thời gian."
    },
    {
      "prompt": "Why is the delivery delayed?",
      "choices": [
        "At the loading dock.",
        "At noon.",
        "Because of heavy traffic.",
        "Three packages."
      ],
      "answer": 2,
      "explanation": "Why hỏi lý do."
    },
    {
      "prompt": "Who is leading orientation?",
      "choices": [
        "In the main hall.",
        "The HR manager is.",
        "At nine.",
        "For new staff."
      ],
      "answer": 1,
      "explanation": "Who hỏi người."
    },
    {
      "prompt": "Where are the expense forms?",
      "choices": [
        "On the intranet.",
        "By Friday.",
        "The finance director.",
        "To reduce costs."
      ],
      "answer": 0,
      "explanation": "Where hỏi địa điểm."
    }
  ]
} satisfies LessonContent;
export default lesson;
