// Agent 11 — Part 4: announcements và presentations
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "part4-talks",
  "title": "Part 4: announcements và presentations",
  "level": "451–600",
  "objective": "Nghe độc thoại dạng thông báo, voicemail, quảng cáo, hướng dẫn và bài trình bày.",
  "sections": [
    {
      "heading": "Dạng bài Part 4",
      "body": "Part 4 gồm độc thoại ngắn như thông báo công cộng, voicemail, quảng cáo, hướng dẫn, bản tin và phát biểu.",
      "examples": [
        "Airport or station announcement.",
        "Voicemail from a colleague."
      ]
    },
    {
      "heading": "Nhận diện bối cảnh",
      "body": "Passengers/gate/boarding gợi sân bay; offer/discount gợi quảng cáo; staff/policy/deadline gợi thông báo nội bộ.",
      "examples": [
        "“Passengers on Flight 208...”",
        "“This offer is valid through Friday.”"
      ]
    },
    {
      "heading": "Bắt chi tiết",
      "body": "Tập trung thời gian, địa điểm, con số, điều kiện, thay đổi và hành động được yêu cầu.",
      "examples": [
        "The gate changed from 12 to 16.",
        "Register online before Thursday."
      ]
    },
    {
      "heading": "Mục đích và đối tượng",
      "body": "Purpose hỏi mục đích; audience hỏi người nghe; asked to do hỏi hành động cần thực hiện.",
      "examples": [
        "“Please remain seated” means stay seated.",
        "A product presentation explains a feature."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "boarding",
      "meaning": "lên máy bay",
      "pos": "noun",
      "example": "Boarding begins in ten minutes."
    },
    {
      "word": "valid",
      "meaning": "có hiệu lực",
      "pos": "adjective",
      "example": "The coupon is valid until August."
    },
    {
      "word": "attendee",
      "meaning": "người tham dự",
      "pos": "noun",
      "example": "All attendees must register."
    }
  ],
  "questions": [
    {
      "prompt": "“Passengers for Flight 208 should proceed to Gate 16.” Where?",
      "choices": [
        "Airport",
        "Bank",
        "Library",
        "Restaurant"
      ],
      "answer": 0,
      "explanation": "Passengers, flight, gate chỉ bối cảnh sân bay."
    },
    {
      "prompt": "A discount requires registration by Friday. What must customers do?",
      "choices": [
        "Register by Friday",
        "Visit Sunday",
        "Pay a fee",
        "Call the airport"
      ],
      "answer": 0,
      "explanation": "Điều kiện là đăng ký trước hạn Friday."
    },
    {
      "prompt": "A voicemail says call me back today. What should listener do?",
      "choices": [
        "Return a call",
        "Attend seminar",
        "Send invoice",
        "Change flight"
      ],
      "answer": 0,
      "explanation": "Call me back là gọi lại."
    },
    {
      "prompt": "A presentation introduces a booking feature. Purpose?",
      "choices": [
        "Explain a product feature",
        "Announce road closure",
        "Recruit staff",
        "Cancel booking"
      ],
      "answer": 0,
      "explanation": "Giới thiệu tính năng mới."
    }
  ]
} satisfies LessonContent;
export default lesson;
