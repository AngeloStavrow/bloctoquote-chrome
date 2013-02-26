// Bloctoquote Chrome Extension

// Set up the context menu item upon installation.
chrome.contextMenus.create({
	"id": "bq",
	"title": "Create Blockquote",
	"contexts": ["page", "selection"]
});

chrome.contextMenus.onClicked.addListener(clickHandler);

function clickHandler(info, tab)  {
	var pageLink = info.pageUrl;
	var pageTitle = tab.title;
	var outputText = unescape('{% blockquote Source ' + pageLink + ' ' + pageTitle + ' %}\r\n' + escape(info.selectionText) + '\r\n' + '{% endblockquote %}');
	console.log(outputText);
	
	bg = chrome.extension.getBackgroundPage();
	clipboardholder= bg.document.getElementById("clipboardholder");
	clipboardholder.style.display = "block";
	clipboardholder.value = outputText;
	clipboardholder.select();
	bg.document.execCommand("Copy");
	clipboardholder.style.display = "none";
}
