export type Day2PracticeQuestion = {
  id: string;
  mode: 'reading' | 'listening';
  skill: string;
  prompt: string;
  choices: readonly string[];
  correctAnswer: number;
  explanation: string;
  imageDescription?: string;
  audioScript?: string;
};

export const day2 = {
  day: 2,
  title: 'Word Forms & Listening Part 1',
  summary: 'Sentence structure → xác định slot → chọn đúng noun / verb / adjective / adverb; đồng thời luyện Part 1 theo action, state và location.',
  scores: {
    spacedReview: '3/3',
    independentPractice: '8/8',
    listening: '4/4',
  },
  progressNote: 'Day 2 cho thấy bạn đang chuyển từ “cảm giác đáp án nào đúng” sang “biết blank cần word class nào vì cấu trúc câu”.',
  concepts: [
    {
      title: 'Four major word classes',
      takeaway: 'Noun, verb, adjective, adverb là bốn word classes trọng tâm của Day 2.',
      detail: 'Không nên chỉ nhìn suffix rồi đoán. Một từ có thể thuộc nhiều word classes tùy context.',
      examples: ['inspection → noun', 'inspect → verb', 'efficient → adjective', 'efficiently → adverb']
    },
    {
      title: 'Noun slots',
      takeaway: 'Noun có thể làm Subject, Object hoặc đứng sau determiner.',
      detail: 'Xác định slot trong sentence skeleton trước khi chọn word form.',
      examples: ['The technician inspected the printer. → the technician = Subject; the printer = Object', 'a thorough inspection → determiner + adjective + noun']
    },
    {
      title: 'Verb slots',
      takeaway: 'Verb biểu thị action, event hoặc state; Verb Phrase có thể gồm auxiliary + main verb.',
      detail: 'Sau modal như will cần base verb.',
      examples: ['The technician inspected the machine.', 'The technician has inspected the machine.', 'The team will install the equipment tomorrow.']
    },
    {
      title: 'Adjective slots',
      takeaway: 'Adjective mô tả noun/pronoun và có thể làm complement sau linking verb.',
      detail: 'Đây là transfer trực tiếp từ lỗi Day 1 về inconvenient.',
      examples: ['an efficient machine', 'The machine is efficient.', 'The appointment seems inconvenient.']
    },
    {
      title: 'Adverb slots',
      takeaway: 'Adverb có thể bổ nghĩa cho verb, adjective, adverb khác hoặc clause.',
      detail: 'Contrast cần review: efficient vs efficiently.',
      examples: ['The technician worked carefully.', 'The machine operates efficiently.', 'surprisingly easy']
    },
    {
      title: 'Word-form process',
      takeaway: 'Structure → slot → word class → meaning → answer.',
      detail: 'Suffix chỉ là clue, không phải luật tuyệt đối.',
      examples: ['-tion / -ment thường gợi ý noun', '-able / -ive thường gợi ý adjective', '-ly thường gợi ý adverb']
    },
    {
      title: 'Listening Part 1',
      takeaway: 'Nhìn ảnh → người/vật/action/state/location → nghe 4 statements → chọn mô tả đúng.',
      detail: 'Part 1 không chỉ có action; statement có thể mô tả state hoặc arrangement.',
      examples: ['A technician is inspecting a machine.', 'Some shelves are filled with files.', 'Two people are working at a table.', 'A woman is connecting a device to an outlet.']
    }
  ],
  vocabulary: [
    { word:'install', pos:'verb', meaning:'lắp đặt và làm cho thiết bị sẵn sàng sử dụng', chunks:['install equipment','install software'], family:'install → installation → installer → installed', example:'The technician installed the printer.' },
    { word:'inspect', pos:'verb', meaning:'kiểm tra kỹ condition hoặc quality', chunks:['inspect the equipment','inspect something for damage','conduct an inspection'], family:'inspect → inspection → inspector', example:'The machine passed the inspection.' },
    { word:'operate', pos:'verb', meaning:'vận hành / điều khiển máy; hoặc máy hoạt động', chunks:['operate a machine','operate equipment'], family:'operate → operation → operator → operational → operationally', example:'The machine operates efficiently.' },
    { word:'equipment', pos:'noun · uncountable', meaning:'thiết bị cần cho một công việc', chunks:['office equipment','install equipment','use equipment'], family:'equip → equipment → equipped', example:'The office is equipped with new computers.', note:'Không dùng “an equipment” hoặc “equipments”; có thể dùng “a piece of equipment”.' },
    { word:'device', pos:'noun', meaning:'thiết bị được tạo cho một purpose cụ thể', chunks:['electronic device','mobile device','safety device'], family:'device → devices', example:'The technician checked the electronic device.' },
    { word:'shelf', pos:'noun', meaning:'kệ', chunks:['on the shelf','files on the shelves'], family:'shelf → shelves · shelve · shelving', example:'The files are stored on the shelves.' },
    { word:'file cabinet', pos:'compound noun', meaning:'tủ đựng hồ sơ', chunks:['open a file cabinet','store files in a cabinet'], family:'file · filing · filed', example:'The documents were filed by date.' },
    { word:'document', pos:'noun / verb', meaning:'tài liệu / ghi chép, lập hồ sơ', chunks:['sign a document','review a document','supporting documentation'], family:'document → documentation → documented → undocumented', example:'Please review the document before signing it.' }
  ],
  reviewEvidence: [
    { skill:'Subject vs Verb Phrase', previous:'Day 1 nhầm Subject là VP', newEvidence:'R1 đúng: The assistant / has confirmed / the reservation', status:'Improving' },
    { skill:'Object vs Subject Complement', previous:'Day 1 gọi available là Object', newEvidence:'R2 đúng: available = adjective / Subject Complement', status:'Improving' },
    { skill:'Noun vs adjective', previous:'inconvenience thay cho inconvenient', newEvidence:'R3 chọn inconvenient đúng', status:'Improving' },
  ],
  errors: [
    { skill:'Subject vs Verb Phrase', error:'Day 1 nhầm Subject là Verb Phrase', evidence:'Day 2 retrieval đúng', status:'Improving' },
    { skill:'Object vs Complement', error:'Day 1 gọi available là Object', evidence:'Day 2 xác định đúng Complement', status:'Improving' },
    { skill:'Noun vs adjective', error:'inconvenience / inconvenient', evidence:'Day 2 transfer đúng', status:'Improving' },
    { skill:'Adjective vs Adverb', error:'efficient / efficiently còn chưa chắc', evidence:'Q6 đúng nhưng có đánh dấu ?', status:'Monitor' },
    { skill:'attend', error:'hiểu attend = “chú ý”', evidence:'attend a meeting = tham dự cuộc họp', status:'New vocabulary error' },
    { skill:'Listening Part 1', error:'Không có lỗi mới', evidence:'4/4 action/state/location', status:'Positive evidence' },
    { skill:'Pronunciation', error:'Chưa tách được lỗi phoneme cụ thể', evidence:'Recording đọc liên tục, khoảng nghỉ ngắn', status:'Insufficient evidence' }
  ],
  reviewQueue: [
    'attend a meeting = tham dự cuộc họp',
    'pay attention to = chú ý đến',
    'attend to a problem = xử lý / chăm lo một vấn đề',
    'install → installation',
    'inspect → inspection → inspector',
    'operate → operation → operator → operational',
    'equip → equipment → equipped',
    'efficient = adjective vs efficiently = adverb'
  ],
  takeaways: [
    'Subject thường là noun phrase.',
    'Verb Phrase có thể gồm auxiliary + main verb.',
    'Sau linking verb có thể là adjective complement.',
    'efficient = adjective.',
    'efficiently = adverb.',
    'attend a meeting = tham dự cuộc họp.',
    'Part 5: structure → slot → word class → meaning → answer.'
  ]
} as const;

export const day2Practice: readonly Day2PracticeQuestion[] = [
  { id:'d2-r-01', mode:'reading', skill:'word_form_noun', prompt:'The technician completed a detailed _____ before starting the repair.', choices:['inspect','inspection','inspected','inspecting'], correctAnswer:1, explanation:'“a detailed ___” requires a noun; “inspection” fills the noun slot.' },
  { id:'d2-r-02', mode:'reading', skill:'word_form_verb', prompt:'The maintenance team will _____ the new software tonight.', choices:['installation','install','installed','installer'], correctAnswer:1, explanation:'After “will” we need the base verb “install”.' },
  { id:'d2-r-03', mode:'reading', skill:'word_form_adjective', prompt:'The new device is surprisingly _____ to operate.', choices:['ease','easy','easily','easier'], correctAnswer:1, explanation:'After linking verb “is”, “easy” is the adjective complement; “surprisingly” modifies it.' },
  { id:'d2-r-04', mode:'reading', skill:'word_form_adverb', prompt:'The repaired machine is now operating _____.', choices:['efficient','efficiency','efficiently','efficiencies'], correctAnswer:2, explanation:'The blank modifies “operating”, so an adverb is needed.' },
  { id:'d2-r-05', mode:'reading', skill:'equipment_uncountable', prompt:'Which phrase is grammatically correct?', choices:['an equipment','three equipments','a piece of equipment','many equipment'], correctAnswer:2, explanation:'“equipment” is uncountable; “a piece of equipment” is the supported countable expression.' },
  { id:'d2-r-06', mode:'reading', skill:'vocabulary_attend', prompt:'Which sentence means “tham dự cuộc họp”?', choices:['Attend a meeting.','Pay attention to a meeting.','Attend to a meeting.','Inspect a meeting.'], correctAnswer:0, explanation:'“attend a meeting” means participate in / go to a meeting.' },
  { id:'d2-r-07', mode:'reading', skill:'sentence_slot', prompt:'The new _____ took almost three hours to complete.', choices:['install','installation','installed','installing efficiently'], correctAnswer:1, explanation:'“The new ___” needs a noun phrase functioning as Subject.' },
  { id:'d2-r-08', mode:'reading', skill:'part5_process', prompt:'What should you identify first in a word-form Part 5 question?', choices:['The longest answer choice','A familiar suffix','The sentence skeleton and blank function','The Vietnamese translation'], correctAnswer:2, explanation:'Day 2 process begins with structure and slot before word class and meaning.' },

  {
    id:'d2-l-01', mode:'listening', skill:'part1_action',
    imageDescription:'IMAGE PLACEHOLDER: Một kỹ thuật viên đang quỳ cạnh máy in lớn, cửa máy mở và anh ấy đang kiểm tra bộ phận bên trong.',
    audioScript:'A. A technician is inspecting a machine. B. Some documents are being placed on a shelf. C. A customer is opening a file cabinet. D. Several workers are leaving the building.',
    prompt:'Choose the statement that best describes the image.', choices:['A','B','C','D'], correctAnswer:0,
    explanation:'The visible action is a technician inspecting / working on a machine.'
  },
  {
    id:'d2-l-02', mode:'listening', skill:'part1_people',
    imageDescription:'IMAGE PLACEHOLDER: Hai nhân viên ngồi cạnh nhau tại bàn; một người xem documents, người còn lại làm việc trên laptop.',
    audioScript:'A. The employees are carrying some equipment. B. A document is hanging on the wall. C. Two people are working at a table. D. The computers are being installed.',
    prompt:'Choose the statement that best describes the image.', choices:['A','B','C','D'], correctAnswer:2,
    explanation:'Both people are visibly working at the same table.'
  },
  {
    id:'d2-l-03', mode:'listening', skill:'part1_state',
    imageDescription:'IMAGE PLACEHOLDER: Một phòng lưu trữ không có người, với nhiều metal shelves chứa binders, folders và archive boxes.',
    audioScript:'A. Some shelves are filled with files. B. A technician is operating a device. C. People are signing some documents. D. A cabinet is being moved.',
    prompt:'Choose the statement that best describes the image.', choices:['A','B','C','D'], correctAnswer:0,
    explanation:'Part 1 can describe a state: the shelves are filled with files.'
  },
  {
    id:'d2-l-04', mode:'listening', skill:'part1_location_action',
    imageDescription:'IMAGE PLACEHOLDER: Một phụ nữ đang ngồi xổm cạnh thiết bị và cắm electrical plug vào wall outlet.',
    audioScript:'A. The woman is inspecting a document. B. The equipment has been stored in a cabinet. C. The woman is connecting a device to an outlet. D. Some shelves are being installed.',
    prompt:'Choose the statement that best describes the image.', choices:['A','B','C','D'], correctAnswer:2,
    explanation:'The action and location relationship are both visible: connecting a device to an outlet.'
  }
];
