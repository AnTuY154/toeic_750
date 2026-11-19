// Agent 15 — Chiến thuật làm bài 120 phút
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "timed-mock",
  "title": "Chiến thuật làm bài 120 phút",
  "level": "601–750",
  "objective": "Phân bổ thời gian Listening/Reading và phân tích lỗi sau thi thử.",
  "sections": [
    {
      "heading": "Cấu trúc bài thi",
      "body": "TOEIC Listening & Reading chuẩn có 200 câu: Listening 100 câu khoảng 45 phút; Reading 100 câu 75 phút. Tổng thời gian làm bài khoảng 120 phút.",
      "examples": [
        "Listening: Parts 1–4, 100 questions.",
        "Reading: Parts 5–7, 100 questions."
      ]
    },
    {
      "heading": "Quản lý Reading",
      "body": "Mốc tham khảo: Part 5 khoảng 10–12 phút, Part 6 khoảng 8–10 phút, phần lớn thời gian dành cho Part 7. Không mắc kẹt ở một câu.",
      "examples": [
        "Loại đáp án sai và đánh dấu câu khó.",
        "Giữ vài phút cuối kiểm tra câu bỏ trống."
      ]
    },
    {
      "heading": "Chiến thuật Listening",
      "body": "Đọc trước câu hỏi khi có thời gian; dự đoán loại thông tin cần nghe. Không dịch từng từ và không để lỡ câu tiếp theo vì tiếc câu trước.",
      "examples": [
        "Part 1: người, hành động, vị trí.",
        "Parts 3–4: tên, số, thời gian và thay đổi."
      ]
    },
    {
      "heading": "Phân tích sau thi thử",
      "body": "Theo dõi accuracy theo Part và phân loại lỗi: từ vựng, paraphrase, ngữ pháp, mất tập trung hoặc quản lý thời gian.",
      "examples": [
        "Chọn ba nhóm lỗi lặp lại nhiều nhất.",
        "Làm lại câu sai sau 24–48 giờ."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "allocate",
      "meaning": "phân bổ",
      "pos": "verb",
      "example": "Allocate enough time to Reading."
    },
    {
      "word": "pace",
      "meaning": "nhịp độ",
      "pos": "noun",
      "example": "Maintain a steady pace."
    },
    {
      "word": "eliminate",
      "meaning": "loại bỏ",
      "pos": "verb",
      "example": "Eliminate contradictory options."
    }
  ],
  "questions": [
    {
      "prompt": "How many questions are in standard TOEIC L&R?",
      "choices": [
        "100",
        "150",
        "200",
        "250"
      ],
      "answer": 2,
      "explanation": "Có 100 Listening + 100 Reading = 200."
    },
    {
      "prompt": "How long is the Reading section?",
      "choices": [
        "30",
        "45",
        "60",
        "75 minutes"
      ],
      "answer": 3,
      "explanation": "Reading kéo dài 75 phút."
    },
    {
      "prompt": "What should you do if a Part 5 question takes too long?",
      "choices": [
        "Spend several more minutes",
        "Mark and move on",
        "Skip the section",
        "Stop the test"
      ],
      "answer": 1,
      "explanation": "Loại đáp án sai, đánh dấu và tiếp tục để bảo toàn thời gian."
    },
    {
      "prompt": "What is the official TOEIC L&R score range?",
      "choices": [
        "0–750",
        "10–990",
        "100–900",
        "200–1000"
      ],
      "answer": 1,
      "explanation": "Thang điểm chính thức 10–990; 0–750 chỉ là lộ trình học của website."
    }
  ]
} satisfies LessonContent;
export default lesson;
