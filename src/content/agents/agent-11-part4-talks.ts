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

lesson.questions.push(...[{"prompt":"A recording begins, “Attention, passengers...” Who is the likely audience?","choices":["Travellers","Job applicants","Restaurant staff","Bank managers"],"answer":0,"explanation":"Passengers là hành khách."},{"prompt":"“The west entrance will remain closed until noon.” What should visitors do?","choices":["Use another entrance before noon","Leave permanently","Wait until tomorrow","Contact the airline"],"answer":0,"explanation":"Lối tây đóng đến trưa; cần dùng lối khác."},{"prompt":"A voicemail asks the listener to return a call before 5 p.m. What is requested?","choices":["Call back before the deadline","Send a package","Attend a lecture","Change a reservation"],"answer":0,"explanation":"Return a call là gọi lại."},{"prompt":"A speaker introduces the benefits of new software. What is the purpose?","choices":["Explain or promote the software","Announce a train delay","Report a fire","Recruit volunteers"],"answer":0,"explanation":"Đây là bài giới thiệu sản phẩm."},{"prompt":"The workshop moves from Room 10 to Room 15. Where is it now?","choices":["Room 10","Room 15","The lobby","The cafeteria"],"answer":1,"explanation":"Moved to Room 15 là địa điểm mới."},{"prompt":"A store says all winter coats are 30 percent off. What is advertised?","choices":["A discount","A new location","A staff meeting","A delivery delay"],"answer":0,"explanation":"30 percent off là giảm giá."},{"prompt":"“Please have your tickets ready before boarding.” What should passengers prepare?","choices":["Their tickets","A hotel invoice","A job application","A meeting agenda"],"answer":0,"explanation":"Have tickets ready là chuẩn bị vé."},{"prompt":"A presentation compares last year's sales with this year's figures. What is its topic?","choices":["Sales performance","Building maintenance","Staff holidays","Office security"],"answer":0,"explanation":"Đây là báo cáo hiệu quả bán hàng."}]);
export default lesson;
