export type PracticeQuestion = {
  id: string;
  mode: 'reading' | 'listening';
  skill: string;
  prompt: string;
  choices: readonly string[];
  correctAnswer: number;
  explanation: string;
  audioScript?: string;
};

export const day1 = {
  day: 1,
  title: 'Sentence Structure & Scheduling',
  summary: 'Nhìn câu theo khối: Subject → Verb / Verb Phrase → Object / Complement.',
  score: { correct: 10, total: 12, accuracy: 83.3 },
  hypothesis: 'Bạn có implicit grammar intuition khá ổn, nhưng explicit sentence parsing knowledge chưa chắc. Đây mới là hypothesis và cần thêm evidence.',
  concepts: [
    {
      title: 'Clause structure',
      takeaway: 'Nhìn câu theo khối, không dịch từng từ.',
      detail: 'Mẫu trọng tâm: Subject → Verb / Verb Phrase → Object / Complement. Không phải câu nào sau verb cũng có object.',
      examples: [
        'The manager confirmed the appointment. → Subject: The manager · Verb: confirmed · Object: the appointment',
        'The meeting room is available. → Subject: The meeting room · Linking verb: is · Subject complement: available'
      ]
    },
    {
      title: 'Noun phrase',
      takeaway: 'Subject thường là cả một noun phrase.',
      detail: 'Noun phrase là nhóm từ hoạt động như một danh từ. Không phải noun đứng gần verb nhất luôn là subject.',
      examples: [
        'the new sales manager',
        'The new receptionist at the front desk answered the phone. → toàn bộ cụm trước answered là Subject noun phrase; head noun = receptionist.'
      ]
    },
    {
      title: 'Declarative sentence',
      takeaway: 'Declarative sentence thường có trật tự Subject + Verb + ...',
      detail: 'Declarative sentence là câu trần thuật dùng để đưa ra statement / thông tin.',
      examples: ['The meeting starts at nine.']
    },
    {
      title: 'Verb phrase',
      takeaway: 'Verb phrase có thể gồm auxiliary + main verb.',
      detail: 'Đừng nhầm noun phrase Subject với verb phrase.',
      examples: [
        'The shipment arrived. → verb phrase: arrived',
        'The assistant has confirmed the reservation. → Subject: The assistant · Verb phrase: has confirmed · Object: the reservation',
        'The documents will be delivered tomorrow. → verb phrase: will be delivered'
      ]
    },
    {
      title: 'Object vs Subject Complement',
      takeaway: 'Object tham gia vào action; Subject complement mô tả hoặc xác định Subject.',
      detail: 'Object thường đi với action verb. Subject complement đứng sau linking verb.',
      examples: [
        'The company hired Mr. Kim. → Mr. Kim = Object',
        'The room is available. → available = Subject Complement',
        'Mr. Kim became the manager. → the manager = Subject Complement'
      ]
    },
    {
      title: 'Linking verbs',
      takeaway: 'Sau linking verb thường cần complement phù hợp.',
      detail: 'Day 1: be, seem, become, look, feel, sound, taste.',
      examples: ['The appointment seems inconvenient. → seems = linking verb · inconvenient = subject complement']
    },
    {
      title: 'Part 5 process',
      takeaway: 'Structure first → meaning second → answer choices third.',
      detail: 'Xác định slot ngữ pháp trước khi nhìn đáp án.',
      examples: ['The receptionist _____ the appointment yesterday. → blank nằm giữa Subject và Object, nên cần verb.']
    }
  ],
  vocabulary: [
    { word:'schedule', pos:'noun / verb', meaning:'lịch / lên lịch', chunks:['schedule a meeting','on schedule'], example:'We scheduled the meeting for Friday.' },
    { word:'arrange', pos:'verb', meaning:'sắp xếp, tổ chức', chunks:['arrange a meeting','arrange for someone to do something'], example:'She arranged a meeting with the supplier.' },
    { word:'confirm', pos:'verb', meaning:'xác nhận', chunks:['confirm a reservation','confirm an appointment','confirm in writing'], example:'Please confirm the appointment by email.' },
    { word:'postpone', pos:'verb', meaning:'hoãn sang thời điểm muộn hơn', chunks:['postpone a meeting','postpone something until Friday'], example:'The meeting was postponed until next week.', note:'postpone = vẫn diễn ra nhưng muộn hơn; cancel = hủy.' },
    { word:'available', pos:'adjective', meaning:'có sẵn / rảnh / có thể sử dụng', chunks:['be available','rooms available','be available for a meeting'], example:'The conference room is available after 3 P.M.', note:'available là Subject Complement trong “The room is available”.' },
    { word:'appointment', pos:'noun', meaning:'cuộc hẹn đã được sắp xếp', chunks:['make an appointment','cancel an appointment','confirm an appointment'], example:"I have an appointment at two o'clock." },
    { word:'attend', pos:'verb', meaning:'tham dự', chunks:['attend a meeting','attend a conference'], example:'Several employees attended the seminar.' },
    { word:'reschedule', pos:'verb', meaning:'đổi lịch sang một thời điểm khác', chunks:['reschedule a meeting','reschedule something for Friday'], example:'Can we reschedule the meeting for next Tuesday?', note:'schedule = lên lịch · reschedule = đổi lịch · postpone = hoãn · cancel = hủy.' }
  ],
  errors: [
    { skill:'Parts of Speech + Subject Complement', error:'inconvenience → inconvenient sau seems', status:'Developing', reason:'seems là linking verb; cần adjective complement mô tả appointment.' },
    { skill:'Subject vs Verb Phrase', error:'Gọi “The assistant” là verb phrase', status:'New error', reason:'The assistant = Subject noun phrase; has confirmed = Verb phrase.' },
    { skill:'Object vs Complement', error:'Gọi available là Object', status:'New error', reason:'is = linking verb; available mô tả Subject nên là Subject Complement.' },
    { skill:'Listening Part 2 — communicative intent', error:'Statement → chọn time response', status:'Monitor', reason:'Mới sai 1 câu; insufficient evidence để gọi là Weak.' }
  ],
  reviewQueue: [
    'Subject / Verb Phrase / Object / Complement',
    'noun vs adjective',
    'inconvenience vs inconvenient',
    'statement-response trong Listening Part 2',
    'retrieval lại toàn bộ 8 từ/chunks Day 1'
  ],
  takeaways: [
    'Subject thường là một noun phrase.',
    'Verb phrase có thể gồm auxiliary + main verb.',
    'Object khác Subject Complement.',
    'Sau linking verb như be / seem / become thường cần complement mô tả/xác định subject.',
    'Làm Part 5: Structure → Meaning → Answer choices.'
  ]
} as const;

export const day1Practice: readonly PracticeQuestion[] = [
  { id:'d1-r-01', mode:'reading', skill:'clause_structure', prompt:'In “The coordinator confirmed the schedule,” which phrase is the object?', choices:['The coordinator','confirmed','the schedule','confirmed the schedule'], correctAnswer:2, explanation:'“the schedule” is the participant affected by the action “confirmed”.' },
  { id:'d1-r-02', mode:'reading', skill:'noun_phrase', prompt:'In “The new assistant near the entrance answered the phone,” which is the Subject noun phrase?', choices:['The new assistant near the entrance','the entrance','answered','the phone'], correctAnswer:0, explanation:'The whole noun phrase before “answered” functions as the Subject.' },
  { id:'d1-r-03', mode:'reading', skill:'verb_phrase', prompt:'What is the Verb Phrase in “The receptionist has confirmed the appointment”?', choices:['The receptionist','has confirmed','the appointment','confirmed the appointment'], correctAnswer:1, explanation:'“has confirmed” contains auxiliary “has” plus main verb “confirmed”.' },
  { id:'d1-r-04', mode:'reading', skill:'subject_complement', prompt:'The conference room seems _____ this afternoon.', choices:['availability','available','availably','avail'], correctAnswer:1, explanation:'“seems” is a linking verb, so an adjective complement is needed.' },
  { id:'d1-r-05', mode:'reading', skill:'parts_of_speech', prompt:'Our afternoon appointment seems _____ to several staff members.', choices:['inconvenience','inconvenient','inconveniently','inconveniences'], correctAnswer:1, explanation:'The adjective “inconvenient” describes “appointment”.' },
  { id:'d1-r-06', mode:'reading', skill:'part5_structure', prompt:'The manager _____ the appointment yesterday.', choices:['confirmation','confirmed','available','appointment'], correctAnswer:1, explanation:'The blank is between Subject and Object; “yesterday” supports a past-tense verb.' },
  { id:'d1-r-07', mode:'reading', skill:'vocabulary', prompt:'Which phrase means changing a meeting to a different time?', choices:['attend a meeting','confirm a meeting','reschedule a meeting','cancel a meeting'], correctAnswer:2, explanation:'“reschedule a meeting” means moving it to a different scheduled time.' },
  { id:'d1-r-08', mode:'reading', skill:'vocabulary', prompt:'Which sentence best shows “postpone” rather than “cancel”?', choices:['The meeting will not take place.','The meeting was moved until next Friday.','The meeting is on schedule.','The meeting was confirmed by email.'], correctAnswer:1, explanation:'Postpone means it is still expected to happen, but later.' },
  { id:'d1-l-01', mode:'listening', skill:'part2_communicative_intent', audioScript:'The schedule has changed again.', prompt:'Choose the most appropriate response.', choices:["I'll check the updated version.",'Two weeks ago.','At the front desk.'], correctAnswer:0, explanation:'A statement about a changed schedule needs a relevant response, not automatically a time answer.' },
  { id:'d1-l-02', mode:'listening', skill:'part2_communicative_intent', audioScript:'The conference room is available after three.', prompt:'Choose the most appropriate response.', choices:["Great, I'll reserve it for four.",'On the second floor.','About thirty people.'], correctAnswer:0, explanation:'The response reacts naturally to availability information.' },
  { id:'d1-l-03', mode:'listening', skill:'part2_communicative_intent', audioScript:'We had to postpone the supplier meeting.', prompt:'Choose the most appropriate response.', choices:['When is it scheduled now?','At the main entrance.','Yes, I attended yesterday.'], correctAnswer:0, explanation:'A postponed meeting naturally prompts a question about the new time.' },
  { id:'d1-l-04', mode:'listening', skill:'part2_communicative_intent', audioScript:'Ms. Lee has confirmed your appointment.', prompt:'Choose the most appropriate response.', choices:['Thanks for letting me know.','At two desks.','For three weeks.'], correctAnswer:0, explanation:'A confirmation statement calls for acknowledgement, not a place or duration answer.' }
];
