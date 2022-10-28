module.exports = {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),
	allBtn: document.createElement("button"),
	completeBtn: document.createElement("button"),
	notCompleteBtn: document.createElement("button"),


	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application"

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.classList.add("fa", "fa-plus-circle");
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
		this.allBtn.textContent = "ALL";
		this.allBtn.classList.add("allBtn");
		this.completeBtn.textContent = "COMPLETE";
		this.completeBtn.classList.add("completeBtn");
		this.notCompleteBtn.textContent = "notComplete";
		this.notCompleteBtn.classList.add("notCompleteBtn");
	},

	appendElements() {
		root.append(this.title, this.subTitle, this.form, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn,this.allBtn,this.completeBtn,this.notCompleteBtn);
	},

	toHTML(id, value, state = false) {
		this.listsBlock.innerHTML += `
			<div class="listsBlockItem">
				<div class="listsBlockItemContent">
					<span>${id}</span>
					<input type="text" value="${value}" readonly>
				</div>
				<div class="buttons">
					<input type="checkbox" name="item${id}" ${state ? "checked" : ""}>
					<button class="removeBtn fa fa-trash"></button>
					<button class="editBtn fa fa-pencil"></button>
					<button class="saveBtn fa fa-save"></button>
				</div>
			</div>
		`;
	},

	start() {
		this.elementOptions();
		this.appendElements();
	}
};