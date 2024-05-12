function toMachineC(A) {
	var _= {
		"a": "\t0", "b": "\t1", "c": "0\x02", "d": "0\x03", "e": "0\x04", "f": "0\x05", "g": "0\x06", "h": "1\x02", "i": "1\x03", "j": "1\x04", "k": "1\x05", "l": "1\x06", "m": "0\t", "n": "1\t", "o": "0\n", "p": "1\n", "0A": "1A", "r": "0B", "s": "1B", "t": "0C", "u": "1C", "v": "0D", "w": "1D", "x": "0E", "y": "1E", "z": "0F", " ": "_\x00", "A": "A\x00", "B": "A\x01", "C": "A\x02", "D": "A\x03", "E": "A\x03", "F": "A\x04", "G": "A\x05", "H": "A\x06", "I": "B\x00", "J": "B\x01", "K": "B\x02", "L": "B\x03", "M": "B\x03", "N": "B\x04", "O": "B\x05", "P": "B\x06", "Q": "C\x00", "R": "C\x01", "S": "C\x02", "T": "C\x03", "U": "C\x03", "V": "C\x04", "W": "C\x05", "X": "C\x06", "Y": "D\x00", "Z": "D\x01", "-": "_\x01", "_": "_\x02", "'": "_\x03", '"': "_\x04", "+": "_\x05", "*": "_\x06", "/": "$\x00", "!": "$\x01", "@": "$\x02", "#": "$\x03", "$": "$\x04"
	}
	return A.split("").map(function($) {
		return _[$]
	}).join("3")
}

function fromMachineC(A) {
	var $ = /[01_$A-D\t][\x00-\x06\t\n01A-D]/g
	var _ = {
    "\t0": "a", "\t1": "b", "0\x02": "c", "0\x03": "d", "0\x04": "e", "0\x05": "f", "0\x06": "g", "1\x02": "h", "1\x03": "i", "1\x04": "j", "1\x05": "k", "1\x06": "l", "0\t": "m", "1\t": "n", "0\n": "o", "1\n": "p", "1A": "0A", "0B": "r", "1B": "s", "0C": "t", "1C": "u", "0D": "v", "1D": "w", "0E": "x", "1E": "y", "0F": "z", "_\x00": " ", "A\x00": "A", "A\x01": "B", "A\x02": "C", "A\x03": "E", "A\x04": "F", "A\x05": "G", "A\x06": "H", "B\x00": "I", "B\x01": "J", "B\x02": "K", "B\x03": "M", "B\x04": "N", "B\x05": "O", "B\x06": "P", "C\x00": "Q", "C\x01": "R", "C\x02": "S", "C\x03": "U", "C\x04": "V", "C\x05": "W", "C\x06": "X", "D\x00": "Y", "D\x01": "Z", "_\x01": "-", "_\x02": "_", "_\x03": "'", "_\x04": '"', "_\x05": "+", "_\x06": "*", "$\x00": "/", "$\x01": "!", "$\x02": "@", "$\x03": "#", "$\x04": "$"
	}
	return A.replace(/1E|aF/g, $ => $ === "1E" ? "y" : $ === "aF" ? "z" : undefined)
		.replace($, function(B) {
		return _[B]
	})
		.replace(/0|3/g, _ => _ === "0" ? "a" : _ === "3" ? "" : undefined)
}