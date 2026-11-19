// Agent 06 — Lịch làm việc và hoạt động hằng ngày
import type { LessonContent } from '../toeicTypes';
const lesson = {
  "id": "daily-work-vocab",
  "title": "Lịch làm việc và hoạt động hằng ngày",
  "level": "151–300",
  "objective": "Nắm từ vựng về lịch họp, ca làm, lịch hẹn và công tác.",
  "sections": [
    {
      "heading": "Lịch và cuộc hẹn",
      "body": "Schedule, appointment, agenda, postpone, confirm xuất hiện trong email và hội thoại.",
      "examples": [
        "The agenda has been updated.",
        "Please confirm your appointment."
      ]
    },
    {
      "heading": "Ca làm và chấm công",
      "body": "Shift, overtime, leave, attendance, day off mô tả lịch nhân sự.",
      "examples": [
        "Her shift begins at seven.",
        "Overtime requires approval."
      ]
    },
    {
      "heading": "Công tác và di chuyển",
      "body": "Book a flight, make a reservation, depart, arrive, itinerary mô tả chuyến đi.",
      "examples": [
        "Review the travel itinerary.",
        "The flight departs at 6:40."
      ]
    },
    {
      "heading": "Trình tự công việc",
      "body": "First, then, afterward, finally, beforehand giúp theo dõi quy trình.",
      "examples": [
        "First, register at reception.",
        "Afterward, collect your visitor badge."
      ]
    }
  ],
  "vocabulary": [
    {
      "word": "agenda",
      "meaning": "chương trình họp",
      "pos": "noun",
      "example": "The agenda includes a budget review."
    },
    {
      "word": "overtime",
      "meaning": "làm thêm giờ",
      "pos": "noun",
      "example": "Overtime must be approved."
    },
    {
      "word": "itinerary",
      "meaning": "lịch trình chuyến đi",
      "pos": "noun",
      "example": "The itinerary is attached."
    }
  ],
  "questions": [
    {
      "prompt": "Please review the meeting _____.",
      "choices": [
        "agenda",
        "overtime",
        "itinerary",
        "shift"
      ],
      "answer": 0,
      "explanation": "Agenda là chương trình họp."
    },
    {
      "prompt": "Approval is required before working _____.",
      "choices": [
        "day off",
        "overtime",
        "appointment",
        "attendance"
      ],
      "answer": 1,
      "explanation": "Overtime là làm thêm giờ."
    },
    {
      "prompt": "The flight is scheduled to _____ at 7 p.m.",
      "choices": [
        "attend",
        "depart",
        "confirm",
        "replace"
      ],
      "answer": 1,
      "explanation": "Depart nghĩa là khởi hành."
    },
    {
      "prompt": "The travel _____ includes hotel details.",
      "choices": [
        "agenda",
        "shift",
        "itinerary",
        "leave"
      ],
      "answer": 2,
      "explanation": "Itinerary là lịch trình."
    }
  ]
} satisfies LessonContent;
export default lesson;
