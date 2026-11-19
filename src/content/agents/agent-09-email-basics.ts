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

lesson.questions.push(...[{"prompt":"Which is the most appropriate email subject?","choices":["Updated delivery schedule","Hello there","Please read this","Important thing"],"answer":0,"explanation":"Subject nên ngắn gọn và mô tả nội dung."},{"prompt":"“Please find the revised invoice attached.” What is attached?","choices":["An updated bill","A job application","A meeting agenda","A travel brochure"],"answer":0,"explanation":"Invoice là hóa đơn; revised là cập nhật."},{"prompt":"Which phrase is suitable for a formal request?","choices":["Could you please confirm receipt?","Hey, check this out!","What's up?","Do it now."],"answer":0,"explanation":"Could you please là cách yêu cầu lịch sự."},{"prompt":"“The event has been postponed.” What happened?","choices":["The event was delayed","The event was expanded","The event was advertised","The event was completed"],"answer":0,"explanation":"Postponed nghĩa là hoãn."},{"prompt":"What is the purpose of “Please respond by 4 p.m. on Tuesday”?","choices":["To set a response deadline","To give a meeting location","To introduce a colleague","To confirm a payment"],"answer":0,"explanation":"By 4 p.m. đặt hạn trả lời."},{"prompt":"Which closing suits a formal business email?","choices":["Kind regards,","See ya,","Cheers mate,","Later!"],"answer":0,"explanation":"Kind regards là lời kết lịch sự."},{"prompt":"An email is addressed to “All department heads.” Who should read it?","choices":["Department managers","New customers","Delivery drivers","Job applicants"],"answer":0,"explanation":"Department heads là trưởng phòng ban."},{"prompt":"“Return the form with your signature.” What is required?","choices":["Send back the signed form","Print a new invoice","Attend a seminar","Call the sender"],"answer":0,"explanation":"Cần gửi lại biểu mẫu đã ký."}]);
export default lesson;
