$(document).ready(function() {
	
	var counter = 0;
	
	function erstelleZettel() {
		document.body.appendChild(erstelleInhalt());
	}
	
	function erstelleInhalt() {
		
		var zettel = document.createElement("div");
		zettel.classList.add("col-md-4"); 
		
		var uberschrift = document.createElement("h2");
		uberschrift.contentEditable = "true";
		uberschrift.innerText = "Leerer Zettel";
		zettel.appendChild(uberschrift);
		
		var fortschrittNr = document.createElement("h3");
		fortschrittNr.innerText = " (0/1)";
		zettel.appendChild(fortschrittNr);
		
		zettel.appendChild(erstelleBalken());

		var liste = document.createElement("div");
		var tabelle = document.createElement("table");
		var zeile = erstelleZeile();
		
		tabelle.appendChild(zeile);
		liste.appendChild(tabelle);
		zettel.appendChild(liste);
		
		var loeschenButton = document.createElement("button");
		loeschenButton.classList.add("delete")
		loeschenButton.innerText = "Löschen";
		zettel.appendChild(loeschenButton);
		
		var hinzufuegenButton = document.createElement("button");
		hinzufuegenButton.classList.add("add")
		hinzufuegenButton.innerText = "Hinzufügen";
		zettel.appendChild(hinzufuegenButton);
		
		return zettel;
	}
	
	function erstelleZeile() {
		
		var zeile = document.createElement("tr");
		var spalte1 = document.createElement("th");
		var spalte2 = document.createElement("th");
		var spalte3 = document.createElement("th");
		
		var checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		spalte1.appendChild(checkBox);
		zeile.appendChild(spalte1);
		
		var listenEintrag = document.createElement("p");
		listenEintrag.classList.add("ongoing");
		listenEintrag.contentEditable = "true";
		listenEintrag.innerText = "Leerer Eintrag";
		spalte2.appendChild(listenEintrag);
		zeile.appendChild(spalte2);
		
		
		var zeileLoeschenButton = document.createElement("button");
		zeileLoeschenButton.classList.add("delRow");
		zeileLoeschenButton.innerText = "X";
		spalte3.appendChild(zeileLoeschenButton);
		zeile.appendChild(spalte3);
		
		return zeile;
		
		
	}
	
	function erstelleBalken() {
		
		var balken = document.createElement("div");
		balken.classList.add("bg");
		
		var fortschritt = document.createElement("div");
		fortschritt.classList.add("progress");
		balken.appendChild(fortschritt);
		
		return balken;
		
	}
	
/*	function zeileLoeschenListener(val, max) {
		$(".delRow").click(function() {
			if(this.previousSibling.previousSibling.checked) {
				if(val > 0){
					val -= 1;
				}
			}
			
			if(max > 0){
				max -= 1;
			}
			alert(val + "," + max);
			
			this.parentNode.parentNode.previousSibling.previousSibling.innerText = " (" + val + "/" + max + ")";
			if(max != 0){
				this.parentNode.parentNode.previousSibling.firstChild.style.width = val/max * 100 + '%';
			}else{
				this.parentNode.parentNode.previousSibling.firstChild.style.width = 0 + '%';
			}
			this.parentNode.remove();
			stopPropagation();

		});
	}*/
	
/*	function checkBoxListener(val, max) {
		$("input").click(function() {
			if(this.checked){
				val += 1;
			}
			if(!this.checked){
				val -= 1;
			}
			alert(val + "," + max);
			this.parentNode.parentNode.previousSibling.previousSibling.innerText = " (" + val + "/" + max + ")";
			this.parentNode.parentNode.previousSibling.firstChild.style.width = val/max * 100 + '%';
			stopPropagation();
		});
	}*/
	
	
	$("header button").click(function() {
		
		var tester = false;
		var val = 0;
		var max = 1;
		
		counter += 1;
		
		erstelleZettel();
		
		this.previousSibling.previousSibling.style.opacity = "0";
		
		$(".add").click(function() {
			
			max += 1;
			
			this.previousSibling.previousSibling.previousSibling.previousSibling.innerText = " (" + val + "/" + max + ")";
			this.previousSibling.previousSibling.previousSibling.firstChild.style.width = val/max * 100 + '%';
			
			if(!tester){
				this.previousSibling.previousSibling.firstChild.appendChild(erstelleZeile());
				
				$(".delRow").click(function() {
					if(this.parentNode.previousSibling.previousSibling.firstChild.checked) {
						if(val > 0){
							val -= 1;
						}
					}
					
					if(max > 0){
						max -= 1;
					}
					
					this.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.innerText = " (" + val + "/" + max + ")";
					if(max != 0){
						this.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.style.width = val/max * 100 + '%';
					}else{
						this.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.style.width = 0 + '%';
					}
					this.parentNode.parentNode.remove();
					stopPropagation();

				});
				
				$("input").click(function() {
					if(this.checked){
						val += 1;
						this.parentNode.nextSibling.firstChild.classList.remove("ongoing");
						this.parentNode.nextSibling.firstChild.classList.add("finished");
					}
					if(!this.checked){
						val -= 1;
						this.parentNode.nextSibling.firstChild.classList.remove("finished");
						this.parentNode.nextSibling.firstChild.classList.add("ongoing");
					}
					this.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.innerText = " (" + val + "/" + max + ")";
					this.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.style.width = val/max * 100 + '%';
					stopPropagation();
				});
			}
			stopPropagation();
			tester = true;
		});

		$(".delRow").click(function() {
			if(this.parentNode.previousSibling.previousSibling.firstChild.checked) {
				if(val > 0){
					val -= 1;
				}
			}
			
			if(max > 0){
				max -= 1;
			}
			
			this.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.innerText = " (" + val + "/" + max + ")";
			if(max != 0){
				this.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.style.width = val/max * 100 + '%';
			}else{
				this.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.style.width = 0 + '%';
			}
			this.parentNode.parentNode.remove();
			stopPropagation();

		});

		$(".delete").click(function() {
			
			counter -= 1;
			
			if(counter == 0) {
				this.parentNode.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.style.opacity = "1";
			}
			
			this.parentNode.remove();
			stopPropagation();

		});
		
		$("input").click(function() {
			if(this.checked){
				val += 1;
				this.parentNode.nextSibling.firstChild.classList.remove("ongoing");
				this.parentNode.nextSibling.firstChild.classList.add("finished");
			}
			
			if(!this.checked){
				val -= 1;
				this.parentNode.nextSibling.firstChild.classList.remove("finished");
				this.parentNode.nextSibling.firstChild.classList.add("ongoing");
			}
			this.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.innerText = " (" + val + "/" + max + ")";
			this.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.style.width = val/max * 100 + '%';
			stopPropagation();
		});
		
		
	});
	
	
	
});
	
	
	
