// Agent 02 — Động từ be, do, have
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "be-do-have",
  "title": "Động từ be, do, have",
  "level": "0–150",
  "objective": "Dùng be, do, have trong câu khẳng định, phủ định, câu hỏi và cấu trúc hoàn thành.",
  "sections": [
    {
      "heading": "Be: am/is/are/was/were",
      "body": "Be nối chủ ngữ với danh từ, tính từ, địa điểm; chia theo chủ ngữ và thời gian.",
      "examples": [
        "The room is available.",
        "The offices were renovated."
      ]
    },
    {
      "heading": "Do/does/did",
      "body": "Do/does tạo câu hỏi/phủ định hiện tại đơn; did dùng quá khứ. Sau does/did dùng động từ nguyên mẫu.",
      "examples": [
        "Does the store open at nine?",
        "Did the shipment arrive?"
      ]
    },
    {
      "heading": "Have/has/had",
      "body": "Have/has có thể diễn tả sở hữu hoặc làm trợ động từ; hiện tại hoàn thành dùng have/has + V3.",
      "examples": [
        "She has a new laptop.",
        "They have received the documents."
      ]
    },
    {
      "heading": "Lỗi thường gặp",
      "body": "Không dùng did + V2; không dùng does + động từ thêm s. Bị động cần be + V3.",
      "examples": [
        "Did you send the invoice?",
        "The forms are checked daily."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "available",
      "meaning": "có sẵn/rảnh",
      "pos": "adjective",
      "example": "The room is available."
    },
    {
      "word": "renovate",
      "meaning": "cải tạo",
      "pos": "verb",
      "example": "The office was renovated."
    },
    {
      "word": "receive",
      "meaning": "nhận",
      "pos": "verb",
      "example": "We received your application."
    }
  ],
  "questions": [
    {
      "prompt": "The conference rooms _____ available.",
      "choices": [
        "is",
        "are",
        "was",
        "be"
      ],
      "answer": 1,
      "explanation": "Rooms số nhiều dùng are."
    },
    {
      "prompt": "_____ the supplier deliver on Saturdays?",
      "choices": [
        "Do",
        "Does",
        "Is",
        "Has"
      ],
      "answer": 1,
      "explanation": "The supplier số ít: Does + nguyên mẫu."
    },
    {
      "prompt": "_____ you attend the briefing yesterday?",
      "choices": [
        "Do",
        "Does",
        "Did",
        "Have"
      ],
      "answer": 2,
      "explanation": "Yesterday dùng Did + attend."
    },
    {
      "prompt": "The main office _____ renovated last year.",
      "choices": [
        "is",
        "are",
        "was",
        "have"
      ],
      "answer": 2,
      "explanation": "Quá khứ bị động: was renovated."
    }
  ]
} satisfies LessonContent;

// Expanded practice bank: eight additional questions aligned with this lesson.
lesson.questions.push(...[{"prompt":"The conference room _____ available this afternoon.","choices":["are","is","be","being"],"answer":1,"explanation":"Chủ ngữ conference room số ít; dùng is."},{"prompt":"_____ the employees receive a monthly newsletter?","choices":["Does","Do","Is","Has"],"answer":1,"explanation":"Employees số nhiều; câu hỏi hiện tại đơn dùng Do."},{"prompt":"The manager _____ not approve the request yesterday.","choices":["does","do","did","is"],"answer":2,"explanation":"Yesterday cần quá khứ đơn; phủ định dùng did not + V nguyên mẫu."},{"prompt":"Our branch _____ three meeting rooms.","choices":["have","has","having","is"],"answer":1,"explanation":"Branch số ít nên dùng has."},{"prompt":"The documents _____ on the front desk.","choices":["is","are","does","has"],"answer":1,"explanation":"Documents số nhiều nên dùng are."},{"prompt":"_____ Mr. Patel responsible for the project?","choices":["Do","Does","Is","Has"],"answer":2,"explanation":"Câu hỏi với tính từ responsible dùng động từ be: Is."},{"prompt":"The office _____ closed on public holidays.","choices":["do","does","is","have"],"answer":2,"explanation":"Cấu trúc be + adjective/past participle: is closed."},{"prompt":"They _____ completed the safety training.","choices":["has","have","are","does"],"answer":1,"explanation":"They đi với have trong hiện tại hoàn thành."}]);

lesson.questions.push(...[{"prompt":"The conference room _____ available this afternoon.","choices":["are","is","be","being"],"answer":1,"explanation":"Conference room số ít dùng is."},{"prompt":"_____ the employees receive a monthly newsletter?","choices":["Does","Do","Is","Has"],"answer":1,"explanation":"Employees số nhiều dùng Do."},{"prompt":"The manager _____ not approve the request yesterday.","choices":["does","do","did","is"],"answer":2,"explanation":"Yesterday: did not + động từ nguyên mẫu."},{"prompt":"Our branch _____ three meeting rooms.","choices":["have","has","having","is"],"answer":1,"explanation":"Branch số ít dùng has."},{"prompt":"The documents _____ on the front desk.","choices":["is","are","does","has"],"answer":1,"explanation":"Documents số nhiều dùng are."},{"prompt":"_____ Mr. Patel responsible for the project?","choices":["Do","Does","Is","Has"],"answer":2,"explanation":"Responsible là tính từ; câu hỏi dùng Is."},{"prompt":"The office _____ closed on public holidays.","choices":["do","does","is","have"],"answer":2,"explanation":"Cấu trúc is closed."},{"prompt":"They _____ completed the safety training.","choices":["has","have","are","does"],"answer":1,"explanation":"They đi với have trong hiện tại hoàn thành."}]);
export default lesson;
