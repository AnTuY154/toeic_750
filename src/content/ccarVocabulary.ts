export type CcarVocabularyTerm = {
  id: string;
  domain: 1 | 2 | 3 | 4 | 5;
  task: string;
  term: string;
  meaning: string;
  examNote: string;
  kind: 'core' | 'trap';
};

export const ccarVocabulary: readonly CcarVocabularyTerm[] = [
  // Domain 1 — Agentic Architecture & Orchestration
  { id:'d1-agentic-loop', domain:1, task:'1.1', term:'agentic loop', meaning:'vòng lặp thực thi cốt lõi của agent', examNote:'Điều khiển bằng stop_reason; không dùng text presence hay câu “I am done” làm tín hiệu kết thúc.', kind:'core' },
  { id:'d1-stop-reason', domain:1, task:'1.1', term:'stop_reason', meaning:'trường cho biết vì sao response dừng', examNote:'Tín hiệu authoritative cho loop control; end_turn = hoàn tất, tool_use = còn tiếp tục.', kind:'core' },
  { id:'d1-tool-use', domain:1, task:'1.1', term:'tool_use', meaning:'Claude yêu cầu gọi một hoặc nhiều tool', examNote:'Thực thi tool, append tool result vào history rồi gửi lại cho Claude.', kind:'core' },
  { id:'d1-end-turn', domain:1, task:'1.1', term:'end_turn', meaning:'Claude đã hoàn tất lượt công việc', examNote:'Đây là tín hiệu để thoát agentic loop và trả final response.', kind:'core' },
  { id:'d1-model-driven', domain:1, task:'1.1', term:'model-driven decision-making', meaning:'model tự chọn tool dựa trên context', examNote:'Ưu tiên linh hoạt; nhưng high-stakes compliance có thể cần enforcement bằng code.', kind:'core' },
  { id:'d1-hub-spoke', domain:1, task:'1.2', term:'hub-and-spoke', meaning:'kiến trúc coordinator ở trung tâm, subagents ở các nhánh', examNote:'Trong cách thi này, communication giữa subagents đi qua coordinator.', kind:'core' },
  { id:'d1-coordinator', domain:1, task:'1.2', term:'coordinator agent', meaning:'agent trung tâm phân rã task, gọi subagent và tổng hợp kết quả', examNote:'Coverage gap thường phải truy về decomposition/input của coordinator.', kind:'core' },
  { id:'d1-subagent-isolation', domain:1, task:'1.2', term:'subagent isolation', meaning:'mỗi subagent có context tách biệt', examNote:'Không tự inherit coordinator history hay kết quả subagent khác nếu không được truyền rõ.', kind:'trap' },
  { id:'d1-context-passing', domain:1, task:'1.3', term:'context passing', meaning:'truyền context cần thiết vào prompt của subagent', examNote:'Thông tin subagent cần phải được coordinator truyền explicit.', kind:'core' },
  { id:'d1-task-tool', domain:1, task:'1.3', term:'Task / Agent tool', meaning:'cơ chế coordinator dùng để spawn subagents', examNote:'Guide thi gọi Task; Claude Code hiện dùng Agent và Task vẫn là alias.', kind:'trap' },
  { id:'d1-allowed-tools', domain:1, task:'1.3', term:'allowedTools', meaning:'danh sách tool coordinator/subagent được phép dùng', examNote:'Coordinator phải có Task/Agent trong allowedTools mới spawn được subagent.', kind:'core' },
  { id:'d1-prompt-guidance', domain:1, task:'1.4', term:'prompt-based guidance', meaning:'hướng dẫn hành vi bằng prompt', examNote:'Có tính probabilistic; không nên dùng làm enforcement duy nhất cho bước high-stakes.', kind:'trap' },
  { id:'d1-programmatic-enforcement', domain:1, task:'1.4', term:'programmatic enforcement', meaning:'enforce bằng gate, hook hoặc code-level check', examNote:'Deterministic; dùng khi lỗi một lần có thể gây financial/security/compliance impact.', kind:'core' },
  { id:'d1-pretooluse', domain:1, task:'1.5', term:'PreToolUse hook', meaning:'hook chạy trước khi tool thực thi', examNote:'Có thể block, modify hoặc redirect tool call trước execution.', kind:'core' },
  { id:'d1-posttooluse', domain:1, task:'1.5', term:'PostToolUse hook', meaning:'hook chạy sau khi tool thực thi', examNote:'Dùng để transform/normalise tool result trước khi model đọc.', kind:'core' },
  { id:'d1-prompt-chaining', domain:1, task:'1.6', term:'fixed sequential pipeline / prompt chaining', meaning:'pipeline các bước cố định chạy theo thứ tự', examNote:'Hợp task predictable; không thích nghi khi intermediate result làm thay đổi kế hoạch.', kind:'core' },
  { id:'d1-adaptive-decomposition', domain:1, task:'1.6', term:'dynamic adaptive decomposition', meaning:'phân rã task thay đổi theo điều phát hiện trong quá trình làm', examNote:'Hợp investigation mở, legacy exploration, security audit và research.', kind:'core' },
  { id:'d1-fork-session', domain:1, task:'1.7', term:'fork_session', meaning:'tạo nhánh session độc lập từ cùng baseline', examNote:'Dùng để so sánh hướng đi khác nhau; không dùng chỉ để tiếp tục cùng một investigation.', kind:'trap' },
  { id:'d1-stale-context', domain:1, task:'1.7', term:'stale context', meaning:'context cũ không còn phản ánh trạng thái hiện tại', examNote:'Nếu files đã đổi mạnh, resume nguyên session có thể mang tool results lỗi thời.', kind:'trap' },

  // Domain 2 — Tool Design & MCP Integration
  { id:'d2-tool-description', domain:2, task:'2.1', term:'tool description', meaning:'mô tả purpose, input, boundary và limitation của tool', examNote:'Là cơ chế chính model dùng để chọn tool; weak descriptions gây misrouting.', kind:'core' },
  { id:'d2-misrouting', domain:2, task:'2.1', term:'tool misrouting', meaning:'agent chọn nhầm tool cho intent của user', examNote:'Nếu toolkit chưa overload và descriptions mơ hồ, fix đầu tiên là sharpen descriptions.', kind:'core' },
  { id:'d2-tool-splitting', domain:2, task:'2.1', term:'tool splitting', meaning:'tách tool quá rộng thành các tool purpose-specific', examNote:'Giúp model phân biệt rõ input/output contract của từng capability.', kind:'core' },
  { id:'d2-iserror', domain:2, task:'2.2', term:'isError', meaning:'flag MCP đánh dấu tool execution thất bại', examNote:'Phải phân biệt error response với successful empty result.', kind:'core' },
  { id:'d2-transient-error', domain:2, task:'2.2', term:'transient error', meaning:'lỗi tạm thời như timeout, rate limit, service unavailable', examNote:'Có thể retry sau khi hệ thống hồi phục.', kind:'core' },
  { id:'d2-validation-error', domain:2, task:'2.2', term:'validation error', meaning:'input sai format, thiếu field hoặc ngoài range', examNote:'Retry chỉ có ý nghĩa sau khi sửa input.', kind:'core' },
  { id:'d2-business-error', domain:2, task:'2.2', term:'business error', meaning:'request hợp lệ về kỹ thuật nhưng vi phạm business rule', examNote:'Không retry cùng request; cần alternative workflow hoặc escalation.', kind:'trap' },
  { id:'d2-permission-error', domain:2, task:'2.2', term:'permission error', meaning:'caller thiếu quyền hoặc credential cần thiết', examNote:'Retry bằng cùng quyền không giải quyết được; cần principal/credential khác hoặc escalation.', kind:'trap' },
  { id:'d2-isretryable', domain:2, task:'2.2', term:'isRetryable', meaning:'cho biết retry có bất kỳ đường nào dẫn tới success hay không', examNote:'true không có nghĩa “gọi lại y nguyên”; validation error phải sửa input trước.', kind:'trap' },
  { id:'d2-access-empty', domain:2, task:'2.2', term:'access failure vs valid empty result', meaning:'không truy cập được nguồn dữ liệu vs truy vấn thành công nhưng không có kết quả', examNote:'Đây là distinction thi trực tiếp; empty success không nên retry.', kind:'trap' },
  { id:'d2-tool-overload', domain:2, task:'2.3', term:'tool overload', meaning:'quá nhiều tool làm giảm selection reliability', examNote:'Guide khuyến nghị scope khoảng 4–5 tools cho mỗi agent role.', kind:'core' },
  { id:'d2-consolidation', domain:2, task:'2.3', term:'parameterised tool consolidation', meaning:'gộp nhiều near-duplicate tools thành một tool có parameter/enum', examNote:'Hợp khi tools là biến thể cùng một loại thao tác, không phải các role khác nhau.', kind:'trap' },
  { id:'d2-mcp', domain:2, task:'2.4', term:'MCP (Model Context Protocol)', meaning:'giao thức kết nối Claude với hệ thống và tool bên ngoài', examNote:'MCP server có thể cung cấp tools và resources cho agent.', kind:'core' },
  { id:'d2-mcp-project', domain:2, task:'2.4', term:'.mcp.json', meaning:'project-level MCP configuration', examNote:'Version-controlled và dùng chung cho team; secrets nên đi qua environment variable expansion.', kind:'core' },
  { id:'d2-mcp-user', domain:2, task:'2.4', term:'~/.claude.json', meaning:'user-level MCP configuration', examNote:'Personal, không version-controlled, phù hợp server thử nghiệm/cá nhân.', kind:'core' },
  { id:'d2-env-expansion', domain:2, task:'2.4', term:'environment variable expansion', meaning:'tham chiếu secret bằng cú pháp như ${TOKEN}', examNote:'Giữ credential ra khỏi repo trong khi vẫn share config.', kind:'core' },
  { id:'d2-mcp-resources', domain:2, task:'2.4', term:'MCP resources', meaning:'content catalogues agent có thể thấy mà không cần exploratory tool call', examNote:'Resources cho biết data nào tồn tại; tools dùng để hành động lên data.', kind:'core' },
  { id:'d2-grep-glob', domain:2, task:'2.5', term:'Grep vs Glob', meaning:'Grep tìm nội dung file; Glob tìm file theo path/name pattern', examNote:'Đây là core distinction của Task 2.5 và là exam trap phổ biến.', kind:'trap' },

  // Domain 3 — Claude Code Configuration & Workflows
  { id:'d3-user-claudemd', domain:3, task:'3.1', term:'user-level CLAUDE.md', meaning:'instruction cá nhân tại ~/.claude/CLAUDE.md', examNote:'Không được share qua git; dành cho preference cá nhân.', kind:'core' },
  { id:'d3-project-claudemd', domain:3, task:'3.1', term:'project-level CLAUDE.md', meaning:'instruction chung của project trong repo', examNote:'Dùng cho standards team-wide và được version-control.', kind:'core' },
  { id:'d3-directory-claudemd', domain:3, task:'3.1', term:'directory-level CLAUDE.md', meaning:'instruction áp dụng khi làm trong một subdirectory cụ thể', examNote:'Hợp cho package-specific conventions.', kind:'core' },
  { id:'d3-concatenation', domain:3, task:'3.1', term:'concatenation, not precedence', meaning:'các CLAUDE.md phù hợp được ghép vào context, không override cứng nhau', examNote:'Đừng chọn đáp án “scope cụ thể hơn luôn thắng”; conflict không có deterministic winner.', kind:'trap' },
  { id:'d3-settings', domain:3, task:'3.1', term:'settings.json', meaning:'client-enforced settings layer', examNote:'Dùng cho rule cần hard enforcement; khác CLAUDE.md là guidance.', kind:'trap' },
  { id:'d3-skills', domain:3, task:'3.2', term:'Skills system', meaning:'hệ thống unified cho reusable Claude Code workflows', examNote:'.claude/skills/ là canonical path; .claude/commands/ vẫn hỗ trợ backward compatibility.', kind:'core' },
  { id:'d3-skillmd', domain:3, task:'3.2', term:'SKILL.md', meaning:'entrypoint file của một skill', examNote:'Skill dùng directory riêng; flat file đặt trực tiếp trong .claude/skills/ không tạo command.', kind:'trap' },
  { id:'d3-context-fork', domain:3, task:'3.2', term:'context: fork', meaning:'frontmatter option để chạy skill trong context fork', examNote:'Một trong các YAML frontmatter options cùng allowed-tools và argument-hint.', kind:'core' },
  { id:'d3-path-rules', domain:3, task:'3.3', term:'path-specific rules', meaning:'rules chỉ load khi file đang edit match paths', examNote:'Đặt trong .claude/rules/ và dùng YAML paths glob patterns.', kind:'core' },
  { id:'d3-glob-pattern', domain:3, task:'3.3', term:'glob pattern', meaning:'mẫu path như **/*.test.tsx', examNote:'Dùng để conditionally load convention cho file type nằm rải ở nhiều thư mục.', kind:'core' },
  { id:'d3-plan-mode', domain:3, task:'3.4', term:'Plan Mode', meaning:'chế độ explore và design trước khi sửa file', examNote:'Dùng cho task lớn, nhiều approach, architectural decision, multi-file hoặc cần exploration.', kind:'core' },
  { id:'d3-direct-execution', domain:3, task:'3.4', term:'Direct Execution', meaning:'thực thi thay đổi trực tiếp khi scope rõ và approach đã biết', examNote:'Hợp single-file / single-function / well-scoped changes.', kind:'core' },
  { id:'d3-concrete-examples', domain:3, task:'3.5', term:'concrete input/output examples', meaning:'ví dụ input và expected output cụ thể', examNote:'Technique đầu tiên khi model diễn giải transformation không nhất quán.', kind:'core' },
  { id:'d3-test-driven', domain:3, task:'3.5', term:'test-driven iteration', meaning:'viết test trước rồi dùng test failure làm feedback', examNote:'Hợp complex transformations vì feedback cụ thể và unambiguous.', kind:'core' },
  { id:'d3-interview-pattern', domain:3, task:'3.5', term:'interview pattern', meaning:'yêu cầu Claude hỏi requirement/constraint trước khi implement', examNote:'Dùng khi developer chưa quen domain; đừng nhầm với concrete examples.', kind:'trap' },
  { id:'d3-print-flag', domain:3, task:'3.6', term:'-p / --print', meaning:'non-interactive print mode của Claude Code', examNote:'Trong CI job bị hang chờ input, đây là fact cần nhớ trực tiếp.', kind:'trap' },
  { id:'d3-output-json', domain:3, task:'3.6', term:'--output-format json', meaning:'xuất run trong JSON envelope', examNote:'Dùng trong CI để output machine-parseable.', kind:'core' },
  { id:'d3-json-schema', domain:3, task:'3.6', term:'--json-schema', meaning:'validate final output theo JSON Schema', examNote:'Dùng cùng print mode cho structured output trong CI.', kind:'core' },
  { id:'d3-independent-review', domain:3, task:'3.6', term:'independent review instance', meaning:'review bằng Claude invocation tách khỏi generation session', examNote:'Giảm bias do model giữ reasoning context của chính quyết định trước đó.', kind:'core' },

  // Domain 4 — Prompt Engineering & Structured Output
  { id:'d4-explicit-criteria', domain:4, task:'4.1', term:'explicit categorical criteria', meaning:'tiêu chí rõ ràng nêu chính xác flag gì và skip gì', examNote:'Tốt hơn hướng dẫn mơ hồ như “be conservative” hay “high confidence only”.', kind:'core' },
  { id:'d4-false-positive', domain:4, task:'4.1', term:'false positive', meaning:'hệ thống flag một vấn đề nhưng thực tế không phải lỗi', examNote:'False positive cao ở một category có thể làm mất trust với toàn bộ output.', kind:'core' },
  { id:'d4-few-shot', domain:4, task:'4.2', term:'few-shot prompting', meaning:'đưa vài ví dụ input/output để model bắt pattern', examNote:'Ưu tiên khi formatting/judgement/extraction không nhất quán dù prompt đã chi tiết.', kind:'core' },
  { id:'d4-tool-structured', domain:4, task:'4.3', term:'tool_use structured output', meaning:'dùng tool schema để constrain output structure', examNote:'Reliable hơn prompt-only JSON vì schema loại bỏ lỗi cú pháp JSON.', kind:'core' },
  { id:'d4-tool-choice-auto', domain:4, task:'4.3', term:'tool_choice: auto', meaning:'model tự quyết định gọi tool hay trả text', examNote:'Dùng khi conversational response vẫn là lựa chọn hợp lệ.', kind:'core' },
  { id:'d4-tool-choice-any', domain:4, task:'4.3', term:'tool_choice: any', meaning:'model bắt buộc gọi một tool nhưng tự chọn tool nào', examNote:'Hợp khi có nhiều extraction schemas và document type chưa biết.', kind:'core' },
  { id:'d4-tool-choice-specific', domain:4, task:'4.3', term:'specific tool_choice', meaning:'bắt model gọi đúng một named tool', examNote:'Maximum control; hợp mandatory first step.', kind:'core' },
  { id:'d4-retry-feedback', domain:4, task:'4.4', term:'retry-with-error-feedback', meaning:'retry kèm source, failed output và validation error cụ thể', examNote:'Tốt hơn naive retry vì model biết chính xác phải sửa điểm nào.', kind:'core' },
  { id:'d4-retry-boundary', domain:4, task:'4.4', term:'retry effectiveness boundary', meaning:'ranh giới loại lỗi mà retry có thể tự sửa', examNote:'Format/structure/misplacement/math có thể hợp retry; thiếu source data thì retry không tạo ra data mới.', kind:'trap' },
  { id:'d4-message-batches', domain:4, task:'4.5', term:'Message Batches API', meaning:'batch processing tối ưu chi phí cho workload không cần kết quả ngay', examNote:'Có processing window tới 24h và không có latency SLA đảm bảo.', kind:'core' },
  { id:'d4-sync-vs-batch', domain:4, task:'4.5', term:'synchronous vs batch', meaning:'blocking workflow cần sync; latency-tolerant workflow có thể batch', examNote:'Pre-merge CI checks không nên chuyển sang batch chỉ để tiết kiệm chi phí.', kind:'trap' },
  { id:'d4-custom-id', domain:4, task:'4.5', term:'custom_id', meaning:'ID để correlate request/response trong batch', examNote:'Dùng để match từng request với kết quả tương ứng.', kind:'core' },
  { id:'d4-self-review', domain:4, task:'4.6', term:'self-review limitation', meaning:'model review output của chính nó trong cùng session thường thiên về xác nhận quyết định cũ', examNote:'Separate independent instance hiệu quả hơn cho review chất lượng cao.', kind:'trap' },
  { id:'d4-multi-pass', domain:4, task:'4.6', term:'multi-pass review', meaning:'chia review thành các pass tập trung', examNote:'Per-file local pass rồi cross-file integration pass để giảm attention dilution.', kind:'core' },
  { id:'d4-attention-dilution', domain:4, task:'4.6', term:'attention dilution', meaning:'độ sâu review không đồng đều khi quá nhiều item trong một pass', examNote:'Larger context window không tự giải quyết; cần focused passes.', kind:'trap' },

  // Domain 5 — Context Management & Reliability
  { id:'d5-context-window', domain:5, task:'5.1', term:'context window management', meaning:'quản lý thông tin được giữ trong context qua các turn/task', examNote:'Ảnh hưởng trực tiếp tới độ chính xác của long-running systems.', kind:'core' },
  { id:'d5-progressive-summary', domain:5, task:'5.1', term:'progressive summarisation trap', meaning:'tóm tắt dần history làm mất chi tiết quan trọng', examNote:'Numerical values, dates, IDs và expectations dễ bị rơi khỏi summary.', kind:'trap' },
  { id:'d5-case-facts', domain:5, task:'5.1', term:'persistent case facts block', meaning:'structured block lưu facts quan trọng và không bị summarise', examNote:'Giữ amounts, dates, order IDs, statuses ổn định qua nhiều turn.', kind:'core' },
  { id:'d5-lost-middle', domain:5, task:'5.1', term:'lost in the middle', meaning:'thông tin ở giữa long context dễ bị model bỏ sót hoặc giảm trọng số', examNote:'Đưa key findings lên đầu và dùng section boundaries rõ.', kind:'core' },
  { id:'d5-result-trimming', domain:5, task:'5.1', term:'tool result trimming', meaning:'giữ lại chỉ fields liên quan từ verbose tool output', examNote:'Giảm token/context pollution qua nhiều turn.', kind:'core' },
  { id:'d5-escalation', domain:5, task:'5.2', term:'escalation', meaning:'chuyển case cho human reviewer/agent', examNote:'Valid triggers: user yêu cầu human, policy gap/exception, hoặc agent không thể tiến triển có ý nghĩa.', kind:'core' },
  { id:'d5-policy-gap', domain:5, task:'5.2', term:'policy gap vs policy violation', meaning:'policy im lặng về case vs request trái rule đã có', examNote:'Gap cần human judgement; violation có documented answer nên không tự động cần escalation.', kind:'trap' },
  { id:'d5-sentiment-escalation', domain:5, task:'5.2', term:'sentiment-based escalation', meaning:'escalate chỉ vì khách frustrate/negative', examNote:'Là anti-pattern; sentiment không phản ánh case complexity.', kind:'trap' },
  { id:'d5-self-confidence', domain:5, task:'5.2', term:'self-reported confidence', meaning:'model tự cho điểm confidence', examNote:'Không nên dùng raw score làm escalation trigger vì calibration kém.', kind:'trap' },
  { id:'d5-disambiguation', domain:5, task:'5.2', term:'disambiguation', meaning:'xin thêm identifier khi có nhiều record phù hợp', examNote:'Không tự đoán record đúng khi customer matching mơ hồ.', kind:'core' },
  { id:'d5-error-propagation', domain:5, task:'5.3', term:'structured error propagation', meaning:'truyền failure type, attempted action, partial results và alternatives lên coordinator', examNote:'Cho phép recovery có chủ đích thay vì fail silently hoặc kill cả workflow.', kind:'core' },
  { id:'d5-silent-suppression', domain:5, task:'5.3', term:'silent suppression', meaning:'biến failure thành empty success', examNote:'Anti-pattern nguy hiểm vì coordinator tưởng tìm không thấy data thay vì biết tool đã fail.', kind:'trap' },
  { id:'d5-workflow-termination', domain:5, task:'5.3', term:'workflow termination on single failure', meaning:'dừng toàn bộ pipeline vì một subagent fail', examNote:'Quá cực đoan; structured error + partial results thường tốt hơn.', kind:'trap' },
  { id:'d5-context-degradation', domain:5, task:'5.4', term:'context degradation', meaning:'model mất dần grip với findings cũ khi exploration output tích tụ', examNote:'Không đơn thuần là hết token; larger window không tự chữa được.', kind:'core' },
  { id:'d5-scratchpad', domain:5, task:'5.4', term:'scratchpad file', meaning:'file ngoài conversation lưu key findings khi exploration dài', examNote:'Mitigation chính để findings không bị buried trong context.', kind:'core' },
  { id:'d5-context-isolation', domain:5, task:'5.4', term:'context isolation via subagents', meaning:'delegate investigation để main agent không chứa toàn bộ verbose discovery output', examNote:'Giá trị chính không chỉ parallelism mà là giữ coordinator context sạch.', kind:'core' },
  { id:'d5-aggregate-metrics', domain:5, task:'5.5', term:'aggregate metrics trap', meaning:'overall accuracy cao che khuất segment có accuracy rất thấp', examNote:'Phải validate theo document type và field segment trước automation.', kind:'trap' },
  { id:'d5-stratified-sampling', domain:5, task:'5.5', term:'stratified random sampling', meaning:'sample đại diện từ từng stratum để human verify', examNote:'Phải sample cả high-confidence automated items để phát hiện error pattern mới.', kind:'core' },
  { id:'d5-confidence-calibration', domain:5, task:'5.5', term:'confidence calibration', meaning:'map raw model confidence sang actual observed accuracy', examNote:'Cần labelled validation set / ground truth trước khi dùng threshold để route.', kind:'core' },
  { id:'d5-ground-truth', domain:5, task:'5.5', term:'ground truth', meaning:'dữ liệu nhãn đúng đã biết dùng để đo actual accuracy', examNote:'Là nền để xây calibration curve và calibrated thresholds.', kind:'core' },
  { id:'d5-provenance', domain:5, task:'5.6', term:'information provenance', meaning:'khả năng truy ngược mỗi claim về source và temporal context', examNote:'Attribution phải sống xuyên suốt synthesis pipeline.', kind:'core' },
  { id:'d5-claim-source', domain:5, task:'5.6', term:'claim-source mapping', meaning:'structured mapping giữa claim và source hỗ trợ claim đó', examNote:'Nên giữ source URL, document, excerpt và publication date cùng finding.', kind:'core' },
  { id:'d5-conflict', domain:5, task:'5.6', term:'conflicting sources', meaning:'nhiều credible sources đưa số liệu khác nhau', examNote:'Không tự chọn/average một value; giữ cả hai cùng attribution/context.', kind:'trap' },
  { id:'d5-temporal', domain:5, task:'5.6', term:'temporal awareness', meaning:'giữ publication/data dates để hiểu khác biệt theo thời gian', examNote:'Hai con số khác nhau có thể là trend theo thời gian chứ không phải contradiction.', kind:'core' },
] as const;

export const ccarDomains = [
  { domain: 1 as const, title: 'Agentic Architecture & Orchestration' },
  { domain: 2 as const, title: 'Tool Design & MCP Integration' },
  { domain: 3 as const, title: 'Claude Code Configuration & Workflows' },
  { domain: 4 as const, title: 'Prompt Engineering & Structured Output' },
  { domain: 5 as const, title: 'Context Management & Reliability' },
] as const;
