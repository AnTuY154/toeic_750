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

// Expanded practice bank: eight additional questions aligned with this lesson.
lesson.questions.push(...[{"prompt":"_____ does the new employee start work?","choices":["Where","When","Who","Why"],"answer":1,"explanation":"Hỏi thời điểm bắt đầu làm việc: When."},{"prompt":"_____ is responsible for booking the meeting room?","choices":["Who","When","How often","Where"],"answer":0,"explanation":"Hỏi người chịu trách nhiệm: Who."},{"prompt":"Where will the training session be held?","choices":["Next Tuesday","In Room 204","For two hours","By email"],"answer":1,"explanation":"Where hỏi địa điểm."},{"prompt":"How often are safety inspections conducted?","choices":["Every quarter","At the factory","By the supervisor","Three inspectors"],"answer":0,"explanation":"How often hỏi tần suất."},{"prompt":"Why was the delivery postponed?","choices":["At the loading dock","Because of bad weather","On Thursday","For the customer"],"answer":1,"explanation":"Why hỏi nguyên nhân."},{"prompt":"How can I access the online portal?","choices":["With your employee ID","At 3 p.m.","The accounting team","For two weeks"],"answer":0,"explanation":"How hỏi cách thức; with your employee ID trả lời cách truy cập."},{"prompt":"When is the report due?","choices":["In the finance office","By 5 p.m. tomorrow","The sales manager","Because it is urgent"],"answer":1,"explanation":"When hỏi thời hạn."},{"prompt":"Which department handles customer complaints?","choices":["The service department","At the front desk","Every morning","Since April"],"answer":0,"explanation":"Which department hỏi bộ phận nào."}]);

lesson.questions.push(...[{"prompt":"_____ does the new employee start work?","choices":["Where","When","Who","Why"],"answer":1,"explanation":"When hỏi thời điểm."},{"prompt":"_____ is responsible for booking the room?","choices":["Who","When","How often","Where"],"answer":0,"explanation":"Who hỏi người."},{"prompt":"Where will the training session be held?","choices":["Next Tuesday","In Room 204","For two hours","By email"],"answer":1,"explanation":"Where hỏi địa điểm."},{"prompt":"How often are safety inspections conducted?","choices":["Every quarter","At the factory","By the supervisor","Three inspectors"],"answer":0,"explanation":"How often hỏi tần suất."},{"prompt":"Why was the delivery postponed?","choices":["At the loading dock","Because of bad weather","On Thursday","For the customer"],"answer":1,"explanation":"Why hỏi nguyên nhân."},{"prompt":"How can I access the online portal?","choices":["With your employee ID","At 3 p.m.","The accounting team","For two weeks"],"answer":0,"explanation":"How hỏi cách thức."},{"prompt":"When is the report due?","choices":["In the finance office","By 5 p.m. tomorrow","The sales manager","Because it is urgent"],"answer":1,"explanation":"When hỏi thời hạn."},{"prompt":"Which department handles customer complaints?","choices":["The service department","At the front desk","Every morning","Since April"],"answer":0,"explanation":"Which department hỏi bộ phận nào."}]);
export default lesson;
