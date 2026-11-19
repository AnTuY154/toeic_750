// Agent 09 — Email và thông báo ngắn
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "email-basics",
  "title": "Email và thông báo ngắn",
  "level": "301–450",
  "objective": "Đọc email, memo và notice để tìm mục đích, người nhận, chi tiết và hành động.",
  "sections": [
    {
      "heading": "Cấu trúc email",
      "body": "Email thường có sender, recipient, subject, lời chào, mục đích, chi tiết và yêu cầu hành động.",
      "examples": [
        "Subject: Updated delivery schedule",
        "Please confirm receipt by Wednesday."
      ]
    },
    {
      "heading": "Xác định mục đích",
      "body": "Purpose có thể là thông báo thay đổi, yêu cầu, xác nhận, xin lỗi hoặc mời tham dự.",
      "examples": [
        "We are writing to inform you of a change.",
        "This message confirms your registration."
      ]
    },
    {
      "heading": "Đọc chi tiết",
      "body": "Tập trung tên, ngày, số tiền, địa điểm, điều kiện và đại từ tham chiếu this/it/they.",
      "examples": [
        "The revised schedule is attached. Please review it.",
        "The fee is waived for members."
      ]
    },
    {
      "heading": "Notice và memo",
      "body": "Notice truyền đạt quy định/sự kiện; memo thường dùng nội bộ. Chú ý ngày hiệu lực và ngoại lệ.",
      "examples": [
        "NOTICE: The east entrance will be closed.",
        "MEMO: Staff must complete training."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "recipient",
      "meaning": "người nhận",
      "pos": "noun",
      "example": "Add the recipient's address."
    },
    {
      "word": "regarding",
      "meaning": "liên quan đến",
      "pos": "preposition",
      "example": "I am writing regarding your application."
    },
    {
      "word": "waive",
      "meaning": "miễn",
      "pos": "verb",
      "example": "The fee will be waived."
    }
  ],
  "questions": [
    {
      "prompt": "“The session has moved to Room 302.” What is the purpose?",
      "choices": [
        "Announce a room change",
        "Request payment",
        "Reject an applicant",
        "Advertise a product"
      ],
      "answer": 0,
      "explanation": "Email thông báo thay đổi phòng."
    },
    {
      "prompt": "A policy is effective July 1. When does it take effect?",
      "choices": [
        "June 1",
        "July 1",
        "July 10",
        "Year end"
      ],
      "answer": 1,
      "explanation": "Effective July 1 là có hiệu lực từ ngày đó."
    },
    {
      "prompt": "A memo begins “All department supervisors.” Who receives it?",
      "choices": [
        "Supervisors",
        "Customers",
        "Applicants",
        "Drivers"
      ],
      "answer": 0,
      "explanation": "Lời mở đầu xác định người nhận."
    },
    {
      "prompt": "“The revised schedule is attached. Please review it.” What is “it”?",
      "choices": [
        "The schedule",
        "The fee",
        "The office",
        "The room"
      ],
      "answer": 0,
      "explanation": "It thay thế cho revised schedule."
    }
  ]
} satisfies LessonContent;
export default lesson;
