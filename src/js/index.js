"use strict";

const UI = require("./modules/ui");
const POST = require("./modules/postMethod");
const GET = require("./modules/getMethod");
const PUT = require("./modules/putMethod");
const DELETE = require("./modules/deleteMethod");
const COMPLETE = require("./modules/complete");

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos";

const {form, screenInput, listsBlock} = UI;

UI.start();
POST(form, screenInput, url);


async function test () {
	await GET(
            UI,
            url,
            listsBlock,
    		document.querySelectorAll("button"),
        );
            
	PUT(
		document.querySelectorAll(".editBtn"),
		document.querySelectorAll(".saveBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url,
	);
	DELETE(
		document.querySelectorAll(".removeBtn"),
		url
	);
	COMPLETE(url, document.querySelectorAll(".buttons input"), document.querySelectorAll(".listsBlockItemContent"));
}

test();