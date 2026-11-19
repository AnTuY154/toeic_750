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

// Expanded practice bank: eight additional questions aligned with this lesson.
lesson.questions.push(...[{"prompt":"Employees should wear their identification _____ at all times.","choices":["badges","budgets","brochures","bills"],"answer":0,"explanation":"Identification badge là thẻ nhận diện nhân viên."},{"prompt":"Please submit your leave _____ to the HR department.","choices":["application","appliance","appointment","announcement"],"answer":0,"explanation":"Leave application là đơn xin nghỉ phép."},{"prompt":"The weekly team _____ begins at 9 a.m.","choices":["meeting","shipment","receipt","repair"],"answer":0,"explanation":"Team meeting là cuộc họp nhóm."},{"prompt":"Visitors must sign in at the front _____.","choices":["reception","warehouse","laboratory","cafeteria"],"answer":0,"explanation":"Front reception là quầy lễ tân."},{"prompt":"The company is looking for a qualified job _____.","choices":["candidate","customer","passenger","tenant"],"answer":0,"explanation":"Job candidate là ứng viên."},{"prompt":"Please keep the office _____ clear for safety.","choices":["entrance","invoice","contract","schedule"],"answer":0,"explanation":"Office entrance là lối vào văn phòng."},{"prompt":"The finance department prepares monthly _____.","choices":["reports","reservations","passports","shelves"],"answer":0,"explanation":"Finance department thường chuẩn bị reports."},{"prompt":"New staff attend an orientation _____ on their first day.","choices":["session","shipment","receipt","deadline"],"answer":0,"explanation":"Orientation session là buổi định hướng."}]);

lesson.questions.push(...[{"prompt":"Employees should wear their identification _____.","choices":["badges","budgets","brochures","bills"],"answer":0,"explanation":"Identification badge là thẻ nhân viên."},{"prompt":"Please submit your leave _____ to HR.","choices":["application","appliance","appointment","announcement"],"answer":0,"explanation":"Leave application là đơn xin nghỉ."},{"prompt":"The weekly team _____ begins at 9 a.m.","choices":["meeting","shipment","receipt","repair"],"answer":0,"explanation":"Team meeting là cuộc họp nhóm."},{"prompt":"Visitors must sign in at the front _____.","choices":["reception","warehouse","laboratory","cafeteria"],"answer":0,"explanation":"Front reception là quầy lễ tân."},{"prompt":"The company is looking for a qualified job _____.","choices":["candidate","customer","passenger","tenant"],"answer":0,"explanation":"Job candidate là ứng viên."},{"prompt":"Please keep the office _____ clear for safety.","choices":["entrance","invoice","contract","schedule"],"answer":0,"explanation":"Office entrance là lối vào."},{"prompt":"The finance department prepares monthly _____.","choices":["reports","reservations","passports","shelves"],"answer":0,"explanation":"Finance department thường lập reports."},{"prompt":"New staff attend an orientation _____ on their first day.","choices":["session","shipment","receipt","deadline"],"answer":0,"explanation":"Orientation session là buổi định hướng."}]);
export default lesson;
