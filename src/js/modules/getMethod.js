module.exports = async function (ui, url,listsBlock,btn) {
	await fetch(url)
	.then(data => data.json())
	.then(data => data.forEach(obj => {
		btn.forEach(button => {
			button.addEventListener("click", () => {
				listsBlock.innerHTML = "";
				if (button.classList.contains("allBtn")) {
					listsBlock += ui.toHTML(obj.id, obj.title, obj.isComplete);
				} else if (button.classList.contains("completeBtn")) {
					if (obj.isComplete) {
						listsBlock += ui.toHTML(obj.id, obj.title, obj.isComplete);
					}
				} else if (button.classList.contains("notCompleteBtn")) {
					if (!obj.isComplete) {
						listsBlock += ui.toHTML(obj.id, obj.title, obj.isComplete);
					}
				}
			});
		});
		ui.toHTML(obj.id, obj.title, obj.isComplete);
}));
}