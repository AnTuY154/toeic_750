// Agent 12 — Collocations trong công việc
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "business-collocations",
  "title": "Collocations trong công việc",
  "level": "451–600",
  "objective": "Học kết hợp từ tự nhiên trong họp, tài chính, nhân sự và logistics.",
  "sections": [
    {
      "heading": "Meetings và giao tiếp",
      "body": "Học cụm động từ + danh từ thay vì từ đơn: attend a meeting, take minutes, make a presentation, reach an agreement.",
      "examples": [
        "The team attended a meeting.",
        "The assistant took minutes."
      ]
    },
    {
      "heading": "Finance và administration",
      "body": "Nhận diện submit an expense report, meet the budget, issue an invoice, reduce operating costs.",
      "examples": [
        "The supplier issued an invoice.",
        "The project stayed within budget."
      ]
    },
    {
      "heading": "HR và recruitment",
      "body": "Các cụm phổ biến conduct an interview, meet requirements, offer a position, provide training.",
      "examples": [
        "HR will conduct an interview.",
        "New staff receive training."
      ]
    },
    {
      "heading": "Operations và logistics",
      "body": "Các cụm place an order, track a shipment, meet a deadline, resolve a complaint.",
      "examples": [
        "The store placed an order.",
        "We must meet the deadline."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "conduct an interview",
      "meaning": "tiến hành phỏng vấn",
      "pos": "collocation",
      "example": "HR will conduct an interview."
    },
    {
      "word": "issue an invoice",
      "meaning": "phát hành hóa đơn",
      "pos": "collocation",
      "example": "The supplier issued an invoice."
    },
    {
      "word": "meet a deadline",
      "meaning": "đáp ứng hạn chót",
      "pos": "collocation",
      "example": "We must meet the deadline."
    }
  ],
  "questions": [
    {
      "prompt": "HR will _____ with the final candidate.",
      "choices": [
        "conduct an interview",
        "issue an invoice",
        "track shipment",
        "meet budget"
      ],
      "answer": 0,
      "explanation": "Conduct an interview là cụm đúng."
    },
    {
      "prompt": "Please _____ before goods are shipped.",
      "choices": [
        "place an order",
        "take minutes",
        "offer a position",
        "reduce costs"
      ],
      "answer": 0,
      "explanation": "Place an order nghĩa là đặt hàng."
    },
    {
      "prompt": "The team managed to _____ despite delays.",
      "choices": [
        "meet the deadline",
        "make a reservation",
        "take attendance",
        "conduct research"
      ],
      "answer": 0,
      "explanation": "Meet the deadline nghĩa là hoàn thành đúng hạn."
    },
    {
      "prompt": "The assistant was asked to _____ during the meeting.",
      "choices": [
        "take minutes",
        "place an order",
        "track a shipment",
        "offer a discount"
      ],
      "answer": 0,
      "explanation": "Take minutes là ghi biên bản."
    }
  ]
} satisfies LessonContent;

lesson.questions.push(...[{"prompt":"The company plans to _____ a new marketing campaign.","choices":["launch","do","put","take"],"answer":0,"explanation":"Launch a campaign là collocation đúng."},{"prompt":"Please _____ the meeting agenda before noon.","choices":["circulate","attend","reach","issue"],"answer":0,"explanation":"Circulate an agenda là gửi chương trình họp."},{"prompt":"The supplier agreed to _____ the delivery date.","choices":["confirm","make","take","conduct"],"answer":0,"explanation":"Confirm the delivery date."},{"prompt":"The firm hopes to _____ operating costs this year.","choices":["reduce","take","attend","issue"],"answer":0,"explanation":"Reduce costs là giảm chi phí."},{"prompt":"All new employees must _____ safety training.","choices":["complete","issue","reach","place"],"answer":0,"explanation":"Complete training là hoàn thành đào tạo."},{"prompt":"The sales team managed to _____ its quarterly target.","choices":["meet","make","do","take"],"answer":0,"explanation":"Meet a target là đạt chỉ tiêu."},{"prompt":"Could you _____ a reservation for two people?","choices":["make","conduct","issue","take"],"answer":0,"explanation":"Make a reservation là đặt chỗ."},{"prompt":"The customer asked us to _____ a complaint.","choices":["resolve","attend","launch","allocate"],"answer":0,"explanation":"Resolve a complaint là giải quyết khiếu nại."}]);
export default lesson;
