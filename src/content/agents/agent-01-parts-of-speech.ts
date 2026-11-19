// Agent 01 — Danh từ, động từ, tính từ và trạng từ
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "parts-of-speech",
  "title": "Danh từ, động từ, tính từ và trạng từ",
  "level": "0–150",
  "objective": "Xác định từ loại theo vị trí trong câu TOEIC.",
  "sections": [
    {
      "heading": "Danh từ",
      "body": "Danh từ chỉ người, vật, nơi chốn, khái niệm; thường làm chủ ngữ/tân ngữ hoặc đứng sau mạo từ.",
      "examples": [
        "The manager reviewed the report.",
        "The department needs assistance."
      ]
    },
    {
      "heading": "Động từ",
      "body": "Động từ diễn tả hành động/trạng thái và phải chia phù hợp với chủ ngữ, thì.",
      "examples": [
        "The supplier delivers goods.",
        "The office is closed."
      ]
    },
    {
      "heading": "Tính từ và trạng từ",
      "body": "Tính từ bổ nghĩa danh từ hoặc đứng sau linking verb; trạng từ bổ nghĩa động từ, tính từ hoặc cả câu.",
      "examples": [
        "The report is accurate.",
        "The assistant responded quickly."
      ]
    },
    {
      "heading": "Mẹo Part 5",
      "body": "Xét vị trí chỗ trống trước, sau đó xét nghĩa: trước danh từ thường cần tính từ; bổ nghĩa động từ thường cần trạng từ.",
      "examples": [
        "an efficient system",
        "work efficiently."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "approval",
      "meaning": "sự phê duyệt",
      "pos": "noun",
      "example": "Final approval is required."
    },
    {
      "word": "reliable",
      "meaning": "đáng tin cậy",
      "pos": "adjective",
      "example": "We need a reliable supplier."
    },
    {
      "word": "efficiently",
      "meaning": "một cách hiệu quả",
      "pos": "adverb",
      "example": "The team worked efficiently."
    }
  ],
  "questions": [
    {
      "prompt": "The director gave final _____ to the proposal.",
      "choices": [
        "approve",
        "approval",
        "approved",
        "approving"
      ],
      "answer": 1,
      "explanation": "Sau final cần danh từ approval."
    },
    {
      "prompt": "The assistant works very _____.",
      "choices": [
        "careful",
        "carefully",
        "carefulness",
        "care"
      ],
      "answer": 1,
      "explanation": "Bổ nghĩa works cần trạng từ carefully."
    },
    {
      "prompt": "We need a _____ supplier.",
      "choices": [
        "rely",
        "reliably",
        "reliable",
        "reliability"
      ],
      "answer": 2,
      "explanation": "Trước danh từ supplier cần tính từ reliable."
    },
    {
      "prompt": "The _____ will interview candidates.",
      "choices": [
        "manage",
        "manager",
        "management",
        "managed"
      ],
      "answer": 1,
      "explanation": "Chỗ trống chỉ người thực hiện hành động: manager."
    }
  ]
} satisfies LessonContent;

// Expanded practice bank: eight additional questions aligned with this lesson.
lesson.questions.push(...[{"prompt":"The company announced an unexpected _____.","choices":["decide","decision","decisive","decisively"],"answer":1,"explanation":"Sau an unexpected cần danh từ; decision là danh từ."},{"prompt":"The technician repaired the machine _____.","choices":["careful","carefully","carefulness","care"],"answer":1,"explanation":"Bổ nghĩa cho động từ repaired cần trạng từ carefully."},{"prompt":"Our new _____ will start work on Monday.","choices":["employ","employee","employment","employed"],"answer":1,"explanation":"Sau new và trước will start cần danh từ chỉ người: employee."},{"prompt":"The proposal seems _____.","choices":["practical","practically","practice","practise"],"answer":0,"explanation":"Sau linking verb seems dùng tính từ practical."},{"prompt":"The director will _____ the final schedule.","choices":["approval","approve","approved","approving"],"answer":1,"explanation":"Sau will dùng động từ nguyên mẫu approve."},{"prompt":"We received the _____ yesterday.","choices":["inform","informative","information","informing"],"answer":2,"explanation":"Sau the cần danh từ; information là danh từ không đếm được."},{"prompt":"The staff responded _____ to the request.","choices":["prompt","promptly","promptness","prompting"],"answer":1,"explanation":"Trạng từ promptly bổ nghĩa cho responded."},{"prompt":"The _____ of the new branch is scheduled for June.","choices":["open","opened","opening","openly"],"answer":2,"explanation":"Sau the và trước of cần danh từ opening."}]);

export default lesson;
