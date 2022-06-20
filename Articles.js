var articles = [
	{
		year		: 2022,
		date 		: "0612",
		title       : "HEAPSTER 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/HEAPSTER",
		text		: "論文閱讀筆記，HEAPSTER 是專門檢測單片韌體上關於 Heap 的漏洞。</br>\
					Paper note. HEAPSTER is a system for analyzing heap for monolithic firmware images."
	},{
		year		: 2022,
		date 		: "0502",
		title       : "Vulnerability Detection for Linux IoT App with Symbolic Execution 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/SymbolicExecutionVulnerabilityDetection",
		text		: "論文閱讀筆記，提出一個基於符號執行的檢測方式，可用於輕量 IoT 應用程式。</br>\
					Paper note. Propose a vulnerability detection algorithm via symbolic execution for Linux IoT Apps."
	},{
		year		: 2022,
		date 		: "0323",
		title       : "FirmFuzz 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/FirmFuzz",
		text		: "論文閱讀筆記，FirmFuzz 是一個自動化檢測 IoT 韌體的系統。</br>\
					Paper note. Firmware is a automatic analysis system for IoT firmware."
	},{
		year		: 2022,
		date 		: "0220",
		title       : "Feedback-Enhanced Fuzzing for Linux-based IoT Firmware 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/FeedbackEnhancedFuzzing",
		text		: "論文閱讀筆記，提出一個回饋增強型的 Fuzzing 可用於 Linux IoT 韌體。</br>\
					Paper note. Propose a feedback-enhanced fuzzing scheme for Linux-based firmwares."
	},{
		year		: 2022,
		date 		: "0207",
		title       : "argXtract 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/argXtract",
		text		: "論文閱讀筆記，argXtract 是一個對 Cortex-M 檔案自動化靜態分析的框架。</br>\
					Paper note. argXtract is a automatic static analysis framework for Cortex-M binary."
	},{
		year		: 2022,
		date 		: "0116",
		title       : "Fuzzware 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/Fuzzware",
		text		: "論文閱讀筆記，Fuzzware 是利用符號執行提高 IoT 模擬和 Fuzzing 效率的系統。</br>\
					Paper note. Fuzzware is a effective firmware emulation and fuzzing system which using symbolic execution."
	},{
		year		: 2022,
		date 		: "0114",
		title       : "Branch Predictor based on Global History 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/BranchPredictor",
		text		: "論文閱讀筆記，設計基於 Global History 的高效分支預測器。</br>\
					Paper note. Design a high performance branch predictor based on global history."
	},{
		year		: 2021,
		date 		: "1207",
		title       : "Oasis 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/Oasis",
		text		: "論文閱讀筆記，提出名為 Oasis 的 IoT 系統模擬架構。</br>\
					Paper note. Oasis can emulate IoT devices via dockers."
	},{
		year		: 2021,
		date 		: "1122",
		title       : "DIFT Architecture to RISC-V Core 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/DIFTforRISCV",
		text		: "論文閱讀筆記，設計一種支援 DIFT 的 RISC-V 架構。</br>\
					Paper note. Design a DIFT architecture on RISC-V."
	},{
		year		: 2021,
		date 		: "1031",
		title       : "Greybox Fuzzing for Linux-based IoT Programs 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/GreyboxFuzzing",
		text		: "論文閱讀筆記，提出一種可用於 Linux-based 程式的灰箱模糊測試。</br>\
					Paper note. Propose a greybox fuzzing test framework for Linux-based IoT Programs."
	},{
		year		: 2021,
		date 		: "1001",
		title       : "Hackme CTF write-up",
		title_HTML	: "https://hackmd.io/@Zero871015/Hackme",
		text		: "CTF 練習網 hackme 的解題紀錄。</br>\
					Write-ups for Hackme CTF."
	},{
		year		: 2021,
		date 		: "0926",
		title       : "Identifying Mirai-Exploitable Vulnerabilities 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/IdentifyingMirai",
		text		: "論文閱讀筆記，提取各種 Firmware 資訊判斷是否容易被 Mirai 攻擊。</br>\
					Paper note. Extract infomation from firmware to identify the sensitivity of Mirai."
	},{
		year		: 2021,
		date 		: "0909",
		title       : "uEmu 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/uEmu",
		text		: "論文閱讀筆記，uEmu 是一個利用動態符號執行來模擬 MCU 的技術。</br>\
					Paper note. uEmu is a technology to emulate MCU via concolic execution."
	},{
		year		: 2021,
		date 		: "0907",
		title       : "Hybrid Detection 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/HybridDetection",
		text		: "論文閱讀筆記，提出一種混和動靜態的漏洞檢測法。</br>\
					Paper note. Hybrid detection for IoT vulnerabilities."
	},{
		year		: 2021,
		date 		: "0825",
		title       : "FIRMNANO 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/FIRMNANO",
		text		: "論文閱讀筆記，FIRMNANO 是一個用於微控制器模糊測試的框架。</br>\
					Paper note. FIRMNANO is a fuzzing framework for MCU."
	},{
		year		: 2021,
		date 		: "0808",
		title       : "Firmware Fuzzing 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/FirmwareFuzzing",
		text		: "論文閱讀筆記，討論各種在 Firmware 上的 fuzzing 技術。</br>\
					Paper note. Discuss the fuzzing tech for firmware."
	},{
		year		: 2021,
		date 		: "0802",
		title       : "CVE-2019–17664 研究探討",
		title_HTML	: "https://zero871015.medium.com/cve-2019-17664-%E7%A0%94%E7%A9%B6%E6%8E%A2%E8%A8%8E-7b12fd0a03b8",
		text		: "我 AIS3 的專題研究。</br>\
					My project during AIS3."
	},{
		year		: 2021,
		date 		: "0713",
		title       : "Does Every Second Count? 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/Time-based-Sandboxes",
		text		: "論文閱讀筆記，探討執行時間對沙盒的影響。</br>\
					Paper note. Discuss the effect of execution time in sandboxes."
	},{
		year		: 2021,
		date 		: "0608",
		title       : "P2IM 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/P2IM",
		text		: "論文閱讀筆記，P2IM 是一個用於模擬 MCU 設備的技術。</br>\
					Paper note. P2IM is a technology to emulate MCU."
	},{
		year		: 2021,
		date 		: "0603",
		title       : "AIS3 pre-exam 2021 write-up",
		title_HTML	: "https://hackmd.io/@Zero871015/AIS3_pre-exam_2021",
		text		: "AIS3 事前測驗的部分 write-up</br>\
					AIS3 pre-exam 2021 write-up (only part problems)."
	},{
		year		: 2021,
		date 		: "0325",
		title       : "關於找指導教授這事",
		title_HTML	: "https://zero871015.medium.com/%E9%97%9C%E6%96%BC%E6%89%BE%E6%8C%87%E5%B0%8E%E6%95%99%E6%8E%88%E9%80%99%E4%BA%8B-506c2277bb87",
		text		: "碩士指導教授指南</br>\
					Guide of  finding advisor for graduate student."
	},{
		year		: 2021,
		date 		: "0125",
		title       : "FirmAE 論文筆記",
		title_HTML	: "https://hackmd.io/@Zero871015/FirmAE",
		text		: "論文閱讀筆記，FirmAE 是一個自動化模擬 Firmware 的系統。</br>\
					Paper note. FirmAE is a system to automatic emulate firmware."
	},{
		year		: 2020,
		date 		: "1027",
		title       : "CTF-RSA",
		title_HTML	: "https://hackmd.io/@Zero871015/RSA",
		text		: "CTF中與RSA有關的攻擊手法整理。</br>\
					RSA attack in CTF."
	},{
		year		: 2020,
		date 		: "0616",
		title       : "Compiler Note",
		title_HTML	: "https://hackmd.io/@Zero871015/compiler",
		text		: "編譯器課程筆記，未來考慮補上編譯器實作教學</br>\
					Note of compiler. Consider implementing compiler with lex/yacc in the future."
	},{
		year		: 2019,
		date 		: "1110",
		title       : "OS Note",
		title_HTML	: "https://hackmd.io/@Zero871015/OS-Note",
		text		: "作業系統筆記，內容可能和研所考試比起來少了一點</br>\
					Note of operation system."
	},{
		year		: 2019,
		date 		: "1024",
		title       : "Information Security #2",
		title_HTML	: "https://hackmd.io/@Zero871015/ISNote-2",
		text		: "資安第二招－－DES加密法</br>\
					DES!"
	},{
		year		: 2019,
		date 		: "1004",
		title       : "Information Security #1",
		title_HTML	: "https://hackmd.io/@Zero871015/ISNote-1",
		text		: "資安第一招－－對稱式加密</br>\
					Classical encryption."
	},{
		year		: 2019,
		date 		: "1003",
		title       : "ML/DL #2",
		title_HTML	: "https://hackmd.io/@Zero871015/pythonNote-2",
		text		: "資料前處理和線性回歸之類的</br>\
					Data preprocessing and LR."
	},{
		year		: 2019,
		date 		: "0928",
		title       : "ML/DL #1",
		title_HTML	: "https://hackmd.io/@Zero871015/pythonNote-1",
		text		: "新出茅蘆的機器學習勇者</br>\
					Rookie is me."
	},{
		year		: 2019,
		date 		: "0912",
		title       : "Programming Languages",
		title_HTML	: "https://hackmd.io/@Zero871015/PLNote-1",
		text		: "程式語言的筆記，雖然寫了#1但應該不會有後面了，因為有夠無聊</br>\
					Note of programming languages class. written \"#1\" but no sequel because that is so bored."
	},{
		year		: 2019,
		date 		: "0608",
		title       : "FFT and IFFT",
		title_HTML	: "https://hackmd.io/@Zero871015/FFT",
		text		: "圖像快速傅立葉轉換和反快速傅立葉的練習</br>\
					Practice FFT and IFFT on image."
	},{
		year		: 2019,
		date 		: "0606",
		title       : "Tutorial of Git",
		title_HTML	: "https://hackmd.io/@Zero871015/GitTutorial",
		text		: "GitHub和Git Bash的使用教學，蠻廢的</br>\
					Tutorial of GitHub and Git. A little suck."
	},{
		year		: 2019,
		date 		: "0605",
		title       : "【Engineering Mathematics】 Ordinary Differential Equations",
		title_HTML	: "https://hackmd.io/@Zero871015/ODE-Note",
		text		: "一階微分方程筆記</br>\
					Note of ODE."
	},{
		year		: 2019,
		date 		: "0530",
		title       : "【Hardware security】 Meltdown and Spectre",
		title_HTML	: "https://hackmd.io/s/rkbb3Ua6N",
		text		: "簡單介紹硬體安全和Meltdown與Spectre兩個硬體漏洞</br>\
					Simply introduce hardware security and two vulnerabilities, meltdown and spectre."
	},{
		year		: 2019,
		date 		: "0428",
		title       : "LeetCode problem solving",
		title_HTML	: "https://hackmd.io/@Zero871015/LeetCode",
		text		: "Leet code的解題心得，包含Code和核心概念講解。陸續更新中(理論上</br>\
					LeetCode problem solving, including code and key concept. Keep updating, theoretically..."
	},{
		year		: 2018,
		date 		: "1017",
		title       : "Data structure note",
		title_HTML	: "https://hackmd.io/@Zero871015/DSNote",
		text		: "資料結構筆記。意外地挺熱門的</br>\
					My data structure note. I did't expect that it will be so popular."
	},
];

function MakePapers()
{

}

function MakeList()
{
	for (var i = 0; i < articles.length; i++) {
		if(i==0) document.write("<li>\n");
		else document.write("<li>\n");

		document.write("<p class=\"date\"><a href=\"#\">");
		document.write(articles[i].year);
		document.write("<b>");
		document.write(articles[i].date);
		document.write("</b></a></p>\n");

		document.write("<h2><a href=\"");
		document.write(articles[i].title_HTML);
		document.write("\" target =\"_blank\">");
		document.write(articles[i].title);
		document.write("</a></h2>\n");

		document.write("<p>\n");
		document.write(articles[i].text);
		document.write("\n</p>");

		document.write("</li>\n");
	}
};