import agent01 from './agents/agent-01-parts-of-speech';
import agent02 from './agents/agent-02-be-do-have';
import agent03 from './agents/agent-03-basic-workplace';
import agent04 from './agents/agent-04-prepositions';
import agent05 from './agents/agent-05-wh-questions';
import agent06 from './agents/agent-06-daily-work-vocab';
import agent07 from './agents/agent-07-passive-voice';
import agent08 from './agents/agent-08-part3-basics';
import agent09 from './agents/agent-09-email-basics';
import agent10 from './agents/agent-10-conjunctions';
import agent11 from './agents/agent-11-part4-talks';
import agent12 from './agents/agent-12-business-collocations';
import agent13 from './agents/agent-13-advanced-grammar';
import agent14 from './agents/agent-14-multiple-passages';
import agent15 from './agents/agent-15-timed-mock';

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
      { id: 'parts-of-speech', title: 'Danh từ, động từ, tính từ và trạng từ', skill: 'Grammar · Part 5', duration: '25 phút', status: 'ready' },
      { id: 'be-do-have', title: 'Động từ be, do, have', skill: 'Grammar · Listening', duration: '20 phút', status: 'ready' },
      { id: 'basic-workplace', title: 'Từ vựng nơi làm việc cơ bản', skill: 'Vocabulary', duration: '15 phút', status: 'ready' },
    ],
  },
  {
    id: 'level-151-300', title: 'Beginner', range: '151–300', description: 'Mở rộng ngữ pháp nền, cụm từ thông dụng và phản xạ nghe hỏi–đáp.',
    outcomes: ['Phân biệt hiện tại, quá khứ và tương lai', 'Dùng giới từ thời gian và địa điểm', 'Nhận diện câu hỏi Wh- và câu trả lời phù hợp'],
    lessons: [
      { id: 'basic-tenses', title: 'Các thì cơ bản trong TOEIC', skill: 'Grammar · Part 5', duration: '25 phút', status: 'ready' },
      { id: 'prepositions', title: 'Giới từ thời gian và địa điểm', skill: 'Grammar · Part 5', duration: '20 phút', status: 'ready' },
      { id: 'wh-questions', title: 'Wh- questions và Question–Response', skill: 'Listening · Part 2', duration: '20 phút', status: 'ready' },
      { id: 'daily-work-vocab', title: 'Lịch làm việc và hoạt động hằng ngày', skill: 'Vocabulary', duration: '15 phút', status: 'ready' },
    ],
  },
  {
    id: 'level-301-450', title: 'Elementary+', range: '301–450', description: 'Làm chủ dạng bài phổ biến, word forms, câu bị động và hội thoại ngắn.',
    outcomes: ['Chọn đúng dạng từ theo vị trí trong câu', 'Hiểu thông tin chính trong hội thoại', 'Hoàn thành câu và đoạn văn ngắn'],
    lessons: [
      { id: 'word-forms', title: 'Word forms: noun, verb, adjective, adverb', skill: 'Reading · Part 5', duration: '25 phút', status: 'ready' },
      { id: 'passive-voice', title: 'Câu bị động trong môi trường công sở', skill: 'Grammar · Part 5', duration: '20 phút', status: 'ready' },
      { id: 'part3-basics', title: 'Part 3: xác định người, nơi chốn, mục đích', skill: 'Listening · Part 3', duration: '25 phút', status: 'ready' },
      { id: 'email-basics', title: 'Email và thông báo ngắn', skill: 'Reading · Part 6', duration: '20 phút', status: 'ready' },
    ],
  },
  {
    id: 'level-451-600', title: 'Intermediate', range: '451–600', description: 'Tăng độ chính xác với mệnh đề, liên từ, collocations và bài đọc nhiều thông tin.',
    outcomes: ['Xử lý mệnh đề quan hệ và liên từ', 'Theo dõi mục đích và hàm ý trong bài nghe', 'Đọc email, lịch trình và thông báo kết hợp'],
    lessons: [
      { id: 'relative-clauses', title: 'Mệnh đề quan hệ và rút gọn mệnh đề', skill: 'Grammar · Part 5', duration: '25 phút', status: 'ready' },
      { id: 'conjunctions', title: 'Liên từ và quan hệ logic', skill: 'Grammar · Part 6', duration: '20 phút', status: 'ready' },
      { id: 'part4-talks', title: 'Part 4: announcements và presentations', skill: 'Listening · Part 4', duration: '25 phút', status: 'ready' },
      { id: 'business-collocations', title: 'Collocations trong công việc', skill: 'Vocabulary', duration: '20 phút', status: 'ready' },
    ],
  },
  {
    id: 'level-601-750', title: 'Upper intermediate', range: '601–750', description: 'Luyện suy luận, paraphrase, nối dữ kiện và quản lý thời gian theo chiến thuật đề thi.',
    outcomes: ['Nhận diện paraphrase và distractors', 'Suy luận ý định, hàm ý và thông tin không nói trực tiếp', 'Kết nối dữ kiện từ nhiều văn bản và hội thoại'],
    lessons: [
      { id: 'advanced-grammar', title: 'Cấu trúc nâng cao và bẫy ngữ pháp', skill: 'Reading · Part 5–6', duration: '30 phút', status: 'ready' },
      { id: 'paraphrase-inference', title: 'Paraphrase, inference và distractors', skill: 'Listening · Reading', duration: '30 phút', status: 'ready' },
      { id: 'multiple-passages', title: 'Part 7: double và triple passages', skill: 'Reading · Part 7', duration: '35 phút', status: 'ready' },
      { id: 'timed-mock', title: 'Chiến thuật làm bài 120 phút', skill: 'Full test', duration: '45 phút', status: 'ready' },
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


export const additionalLessons = [
  {
    id: 'basic-tenses', title: 'Các thì cơ bản trong TOEIC', level: '151–300',
    objective: 'Nhận biết thời điểm xảy ra hành động và chọn đúng dạng thì theo ngữ cảnh công việc.',
    sections: [
      { heading: '1. Hiện tại đơn', body: 'Dùng cho lịch trình, thói quen và sự thật. Chủ ngữ số ít thường đi với động từ thêm -s/-es.', examples: ['The store opens at 8 a.m. every day.', 'Our manager reviews the figures each week.'] },
      { heading: '2. Quá khứ đơn và hiện tại hoàn thành', body: 'Quá khứ đơn đi với mốc thời gian đã kết thúc (yesterday, last week, in 2024). Hiện tại hoàn thành diễn tả trải nghiệm hoặc kết quả liên quan đến hiện tại, thường đi với since, for, already, yet.', examples: ['The shipment arrived yesterday.', 'The company has opened three new branches since January.'] },
      { heading: '3. Tương lai và lịch trình', body: 'Will thường diễn tả quyết định hoặc dự đoán; be going to diễn tả dự định; hiện tại đơn có thể dùng cho lịch trình cố định.', examples: ['The director will announce the results tomorrow.', 'The train leaves at 6:45 p.m.'] },
    ],
    vocabulary: [
      { word: 'reschedule', meaning: 'sắp xếp lại lịch', pos: 'verb', example: 'We need to reschedule the interview.' },
      { word: 'upcoming', meaning: 'sắp tới', pos: 'adjective', example: 'The upcoming conference will be held in May.' },
      { word: 'since', meaning: 'kể từ (mốc thời gian)', pos: 'preposition / conjunction', example: 'She has worked here since 2021.' },
    ],
    questions: [
      { prompt: 'The office usually _____ at 8:30 a.m.', choices: ['open', 'opens', 'opened', 'opening'], answer: 1, explanation: 'Usually diễn tả thói quen; the office là chủ ngữ số ít nên dùng opens.' },
      { prompt: 'The shipment _____ yesterday afternoon.', choices: ['arrives', 'has arrived', 'arrived', 'will arrive'], answer: 2, explanation: 'Yesterday afternoon là mốc quá khứ đã kết thúc, dùng quá khứ đơn arrived.' },
      { prompt: 'The company _____ two new branches since March.', choices: ['opens', 'opened', 'has opened', 'will open'], answer: 2, explanation: 'Since + mốc thời gian thường đi với hiện tại hoàn thành để diễn tả kết quả kéo dài đến hiện tại.' },
    ],
  },
  {
    id: 'word-forms', title: 'Word forms: noun, verb, adjective, adverb', level: '301–450',
    objective: 'Dựa vào vị trí trong câu để xác định loại từ cần điền ở Part 5.',
    sections: [
      { heading: '1. Nhận diện vị trí danh từ', body: 'Danh từ thường đứng sau mạo từ (a/an/the), tính từ sở hữu và tính từ. Nó có thể làm chủ ngữ hoặc tân ngữ.', examples: ['The proposal needs approval.', 'We received an invitation to the event.'] },
      { heading: '2. Tính từ và trạng từ', body: 'Tính từ bổ nghĩa cho danh từ hoặc đứng sau linking verbs. Trạng từ thường bổ nghĩa cho động từ, tính từ hoặc cả câu; nhiều trạng từ có đuôi -ly.', examples: ['The report is accurate.', 'The assistant responded quickly.'] },
      { heading: '3. Học theo word family', body: 'Một gốc từ có thể tạo thành nhiều từ loại. Hãy nhìn vị trí chỗ trống trước, sau đó mới xét nghĩa và dạng từ.', examples: ['decide (verb) → decision (noun) → decisive (adjective) → decisively (adverb).', 'The manager made a final decision.'] },
    ],
    vocabulary: [
      { word: 'accurate', meaning: 'chính xác', pos: 'adjective', example: 'Please make sure the figures are accurate.' },
      { word: 'accuracy', meaning: 'độ chính xác', pos: 'noun', example: 'Accuracy is essential when preparing invoices.' },
      { word: 'efficiently', meaning: 'một cách hiệu quả', pos: 'adverb', example: 'The new system processes orders efficiently.' },
    ],
    questions: [
      { prompt: 'The accounting team checked the figures for _____.', choices: ['accurate', 'accuracy', 'accurately', 'accuracies'], answer: 1, explanation: 'Sau giới từ for cần danh từ; accuracy là danh từ.' },
      { prompt: 'All applications must be completed _____.', choices: ['accurate', 'accuracy', 'accurately', 'accuracies'], answer: 2, explanation: 'Bổ nghĩa cho động từ completed cần trạng từ accurately.' },
      { prompt: 'The company introduced an _____ system for tracking orders.', choices: ['efficiency', 'efficient', 'efficiently', 'efficiencies'], answer: 1, explanation: 'Chỗ trống đứng trước danh từ system nên cần tính từ efficient.' },
    ],
  },
  {
    id: 'relative-clauses', title: 'Mệnh đề quan hệ và rút gọn mệnh đề', level: '451–600',
    objective: 'Dùng who, which, that, whose, where để nối thông tin và tránh chọn nhầm đại từ quan hệ.',
    sections: [
      { heading: '1. Chọn đại từ quan hệ', body: 'Who thay cho người; which thay cho vật/sự việc; that có thể thay cho người hoặc vật trong mệnh đề xác định; whose diễn tả sở hữu; where chỉ địa điểm.', examples: ['The employee who handles payroll is on leave.', 'The software that we installed is easy to use.', 'The building where our office is located has a new elevator.'] },
      { heading: '2. Mệnh đề xác định và không xác định', body: 'Mệnh đề xác định cung cấp thông tin cần thiết và không dùng dấu phẩy. Mệnh đề không xác định bổ sung thông tin, thường được ngăn bằng dấu phẩy; không dùng that trong loại này.', examples: ['The clients who registered early will receive a discount.', 'Ms. Lee, who joined us in April, will lead the project.'] },
      { heading: '3. Rút gọn mệnh đề quan hệ', body: 'Có thể rút gọn mệnh đề quan hệ chủ động bằng V-ing và bị động bằng V3/ed khi cấu trúc phù hợp.', examples: ['Employees working remotely must attend the online briefing.', 'Documents submitted after Friday will not be accepted.'] },
    ],
    vocabulary: [
      { word: 'applicant', meaning: 'ứng viên/người nộp đơn', pos: 'noun', example: 'Applicants who meet the requirements will be contacted.' },
      { word: 'requirement', meaning: 'yêu cầu', pos: 'noun', example: 'The position has several technical requirements.' },
      { word: 'submit', meaning: 'nộp', pos: 'verb', example: 'Please submit the form before the deadline.' },
    ],
    questions: [
      { prompt: 'The consultant _____ prepared the proposal will attend the meeting.', choices: ['who', 'where', 'whose', 'which'], answer: 0, explanation: 'Danh từ đứng trước là người (consultant) và đại từ làm chủ ngữ của prepared, nên dùng who.' },
      { prompt: 'The new branch, _____ opened last month, is already profitable.', choices: ['that', 'who', 'which', 'whose'], answer: 2, explanation: 'Mệnh đề không xác định có dấu phẩy, nói về vật/chi nhánh nên dùng which, không dùng that.' },
      { prompt: 'Candidates _____ after the deadline will not be considered.', choices: ['submit', 'submitting', 'submitted', 'submission'], answer: 2, explanation: 'Documents/candidates được nộp là ý bị động; dạng rút gọn phù hợp là submitted.' },
    ],
  },
  {
    id: 'paraphrase-inference', title: 'Paraphrase, inference và distractors', level: '601–750',
    objective: 'Tìm cách diễn đạt tương đương và suy luận có căn cứ mà không chọn đáp án chỉ vì trùng từ.',
    sections: [
      { heading: '1. Paraphrase là gì?', body: 'Đề TOEIC thường diễn đạt lại thông tin bằng từ đồng nghĩa, đổi loại từ hoặc đổi cấu trúc câu. Không nên chỉ dò từ giống hệt trong audio hoặc bài đọc.', examples: ['purchase ↔ buy', 'postpone ↔ put off', 'The event was called off. = The event was cancelled.'] },
      { heading: '2. Suy luận có căn cứ', body: 'Inference là kết luận hợp lý dựa trên chi tiết đã cho. Đáp án đúng không cần được nói nguyên văn, nhưng phải được hỗ trợ bởi ngữ cảnh.', examples: ['“I left the revised file on your desk.” → The speaker has updated a document.', '“The last train has already departed.” → The listener may need another way home.'] },
      { heading: '3. Nhận diện distractors', body: 'Bẫy thường lặp lại một từ trong bài nghe nhưng gắn sai người, sai thời điểm hoặc sai mục đích. Đọc câu hỏi trước, xác định loại thông tin cần tìm và kiểm tra toàn bộ ngữ cảnh.', examples: ['Nghe thấy “Friday” không có nghĩa mọi đáp án chứa Friday đều đúng.', 'Phân biệt điều đã xảy ra với kế hoạch sẽ thực hiện.'] },
    ],
    vocabulary: [
      { word: 'revise', meaning: 'chỉnh sửa', pos: 'verb', example: 'The editor revised the proposal before submission.' },
      { word: 'postpone', meaning: 'hoãn lại', pos: 'verb', example: 'The launch was postponed because of bad weather.' },
      { word: 'indicate', meaning: 'cho thấy; chỉ ra', pos: 'verb', example: 'The survey results indicate strong customer demand.' },
    ],
    questions: [
      { prompt: 'The manager said the product launch would be postponed. What does this mean?', choices: ['The launch will happen earlier.', 'The launch will take place later.', 'The product has been discontinued.', 'The launch has already started.'], answer: 1, explanation: 'Postponed được diễn đạt lại là delayed hoặc put off: sự kiện sẽ diễn ra muộn hơn.' },
      { prompt: '“I have already sent the revised contract to the client.” What can be inferred?', choices: ['The contract has been updated and sent.', 'The client rejected the contract.', 'The contract is still being drafted.', 'The client will send a new contract.'], answer: 0, explanation: 'Revised contract cho biết hợp đồng đã được chỉnh sửa; have sent cho biết đã gửi đi.' },
      { prompt: 'A speaker says, “The printer is out of order, so I will use the one on the third floor.” What will the speaker probably do?', choices: ['Repair the printer immediately.', 'Buy a new printer.', 'Print documents on another floor.', 'Cancel the printing request.'], answer: 2, explanation: 'Out of order nghĩa là hỏng/không hoạt động; người nói sẽ dùng máy in ở tầng ba.' },
    ],
  },
];

export const specialistLessons = [
  agent01,
  agent02,
  agent03,
  agent04,
  agent05,
  agent06,
  agent07,
  agent08,
  agent09,
  agent10,
  agent11,
  agent12,
  agent13,
  agent14,
  agent15
];

export const lessonLibrary = [starterLesson, ...additionalLessons, ...specialistLessons];

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

export const allVocabulary = [
  ...vocabularySeed,
  ...lessonLibrary.flatMap((lesson) => lesson.vocabulary.map((word) => ({ ...word, topic: lesson.title }))),
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
      { prompt: 'Why is the woman calling?', choices: ['To confirm an appointment', 'To request a payment', 'To cancel an order', 'To offer a discount'], answer: 0, explanation: 'The caller says she is calling to confirm the appointment, so option A matches the stated purpose.' },
      { prompt: 'When will the man visit the clinic?', choices: ['Thursday at two', 'Friday at ten fifteen', 'Friday afternoon', 'Monday morning'], answer: 1, explanation: 'The woman offers an opening at ten fifteen on Friday, and the man accepts it.' },
      { prompt: 'What does the man ask the woman to do?', choices: ['Send a confirmation by email', 'Call him next week', 'Prepare a medical report', 'Change the clinic location'], answer: 0, explanation: 'The final line is “Please send me a confirmation by email,” which directly supports option A.' },
    ],
    explanation: 'Câu đầu nêu mục đích cuộc gọi (confirm your appointment). Lịch hẹn được đổi sang Friday at ten fifteen.',
    translation: 'Người phụ nữ gọi để xác nhận lịch hẹn nha khoa. Người đàn ông đề nghị chuyển sang sáng thứ Sáu lúc 10:15.',
    vocabulary: ['confirm: xác nhận', 'appointment: cuộc hẹn', 'opening: khung giờ còn trống'],
  },,
  {
    id: 'listening-03', part: 'Part 4 · Announcement', level: '451–600', title: 'Office maintenance notice',
    instruction: 'Chuyển script thành audio với một giọng đọc thông báo rõ ràng. Nghe để xác định địa điểm, thời gian và việc người nghe cần làm.',
    script: 'Attention, employees. The main conference room will be unavailable this Thursday due to scheduled maintenance. All meetings originally booked for that room have been moved to Conference Room B on the second floor. If you have any questions, please contact the facilities department before Wednesday afternoon.',
    questions: [
      { prompt: 'What is the purpose of the announcement?', choices: ['To report a room change', 'To introduce a new employee', 'To announce a company merger', 'To advertise a service'], answer: 0, explanation: 'Thông báo cho biết phòng họp chính sẽ đóng cửa và các cuộc họp được chuyển sang phòng khác.' },
      { prompt: 'When will the main conference room be unavailable?', choices: ['This Wednesday', 'This Thursday', 'Next Monday', 'Friday afternoon'], answer: 1, explanation: 'Người nói nêu rõ phòng họp không sử dụng được vào Thursday.' },
      { prompt: 'Who should employees contact with questions?', choices: ['The sales department', 'The building manager', 'The facilities department', 'The human resources team'], answer: 2, explanation: 'Câu cuối yêu cầu liên hệ facilities department trước chiều thứ Tư.' },
    ],
    explanation: 'Thông báo về việc bảo trì phòng họp chính vào thứ Năm, chuyển các cuộc họp sang Conference Room B ở tầng hai.',
    translation: 'Chú ý nhân viên: Phòng họp chính sẽ không sử dụng được vào thứ Năm này do bảo trì theo lịch. Tất cả cuộc họp đã đặt tại phòng đó được chuyển sang Phòng họp B ở tầng hai. Nếu có câu hỏi, vui lòng liên hệ bộ phận cơ sở vật chất trước chiều thứ Tư.',
    vocabulary: ['unavailable: không thể sử dụng', 'scheduled maintenance: bảo trì theo lịch', 'facilities department: bộ phận cơ sở vật chất'],
  }
];

export const practiceQuestions = [
  ...starterLesson.questions.map((q, index) => ({ ...q, id: 'reading-' + (index + 1), part: 'Part 5', skill: 'Sentence structure' })),
];
