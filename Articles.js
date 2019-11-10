var articles = [
	{
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