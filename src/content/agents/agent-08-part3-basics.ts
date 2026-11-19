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

lesson.questions.push(...[{"prompt":"In a Part 3 conversation, what should you identify first?","choices":["The speakers and situation","Every unfamiliar word","The final answer only","The spelling of each word"],"answer":0,"explanation":"Xác định người nói và bối cảnh để định hướng hội thoại."},{"prompt":"A man says, “I’ll send the revised file this afternoon.” What will he do?","choices":["Send an updated document","Attend a meeting","Cancel an order","Call a supplier"],"answer":0,"explanation":"Revised file tương đương updated document."},{"prompt":"Two speakers discuss a delayed train. Where are they most likely?","choices":["At a station","At a pharmacy","At a bank","At a restaurant"],"answer":0,"explanation":"Train delay gợi bối cảnh nhà ga."},{"prompt":"A woman asks, “Could you move our meeting to Thursday?” What is she doing?","choices":["Requesting a schedule change","Confirming a payment","Ordering equipment","Giving directions"],"answer":0,"explanation":"Move our meeting là yêu cầu đổi lịch."},{"prompt":"Which detail helps answer “When will the order arrive”?","choices":["The delivery date","The speaker’s job title","The product colour","The office floor"],"answer":0,"explanation":"When yêu cầu ngày hoặc giờ."},{"prompt":"The printer is “out of paper.” What is the problem?","choices":["It needs paper","It is broken","The floor is closed","A document is missing"],"answer":0,"explanation":"Out of paper nghĩa là hết giấy."},{"prompt":"What does “I can take care of that” mean?","choices":["I can handle the task","I disagree with the plan","I have already left","I need more information"],"answer":0,"explanation":"Take care of nghĩa là xử lý."},{"prompt":"The speakers agree to meet outside the main entrance. What next?","choices":["Go to the main entrance","Call the hotel","Submit a report","Change the order"],"answer":0,"explanation":"Đây là hành động tiếp theo đã thống nhất."}]);
export default lesson;
