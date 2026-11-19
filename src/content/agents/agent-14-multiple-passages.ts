// Agent 14 — Part 7: double và triple passages
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "multiple-passages",
  "title": "Part 7: double và triple passages",
  "level": "601–750",
  "objective": "Kết nối thông tin giữa nhiều văn bản và suy luận dựa trên bằng chứng.",
  "sections": [
    {
      "heading": "Cấu trúc bài đọc kép/ba",
      "body": "Có thể gặp email + notice, quảng cáo + phản hồi, lịch trình + thư xác nhận. Câu hỏi yêu cầu đối chiếu nhiều nguồn.",
      "examples": [
        "Read sender, recipient, date and purpose.",
        "Identify shared names, dates and products."
      ]
    },
    {
      "heading": "Đọc theo câu hỏi",
      "body": "Xác định câu hỏi cần mục đích, chi tiết, hàm ý hay thông tin kết hợp; sau đó định vị đoạn liên quan.",
      "examples": [
        "Which product did the customer order?",
        "When does the revised schedule take effect?"
      ]
    },
    {
      "heading": "Kết nối dữ kiện",
      "body": "Ghép chi tiết tương ứng và kiểm tra thông tin mới nhất; email mới có thể thay đổi thông báo cũ.",
      "examples": [
        "Notice: delivery May 8.",
        "Updated e-mail: delivery moved to May 10."
      ]
    },
    {
      "heading": "Bẫy suy luận",
      "body": "Phân biệt điều được nêu trực tiếp và điều suy ra hợp lý. Không suy diễn quá mức; chú ý đại từ và mốc thời gian.",
      "examples": [
        "A revised quote means an updated price proposal.",
        "It does not prove the offer was accepted."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "supersede",
      "meaning": "thay thế thông tin cũ",
      "pos": "verb",
      "example": "The new notice supersedes the old one."
    },
    {
      "word": "correspondence",
      "meaning": "thư từ trao đổi",
      "pos": "noun",
      "example": "Keep all correspondence."
    },
    {
      "word": "quote",
      "meaning": "báo giá",
      "pos": "noun",
      "example": "The supplier sent a revised quote."
    }
  ],
  "questions": [
    {
      "prompt": "Notice says June 12; later e-mail moves it to June 14. When?",
      "choices": [
        "June 10",
        "June 12",
        "June 14",
        "June 24"
      ],
      "answer": 2,
      "explanation": "Email mới cập nhật ngày tổ chức sang June 14."
    },
    {
      "prompt": "Free delivery applies over $100; order is $125. What follows?",
      "choices": [
        "Qualifies for free delivery",
        "Order canceled",
        "Late fee applies",
        "Item unavailable"
      ],
      "answer": 0,
      "explanation": "125 vượt ngưỡng 100."
    },
    {
      "prompt": "A later email confirms training registration. What is indicated?",
      "choices": [
        "Employee registered",
        "Training canceled",
        "Employee is instructor",
        "Customer sent notice"
      ],
      "answer": 0,
      "explanation": "Email xác nhận cho biết đã đăng ký."
    },
    {
      "prompt": "A new email explicitly changes an earlier schedule. Which applies?",
      "choices": [
        "Earlier schedule",
        "Updated schedule",
        "Sender title",
        "Office address"
      ],
      "answer": 1,
      "explanation": "Thông tin mới thay thế lịch cũ."
    }
  ]
} satisfies LessonContent;
export default lesson;
