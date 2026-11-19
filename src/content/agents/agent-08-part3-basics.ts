// Agent 08 — Part 3: xác định người, nơi chốn, mục đích
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "part3-basics",
  "title": "Part 3: xác định người, nơi chốn, mục đích",
  "level": "301–450",
  "objective": "Nghe hội thoại ba câu hỏi theo chiến thuật bối cảnh, mục đích và hành động tiếp theo.",
  "sections": [
    {
      "heading": "Cấu trúc Part 3",
      "body": "Part 3 gồm hội thoại hai hoặc ba người; mỗi đoạn thường có ba câu hỏi về ý chính, chi tiết, suy luận và hành động tiếp theo.",
      "examples": [
        "Identify speakers and relationship.",
        "Listen for purpose, problem and next action."
      ]
    },
    {
      "heading": "Người nói và nơi chốn",
      "body": "Tìm dấu hiệu nghề nghiệp, vai trò, địa điểm và vật dụng; không suy luận chỉ từ một từ đơn lẻ.",
      "examples": [
        "“Your room is ready” suggests a hotel.",
        "“The revised invoice is attached” suggests an office."
      ]
    },
    {
      "heading": "Mục đích và vấn đề",
      "body": "Câu hỏi Why is the person calling? thường được trả lời bằng cách diễn đạt lại mục đích hoặc sự cố.",
      "examples": [
        "“Calling to confirm delivery” means checking a delivery.",
        "“The printer keeps jamming” signals equipment trouble."
      ]
    },
    {
      "heading": "Hành động tiếp theo",
      "body": "Kết nối câu cuối và dấu hiệu tương lai will, going to, plan to. Distractor có thể đúng chi tiết nhưng sai người/thời điểm.",
      "examples": [
        "“I'll email the file” → send an email.",
        "“I haven't booked it” → make a reservation."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "delivery window",
      "meaning": "khung giờ giao hàng",
      "pos": "noun phrase",
      "example": "Confirm the delivery window."
    },
    {
      "word": "reservation",
      "meaning": "việc đặt chỗ",
      "pos": "noun",
      "example": "I made a reservation."
    },
    {
      "word": "jam",
      "meaning": "bị kẹt",
      "pos": "verb",
      "example": "The printer has jammed again."
    }
  ],
  "questions": [
    {
      "prompt": "A caller checks whether replacement parts arrived. What is the purpose?",
      "choices": [
        "Check delivery status",
        "Order lunch",
        "Apply for a job",
        "Cancel a meeting"
      ],
      "answer": 0,
      "explanation": "Người gọi muốn kiểm tra tình trạng giao phụ tùng."
    },
    {
      "prompt": "A customer says a room key will not open the door. Where are they?",
      "choices": [
        "At a hotel",
        "At a factory",
        "At a bank",
        "At a pharmacy"
      ],
      "answer": 0,
      "explanation": "Room key là dấu hiệu bối cảnh khách sạn."
    },
    {
      "prompt": "“I'll send the updated figures this afternoon.” What next?",
      "choices": [
        "Send a file",
        "Attend an interview",
        "Repair a machine",
        "Book a flight"
      ],
      "answer": 0,
      "explanation": "Người nói dự định gửi số liệu cập nhật."
    },
    {
      "prompt": "“The printer keeps jamming.” What is the problem?",
      "choices": [
        "Printer malfunction",
        "Office closed",
        "Late paper order",
        "Occupied room"
      ],
      "answer": 0,
      "explanation": "Jamming là máy in bị kẹt giấy."
    }
  ]
} satisfies LessonContent;
export default lesson;
