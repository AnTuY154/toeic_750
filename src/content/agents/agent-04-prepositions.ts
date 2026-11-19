// Agent 04 — Giới từ thời gian và địa điểm
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "prepositions",
  "title": "Giới từ thời gian và địa điểm",
  "level": "151–300",
  "objective": "Chọn đúng giới từ thời gian, địa điểm và cụm giới từ thông dụng.",
  "sections": [
    {
      "heading": "At, on, in với thời gian",
      "body": "At dùng cho giờ; on cho ngày/ngày tháng; in cho tháng, năm, mùa và khoảng thời gian dài.",
      "examples": [
        "The meeting starts at 9:15.",
        "The workshop is on Tuesday; the contract expires in June."
      ]
    },
    {
      "heading": "By, until, during, for",
      "body": "By là hạn chót; until là kéo dài đến; during là trong suốt sự kiện; for là khoảng thời lượng.",
      "examples": [
        "Reply by Friday.",
        "The store is open until nine."
      ]
    },
    {
      "heading": "Giới từ địa điểm",
      "body": "At chỉ điểm cụ thể; in chỉ bên trong/khu vực; on chỉ bề mặt, tầng hoặc tuyến đường.",
      "examples": [
        "Wait at the entrance.",
        "The files are in the cabinet; our office is on the fifth floor."
      ]
    },
    {
      "heading": "Cụm giới từ",
      "body": "Ghi nhớ responsible for, interested in, according to, due to, prior to.",
      "examples": [
        "She is responsible for training.",
        "The event was postponed due to rain."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "deadline",
      "meaning": "hạn chót",
      "pos": "noun",
      "example": "The deadline is Friday."
    },
    {
      "word": "entrance",
      "meaning": "lối vào",
      "pos": "noun",
      "example": "Wait near the main entrance."
    },
    {
      "word": "prior to",
      "meaning": "trước khi",
      "pos": "preposition",
      "example": "Submit it prior to the interview."
    }
  ],
  "questions": [
    {
      "prompt": "The meeting begins _____ 10 a.m.",
      "choices": [
        "in",
        "on",
        "at",
        "by"
      ],
      "answer": 2,
      "explanation": "Giờ cụ thể dùng at."
    },
    {
      "prompt": "Applications must arrive _____ June 15.",
      "choices": [
        "until",
        "by",
        "during",
        "for"
      ],
      "answer": 1,
      "explanation": "By chỉ hạn chót."
    },
    {
      "prompt": "The office remains closed _____ the repairs are complete.",
      "choices": [
        "until",
        "despite",
        "during",
        "since"
      ],
      "answer": 0,
      "explanation": "Until + mệnh đề thời gian."
    },
    {
      "prompt": "The files are stored _____ a secure cabinet.",
      "choices": [
        "at",
        "on",
        "in",
        "by"
      ],
      "answer": 2,
      "explanation": "In diễn tả bên trong tủ."
    }
  ]
} satisfies LessonContent;

// Expanded practice bank: eight additional questions aligned with this lesson.
lesson.questions.push(...[{"prompt":"The interview is scheduled _____ 10:30 a.m.","choices":["in","on","at","by"],"answer":2,"explanation":"At dùng với giờ cụ thể."},{"prompt":"The annual conference will take place _____ September.","choices":["at","in","on","to"],"answer":1,"explanation":"In dùng với tháng."},{"prompt":"The documents must be submitted _____ Friday.","choices":["by","during","between","among"],"answer":0,"explanation":"By Friday nghĩa là hạn chót không muộn hơn thứ Sáu."},{"prompt":"The printer is located _____ the reception desk and the meeting room.","choices":["among","between","during","through"],"answer":1,"explanation":"Between dùng cho vị trí giữa hai đối tượng."},{"prompt":"Ms. Chen has worked here _____ 2022.","choices":["for","since","during","until"],"answer":1,"explanation":"Since đi với mốc thời gian."},{"prompt":"The office will remain closed _____ the renovation.","choices":["while","during","since","at"],"answer":1,"explanation":"During + danh từ: during the renovation."},{"prompt":"Please send the signed form _____ email.","choices":["by","with","at","from"],"answer":0,"explanation":"By email là qua email."},{"prompt":"The package was delivered _____ the warehouse this morning.","choices":["to","at","on","into"],"answer":0,"explanation":"Deliver to + địa điểm nhận."}]);
export default lesson;
