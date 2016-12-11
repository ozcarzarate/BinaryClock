function whatTimeIsIt() {
	var now = new Date(),
		currentTime = document.getElementById("CurrentTime"),
		nowHourBinary = now.getHours().toString(2),
		nowHourBinaryWithZero = "000000" + nowHourBinary,
		nowHour = nowHourBinaryWithZero.substr(nowHourBinary.length, 6),
		hourString = "",
		nowMinuteBinary = now.getMinutes().toString(2),
		nowMinuteBinaryWithZero = "000000" + nowMinuteBinary,
		nowMinute = nowMinuteBinaryWithZero.substr(nowMinuteBinary.length, 6),
		minuteString = "",
		nowSecondBinary = now.getSeconds().toString(2),
		nowSecondBinaryWithZero = "000000" + nowSecondBinary,
		nowSecond = nowSecondBinaryWithZero.substr(nowSecondBinary.length, 6),
		secondString = "",
		i = 0,
		biginnerElement = document.getElementById("biginner"),
		intermediateElement = document.getElementById("intermediate"),
		advancedElement = document.getElementById("advanced"),
		currentHourElement = document.getElementById("currentHour"),
		currentMinuteElement = document.getElementById("currentMinute"),
		currentSecondElement = document.getElementById("currentSecond"),
		hoursLabel = document.getElementById("hoursLabel"),
		minutesLabel = document.getElementById("minutesLabel"),
		secondsLabel = document.getElementById("secondsLabel");

	//reverse the binary values to use them for "pow" function
	nowHour = nowHour.split("").reverse().join("");
	nowMinute = nowMinute.split("").reverse().join("");
	nowSecond = nowSecond.split("").reverse().join("");

	for (; i < 6; i++) {
		var element = document.getElementById("HN" + i.toString());
		setLegends(biginnerElement, intermediateElement, element);

		element = document.getElementById("H" + i.toString());
		if (nowHour.substr(i, 1) === "1") {
			element.setAttribute("class", "green lowTop");
			hourString = Math.pow(2, i).toString() + "+" + hourString;
		}
		else {
			if (i === 5) {
				element.setAttribute("class", "white lowTop");
			}
			else {
				element.setAttribute("class", "gray lowTop");
			}
		}

		element = document.getElementById("MN" + i.toString());
		setLegends(biginnerElement, intermediateElement, element);

		element = document.getElementById("M" + i.toString());
		if (nowMinute.substr(i, 1) === "1") {
			element.setAttribute("class", "green lowTop");
			minuteString = Math.pow(2, i).toString() + "+" + minuteString;
		}
		else {
			element.setAttribute("class", "gray lowTop");
		}

		element = document.getElementById("SN" + i.toString());
		setLegends(biginnerElement, intermediateElement, element);

		element = document.getElementById("S" + i.toString());
		if (nowSecond.substr(i, 1) === "1") {
			element.setAttribute("class", "green lowTop");
			secondString = Math.pow(2, i).toString() + "+" +secondString;
		}
		else {
			element.setAttribute("class", "gray lowTop");
		}
	}

	if (biginnerElement.checked || intermediateElement.checked) {
		currentHourElement.innerHTML = hourString.substr(0, hourString.length - 1) + "=" + now.getHours().toString();
		currentMinuteElement.innerHTML = minuteString.substr(0, minuteString.length - 1) + "=" + now.getMinutes().toString();
		currentSecondElement.innerHTML = secondString.substr(0, secondString.length - 1) + "=" + now.getSeconds().toString();
	}
	else {
		//Advanced Mode
		currentHourElement.innerHTML = "&nbsp;";
		currentMinuteElement.innerHTML = "&nbsp;";
		currentSecondElement.innerHTML = "&nbsp;";
	}

	if (biginnerElement.checked) {
		currentTime.innerHTML = now.toTimeString();
		hoursLabel.setAttribute("class", "black lowTop");
		minutesLabel.setAttribute("class", "black lowTop");
		secondsLabel.setAttribute("class", "black lowTop");
	}
	else {
		//Intermediate or Advanced Mode
		currentTime.innerHTML = "&nbsp;";
		hoursLabel.setAttribute("class", "white lowTop");
		minutesLabel.setAttribute("class", "white lowTop");
		secondsLabel.setAttribute("class", "white lowTop"); 
	}
};
window.onload = setInterval(whatTimeIsIt, 1000);

function setLegends(firstElement, secondElement, elementToModify) {
    if (firstElement.checked || secondElement.checked) {
        elementToModify.setAttribute("class", "black highTop");
    }
    else {
        elementToModify.setAttribute("class", "white highTop");
    }
};