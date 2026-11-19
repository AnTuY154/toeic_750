export type ToeicLevel = {
  id: string;
  title: string;
  range: string;
  description: string;
  outcomes: string[];
  lessons: { id: string; title: string; skill: string; duration: string; status: 'ready' | 'planned' }[];
};

export const toeicLevels: ToeicLevel[] = [
  {
    id: 'level-0-150', title: 'Foundation', range: '0–150', description: 'Xây nền tiếng Anh từ đầu: câu đơn, từ loại, từ vựng thiết yếu và nghe câu ngắn.',
    outcomes: ['Nhận biết chủ ngữ, động từ và tân ngữ', 'Dùng được be, have, do và hiện tại đơn', 'Hiểu chỉ dẫn và câu mô tả quen thuộc'],
    lessons: [
      { id: 'sentence-basics', title: 'Cấu trúc câu tiếng Anh cơ bản', skill: 'Grammar · Reading', duration: '20 phút', status: 'ready' },
      { id: 'parts-of-speech', title: 'Danh từ, động từ, tính từ và trạng từ', skill: 'Grammar · Part 5', duration: '25 phút', status: 'planned' },
      { id: 'be-do-have', title: 'Động từ be, do, have', skill: 'Grammar · Listening', duration: '20 phút', status: 'planned' },
      { id: 'basic-workplace', title: 'Từ vựng nơi làm việc cơ bản', skill: 'Vocabulary', duration: '15 phút', status: 'planned' },
    ],
  },
  {
    id: 'level-151-300', title: 'Beginner', range: '151–300', description: 'Mở rộng ngữ pháp nền, cụm từ thông dụng và phản xạ nghe hỏi–đáp.',
    outcomes: ['Phân biệt hiện tại, quá khứ và tương lai', 'Dùng giới từ thời gian và địa điểm', 'Nhận diện câu hỏi Wh- và câu trả lời phù hợp'],
    lessons: [
      { id: 'basic-tenses', title: 'Các thì cơ bản trong TOEIC', skill: 'Grammar · Part 5', duration: '25 phút', status: 'planned' },
      { id: 'prepositions', title: 'Giới từ thời gian và địa điểm', skill: 'Grammar · Part 5', duration: '20 phút', status: 'planned' },
      { id: 'wh-questions', title: 'Wh- questions và Question–Response', skill: 'Listening · Part 2', duration: '20 phút', status: 'planned' },
      { id: 'daily-work-vocab', title: 'Lịch làm việc và hoạt động hằng ngày', skill: 'Vocabulary', duration: '15 phút', status: 'planned' },
    ],
  },
  {
    id: 'level-301-450', title: 'Elementary+', range: '301–450', description: 'Làm chủ dạng bài phổ biến, word forms, câu bị động và hội thoại ngắn.',
    outcomes: ['Chọn đúng dạng từ theo vị trí trong câu', 'Hiểu thông tin chính trong hội thoại', 'Hoàn thành câu và đoạn văn ngắn'],
    lessons: [
      { id: 'word-forms', title: 'Word forms: noun, verb, adjective, adverb', skill: 'Reading · Part 5', duration: '25 phút', status: 'planned' },
      { id: 'passive-voice', title: 'Câu bị động trong môi trường công sở', skill: 'Grammar · Part 5', duration: '20 phút', status: 'planned' },
      { id: 'part3-basics', title: 'Part 3: xác định người, nơi chốn, mục đích', skill: 'Listening · Part 3', duration: '25 phút', status: 'planned' },
      { id: 'email-basics', title: 'Email và thông báo ngắn', skill: 'Reading · Part 6', duration: '20 phút', status: 'planned' },
    ],
  },
  {
    id: 'level-451-600', title: 'Intermediate', range: '451–600', description: 'Tăng độ chính xác với mệnh đề, liên từ, collocations và bài đọc nhiều thông tin.',
    outcomes: ['Xử lý mệnh đề quan hệ và liên từ', 'Theo dõi mục đích và hàm ý trong bài nghe', 'Đọc email, lịch trình và thông báo kết hợp'],
    lessons: [
      { id: 'relative-clauses', title: 'Mệnh đề quan hệ và rút gọn mệnh đề', skill: 'Grammar · Part 5', duration: '25 phút', status: 'planned' },
      { id: 'conjunctions', title: 'Liên từ và quan hệ logic', skill: 'Grammar · Part 6', duration: '20 phút', status: 'planned' },
      { id: 'part4-talks', title: 'Part 4: announcements và presentations', skill: 'Listening · Part 4', duration: '25 phút', status: 'planned' },
      { id: 'business-collocations', title: 'Collocations trong công việc', skill: 'Vocabulary', duration: '20 phút', status: 'planned' },
    ],
  },
  {
    id: 'level-601-750', title: 'Upper intermediate', range: '601–750', description: 'Luyện suy luận, paraphrase, nối dữ kiện và quản lý thời gian theo chiến thuật đề thi.',
    outcomes: ['Nhận diện paraphrase và distractors', 'Suy luận ý định, hàm ý và thông tin không nói trực tiếp', 'Kết nối dữ kiện từ nhiều văn bản và hội thoại'],
    lessons: [
      { id: 'advanced-grammar', title: 'Cấu trúc nâng cao và bẫy ngữ pháp', skill: 'Reading · Part 5–6', duration: '30 phút', status: 'planned' },
      { id: 'paraphrase-inference', title: 'Paraphrase, inference và distractors', skill: 'Listening · Reading', duration: '30 phút', status: 'planned' },
      { id: 'multiple-passages', title: 'Part 7: double và triple passages', skill: 'Reading · Part 7', duration: '35 phút', status: 'planned' },
      { id: 'timed-mock', title: 'Chiến thuật làm bài 120 phút', skill: 'Full test', duration: '45 phút', status: 'planned' },
    ],
  },
];

export const starterLesson = {
  id: 'sentence-basics',
  title: 'Cấu trúc câu tiếng Anh cơ bản',
  level: '0–150',
  objective: 'Nhận diện một câu hoàn chỉnh và tìm động từ chính trước khi chọn đáp án.',
  sections: [
    { heading: '1. Công thức câu cơ bản', body: 'Một câu tiếng Anh thông thường cần có chủ ngữ (Subject) và động từ (Verb). Tân ngữ (Object) xuất hiện khi động từ cần đối tượng tác động.', examples: ['The manager works. — Người quản lý làm việc.', 'The manager reviews the report. — Người quản lý xem xét báo cáo.', 'The meeting is important. — Cuộc họp quan trọng.'] },
    { heading: '2. Nhận diện chủ ngữ', body: 'Chủ ngữ thường là danh từ hoặc đại từ. Trong đề TOEIC, chủ ngữ có thể là một cụm danh từ dài; hãy tìm danh từ trung tâm thay vì dịch từng từ.', examples: ['The new employees attend orientation.', 'Our sales department needs additional staff.'] },
    { heading: '3. Nhận diện động từ chính', body: 'Động từ chính cho biết hành động hoặc trạng thái. Đừng nhầm danh từ đuôi -tion/-ment với động từ. Một câu hoàn chỉnh thường không thể thiếu động từ chính.', examples: ['The shipment arrives tomorrow. (arrives = động từ)', 'The arrival of the shipment is delayed. (arrival = danh từ)'] },
    { heading: '4. Mẹo làm Part 5', body: 'Đọc quanh chỗ trống, xác định câu đang thiếu thành phần nào, sau đó mới xét nghĩa. Nếu câu đã có chủ ngữ nhưng chưa có động từ chính, ưu tiên tìm dạng động từ phù hợp.', examples: ['The assistant _____ the appointments every morning. → needs a verb.', 'The report is _____. → needs an adjective or past participle used as an adjective.'] },
  ],
  vocabulary: [
    { word: 'manager', meaning: 'quản lý', pos: 'noun', example: 'The manager will lead the meeting.' },
    { word: 'report', meaning: 'báo cáo; báo cáo lại', pos: 'noun / verb', example: 'Please submit the report by Friday.' },
    { word: 'department', meaning: 'phòng ban', pos: 'noun', example: 'The sales department is hiring.' },
    { word: 'employee', meaning: 'nhân viên', pos: 'noun', example: 'Each employee receives an ID card.' },
    { word: 'shipment', meaning: 'lô hàng; việc giao hàng', pos: 'noun', example: 'The shipment arrives this afternoon.' },
  ],
  questions: [
    { prompt: 'The marketing team _____ a new campaign every quarter.', choices: ['launch', 'launches', 'launching', 'launched'], answer: 1, explanation: 'The marketing team là chủ ngữ số ít; câu diễn tả thói quen nên dùng hiện tại đơn launches.' },
    { prompt: 'All employees must submit the _____ by noon.', choices: ['complete', 'completed', 'completion', 'completes'], answer: 2, explanation: 'Sau the cần danh từ. Completion là danh từ, nghĩa là sự hoàn thành.' },
    { prompt: 'The new branch _____ near the central station.', choices: ['is located', 'locating', 'location', 'locate'], answer: 0, explanation: 'Câu cần động từ chính. is located là cấu trúc bị động/mô tả vị trí phù hợp với chủ ngữ số ít.' },
  ],
};

export const vocabularySeed = [
  { word: 'appointment', meaning: 'cuộc hẹn', pos: 'noun', example: 'I have an appointment with the client at 10 a.m.', topic: 'Schedule' },
  { word: 'available', meaning: 'có sẵn; rảnh', pos: 'adjective', example: 'The conference room is available this afternoon.', topic: 'Workplace' },
  { word: 'deadline', meaning: 'hạn chót', pos: 'noun', example: 'The deadline for applications is Friday.', topic: 'Schedule' },
  { word: 'department', meaning: 'phòng ban', pos: 'noun', example: 'Contact the accounting department for assistance.', topic: 'Workplace' },
  { word: 'invoice', meaning: 'hóa đơn', pos: 'noun', example: 'Please send the invoice to our finance team.', topic: 'Finance' },
  { word: 'maintenance', meaning: 'việc bảo trì', pos: 'noun', example: 'The elevators are closed for maintenance.', topic: 'Facilities' },
  { word: 'postpone', meaning: 'hoãn lại', pos: 'verb', example: 'The meeting was postponed until Monday.', topic: 'Meetings' },
  { word: 'purchase', meaning: 'mua hàng; việc mua hàng', pos: 'verb / noun', example: 'All purchases must be approved by a supervisor.', topic: 'Shopping' },
  { word: 'recruit', meaning: 'tuyển dụng', pos: 'verb', example: 'The company plans to recruit two assistants.', topic: 'Human resources' },
  { word: 'shipment', meaning: 'lô hàng; việc giao hàng', pos: 'noun', example: 'Your shipment will arrive within two business days.', topic: 'Shipping' },
];

export const listeningScripts = [
  {
    id: 'listening-01', part: 'Part 2 · Question–Response', level: '0–150', title: 'A meeting time',
    instruction: 'Tự chuyển script bên dưới thành audio. Nghe câu hỏi một lần, sau đó chọn câu trả lời phù hợp nhất.',
    script: 'Woman: What time does the staff meeting begin?\nMan: (A) In the main conference room.\n(B) At nine thirty.\n(C) About twelve employees.',
    choices: ['In the main conference room.', 'At nine thirty.', 'About twelve employees.'], answer: 1,
    explanation: 'What time hỏi về thời gian. “At nine thirty” trả lời trực tiếp; A trả lời địa điểm, C trả lời số lượng.',
    translation: 'Người phụ nữ: Cuộc họp nhân viên bắt đầu lúc mấy giờ? Người đàn ông: Lúc 9 giờ 30.',
    vocabulary: ['staff meeting: cuộc họp nhân viên', 'begin: bắt đầu', 'conference room: phòng họp'],
  },
  {
    id: 'listening-02', part: 'Part 3 · Conversation', level: '151–300', title: 'Changing an appointment',
    instruction: 'Tạo audio có hai giọng đọc khác nhau. Đọc hội thoại tự nhiên, tốc độ vừa phải.',
    script: 'Woman: Hello, this is Dana from Greenway Dental. I’m calling to confirm your appointment for Thursday at two.\nMan: Thanks for calling. Could we move it to Friday morning?\nWoman: Certainly. We have an opening at ten fifteen.\nMan: That works. Please send me a confirmation by email.',
    questions: [
      { prompt: 'Why is the woman calling?', choices: ['To confirm an appointment', 'To request a payment', 'To cancel an order', 'To offer a discount'], answer: 0 },
      { prompt: 'When will the man visit the clinic?', choices: ['Thursday at two', 'Friday at ten fifteen', 'Friday afternoon', 'Monday morning'], answer: 1 },
      { prompt: 'What does the man ask the woman to do?', choices: ['Send a confirmation by email', 'Call him next week', 'Prepare a medical report', 'Change the clinic location'], answer: 0 },
    ],
    explanation: 'Câu đầu nêu mục đích cuộc gọi (confirm your appointment). Lịch hẹn được đổi sang Friday at ten fifteen.',
    translation: 'Người phụ nữ gọi để xác nhận lịch hẹn nha khoa. Người đàn ông đề nghị chuyển sang sáng thứ Sáu lúc 10:15.',
    vocabulary: ['confirm: xác nhận', 'appointment: cuộc hẹn', 'opening: khung giờ còn trống'],
  },
];

export const practiceQuestions = [
  ...starterLesson.questions.map((q, index) => ({ ...q, id: 'reading-' + (index + 1), part: 'Part 5', skill: 'Sentence structure' })),
];
