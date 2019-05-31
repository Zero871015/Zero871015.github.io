var articles = [
	{
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
		title_HTML	: "https://hackmd.io/s/Bk9rcmQjE",
		text		: "Leet code的解題心得，包含Code和核心概念講解。陸續更新中(理論上</br>\
					LeetCode problem solving, including code and key concept. Keep updating, theoretically..."
	},{
		year		: 2018,
		date 		: "1223",
		title       : "Data structure note",
		title_HTML	: "https://hackmd.io/BRjtSNXdR8O7G9xRf6Keuw",
		text		: "資料結構筆記。意外地挺熱門的</br>\
					My data structure note. I did't expect that it will so popular."
	},
];

function MakeList()
{
	for (var i = 0; i < articles.length; i++) {
		document.write("<li>\n");

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